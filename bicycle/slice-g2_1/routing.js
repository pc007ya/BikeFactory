/** Synthetic G1 route topology. Coordinates/metres and capacities are proposal assumptions. */
export function makeDefaultNetworks(){
 return {
  human:{nodes:{H0:[0,9],HB:[0,11],HP:[3,9],HA:[9,9],HQ:[15,9],PW:[3,10],AW:[9,10],QW:[15,10],'P-OP':[3,7.5],'A-OP':[9,7.5],'Q-OP':[15,7.5]},edges:[['H0','HB'],['H0','HP'],['HP','HA'],['HA','HQ'],['HP','PW'],['HA','AW'],['HQ','QW'],['HP','P-OP'],['HA','A-OP'],['HQ','Q-OP']]},
  agv:{nodes:{'V-HOME':[0,2],VP:[3,2],VA:[9,2],VQ:[15,2],VJ:[18,2],'P-PORT':[3,4.5],'A-PORT':[9,4.5],'Q-PORT':[15,4.5],'V-EXIT':[18,4.5],'V-SCRAP':[18,.5]},edges:[['V-HOME','VP'],['VP','VA'],['VA','VQ'],['VQ','VJ'],['VP','P-PORT'],['VA','A-PORT'],['VQ','Q-PORT'],['VJ','V-EXIT'],['VJ','V-SCRAP']]}
 };
}
export const edgeId=(a,b)=>[a,b].sort().join('|');
const clone=x=>JSON.parse(JSON.stringify(x));
const validId=x=>typeof x==='string'&&x.length>0&&!/[|:]/.test(x);

/** Route rights only. Core owns motion, nodes/bays, timestamps, and safe-stop semantics. */
export class Routing{
 constructor(config={networks:makeDefaultNetworks()},emit=()=>{}){
  this.emit=emit;this.networks=clone(config.networks||config);this.graphs={};this.locks={};this.reservations={};this.blocked={};this.closures={};this.lastReason=null;
  for(const [name,g] of Object.entries(this.networks)){
   if(!validId(name)||!g?.nodes||!Array.isArray(g.edges))throw Error('Invalid network');
   const adjacency={};for(const [id,p] of Object.entries(g.nodes)){if(!validId(id)||!Array.isArray(p)||p.length!==2||!p.every(Number.isFinite))throw Error('Invalid node');adjacency[id]=[];}
   const ids=new Set();for(const pair of g.edges){if(!Array.isArray(pair)||pair.length!==2)throw Error('Invalid edge');const [a,b]=pair;if(!adjacency[a]||!adjacency[b]||a===b)throw Error('Invalid edge endpoints');const id=edgeId(a,b);if(ids.has(id))throw Error('Duplicate edge');ids.add(id);const distance=Math.hypot(g.nodes[a][0]-g.nodes[b][0],g.nodes[a][1]-g.nodes[b][1]);if(!(distance>0))throw Error('Zero length edge');adjacency[a].push({to:b,id,distance});adjacency[b].push({to:a,id,distance});}
   for(const edges of Object.values(adjacency))edges.sort((a,b)=>a.to.localeCompare(b.to));this.graphs[name]={adjacency,ids};
  }
 }
 _fail(code,detail={}){this.lastReason={code,...detail};return null;}
 _key(network,id){return `${network}:${id}`;}
 _resolve(raw){if(typeof raw!=='string')throw Error('Invalid edge ID');const colon=raw.indexOf(':');if(colon>=0){const network=raw.slice(0,colon),id=raw.slice(colon+1);if(!this.graphs[network]?.ids.has(id))throw Error('Unknown edge');return {network,id,key:raw};}const names=Object.keys(this.graphs).filter(n=>this.graphs[n].ids.has(raw));if(names.length!==1)throw Error(names.length?'Ambiguous edge ID':'Unknown edge');return {network:names[0],id:raw,key:this._key(names[0],raw)};}
 plan(network,from,to,speed){
  if(!Number.isFinite(speed)||speed<=0)throw Error('Speed must be positive');const graph=this.graphs[network];if(!graph)return this._fail('UNKNOWN_NETWORK',{network});if(!graph.adjacency[from]||!graph.adjacency[to])return this._fail('UNKNOWN_NODE',{network,from,to});
  const distance=Object.fromEntries(Object.keys(graph.adjacency).map(n=>[n,Infinity])),paths={};distance[from]=0;paths[from]=[from];const open=new Set(Object.keys(graph.adjacency));
  while(open.size){const a=[...open].sort((x,y)=>distance[x]-distance[y]||(paths[x]?.join('\0')||x).localeCompare(paths[y]?.join('\0')||y))[0];if(!Number.isFinite(distance[a]))break;open.delete(a);if(a===to)break;for(const e of graph.adjacency[a]){if(!open.has(e.to))continue;const d=distance[a]+e.distance,p=[...paths[a],e.to];if(d<distance[e.to]-1e-9||(Math.abs(d-distance[e.to])<1e-9&&p.join('\0')<(paths[e.to]||[]).join('\0'))){distance[e.to]=d;paths[e.to]=p;}}}
  if(!paths[to])return this._fail('NO_PATH',{network,from,to});const nodes=paths[to],segments=nodes.slice(1).map((b,i)=>{const a=nodes[i],d=Math.hypot(this.networks[network].nodes[a][0]-this.networks[network].nodes[b][0],this.networks[network].nodes[a][1]-this.networks[network].nodes[b][1]);return {from:a,to:b,edge:edgeId(a,b),distance:d,durationMs:Math.ceil(d/speed*1000)};});this.lastReason=null;
  return {network,from,to,speed,nodes,points:nodes.map(n=>[...this.networks[network].nodes[n]]),edges:segments.map(s=>s.edge),segments,distance:distance[to],durationMs:segments.reduce((n,s)=>n+s.durationMs,0)};
 }
 reserve(owner,network,from,to,speed){const p=this.reservePaths(owner,network,[{from,to,speed}]);return p?.[0]||null;}
 reserveJourney(owner,network,waypoints,speed){
  if(!Array.isArray(waypoints)||waypoints.length<2)throw Error('Need two waypoints');const plans=this.reservePaths(owner,network,waypoints.slice(1).map((to,i)=>({from:waypoints[i],to,speed})));if(!plans)return null;return plans.length===1?plans[0]:this._combine(plans);
 }
 _combine(plans){return {network:plans[0].network,from:plans[0].from,to:plans.at(-1).to,legs:clone(plans),nodes:plans.flatMap((l,i)=>i?l.nodes.slice(1):l.nodes),edges:plans.flatMap(l=>l.edges),segments:plans.flatMap(l=>l.segments),distance:plans.reduce((n,l)=>n+l.distance,0),durationMs:plans.reduce((n,l)=>n+l.durationMs,0)};}
 reservePaths(owner,network,requests){
  if(typeof owner!=='string'||!owner)throw Error('Invalid owner');if(!Array.isArray(requests)||!requests.length)throw Error('Need path requests');const existing=this.reservations[owner];if(existing&&existing.network!==network)return this._fail('OWNER_NETWORK_MISMATCH',{owner,network});const plans=[];
  for(const request of requests){const p=this.plan(network,request.from,request.to,request.speed);if(!p)return null;plans.push(p);}
  const requestedEdges=[...new Set(plans.flatMap(p=>p.edges))];for(const id of requestedEdges){const key=this._key(network,id);if(this.blocked[key])return this._fail('ROUTE_BLOCKED',{network,edgeId:id,reason:this.blocked[key]});if(this.locks[key]&&this.locks[key]!==owner)return this._fail('ROUTE_BUSY',{network,edgeId:id,holder:this.locks[key]});}
  const lockedEdges=[...new Set([...(existing?.lockedEdges||[]),...requestedEdges])],allPlans=[...(existing?.plans||[]),...clone(plans)];for(const id of requestedEdges)this.locks[this._key(network,id)]=owner;
  this.reservations[owner]={owner,network,plans:allPlans,plan:allPlans.length===1?allPlans[0]:this._combine(allPlans),lockedEdges};this.lastReason=null;this.emit('ROUTE_RESERVED',{owner,network,edges:requestedEdges,from:plans[0].from,to:plans.at(-1).to});return clone(plans);
 }
 release(owner){const r=this.reservations[owner];if(!r)return false;for(const id of r.lockedEdges){const key=this._key(r.network,id);if(this.locks[key]!==owner)throw Error('Route ownership corrupt');}for(const id of r.lockedEdges)delete this.locks[this._key(r.network,id)];delete this.reservations[owner];this.emit('ROUTE_RELEASED',{owner,network:r.network,edges:[...r.lockedEdges]});return true;}
 /** Release passed edges only; caller must not release an edge needed again in a reserved journey. */
 releaseEdges(owner,ids){const r=this.reservations[owner];if(!r||!Array.isArray(ids))return false;const unique=[...new Set(ids)];if(unique.some(id=>!r.lockedEdges.includes(id)||this.locks[this._key(r.network,id)]!==owner))return false;for(const id of unique)delete this.locks[this._key(r.network,id)];r.lockedEdges=r.lockedEdges.filter(id=>!unique.includes(id));this.emit('ROUTE_EDGES_RELEASED',{owner,network:r.network,edges:unique});return true;}
 block(raw,reason='closed',blockId='default'){const e=this._resolve(raw);if(typeof reason!=='string'||!reason||typeof blockId!=='string'||!blockId)throw Error('Closure reason and ID required');this.closures[e.key]||={};this.closures[e.key][blockId]=reason;this.blocked[e.key]=Object.entries(this.closures[e.key]).sort().map(([id,r])=>`${id}: ${r}`).join('; ');this.emit('ROUTE_BLOCKED',{network:e.network,edgeId:e.id,blockId,reason,holder:this.locks[e.key]||null});}
 unblock(raw,blockId='default'){const e=this._resolve(raw);if(!this.closures[e.key]?.[blockId])return false;delete this.closures[e.key][blockId];if(Object.keys(this.closures[e.key]).length)this.blocked[e.key]=Object.entries(this.closures[e.key]).sort().map(([id,r])=>`${id}: ${r}`).join('; ');else{delete this.closures[e.key];delete this.blocked[e.key];}this.emit('ROUTE_UNBLOCKED',{network:e.network,edgeId:e.id,blockId});return true;}
 isBlocked(raw){const e=this._resolve(raw);return !!this.blocked[e.key];}
 blocking(owner){const r=this.reservations[owner];if(!r)return [];return r.lockedEdges.filter(id=>this.blocked[this._key(r.network,id)]).map(id=>({network:r.network,edgeId:id,reason:this.blocked[this._key(r.network,id)],blockIds:Object.keys(this.closures[this._key(r.network,id)]).sort()}));}
 canTravel(owner){const r=this.reservations[owner];if(!r){this._fail('NO_RESERVATION',{owner});return false;}for(const id of r.lockedEdges){const key=this._key(r.network,id);if(this.locks[key]!==owner){this._fail('OWNERSHIP_MISMATCH',{owner,edgeId:id});return false;}if(this.blocked[key]){this._fail('ROUTE_BLOCKED',{owner,network:r.network,edgeId:id,reason:this.blocked[key]});return false;}}this.lastReason=null;return true;}
 snapshot(){return clone({schema:1,networks:this.networks,locks:this.locks,reservations:this.reservations,blocked:this.blocked,closures:this.closures});}
 restore(snapshot){if(snapshot?.schema!==1)throw Error('Unsupported routing snapshot');const candidate=new Routing({networks:snapshot.networks});candidate.locks=clone(snapshot.locks);candidate.reservations=clone(snapshot.reservations);candidate.blocked=clone(snapshot.blocked);candidate.closures=clone(snapshot.closures||{});candidate.assertInvariants();this.networks=candidate.networks;this.graphs=candidate.graphs;this.locks=candidate.locks;this.reservations=candidate.reservations;this.blocked=candidate.blocked;this.closures=candidate.closures;this.lastReason=null;return this;}
 assertInvariants(){
  for(const [key,owner] of Object.entries(this.locks)){const e=this._resolve(key),r=this.reservations[owner];if(!r||r.network!==e.network||!r.lockedEdges.includes(e.id))throw Error('Orphan route lock');}
  for(const [owner,r] of Object.entries(this.reservations)){if(r.owner!==owner||!this.graphs[r.network]||new Set(r.lockedEdges).size!==r.lockedEdges.length)throw Error('Invalid reservation');for(const id of r.lockedEdges)if(!r.plan.edges.includes(id)||this.locks[this._key(r.network,id)]!==owner)throw Error('Missing route lock');}
  for(const key of Object.keys(this.blocked)){this._resolve(key);if(!Object.keys(this.closures[key]||{}).length)throw Error('Missing closure record');}for(const key of Object.keys(this.closures))if(!this.blocked[key])throw Error('Orphan closure record');return true;
 }
}
