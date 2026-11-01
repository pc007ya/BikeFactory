import {CART_DECK_Y} from './cart-datums.js?v=a523bf62b7df';
// Pure metre-based layout contract shared by planning and visual adapters.
export function compilePlantLayout(config){
let x=0;const stations=[],machines=[];
for(const [index,s] of (config.stations||[]).entries()){
const operations=s.operations||[],width=Math.max(3,...operations.map(o=>o.machines*1.75+.7)),depth=Math.max(3.7,operations.length*2.4+1.4),center=x+width/2;
stations.push({stationId:s.id,name:s.name,index,width,depth,position:[center,0,0]});
for(const [oi,o] of operations.entries())for(let i=0;i<o.machines;i++)machines.push({stationId:s.id,operationId:o.id,machineId:`${o.id}:${i+1}`,position:[center+(i-(o.machines-1)/2)*1.75,0,(oi-(operations.length-1)/2)*2.4],halfExtents:[.85,.95]});
x+=width+3;
}
const minX=Math.min(0,...stations.map(s=>s.position[0]-s.width/2)),maxX=Math.max(4,...stations.map(s=>s.position[0]+s.width/2)),maxDepth=Math.max(3.7,...stations.map(s=>s.depth));
const rearBoundary=Math.min(-2,...stations.map(s=>-s.depth/2))-1.1,warehouseAnchor=[(minX+maxX)/2,0,rearBoundary-2.8],offset=config.warehouse?.offsets?.['warehouse:cart']||[0,0];
const cartCenter=[warehouseAnchor[0]+2.85+offset[0],0,warehouseAnchor[2]+1.45+offset[1]],pickupOrigin=[cartCenter[0]+1.8,0,cartCenter[2]],dock=stations.length?[stations[0].position[0],0,stations[0].depth/2+1.6]:[0,0,0];
// Bounds read from unchanged warehouse GLB accessor minima/maxima and native translations.
const nativeBounds={
'warehouse:rack':{min:[-2.063448,0,-.538388],max:[2.063441,3.000003,.538389]},
'warehouse:pallet':{min:[-1.305077,.4500006,-.502874],max:[-.091841,.661121,.500001]},
'warehouse:cart':{min:[2.382149,0,.625943],max:[3.317851,.377406,2.274057]}};
const warehouseBounds=Object.entries(nativeBounds).map(([id,b])=>{const off=config.warehouse?.offsets?.[id]||[0,0],shift=[warehouseAnchor[0]+off[0],0,warehouseAnchor[2]+off[1]];return {id,hidden:config.warehouse?.hidden?.includes(id)||false,min:b.min.map((v,i)=>v+shift[i]),max:b.max.map((v,i)=>v+shift[i])}});
const rearAisle=-maxDepth/2-.75,leftCorridor=minX-2.2,frontAisle=maxDepth/2+2.2;
const pickupHeading=0,dropHeading=Math.PI/2;
const standAt=(origin,heading)=>[origin[0]-.225*Math.cos(heading)+.55*Math.sin(heading),0,origin[2]+.225*Math.sin(heading)+.55*Math.cos(heading)];
const pickupStand=standAt(pickupOrigin,pickupHeading),dropStand=standAt(dock,dropHeading),cartStand=[cartCenter[0],0,cartCenter[2]+1.03],warehouseKitPosition=[cartCenter[0],CART_DECK_Y,cartCenter[2]+.43],warehouseLoadPath=[cartStand,[pickupStand[0],0,cartStand[2]],pickupStand],stationHomes={},unloadPaths={};
for(const station of stations){const source=config.stations.find(s=>s.id===station.stationId),columns=Math.max(1,Math.floor((station.width-.5)/.75));for(let i=0;i<source.workers;i++){const row=Math.floor(i/columns),rowCount=Math.min(columns,source.workers-row*columns),home=[station.position[0]+(i%columns-(rowCount-1)/2)*.75,0,station.depth/2-.65+row*.9],id=`worker:${station.stationId}:${i+1}`;stationHomes[id]=home;if(station.index===0)unloadPaths[id]=[home,[home[0],0,station.depth/2+.6],[dropStand[0],0,station.depth/2+.6],dropStand]}}
const route=[pickupOrigin,[pickupOrigin[0],0,rearAisle],[leftCorridor,0,rearAisle],[leftCorridor,0,frontAisle],[dock[0],0,frontAisle],dock];
return {stations,machines,minX,maxX,maxDepth,rearBoundary,warehouseAnchor,cartCenter,pickupOrigin,dock,rearAisle,leftCorridor,frontAisle,route,warehouseBounds,pickupHeading,dropHeading,pickupStand,dropStand,dropOrigin:dock,stationHomes,unloadPaths,cartStand,warehouseHandlerHome:cartStand,warehouseKitPosition,warehouseLoadPath};
}
export const headingBetween=(a,b)=>Math.atan2(-(b[2]-a[2]),b[0]-a[0]);
export const shortestAngle=a=>Math.atan2(Math.sin(a),Math.cos(a));
