(()=>{var ud=i=>{throw TypeError(i)};var ll=(i,e,t)=>e.has(i)||ud("Cannot "+t);var K=(i,e,t)=>(ll(i,e,"read from private field"),t?t.call(i):e.get(i)),Rn=(i,e,t)=>e.has(i)?ud("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Kn=(i,e,t,n)=>(ll(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),se=(i,e,t)=>(ll(i,e,"access private method"),t);var hd=(i,e,t,n)=>({set _(s){Kn(i,e,s,t)},get _(){return K(i,e,n)}});var dd={schemaVersion:"1.0.0",scenarioId:"FRAME-DEMO",initialQuantity:12,qualityMode:"synthetic_pass",qualityReviewSeconds:2,maxReworkCount:3,defaultRecipeId:"demo_6061_full_route_v1",defaultKit:{orderId:"FRAME-DEMO-ORDER",frameSpecId:"DEMO-BIKE-FRAME",sizeCode:"M",drawingRevision:"DEMO-R1",surfaceCondition:"bare_clean_dry",recipeId:"demo_6061_full_route_v1",recipeVersion:"demo-v1",materialCompatibilityGroupId:"DEMO-6061",tubeLotIds:["DEMO-TUBE-001"],forgingLotIds:["DEMO-FORGING-001"],fillerLotId:"DEMO-FILLER-001",incomingTemperByComponent:{tubes:"unverified_demo",forgings:"unverified_demo"},alignmentRequired:!1,alignmentReviewRef:null},stations:[{id:"F01",name:"\u5916\u8CFC\u4F86\u6599\u8207\u9F4A\u5957",zoneId:"receiving",operation:"support",mode:"lot",cycleSeconds:8,capacity:8,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F02",name:"\u88C1\u5207\u8207\u7BA1\u7AEF\u914D\u5408",zoneId:"cutting",operation:"cutting",mode:"single",cycleSeconds:12,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F03",name:"\u9664\u6BDB\u908A\u8207\u710A\u524D\u6E05\u6F54",zoneId:"clean_prep",operation:"support",mode:"single",cycleSeconds:8,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F04",name:"\u9178\u6D17\uFF0F\u5316\u5B78\u6E05\u6D17\u524D\u8655\u7406",zoneId:"wet",operation:"acid_cleaning",mode:"batch",cycleSeconds:16,capacity:4,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F05",name:"\u6FD5\u5F8C\u6E05\u6F54\u4E7E\u71E5\u653E\u884C",zoneId:"wet_transition",operation:"support",mode:"batch",cycleSeconds:10,capacity:4,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F06",name:"\u593E\u6CBB\u5177\u3001\u9EDE\u56FA\u8207\u710A\u63A5",zoneId:"welding",operation:"welding",mode:"single",cycleSeconds:28,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F07",name:"\u710A\u5F8C\u54C1\u8CEA\u6AA2\u67E5",zoneId:"qa",operation:"support",mode:"single",cycleSeconds:8,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F08",name:"\u5E7E\u4F55\u6AA2\u67E5",zoneId:"metrology",operation:"support",mode:"single",cycleSeconds:8,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F09",name:"\u6821\u6B63",zoneId:"metrology",operation:"alignment",mode:"single",cycleSeconds:10,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F10",name:"\u71B1\u8655\u7406",zoneId:"thermal",operation:"heat_treatment",mode:"batch",cycleSeconds:45,capacity:4,parallelResources:1,bufferCapacity:32,maxWaitSeconds:45,allowPartial:!0,productionCycleMinutes:null},{id:"F11",name:"\u53D7\u63A7\u6253\u78E8\u4FEE\u6574",zoneId:"grinding",operation:"grinding",mode:"single",cycleSeconds:12,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F12",name:"\u6700\u7D42\u6E05\u6F54\u8207\u653E\u884C\u6AA2\u9A57",zoneId:"qa",operation:"support",mode:"single",cycleSeconds:10,capacity:1,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null},{id:"F13",name:"\u5408\u683C\u67B6\u5EAB\u8207\u7E3D\u88DD\u4EA4\u63A5",zoneId:"handoff",operation:"support",mode:"transfer",cycleSeconds:6,capacity:8,parallelResources:1,bufferCapacity:32,maxWaitSeconds:12,allowPartial:!0,productionCycleMinutes:null}],recipes:[{id:"demo_6061_full_route_v1",version:"demo-v1",name:"6061 \u5B8C\u6574\u710A\u5F8C\u71B1\u8655\u7406\u6982\u5FF5\uFF08\u5047\u8A2D\uFF09",enabledInDemo:!0,approvedForProduction:!1,materialCompatibilityGroups:["DEMO-6061"],steps:[{stepId:"r01",stationId:"F01",operationKey:"receive_and_kit"},{stepId:"r02",stationId:"F02",operationKey:"cut"},{stepId:"r03",stationId:"F03",operationKey:"deburr_clean"},{stepId:"r04",stationId:"F04",operationKey:"approved_preweld_acid_clean"},{stepId:"r05",stationId:"F05",operationKey:"rinse_dry_release"},{stepId:"r06",stationId:"F06",operationKey:"fixture_tack_weld"},{stepId:"r07",stationId:"F07",operationKey:"weld_inspect"},{stepId:"r08",stationId:"F08",operationKey:"postweld_geometry"},{stepId:"r09",stationId:"F10",operationKey:"solution_and_controlled_cooling",batchStage:"solution_and_controlled_cooling",nextState:"heat_processed_quality_hold",releaseGate:"batch_records_accepted_then_required_geometry_accepted"},{stepId:"r10",stationId:"F08",operationKey:"post_solution_geometry"},{stepId:"r11",stationId:"F09",operationKey:"authorized_alignment_if_needed",condition:"geometry_deviation_and_review_approved",ifNotNeeded:"skip_alignment_but_retain_required_geometry_records"},{stepId:"r12",stationId:"F08",operationKey:"post_alignment_geometry"},{stepId:"r13",stationId:"F10",operationKey:"artificial_age",batchStage:"artificial_age",nextState:"heat_processed_quality_hold",releaseGate:"batch_records_accepted_then_required_geometry_accepted"},{stepId:"r14",stationId:"F08",operationKey:"post_age_geometry"},{stepId:"r15",stationId:"F11",operationKey:"drawing_permitted_finish"},{stepId:"r16",stationId:"F12",operationKey:"final_clean_and_release"},{stepId:"r17",stationId:"F13",operationKey:"handoff"}]},{id:"supplier_7005_route_template_v1",version:"demo-v1",name:"7005 \u4F9B\u61C9\u5546\u6642\u6548\u8DEF\u7531\u7BC4\u672C",enabledInDemo:!1,approvedForProduction:!1,materialCompatibilityGroups:["DEMO-7005"],steps:[{stepId:"r01",stationId:"F01",operationKey:"receive_and_kit"},{stepId:"r02",stationId:"F02",operationKey:"cut"},{stepId:"r03",stationId:"F03",operationKey:"deburr_clean"},{stepId:"r04",stationId:"F04",operationKey:"approved_preweld_acid_clean"},{stepId:"r05",stationId:"F05",operationKey:"rinse_dry_release"},{stepId:"r06",stationId:"F06",operationKey:"fixture_tack_weld"},{stepId:"r07",stationId:"F07",operationKey:"weld_inspect"},{stepId:"r08",stationId:"F08",operationKey:"postweld_geometry"},{stepId:"r09",stationId:"F09",operationKey:"authorized_alignment_if_needed",condition:"geometry_deviation_and_review_approved",ifNotNeeded:"skip_alignment_but_retain_required_geometry_records"},{stepId:"r10",stationId:"F08",operationKey:"post_alignment_geometry"},{stepId:"r11",stationId:"F10",operationKey:"supplier_approved_age",batchStage:"supplier_approved_age",nextState:"heat_processed_quality_hold",releaseGate:"batch_records_accepted_then_required_geometry_accepted"},{stepId:"r12",stationId:"F08",operationKey:"post_age_geometry"},{stepId:"r13",stationId:"F11",operationKey:"drawing_permitted_finish"},{stepId:"r14",stationId:"F12",operationKey:"final_clean_and_release"},{stepId:"r15",stationId:"F13",operationKey:"handoff"}]}],logistics:{enabled:!0,fleet:1,batchSize:4,allowPartial:!0,maxWaitSeconds:20,travelSeconds:35,returnSeconds:35,loadSeconds:5,unloadSeconds:5,waypoints:[{x:56,z:3},{x:47,z:3},{x:47,z:-4},{x:35,z:-4}],speed:.8},qualityOutcomes:{}};var ks=Object.freeze(["frameSpecId","sizeCode","drawingRevision","surfaceCondition"]),Lm=Object.freeze(["purchased_frame","manufactured_qualified_frame"]),ul="\u6982\u5FF5\u6F14\u793A\uFF1A\u5DE5\u6642\u3001\u6279\u91CF\u8207\u54C1\u8CEA\u7D50\u679C\u70BA\u5408\u6210\u898F\u5283\u5047\u8A2D\uFF0C\u975E\u5BE6\u6E2C\u3001\u975E\u88FD\u7A0B\u64CD\u4F5C\u898F\u7BC4\u3002",Ie=i=>structuredClone(i);function ae(i,e){if(!i)throw new TypeError(e)}function dt(i,e){return ae(typeof i=="string"&&i.trim().length>0&&i.length<=160,`Invalid ${e}`),i}function _r(i,e,t=0,n=86400){return ae(Number.isFinite(i)&&i>=t&&i<=n,`Invalid ${e}`),i}function xn(i,e,t=1,n=1e4){return _r(i,e,t,n),ae(Number.isSafeInteger(i),`Invalid ${e}`),i}function li(i){return Object.fromEntries(ks.map(e=>[e,dt(i?.[e],e)]))}function os(i,e){return ks.every(t=>i[t]===e[t])}function va(i){return i&&typeof i=="object"&&(Object.freeze(i),Object.values(i).forEach(va)),i}function Nm(i,e){dt(i.id,"recipe id"),dt(i.version,"recipe version"),ae(i.approvedForProduction===!1,"Only non-production demonstration routes are supported"),ae(typeof i.enabledInDemo=="boolean","Invalid enabledInDemo"),ae(Array.isArray(i.materialCompatibilityGroups)&&i.materialCompatibilityGroups.length,"Missing material compatibility groups"),i.materialCompatibilityGroups.forEach(s=>dt(s,"material compatibility group")),ae(Array.isArray(i.steps)&&i.steps.length>=13&&i.steps.length<=100,"Incomplete or excessive manufacturing route");let t=new Set;i.steps.forEach((s,r)=>{dt(s.stepId,"step id"),dt(s.operationKey,"operation key"),ae(!t.has(s.stepId),"Duplicate route step id"),t.add(s.stepId),ae(e.has(s.stationId),"Unknown route station"),s.stationId==="F04"&&ae(i.steps[r+1]?.stationId==="F05","Chemical cleaning must be followed by drying"),["F09","F10"].includes(s.stationId)&&ae(i.steps[r+1]?.stationId==="F08","Alignment and each heat stage require geometry inspection"),s.stationId==="F10"&&dt(s.batchStage,"thermal batch stage"),s.stationId==="F13"&&ae(r===i.steps.length-1,"Handoff must be last"),s.stationId==="F12"&&ae(r===i.steps.length-2,"Final quality must immediately precede handoff")});for(let s of["F01","F02","F03","F04","F05","F06","F07","F08","F09","F10","F11","F12","F13"])ae(i.steps.some(r=>r.stationId===s),`Missing required station ${s}`);let n=s=>i.steps.findIndex(r=>r.stationId===s);for(let s of["F01","F02","F03","F04","F05","F06","F07","F09","F11","F12","F13"])ae(i.steps.filter(r=>r.stationId===s).length===1,`Unexpected duplicate operation ${s}`);ae(n("F02")<n("F03")&&n("F03")<n("F06"),"Cutting and cleaning must precede welding"),ae(n("F07")===n("F06")+1&&i.steps[n("F07")+1]?.stationId==="F08","Welding requires weld inspection and geometry before downstream work"),ae(i.steps.every((s,r)=>s.stationId!=="F10"||r>n("F07")&&r<n("F11")),"Heat stages must follow weld inspection and precede finishing"),ae(i.steps.every((s,r)=>!["F08","F09"].includes(s.stationId)||r<n("F11")),"Geometry/alignment gates must precede finishing"),ae(i.steps[0].stationId==="F01","Route must begin with incoming inspection"),ae(i.steps.at(-1).stationId==="F13"&&i.steps.at(-2).stationId==="F12","Missing final release gate")}function Bn(i){ae(i&&typeof i=="object"&&!Array.isArray(i),"Invalid frame configuration");let e=Ie(i);ae(e.schemaVersion==="1.0.0","Unsupported frame configuration schema"),dt(e.scenarioId,"scenario id"),xn(e.initialQuantity,"initial quantity",0),ae(["manual","synthetic_pass"].includes(e.qualityMode),"Invalid quality mode"),xn(e.qualityReviewSeconds,"quality review seconds",2,3600),xn(e.maxReworkCount,"max rework count",0,20),ae(Array.isArray(e.stations)&&e.stations.length===13,"Exactly F01\u2013F13 are required");let t=new Set;for(let r of e.stations){dt(r.id,"station id"),dt(r.name,"station name"),ae(/^F(0[1-9]|1[0-3])$/.test(r.id)&&!t.has(r.id),"Duplicate or invalid station id"),t.add(r.id);let o=r.id==="F01"?"lot":["F04","F05","F10"].includes(r.id)?"batch":r.id==="F13"?"transfer":"single";ae(r.mode===o,`Station ${r.id} must remain ${o}`),xn(r.cycleSeconds,"cycle seconds",1),xn(r.capacity,"station capacity",1,1e3),xn(r.parallelResources,"parallel resources",1,20),xn(r.bufferCapacity,"buffer capacity",1),xn(r.maxWaitSeconds,"batch wait",0),ae(typeof r.allowPartial=="boolean","Invalid partial batch policy"),ae(r.productionCycleMinutes===null||Number.isFinite(r.productionCycleMinutes)&&r.productionCycleMinutes>0,"Invalid production cycle minutes"),r.mode==="single"&&ae(r.capacity===1,"Single-part station capacity must be 1; use parallelResources"),["batch","lot"].includes(r.mode)&&!r.allowPartial&&ae(r.bufferCapacity>=r.capacity,"Full-only batches require waiting capacity at least as large as the batch"),["F04","F05","F10"].includes(r.id)&&ae(r.mode==="batch",`${r.id} must remain a batch operation`),r.id==="F13"&&ae(r.mode==="transfer","F13 must remain the released handoff")}ae(Array.isArray(e.recipes)&&e.recipes.length,"Missing routes");let n=new Set;for(let r of e.recipes)ae(!n.has(r.id),"Duplicate recipe id"),n.add(r.id),Nm(r,t);ae(e.recipes.some(r=>r.id===e.defaultRecipeId&&r.enabledInDemo),"Default route is not enabled in demo"),hl(e.defaultKit,e);let s=e.logistics;ae(s&&typeof s.enabled=="boolean","Invalid logistics enabled"),xn(s.fleet,"fleet",1,20),xn(s.batchSize,"transport batch size",1,1e3),ae(typeof s.allowPartial=="boolean","Invalid transport partial policy"),xn(s.maxWaitSeconds,"transport batch wait",0);for(let r of["travelSeconds","returnSeconds","loadSeconds","unloadSeconds"])xn(s[r],r,r.includes("Seconds")&&["travelSeconds","returnSeconds"].includes(r)?1:0);ae(Array.isArray(s.waypoints)&&s.waypoints.length>=2&&s.waypoints.length<=100,"Invalid logistics waypoints"),s.waypoints.forEach(r=>{_r(r.x,"waypoint x",-1e5,1e5),_r(r.z,"waypoint z",-1e5,1e5)}),_r(s.speed,"logistics speed",.01,100),ae(e.qualityOutcomes&&typeof e.qualityOutcomes=="object"&&!Array.isArray(e.qualityOutcomes),"Invalid quality outcomes");for(let[r,o]of Object.entries(e.qualityOutcomes))ae(t.has(r)&&["pass","hold"].includes(o),"Invalid quality outcome");return e}function ui(i={}){ae(i&&typeof i=="object"&&!Array.isArray(i),"Invalid configuration overrides");let e=Ie(dd),t={...e,...Ie(i),defaultKit:{...e.defaultKit,...Ie(i.defaultKit||{})},logistics:{...e.logistics,...Ie(i.logistics||{})}};if(i.stations){ae(Array.isArray(i.stations),"Invalid station overrides");let n=i.stations.map(s=>s.id);ae(new Set(n).size===n.length&&n.every(s=>e.stations.some(r=>r.id===s)),"Duplicate/unknown station override"),t.stations=e.stations.map(s=>({...s,...i.stations.find(r=>r.id===s.id)||{}}))}if(i.logistics?.speed!==void 0||i.logistics?.waypoints!==void 0){let n=t.logistics.waypoints.slice(1).reduce((s,r,o)=>s+Math.hypot(r.x-t.logistics.waypoints[o].x,r.z-t.logistics.waypoints[o].z),0);i.logistics.travelSeconds===void 0&&(t.logistics.travelSeconds=Math.max(1,Math.ceil(n/t.logistics.speed))),i.logistics.returnSeconds===void 0&&(t.logistics.returnSeconds=t.logistics.travelSeconds)}return Bn(t)}function hl(i,e){ae(i&&typeof i=="object"&&!Array.isArray(i),"Invalid purchased kit");let t=Ie(i);li(t),dt(t.orderId,"order id");for(let s of["recipeId","recipeVersion","materialCompatibilityGroupId","fillerLotId"])dt(t[s],s);let n=e.recipes.find(s=>s.id===t.recipeId);ae(n?.enabledInDemo&&n.version===t.recipeVersion,"Recipe is unavailable, disabled or has wrong version"),ae(n.materialCompatibilityGroups.includes(t.materialCompatibilityGroupId),"Material is not compatible with selected route");for(let s of["tubeLotIds","forgingLotIds"])ae(Array.isArray(t[s])&&t[s].length>0&&t[s].length<=100,`Missing ${s}`),t[s].forEach(r=>dt(r,s)),ae(new Set(t[s]).size===t[s].length,`Duplicate ${s}`);return ae(typeof t.alignmentRequired=="boolean","Invalid alignment requirement"),t.alignmentRequired&&dt(t.alignmentReviewRef,"alignment review reference"),t}function ba(i,e){return JSON.stringify([i.recipeId,i.recipeVersion,e.batchStage||e.operationKey,i.materialCompatibilityGroupId,[...i.tubeLotIds].sort(),[...i.forgingLotIds].sort()])}var nn,Ri,Ci,Ii,Pi,Hs,To=class{constructor(e){Rn(this,Pi);Rn(this,nn);Rn(this,Ri);Rn(this,Ci);Rn(this,Ii,0);Kn(this,nn,Ie(e)),Kn(this,Ri,Array.from({length:e.fleet},(t,n)=>({id:`FRAME-CARRIER-${n+1}`,phase:"idle",tripId:null,frameIds:[],startedAt:0,readyAt:0}))),Kn(this,Ci,[])}step(e,t){if(Kn(this,Ii,e),!!K(this,nn).enabled){for(let n of K(this,Ri)){let s=0;for(;n.phase!=="idle"&&n.readyAt<=e&&s++<6;){let r=K(this,Ci).find(o=>o.tripId===n.tripId);n.phase==="loading"?(t.dispatchTransfer(r.transferId),r.departedAt=e,se(this,Pi,Hs).call(this,n,"outbound",K(this,nn).travelSeconds,e)):n.phase==="outbound"?(r.arrivedAt=e,se(this,Pi,Hs).call(this,n,"unloading",K(this,nn).unloadSeconds,e)):n.phase==="unloading"?(t.receiveTransfer(r.transferId,r.spec),r.receivedAt=e,r.state="received",n.frameIds=[],se(this,Pi,Hs).call(this,n,"empty_return",K(this,nn).returnSeconds,e)):(n.phase==="empty_return"||n.phase==="loaded_return")&&(n.phase==="loaded_return"&&t.returnTransfer(r.transferId),r.returnedAt=e,r.state=r.state==="rejected"?"returned":"completed",n.phase="idle",n.tripId=null,n.frameIds=[],n.startedAt=e,n.readyAt=e)}}for(let n of K(this,Ri).filter(s=>s.phase==="idle")){let s=t.releasedFrames();if(!s.length)break;let r=new Map;for(let u of s){let h=JSON.stringify(li(u));r.has(h)||r.set(h,[]),r.get(h).push(u)}let o=[...r.values()].find(u=>u.length>=K(this,nn).batchSize||K(this,nn).allowPartial&&e-u[0].releasedAt>=K(this,nn).maxWaitSeconds);if(!o)continue;let a=li(o[0]),c=t.reserveReleasedFrames({orderId:"ASSEMBLY-STOCK",spec:a,quantity:Math.min(K(this,nn).batchSize,o.length)});if(!c)continue;let l={tripId:`${c.transferId}-TRIP`,transferId:c.transferId,vehicleId:n.id,frameIds:[...c.frameIds],spec:a,state:"active",startedAt:e,departedAt:null,arrivedAt:null,receivedAt:null,returnedAt:null,source:"synthetic-planning"};K(this,Ci).push(l),n.tripId=l.tripId,n.frameIds=[...l.frameIds],se(this,Pi,Hs).call(this,n,"loading",K(this,nn).loadSeconds,e),K(this,nn).loadSeconds===0&&(t.dispatchTransfer(l.transferId),l.departedAt=e,se(this,Pi,Hs).call(this,n,"outbound",K(this,nn).travelSeconds,e))}}}rejectTrip(e,t,n){dt(e,"trip id"),dt(t,"rejection reason");let s=K(this,Ci).find(o=>o.tripId===e);ae(s,"Unknown trip");let r=K(this,Ri).find(o=>o.tripId===e);return ae(r&&["loading","outbound","unloading"].includes(r.phase),"Only unreceived deliveries can be rejected"),n.rejectTransfer(s.transferId,t),s.state="rejected",s.rejectionReason=t,s.rejectedAt=K(this,Ii),se(this,Pi,Hs).call(this,r,"loaded_return",K(this,nn).returnSeconds,K(this,Ii)),Ie(s)}activeTripForTransfer(e){let t=K(this,Ci).find(n=>n.transferId===e);return t&&K(this,Ri).some(n=>n.tripId===t.tripId)?Ie(t):null}snapshot(){return{time:K(this,Ii),config:Ie(K(this,nn)),vehicles:K(this,Ri).map(e=>({...Ie(e),remaining:Math.max(0,e.readyAt-K(this,Ii)),progress:e.phase==="idle"?0:Math.min(1,(K(this,Ii)-e.startedAt)/Math.max(1,e.readyAt-e.startedAt))})),trips:Ie(K(this,Ci))}}};nn=new WeakMap,Ri=new WeakMap,Ci=new WeakMap,Ii=new WeakMap,Pi=new WeakSet,Hs=function(e,t,n,s){e.phase=t,e.startedAt=s,e.readyAt=s+n};var fd=["incoming","queued","processing","batch_wait","qc_hold","released","transfer","consumed","scrapped"],Ro=Symbol("managed-logistics-port"),Dm=0,zt,ye,Li,Ea,Po,ee,as,un,Cn,Co,xr,Ma,dl,Io,cs,Sa,pd,yr,md,gd,fl,pl,ml,_d,Gs,gl,vr=class{constructor(e=ui()){Rn(this,ee);Rn(this,zt);Rn(this,ye);Rn(this,Li);Rn(this,Ea,++Dm);Rn(this,Po,0);Kn(this,zt,va(Bn(e))),this.reset()}get config(){return Ie(K(this,zt))}get time(){return K(this,ye).time}get running(){return K(this,ye).running}get ready(){return this.releasedFrames()}start(){return K(this,ye).running=!0,this}pause(){return K(this,ye).running=!1,this}reset(){return hd(this,Po)._++,Kn(this,ye,{time:0,remainder:0,running:!1,sequence:0,frames:[],batches:[],jobs:[],transfers:[],consumptions:[],events:[],admitted:0,qualityOutcomes:Ie(K(this,zt).qualityOutcomes)}),Kn(this,Li,new To(K(this,zt).logistics)),K(this,zt).initialQuantity&&this.receiveKits({quantity:K(this,zt).initialQuantity}),this.snapshot()}configure(e){let t=va(Bn(e));return Kn(this,zt,t),this.reset()}receiveKits(e={}){ae(e&&typeof e=="object"&&!Array.isArray(e),"Invalid incoming lot");let t=xn(e.quantity??1,"kit quantity",1);ae(K(this,ye).frames.length+t<=1e4,"Demo limit is 10000 frame-equivalent kits");let{quantity:n,...s}=e,r=hl({...Ie(K(this,zt).defaultKit),...Ie(s)},K(this,zt)),o=[];for(let a=0;a<t;a++){let c=se(this,ee,as).call(this,"F"),l={...Ie(r),frameId:c,serial:c,supplySource:"manufactured_qualified_frame",status:"incoming",stationId:"F01",location:"factory_incoming",routeIndex:0,queuedAt:this.time,admittedAt:this.time,releasedAt:null,consumedAt:null,finalRelease:"not_released",routeStepInstances:[],thermalLoadIds:[],chemicalLoadIds:[],geometryCheckIds:[],nonconformances:[],nonconformanceIds:[],reworkCount:0,transferId:null,hold:null,blockedNextStationId:null,history:[]};K(this,ye).frames.push(l),K(this,ye).admitted++,se(this,ee,un).call(this,"purchased_kit_received",l),o.push(Ie(l))}return o}advance(e){if(_r(e,"elapsed seconds",0,604800),!this.running)return this.time;for(K(this,ye).remainder+=e;K(this,ye).remainder>=1-1e-9;)K(this,ye).remainder=Math.max(0,K(this,ye).remainder-1),se(this,ee,pd).call(this);return this.time}recordInspection(e,t){let n=se(this,ee,fl).call(this,t),s=se(this,ee,Cn).call(this,e);return ae(s.status==="qc_hold"&&s.hold?.kind==="inspection","Frame is not awaiting an individual inspection"),s.hold.inspectionAttempted=!0,n.result==="pass"?se(this,ee,ml).call(this,s,n.evidenceRef):(se(this,ee,cs).call(this,s).qualityState="quality_hold",s.nonconformances.some(r=>r.state==="open"&&r.stationId===s.stationId)||se(this,ee,pl).call(this,s,n.evidenceRef),se(this,ee,un).call(this,"quality_held",s,{stationId:s.stationId,evidenceRef:n.evidenceRef})),Ie(s)}recordBatchInspection(e,t){let n=se(this,ee,fl).call(this,t),s=K(this,ye).batches.find(o=>o.loadId===e);ae(s&&["processed_quality_hold","rejected_hold"].includes(s.qualityState),"Batch is not awaiting review");let r=s.memberFrameIds.map(o=>se(this,ee,Cn).call(this,o));ae(r.every(o=>o.status==="qc_hold"&&o.hold?.loadId===e),"Batch membership is no longer intact; engineering disposition required"),s.inspectionAttempted=!0,s.processRecordRef=n.evidenceRef,s.inspectedAt=this.time,s.qualityState=n.result==="pass"?"accepted":"rejected_hold";for(let o of r)n.result==="pass"?se(this,ee,ml).call(this,o,n.evidenceRef):(se(this,ee,cs).call(this,o).qualityState="quality_hold",o.hold.inspectionAttempted=!0,o.nonconformances.some(a=>a.state==="open"&&a.loadId===e)||se(this,ee,pl).call(this,o,n.evidenceRef,e),se(this,ee,un).call(this,"batch_quality_held",o,{loadId:e,stationId:s.stationId}));return Ie(s)}setQualityOutcome(e,t){ae(se(this,ee,Ma).call(this,e)&&e!=="F13"&&["pass","hold"].includes(t),"Invalid quality outcome"),K(this,ye).qualityOutcomes[e]=t}holdFrame(e,t="synthetic-quality-review"){dt(t,"hold reason");let n=se(this,ee,Cn).call(this,e);return ae(["qc_hold","released"].includes(n.status),"Only held or unreserved released frames can be quarantined"),n.status==="released"&&(n.routeIndex=se(this,ee,Co).call(this,n).steps.length-2,n.stationId="F12",n.status="qc_hold",n.location="factory_quality_hold",n.finalRelease="not_released",n.releasedAt=null,n.hold={kind:"inspection",recordId:se(this,ee,cs).call(this,n).recordId,inspectionAttempted:!0,reviewAt:this.time},se(this,ee,cs).call(this,n).qualityState="quality_hold"),n.hold.kind==="batch"?this.recordBatchInspection(n.hold.loadId,{result:"hold",evidenceRef:t}):this.recordInspection(e,{result:"hold",evidenceRef:t})}authorizeRework(e,{fromStepId:t,reviewRef:n,reason:s="synthetic-reviewed-rework",thermalRequalificationReviewRef:r=null}={}){dt(n,"engineering review reference"),dt(s,"rework reason");let o=se(this,ee,Cn).call(this,e),a=se(this,ee,Co).call(this,o),c=a.steps.findIndex(u=>u.stepId===t);ae(["qc_hold","released"].includes(o.status)&&!o.transferId,"Rework requires a held/unreserved frame"),ae(c>=0&&c<=o.routeIndex&&!["F10","F13"].includes(a.steps[c].stationId),"Invalid rework route; automatic/repeated thermal treatment is prohibited"),ae(o.reworkCount<K(this,zt).maxReworkCount,"Rework limit reached"),ae(o.hold?.kind!=="batch","Resolve whole-load review before individual rework"),o.routeStepInstances.some(u=>u.valid&&u.stationId==="F10"&&a.steps.findIndex(h=>h.stepId===u.stepId)>=c)&&dt(r,"explicit thermal requalification review reference"),o.reworkCount++,o.finalRelease="not_released",o.releasedAt=null;for(let u of o.routeStepInstances)a.steps.findIndex(h=>h.stepId===u.stepId)>=c&&(u.valid=!1,u.invalidatedByReview=n);for(let u of o.nonconformances.filter(h=>h.state==="open"))u.state="rework_authorized",u.reviewRef=n,u.resolvedAt=this.time;return o.routeIndex=c,o.hold=null,o.blockedNextStationId=null,a.steps[c].stationId==="F09"&&(o.alignmentRequired=!0,o.alignmentReviewRef=n),se(this,ee,un).call(this,"rework_authorized",o,{fromStepId:t,reviewRef:n,reason:s,thermalRequalificationReviewRef:r}),se(this,ee,yr).call(this,o),Ie(o)}scrapFrame(e,t){dt(t,"scrap review reference");let n=se(this,ee,Cn).call(this,e);ae(["qc_hold","released"].includes(n.status)&&!n.transferId,"Only held or unreserved frames can be scrapped"),ae(n.hold?.kind!=="batch","Resolve whole-load review before individual scrapping"),n.status="scrapped",n.location="scrap",n.finalRelease="not_released",n.hold=null;for(let s of n.nonconformances.filter(r=>r.state==="open"))s.state="scrapped",s.resolvedAt=this.time;return se(this,ee,un).call(this,"scrapped_after_review",n,{reviewRef:t}),Ie(n)}scrapBatch(e,t){dt(t,"batch scrap review reference");let n=K(this,ye).batches.find(r=>r.loadId===e);ae(n&&["processed_quality_hold","rejected_hold"].includes(n.qualityState),"Only a complete held load can be scrapped");let s=n.memberFrameIds.map(r=>se(this,ee,Cn).call(this,r));ae(s.every(r=>r.status==="qc_hold"&&r.hold?.loadId===e),"Batch members must remain intact for whole-load disposition"),n.qualityState="scrapped_after_review",n.dispositionReviewRef=t;for(let r of s){r.status="scrapped",r.location="scrap",r.finalRelease="not_released",r.hold=null,se(this,ee,cs).call(this,r).qualityState="scrapped";for(let o of r.nonconformances.filter(a=>a.state==="open"))o.state="scrapped",o.resolvedAt=this.time;se(this,ee,un).call(this,"batch_scrapped_after_review",r,{loadId:e,reviewRef:t})}return Ie(n)}releasedFrames(e=null){return e&&(e=li(e)),Ie(K(this,ye).frames.filter(t=>t.status==="released"&&(!e||os(t,e))).sort((t,n)=>t.releasedAt-n.releasedAt))}assemblyFrames(e=null){return e&&(e=li(e)),Ie(K(this,ye).frames.filter(t=>t.status==="transfer"&&t.location==="assembly_received"&&(!e||os(t,e))))}reserveReleasedFrames({quantity:e=1,spec:t,orderId:n,transferId:s=null}={}){xn(e,"reservation quantity",1,1e3);let r=li(t);dt(n,"reservation order id"),s!==null&&dt(s,"transfer id");let o=K(this,ye).transfers.find(u=>u.transferId===s);if(o)return ae(o.orderId===n&&o.frameIds.length===e&&os(o.spec,r),"Transfer id reused for a different request"),Ie(o);let a=K(this,ye).frames.filter(u=>u.status==="released"&&u.finalRelease==="accepted"&&!u.transferId&&os(u,r)).slice(0,e);if(a.length<e)return null;let c=s||se(this,ee,as).call(this,"X"),l={transferId:c,orderId:n,spec:r,frameIds:a.map(u=>u.frameId),state:"reserved",reservedAt:this.time,departedAt:null,receivedAt:null,consumedFrameIds:[],source:"manufactured_qualified_frame"};K(this,ye).transfers.push(l);for(let u of a)u.status="transfer",u.location="factory_reserved",u.transferId=c,se(this,ee,un).call(this,"transfer_reserved",u,{transferId:c});return Ie(l)}dispatchTransfer(e,t=null){let n=se(this,ee,Gs).call(this,e);if(se(this,ee,Io).call(this,e,t),["in_transit","received","consumed"].includes(n.state))return Ie(n);ae(n.state==="reserved","Transfer cannot depart from this state"),n.state="in_transit",n.departedAt=this.time;for(let s of n.frameIds){let r=se(this,ee,Cn).call(this,s);r.location="road_loaded",se(this,ee,un).call(this,"transfer_departed",r,{transferId:e})}return Ie(n)}receiveTransfer(e,t,n=null){let s=li(t),r=se(this,ee,Gs).call(this,e);if(se(this,ee,Io).call(this,e,n),ae(os(r.spec,s),"Receiver specification mismatch"),["received","consumed"].includes(r.state))return Ie(r);ae(r.state==="in_transit","Transfer is not in transit"),ae(r.frameIds.every(o=>se(this,ee,Cn).call(this,o).finalRelease==="accepted"),"Unreleased frame cannot be received"),r.state="received",r.receivedAt=this.time;for(let o of r.frameIds){let a=se(this,ee,Cn).call(this,o);a.location="assembly_received",se(this,ee,un).call(this,"assembly_stock_received",a,{transferId:e})}return Ie(r)}cancelTransfer(e){let t=se(this,ee,Gs).call(this,e);return t.state==="canceled"?Ie(t):(ae(!K(this,Li).activeTripForTransfer(e),"Managed deliveries must be rejected with rejectTrip so carrier and stock stay synchronized"),ae(t.state==="reserved","Only an undispatched reservation can be canceled"),t.state="canceled",se(this,ee,gl).call(this,t),Ie(t))}rejectTransfer(e,t,n=null){dt(t,"rejection reason");let s=se(this,ee,Gs).call(this,e);if(se(this,ee,Io).call(this,e,n),s.state==="returning")return Ie(s);ae(["reserved","in_transit"].includes(s.state),"Received/consumed transfers cannot be rejected"),s.state="returning",s.rejectionReason=t;for(let r of s.frameIds)se(this,ee,Cn).call(this,r).location="road_return_loaded";return Ie(s)}returnTransfer(e,t=null){let n=se(this,ee,Gs).call(this,e);return se(this,ee,Io).call(this,e,t),n.state==="returned"?Ie(n):(ae(n.state==="returning","Transfer is not returning"),n.state="returned",n.returnedAt=this.time,se(this,ee,gl).call(this,n),Ie(n))}rejectTrip(e,t){return K(this,Li).rejectTrip(e,t,se(this,ee,dl).call(this))}takeFrame(e,t,n){let s=li(e);dt(t,"assembly order id"),dt(n,"assembly vehicle serial");let r=JSON.stringify([t,n]),o=K(this,ye).consumptions.find(u=>u.requestKey===r);if(o)return ae(os(o.spec,s),"Consumption id reused with different specification"),Ie(o);let a=K(this,ye).frames.find(u=>u.status==="transfer"&&u.location==="assembly_received"&&u.finalRelease==="accepted"&&os(u,s));if(!a)return null;let c=se(this,ee,Gs).call(this,a.transferId);ae(c.state==="received","Frame transfer must be received before consumption"),a.status="consumed",a.location="assembly_consumed",a.consumedAt=this.time,a.assemblyOrderId=t,a.vehicleSerial=n,c.consumedFrameIds.push(a.frameId),c.consumedFrameIds.length===c.frameIds.length&&(c.state="consumed"),se(this,ee,un).call(this,"assembly_frame_consumed",a,{transferId:c.transferId,orderId:t,vehicleSerial:n});let l={requestKey:r,frameId:a.frameId,serial:a.frameId,transferId:c.transferId,orderId:t,vehicleSerial:n,spec:s,consumedAt:this.time,supplySource:"manufactured_qualified_frame",finalRelease:"accepted",synthetic:!0,trace:{tubeLotIds:Ie(a.tubeLotIds),forgingLotIds:Ie(a.forgingLotIds),thermalLoadIds:Ie(a.thermalLoadIds),chemicalLoadIds:Ie(a.chemicalLoadIds),geometryCheckIds:Ie(a.geometryCheckIds),routeStepInstances:Ie(a.routeStepInstances)}};return K(this,ye).consumptions.push(l),Ie(l)}snapshot(){let e=Object.fromEntries(fd.map(r=>[r,K(this,ye).frames.filter(o=>o.status===r).length])),t={};for(let r of K(this,ye).frames)t[r.location]=(t[r.location]||0)+1;e.admitted=K(this,ye).admitted,e.assemblyReady=t.assembly_received||0,e.rework=K(this,ye).frames.reduce((r,o)=>r+o.reworkCount,0);let n={},s={};for(let r of K(this,zt).stations){let o=K(this,ye).jobs.filter(u=>u.stationId===r.id),a=se(this,ee,Sa).call(this,r.id),c=K(this,ye).frames.filter(u=>u.stationId===r.id&&u.status==="qc_hold"),l=o.map(u=>({...Ie(u),remaining:Math.max(0,u.completedAt-this.time),progress:(this.time-u.startedAt)/(u.completedAt-u.startedAt),jobs:u.frameIds.map(h=>({frameId:h,serial:h}))}));s[r.id]=a.map(u=>u.frameId),n[r.id]={id:r.id,name:r.name,phase:o.length?"processing":c.length?"qc_hold":a.length?r.mode==="batch"?"batch_wait":"queued":"idle",remaining:l[0]?.remaining||0,progress:l[0]?.progress||0,jobs:l.flatMap(u=>u.jobs),queue:[...s[r.id]],heldFrameIds:c.map(u=>u.frameId),resources:l,capacity:r.capacity,parallelResources:r.parallelResources,bufferCapacity:r.bufferCapacity}}return{schemaVersion:"1.0.0",time:this.time,running:this.running,remainder:K(this,ye).remainder,safetyBadge:ul,qualityBadge:"\u6A21\u64EC\u54C1\u8CEA\u7D50\u679C\uFF0C\u975E\u5BE6\u6E2C",productionAuthorized:!1,counts:e,locations:t,stations:n,queues:s,frames:Ie(K(this,ye).frames),batches:Ie(K(this,ye).batches),transfers:Ie(K(this,ye).transfers),ready:this.releasedFrames(),assemblyReady:this.assemblyFrames(),logistics:K(this,Li).snapshot(),events:Ie(K(this,ye).events),consumptions:Ie(K(this,ye).consumptions),conservation:this.audit()}}audit(){let e=[],t=K(this,ye).frames,n=t.map(o=>o.frameId);n.length!==new Set(n).size&&e.push("duplicate_frame_id"),t.length!==K(this,ye).admitted&&e.push("admission_conservation_failed"),t.every(o=>fd.includes(o.status))||e.push("unknown_frame_state");for(let o of K(this,ye).batches){new Set(o.memberFrameIds).size!==o.memberFrameIds.length&&e.push("duplicate_batch_member");for(let a of o.memberFrameIds){let c=t.find(u=>u.frameId===a),l=c?.routeStepInstances.find(u=>u.loadId===o.loadId);(!l||ba(c,{batchStage:l.batchStage,operationKey:l.operationKey})!==o.compatibilityKey)&&e.push("incompatible_batch_member")}}let s=K(this,ye).jobs.flatMap(o=>o.frameIds);new Set(s).size!==s.length&&e.push("frame_on_multiple_resources");for(let o of t)o.status==="processing"!==s.includes(o.frameId)&&e.push("processing_ownership_mismatch"),["released","transfer","consumed"].includes(o.status)&&o.finalRelease!=="accepted"&&e.push("unreleased_supply"),o.status==="transfer"&&!K(this,ye).transfers.some(a=>a.transferId===o.transferId&&["reserved","in_transit","received","returning"].includes(a.state))&&e.push("orphan_transfer");let r=K(this,ye).consumptions.map(o=>o.frameId);return(new Set(r).size!==r.length||r.length!==t.filter(o=>o.status==="consumed").length)&&e.push("consumption_conservation_failed"),{ok:e.length===0,errors:[...new Set(e)],admitted:K(this,ye).admitted,accounted:t.length,unit:"frame_equivalent_kit_not_mass",purchasedFinishedFramesIncluded:!1}}};zt=new WeakMap,ye=new WeakMap,Li=new WeakMap,Ea=new WeakMap,Po=new WeakMap,ee=new WeakSet,as=function(e){return`${K(this,zt).scenarioId}-I${K(this,Ea)}-R${K(this,Po)}-${e}${String(++K(this,ye).sequence).padStart(6,"0")}`},un=function(e,t=null,n={}){let s={time:this.time,kind:e,frameId:t?.frameId??null,source:"synthetic-planning",...n};K(this,ye).events.push(s),t&&t.history.push(Ie(s))},Cn=function(e){let t=K(this,ye).frames.find(n=>n.frameId===e);return ae(t,"Unknown frame id"),t},Co=function(e){return K(this,zt).recipes.find(t=>t.id===e.recipeId)},xr=function(e){return se(this,ee,Co).call(this,e).steps[e.routeIndex]},Ma=function(e){return K(this,zt).stations.find(t=>t.id===e)},dl=function(){return{releasedFrames:()=>this.releasedFrames(),reserveReleasedFrames:e=>this.reserveReleasedFrames(e),dispatchTransfer:e=>this.dispatchTransfer(e,Ro),receiveTransfer:(e,t)=>this.receiveTransfer(e,t,Ro),rejectTransfer:(e,t)=>this.rejectTransfer(e,t,Ro),returnTransfer:e=>this.returnTransfer(e,Ro)}},Io=function(e,t){ae(!K(this,Li).activeTripForTransfer(e)||t===Ro,"Managed deliveries must use carrier/trip operations, not manual transfer operations")},cs=function(e){return e.routeStepInstances.findLast(t=>t.valid&&t.stepId===se(this,ee,xr).call(this,e)?.stepId)},Sa=function(e){return K(this,ye).frames.filter(t=>["queued","batch_wait"].includes(t.status)&&t.stationId===e&&!t.blockedNextStationId)},pd=function(){K(this,ye).time++;let e=K(this,ye).jobs.filter(t=>t.completedAt<=this.time);K(this,ye).jobs=K(this,ye).jobs.filter(t=>t.completedAt>this.time);for(let t of e)se(this,ee,gd).call(this,t);if(K(this,zt).qualityMode==="synthetic_pass"){for(let t of K(this,ye).batches.filter(n=>n.qualityState==="processed_quality_hold"&&!n.inspectionAttempted&&n.reviewAt<=this.time))this.recordBatchInspection(t.loadId,{result:K(this,ye).qualityOutcomes[t.stationId]||"pass",evidenceRef:"synthetic-demo-batch-record",synthetic:!0});for(let t of K(this,ye).frames.filter(n=>n.status==="qc_hold"&&n.hold?.kind==="inspection"&&!n.hold.inspectionAttempted&&n.hold.reviewAt<=this.time))this.recordInspection(t.frameId,{result:K(this,ye).qualityOutcomes[t.stationId]||"pass",evidenceRef:"synthetic-demo-inspection",synthetic:!0})}for(let t of K(this,ye).frames)t.status==="incoming"?se(this,ee,yr).call(this,t):t.blockedNextStationId&&se(this,ee,yr).call(this,t);for(let t of K(this,zt).stations.filter(n=>n.mode!=="transfer"))se(this,ee,md).call(this,t);K(this,Li).step(this.time,se(this,ee,dl).call(this))},yr=function(e){let t=se(this,ee,xr).call(this,e);if(t.stationId==="F13"){se(this,ee,_d).call(this,e);return}if(t.stationId==="F09"&&!e.alignmentRequired){e.routeStepInstances.push({recordId:se(this,ee,as).call(this,"Q"),stepId:t.stepId,stationId:t.stationId,operationKey:t.operationKey,startedAt:this.time,completedAt:this.time,qualityState:"accepted",synthetic:!0,skipped:!0,skipReason:"No alignment required in this explicitly synthetic scenario",valid:!0,reworkPass:e.reworkCount}),e.routeIndex++,se(this,ee,yr).call(this,e);return}if(se(this,ee,Sa).call(this,t.stationId).filter(n=>n!==e).length>=se(this,ee,Ma).call(this,t.stationId).bufferCapacity){e.blockedNextStationId=t.stationId,e.status!=="incoming"&&(e.status="queued");return}e.stationId=t.stationId,e.location="factory_queue",e.blockedNextStationId=null,e.status=se(this,ee,Ma).call(this,t.stationId).mode==="batch"?"batch_wait":"queued",e.queuedAt=this.time},md=function(e){let t=K(this,ye).jobs.filter(s=>s.stationId===e.id),n=new Set(t.map(s=>s.resourceIndex));for(let s=0;s<e.parallelResources;s++){if(n.has(s))continue;let r=se(this,ee,Sa).call(this,e.id).sort((h,d)=>h.queuedAt-d.queuedAt||h.admittedAt-d.admittedAt);if(!r.length)break;let o;if(e.mode==="batch"||e.mode==="lot"){let h=new Map;for(let d of r){let f=ba(d,se(this,ee,xr).call(this,d));h.has(f)||h.set(f,[]),h.get(f).push(d)}if(o=[...h.values()].find(d=>d.length>=e.capacity||e.allowPartial&&this.time-d[0].queuedAt>=e.maxWaitSeconds),!o)continue;o=o.slice(0,e.capacity)}else o=[r[0]];let a=this.time,c=a+e.cycleSeconds,u={jobId:se(this,ee,as).call(this,"J"),stationId:e.id,resourceIndex:s,frameIds:o.map(h=>h.frameId),startedAt:a,completedAt:c,loadId:null};if(e.mode==="batch"||e.mode==="lot"){let h=o[0],d=se(this,ee,xr).call(this,h),f=se(this,ee,as).call(this,"B");u.loadId=f,K(this,ye).batches.push({loadId:f,stationId:e.id,batchStage:d.batchStage||d.operationKey,recipeId:h.recipeId,recipeVersion:h.recipeVersion,materialCompatibilityGroupId:h.materialCompatibilityGroupId,compatibilityKey:ba(h,d),memberFrameIds:[...u.frameIds],capacityFrames:e.capacity,startedAt:a,completedAt:null,plannedCompletedAt:c,qualityState:"processing",processRecordRef:null,inspectionAttempted:!1,reviewAt:null,synthetic:!0})}for(let h of o){let d=se(this,ee,xr).call(this,h),f=se(this,ee,as).call(this,"Q");h.routeStepInstances.push({recordId:f,stepId:d.stepId,stationId:e.id,operationKey:d.operationKey,batchStage:d.batchStage||null,startedAt:a,completedAt:null,qualityState:"pending_inspection",loadId:u.loadId,synthetic:!0,valid:!0,reworkPass:h.reworkCount}),e.id==="F10"&&h.thermalLoadIds.push(u.loadId),e.id==="F04"&&h.chemicalLoadIds.push(u.loadId),e.id==="F08"&&h.geometryCheckIds.push(f),h.status="processing",h.location="factory_station",h.hold=null,se(this,ee,un).call(this,"process_started",h,{stationId:e.id,loadId:u.loadId,recordId:f})}K(this,ye).jobs.push(u)}},gd=function(e){if(e.loadId){let t=K(this,ye).batches.find(n=>n.loadId===e.loadId);t.completedAt=this.time,t.qualityState="processed_quality_hold",t.reviewAt=this.time+K(this,zt).qualityReviewSeconds}for(let t of e.frameIds){let n=se(this,ee,Cn).call(this,t),s=se(this,ee,cs).call(this,n);s.completedAt=this.time,n.status="qc_hold",n.location="factory_quality_hold",n.hold={kind:e.loadId?"batch":"inspection",loadId:e.loadId,recordId:s.recordId,reviewAt:this.time+K(this,zt).qualityReviewSeconds,inspectionAttempted:!1},se(this,ee,un).call(this,"process_completed_pending_quality",n,{stationId:e.stationId,loadId:e.loadId})}},fl=function(e){return ae(e&&["pass","hold"].includes(e.result),"Inspection result must be pass or hold"),dt(e.evidenceRef,"inspection evidence reference"),ae(e.synthetic===void 0||e.synthetic===!0,"This simulator can only record synthetic quality results"),e},pl=function(e,t,n=null){let s={nonconformanceId:se(this,ee,as).call(this,"N"),stationId:e.stationId,loadId:n,openedAt:this.time,resolvedAt:null,state:"open",reason:t};e.nonconformances.push(s),e.nonconformanceIds.push(s.nonconformanceId)},ml=function(e,t){let n=se(this,ee,cs).call(this,e);n.qualityState="accepted",n.inspectedAt=this.time,n.evidenceRef=t;for(let s of e.nonconformances.filter(r=>r.state==="open"&&r.stationId===e.stationId))s.state="resolved",s.resolvedAt=this.time;se(this,ee,un).call(this,"quality_accepted",e,{stationId:e.stationId,recordId:n.recordId,evidenceRef:t,synthetic:!0}),e.hold=null,e.routeIndex++,se(this,ee,yr).call(this,e)},_d=function(e){let t=se(this,ee,Co).call(this,e).steps.filter(n=>n.stationId!=="F13");ae(t.every(n=>e.routeStepInstances.some(s=>s.valid&&s.stepId===n.stepId&&s.qualityState==="accepted")),"Required route/quality record missing"),ae(!e.nonconformances.some(n=>n.state==="open"),"Open nonconformance blocks final release"),ae(e.routeStepInstances.filter(n=>n.valid&&n.loadId).every(n=>K(this,ye).batches.find(s=>s.loadId===n.loadId)?.qualityState==="accepted"),"Batch records block final release"),e.status="released",e.stationId="F13",e.location="factory_released",e.finalRelease="accepted",e.releasedAt=this.time,e.blockedNextStationId=null,se(this,ee,un).call(this,"final_release_accepted",e,{synthetic:!0})},Gs=function(e){let t=K(this,ye).transfers.find(n=>n.transferId===e);return ae(t,"Unknown transfer id"),t},gl=function(e){for(let t of e.frameIds){let n=se(this,ee,Cn).call(this,t);n.status="released",n.location="factory_released",n.transferId=null,n.releasedAt=this.time,se(this,ee,un).call(this,"transfer_stock_restored",n,{transferId:e.transferId})}};var _l={purchased_frame:"\u5916\u8CFC\u6210\u54C1\u8ECA\u67B6",manufactured_qualified_frame:"\u9130\u5EE0\u5408\u683C\u81EA\u88FD\u67B6"};function br(i="bicycle"){let e=ui().defaultKit;return Object.fromEntries(ks.map(t=>[t,t==="frameSpecId"?i==="ebike"?"DEMO-EBIKE-FRAME":"DEMO-BIKE-FRAME":e[t]]))}function ls(i={},e="bicycle"){let t=i.supplyMode??"purchased_frame";if(!Object.hasOwn(_l,t))throw Error("\u8ECA\u67B6\u4F9B\u6599\u6A21\u5F0F\u7121\u6548");let n=i.frameSpec??br(e);if(!n||typeof n!="object"||ks.some(s=>typeof n[s]!="string"||!n[s].trim()||n[s].length>120))throw Error("\u8ECA\u67B6\u898F\u683C\u5339\u914D\u6B04\u4F4D\u7121\u6548");if(["DEMO-BIKE-FRAME","DEMO-EBIKE-FRAME"].includes(n.frameSpecId)&&n.frameSpecId!==br(e).frameSpecId)throw Error("\u8ECA\u67B6\u898F\u683C\u8207\u5DE5\u55AE\u8ECA\u7A2E\u4E0D\u7B26");return{supplyMode:t,frameSpec:Object.fromEntries(ks.map(s=>[s,n[s]]))}}var wa=class{constructor(e=ui()){this.frame=new vr(Bn(e)),this.running=!1,this.runSequence=0}setRunning(e){this.running=!!e,this.running?this.frame.start():this.frame.pause()}advance(e,t,{force:n=!1}={}){if(!Number.isFinite(e)||e<0||e>604800)throw Error("\u96D9\u5EE0\u6642\u9593\u7121\u6548");if(!this.running&&!n)return;this.frame.start();let s=e;for(;s>1e-9;){let r=Math.min(1,s);this.frame.advance(r),t?.advance(r),s-=r}this.running||this.frame.pause()}materialAdapter(e,t,n="bicycle"){let{supplyMode:s,frameSpec:r}=ls(e,n),o=t+"-RUN-"+ ++this.runSequence;return s==="purchased_frame"?null:({serial:a})=>this.frame.takeFrame(r,o,a)}configure(e){let t=Bn(e);this.setRunning(!1),this.frame.configure(t)}snapshot(){return{...this.frame.snapshot(),running:this.running}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Um=0,xd=1,Om=2;var hp=1,Ou=2,zi=3,fi=0,fn=1,bn=2,xs=0,qr=1,yd=2,vd=3,bd=4,Fm=5,Zs=100,Bm=101,zm=102,Md=103,Sd=104,km=200,Hm=201,Gm=202,Vm=203,eu=204,tu=205,Wm=206,qm=207,Xm=208,Ym=209,Km=210,jm=211,Zm=212,$m=213,Jm=214,Qm=0,eg=1,tg=2,nc=3,ng=4,ig=5,sg=6,rg=7,dp=0,og=1,ag=2,ys=0,cg=1,lg=2,ug=3,Fu=4,hg=5,dg=6,fg=7,Ed="attached",pg="detached",fp=300,Kr=301,jr=302,nu=303,iu=304,Cc=306,Gi=1e3,Mn=1001,nr=1002,kt=1003,Zr=1004;var ki=1005;var qt=1006,Qs=1007;var kn=1008;var vs=1009,mg=1010,gg=1011,Bu=1012,pp=1013,gs=1014,Jn=1015,qo=1016,mp=1017,gp=1018,er=1020,_g=1021,En=1023,xg=1024,yg=1025,tr=1026,$r=1027,_p=1028,xp=1029,vg=1030,yp=1031,vp=1033,xl=33776,yl=33777,vl=33778,bl=33779,wd=35840,Ad=35841,Td=35842,Rd=35843,bp=36196,Cd=37492,Id=37496,Pd=37808,Ld=37809,Nd=37810,Dd=37811,Ud=37812,Od=37813,Fd=37814,Bd=37815,zd=37816,kd=37817,Hd=37818,Gd=37819,Vd=37820,Wd=37821,Ml=36492,qd=36494,Xd=36495,bg=36283,Yd=36284,Kd=36285,jd=36286;var bs=2300,Vi=2301,Sl=2302,Zd=2400,$d=2401,Jd=2402,Mg=2500;var Mp=0,Ic=1,ta=2,Sg=3200,Eg=3201,Sp=0,wg=1,di="",Ot="srgb",Qt="srgb-linear",zu="display-p3",Pc="display-p3-linear",ic="linear",Et="srgb",sc="rec709",rc="p3";var Mr=7680;var Qd=519,Ag=512,Tg=513,Rg=514,Ep=515,Cg=516,Ig=517,Pg=518,Lg=519,su=35044,Lc=35048;var ef="300 es",ru=1035,Hi=2e3,oc=2001,pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=1234567,Go=Math.PI/180,Jr=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function ku(i,e){return(i%e+e)%e}function Ng(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dg(i,e,t){return i!==e?(t-i)/(e-i):0}function Vo(i,e,t){return(1-t)*i+t*e}function Ug(i,e,t,n){return Vo(i,e,1-Math.exp(-t*n))}function Og(i,e=1){return e-Math.abs(ku(i,e*2)-e)}function Fg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kg(i,e){return i+Math.random()*(e-i)}function Hg(i){return i*(.5-Math.random())}function Gg(i){i!==void 0&&(tf=i);let e=tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(i){return i*Go}function Wg(i){return i*Jr}function ou(i){return(i&i-1)===0&&i!==0}function qg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ni={DEG2RAD:Go,RAD2DEG:Jr,generateUUID:ei,clamp:sn,euclideanModulo:ku,mapLinear:Ng,inverseLerp:Dg,lerp:Vo,damp:Ug,pingpong:Og,smoothstep:Fg,smootherstep:Bg,randInt:zg,randFloat:kg,randFloatSpread:Hg,seededRandom:Gg,degToRad:Vg,radToDeg:Wg,isPowerOfTwo:ou,ceilPowerOfTwo:qg,floorPowerOfTwo:ac,setQuaternionFromProperEuler:Xg,normalize:mt,denormalize:Qn},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],b=s[1],x=s[4],M=s[7],I=s[2],A=s[5],E=s[8];return r[0]=o*_+a*b+c*I,r[3]=o*p+a*x+c*A,r[6]=o*m+a*M+c*E,r[1]=l*_+u*b+h*I,r[4]=l*p+u*x+h*A,r[7]=l*m+u*M+h*E,r[2]=d*_+f*b+g*I,r[5]=d*p+f*x+g*A,r[8]=d*m+f*M+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},El=new $e;function wp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yg(){let i=Xo("canvas");return i.style.display="block",i}var nf={};function Ap(i){i in nf||(nf[i]=!0,console.warn(i))}var sf=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rf=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Qt]:{transfer:ic,primaries:sc,toReference:i=>i,fromReference:i=>i},[Ot]:{transfer:Et,primaries:sc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Pc]:{transfer:ic,primaries:rc,toReference:i=>i.applyMatrix3(rf),fromReference:i=>i.applyMatrix3(sf)},[zu]:{transfer:Et,primaries:rc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rf),fromReference:i=>i.applyMatrix3(sf).convertLinearToSRGB()}},Kg=new Set([Qt,Pc]),ut={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Aa[e].toReference,s=Aa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Aa[i].primaries},getTransfer:function(i){return i===di?ic:Aa[i].transfer}};function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sr,cc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sr===void 0&&(Sr=Xo("canvas")),Sr.width=e.width,Sr.height=e.height;let n=Sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xr(t[n]/255)*255):t[n]=Xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jg=0,Qr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Al(s[o].image)):r.push(Al(s[o]))}else r=Al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zg=0,Xt=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=qt,o=kn,a=En,c=vs,l=i.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=ei(),this.name="",this.source=new Qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=fp;Xt.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(f+1)/2,I=(m+1)/2,A=(u+d)/4,E=(h+_)/4,D=(g+p)/4;return x>M&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=E/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=E/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},au=class extends pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Qr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lc=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cu=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let p=1-a,m=c*d+l*f+u*g+h*_,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let I=Math.sqrt(x),A=Math.atan2(I,m*b);p=Math.sin(p*A)/I,a=Math.sin(a*A)/I}let M=a*b;if(c=c*p+d*M,l=l*p+f*M,u=u*p+g*M,h=h*p+_*M,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(of.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tl=new C,of=new pn,rn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Ra.subVectors(this.max,Lo),Er.subVectors(e.a,Lo),wr.subVectors(e.b,Lo),Ar.subVectors(e.c,Lo),us.subVectors(wr,Er),hs.subVectors(Ar,wr),Vs.subVectors(Er,Ar);let t=[0,-us.z,us.y,0,-hs.z,hs.y,0,-Vs.z,Vs.y,us.z,0,-us.x,hs.z,0,-hs.x,Vs.z,0,-Vs.x,-us.y,us.x,0,-hs.y,hs.x,0,-Vs.y,Vs.x,0];return!Rl(t,Er,wr,Ar,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Er,wr,Ar,Ra))?!1:(Ca.crossVectors(us,hs),t=[Ca.x,Ca.y,Ca.z],Rl(t,Er,wr,Ar,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ni=[new C,new C,new C,new C,new C,new C,new C,new C],jn=new C,Ta=new rn,Er=new C,wr=new C,Ar=new C,us=new C,hs=new C,Vs=new C,Lo=new C,Ra=new C,Ca=new C,Ws=new C;function Rl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ws.fromArray(i,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),c=e.dot(Ws),l=t.dot(Ws),u=n.dot(Ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var $g=new rn,No=new C,Cl=new C,Nn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$g.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);let t=No.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(No,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Cl)),this.expandByPoint(No.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new C,Il=new C,Ia=new C,ds=new C,Pl=new C,Pa=new C,Ll=new C,qi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Il.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Il);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ia),a=ds.dot(this.direction),c=-ds.dot(Ia),l=ds.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Il).addScaledVector(Ia,d),f}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,s,r){Pl.subVectors(t,e),Pa.subVectors(n,e),Ll.crossVectors(Pl,Pa);let o=this.direction.dot(Ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);let c=a*this.direction.dot(Pa.crossVectors(ds,Pa));if(c<0)return null;let l=a*this.direction.dot(Pl.cross(ds));if(l<0||c+l>o)return null;let u=-a*ds.dot(Ll);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class i{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),fs.crossVectors(n,In),fs.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),fs.crossVectors(n,In)),fs.normalize(),La.crossVectors(In,fs),s[0]=fs.x,s[4]=La.x,s[8]=In.x,s[1]=fs.y,s[5]=La.y,s[9]=In.y,s[2]=fs.z,s[6]=La.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],x=n[7],M=n[11],I=n[15],A=s[0],E=s[4],D=s[8],G=s[12],v=s[1],T=s[5],J=s[9],Z=s[13],N=s[2],V=s[6],H=s[10],X=s[14],Y=s[3],j=s[7],ce=s[11],ue=s[15];return r[0]=o*A+a*v+c*N+l*Y,r[4]=o*E+a*T+c*V+l*j,r[8]=o*D+a*J+c*H+l*ce,r[12]=o*G+a*Z+c*X+l*ue,r[1]=u*A+h*v+d*N+f*Y,r[5]=u*E+h*T+d*V+f*j,r[9]=u*D+h*J+d*H+f*ce,r[13]=u*G+h*Z+d*X+f*ue,r[2]=g*A+_*v+p*N+m*Y,r[6]=g*E+_*T+p*V+m*j,r[10]=g*D+_*J+p*H+m*ce,r[14]=g*G+_*Z+p*X+m*ue,r[3]=b*A+x*v+M*N+I*Y,r[7]=b*E+x*T+M*V+I*j,r[11]=b*D+x*J+M*H+I*ce,r[15]=b*G+x*Z+M*X+I*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+p*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+m*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=h*p*l-_*d*l+_*c*f-a*p*f-h*c*m+a*d*m,x=g*d*l-u*p*l-g*c*f+o*p*f+u*c*m-o*d*m,M=u*_*l-g*h*l+g*a*f-o*_*f-u*a*m+o*h*m,I=g*h*c-u*_*c-g*a*d+o*_*d+u*a*p-o*h*p,A=t*b+n*x+s*M+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=b*E,e[1]=(_*d*r-h*p*r-_*s*f+n*p*f+h*s*m-n*d*m)*E,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*E,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*E,e[4]=x*E,e[5]=(u*p*r-g*d*r+g*s*f-t*p*f-u*s*m+t*d*m)*E,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*E,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*E,e[8]=M*E,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*m-t*h*m)*E,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*m+t*a*m)*E,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*E,e[12]=I*E,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*E,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*E,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,p=o*h,m=a*h,b=c*l,x=c*u,M=c*h,I=n.x,A=n.y,E=n.z;return s[0]=(1-(_+m))*I,s[1]=(f+M)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+m))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(g+x)*E,s[9]=(p-b)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Tr.set(s[0],s[1],s[2]).length(),o=Tr.set(s[4],s[5],s[6]).length(),a=Tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let l=1/r,u=1/o,h=1/a;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Hi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Hi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Hi){let c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u,g,_;if(a===Hi)g=(o+r)*h,_=-2*h;else if(a===oc)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tr=new C,Zn=new De,Jg=new C(0,0,0),Qg=new C(1,1,1),fs=new C,La=new C,In=new C,af=new De,cf=new pn,mi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},e0=0,lf=new C,Rr=new pn,Ui=new De,Na=new C,Do=new C,t0=new C,n0=new pn,uf=new C(1,0,0),hf=new C(0,1,0),df=new C(0,0,1),i0={type:"added"},s0={type:"removed"},Nl={type:"childadded",child:null},Dl={type:"childremoved",child:null},Rt=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new mi,n=new pn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new $e}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Do,Na,this.up):Ui.lookAt(Na,Do,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Ui),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i0),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),Dl.child=e,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new C,Oi=new C,Ul=new C,Fi=new C,Cr=new C,Ir=new C,ff=new C,Ol=new C,Fl=new C,Bl=new C,Js=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Oi.subVectors(n,t),Ul.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Oi),c=$n.dot(Ul),l=Oi.dot(Oi),u=Oi.dot(Ul),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Oi.subVectors(e,t),$n.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),$n.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Cr.subVectors(s,n),Ir.subVectors(r,n),Ol.subVectors(e,n);let c=Cr.dot(Ol),l=Ir.dot(Ol);if(c<=0&&l<=0)return t.copy(n);Fl.subVectors(e,s);let u=Cr.dot(Fl),h=Ir.dot(Fl);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Cr,o);Bl.subVectors(e,r);let f=Cr.dot(Bl),g=Ir.dot(Bl);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ir,a);let p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return ff.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(ff,a);let m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Cr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Da={h:0,s:0,l:0};function zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=ku(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zl(o,r,e+1/3),this.g=zl(o,r,e),this.b=zl(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ut.fromWorkingColorSpace(dn.copy(this),e),Math.round(sn(dn.r*255,0,255))*65536+Math.round(sn(dn.g*255,0,255))*256+Math.round(sn(dn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Ot){ut.fromWorkingColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Da);let n=Vo(ps.h,Da.h,t),s=Vo(ps.s,Da.s,t),r=Vo(ps.l,Da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Pe;Pe.NAMES=Tp;var r0=0,wn=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=qr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eu&&(n.blendSrc=this.blendSrc),this.blendDst!==tu&&(n.blendDst=this.blendDst),this.blendEquation!==Zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new C,Ua=new Se,gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ap("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}};var uc=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hc=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},o0=0,zn=new De,kl=new Rt,Pr=new C,Pn=new rn,Uo=new rn,$t=new C,Gt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?hc:uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Pn.min,Uo.min),Pn.expandByPoint($t),$t.addVectors(Pn.max,Uo.max),Pn.expandByPoint($t)):(Pn.expandByPoint(Uo.min),Pn.expandByPoint(Uo.max))}Pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)$t.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(e,l),$t.add(Pr)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new C,c[D]=new C;let l=new C,u=new C,h=new C,d=new Se,f=new Se,g=new Se,_=new C,p=new C;function m(D,G,v){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,G),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,G),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(T),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),a[D].add(_),a[G].add(_),a[v].add(_),c[D].add(p),c[G].add(p),c[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,G=b.length;D<G;++D){let v=b[D],T=v.start,J=v.count;for(let Z=T,N=T+J;Z<N;Z+=3)m(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let x=new C,M=new C,I=new C,A=new C;function E(D){I.fromBufferAttribute(s,D),A.copy(I);let G=a[D];x.copy(G),x.sub(I.multiplyScalar(I.dot(G))).normalize(),M.crossVectors(A,G);let T=M.dot(c[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,T)}for(let D=0,G=b.length;D<G;++D){let v=b[D],T=v.start,J=v.count;for(let Z=T,N=T+J;Z<N;Z+=3)E(e.getX(Z+0)),E(e.getX(Z+1)),E(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pf=new De,qs=new qi,Oa=new Nn,mf=new C,Lr=new C,Nr=new C,Dr=new C,Hl=new C,Fa=new C,Ba=new Se,za=new Se,ka=new Se,gf=new C,_f=new C,xf=new C,Ha=new C,Ga=new C,Ne=class extends Rt{constructor(e=new Gt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Hl.fromBufferAttribute(h,e),o?Fa.addScaledVector(Hl,u):Fa.addScaledVector(Hl.sub(t),u))}t.add(Fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(Oa.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Oa,mf)===null||qs.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(r).invert(),qs.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,I=x;M<I;M+=3){let A=a.getX(M),E=a.getX(M+1),D=a.getX(M+2);s=Va(this,m,e,n,l,u,h,A,E,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=Va(this,o,e,n,l,u,h,b,x,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,I=x;M<I;M+=3){let A=M,E=M+1,D=M+2;s=Va(this,m,e,n,l,u,h,A,E,D),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,x=p+1,M=p+2;s=Va(this,o,e,n,l,u,h,b,x,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function a0(i,e,t,n,s,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===fi,a),c===null)return null;Ga.copy(a),Ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:i}}function Va(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Lr),i.getVertexPosition(c,Nr),i.getVertexPosition(l,Dr);let u=a0(i,e,t,n,Lr,Nr,Dr,Ha);if(u){s&&(Ba.fromBufferAttribute(s,a),za.fromBufferAttribute(s,c),ka.fromBufferAttribute(s,l),u.uv=Js.getInterpolation(Ha,Lr,Nr,Dr,Ba,za,ka,new Se)),r&&(Ba.fromBufferAttribute(r,a),za.fromBufferAttribute(r,c),ka.fromBufferAttribute(r,l),u.uv1=Js.getInterpolation(Ha,Lr,Nr,Dr,Ba,za,ka,new Se)),o&&(gf.fromBufferAttribute(o,a),_f.fromBufferAttribute(o,c),xf.fromBufferAttribute(o,l),u.normal=Js.getInterpolation(Ha,Lr,Nr,Dr,gf,_f,xf,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new C,materialIndex:0};Js.getNormal(Lr,Nr,Dr,h.normal),u.face=h}return u}var on=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function g(_,p,m,b,x,M,I,A,E,D,G){let v=M/E,T=I/D,J=M/2,Z=I/2,N=A/2,V=E+1,H=D+1,X=0,Y=0,j=new C;for(let ce=0;ce<H;ce++){let ue=ce*T-Z;for(let ve=0;ve<V;ve++){let He=ve*v-J;j[_]=He*b,j[p]=ue*x,j[m]=N,l.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(ve/E),h.push(1-ce/D),X+=1}}for(let ce=0;ce<D;ce++)for(let ue=0;ue<E;ue++){let ve=d+ue+V*ce,He=d+ue+V*(ce+1),W=d+(ue+1)+V*(ce+1),ie=d+(ue+1)+V*ce;c.push(ve,He,ie),c.push(He,W,ie),Y+=6}a.addGroup(f,Y,G),f+=Y,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function eo(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=eo(i[t]);for(let s in n)e[s]=n[s]}return e}function c0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rp(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}var l0={clone:eo,merge:vn},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},dc=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ms=new C,yf=new Se,vf=new Se,Ht=class extends dc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,yf,vf),t.subVectors(vf,yf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ur=-90,Or=1,lu=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Ur,Or,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Ur,Or,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Ur,Or,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Ur,Or,e,t);a.layers=this.layers,this.add(a);let c=new Ht(Ur,Or,e,t);c.layers=this.layers,this.add(c);let l=new Ht(Ur,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fc=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Kr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uu=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:xs});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=qt),new lu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Gl=new C,d0=new C,f0=new $e,Ln=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gl.subVectors(n,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||f0.getNormalMatrix(e),s=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xs=new Nn,Wa=new C,Ko=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],b=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,p-f,M-m).normalize(),n[1].setComponents(c+r,d+l,p+f,M+m).normalize(),n[2].setComponents(c+o,d+u,p+g,M+b).normalize(),n[3].setComponents(c-o,d-u,p-g,M-b).normalize(),n[4].setComponents(c-a,d-h,p-_,M-x).normalize(),t===Hi)n[5].setComponents(c+a,d+h,p+_,M+x).normalize();else if(t===oc)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){return Xs.center.set(0,0,0),Xs.radius=.7071067811865476,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wa.x=s.normal.x>0?e.max.x:e.min.x,Wa.y=s.normal.y>0?e.max.y:e.min.y,Wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function p0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,u){let h=l.array,d=l.usage,f=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,u,h){let d=u.array,f=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),f.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){let m=g[_];t?i.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var Xi=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let b=m*d-o;for(let x=0;x<l;x++){let M=x*h-r;g.push(M,-b,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let x=b+l*m,M=b+l*(m+1),I=b+1+l*(m+1),A=b+1+l*m;f.push(x,M,A),f.push(M,I,A)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,B0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,s_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,b_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,P_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ox=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:_0,alphamap_pars_fragment:x0,alphatest_fragment:y0,alphatest_pars_fragment:v0,aomap_fragment:b0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:E0,begin_vertex:w0,beginnormal_vertex:A0,bsdfs:T0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:N0,color_fragment:D0,color_pars_fragment:U0,color_pars_vertex:O0,color_vertex:F0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:k0,displacementmap_pars_vertex:H0,displacementmap_vertex:G0,emissivemap_fragment:V0,emissivemap_pars_fragment:W0,colorspace_fragment:q0,colorspace_pars_fragment:X0,envmap_fragment:Y0,envmap_common_pars_fragment:K0,envmap_pars_fragment:j0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:c_,envmap_vertex:$0,fog_vertex:J0,fog_pars_vertex:Q0,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_fragment:i_,lightmap_pars_fragment:s_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:o_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:u_,lights_phong_fragment:h_,lights_phong_pars_fragment:d_,lights_physical_fragment:f_,lights_physical_pars_fragment:p_,lights_fragment_begin:m_,lights_fragment_maps:g_,lights_fragment_end:__,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:y_,logdepthbuf_pars_vertex:v_,logdepthbuf_vertex:b_,map_fragment:M_,map_pars_fragment:S_,map_particle_fragment:E_,map_particle_pars_fragment:w_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:T_,morphinstance_vertex:R_,morphcolor_vertex:C_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:N_,normal_fragment_maps:D_,normal_pars_fragment:U_,normal_pars_vertex:O_,normal_vertex:F_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:G_,opaque_fragment:V_,packing:W_,premultiplied_alpha_fragment:q_,project_vertex:X_,dithering_fragment:Y_,dithering_pars_fragment:K_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:J_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:sx,specularmap_fragment:rx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:cx,transmission_fragment:lx,transmission_pars_fragment:ux,uv_pars_fragment:hx,uv_pars_vertex:dx,uv_vertex:fx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:xx,cube_vert:yx,cube_frag:vx,depth_vert:bx,depth_frag:Mx,distanceRGBA_vert:Sx,distanceRGBA_frag:Ex,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Tx,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Ix,meshlambert_vert:Px,meshlambert_frag:Lx,meshmatcap_vert:Nx,meshmatcap_frag:Dx,meshnormal_vert:Ux,meshnormal_frag:Ox,meshphong_vert:Fx,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:kx,meshtoon_vert:Hx,meshtoon_frag:Gx,points_vert:Vx,points_frag:Wx,shadow_vert:qx,shadow_frag:Xx,sprite_vert:Yx,sprite_frag:Kx},de={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},hi={basic:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:vn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:vn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:vn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:vn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:vn([de.points,de.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:vn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:vn([de.common,de.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:vn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:vn([de.sprite,de.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:vn([de.common,de.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:vn([de.lights,de.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};hi.physical={uniforms:vn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var qa={r:0,b:0,g:0},Ys=new mi,jx=new De;function Zx(i,e,t,n,s,r,o){let a=new Pe(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(p,m){let b=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),b=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Cc)?(u===void 0&&(u=new Ne(new on(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:eo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ys.copy(m.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Ys)),u.material.toneMapped=ut.getTransfer(x.colorSpace)!==Et,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new Xi(2,2),new Hn({name:"BackgroundMaterial",uniforms:eo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ut.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,m){p.getRGB(qa,Rp(i)),n.buffers.color.setClear(qa.r,qa.g,qa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function $x(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null),l=c,u=!1;function h(N,V,H,X,Y){let j=!1;if(o){let ce=_(X,H,V);l!==ce&&(l=ce,f(l.object)),j=m(N,X,H,Y),j&&b(N,X,H,Y)}else{let ce=V.wireframe===!0;(l.geometry!==X.id||l.program!==H.id||l.wireframe!==ce)&&(l.geometry=X.id,l.program=H.id,l.wireframe=ce,j=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,D(N,V,H,X),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,V,H){let X=H.wireframe===!0,Y=a[N.id];Y===void 0&&(Y={},a[N.id]=Y);let j=Y[V.id];j===void 0&&(j={},Y[V.id]=j);let ce=j[X];return ce===void 0&&(ce=p(d()),j[X]=ce),ce}function p(N){let V=[],H=[],X=[];for(let Y=0;Y<s;Y++)V[Y]=0,H[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:H,attributeDivisors:X,object:N,attributes:{},index:null}}function m(N,V,H,X){let Y=l.attributes,j=V.attributes,ce=0,ue=H.getAttributes();for(let ve in ue)if(ue[ve].location>=0){let W=Y[ve],ie=j[ve];if(ie===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;ce++}return l.attributesNum!==ce||l.index!==X}function b(N,V,H,X){let Y={},j=V.attributes,ce=0,ue=H.getAttributes();for(let ve in ue)if(ue[ve].location>=0){let W=j[ve];W===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));let ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),Y[ve]=ie,ce++}l.attributes=Y,l.attributesNum=ce,l.index=X}function x(){let N=l.newAttributes;for(let V=0,H=N.length;V<H;V++)N[V]=0}function M(N){I(N,0)}function I(N,V){let H=l.newAttributes,X=l.enabledAttributes,Y=l.attributeDivisors;H[N]=1,X[N]===0&&(i.enableVertexAttribArray(N),X[N]=1),Y[N]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),Y[N]=V)}function A(){let N=l.newAttributes,V=l.enabledAttributes;for(let H=0,X=V.length;H<X;H++)V[H]!==N[H]&&(i.disableVertexAttribArray(H),V[H]=0)}function E(N,V,H,X,Y,j,ce){ce===!0?i.vertexAttribIPointer(N,V,H,Y,j):i.vertexAttribPointer(N,V,H,X,Y,j)}function D(N,V,H,X){if(n.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Y=X.attributes,j=H.getAttributes(),ce=V.defaultAttributeValues;for(let ue in j){let ve=j[ue];if(ve.location>=0){let He=Y[ue];if(He===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(He=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(He=N.instanceColor)),He!==void 0){let W=He.normalized,ie=He.itemSize,xe=t.get(He);if(xe===void 0)continue;let ze=xe.buffer,Re=xe.type,be=xe.bytesPerElement,at=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||He.gpuType===pp);if(He.isInterleavedBufferAttribute){let Be=He.data,O=Be.stride,Wt=He.offset;if(Be.isInstancedInterleavedBuffer){for(let Le=0;Le<ve.locationSize;Le++)I(ve.location+Le,Be.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Le=0;Le<ve.locationSize;Le++)M(ve.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Le=0;Le<ve.locationSize;Le++)E(ve.location+Le,ie/ve.locationSize,Re,W,O*be,(Wt+ie/ve.locationSize*Le)*be,at)}else{if(He.isInstancedBufferAttribute){for(let Be=0;Be<ve.locationSize;Be++)I(ve.location+Be,He.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Be=0;Be<ve.locationSize;Be++)M(ve.location+Be);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Be=0;Be<ve.locationSize;Be++)E(ve.location+Be,ie/ve.locationSize,Re,W,ie*be,ie/ve.locationSize*Be*be,at)}}else if(ce!==void 0){let W=ce[ue];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(ve.location,W);break;case 3:i.vertexAttrib3fv(ve.location,W);break;case 4:i.vertexAttrib4fv(ve.location,W);break;default:i.vertexAttrib1fv(ve.location,W)}}}}A()}function G(){J();for(let N in a){let V=a[N];for(let H in V){let X=V[H];for(let Y in X)g(X[Y].object),delete X[Y];delete V[H]}delete a[N]}}function v(N){if(a[N.id]===void 0)return;let V=a[N.id];for(let H in V){let X=V[H];for(let Y in X)g(X[Y].object),delete X[Y];delete V[H]}delete a[N.id]}function T(N){for(let V in a){let H=a[V];if(H[N.id]===void 0)continue;let X=H[N.id];for(let Y in X)g(X[Y].object),delete X[Y];delete H[N.id]}}function J(){Z(),u=!0,l!==c&&(l=c,f(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:J,resetDefaultState:Z,dispose:G,releaseStatesOfGeometry:v,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function Jx(i,e,t,n){let s=n.isWebGL2,r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||e.has("OES_texture_float"),I=x&&M,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:A}}function ey(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ln,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let b=r?0:n,x=b*4,M=m.clippingState||null;c.value=M,M=u(g,d,x,f);for(let I=0;I!==x;++I)M[I]=t[I];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ty(i){let e=new WeakMap;function t(o,a){return a===nu?o.mapping=Kr:a===iu&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nu||a===iu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new uu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var to=class extends dc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vr=4,bf=[.125,.215,.35,.446,.526,.582],$s=20,Vl=new to,Mf=new Pe,Wl=null,ql=0,Xl=0,js=(1+Math.sqrt(5))/2,Fr=1/js,Sf=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,js,Fr),new C(0,js,-Fr),new C(Fr,0,js),new C(-Fr,0,js),new C(js,Fr,0),new C(-js,Fr,0)],no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,ql,Xl),e.scissorTest=!1,Xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:qo,format:En,colorSpace:Qt,depthBuffer:!1},s=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(r)),this._blurMaterial=iy(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,s){let a=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Mf),u.toneMapping=ys,u.autoClear=!1;let f=new Jt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Ne(new on,f),_=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Mf),_=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let x=this._cubeSize;Xa(s,b*x,m>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Kr||e.mapping===jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Xa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Sf[(s-1)%Sf.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ne(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$s-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):$s;p>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$s}`);let m=[],b=0;for(let E=0;E<$s;++E){let D=E/_,G=Math.exp(-D*D/2);m.push(G),E===0?b+=G:E<p&&(b+=2*G)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],I=3*M*(s>x-Vr?s-x+Vr:0),A=4*(this._cubeSize-M);Xa(t,I,A,3*M,2*M),c.setRenderTarget(t),c.render(h,Vl)}};function ny(i){let e=[],t=[],n=[],s=i,r=i-Vr+1+bf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Vr?c=bf[o-i+Vr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),x=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let A=0;A<f;A++){let E=A%3*2/3-1,D=A>2?0:-1,G=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];b.set(G,_*g*A),x.set(d,p*g*A);let v=[A,A,A,A,A,A];M.set(v,m*g*A)}let I=new Gt;I.setAttribute("position",new gt(b,_)),I.setAttribute("uv",new gt(x,p)),I.setAttribute("faceIndex",new gt(M,m)),e.push(I),s>Vr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(i,e,t){let n=new Wi(i,e,t);return n.texture.mapping=Cc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function iy(i,e,t){let n=new Float32Array($s),s=new C(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function wf(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Af(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===nu||c===iu,u=c===Kr||c===jr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new no(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new no(i));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ry(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function oy(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){let d=[],f=h.index,g=h.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let x=0,M=b.length;x<M;x+=3){let I=b[x+0],A=b[x+1],E=b[x+2];d.push(I,A,A,E,E,I)}}else if(g!==void 0){let b=g.array;_=g.version;for(let x=0,M=b.length/3-1;x<M;x+=3){let I=x+0,A=x+1,E=x+2;d.push(I,A,A,E,E,I)}}else return;let p=new(wp(d)?hc:uc)(d,1);p.version=_;let m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ay(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,g){i.drawElements(r,g,a,f*c),t.update(g,r,1)}function h(f,g,_){if(_===0)return;let p,m;if(s)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*c,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let m=0;for(let b=0;b<_;b++)m+=g[b];t.update(m,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function cy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ly(i,e){return i[0]-e[0]}function uy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function hy(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new yt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(u);if(_===void 0||_.count!==g){let J=function(){v.dispose(),r.delete(u),u.removeEventListener("dispose",J)};_!==void 0&&_.texture.dispose();let p=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],I=u.morphAttributes.color||[],A=0;p===!0&&(A=1),m===!0&&(A=2),b===!0&&(A=3);let E=u.attributes.position.count*A,D=1;E>e.maxTextureSize&&(D=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let G=new Float32Array(E*D*4*g),v=new lc(G,E,D,g);v.type=Jn,v.needsUpdate=!0;let T=A*4;for(let Z=0;Z<g;Z++){let N=x[Z],V=M[Z],H=I[Z],X=E*D*4*Z;for(let Y=0;Y<N.count;Y++){let j=Y*T;p===!0&&(o.fromBufferAttribute(N,Y),G[X+j+0]=o.x,G[X+j+1]=o.y,G[X+j+2]=o.z,G[X+j+3]=0),m===!0&&(o.fromBufferAttribute(V,Y),G[X+j+4]=o.x,G[X+j+5]=o.y,G[X+j+6]=o.z,G[X+j+7]=0),b===!0&&(o.fromBufferAttribute(H,Y),G[X+j+8]=o.x,G[X+j+9]=o.y,G[X+j+10]=o.z,G[X+j+11]=H.itemSize===4?o.w:1)}}_={count:g,texture:v,size:new Se(E,D)},r.set(u,_),u.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let p=0;for(let b=0;b<d.length;b++)p+=d[b];let m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",m),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(uy);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ly);let _=u.morphAttributes.position,p=u.morphAttributes.normal,m=0;for(let x=0;x<8;x++){let M=a[x],I=M[0],A=M[1];I!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+x)!==_[I]&&u.setAttribute("morphTarget"+x,_[I]),p&&u.getAttribute("morphNormal"+x)!==p[I]&&u.setAttribute("morphNormal"+x,p[I]),s[x]=A,m+=A):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}let b=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function dy(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var pc=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:tr,u!==tr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===tr&&(n=gs),n===void 0&&u===$r&&(n=er),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ip=new Xt,Pp=new pc(1,1);Pp.compareFunction=Ep;var Lp=new lc,Np=new cu,Dp=new fc,Tf=[],Rf=[],Cf=new Float32Array(16),If=new Float32Array(9),Pf=new Float32Array(4);function lo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Tf[s];if(r===void 0&&(r=new Float32Array(s),Tf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nc(i,e){let t=Rf[e];t===void 0&&(t=new Int32Array(e),Rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function _y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Pf.set(n),i.uniformMatrix2fv(this.addr,!1,Pf),Kt(t,n)}}function xy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),Kt(t,n)}}function yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Cf.set(n),i.uniformMatrix4fv(this.addr,!1,Cf),Kt(t,n)}}function vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function My(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Ey(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Pp:Ip;t.setTexture2D(e||r,s)}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Np,s)}function Iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dp,s)}function Py(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Lp,s)}function Ly(i){switch(i){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return vy;case 35667:case 35671:return by;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return Ey;case 36294:return wy;case 36295:return Ay;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Py}}function Ny(i,e){i.uniform1fv(this.addr,e)}function Dy(i,e){let t=lo(e,this.size,2);i.uniform2fv(this.addr,t)}function Uy(i,e){let t=lo(e,this.size,3);i.uniform3fv(this.addr,t)}function Oy(i,e){let t=lo(e,this.size,4);i.uniform4fv(this.addr,t)}function Fy(i,e){let t=lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function By(i,e){let t=lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zy(i,e){let t=lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ky(i,e){i.uniform1iv(this.addr,e)}function Hy(i,e){i.uniform2iv(this.addr,e)}function Gy(i,e){i.uniform3iv(this.addr,e)}function Vy(i,e){i.uniform4iv(this.addr,e)}function Wy(i,e){i.uniform1uiv(this.addr,e)}function qy(i,e){i.uniform2uiv(this.addr,e)}function Xy(i,e){i.uniform3uiv(this.addr,e)}function Yy(i,e){i.uniform4uiv(this.addr,e)}function Ky(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ip,r[o])}function jy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Np,r[o])}function Zy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dp,r[o])}function $y(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lp,r[o])}function Jy(i){switch(i){case 5126:return Ny;case 35664:return Dy;case 35665:return Uy;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return qy;case 36295:return Xy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return $y}}var hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ly(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function Lf(i,e){i.seq.push(e),i.map[e.id]=e}function Qy(i,e,t){let n=i.name,s=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),o=Yl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Lf(t,l===void 0?new hu(a,i,e):new du(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new fu(a),Lf(t,h)),t=h}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Nf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ev=37297,tv=0;function nv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function iv(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===rc&&t===sc?n="LinearDisplayP3ToLinearSRGB":e===sc&&t===rc&&(n="LinearSRGBToLinearDisplayP3"),i){case Qt:case Pc:return[n,"LinearTransferOETF"];case Ot:case zu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Df(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nv(i.getShaderSource(e),o)}else return s}function sv(i,e){let t=iv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(i,e){let t;switch(e){case cg:t="Linear";break;case lg:t="Reinhard";break;case ug:t="OptimizedCineon";break;case Fu:t="ACESFilmic";break;case dg:t="AgX";break;case fg:t="Neutral";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ov(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function cv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wr(i){return i!==""}function Uf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(i){return i.replace(uv,dv)}var hv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dv(i,e){let t=Ze[e];if(t===void 0){let n=hv.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pu(t)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(i){return i.replace(fv,pv)}function pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Kr:case jr:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _v(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===jr&&(e="ENVMAP_MODE_REFRACTION"),e}function xv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case dp:e="ENVMAP_BLENDING_MULTIPLY";break;case og:e="ENVMAP_BLENDING_MIX";break;case ag:e="ENVMAP_BLENDING_ADD";break}return e}function yv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=mv(t),l=gv(t),u=_v(t),h=xv(t),d=yv(t),f=t.isWebGL2?"":ov(t),g=av(t),_=cv(r),p=s.createProgram(),m,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),m.length>0&&(m+=`
`),b=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wr).join(`
`),b.length>0&&(b+=`
`)):(m=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),b=[f,Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ys?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=pu(o),o=Uf(o,t),o=Of(o,t),a=pu(a),a=Uf(a,t),a=Of(a,t),o=Ff(o),a=Ff(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let M=x+m+o,I=x+b+a,A=Nf(s,s.VERTEX_SHADER,M),E=Nf(s,s.FRAGMENT_SHADER,I);s.attachShader(p,A),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function D(J){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(A).trim(),V=s.getShaderInfoLog(E).trim(),H=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,E);else{let Y=Df(s,A,"vertex"),j=Df(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Z+`
`+Y+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(N===""||V==="")&&(X=!1);X&&(J.diagnostics={runnable:H,programLog:Z,vertexShader:{log:N,prefix:m},fragmentShader:{log:V,prefix:b}})}s.deleteShader(A),s.deleteShader(E),G=new Yr(s,p),v=lv(s,p)}let G;this.getUniforms=function(){return G===void 0&&D(this),G};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,ev)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=E,this}var bv=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gu(e),t.set(e,n)),n}},gu=class{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}};function Mv(i,e,t,n,s,r,o){let a=new Yo,c=new mu,l=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,T,J,Z,N){let V=Z.fog,H=N.geometry,X=v.isMeshStandardMaterial?Z.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),j=Y&&Y.mapping===Cc?Y.image.height:null,ce=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=ue!==void 0?ue.length:0,He=0;H.morphAttributes.position!==void 0&&(He=1),H.morphAttributes.normal!==void 0&&(He=2),H.morphAttributes.color!==void 0&&(He=3);let W,ie,xe,ze;if(ce){let pt=hi[ce];W=pt.vertexShader,ie=pt.fragmentShader}else W=v.vertexShader,ie=v.fragmentShader,c.update(v),xe=c.getVertexShaderID(v),ze=c.getFragmentShaderID(v);let Re=i.getRenderTarget(),be=N.isInstancedMesh===!0,at=N.isBatchedMesh===!0,Be=!!v.map,O=!!v.matcap,Wt=!!Y,Le=!!v.aoMap,qe=!!v.lightMap,Ue=!!v.bumpMap,nt=!!v.normalMap,Xe=!!v.displacementMap,Ke=!!v.emissiveMap,Mt=!!v.metalnessMap,w=!!v.roughnessMap,y=v.anisotropy>0,q=v.clearcoat>0,$=v.iridescence>0,re=v.sheen>0,te=v.transmission>0,Ge=y&&!!v.anisotropyMap,Oe=q&&!!v.clearcoatMap,he=q&&!!v.clearcoatNormalMap,fe=q&&!!v.clearcoatRoughnessMap,Ve=$&&!!v.iridescenceMap,le=$&&!!v.iridescenceThicknessMap,Dt=re&&!!v.sheenColorMap,Qe=re&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,Me=!!v.specularColorMap,we=!!v.specularIntensityMap,R=te&&!!v.transmissionMap,Q=te&&!!v.thicknessMap,Ee=!!v.gradientMap,L=!!v.alphaMap,oe=v.alphaTest>0,F=!!v.alphaHash,ne=!!v.extensions,pe=ys;v.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(pe=i.toneMapping);let tt={isWebGL2:h,shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:ie,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:ze,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:at,instancing:be,instancingColor:be&&N.instanceColor!==null,instancingMorph:be&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Qt,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:O,envMap:Wt,envMapMode:Wt&&Y.mapping,envMapCubeUVHeight:j,aoMap:Le,lightMap:qe,bumpMap:Ue,normalMap:nt,displacementMap:f&&Xe,emissiveMap:Ke,normalMapObjectSpace:nt&&v.normalMapType===wg,normalMapTangentSpace:nt&&v.normalMapType===Sp,metalnessMap:Mt,roughnessMap:w,anisotropy:y,anisotropyMap:Ge,clearcoat:q,clearcoatMap:Oe,clearcoatNormalMap:he,clearcoatRoughnessMap:fe,iridescence:$,iridescenceMap:Ve,iridescenceThicknessMap:le,sheen:re,sheenColorMap:Dt,sheenRoughnessMap:Qe,specularMap:Ce,specularColorMap:Me,specularIntensityMap:we,transmission:te,transmissionMap:R,thicknessMap:Q,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===qr&&v.alphaToCoverage===!1,alphaMap:L,alphaTest:oe,alphaHash:F,combine:v.combine,mapUv:Be&&p(v.map.channel),aoMapUv:Le&&p(v.aoMap.channel),lightMapUv:qe&&p(v.lightMap.channel),bumpMapUv:Ue&&p(v.bumpMap.channel),normalMapUv:nt&&p(v.normalMap.channel),displacementMapUv:Xe&&p(v.displacementMap.channel),emissiveMapUv:Ke&&p(v.emissiveMap.channel),metalnessMapUv:Mt&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:Ge&&p(v.anisotropyMap.channel),clearcoatMapUv:Oe&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(v.sheenRoughnessMap.channel),specularMapUv:Ce&&p(v.specularMap.channel),specularColorMapUv:Me&&p(v.specularColorMap.channel),specularIntensityMapUv:we&&p(v.specularIntensityMap.channel),transmissionMapUv:R&&p(v.transmissionMap.channel),thicknessMapUv:Q&&p(v.thicknessMap.channel),alphaMapUv:L&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(nt||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Be||L),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===Et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ne&&v.extensions.derivatives===!0,extensionFragDepth:ne&&v.extensions.fragDepth===!0,extensionDrawBuffers:ne&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ne&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function b(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let J in v.defines)T.push(J),T.push(v.defines[J]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.instancingMorph&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.normalMapObjectSpace&&a.enable(7),T.normalMapTangentSpace&&a.enable(8),T.clearcoat&&a.enable(9),T.iridescence&&a.enable(10),T.alphaTest&&a.enable(11),T.vertexColors&&a.enable(12),T.vertexAlphas&&a.enable(13),T.vertexUv1s&&a.enable(14),T.vertexUv2s&&a.enable(15),T.vertexUv3s&&a.enable(16),T.vertexTangents&&a.enable(17),T.anisotropy&&a.enable(18),T.alphaHash&&a.enable(19),T.batching&&a.enable(20),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),v.push(a.mask)}function I(v){let T=_[v.type],J;if(T){let Z=hi[T];J=l0.clone(Z.uniforms)}else J=v.uniforms;return J}function A(v,T){let J;for(let Z=0,N=u.length;Z<N;Z++){let V=u[Z];if(V.cacheKey===T){J=V,++J.usedTimes;break}}return J===void 0&&(J=new vv(i,T,v,r),u.push(J)),J}function E(v){if(--v.usedTimes===0){let T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function D(v){c.remove(v)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:I,acquireProgram:A,releaseProgram:E,releaseShaderCache:D,programs:u,dispose:G}}function Sv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ev(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,p){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){let m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(h,d,f,g,_,p){let m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||Ev),n.length>1&&n.sort(d||zf),s.length>1&&s.sort(d||zf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function wv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new kf,i.set(n,[o])):s>=r.length?(o=new kf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Av(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Pe};break;case"SpotLight":t={position:new C,direction:new C,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Rv=0;function Cv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Iv(i,e){let t=new Av,n=Tv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new C);let r=new C,o=new De,a=new De;function c(u,h){let d=0,f=0,g=0;for(let J=0;J<9;J++)s.probe[J].set(0,0,0);let _=0,p=0,m=0,b=0,x=0,M=0,I=0,A=0,E=0,D=0,G=0;u.sort(Cv);let v=h===!0?Math.PI:1;for(let J=0,Z=u.length;J<Z;J++){let N=u[J],V=N.color,H=N.intensity,X=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*H*v,f+=V.g*H*v,g+=V.b*H*v;else if(N.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(N.sh.coefficients[j],H);G++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*v),N.castShadow){let ce=N.shadow,ue=n.get(N);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,s.directionalShadow[_]=ue,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=N.shadow.matrix,M++}s.directional[_]=j,_++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(V).multiplyScalar(H*v),j.distance=X,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,s.spot[m]=j;let ce=N.shadow;if(N.map&&(s.spotLightMap[E]=N.map,E++,ce.updateMatrices(N),N.castShadow&&D++),s.spotLightMatrix[m]=ce.matrix,N.castShadow){let ue=n.get(N);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,s.spotShadow[m]=ue,s.spotShadowMap[m]=Y,A++}m++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(V).multiplyScalar(H),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),s.rectArea[b]=j,b++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*v),j.distance=N.distance,j.decay=N.decay,N.castShadow){let ce=N.shadow,ue=n.get(N);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,s.pointShadow[p]=ue,s.pointShadowMap[p]=Y,s.pointShadowMatrix[p]=N.shadow.matrix,I++}s.point[p]=j,p++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(H*v),j.groundColor.copy(N.groundColor).multiplyScalar(H*v),s.hemi[x]=j,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=de.LTC_FLOAT_1,s.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=de.LTC_HALF_1,s.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let T=s.hash;(T.directionalLength!==_||T.pointLength!==p||T.spotLength!==m||T.rectAreaLength!==b||T.hemiLength!==x||T.numDirectionalShadows!==M||T.numPointShadows!==I||T.numSpotShadows!==A||T.numSpotMaps!==E||T.numLightProbes!==G)&&(s.directional.length=_,s.spot.length=m,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=A+E-D,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=G,T.directionalLength=_,T.pointLength=p,T.spotLength=m,T.rectAreaLength=b,T.hemiLength=x,T.numDirectionalShadows=M,T.numPointShadows=I,T.numSpotShadows=A,T.numSpotMaps=E,T.numLightProbes=G,s.version=Rv++)}function l(u,h){let d=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){let M=u[b];if(M.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),d++}else if(M.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let I=s.rectArea[_];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let I=s.point[f];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:s}}function Hf(i,e){let t=new Iv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Pv(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new Hf(i,e),t.set(r,[c])):o>=a.length?(c=new Hf(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var _u=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xu=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dv(i,e,t){let n=new Ko,s=new Se,r=new Se,o=new yt,a=new _u({depthPacking:Eg}),c=new xu,l={},u=t.maxTextureSize,h={[fi]:fn,[fn]:fi,[bn]:bn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Lv,fragmentShader:Nv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Gt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let m=this.type;this.render=function(A,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let G=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),J=i.state;J.setBlending(xs),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let Z=m!==zi&&this.type===zi,N=m===zi&&this.type!==zi;for(let V=0,H=A.length;V<H;V++){let X=A[V],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let j=Y.getFrameExtents();if(s.multiply(j),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y)),Y.map===null||Z===!0||N===!0){let ue=this.type!==zi?{minFilter:kt,magFilter:kt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Wi(s.x,s.y,ue),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ce=Y.getViewportCount();for(let ue=0;ue<ce;ue++){let ve=Y.getViewport(ue);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),J.viewport(o),Y.updateMatrices(X,ue),n=Y.getFrustum(),M(E,D,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===zi&&b(Y,D),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(G,v,T)};function b(A,E){let D=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,D,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,D,f,_,null)}function x(A,E,D,G){let v=null,T=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=D.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let J=v.uuid,Z=E.uuid,N=l[J];N===void 0&&(N={},l[J]=N);let V=N[Z];V===void 0&&(V=v.clone(),N[Z]=V,E.addEventListener("dispose",I)),v=V}if(v.visible=E.visible,v.wireframe=E.wireframe,G===zi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:h[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let J=i.properties.get(v);J.light=D}return v}function M(A,E,D,G,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let Z=e.update(A),N=A.material;if(Array.isArray(N)){let V=Z.groups;for(let H=0,X=V.length;H<X;H++){let Y=V[H],j=N[Y.materialIndex];if(j&&j.visible){let ce=x(A,j,G,v);A.onBeforeShadow(i,A,E,D,Z,ce,Y),i.renderBufferDirect(D,null,Z,ce,A,Y),A.onAfterShadow(i,A,E,D,Z,ce,Y)}}}else if(N.visible){let V=x(A,N,G,v);A.onBeforeShadow(i,A,E,D,Z,V,null),i.renderBufferDirect(D,null,Z,V,A,null),A.onAfterShadow(i,A,E,D,Z,V,null)}}let J=A.children;for(let Z=0,N=J.length;Z<N;Z++)M(J[Z],E,D,G,v)}function I(A){A.target.removeEventListener("dispose",I);for(let D in l){let G=l[D],v=A.target.uuid;v in G&&(G[v].dispose(),delete G[v])}}}function Uv(i,e,t){let n=t.isWebGL2;function s(){let L=!1,oe=new yt,F=null,ne=new yt(0,0,0,0);return{setMask:function(pe){F!==pe&&!L&&(i.colorMask(pe,pe,pe,pe),F=pe)},setLocked:function(pe){L=pe},setClear:function(pe,tt,pt,xt,Ut){Ut===!0&&(pe*=xt,tt*=xt,pt*=xt),oe.set(pe,tt,pt,xt),ne.equals(oe)===!1&&(i.clearColor(pe,tt,pt,xt),ne.copy(oe))},reset:function(){L=!1,F=null,ne.set(-1,0,0,0)}}}function r(){let L=!1,oe=null,F=null,ne=null;return{setTest:function(pe){pe?be(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(pe){oe!==pe&&!L&&(i.depthMask(pe),oe=pe)},setFunc:function(pe){if(F!==pe){switch(pe){case Qm:i.depthFunc(i.NEVER);break;case eg:i.depthFunc(i.ALWAYS);break;case tg:i.depthFunc(i.LESS);break;case nc:i.depthFunc(i.LEQUAL);break;case ng:i.depthFunc(i.EQUAL);break;case ig:i.depthFunc(i.GEQUAL);break;case sg:i.depthFunc(i.GREATER);break;case rg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=pe}},setLocked:function(pe){L=pe},setClear:function(pe){ne!==pe&&(i.clearDepth(pe),ne=pe)},reset:function(){L=!1,oe=null,F=null,ne=null}}}function o(){let L=!1,oe=null,F=null,ne=null,pe=null,tt=null,pt=null,xt=null,Ut=null;return{setTest:function(ct){L||(ct?be(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(ct){oe!==ct&&!L&&(i.stencilMask(ct),oe=ct)},setFunc:function(ct,St,cn){(F!==ct||ne!==St||pe!==cn)&&(i.stencilFunc(ct,St,cn),F=ct,ne=St,pe=cn)},setOp:function(ct,St,cn){(tt!==ct||pt!==St||xt!==cn)&&(i.stencilOp(ct,St,cn),tt=ct,pt=St,xt=cn)},setLocked:function(ct){L=ct},setClear:function(ct){Ut!==ct&&(i.clearStencil(ct),Ut=ct)},reset:function(){L=!1,oe=null,F=null,ne=null,pe=null,tt=null,pt=null,xt=null,Ut=null}}}let a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap,d={},f={},g=new WeakMap,_=[],p=null,m=!1,b=null,x=null,M=null,I=null,A=null,E=null,D=null,G=new Pe(0,0,0),v=0,T=!1,J=null,Z=null,N=null,V=null,H=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,j=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ce)[1]),Y=j>=1):ce.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),Y=j>=2);let ue=null,ve={},He=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ie=new yt().fromArray(He),xe=new yt().fromArray(W);function ze(L,oe,F,ne){let pe=new Uint8Array(4),tt=i.createTexture();i.bindTexture(L,tt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<F;pt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(oe+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return tt}let Re={};Re[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(i.DEPTH_TEST),c.setFunc(nc),Xe(!1),Ke(xd),be(i.CULL_FACE),Ue(xs);function be(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function at(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Be(L,oe){return f[L]!==oe?(i.bindFramebuffer(L,oe),f[L]=oe,n&&(L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(L,oe){let F=_,ne=!1;if(L){F=g.get(oe),F===void 0&&(F=[],g.set(oe,F));let pe=L.textures;if(F.length!==pe.length||F[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,pt=pe.length;tt<pt;tt++)F[tt]=i.COLOR_ATTACHMENT0+tt;F.length=pe.length,ne=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,ne=!0);if(ne)if(t.isWebGL2)i.drawBuffers(F);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Wt(L){return p!==L?(i.useProgram(L),p=L,!0):!1}let Le={[Zs]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};if(n)Le[Md]=i.MIN,Le[Sd]=i.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Le[Md]=L.MIN_EXT,Le[Sd]=L.MAX_EXT)}let qe={[km]:i.ZERO,[Hm]:i.ONE,[Gm]:i.SRC_COLOR,[eu]:i.SRC_ALPHA,[Km]:i.SRC_ALPHA_SATURATE,[Xm]:i.DST_COLOR,[Wm]:i.DST_ALPHA,[Vm]:i.ONE_MINUS_SRC_COLOR,[tu]:i.ONE_MINUS_SRC_ALPHA,[Ym]:i.ONE_MINUS_DST_COLOR,[qm]:i.ONE_MINUS_DST_ALPHA,[jm]:i.CONSTANT_COLOR,[Zm]:i.ONE_MINUS_CONSTANT_COLOR,[$m]:i.CONSTANT_ALPHA,[Jm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(L,oe,F,ne,pe,tt,pt,xt,Ut,ct){if(L===xs){m===!0&&(at(i.BLEND),m=!1);return}if(m===!1&&(be(i.BLEND),m=!0),L!==Fm){if(L!==b||ct!==T){if((x!==Zs||A!==Zs)&&(i.blendEquation(i.FUNC_ADD),x=Zs,A=Zs),ct)switch(L){case qr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yd:i.blendFunc(i.ONE,i.ONE);break;case vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,I=null,E=null,D=null,G.set(0,0,0),v=0,b=L,T=ct}return}pe=pe||oe,tt=tt||F,pt=pt||ne,(oe!==x||pe!==A)&&(i.blendEquationSeparate(Le[oe],Le[pe]),x=oe,A=pe),(F!==M||ne!==I||tt!==E||pt!==D)&&(i.blendFuncSeparate(qe[F],qe[ne],qe[tt],qe[pt]),M=F,I=ne,E=tt,D=pt),(xt.equals(G)===!1||Ut!==v)&&(i.blendColor(xt.r,xt.g,xt.b,Ut),G.copy(xt),v=Ut),b=L,T=!1}function nt(L,oe){L.side===bn?at(i.CULL_FACE):be(i.CULL_FACE);let F=L.side===fn;oe&&(F=!F),Xe(F),L.blending===qr&&L.transparent===!1?Ue(xs):Ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let ne=L.stencilWrite;l.setTest(ne),ne&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),w(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){J!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),J=L)}function Ke(L){L!==Um?(be(i.CULL_FACE),L!==Z&&(L===xd?i.cullFace(i.BACK):L===Om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),Z=L}function Mt(L){L!==N&&(Y&&i.lineWidth(L),N=L)}function w(L,oe,F){L?(be(i.POLYGON_OFFSET_FILL),(V!==oe||H!==F)&&(i.polygonOffset(oe,F),V=oe,H=F)):at(i.POLYGON_OFFSET_FILL)}function y(L){L?be(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function q(L){L===void 0&&(L=i.TEXTURE0+X-1),ue!==L&&(i.activeTexture(L),ue=L)}function $(L,oe,F){F===void 0&&(ue===null?F=i.TEXTURE0+X-1:F=ue);let ne=ve[F];ne===void 0&&(ne={type:void 0,texture:void 0},ve[F]=ne),(ne.type!==L||ne.texture!==oe)&&(ue!==F&&(i.activeTexture(F),ue=F),i.bindTexture(L,oe||Re[L]),ne.type=L,ne.texture=oe)}function re(){let L=ve[ue];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(L){ie.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function we(L){xe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function R(L,oe){let F=h.get(oe);F===void 0&&(F=new WeakMap,h.set(oe,F));let ne=F.get(L);ne===void 0&&(ne=i.getUniformBlockIndex(oe,L.name),F.set(L,ne))}function Q(L,oe){let ne=h.get(oe).get(L);u.get(oe)!==ne&&(i.uniformBlockBinding(oe,ne,L.__bindingPointIndex),u.set(oe,ne))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,ve={},f={},g=new WeakMap,_=[],p=null,m=!1,b=null,x=null,M=null,I=null,A=null,E=null,D=null,G=new Pe(0,0,0),v=0,T=!1,J=null,Z=null,N=null,V=null,H=null,ie.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:be,disable:at,bindFramebuffer:Be,drawBuffers:O,useProgram:Wt,setBlending:Ue,setMaterial:nt,setFlipSided:Xe,setCullFace:Ke,setLineWidth:Mt,setPolygonOffset:w,setScissorTest:y,activeTexture:q,bindTexture:$,unbindTexture:re,compressedTexImage2D:te,compressedTexImage3D:Ge,texImage2D:Qe,texImage3D:Ce,updateUBOMapping:R,uniformBlockBinding:Q,texStorage2D:le,texStorage3D:Dt,texSubImage2D:Oe,texSubImage3D:he,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ve,scissor:Me,viewport:we,reset:Ee}}function Ov(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Se,h=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return g?new OffscreenCanvas(w,y):Xo("canvas")}function p(w,y,q,$){let re=1,te=Mt(w);if((te.width>$||te.height>$)&&(re=$/Math.max(te.width,te.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Ge=y?ac:Math.floor,Oe=Ge(re*te.width),he=Ge(re*te.height);d===void 0&&(d=_(Oe,he));let fe=q?_(Oe,he):d;return fe.width=Oe,fe.height=he,fe.getContext("2d").drawImage(w,0,0,Oe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Oe+"x"+he+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){let y=Mt(w);return ou(y.width)&&ou(y.height)}function b(w){return a?!1:w.wrapS!==Mn||w.wrapT!==Mn||w.minFilter!==kt&&w.minFilter!==qt}function x(w,y){return w.generateMipmaps&&y&&w.minFilter!==kt&&w.minFilter!==qt}function M(w){i.generateMipmap(w)}function I(w,y,q,$,re=!1){if(a===!1)return y;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=y;if(y===i.RED&&(q===i.FLOAT&&(te=i.R32F),q===i.HALF_FLOAT&&(te=i.R16F),q===i.UNSIGNED_BYTE&&(te=i.R8)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.R8UI),q===i.UNSIGNED_SHORT&&(te=i.R16UI),q===i.UNSIGNED_INT&&(te=i.R32UI),q===i.BYTE&&(te=i.R8I),q===i.SHORT&&(te=i.R16I),q===i.INT&&(te=i.R32I)),y===i.RG&&(q===i.FLOAT&&(te=i.RG32F),q===i.HALF_FLOAT&&(te=i.RG16F),q===i.UNSIGNED_BYTE&&(te=i.RG8)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(te=i.RG8UI),q===i.UNSIGNED_SHORT&&(te=i.RG16UI),q===i.UNSIGNED_INT&&(te=i.RG32UI),q===i.BYTE&&(te=i.RG8I),q===i.SHORT&&(te=i.RG16I),q===i.INT&&(te=i.RG32I)),y===i.RGBA){let Ge=re?ic:ut.getTransfer($);q===i.FLOAT&&(te=i.RGBA32F),q===i.HALF_FLOAT&&(te=i.RGBA16F),q===i.UNSIGNED_BYTE&&(te=Ge===Et?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function A(w,y,q){return x(w,q)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==qt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function E(w){return w===kt||w===Zr||w===ki?i.NEAREST:i.LINEAR}function D(w){let y=w.target;y.removeEventListener("dispose",D),v(y),y.isVideoTexture&&h.delete(y)}function G(w){let y=w.target;y.removeEventListener("dispose",G),J(y)}function v(w){let y=n.get(w);if(y.__webglInit===void 0)return;let q=w.source,$=f.get(q);if($){let re=$[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(w),Object.keys($).length===0&&f.delete(q)}n.remove(w)}function T(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let q=w.source,$=f.get(q);delete $[y.__cacheKey],o.memory.textures--}function J(w){let y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let re=0;re<y.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(y.__webglFramebuffer[$][re]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=w.textures;for(let $=0,re=q.length;$<re;$++){let te=n.get(q[$]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(q[$])}n.remove(w)}let Z=0;function N(){Z=0}function V(){let w=Z;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),Z+=1,w}function H(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function X(w,y){let q=n.get(w);if(w.isVideoTexture&&Xe(w),w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(q,w,y);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function Y(w,y){let q=n.get(w);if(w.version>0&&q.__version!==w.version){xe(q,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function j(w,y){let q=n.get(w);if(w.version>0&&q.__version!==w.version){xe(q,w,y);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function ce(w,y){let q=n.get(w);if(w.version>0&&q.__version!==w.version){ze(q,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}let ue={[Gi]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[nr]:i.MIRRORED_REPEAT},ve={[kt]:i.NEAREST,[Zr]:i.NEAREST_MIPMAP_NEAREST,[ki]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Qs]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},He={[Ag]:i.NEVER,[Lg]:i.ALWAYS,[Tg]:i.LESS,[Ep]:i.LEQUAL,[Rg]:i.EQUAL,[Pg]:i.GEQUAL,[Cg]:i.GREATER,[Ig]:i.NOTEQUAL};function W(w,y,q){if(y.type===Jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qt||y.magFilter===Qs||y.magFilter===ki||y.magFilter===kn||y.minFilter===qt||y.minFilter===Qs||y.minFilter===ki||y.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(i.texParameteri(w,i.TEXTURE_WRAP_S,ue[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ue[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ue[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ve[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ve[y.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==Mn||y.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,E(y.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==kt&&y.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,He[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kt||y.minFilter!==ki&&y.minFilter!==kn||y.type===Jn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===qo&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ie(w,y){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",D));let $=y.source,re=f.get($);re===void 0&&(re={},f.set($,re));let te=H(y);if(te!==w.__cacheKey){re[te]===void 0&&(re[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[te].usedTimes++;let Ge=re[w.__cacheKey];Ge!==void 0&&(re[w.__cacheKey].usedTimes--,Ge.usedTimes===0&&T(y)),w.__cacheKey=te,w.__webglTexture=re[te].texture}return q}function xe(w,y,q){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);let re=ie(w,y),te=y.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+q);let Ge=n.get(te);if(te.version!==Ge.__version||re===!0){t.activeTexture(i.TEXTURE0+q);let Oe=ut.getPrimaries(ut.workingColorSpace),he=y.colorSpace===di?null:ut.getPrimaries(y.colorSpace),fe=y.colorSpace===di||Oe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ve=b(y)&&m(y.image)===!1,le=p(y.image,Ve,!1,s.maxTextureSize);le=Ke(y,le);let Dt=m(le)||a,Qe=r.convert(y.format,y.colorSpace),Ce=r.convert(y.type),Me=I(y.internalFormat,Qe,Ce,y.colorSpace,y.isVideoTexture);W($,y,Dt);let we,R=y.mipmaps,Q=a&&y.isVideoTexture!==!0&&Me!==bp,Ee=Ge.__version===void 0||re===!0,L=te.dataReady,oe=A(y,le,Dt);if(y.isDepthTexture)Me=i.DEPTH_COMPONENT,a?y.type===Jn?Me=i.DEPTH_COMPONENT32F:y.type===gs?Me=i.DEPTH_COMPONENT24:y.type===er?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:y.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===tr&&Me===i.DEPTH_COMPONENT&&y.type!==Bu&&y.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=gs,Ce=r.convert(y.type)),y.format===$r&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,y.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=er,Ce=r.convert(y.type))),Ee&&(Q?t.texStorage2D(i.TEXTURE_2D,1,Me,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Me,le.width,le.height,0,Qe,Ce,null));else if(y.isDataTexture)if(R.length>0&&Dt){Q&&Ee&&t.texStorage2D(i.TEXTURE_2D,oe,Me,R[0].width,R[0].height);for(let F=0,ne=R.length;F<ne;F++)we=R[F],Q?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,we.width,we.height,Qe,Ce,we.data):t.texImage2D(i.TEXTURE_2D,F,Me,we.width,we.height,0,Qe,Ce,we.data);y.generateMipmaps=!1}else Q?(Ee&&t.texStorage2D(i.TEXTURE_2D,oe,Me,le.width,le.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Qe,Ce,le.data)):t.texImage2D(i.TEXTURE_2D,0,Me,le.width,le.height,0,Qe,Ce,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Q&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Me,R[0].width,R[0].height,le.depth);for(let F=0,ne=R.length;F<ne;F++)we=R[F],y.format!==En?Qe!==null?Q?L&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,we.width,we.height,le.depth,Qe,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,Me,we.width,we.height,le.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,we.width,we.height,le.depth,Qe,Ce,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,Me,we.width,we.height,le.depth,0,Qe,Ce,we.data)}else{Q&&Ee&&t.texStorage2D(i.TEXTURE_2D,oe,Me,R[0].width,R[0].height);for(let F=0,ne=R.length;F<ne;F++)we=R[F],y.format!==En?Qe!==null?Q?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,we.width,we.height,Qe,we.data):t.compressedTexImage2D(i.TEXTURE_2D,F,Me,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,we.width,we.height,Qe,Ce,we.data):t.texImage2D(i.TEXTURE_2D,F,Me,we.width,we.height,0,Qe,Ce,we.data)}else if(y.isDataArrayTexture)Q?(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Me,le.width,le.height,le.depth),L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Qe,Ce,le.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,le.width,le.height,le.depth,0,Qe,Ce,le.data);else if(y.isData3DTexture)Q?(Ee&&t.texStorage3D(i.TEXTURE_3D,oe,Me,le.width,le.height,le.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Qe,Ce,le.data)):t.texImage3D(i.TEXTURE_3D,0,Me,le.width,le.height,le.depth,0,Qe,Ce,le.data);else if(y.isFramebufferTexture){if(Ee)if(Q)t.texStorage2D(i.TEXTURE_2D,oe,Me,le.width,le.height);else{let F=le.width,ne=le.height;for(let pe=0;pe<oe;pe++)t.texImage2D(i.TEXTURE_2D,pe,Me,F,ne,0,Qe,Ce,null),F>>=1,ne>>=1}}else if(R.length>0&&Dt){if(Q&&Ee){let F=Mt(R[0]);t.texStorage2D(i.TEXTURE_2D,oe,Me,F.width,F.height)}for(let F=0,ne=R.length;F<ne;F++)we=R[F],Q?L&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Qe,Ce,we):t.texImage2D(i.TEXTURE_2D,F,Me,Qe,Ce,we);y.generateMipmaps=!1}else if(Q){if(Ee){let F=Mt(le);t.texStorage2D(i.TEXTURE_2D,oe,Me,F.width,F.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Qe,Ce,le)}else t.texImage2D(i.TEXTURE_2D,0,Me,Qe,Ce,le);x(y,Dt)&&M($),Ge.__version=te.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ze(w,y,q){if(y.image.length!==6)return;let $=ie(w,y),re=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+q);let te=n.get(re);if(re.version!==te.__version||$===!0){t.activeTexture(i.TEXTURE0+q);let Ge=ut.getPrimaries(ut.workingColorSpace),Oe=y.colorSpace===di?null:ut.getPrimaries(y.colorSpace),he=y.colorSpace===di||Ge===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,le=[];for(let F=0;F<6;F++)!fe&&!Ve?le[F]=p(y.image[F],!1,!0,s.maxCubemapSize):le[F]=Ve?y.image[F].image:y.image[F],le[F]=Ke(y,le[F]);let Dt=le[0],Qe=m(Dt)||a,Ce=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),we=I(y.internalFormat,Ce,Me,y.colorSpace),R=a&&y.isVideoTexture!==!0,Q=te.__version===void 0||$===!0,Ee=re.dataReady,L=A(y,Dt,Qe);W(i.TEXTURE_CUBE_MAP,y,Qe);let oe;if(fe){R&&Q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,we,Dt.width,Dt.height);for(let F=0;F<6;F++){oe=le[F].mipmaps;for(let ne=0;ne<oe.length;ne++){let pe=oe[ne];y.format!==En?Ce!==null?R?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,pe.width,pe.height,Ce,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,0,0,pe.width,pe.height,Ce,Me,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne,we,pe.width,pe.height,0,Ce,Me,pe.data)}}}else{if(oe=y.mipmaps,R&&Q){oe.length>0&&L++;let F=Mt(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,L,we,F.width,F.height)}for(let F=0;F<6;F++)if(Ve){R?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,le[F].width,le[F].height,Ce,Me,le[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,we,le[F].width,le[F].height,0,Ce,Me,le[F].data);for(let ne=0;ne<oe.length;ne++){let tt=oe[ne].image[F].image;R?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,tt.width,tt.height,Ce,Me,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,we,tt.width,tt.height,0,Ce,Me,tt.data)}}else{R?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Ce,Me,le[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,we,Ce,Me,le[F]);for(let ne=0;ne<oe.length;ne++){let pe=oe[ne];R?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,0,0,Ce,Me,pe.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ne+1,we,Ce,Me,pe.image[F])}}}x(y,Qe)&&M(i.TEXTURE_CUBE_MAP),te.__version=re.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Re(w,y,q,$,re,te){let Ge=r.convert(q.format,q.colorSpace),Oe=r.convert(q.type),he=I(q.internalFormat,Ge,Oe,q.colorSpace);if(!n.get(y).__hasExternalTextures){let Ve=Math.max(1,y.width>>te),le=Math.max(1,y.height>>te);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,te,he,Ve,le,y.depth,0,Ge,Oe,null):t.texImage2D(re,te,he,Ve,le,0,Ge,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),nt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,re,n.get(q).__webglTexture,0,Ue(y)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,re,n.get(q).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let $=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||nt(y)){let re=y.depthTexture;re&&re.isDepthTexture&&(re.type===Jn?$=i.DEPTH_COMPONENT32F:re.type===gs&&($=i.DEPTH_COMPONENT24));let te=Ue(y);nt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,$,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,$,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){let $=Ue(y);q&&nt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,y.width,y.height):nt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let $=y.textures;for(let re=0;re<$.length;re++){let te=$[re],Ge=r.convert(te.format,te.colorSpace),Oe=r.convert(te.type),he=I(te.internalFormat,Ge,Oe,te.colorSpace),fe=Ue(y);q&&nt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,he,y.width,y.height):nt(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,he,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,he,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let $=n.get(y.depthTexture).__webglTexture,re=Ue(y);if(y.depthTexture.format===tr)nt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===$r)nt(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Be(w){let y=n.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");at(y.__webglFramebuffer,w)}else if(q){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=i.createRenderbuffer(),be(y.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),be(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(w,y,q){let $=n.get(w);y!==void 0&&Re($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Be(w)}function Wt(w){let y=w.texture,q=n.get(w),$=n.get(y);w.addEventListener("dispose",G);let re=w.textures,te=w.isWebGLCubeRenderTarget===!0,Ge=re.length>1,Oe=m(w)||a;if(Ge||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),te){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let fe=0;fe<y.mipmaps.length;fe++)q.__webglFramebuffer[he][fe]=i.createFramebuffer()}else q.__webglFramebuffer[he]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)q.__webglFramebuffer[he]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ge)if(s.drawBuffers)for(let he=0,fe=re.length;he<fe;he++){let Ve=n.get(re[he]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&nt(w)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){let fe=re[he];q.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[he]);let Ve=r.convert(fe.format,fe.colorSpace),le=r.convert(fe.type),Dt=I(fe.internalFormat,Ve,le,fe.colorSpace,w.isXRRenderTarget===!0),Qe=Ue(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,q.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),be(q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),W(i.TEXTURE_CUBE_MAP,y,Oe);for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)Re(q.__webglFramebuffer[he][fe],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else Re(q.__webglFramebuffer[he],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(y,Oe)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let he=0,fe=re.length;he<fe;he++){let Ve=re[he],le=n.get(Ve);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),W(i.TEXTURE_2D,Ve,Oe),Re(q.__webglFramebuffer,w,Ve,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),x(Ve,Oe)&&M(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,$.__webglTexture),W(he,y,Oe),a&&y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)Re(q.__webglFramebuffer[fe],w,y,i.COLOR_ATTACHMENT0,he,fe);else Re(q.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,he,0);x(y,Oe)&&M(he),t.unbindTexture()}w.depthBuffer&&Be(w)}function Le(w){let y=m(w)||a,q=w.textures;for(let $=0,re=q.length;$<re;$++){let te=q[$];if(x(te,y)){let Ge=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Oe=n.get(te).__webglTexture;t.bindTexture(Ge,Oe),M(Ge),t.unbindTexture()}}}function qe(w){if(a&&w.samples>0&&nt(w)===!1){let y=w.textures,q=w.width,$=w.height,re=i.COLOR_BUFFER_BIT,te=[],Ge=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(w),he=y.length>1;if(he)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){te.push(i.COLOR_ATTACHMENT0+fe),w.depthBuffer&&te.push(Ge);let Ve=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(Ve===!1&&(w.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[fe]),Ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),he){let le=n.get(y[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,q,$,0,0,q,$,re,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[fe]);let Ve=n.get(y[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function Ue(w){return Math.min(s.maxSamples,w.samples)}function nt(w){let y=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Xe(w){let y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ke(w,y){let q=w.colorSpace,$=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ru||q!==Qt&&q!==di&&(ut.getTransfer(q)===Et?a===!1?e.has("EXT_sRGB")===!0&&$===En?(w.format=ru,w.minFilter=qt,w.generateMipmaps=!1):y=cc.sRGBToLinear(y):($!==En||re!==vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function Mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=ce,this.rebindTextures=O,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=nt}function Fv(i,e,t){let n=t.isWebGL2;function s(r,o=di){let a,c=ut.getTransfer(o);if(r===vs)return i.UNSIGNED_BYTE;if(r===mp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===gp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===mg)return i.BYTE;if(r===gg)return i.SHORT;if(r===Bu)return i.UNSIGNED_SHORT;if(r===pp)return i.INT;if(r===gs)return i.UNSIGNED_INT;if(r===Jn)return i.FLOAT;if(r===qo)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_g)return i.ALPHA;if(r===En)return i.RGBA;if(r===xg)return i.LUMINANCE;if(r===yg)return i.LUMINANCE_ALPHA;if(r===tr)return i.DEPTH_COMPONENT;if(r===$r)return i.DEPTH_STENCIL;if(r===ru)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===_p)return i.RED;if(r===xp)return i.RED_INTEGER;if(r===vg)return i.RG;if(r===yp)return i.RG_INTEGER;if(r===vp)return i.RGBA_INTEGER;if(r===xl||r===yl||r===vl||r===bl)if(c===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Ad||r===Td||r===Rd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ad)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cd||r===Id)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Cd)return c===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Id)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pd||r===Ld||r===Nd||r===Dd||r===Ud||r===Od||r===Fd||r===Bd||r===zd||r===kd||r===Hd||r===Gd||r===Vd||r===Wd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Nd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Od)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wd)return c===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml||r===qd||r===Xd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ml)return c===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bg||r===Yd||r===Kd||r===jd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ml)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Yd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===er?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var yu=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ae=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bv={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,s=new Hn({extensions:{fragDepth:!0},vertexShader:zv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ne(new Xi(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},bu=class extends pi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,_=new vu,p=t.getContextAttributes(),m=null,b=null,x=[],M=[],I=new Se,A=null,E=new Ht;E.layers.enable(1),E.viewport=new yt;let D=new Ht;D.layers.enable(2),D.viewport=new yt;let G=[E,D],v=new yu;v.layers.enable(1),v.layers.enable(2);let T=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=x[W];return ie===void 0&&(ie=new Wo,x[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=x[W];return ie===void 0&&(ie=new Wo,x[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=x[W];return ie===void 0&&(ie=new Wo,x[W]=ie),ie.getHandSpace()};function Z(W){let ie=M.indexOf(W.inputSource);if(ie===-1)return;let xe=x[ie];xe!==void 0&&(xe.update(W.inputSource,W.frame,l||o),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",V);for(let W=0;W<x.length;W++){let ie=M[W];ie!==null&&(M[W]=null,x[W].disconnect(ie))}T=null,J=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,s=null,b=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Wi(f.framebufferWidth,f.framebufferHeight,{format:En,type:vs,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,xe=null,ze=null;p.depth&&(ze=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?$r:tr,xe=p.stencil?er:gs);let Re={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Wi(d.textureWidth,d.textureHeight,{format:En,type:vs,depthTexture:new pc(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let be=e.properties.get(b);be.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(W){for(let ie=0;ie<W.removed.length;ie++){let xe=W.removed[ie],ze=M.indexOf(xe);ze>=0&&(M[ze]=null,x[ze].disconnect(xe))}for(let ie=0;ie<W.added.length;ie++){let xe=W.added[ie],ze=M.indexOf(xe);if(ze===-1){for(let be=0;be<x.length;be++)if(be>=M.length){M.push(xe),ze=be;break}else if(M[be]===null){M[be]=xe,ze=be;break}if(ze===-1)break}let Re=x[ze];Re&&Re.connect(xe)}}let H=new C,X=new C;function Y(W,ie,xe){H.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(xe.matrixWorld);let ze=H.distanceTo(X),Re=ie.projectionMatrix.elements,be=xe.projectionMatrix.elements,at=Re[14]/(Re[10]-1),Be=Re[14]/(Re[10]+1),O=(Re[9]+1)/Re[5],Wt=(Re[9]-1)/Re[5],Le=(Re[8]-1)/Re[0],qe=(be[8]+1)/be[0],Ue=at*Le,nt=at*qe,Xe=ze/(-Le+qe),Ke=Xe*-Le;ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ke),W.translateZ(Xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let Mt=at+Xe,w=Be+Xe,y=Ue-Ke,q=nt+(ze-Ke),$=O*Be/w*Mt,re=Wt*Be/w*Mt;W.projectionMatrix.makePerspective(y,q,$,re,Mt,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),v.near=D.near=E.near=W.near,v.far=D.far=E.far=W.far,(T!==v.near||J!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,J=v.far,E.near=T,E.far=J,D.near=T,D.far=J,E.updateProjectionMatrix(),D.updateProjectionMatrix(),W.updateProjectionMatrix());let ie=W.parent,xe=v.cameras;j(v,ie);for(let ze=0;ze<xe.length;ze++)j(xe[ze],ie);xe.length===2?Y(v,E,D):v.projectionMatrix.copy(E.projectionMatrix),ce(W,v,ie)};function ce(W,ie,xe){xe===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Jr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let ue=null;function ve(W,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,ze=!0);for(let be=0;be<xe.length;be++){let at=xe[be],Be=null;if(f!==null)Be=f.getViewport(at);else{let Wt=h.getViewSubImage(d,at);Be=Wt.viewport,be===0&&(e.setRenderTargetTextures(b,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(b))}let O=G[be];O===void 0&&(O=new Ht,O.layers.enable(be),O.viewport=new yt,G[be]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Be.x,Be.y,Be.width,Be.height),be===0&&(v.matrix.copy(O.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ze===!0&&v.cameras.push(O)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let be=h.getDepthInformation(xe[0]);be&&be.isValid&&be.texture&&_.init(e,be,s.renderState)}}for(let xe=0;xe<x.length;xe++){let ze=M[xe],Re=x[xe];ze!==null&&Re!==void 0&&Re.update(ze,ie,l||o)}_.render(e,v),ue&&ue(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let He=new Cp;He.setAnimationLoop(ve),this.setAnimationLoop=function(W){ue=W},this.dispose=function(){}}},Ks=new mi,Hv=new De;function Gv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Rp(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),x=b.envMap,M=b.envMapRotation;if(x&&(p.envMap.value=x,Ks.copy(M),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),p.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Ks)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let I=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vv(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,x){let M=x.program;n.uniformBlockBinding(b,M)}function l(b,x){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",p));let I=x.program;n.updateUBOMapping(b,I);let A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function u(b){let x=h();b.__bindingPointIndex=x;let M=i.createBuffer(),I=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=s[b.id],M=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,E=M.length;A<E;A++){let D=Array.isArray(M[A])?M[A]:[M[A]];for(let G=0,v=D.length;G<v;G++){let T=D[G];if(f(T,A,G,I)===!0){let J=T.__offset,Z=Array.isArray(T.value)?T.value:[T.value],N=0;for(let V=0;V<Z.length;V++){let H=Z[V],X=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,J+N,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,x,M,I){let A=b.value,E=x+"_"+M;if(I[E]===void 0)return typeof A=="number"||typeof A=="boolean"?I[E]=A:I[E]=A.clone(),!0;{let D=I[E];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return I[E]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(b){let x=b.uniforms,M=0,I=16;for(let E=0,D=x.length;E<D;E++){let G=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,T=G.length;v<T;v++){let J=G[v],Z=Array.isArray(J.value)?J.value:[J.value];for(let N=0,V=Z.length;N<V;N++){let H=Z[N],X=_(H),Y=M%I;Y!==0&&I-Y<X.boundary&&(M+=I-Y),J.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=M,M+=X.storage}}}let A=M%I;return A>0&&(M+=I-A),b.__size=M,b.__cache={},this}function _(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){let x=b.target;x.removeEventListener("dispose",p);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ir=class{constructor(e={}){let{canvas:t=Yg(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=ys,this.toneMappingExposure=1;let x=this,M=!1,I=0,A=0,E=null,D=-1,G=null,v=new yt,T=new yt,J=null,Z=new Pe(0),N=0,V=t.width,H=t.height,X=1,Y=null,j=null,ce=new yt(0,0,V,H),ue=new yt(0,0,V,H),ve=!1,He=new Ko,W=!1,ie=!1,xe=null,ze=new De,Re=new Se,be=new C,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return E===null?X:1}let O=n;function Wt(S,U){for(let z=0;z<S.length;z++){let k=S[z],B=t.getContext(k,U);if(B!==null)return B}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r162"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),O=Wt(U,S),O===null)throw Wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Le,qe,Ue,nt,Xe,Ke,Mt,w,y,q,$,re,te,Ge,Oe,he,fe,Ve,le,Dt,Qe,Ce,Me,we;function R(){Le=new ry(O),qe=new Qx(O,Le,e),Le.init(qe),Ce=new Fv(O,Le,qe),Ue=new Uv(O,Le,qe),nt=new cy(O),Xe=new Sv,Ke=new Ov(O,Le,Ue,Xe,qe,Ce,nt),Mt=new ty(x),w=new sy(x),y=new p0(O,qe),Me=new $x(O,Le,y,qe),q=new oy(O,y,nt,Me),$=new dy(O,q,y,nt),le=new hy(O,qe,Ke),he=new ey(Xe),re=new Mv(x,Mt,w,Le,qe,Me,he),te=new Gv(x,Xe),Ge=new wv,Oe=new Pv(Le,qe),Ve=new Zx(x,Mt,w,Ue,$,d,c),fe=new Dv(x,$,qe),we=new Vv(O,nt,qe,Ue),Dt=new Jx(O,Le,nt,qe),Qe=new ay(O,Le,nt,qe),nt.programs=re.programs,x.capabilities=qe,x.extensions=Le,x.properties=Xe,x.renderLists=Ge,x.shadowMap=fe,x.state=Ue,x.info=nt}R();let Q=new bu(x,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=Le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(V,H,!1))},this.getSize=function(S){return S.set(V,H)},this.setSize=function(S,U,z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,H=U,t.width=Math.floor(S*X),t.height=Math.floor(U*X),z===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(V*X,H*X).floor()},this.setDrawingBufferSize=function(S,U,z){V=S,H=U,X=z,t.width=Math.floor(S*z),t.height=Math.floor(U*z),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,U,z,k){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,U,z,k),Ue.viewport(v.copy(ce).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(ue)},this.setScissor=function(S,U,z,k){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,U,z,k),Ue.scissor(T.copy(ue).multiplyScalar(X).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){Ue.setScissorTest(ve=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(S=!0,U=!0,z=!0){let k=0;if(S){let B=!1;if(E!==null){let me=E.texture.format;B=me===vp||me===yp||me===xp}if(B){let me=E.texture.type,Te=me===vs||me===gs||me===Bu||me===er||me===mp||me===gp,Fe=Ve.getClearColor(),ke=Ve.getClearAlpha(),et=Fe.r,We=Fe.g,Ye=Fe.b;Te?(f[0]=et,f[1]=We,f[2]=Ye,f[3]=ke,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=et,g[1]=We,g[2]=Ye,g[3]=ke,O.clearBufferiv(O.COLOR,0,g))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT),z&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ge.dispose(),Oe.dispose(),Xe.dispose(),Mt.dispose(),w.dispose(),$.dispose(),Me.dispose(),we.dispose(),re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ut),Q.removeEventListener("sessionend",ct),xe&&(xe.dispose(),xe=null),St.stop()};function Ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=nt.autoReset,U=fe.enabled,z=fe.autoUpdate,k=fe.needsUpdate,B=fe.type;R(),nt.autoReset=S,fe.enabled=U,fe.autoUpdate=z,fe.needsUpdate=k,fe.type=B}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function F(S){let U=S.target;U.removeEventListener("dispose",F),ne(U)}function ne(S){pe(S),Xe.remove(S)}function pe(S){let U=Xe.get(S).programs;U!==void 0&&(U.forEach(function(z){re.releaseProgram(z)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,z,k,B,me){U===null&&(U=at);let Te=B.isMesh&&B.matrixWorld.determinant()<0,Fe=Rm(S,U,z,k,B);Ue.setMaterial(k,Te);let ke=z.index,et=1;if(k.wireframe===!0){if(ke=q.getWireframeAttribute(z),ke===void 0)return;et=2}let We=z.drawRange,Ye=z.attributes.position,Bt=We.start*et,Tn=(We.start+We.count)*et;me!==null&&(Bt=Math.max(Bt,me.start*et),Tn=Math.min(Tn,(me.start+me.count)*et)),ke!==null?(Bt=Math.max(Bt,0),Tn=Math.min(Tn,ke.count)):Ye!=null&&(Bt=Math.max(Bt,0),Tn=Math.min(Tn,Ye.count));let Zt=Tn-Bt;if(Zt<0||Zt===1/0)return;Me.setup(B,k,Fe,z,ke);let Ti,Pt=Dt;if(ke!==null&&(Ti=y.get(ke),Pt=Qe,Pt.setIndex(Ti)),B.isMesh)k.wireframe===!0?(Ue.setLineWidth(k.wireframeLinewidth*Be()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(B.isLine){let je=k.linewidth;je===void 0&&(je=1),Ue.setLineWidth(je*Be()),B.isLineSegments?Pt.setMode(O.LINES):B.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else B.isPoints?Pt.setMode(O.POINTS):B.isSprite&&Pt.setMode(O.TRIANGLES);if(B.isBatchedMesh)Pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Pt.renderInstances(Bt,Zt,B.count);else if(z.isInstancedBufferGeometry){let je=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rl=Math.min(z.instanceCount,je);Pt.renderInstances(Bt,Zt,rl)}else Pt.render(Bt,Zt)};function tt(S,U,z){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=fn,S.needsUpdate=!0,ya(S,U,z),S.side=fi,S.needsUpdate=!0,ya(S,U,z),S.side=bn):ya(S,U,z)}this.compile=function(S,U,z=null){z===null&&(z=S),p=Oe.get(z),p.init(),b.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),S!==z&&S.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(x._useLegacyLights);let k=new Set;return S.traverse(function(B){let me=B.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){let Fe=me[Te];tt(Fe,z,B),k.add(Fe)}else tt(me,z,B),k.add(me)}),b.pop(),p=null,k},this.compileAsync=function(S,U,z=null){let k=this.compile(S,U,z);return new Promise(B=>{function me(){if(k.forEach(function(Te){Xe.get(Te).currentProgram.isReady()&&k.delete(Te)}),k.size===0){B(S);return}setTimeout(me,10)}Le.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let pt=null;function xt(S){pt&&pt(S)}function Ut(){St.stop()}function ct(){St.start()}let St=new Cp;St.setAnimationLoop(xt),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){pt=S,Q.setAnimationLoop(S),S===null?St.stop():St.start()},Q.addEventListener("sessionstart",Ut),Q.addEventListener("sessionend",ct),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,E),p=Oe.get(S,b.length),p.init(),b.push(p),ze.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(ze),ie=this.localClippingEnabled,W=he.init(this.clippingPlanes,ie),_=Ge.get(S,m.length),_.init(),m.push(_),cn(S,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,j),this.info.render.frame++,W===!0&&he.beginShadows();let z=p.state.shadowsArray;if(fe.render(z,S,U),W===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1)&&Ve.render(_,S),p.setupLights(x._useLegacyLights),U.isArrayCamera){let k=U.cameras;for(let B=0,me=k.length;B<me;B++){let Te=k[B];Fs(_,S,Te,Te.viewport)}}else Fs(_,S,U);E!==null&&(Ke.updateMultisampleRenderTarget(E),Ke.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(x,S,U),Me.resetDefaultState(),D=-1,G=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function cn(S,U,z,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||He.intersectsSprite(S)){k&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ze);let Te=$.update(S),Fe=S.material;Fe.visible&&_.push(S,Te,Fe,z,be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||He.intersectsObject(S))){let Te=$.update(S),Fe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),be.copy(Te.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(ze)),Array.isArray(Fe)){let ke=Te.groups;for(let et=0,We=ke.length;et<We;et++){let Ye=ke[et],Bt=Fe[Ye.materialIndex];Bt&&Bt.visible&&_.push(S,Te,Bt,z,be.z,Ye)}}else Fe.visible&&_.push(S,Te,Fe,z,be.z,null)}}let me=S.children;for(let Te=0,Fe=me.length;Te<Fe;Te++)cn(me[Te],U,z,k)}function Fs(S,U,z,k){let B=S.opaque,me=S.transmissive,Te=S.transparent;p.setupLightsView(z),W===!0&&he.setGlobalState(x.clippingPlanes,z),me.length>0&&_a(B,me,U,z),k&&Ue.viewport(v.copy(k)),B.length>0&&xa(B,U,z),me.length>0&&xa(me,U,z),Te.length>0&&xa(Te,U,z),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function _a(S,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let me=qe.isWebGL2;xe===null&&(xe=new Wi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?qo:vs,minFilter:kn,samples:me?4:0})),x.getDrawingBufferSize(Re),me?xe.setSize(Re.x,Re.y):xe.setSize(ac(Re.x),ac(Re.y));let Te=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(Z),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();let Fe=x.toneMapping;x.toneMapping=ys,xa(S,z,k),Ke.updateMultisampleRenderTarget(xe),Ke.updateRenderTargetMipmap(xe);let ke=!1;for(let et=0,We=U.length;et<We;et++){let Ye=U[et],Bt=Ye.object,Tn=Ye.geometry,Zt=Ye.material,Ti=Ye.group;if(Zt.side===bn&&Bt.layers.test(k.layers)){let Pt=Zt.side;Zt.side=fn,Zt.needsUpdate=!0,rd(Bt,z,k,Tn,Zt,Ti),Zt.side=Pt,Zt.needsUpdate=!0,ke=!0}}ke===!0&&(Ke.updateMultisampleRenderTarget(xe),Ke.updateRenderTargetMipmap(xe)),x.setRenderTarget(Te),x.setClearColor(Z,N),x.toneMapping=Fe}function xa(S,U,z){let k=U.isScene===!0?U.overrideMaterial:null;for(let B=0,me=S.length;B<me;B++){let Te=S[B],Fe=Te.object,ke=Te.geometry,et=k===null?Te.material:k,We=Te.group;Fe.layers.test(z.layers)&&rd(Fe,U,z,ke,et,We)}}function rd(S,U,z,k,B,me){S.onBeforeRender(x,U,z,k,B,me),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,U,z,k,S,me),B.transparent===!0&&B.side===bn&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,x.renderBufferDirect(z,U,k,B,S,me),B.side=fi,B.needsUpdate=!0,x.renderBufferDirect(z,U,k,B,S,me),B.side=bn):x.renderBufferDirect(z,U,k,B,S,me),S.onAfterRender(x,U,z,k,B,me)}function ya(S,U,z){U.isScene!==!0&&(U=at);let k=Xe.get(S),B=p.state.lights,me=p.state.shadowsArray,Te=B.state.version,Fe=re.getParameters(S,B.state,me,U,z),ke=re.getProgramCacheKey(Fe),et=k.programs;k.environment=S.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(S.isMeshStandardMaterial?w:Mt).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,et===void 0&&(S.addEventListener("dispose",F),et=new Map,k.programs=et);let We=et.get(ke);if(We!==void 0){if(k.currentProgram===We&&k.lightsStateVersion===Te)return ad(S,Fe),We}else Fe.uniforms=re.getUniforms(S),S.onBuild(z,Fe,x),S.onBeforeCompile(Fe,x),We=re.acquireProgram(Fe,ke),et.set(ke,We),k.uniforms=Fe.uniforms;let Ye=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ye.clippingPlanes=he.uniform),ad(S,Fe),k.needsLights=Im(S),k.lightsStateVersion=Te,k.needsLights&&(Ye.ambientLightColor.value=B.state.ambient,Ye.lightProbe.value=B.state.probe,Ye.directionalLights.value=B.state.directional,Ye.directionalLightShadows.value=B.state.directionalShadow,Ye.spotLights.value=B.state.spot,Ye.spotLightShadows.value=B.state.spotShadow,Ye.rectAreaLights.value=B.state.rectArea,Ye.ltc_1.value=B.state.rectAreaLTC1,Ye.ltc_2.value=B.state.rectAreaLTC2,Ye.pointLights.value=B.state.point,Ye.pointLightShadows.value=B.state.pointShadow,Ye.hemisphereLights.value=B.state.hemi,Ye.directionalShadowMap.value=B.state.directionalShadowMap,Ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ye.spotShadowMap.value=B.state.spotShadowMap,Ye.spotLightMatrix.value=B.state.spotLightMatrix,Ye.spotLightMap.value=B.state.spotLightMap,Ye.pointShadowMap.value=B.state.pointShadowMap,Ye.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=We,k.uniformsList=null,We}function od(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Yr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ad(S,U){let z=Xe.get(S);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Rm(S,U,z,k,B){U.isScene!==!0&&(U=at),Ke.resetTextureUnits();let me=U.fog,Te=k.isMeshStandardMaterial?U.environment:null,Fe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Qt,ke=(k.isMeshStandardMaterial?w:Mt).get(k.envMap||Te),et=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,We=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ye=!!z.morphAttributes.position,Bt=!!z.morphAttributes.normal,Tn=!!z.morphAttributes.color,Zt=ys;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Zt=x.toneMapping);let Ti=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pt=Ti!==void 0?Ti.length:0,je=Xe.get(k),rl=p.state.lights;if(W===!0&&(ie===!0||S!==G)){let Fn=S===G&&k.id===D;he.setState(k,S,Fn)}let Tt=!1;k.version===je.__version?(je.needsLights&&je.lightsStateVersion!==rl.state.version||je.outputColorSpace!==Fe||B.isBatchedMesh&&je.batching===!1||!B.isBatchedMesh&&je.batching===!0||B.isInstancedMesh&&je.instancing===!1||!B.isInstancedMesh&&je.instancing===!0||B.isSkinnedMesh&&je.skinning===!1||!B.isSkinnedMesh&&je.skinning===!0||B.isInstancedMesh&&je.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&je.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&je.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&je.instancingMorph===!1&&B.morphTexture!==null||je.envMap!==ke||k.fog===!0&&je.fog!==me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==he.numPlanes||je.numIntersection!==he.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==We||je.morphTargets!==Ye||je.morphNormals!==Bt||je.morphColors!==Tn||je.toneMapping!==Zt||qe.isWebGL2===!0&&je.morphTargetsCount!==Pt)&&(Tt=!0):(Tt=!0,je.__version=k.version);let Bs=je.currentProgram;Tt===!0&&(Bs=ya(k,U,B));let cd=!1,Ao=!1,ol=!1,ln=Bs.getUniforms(),zs=je.uniforms;if(Ue.useProgram(Bs.program)&&(cd=!0,Ao=!0,ol=!0),k.id!==D&&(D=k.id,Ao=!0),cd||G!==S){ln.setValue(O,"projectionMatrix",S.projectionMatrix),ln.setValue(O,"viewMatrix",S.matrixWorldInverse);let Fn=ln.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,be.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&ln.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ln.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),G!==S&&(G=S,Ao=!0,ol=!0)}if(B.isSkinnedMesh){ln.setOptional(O,B,"bindMatrix"),ln.setOptional(O,B,"bindMatrixInverse");let Fn=B.skeleton;Fn&&(qe.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),ln.setValue(O,"boneTexture",Fn.boneTexture,Ke)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(ln.setOptional(O,B,"batchingTexture"),ln.setValue(O,"batchingTexture",B._matricesTexture,Ke));let al=z.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0&&qe.isWebGL2===!0)&&le.update(B,z,Bs),(Ao||je.receiveShadow!==B.receiveShadow)&&(je.receiveShadow=B.receiveShadow,ln.setValue(O,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(zs.envMap.value=ke,zs.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Ao&&(ln.setValue(O,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Cm(zs,ol),me&&k.fog===!0&&te.refreshFogUniforms(zs,me),te.refreshMaterialUniforms(zs,k,X,H,xe),Yr.upload(O,od(je),zs,Ke)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Yr.upload(O,od(je),zs,Ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ln.setValue(O,"center",B.center),ln.setValue(O,"modelViewMatrix",B.modelViewMatrix),ln.setValue(O,"normalMatrix",B.normalMatrix),ln.setValue(O,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Fn=k.uniformsGroups;for(let cl=0,Pm=Fn.length;cl<Pm;cl++)if(qe.isWebGL2){let ld=Fn[cl];we.update(ld,Bs),we.bind(ld,Bs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bs}function Cm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Im(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,U,z){Xe.get(S.texture).__webglTexture=U,Xe.get(S.depthTexture).__webglTexture=z;let k=Xe.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let z=Xe.get(S);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,z=0){E=S,I=U,A=z;let k=!0,B=null,me=!1,Te=!1;if(S){let ke=Xe.get(S);ke.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(O.FRAMEBUFFER,null),k=!1):ke.__webglFramebuffer===void 0?Ke.setupRenderTarget(S):ke.__hasExternalTextures&&Ke.rebindTextures(S,Xe.get(S.texture).__webglTexture,Xe.get(S.depthTexture).__webglTexture);let et=S.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Te=!0);let We=Xe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[U])?B=We[U][z]:B=We[U],me=!0):qe.isWebGL2&&S.samples>0&&Ke.useMultisampledRTT(S)===!1?B=Xe.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[z]:B=We,v.copy(S.viewport),T.copy(S.scissor),J=S.scissorTest}else v.copy(ce).multiplyScalar(X).floor(),T.copy(ue).multiplyScalar(X).floor(),J=ve;if(Ue.bindFramebuffer(O.FRAMEBUFFER,B)&&qe.drawBuffers&&k&&Ue.drawBuffers(S,B),Ue.viewport(v),Ue.scissor(T),Ue.setScissorTest(J),me){let ke=Xe.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ke.__webglTexture,z)}else if(Te){let ke=Xe.get(S.texture),et=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,z||0,et)}D=-1},this.readRenderTargetPixels=function(S,U,z,k,B,me,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){Ue.bindFramebuffer(O.FRAMEBUFFER,Fe);try{let ke=S.texture,et=ke.format,We=ke.type;if(et!==En&&Ce.convert(et)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=We===qo&&(Le.has("EXT_color_buffer_half_float")||qe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(We!==vs&&Ce.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Jn&&(qe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&z>=0&&z<=S.height-B&&O.readPixels(U,z,k,B,Ce.convert(et),Ce.convert(We),me)}finally{let ke=E!==null?Xe.get(E).__webglFramebuffer:null;Ue.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(S,U,z=0){let k=Math.pow(2,-z),B=Math.floor(U.image.width*k),me=Math.floor(U.image.height*k);Ke.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,S.x,S.y,B,me),Ue.unbindTexture()},this.copyTextureToTexture=function(S,U,z,k=0){let B=U.image.width,me=U.image.height,Te=Ce.convert(z.format),Fe=Ce.convert(z.type);Ke.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,S.x,S.y,B,me,Te,Fe,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,k,S.x,S.y,Te,Fe,U.image),k===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(S,U,z,k,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let me=Math.round(S.max.x-S.min.x),Te=Math.round(S.max.y-S.min.y),Fe=S.max.z-S.min.z+1,ke=Ce.convert(k.format),et=Ce.convert(k.type),We;if(k.isData3DTexture)Ke.setTexture3D(k,0),We=O.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ke.setTexture2DArray(k,0),We=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Ye=O.getParameter(O.UNPACK_ROW_LENGTH),Bt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=O.getParameter(O.UNPACK_SKIP_PIXELS),Zt=O.getParameter(O.UNPACK_SKIP_ROWS),Ti=O.getParameter(O.UNPACK_SKIP_IMAGES),Pt=z.isCompressedTexture?z.mipmaps[B]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(We,B,U.x,U.y,U.z,me,Te,Fe,ke,et,Pt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(We,B,U.x,U.y,U.z,me,Te,Fe,ke,Pt.data):O.texSubImage3D(We,B,U.x,U.y,U.z,me,Te,Fe,ke,et,Pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Bt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ti),B===0&&k.generateMipmaps&&O.generateMipmap(We),Ue.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Ke.setTextureCube(S,0):S.isData3DTexture?Ke.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ke.setTexture2DArray(S,0):Ke.setTexture2D(S,0),Ue.unbindTexture()},this.resetState=function(){I=0,A=0,E=null,Ue.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zu?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Pc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Mu=class extends ir{};Mu.prototype.isWebGL1Renderer=!0;var ti=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ap("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new C,sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jo=class extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Oo=new C,zr=new C,kr=new C,Hr=new Se,Fo=new Se,Up=new De,Ya=new C,Bo=new C,Ka=new C,Gf=new Se,Kl=new Se,Vf=new Se,mc=class extends Rt{constructor(e=new jo){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new sr(n,3,0,!1)),Br.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=Br,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-kr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ja(Ya.set(-.5,-.5,0),kr,o,zr,s,r),ja(Bo.set(.5,-.5,0),kr,o,zr,s,r),ja(Ka.set(.5,.5,0),kr,o,zr,s,r),Gf.set(0,0),Kl.set(1,0),Vf.set(1,1);let a=e.ray.intersectTriangle(Ya,Bo,Ka,!1,Oo);if(a===null&&(ja(Bo.set(-.5,.5,0),kr,o,zr,s,r),Kl.set(0,1),a=e.ray.intersectTriangle(Ya,Ka,Bo,!1,Oo),a===null))return;let c=e.ray.origin.distanceTo(Oo);c<e.near||c>e.far||t.push({distance:c,point:Oo.clone(),uv:Js.getInterpolation(Oo,Ya,Bo,Ka,Gf,Kl,Vf,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ja(i,e,t,n,s,r){Hr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fo.x=r*Hr.x-s*Hr.y,Fo.y=s*Hr.x+r*Hr.y):Fo.copy(Hr),i.copy(e),i.x+=Fo.x,i.y+=Fo.y,i.applyMatrix4(Up)}var Wf=new C,qf=new yt,Xf=new yt,Wv=new C,Yf=new De,Za=new C,jl=new Nn,Kf=new De,Zl=new qi,gc=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ed,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(s),e.ray.intersectsSphere(jl)!==!1&&(Kf.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ed?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;qf.fromBufferAttribute(s.attributes.skinIndex,e),Xf.fromBufferAttribute(s.attributes.skinWeight,e),Wf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Xf.getComponent(r);if(o!==0){let a=qf.getComponent(r);Yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wv.copy(Wf).applyMatrix4(Yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zo=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_c=class extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=kt,u=kt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jf=new De,qv=new De,xc=class i{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:qv;jf.multiplyMatrices(a,t[r]),jf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _c(t,e,e,En,Jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zo),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},rr=class extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new De,Zf=new De,$a=[],$f=new rn,Xv=new De,zo=new Ne,ko=new Nn,Yi=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),$f.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),ko.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),Zf.multiplyMatrices(n,Gr),zo.matrixWorld=Zf,zo.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){let c=$a[o];c.instanceId=r,c.object=this,t.push(c)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(s*this.count),s,this.count,_p,Jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ms=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jf=new C,Qf=new C,ep=new De,$l=new qi,Ja=new Nn,Ss=class extends Rt{constructor(e=new Gt,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jf.fromBufferAttribute(t,s-1),Qf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jf.distanceTo(Qf);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;ep.copy(s).invert(),$l.copy(e.ray).applyMatrix4(ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,u=new C,h=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let m=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=m,M=b-1;x<M;x+=f){let I=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(p,I),u.fromBufferAttribute(p,A),$l.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=m,M=b-1;x<M;x+=f){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),$l.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},tp=new C,np=new C,so=class extends Ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tp.fromBufferAttribute(t,s),np.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tp.distanceTo(np);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yc=class extends Ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$o=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ip=new De,Su=new qi,Qa=new Nn,ec=new C,vc=class extends Rt{constructor(e=new Gt,t=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;ip.copy(s).invert(),Su.copy(e.ray).applyMatrix4(ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=l.getX(g);ec.fromBufferAttribute(h,p),sp(ec,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ec.fromBufferAttribute(h,g),sp(ec,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sp(i,e,t,n,s,r,o){let a=Su.distanceSqToPoint(i);if(a<t){let c=new C;Su.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var ro=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,u,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Es=class extends Xt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var An=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,_=[],p=n/2,m=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2));function b(){let M=new C,I=new C,A=0,E=(t-e)/n;for(let D=0;D<=r;D++){let G=[],v=D/r,T=v*(t-e)+e;for(let J=0;J<=s;J++){let Z=J/s,N=Z*c+a,V=Math.sin(N),H=Math.cos(N);I.x=T*V,I.y=-v*n+p,I.z=T*H,h.push(I.x,I.y,I.z),M.set(V,E,H).normalize(),d.push(M.x,M.y,M.z),f.push(Z,1-v),G.push(g++)}_.push(G)}for(let D=0;D<s;D++)for(let G=0;G<r;G++){let v=_[G][D],T=_[G+1][D],J=_[G+1][D+1],Z=_[G][D+1];u.push(v,T,Z),u.push(T,J,Z),A+=6}l.addGroup(m,A,0),m+=A}function x(M){let I=g,A=new Se,E=new C,D=0,G=M===!0?e:t,v=M===!0?1:-1;for(let J=1;J<=s;J++)h.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),g++;let T=g;for(let J=0;J<=s;J++){let N=J/s*c+a,V=Math.cos(N),H=Math.sin(N);E.x=G*H,E.y=p*v,E.z=G*V,h.push(E.x,E.y,E.z),d.push(0,v,0),A.x=V*.5+.5,A.y=H*.5*v+.5,f.push(A.x,A.y),g++}for(let J=0;J<s;J++){let Z=I+J,N=T+J;M===!0?u.push(N,N+1,Z):u.push(N+1,N,Z),D+=3}l.addGroup(m,D,M===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var oo=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new C,d=new C,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let b=[],x=m/n,M=0;m===0&&o===0?M=.5/t:m===n&&c===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let A=I/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(A+M,1-x),b.push(l++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let x=u[m][b+1],M=u[m][b],I=u[m+1][b],A=u[m+1][b+1];(m!==0||o>0)&&f.push(x,M,A),(m!==n-1||c<Math.PI)&&f.push(M,I,A)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ki=class i extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,p=f/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(_),h.y=(e+t*Math.cos(p))*Math.sin(_),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,b=(s+1)*f+g;o.push(_,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _t=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sp,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends _t{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function tc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Kv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function rp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Op(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ws=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eu=class extends ws{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zd,endingEnd:Zd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $d:r=e,a=2*t-n;break;case Jd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $d:o=e,c=2*n-t;break;case Jd:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let I=0;I!==a;++I)r[I]=m*o[u+I]+b*o[l+I]+x*o[c+I]+M*o[h+I];return r}},wu=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Au=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tc(t,this.TimeBufferType),this.values=tc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tc(e.times,Array),values:tc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case Vi:t=this.InterpolantFactoryMethodLinear;break;case Sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Vi;case this.InterpolantFactoryMethodSmooth:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Yv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Vi;var As=class extends Vn{};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=bs;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Vn{};bc.prototype.ValueTypeName="color";var ji=class extends Vn{};ji.prototype.ValueTypeName="number";var Tu=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)pn.slerpFlat(r,0,o,l-a,o,l,c);return r}},gi=class extends Vn{InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}};gi.prototype.ValueTypeName="quaternion";gi.prototype.DefaultInterpolation=Vi;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Vn{};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=bs;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Vn{};Zi.prototype.ValueTypeName="vector";var Mc=class{constructor(e,t=-1,n,s=Mg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Zv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Kv(c);c=rp(c,1,u),l=rp(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,_){if(f.length!==0){let p=[],m=[];Op(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let p=[],m=[];for(let b=0;b!==d[g].morphTargets.length;++b){let x=d[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}s.push(new ji(".morphTargetInfluence["+_+"]",p,m))}c=f.length*o}else{let f=".bones["+t[h].name+"]";n(Zi,f+".position",d,"pos",s),n(gi,f+".quaternion",d,"rot",s),n(Zi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function jv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ji;case"vector":case"vector2":case"vector3":case"vector4":return Zi;case"color":return bc;case"quaternion":return gi;case"bool":case"boolean":return As;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=jv(i.type);if(i.times===void 0){let t=[],n=[];Op(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var _s={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ru=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},$v=new Ru,$i=class{constructor(e){this.manager=e!==void 0?e:$v,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},Cu=class extends Error{constructor(e,t){super(e),this.response=t}},Jo=class extends $i{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_s.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Bi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){b();function b(){h.read().then(({done:x,value:M})=>{if(x)m.close();else{_+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,E=u.length;A<E;A++){let D=u[A];D.onProgress&&D.onProgress(I)}m.enqueue(M),b()}})}}});return new Response(p)}else throw new Cu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{_s.add(e,l);let u=Bi[e];delete Bi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Bi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Iu=class extends $i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_s.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Xo("img");function c(){u(),_s.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Sc=class extends $i{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,o=new Iu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ao=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ec=class extends ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Jl=new De,op=new C,ap=new C,Qo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pu=class extends Qo{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wc=class extends ao{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cp=new De,Ho=new C,Ql=new C,Lu=class extends Qo{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new yt(2,1,1,1),new yt(0,1,1,1),new yt(3,1,1,1),new yt(1,1,1,1),new yt(3,0,1,1),new yt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ho),Ql.copy(n.position),Ql.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ql),n.updateMatrixWorld(),s.makeTranslation(-Ho.x,-Ho.y,-Ho.z),cp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp)}},co=class extends ao{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nu=class extends Qo{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Nu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Rs=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ac=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_s.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return _s.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),_s.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_s.add(e,c),r.manager.itemStart(e)}};var Gu="\\[\\]\\.:\\/",Jv=new RegExp("["+Gu+"]","g"),Vu="[^"+Gu+"]",Qv="[^"+Gu.replace("\\.","")+"]",eb=/((?:WC+[\/:])*)/.source.replace("WC",Vu),tb=/(WCOD+)?/.source.replace("WCOD",Qv),nb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),ib=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),sb=new RegExp("^"+eb+tb+nb+ib+"$"),rb=["material","materials","bones","map"],Du=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jv,"")}static parseTrackName(e){let t=sb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Du;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);var Tc=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}};var lp=new De,Rc=class{constructor(e,t,n=0,s=1/0){this.ray=new qi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lp),this}intersectObject(e,t=!0,n=[]){return Uu(e,this,n,t),n.sort(up),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Uu(e[s],this,n,t);return n.sort(up),n}};function up(i,e){return i.distance-e.distance}function Uu(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Uu(s[r],e,t,!0)}}var ea=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"162"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="162");function Dc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Gt,l=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Fp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);let g=Fp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Fp(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new gt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let _=u.getComponent(d,g);a.setComponent(d+h,g,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Wu(i,e){if(e===Mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ta||e===Ic){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ta)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var qu=new Map,Uc={conveyor:"conveyor_belt_a05",table:"table_metal_stainless_a03",packing:"table_deluxe_packing_a01",rack:"rack_h3m_s01",toolcart:"equipment_mechanic_tool_cart_g01",pallet:"pallet_wood_recycled_a05",vise:"equipment_bench_vise_a01"};function Bp(i,e){e.updateMatrixWorld(!0);let t=new rn().setFromObject(e),n=t.getSize(new C);e.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0,s.userData={...s.userData,sharedAsset:!0,nvidiaAsset:i})}),qu.set(i,{template:e,size:n})}function na(i){return qu.get(Uc[i]||i)?.size.clone()}function uo(i){let e=Uc[i]||i,t=qu.get(e);if(!t)return null;let n=t.template.clone(!0);return n.name=e,n.userData={...n.userData,source:"NVIDIA SimReady",assetId:e,sharedAsset:!0,visualOnly:!0},n}var Je={storage:{name:"\u96F6\u4EF6\u8CA8\u67B6",w:4,d:1.5,cycle:0,color:6326954,model:"rack"},receive:{name:"\u6536\u6599\u6AA2\u67E5\u53F0",w:3,d:2,cycle:0,color:6326954,model:"bench"},frame:{name:"\u8ECA\u67B6\u5099\u6599\u67B6",w:4,d:2,cycle:0,color:10653402,model:"frameRack"},wheel:{name:"\u8F2A\u7D44\u6821\u6B63\uFF0F\u9810\u7D44\u53F0",w:3,d:2,cycle:0,color:13937254,model:"wheel"},kit:{name:"\u914D\u5957\u5099\u6599\u53F0",w:3,d:2,cycle:90,color:3586470,model:"bench"},fork:{name:"\u524D\u53C9\uFF0F\u982D\u7897\u5B89\u88DD",w:4,d:3,cycle:100,color:3586470,model:"stand"},drive:{name:"\u50B3\u52D5\uFF0F\u715E\u8ECA\u5B89\u88DD",w:4,d:3,cycle:140,color:3586470,model:"stand"},motor:{name:"\u99AC\u9054\uFF0F\u7DDA\u675F\u5B89\u88DD",w:4,d:3,cycle:160,color:14001387,model:"motor"},battery:{name:"\u96FB\u6C60\uFF0F\u63A7\u5236\u5668\u5B89\u88DD",w:4,d:3,cycle:120,color:14001387,model:"battery"},final:{name:"\u8F2A\u7D44\uFF0F\u6574\u8ECA\u7E3D\u7D44",w:4,d:3,cycle:120,color:3586470,model:"stand"},torque:{name:"\u626D\u529B\uFF0F\u529F\u80FD\u6AA2\u67E5",w:4,d:3,cycle:100,color:15963252,model:"inspection"},roller:{name:"\u6EFE\u8F2A\u6E2C\u8A66\u53F0",w:4,d:3,cycle:90,color:15963252,model:"roller"},pack:{name:"\u5305\u88DD\u53F0",w:5,d:3,cycle:130,color:7382751,model:"pack"},pallet:{name:"\u6210\u54C1\u68E7\u677F",w:4,d:3,cycle:0,color:7382751,model:"pallet"},conveyor:{name:"\u6EFE\u7B52\u8F38\u9001\u6BB5",w:6,d:1.2,cycle:0,color:7702170,model:"conveyor"},cart:{name:"\u88DC\u6599\u63A8\u8ECA",w:1.5,d:1,cycle:0,color:13937254,model:"cart"}},lr=[{id:"incoming",name:"01 \u6536\u6599\uFF0F\u96F6\u4EF6\u5009\u5132",x:-26,z:-15,w:24,d:16,color:6326954},{id:"prep",name:"02 \u8ECA\u67B6\uFF0F\u8F2A\u7D44\u9810\u7D44",x:2,z:-15,w:28,d:16,color:13937254},{id:"electric",name:"03 \u96FB\u52D5\u8ECA\u652F\u7DDA",x:27,z:-15,w:20,d:16,color:10653402},{id:"assembly",name:"04 \u81EA\u884C\u8ECA\u7E3D\u7D44",x:-6,z:0,w:64,d:10,color:3586470},{id:"quality",name:"05 \u54C1\u6AA2\uFF0F\u6EFE\u8F2A\u6E2C\u8A66",x:27,z:15,w:20,d:16,color:15963252},{id:"outgoing",name:"06 \u5305\u88DD\uFF0F\u6210\u54C1\u51FA\u8CA8",x:-12,z:15,w:48,d:16,color:7382751}],ob=[["R01","receive",-34,-18],["R02","storage",-26,-19],["R03","storage",-19,-19],["R04","storage",-26,-12],["R05","storage",-19,-12],["P01","frame",-8,-19],["P02","frame",-1,-19],["P03","wheel",7,-19],["P04","wheel",7,-11],["P05","cart",-13,-3],["E01","motor",23,-18],["E02","battery",31,-11],["A01","kit",-34,0],["A02","fork",-22,0],["A03","drive",-10,0],["A04","drive",-10,4],["A05","final",4,0],["C01","conveyor",-28,0],["C02","conveyor",-16,0],["C03","conveyor",-3,0],["C04","conveyor",11,0],["Q01","torque",24,10],["Q02","roller",31,18],["B01","pack",6,16],["B02","pack",-3,16],["B03","pallet",-16,16],["B04","pallet",-27,16]],zp=()=>ob.map(([i,e,t,n])=>({id:i,type:e,x:t,z:n,cycle:Je[e].cycle,rotation:0})),Is={bicycle:["kit","fork","drive","final","torque","roller","pack"],ebike:["kit","fork","drive","motor","battery","final","torque","roller","pack"]},kp=()=>[["\u8ECA\u67B6",1,"frame"],["\u524D\u53C9\uFF0F\u982D\u7897",1,"fork"],["\u8F2A\u7D44\uFF08\u524D\u5F8C\uFF09",2,"wheel"],["\u5916\u80CE\uFF0F\u5167\u80CE",2,"wheel"],["\u50B3\u52D5\u5957\u4EF6",1,"drive"],["\u715E\u8ECA\u7D44",2,"drive"],["\u8ECA\u628A\uFF0F\u9F8D\u982D",1,"final"],["\u5EA7\u588A\uFF0F\u5EA7\u7BA1",1,"final"],["\u8E0F\u677F",2,"final"],["\u5305\u88DD\u7BB1",1,"pack"],["\u99AC\u9054\uFF08\u96FB\u52D5\u8ECA\uFF09",1,"motor"],["\u96FB\u6C60\uFF08\u96FB\u52D5\u8ECA\uFF09",1,"battery"],["\u63A7\u5236\u5668\uFF0F\u7DDA\u675F\uFF08\u96FB\u52D5\u8ECA\uFF09",1,"battery"]].map(([i,e,t])=>({part:i,quantity:e,station:t})),xM=new Set(Object.values(Is).flat());var Ct=9608612,Ji=3160640,ho=10257769,Yu=2106150;function ab(i){return new _t({color:i,roughness:i===Yu?.82:.46,metalness:[Ct,Ji].includes(i)?.65:.08})}function ur(i,e,t,n=0,s=0,r=0){let o=new Ne(e,ab(t));return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function rt(i,e,t,n,s,r=0,o=t/2,a=0){return ur(i,new on(e,t,n),s,r,o,a)}function Wn(i,e,t,n,s){let r=new C(...e),o=new C(...t),a=o.clone().sub(r),c=ur(i,new An(n,n,a.length(),10),s);return c.position.copy(r.add(o).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new C(0,1,0),a.normalize()),c}function Fc(i,e,t,n,s=.35){let r=ur(i,new Ki(s,.035,8,32),Yu,e,t,n),o=ur(i,new Ki(s-.055,.014,6,32),Ct,e,t,n);for(let a=0;a<Math.PI*2;a+=Math.PI/6)Wn(i,[e,t,n],[e+Math.cos(a)*(s-.05),t+Math.sin(a)*(s-.05),n],.006,Ct);return r}function fo(i=4835778,e=!1){let t=new Ae,n=[-.55,.4,0],s=[0,.45,0],r=[-.12,1,0],o=[.55,.93,0],a=[.65,.4,0];e||(Fc(t,...n),Fc(t,...a));for(let[c,l]of[[n,s],[n,r],[s,r],[r,o],[o,s],[o,a]])Wn(t,c,l,.03,i);return e||(Wn(t,r,[-.17,1.15,0],.025,Ct),rt(t,.3,.055,.16,Ji,-.2,1.16),Wn(t,o,[.6,1.15,0],.023,Ct),Wn(t,[.6,1.15,-.23],[.6,1.15,.23],.022,Ji),rt(t,.22,.04,.08,Ct,.04,.36,.18)),t}function Xu(i,e){rt(i,2.6,.12,1.4,ho,0,.95);for(let t of[-1.1,1.1])for(let n of[-.55,.55])rt(i,.09,.9,.09,Ct,t,.45,n);rt(i,.7,.12,.4,e,-.6,1.07),rt(i,.55,.3,.4,Ji,.6,1.16)}function Oc(i,e){rt(i,2.6,.12,1.4,Ji),Wn(i,[0,.12,0],[0,1.45,0],.06,Ct);let t=fo(e);t.name="fixture-bike",t.position.set(0,.65,0),i.add(t),rt(i,.6,.07,.4,Ct,1.2,.9,.6)}function ia(i,e,t){let n=uo(i),s=na(i);if(!n)return null;let r=Math.min(1,(e-.08)/s.x,(t-.08)/s.z);return n.scale.setScalar(r),n.userData.displayScale=r,n}function cb(i,e){let t=new Ae,n=["receive","kit","fork","drive","motor","battery","final","torque","pack","wheel"],s;if(i==="storage"&&(s=ia("rack",e.w,e.d),s)||i==="cart"&&(s=ia("toolcart",e.w,e.d),s)||i==="conveyor"&&(s=ia("conveyor",e.w,e.d),s))return t.add(s),t;if(i==="pallet"&&(s=ia("pallet",1.65,1.35),s)){for(let r of[-.9,.9])for(let o of[-.7,.7]){let a=s.clone(!0);a.position.set(r,0,o),t.add(a)}for(let r of[-.9,.9])rt(t,.62,1.08,2.08,ho,r,.74,0),rt(t,.625,.035,2.09,7299666,r,1.08,0);return t}if(n.includes(i)&&(s=ia(i==="pack"?"packing":"table",e.w,e.d),s)){let r=["fork","drive","motor","battery","final","torque"].includes(i);return s.position.z=r?-1.15:0,t.add(s),r&&(rt(t,.75,.08,.65,6847364,0,.04,.65),rt(t,.12,1.28,.12,Ct,0,.72,.65),Wn(t,[-.28,.12,.65],[0,.9,.65],.035,Ct),Wn(t,[.28,.12,.65],[0,.9,.65],.035,Ct),rt(t,.16,.1,.72,Ct,0,1.43,.31),rt(t,.18,.12,.16,Ji,0,1.43,0)),i==="wheel"&&Fc(t,0,1.35,.1,.34),t}return null}function lb(i,{useNative:e=!0}={}){let t=Je[i],n=e?cb(i,t):null;if(n)return n.name=i,n;let s=new Ae;s.name=i;let r=[3586470,14001387,15963252,7382751].includes(t.color)?4811638:t.color;switch(t.model){case"rack":for(let a of[-1.8,1.8])for(let c of[-.6,.6])rt(s,.08,3,.08,r,a,1.5,c);for(let a of[.15,1.1,2.05]){rt(s,3.8,.08,1.35,Ct,0,a);for(let c of[-1.25,0,1.25])rt(s,.95,.65,1,ho,c,a+.365)}break;case"frameRack":rt(s,3.7,.12,1.7,Ji);for(let a of[-1.6,1.6])Wn(s,[a,.1,0],[a,2.6,0],.05,Ct);Wn(s,[-1.6,2.6,0],[1.6,2.6,0],.05,Ct);for(let a of[-1.1,0,1.1]){let c=fo(r,!0);c.scale.setScalar(.7),c.rotation.y=Math.PI/2,c.position.set(a,.9,0),s.add(c)}break;case"wheel":Xu(s,r);for(let a of[-.35,.35])Wn(s,[a,1,0],[a,1.75,0],.025,Ct);Fc(s,0,1.6,0,.34);break;case"stand":Oc(s,r);break;case"motor":Oc(s,r),rt(s,.4,.3,.3,9598150,0,1.02,.08);break;case"battery":Oc(s,r),rt(s,.16,.48,.2,2436416,.2,1.4,.05);break;case"inspection":Oc(s,r),rt(s,.65,1.4,.5,Ct,1.45,.7,-.85),rt(s,.6,.4,.08,2379364,1.45,1.5,-.6);break;case"roller":rt(s,3,.18,1.6,Ji);for(let a of[-.6,.65]){let c=ur(s,new An(.13,.13,.8,20),Ct,a,.27,0);c.rotation.x=Math.PI/2}let o=fo(r);o.name="fixture-bike",s.add(o),Wn(s,[1.3,.1,.55],[1.3,1.5,.55],.04,Ct),rt(s,.5,.35,.08,2379364,1.3,1.55,.55);break;case"pack":Xu(s,r),rt(s,2.1,1.1,.45,ho,0,1.6,0),rt(s,.6,.04,.48,14074012,0,2.17,0);break;case"pallet":for(let a of[-.8,0,.8])rt(s,3.6,.12,.28,ho,0,.08,a);for(let a of[-1.5,-.75,0,.75,1.5])rt(s,.3,.1,2.5,ho,a,.19);for(let a of[-1,0,1])rt(s,.8,1.8,2,11836027,a,1.15);break;case"conveyor":for(let a of[-2.8,2.8])for(let c of[-.45,.45])rt(s,.08,.7,.08,Ct,a,.35,c);for(let a of[-.55,.55])rt(s,6,.12,.08,Ji,0,.73,a);for(let a=-2.8;a<=2.8;a+=.28){let c=ur(s,new An(.055,.055,1,8),Ct,a,.74,0);c.rotation.x=Math.PI/2}break;case"cart":rt(s,1.3,.08,.8,Ct,0,.25),rt(s,1.3,.08,.8,r,0,.9);for(let a of[-.55,.55])for(let c of[-.3,.3]){rt(s,.04,.9,.04,Ct,a,.65,c);let l=ur(s,new An(.08,.08,.05,10),Yu,a,.12,c);l.rotation.x=Math.PI/2}break;default:Xu(s,r)}return s}function Ku(i,{zones:e=!0}={}){let t=new Ae;if(t.name="Bicycle_Assembly_Factory_80x50m_ASSUMED",e)for(let s of lr){let r=rt(t,s.w,.015,s.d,s.color,s.x,.005,s.z);r.material.transparent=!0,r.material.opacity=.045,r.name=s.id}let n=new Set(["R01","A01","A02","A03","A04","A05","E01","E02","Q01","B01","B02","R04","R05","P05","B03","B04"]);for(let s of i){let r=lb(s.type,{useNative:n.has(s.id)});r.position.set(s.x,0,s.z),r.rotation.y=(s.rotation||0)*Math.PI/180,r.name=s.id+"_"+s.type,r.userData={...r.userData,id:s.id,type:s.type,dimensionsAssumed:!0},t.add(r)}return t}var po={conveyor:{name:"\u8F38\u9001\u7DDA",speed:.7,handling:0,fleet:999},cart:{name:"\u4EBA\u5DE5\u63A8\u8ECA",speed:.55,handling:8,fleet:2},agv:{name:"AGV",speed:1.2,handling:5,fleet:2}};function hr(i){if(!i||!Object.hasOwn(po,i.mode)||!Number.isFinite(i.speed)||i.speed<.1||i.speed>3||!Number.isInteger(i.fleet)||i.fleet<1||i.fleet>50)throw Error("\u7269\u6D41\u901F\u5EA6\u97000.1\u20133m/s\uFF0C\u642C\u904B\u53F0\u6578\u97001\u201350");return i}function Bc(i,e,t){let n=[[i.x,i.z],[i.x,i.z+2.3],[e.x,i.z+2.3],[e.x,e.z]],s=n.slice(1).reduce((r,o,a)=>r+Math.hypot(o[0]-n[a][0],o[1]-n[a][1]),0);return{points:n,distance:s,seconds:Math.max(1,Math.ceil(s/t.speed+po[t.mode].handling)),mode:t.mode}}function zc(i,e){let t=i.slice(1).map((s,r)=>Math.hypot(s[0]-i[r][0],s[1]-i[r][1])),n=Math.max(0,Math.min(1,e))*t.reduce((s,r)=>s+r,0);for(let s=0;s<t.length;s++){if(n<=t[s]||s===t.length-1){let r=t[s]?Math.max(0,Math.min(1,n/t[s])):1;return{x:i[s][0]+(i[s+1][0]-i[s][0])*r,z:i[s][1]+(i[s+1][1]-i[s][1])*r,heading:Math.atan2(i[s+1][1]-i[s][1],i[s+1][0]-i[s][0])}}n-=t[s]}return{x:i[0][0],z:i[0][1],heading:0}}function kc(i){if(!i||typeof i.id!="string"||!i.id.trim()||i.id.length>50||!["bicycle","ebike"].includes(i.product)||!Number.isInteger(i.quantity)||i.quantity<1||i.quantity>1e4)throw Error("\u5DE5\u55AE\u9700\u7DE8\u865F\u3001\u8ECA\u7A2E\u53CA1\u201310000\u53F0\u6578\u91CF");return i}var ht=8952223,ii=11451328,Nt=3426128,ra=13872701,ju=new Map,ub=new on(1,1,1),hb=new An(1,1,1,20),Ps=(i,e=.55,t=.46)=>{let n=[i,e,t].join("/");return ju.has(n)||ju.set(n,new _t({color:i,metalness:e,roughness:t})),ju.get(n)};function ge(i,e,t,n,s,r=0,o=t/2,a=0){let c=new Ne(ub,Ps(s));return c.scale.set(e,t,n),c.position.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Sn(i,e,t,n,s=0,r=t/2,o=0){let a=new Ne(hb,Ps(n));return a.scale.set(e,t,e),a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function It(i,e,t,n,s){let r=new C(...e),o=new C(...t),a=o.sub(r),c=Sn(i,n,a.length(),s);return c.position.copy(r.addScaledVector(a,.5)),c.quaternion.setFromUnitVectors(new C(0,1,0),a.normalize()),c}function Vp(i,e,t=0,n=0,s=0,r=0){let o=uo(e);return o&&(o.position.set(t,n,s),o.rotation.y=r,i.add(o)),o}function db(i,e=.85){if(!Vp(i,"table")){ge(i,1.8,.06,.72,ht,0,e);for(let t of[-.75,.75])for(let n of[-.27,.27])ge(i,.065,e,.065,Nt,t,e/2,n)}}function Qi(i,e,t=1.25,n=1.45,s=1.65){if(typeof document>"u")return;let r=document.createElement("canvas");r.width=640,r.height=128;let o=r.getContext("2d");if(!o)return;o.fillStyle="#223742",o.fillRect(0,0,640,128),o.fillStyle="#e3edf2",o.font="bold 34px sans-serif",o.fillText(e,18,48),o.fillStyle="#c7b784",o.font="21px sans-serif",o.fillText("\u5DE5\u7A0B\u6982\u5FF5\u5916\u6BBC \xB7 \u975E\u9078\u5B9A\u5BE6\u6A5F",18,91);let a=new Ne(new Xi(s,s/5),new Jt({map:new Es(r),side:bn}));a.position.set(0,n,t),a.userData.labelTexture=!0,i.add(a)}function fb(i){let e=Sn(i,.07,.2,8161418,1.45,1.7,1);return e.material=new _t({color:6912891,emissive:0,roughness:.3}),e.userData.ownMaterial=!0,It(i,[1.45,0,1],[1.45,1.6,1],.022,Nt),e}function Hp(i){db(i),ge(i,1.3,.035,.55,6913416,0,.8675,0)}function pb(i){let e=new Ae;e.name="Frame_"+i+"_engineering_concept";let t={},n={value:.85};if(i==="F01"){for(let a of[-1.2,1.2])for(let c of[-.48,.48])ge(e,.08,1.45,.08,Nt,a,.75,c);for(let a of[.3,.8,1.3]){for(let c of[-.48,.48])ge(e,2.55,.07,.07,ht,0,a,c);for(let c of[-1.2,0,1.2])ge(e,.07,.07,1.12,ht,c,a)}n.value=.8,Qi(e,"F01 \u7BA1\u6750\uFF0F\u935B\u4EF6\u9F4A\u5957\u67B6",.61,.5,2.3)}else if(i==="F02"){ge(e,2.5,.65,1.35,ii,0,.4),ge(e,2.7,.08,1.5,ht,0,.77);for(let l of[-1,1])for(let u of[-.52,.52])ge(e,.18,.12,.18,Nt,l,.06,u);for(let l of[-1.8,-1.4,-1,-.6,-.2]){let u=Sn(e,.07,.85,ht,l,.84,0);u.rotation.x=Math.PI/2}for(let l of[-.5,.5])ge(e,2.1,.1,.07,Nt,-.95,.74,l);for(let l of[-1.85,-.1])for(let u of[-.4,.4])ge(e,.07,.75,.07,Nt,l,.375,u);let a=new Ae;a.position.set(.45,1.17,0),e.add(a);let c=Sn(a,.29,.018,10464948);c.rotation.x=Math.PI/2,ge(a,.67,.36,.52,10917464,0,.2,0),It(a,[0,.35,0],[.7,.6,0],.04,Nt),t.saw=a,t.blade=c,Vp(e,"equipment_bench_vise_a01",-.8,.81,.25),n.value=.85,Qi(e,"F02 \u88C1\u5207\uFF0F\u7BA1\u7AEF\u914D\u5408",.78,.48)}else if(i==="F06"){ge(e,3.2,.16,2.4,Nt,0,.08);for(let l of[-1.1,1.1])for(let u of[-.6,.6])ge(e,.12,.85,.12,ht,l,.5,u);ge(e,2.7,.12,1.65,ht,0,.96);for(let l of[-.75,.65])for(let u of[-.45,.45])ge(e,.2,.13,.16,Nt,l,1.09,u),It(e,[l,1.1,u],[l,1.35,u],.045,ht);ge(e,3.1,2.3,.08,3755610,0,1.3,-1.25),ge(e,.08,2.3,1.8,3755610,-1.6,1.3,-.36),Sn(e,.42,.22,ht,0,2.58,-.1),It(e,[0,2.7,-.1],[0,3.1,-1.5],.12,ht),It(e,[0,3.1,-1.5],[0,3.1,-3],.12,ht);let a=new Ae;It(a,[0,0,0],[0,-.25,0],.045,Nt),ge(a,.11,.16,.12,11573848,0,.03),a.position.set(0,1.55,.35),e.add(a),t.torch=a;let c=new Ne(new oo(.035,8,6),new Jt({color:10209256}));c.position.set(0,-.25,0),a.add(c),t.arc=c,n.value=1.04,Qi(e,"F06 \u593E\u6CBB\u5177\uFF0F\u710A\u63A5",1.23,.51)}else if(i==="F09"){ge(e,3.1,.16,2.1,Nt,0,.08);for(let c of[-1.25,1.25])ge(e,.24,2.7,.24,ii,c,1.48,-.35);ge(e,2.75,.28,.32,ii,0,2.71,-.35),ge(e,2.5,.13,1.5,ht,0,.98);for(let c of[-.9,.9])It(e,[c,.2,-.4],[c,.95,-.4],.075,Nt);let a=new Ae;Sn(a,.14,.5,ht,0,0,0),Sn(a,.065,.42,12043724,0,-.4),ge(a,.45,.09,.35,Nt,0,-.63),a.position.set(0,2.2,-.35),e.add(a),t.ram=a;for(let c of[-.65,.65])ge(e,.16,.16,.15,Nt,c,1.13,.1);n.value=1.06,Qi(e,"F09 \u6821\u6B63\u6982\u5FF5\u6CBB\u5177",1.08,.5)}else if(i==="F10"){ge(e,4.1,.25,3.5,Nt,0,.125),ge(e,4,3.15,.14,ii,0,1.82,-1.6);for(let l of[-1.94,1.94])ge(e,.14,3.15,3.2,ii,l,1.82,0);ge(e,4,.14,3.2,ii,0,3.32),ge(e,3.7,.12,3,6780283,0,.32);for(let l of[-1.4,1.4])It(e,[-1.55,.5,l],[1.55,.5,l],.055,ht);for(let l of[-1.4,1.4])It(e,[l,.5,-1.4],[l,.5,1.4],.055,ht);let a=new Ae;a.position.set(-1.85,1.73,1.63),ge(a,3.65,2.85,.16,10333877,1.825,0),ge(a,.12,1,.1,Nt,3.32,0,.14),ge(a,1,.55,.03,3162700,1.82,.25,.1),e.add(a),t.door=a;let c=new Ne(new Xi(3.4,2.5),new Jt({color:11967080,transparent:!0,opacity:.2}));c.position.set(0,1.65,-1.51),e.add(c),t.glow=c,ge(e,.65,1.4,.45,ii,2.45,.7,.6),ge(e,.5,.55,.04,2505286,2.45,1.1,.85),Sn(e,.17,1.2,ht,1.1,3.9,-.6),n.value=.5,Qi(e,"F10 \u71B1\u8655\u7406\u6279\u6B21\u8A2D\u5099",1.74,2.76,2.4)}else if(i==="F04"){ge(e,4.6,.18,3.5,6716537,0,.09);for(let a of[-1.65,1.65])ge(e,4.6,.22,.14,9083539,0,.2,a);for(let a of[-2.23,2.23])ge(e,.14,.22,3.5,9083539,a,.2,0);t.lids=[];for(let a of[-1.45,0,1.45]){ge(e,1.2,1.05,2.1,ht,a,.72,0);let c=new Ae;c.position.set(a,1.26,-1.02),ge(c,1.24,.06,2.12,11253948,0,0,1.06),It(c,[-.3,.05,1.1],[.3,.05,1.1],.025,Nt),e.add(c),t.lids.push(c)}ge(e,4.4,.25,1.35,7900050,0,2.62,-.6);for(let a of[-1.8,1.8])It(e,[a,.35,-1.3],[a,2.5,-1.3],.055,ht);Sn(e,.38,2.4,ii,2.9,1.2,-.8),It(e,[1.8,2.7,-.6],[2.9,2.7,-.8],.13,ht),It(e,[2.9,2.7,-.8],[2.9,3.6,-.8],.13,ht),n.value=1.28,Qi(e,"F04 \u5C01\u9589\u6FD5\u88FD\u7A0B\u6982\u5FF5",1.8,.53,2.6)}else if(i==="F11"){Hp(e),ge(e,2.8,2.2,.08,ii,0,1.5,-.8);for(let c of[-1.4,1.4])ge(e,.08,2.2,1.6,ii,c,1.5,0);ge(e,2.85,.12,1.75,ii,0,2.65,-.03),ge(e,1.7,.5,.05,4282209,0,1.55,-.72);let a=Sn(e,.18,.06,Nt,.65,1.12,-.05);a.rotation.x=Math.PI/2,t.grinder=a,ge(e,.46,.35,.42,10194525,.65,1.3,-.05),Sn(e,.39,1.65,ht,2.1,.86,-.25),It(e,[1.1,.8,-.6],[2.1,1.3,-.25],.09,Nt),Sn(e,.25,.16,Nt,2.1,1.77,-.25),n.value=.9,Qi(e,"F11 \u53D7\u63A7\u6253\u78E8\uFF0F\u96C6\u5875",.9,.45,2.1)}else if(i==="F13"){for(let a of[-1.2,1.2])It(e,[a,.1,-.45],[a,2.3,-.45],.055,ht);It(e,[-1.2,2.3,-.45],[1.2,2.3,-.45],.055,ht),ge(e,2.65,.13,1.15,Nt,0,.09),n.value=.35,Qi(e,"F13 \u5408\u683C\u67B6\u4EA4\u63A5\u5EAB",.65,.45,2)}else{if(Hp(e),["F07","F08","F12"].includes(i)){for(let a of[-.6,.6])It(e,[a,.9,-.18],[a,1.65,-.18],.025,ht);It(e,[-.6,1.65,-.18],[.6,1.65,-.18],.025,ht)}n.value=.9,Qi(e,i+" "+{F01:"\u5165\u6599\u6AA2\uFF0F\u9F4A\u5957",F03:"\u9664\u6BDB\u908A\uFF0F\u6E05\u6F54",F05:"\u6FD5\u5F8C\u4E7E\u71E5",F07:"\u710A\u5F8C\u6AA2\u67E5",F08:"\u5E7E\u4F55\u6AA2\u67E5",F12:"\u6700\u7D42\u653E\u884C"}[i],.6,.45,1.7)}let s={F02:6913671,F06:6124672,F09:8029579,F10:9866357,F04:7113604,F11:8750453};if(s[i]){let a=i==="F04"?[6.5,4.3]:i==="F10"?[6.1,4.6]:[4.2,3.5],c=ge(e,a[0],.015,a[1],s[i],0,.008,0);c.material=Ps(s[i],0,.9);for(let l of[-a[0]/2,a[0]/2]){let u=ge(e,.045,.017,a[1],13022061,l,.019,0);u.material=Ps(13022061,0,.85)}}let r=Wp();r.position.set(-2.5,0,2.2),e.add(r);let o=fb(e);return{g:e,dynamic:t,height:n.value,lamp:o,waitingRack:r}}function Zu(i,e=[]){i.updateMatrixWorld(!0);let t=new Set;for(let r of e.flat())r?.traverse?.(o=>t.add(o));let n=i.matrixWorld.clone().invert(),s=new Map;i.traverse(r=>{if(!r.isMesh||t.has(r)||r.userData.sharedAsset||r.userData.labelTexture||r.userData.ownMaterial)return;let o=r.material.uuid;s.has(o)||s.set(o,[]),s.get(o).push(r)});for(let r of s.values()){if(r.length<2)continue;let o=r.map(c=>c.geometry.clone().applyMatrix4(new De().multiplyMatrices(n,c.matrixWorld))),a=Dc(o,!1);if(a){let c=new Ne(a,r[0].material);c.castShadow=!0,c.receiveShadow=!0,c.userData.ownGeometry=!0,i.add(c);for(let l of r)l.removeFromParent()}o.forEach(c=>c.dispose())}}function Gp(i){i.body.traverse(e=>{e.geometry?.dispose(),e.material&&e.material.dispose()})}var $u={F01:[59,-12],F02:[65,-10],F03:[65,-3.5],F04:[61,11],F05:[67,11],F06:[76,-11],F07:[77,-4],F08:[85,-3.5],F09:[87,-12],F10:[87,10],F11:[76,11],F12:[60,5],F13:[56,1]},Ju={position:[77,23,35],target:[74,1,0]};function mb(){let i=new Ae;i.name="Frame_factory_assumed_40x36m_building",ge(i,40,.16,36,9542558,74,-.1,0).material=Ps(9542558,0,.93),ge(i,14,.12,50,8095628,47,-.12,0).material=Ps(8095628,0,.95),ge(i,40,5.7,.18,13095380,74,2.85,-18).material=Ps(13095380,0,.85),ge(i,.18,1,36,13095380,94,.5,0).material=Ps(13095380,0,.85);for(let e of[56,65,74,83,92])ge(i,.3,6.5,.3,Nt,e,3.25,-17.5),ge(i,6.2,1.4,.08,8954798,e,4.7,-17.85);for(let e of[70,82])ge(i,.12,2.4,12,10728118,e,1.2,12);for(let e of[-1.5,1.5])ge(i,38,.009,.06,ra,74,.015,e);for(let e=56;e<=92;e+=3)ge(i,.7,.009,.05,ra,e,.018,0);for(let e of[46,48])ge(i,.07,.009,52,ra,e,.018,0);for(let e=-24;e<=24;e+=3)ge(i,.07,.009,.7,ra,47,.019,e);for(let e of[61,74,87])for(let t of[-9,10])ge(i,5.2,.08,.2,ht,e,6.1,t),ge(i,4.8,.03,.15,14936553,e,6.04,t);return i}function gb(){let i=new Ae,e=fo(11713986,!0),t=new Ae,n=new Ae;for(let s of[-.09,0,.09])It(t,[-.8,.05,s],[.8,.05,s],.04,11123137);ge(n,1.9,.1,.8,Nt,0,.27);for(let s of[-.7,.7])for(let r of[-.35,.35]){let o=Sn(n,.12,.06,2502969,s,.13,r);o.rotation.x=Math.PI/2}return It(n,[0,.3,0],[0,.7,0],.035,ht),i.add(e,t,n),{root:i,body:e,tubes:t,cart:n}}function Wp(){let i=new Ae;i.name="Shared_material_rack_8_visual_slots",ge(i,2.5,.08,1.8,7176070,0,.28);for(let e of[-1.05,1.05])for(let t of[-.75,.75]){let n=Sn(i,.12,.07,2569274,e,.13,t);n.rotation.x=Math.PI/2}for(let e of[-1.1,1.1])It(i,[e,.33,-.7],[e,1.05,-.7],.035,ht);return It(i,[-1.1,1.05,-.7],[1.1,1.05,-.7],.035,ht),Zu(i),i}function _b(){let i=new Ae,e=[],t=[];ge(i,2.7,.18,1.2,7176586,0,.3),ge(i,2.4,.2,1.05,4084059,0,.17),ge(i,.13,.22,1.13,ra,1.27,.25);for(let n of[-.95,.95])for(let s of[-.59,.59]){let r=Sn(i,.17,.08,2503225,n,.18,s);r.rotation.x=Math.PI/2,t.push(r)}for(let n of[-.8,.8])It(i,[n,.4,-.44],[n,1.5,-.44],.045,ht);It(i,[-.8,1.5,-.44],[.8,1.5,-.44],.04,ht);for(let n=0;n<8;n++){let s=fo(10728380,!0);s.position.set(-1.05+n*.3,.35,0),s.rotation.y=Math.PI/2,s.visible=!1,i.add(s),e.push(s)}return i.name="Interfactory_concept_carrier_not_NVIDIA_toolcart",{root:i,frames:e,wheels:t}}var sa=i=>typeof i=="string"?i:i?.serial||i?.id||i?.frameId,Hc=class{constructor(e){this.root=new Ae,this.root.name="Adjacent_aluminum_frame_factory_CONCEPT",e.add(this.root),this.cells=new Map,this.actors=new Map,this.vehicles=new Map}setLabels(e){this.root.traverse(t=>{t.userData.labelTexture&&(t.visible=!!e)})}configure(e){for(let s of this.actors.values())Gp(s);this.root.traverse(s=>{s.userData.labelTexture&&(s.geometry.dispose(),s.material.map?.dispose(),s.material.dispose()),s.userData.ownMaterial&&s.material.dispose(),s.userData.ownGeometry&&s.geometry.dispose()}),this.root.clear(),this.cells.clear(),this.actors.clear(),this.vehicles.clear(),this.config=e;let t=mb();Zu(t),this.root.add(t);let n=Wp();n.position.set(34,0,-2),this.root.add(n);for(let[s,r]of Object.entries($u)){let o=pb(s);o.g.position.set(r[0],0,r[1]),o.g.userData={stationId:s,engineeringConcept:!0},this.root.add(o.g),Zu(o.g,[...Object.values(o.dynamic),o.lamp,o.waitingRack]),this.cells.set(s,o)}}update(e){if(!e)return;let t=e.time||0,n=e.stations||{},s=new Set,r=new Map((e.frames||[]).map(a=>[a.frameId,a]));for(let[a,c]of this.cells){let l=n[a]||{},u=["processing","busy"].includes(l.phase||l.status),h=String(l.phase||l.status||"").includes("hold"),d=u?t*1.4:0;c.lamp.material.color.setHex(h?14722635:u?6993296:6913150),c.lamp.material.emissive.setHex(h?7360533:u?1592629:0);let f=c.dynamic;if(f.saw&&(f.saw.position.y=u?1.17+Math.sin(d)*.07:1.25,f.blade.rotation.y=u?d*3:0),f.torch&&(f.torch.position.x=u?Math.sin(d*.65)*.35:0,f.torch.position.y=u?1.5+Math.cos(d)*.08:1.7,f.arc.visible=u),f.ram&&(f.ram.position.y=u?2.15+Math.sin(d)*.05:2.27),f.door&&(f.door.rotation.y=u?0:-.45),f.glow&&(f.glow.material.opacity=u?.24:.06),f.lids)for(let _ of f.lids)_.rotation.x=u?0:-.16;f.grinder&&(f.grinder.rotation.y=u?d*4:0),(l.jobs||l.frames||[]).slice(0,8).forEach((_,p)=>{let m=["F01","F04","F05","F10"].includes(a),b=Math.min(8,(l.jobs||l.frames||[]).length),x=m?c.g.position.x+(p-(b-1)/2)*.4:c.g.position.x+p%2*1.7,M=m?c.g.position.z:c.g.position.z+Math.floor(p/2)*1.3;this.place(r.get(sa(_))||_,a,x,c.height,M,"processing",s,m?Math.PI/2:0)});let g=[...(e.queues?.[a]||[]).map(_=>r.get(sa(_))||_),...(e.frames||[]).filter(_=>_.stationId===a&&["incoming","qc_hold","released"].includes(_.status))].filter((_,p,m)=>m.findIndex(b=>sa(b)===sa(_))===p).slice(0,8);g.forEach((_,p)=>this.place(_,a,c.g.position.x-2.5+(p-(g.length-1)/2)*.3,0,c.g.position.z+2.2,_.status||"queued",s,Math.PI/2))}(e.assemblyReady||[]).slice(0,8).forEach((a,c)=>this.place(a,"F13",34+(c-3.5)*.3,0,-2,"released",s,Math.PI/2));let o=(this.config.logistics?.waypoints||[{x:56,z:3},{x:47,z:3},{x:47,z:-4},{x:35,z:-4}]).map(a=>[a.x,a.z]);for(let a of e.logistics?.vehicles||[]){let c=this.vehicles.get(a.id);c||(c=_b(),this.root.add(c.root),this.vehicles.set(a.id,c));let l=a.progress||0;a.phase!=="idle"&&(l=Math.min(1,Math.max(0,(t-a.startedAt)/Math.max(1,a.readyAt-a.startedAt))));let u=["unloading"].includes(a.phase)?1:["empty_return","loaded_return"].includes(a.phase)?1-l:a.phase==="outbound"?l:0,h=zc(o,u);c.root.position.set(h.x,0,h.z),c.root.rotation.y=-h.heading+(["empty_return","loaded_return"].includes(a.phase)?Math.PI:0),c.frames.forEach((d,f)=>d.visible=f<a.frameIds.length);for(let d of c.wheels)d.rotation.z=["outbound","empty_return","loaded_return"].includes(a.phase)?-t*2:0;c.root.userData.phase=a.phase}for(let[a,c]of this.actors)s.has(a)||(this.root.remove(c.root),Gp(c),this.actors.delete(a))}place(e,t,n,s,r,o,a,c=0){let l=sa(e);if(!l)return;a.add(l);let u=this.actors.get(l);u||(u=gb(),this.root.add(u.root),this.actors.set(l,u));let h=e?.form||e?.shape,d=h?String(h).includes("frame"):e?.routeStepInstances?.some(f=>f.stationId==="F06"&&f.completedAt!=null)||!["F01","F02","F03","F04","F05"].includes(t);u.body.visible=d,u.tubes.visible=!d,u.cart.visible=o==="moving",u.body.position.y=o==="processing"?-.36:0,u.tubes.position.y=o==="processing"?.02:.27,u.root.position.set(n,s,r),u.root.rotation.y=o==="moving"?-c:c}snapshot(){return{stations:this.cells.size,visibleWorkpieces:this.actors.size,vehicles:[...this.vehicles].map(([e,t])=>({id:e,phase:t.root.userData.phase,position:t.root.position.toArray(),loadedFrames:t.frames.filter(n=>n.visible).length})),engineeringConcept:!0}}};var qp={type:"change"},Qu={type:"start"},Xp={type:"end"},Gc=new qi,Yp=new Ln,xb=Math.cos(70*ni.DEG2RAD),Vc=class extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Oe),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(qp),n.update(),r=s.NONE},this.update=(function(){let R=new C,Q=new pn().setFromUnitVectors(e.up,new C(0,1,0)),Ee=Q.clone().invert(),L=new C,oe=new pn,F=new C,ne=2*Math.PI;return function(tt=null){let pt=n.object.position;R.copy(pt).sub(n.target),R.applyQuaternion(Q),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&J(v(tt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let xt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(xt)&&isFinite(Ut)&&(xt<-Math.PI?xt+=ne:xt>Math.PI&&(xt-=ne),Ut<-Math.PI?Ut+=ne:Ut>Math.PI&&(Ut-=ne),xt<=Ut?a.theta=Math.max(xt,Math.min(Ut,a.theta)):a.theta=a.theta>(xt+Ut)/2?Math.max(xt,a.theta):Math.min(Ut,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ct=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)a.radius=ce(a.radius);else{let St=a.radius;a.radius=ce(a.radius*l),ct=St!=a.radius}if(R.setFromSpherical(a),R.applyQuaternion(Ee),pt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&A){let St=null;if(n.object.isPerspectiveCamera){let cn=R.length();St=ce(cn*l);let Fs=cn-St;n.object.position.addScaledVector(M,Fs),n.object.updateMatrixWorld(),ct=!!Fs}else if(n.object.isOrthographicCamera){let cn=new C(I.x,I.y,0);cn.unproject(n.object);let Fs=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ct=Fs!==n.object.zoom;let _a=new C(I.x,I.y,0);_a.unproject(n.object),n.object.position.sub(_a).add(cn),n.object.updateMatrixWorld(),St=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(Gc.origin.copy(n.object.position),Gc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Gc.direction))<xb?e.lookAt(n.target):(Yp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Gc.intersectPlane(Yp,n.target))))}else if(n.object.isOrthographicCamera){let St=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),St!==n.object.zoom&&(n.object.updateProjectionMatrix(),ct=!0)}return l=1,A=!1,ct||L.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||F.distanceToSquared(n.target)>o?(n.dispatchEvent(qp),L.copy(n.object.position),oe.copy(n.object.quaternion),F.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ve),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",Mt),n.domElement.removeEventListener("pointerup",w),n.domElement.getRootNode().removeEventListener("keydown",te,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new ea,c=new ea,l=1,u=new C,h=new Se,d=new Se,f=new Se,g=new Se,_=new Se,p=new Se,m=new Se,b=new Se,x=new Se,M=new C,I=new Se,A=!1,E=[],D={},G=!1;function v(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function T(R){let Q=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*Q)}function J(R){c.theta-=R}function Z(R){c.phi-=R}let N=(function(){let R=new C;return function(Ee,L){R.setFromMatrixColumn(L,0),R.multiplyScalar(-Ee),u.add(R)}})(),V=(function(){let R=new C;return function(Ee,L){n.screenSpacePanning===!0?R.setFromMatrixColumn(L,1):(R.setFromMatrixColumn(L,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Ee),u.add(R)}})(),H=(function(){let R=new C;return function(Ee,L){let oe=n.domElement;if(n.object.isPerspectiveCamera){let F=n.object.position;R.copy(F).sub(n.target);let ne=R.length();ne*=Math.tan(n.object.fov/2*Math.PI/180),N(2*Ee*ne/oe.clientHeight,n.object.matrix),V(2*L*ne/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(Ee*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),V(L*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R,Q){if(!n.zoomToCursor)return;A=!0;let Ee=n.domElement.getBoundingClientRect(),L=R-Ee.left,oe=Q-Ee.top,F=Ee.width,ne=Ee.height;I.x=L/F*2-1,I.y=-(oe/ne)*2+1,M.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function ce(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ue(R){h.set(R.clientX,R.clientY)}function ve(R){j(R.clientX,R.clientX),m.set(R.clientX,R.clientY)}function He(R){g.set(R.clientX,R.clientY)}function W(R){d.set(R.clientX,R.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);let Q=n.domElement;J(2*Math.PI*f.x/Q.clientHeight),Z(2*Math.PI*f.y/Q.clientHeight),h.copy(d),n.update()}function ie(R){b.set(R.clientX,R.clientY),x.subVectors(b,m),x.y>0?X(T(x.y)):x.y<0&&Y(T(x.y)),m.copy(b),n.update()}function xe(R){_.set(R.clientX,R.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_),n.update()}function ze(R){j(R.clientX,R.clientY),R.deltaY<0?Y(T(R.deltaY)):R.deltaY>0&&X(T(R.deltaY)),n.update()}function Re(R){let Q=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),Q=!0;break}Q&&(R.preventDefault(),n.update())}function be(R){if(E.length===1)h.set(R.pageX,R.pageY);else{let Q=Me(R),Ee=.5*(R.pageX+Q.x),L=.5*(R.pageY+Q.y);h.set(Ee,L)}}function at(R){if(E.length===1)g.set(R.pageX,R.pageY);else{let Q=Me(R),Ee=.5*(R.pageX+Q.x),L=.5*(R.pageY+Q.y);g.set(Ee,L)}}function Be(R){let Q=Me(R),Ee=R.pageX-Q.x,L=R.pageY-Q.y,oe=Math.sqrt(Ee*Ee+L*L);m.set(0,oe)}function O(R){n.enableZoom&&Be(R),n.enablePan&&at(R)}function Wt(R){n.enableZoom&&Be(R),n.enableRotate&&be(R)}function Le(R){if(E.length==1)d.set(R.pageX,R.pageY);else{let Ee=Me(R),L=.5*(R.pageX+Ee.x),oe=.5*(R.pageY+Ee.y);d.set(L,oe)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);let Q=n.domElement;J(2*Math.PI*f.x/Q.clientHeight),Z(2*Math.PI*f.y/Q.clientHeight),h.copy(d)}function qe(R){if(E.length===1)_.set(R.pageX,R.pageY);else{let Q=Me(R),Ee=.5*(R.pageX+Q.x),L=.5*(R.pageY+Q.y);_.set(Ee,L)}p.subVectors(_,g).multiplyScalar(n.panSpeed),H(p.x,p.y),g.copy(_)}function Ue(R){let Q=Me(R),Ee=R.pageX-Q.x,L=R.pageY-Q.y,oe=Math.sqrt(Ee*Ee+L*L);b.set(0,oe),x.set(0,Math.pow(b.y/m.y,n.zoomSpeed)),X(x.y),m.copy(b);let F=(R.pageX+Q.x)*.5,ne=(R.pageY+Q.y)*.5;j(F,ne)}function nt(R){n.enableZoom&&Ue(R),n.enablePan&&qe(R)}function Xe(R){n.enableZoom&&Ue(R),n.enableRotate&&Le(R)}function Ke(R){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Mt),n.domElement.addEventListener("pointerup",w)),!Qe(R)&&(le(R),R.pointerType==="touch"?he(R):y(R)))}function Mt(R){n.enabled!==!1&&(R.pointerType==="touch"?fe(R):q(R))}function w(R){switch(Dt(R),E.length){case 0:n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Mt),n.domElement.removeEventListener("pointerup",w),n.dispatchEvent(Xp),r=s.NONE;break;case 1:let Q=E[0],Ee=D[Q];he({pointerId:Q,pageX:Ee.x,pageY:Ee.y});break}}function y(R){let Q;switch(R.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case ar.DOLLY:if(n.enableZoom===!1)return;ve(R),r=s.DOLLY;break;case ar.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;He(R),r=s.PAN}else{if(n.enableRotate===!1)return;ue(R),r=s.ROTATE}break;case ar.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ue(R),r=s.ROTATE}else{if(n.enablePan===!1)return;He(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qu)}function q(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;W(R);break;case s.DOLLY:if(n.enableZoom===!1)return;ie(R);break;case s.PAN:if(n.enablePan===!1)return;xe(R);break}}function $(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Qu),ze(re(R)),n.dispatchEvent(Xp))}function re(R){let Q=R.deltaMode,Ee={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(Q){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return R.ctrlKey&&!G&&(Ee.deltaY*=10),Ee}function te(R){R.key==="Control"&&(G=!0,n.domElement.getRootNode().addEventListener("keyup",Ge,{passive:!0,capture:!0}))}function Ge(R){R.key==="Control"&&(G=!1,n.domElement.getRootNode().removeEventListener("keyup",Ge,{passive:!0,capture:!0}))}function Oe(R){n.enabled===!1||n.enablePan===!1||Re(R)}function he(R){switch(Ce(R),E.length){case 1:switch(n.touches.ONE){case cr.ROTATE:if(n.enableRotate===!1)return;be(R),r=s.TOUCH_ROTATE;break;case cr.PAN:if(n.enablePan===!1)return;at(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(R),r=s.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Wt(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qu)}function fe(R){switch(Ce(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Le(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;qe(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xe(R),n.update();break;default:r=s.NONE}}function Ve(R){n.enabled!==!1&&R.preventDefault()}function le(R){E.push(R.pointerId)}function Dt(R){delete D[R.pointerId];for(let Q=0;Q<E.length;Q++)if(E[Q]==R.pointerId){E.splice(Q,1);return}}function Qe(R){for(let Q=0;Q<E.length;Q++)if(E[Q]==R.pointerId)return!0;return!1}function Ce(R){let Q=D[R.pointerId];Q===void 0&&(Q=new Se,D[R.pointerId]=Q),Q.set(R.pageX,R.pageY)}function Me(R){let Q=R.pointerId===E[0]?E[1]:E[0];return D[Q]}n.domElement.addEventListener("contextmenu",Ve),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",$,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",te,{passive:!0,capture:!0}),this.update()}};var oa,eh,mo,Wc;function qc(i,e=1/0,t=null){eh||(eh=new Xi(2,2,1,1)),mo||(mo=new Hn({uniforms:{blitTexture:new Tc(i)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),mo.uniforms.blitTexture.value=i,mo.defines.IS_SRGB=i.colorSpace==Ot,mo.needsUpdate=!0,Wc||(Wc=new Ne(eh,mo),Wc.frustrumCulled=!1);let n=new Ht,s=new ti;s.add(Wc),t===null&&(t=oa=new ir({antialias:!1}));let r=Math.min(i.image.width,e),o=Math.min(i.image.height,e);t.setSize(r,o),t.clear(),t.render(s,n);let a=document.createElement("canvas"),c=a.getContext("2d");a.width=r,a.height=o,c.drawImage(t.domElement,0,0,r,o);let l=new Es(a);return l.minFilter=i.minFilter,l.magFilter=i.magFilter,l.wrapS=i.wrapS,l.wrapT=i.wrapT,l.name=i.name,oa&&(oa.forceContextLoss(),oa.dispose(),oa=null),l}var Kp={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},go=class{constructor(){this.pluginCallbacks=[],this.register(function(e){return new sh(e)}),this.register(function(e){return new rh(e)}),this.register(function(e){return new ch(e)}),this.register(function(e){return new lh(e)}),this.register(function(e){return new uh(e)}),this.register(function(e){return new hh(e)}),this.register(function(e){return new oh(e)}),this.register(function(e){return new ah(e)}),this.register(function(e){return new dh(e)}),this.register(function(e){return new fh(e)}),this.register(function(e){return new ph(e)}),this.register(function(e){return new mh(e)}),this.register(function(e){return new gh(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r=new ih,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.write(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},it={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},th="KHR_mesh_quantization",Dn={};Dn[kt]=it.NEAREST;Dn[Zr]=it.NEAREST_MIPMAP_NEAREST;Dn[ki]=it.NEAREST_MIPMAP_LINEAR;Dn[qt]=it.LINEAR;Dn[Qs]=it.LINEAR_MIPMAP_NEAREST;Dn[kn]=it.LINEAR_MIPMAP_LINEAR;Dn[Mn]=it.CLAMP_TO_EDGE;Dn[Gi]=it.REPEAT;Dn[nr]=it.MIRRORED_REPEAT;var jp={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},yb=new Pe,Zp=12,vb=1179937895,bb=2,$p=8,Mb=1313821514,Sb=5130562;function aa(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function Eb(i){return new TextEncoder().encode(i).buffer}function wb(i){return aa(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function Ab(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=ni.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function em(i){return Math.ceil(i/4)*4}function nh(i,e=0){let t=em(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function Jp(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Qp(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}var ih=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;n=s.options;let a=s.extensionsUsed,c=s.extensionsRequired,l=new Blob(r,{type:"application/octet-stream"}),u=Object.keys(a),h=Object.keys(c);if(u.length>0&&(o.extensionsUsed=u),h.length>0&&(o.extensionsRequired=h),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){let d=new FileReader;d.readAsArrayBuffer(l),d.onloadend=function(){let f=nh(d.result),g=new DataView(new ArrayBuffer($p));g.setUint32(0,f.byteLength,!0),g.setUint32(4,Sb,!0);let _=nh(Eb(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer($p));p.setUint32(0,_.byteLength,!0),p.setUint32(4,Mb,!0);let m=new ArrayBuffer(Zp),b=new DataView(m);b.setUint32(0,vb,!0),b.setUint32(4,bb,!0);let x=Zp+p.byteLength+_.byteLength+g.byteLength+f.byteLength;b.setUint32(8,x,!0);let M=new Blob([m,p,_,g,f],{type:"application/octet-stream"}),I=new FileReader;I.readAsArrayBuffer(M),I.onloadend=function(){t(I.result)}}}else if(o.buffers&&o.buffers.length>0){let d=new FileReader;d.readAsDataURL(l),d.onloadend=function(){let f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new C;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new C;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(f){return f.colorSpace===Ot?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof ro&&(e=qc(e)),t instanceof ro&&(t=qc(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),c=Jp();c.width=o,c.height=a;let l=c.getContext("2d");l.fillStyle="#00ffff",l.fillRect(0,0,o,a);let u=l.getImageData(0,0,o,a);if(s){l.drawImage(s,0,0,o,a);let f=n(e),g=l.getImageData(0,0,o,a).data;for(let _=2;_<g.length;_+=4)u.data[_]=f(g[_]/256)*256}if(r){l.drawImage(r,0,0,o,a);let f=n(t),g=l.getImageData(0,0,o,a).data;for(let _=1;_<g.length;_+=4)u.data[_]=f(g[_]/256)*256}l.putImageData(u,0,0);let d=(e||t).clone();return d.source=new Qr(c),d.colorSpace=di,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case it.BYTE:case it.UNSIGNED_BYTE:a=1;break;case it.SHORT:case it.UNSIGNED_SHORT:a=2;break;default:a=4}let c=em(s*e.itemSize*a),l=new DataView(new ArrayBuffer(c)),u=0;for(let f=n;f<n+s;f++)for(let g=0;g<e.itemSize;g++){let _;e.itemSize>4?_=e.array[f*e.itemSize+g]:(g===0?_=e.getX(f):g===1?_=e.getY(f):g===2?_=e.getZ(f):g===3&&(_=e.getW(f)),e.normalized===!0&&(_=ni.normalize(_,e.array))),t===it.FLOAT?l.setFloat32(u,_,!0):t===it.INT?l.setInt32(u,_,!0):t===it.UNSIGNED_INT?l.setUint32(u,_,!0):t===it.SHORT?l.setInt16(u,_,!0):t===it.UNSIGNED_SHORT?l.setUint16(u,_,!0):t===it.BYTE?l.setInt8(u,_):t===it.UNSIGNED_BYTE&&l.setUint8(u,_),u+=a}let h={buffer:this.processBuffer(l.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(h.target=r),r===it.ARRAY_BUFFER&&(h.byteStride=e.itemSize*a),this.byteOffset+=c,o.bufferViews.push(h),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=nh(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=it.FLOAT;else if(e.array.constructor===Int32Array)a=it.INT;else if(e.array.constructor===Uint32Array)a=it.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=it.SHORT;else if(e.array.constructor===Uint16Array)a=it.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=it.BYTE;else if(e.array.constructor===Uint8Array)a=it.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let c=Ab(e,n,s),l;t!==void 0&&(l=e===t.index?it.ELEMENT_ARRAY_BUFFER:it.ARRAY_BUFFER);let u=this.processBufferView(e,a,n,s,l),h={bufferView:u.id,byteOffset:u.byteOffset,componentType:a,count:s,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(h.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(h)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,c=r.options,l=r.pending;o.images.has(e)||o.images.set(e,{});let u=o.images.get(e),h=s+":flipY/"+n.toString();if(u[h]!==void 0)return u[h];a.images||(a.images=[]);let d={mimeType:s},f=Jp();f.width=Math.min(e.width,c.maxTextureSize),f.height=Math.min(e.height,c.maxTextureSize);let g=f.getContext("2d");if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==En&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement or ImageBitmap.");c.binary===!0?l.push(Qp(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{d.bufferView=p})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):l.push(Qp(f,s).then(p=>new FileReader().readAsDataURL(p)).then(p=>{d.uri=p}));let _=a.images.push(d)-1;return u[h]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:Dn[e.magFilter],minFilter:Dn[e.minFilter],wrapS:Dn[e.wrapS],wrapT:Dn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof ro&&(e=qc(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");let a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),this._invokeAll(function(l){l.writeTexture&&l.writeTexture(e,a)});let c=r.textures.push(a)-1;return s.textures.set(e,c),c}processMaterial(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(aa(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=.5,s.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){let a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),c={index:this.processTexture(a),channel:a.channel};this.applyTextureTransform(c,a),s.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){let a={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){let a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let l={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),s.emissiveTexture=l}}if(e.normalMap){let a={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){let a={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===bn&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,s)});let o=n.materials.push(s)-1;return t.materials.set(e,o),o}processMesh(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let M=0,I=e.material.length;M<I;M++)s.push(e.material[M].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=it.LINES:e.isLineLoop?a=it.LINE_LOOP:e.isLine?a=it.LINE_STRIP:e.isPoints?a=it.POINTS:a=e.material.wireframe?it.LINES:it.TRIANGLES;let c={},l={},u=[],h=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let M in o.attributes){if(M.slice(0,5)==="morph")continue;let I=o.attributes[M];if(M=d[M]||M.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(M)||(M="_"+M),t.attributes.has(this.getUID(I))){l[M]=t.attributes.get(this.getUID(I));continue}g=null;let E=I.array;M==="JOINTS_0"&&!(E instanceof Uint16Array)&&!(E instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new gt(new Uint16Array(E),I.itemSize,I.normalized));let D=this.processAccessor(g||I,o);D!==null&&(M.startsWith("_")||this.detectMeshQuantization(M,I),l[M]=D,t.attributes.set(this.getUID(I),D))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let M=[],I=[],A={};if(e.morphTargetDictionary!==void 0)for(let E in e.morphTargetDictionary)A[e.morphTargetDictionary[E]]=E;for(let E=0;E<e.morphTargetInfluences.length;++E){let D={},G=!1;for(let v in o.morphAttributes){if(v!=="position"&&v!=="normal"){G||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),G=!0);continue}let T=o.morphAttributes[v][E],J=v.toUpperCase(),Z=o.attributes[v];if(t.attributes.has(this.getUID(T,!0))){D[J]=t.attributes.get(this.getUID(T,!0));continue}let N=T.clone();if(!o.morphTargetsRelative)for(let V=0,H=T.count;V<H;V++)for(let X=0;X<T.itemSize;X++)X===0&&N.setX(V,T.getX(V)-Z.getX(V)),X===1&&N.setY(V,T.getY(V)-Z.getY(V)),X===2&&N.setZ(V,T.getZ(V)-Z.getZ(V)),X===3&&N.setW(V,T.getW(V)-Z.getW(V));D[J]=this.processAccessor(N,o),t.attributes.set(this.getUID(Z,!0),D[J])}h.push(D),M.push(e.morphTargetInfluences[E]),e.morphTargetDictionary!==void 0&&I.push(A[E])}c.weights=M,I.length>0&&(c.extras={},c.extras.targetNames=I)}let _=Array.isArray(e.material);if(_&&o.groups.length===0)return null;let p=!1;if(_&&o.index===null){let M=[];for(let I=0,A=o.attributes.position.count;I<A;I++)M[I]=I;o.setIndex(M),p=!0}let m=_?e.material:[e.material],b=_?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let M=0,I=b.length;M<I;M++){let A={mode:a,attributes:l};if(this.serializeUserData(o,A),h.length>0&&(A.targets=h),o.index!==null){let D=this.getUID(o.index);(b[M].start!==void 0||b[M].count!==void 0)&&(D+=":"+b[M].start+":"+b[M].count),t.attributes.has(D)?A.indices=t.attributes.get(D):(A.indices=this.processAccessor(o.index,o,b[M].start,b[M].count),t.attributes.set(D,A.indices)),A.indices===null&&delete A.indices}let E=this.processMaterial(m[b[M].materialIndex]);E!==null&&(A.material=E),u.push(A)}p===!0&&o.setIndex(null),c.primitives=u,n.meshes||(n.meshes=[]),this._invokeAll(function(M){M.writeMesh&&M.writeMesh(e,c)});let x=n.meshes.push(c)-1;return t.meshes.set(r,x),x}detectMeshQuantization(e,t){if(this.extensionsUsed[th])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Kp[s]&&Kp[s].includes(n)&&(this.extensionsUsed[th]=!0,this.extensionsRequired[th]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:ni.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=go.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let l=r[c],u=lt.parseTrackName(l.name),h=lt.findNode(t,u.nodeName),d=jp[u.propertyName];if(u.objectName==="bones"&&(h.isSkinnedMesh===!0?h=h.skeleton.getBoneByName(u.objectIndex):h=void 0),!h||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name),null;let f=1,g=l.values.length/l.times.length;d===jp.morphTargetInfluences&&(g/=h.morphTargetInfluences.length);let _;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",g/=3):l.getInterpolation()===bs?_="STEP":_="LINEAR",a.push({input:this.processAccessor(new gt(l.times,f)),output:this.processAccessor(new gt(l.values,g)),interpolation:_}),o.push({sampler:a.length-1,target:{node:s.get(h),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],c=new Float32Array(r.bones.length*16),l=new De;for(let h=0;h<r.bones.length;++h)a.push(n.get(r.bones[h])),l.copy(r.boneInverses[h]),l.multiply(e.bindMatrix).toArray(c,h*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new gt(c,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}processNode(e){let t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);let r={};if(n.trs){let a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();aa(a,[0,0,0,1])||(r.rotation=a),aa(c,[0,0,0])||(r.translation=c),aa(l,[1,1,1])||(r.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),wb(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=this.processMesh(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){let a=[];for(let c=0,l=e.children.length;c<l;c++){let u=e.children[c];if(u.visible||n.onlyVisible===!1){let h=this.processNode(u);h!==null&&a.push(h)}}a.length>0&&(r.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,r)});let o=t.nodes.push(r)-1;return s.set(e,o),o}processScene(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let c=e.children[o];if(c.visible||n.onlyVisible===!1){let l=this.processNode(c);l!==null&&r.push(l)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}processObjects(e){let t=new ti;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){let t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof ti?this.processScene(e[s]):n.push(e[s]);n.length>0&&this.processObjects(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);this._invokeAll(function(s){s.afterParse&&s.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}},sh=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},rh=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},oh=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ah=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ch=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},lh=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},uh=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},hh=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(yb)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},dh=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},fh=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let o={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},ph=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},mh=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let o={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},gh=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),c=new De,l=new C,u=new pn,h=new C;for(let f=0;f<s.count;f++)s.getMatrixAt(f,c),c.decompose(l,u,h),l.toArray(r,f*3),u.toArray(o,f*4),h.toArray(a,f*3);let d={TRANSLATION:n.processAccessor(new gt(r,3)),ROTATION:n.processAccessor(new gt(o,4)),SCALE:n.processAccessor(new gt(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};go.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n)),a;if(i.times.length===0){s[0]=e;for(let c=0;c<n;c++)r[c]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){s.set(i.times.slice(0,c+1),0),s[c+1]=e,s.set(i.times.slice(c+1),c+2),r.set(i.values.slice(0,(c+1)*n),0),r.set(o.evaluate(e),(c+1)*n),r.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=lt.parseTrackName(o.name),c=lt.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Vi)}let l=c.morphTargetInfluences.length,u=c.morphTargetDictionary[a.propertyIndex];if(u===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let h;if(n[c.uuid]===void 0){h=o.clone();let f=new h.ValueBufferType(l*h.times.length);for(let g=0;g<h.times.length;g++)f[g*l+u]=h.values[g];h.name=(a.nodeName||"")+".morphTargetInfluences",h.values=f,n[c.uuid]=h,t.push(h);continue}let d=o.createInterpolant(new o.ValueBufferType(1));h=n[c.uuid];for(let f=0;f<h.times.length;f++)h.values[f*l+u]=d.evaluate(h.times[f]);for(let f=0;f<o.times.length;f++){let g=this.insertKeyframe(h,o.times[f]);h.values[g*l+u]=o.values[f]}}return i.tracks=t,i}};function _i(i,e){if(!Array.isArray(i)||i.length>500)throw Error("\u8A2D\u5099\u6E05\u55AE\u5FC5\u9808\u70BA\u9663\u5217\uFF0C\u6700\u591A 500 \u53F0");let t=new Set;for(let n of i){if(typeof n.id!="string"||!n.id.trim()||t.has(n.id))throw Error("\u8A2D\u5099 ID \u7A7A\u767D\u6216\u91CD\u8907");if(t.add(n.id),!Object.hasOwn(e,n.type))throw Error("\u672A\u77E5\u8A2D\u5099\u985E\u578B");if(n.rotation!==void 0&&(!Number.isFinite(n.rotation)||![0,90,180,270].includes(n.rotation)))throw Error("\u65CB\u8F49\u9700\u70BA 0\uFF0F90\uFF0F180\uFF0F270 \u5EA6");let s=e[n.type],r=(n.rotation||0)*Math.PI/180,o=Math.abs(Math.cos(r))*s.w+Math.abs(Math.sin(r))*s.d,a=Math.abs(Math.sin(r))*s.w+Math.abs(Math.cos(r))*s.d;if(![n.x,n.z,n.cycle].every(Number.isFinite)||Math.abs(n.x)+o/2>40||Math.abs(n.z)+a/2>25)throw Error("\u8A2D\u5099\u672C\u9AD4\u8D85\u51FA 80\xD750m \u5EE0\u754C\u6216\u53C3\u6578\u7121\u6548");if(n.cycle<0||n.cycle>86400||s.cycle!==0&&n.type!=="storage"&&n.cycle<1)throw Error("\u751F\u7522\u8A2D\u5099\u7BC0\u62CD\u9700\u4ECB\u65BC 1\u201386400 \u79D2")}return i}function _o(i,e,t=1){let n=[];for(let s=0;s<i.length;s++)for(let r=s+1;r<i.length;r++){let o=i[s],a=i[r],c=h=>{let d=e[h.type],f=(h.rotation||0)*Math.PI/180;return{w:Math.abs(Math.cos(f))*d.w+Math.abs(Math.sin(f))*d.d,d:Math.abs(Math.sin(f))*d.w+Math.abs(Math.cos(f))*d.d}},l=c(o),u=c(a);Math.abs(o.x-a.x)<(l.w+u.w)/2+t&&Math.abs(o.z-a.z)<(l.d+u.d)/2+t&&n.push(`${o.id} / ${a.id} \u91CD\u758A\u6216\u9593\u8DDD\u5C0F\u65BC ${t}m`)}return n}var ca=class{constructor(e,{route:t,arrival:n=105,wipLimit:s=1/0,bufferCapacity:r=1/0,transportSeconds:o=0,logistics:a=null,orderId:c="DEMO",targetQuantity:l=1/0,materialSource:u=null}={}){if(!Array.isArray(t)||!t.length||new Set(t).size!==t.length)throw Error("Route must contain unique stations");if(!Number.isInteger(n)||n<1)throw Error("Invalid arrival");for(let h of[s,r])if(h!==1/0&&(!Number.isInteger(h)||h<1))throw Error("Limits must be positive integers");if(!Number.isInteger(o)||o<0||o>3600)throw Error("Invalid transport time");if(l!==1/0&&(!Number.isInteger(l)||l<1))throw Error("Invalid order quantity");if(this.logistics=a?hr({...a}):null,this.orderId=c,this.targetQuantity=l,this.transportSeconds=o,this.transfers=[],this.devices=structuredClone(e),this.sequence=[...t],this.arrival=n,this.wipLimit=s,this.bufferCapacity=r,this.time=0,this.remainder=0,this.completed=0,this.released=0,this.deferred=0,this.wipArea=0,this.leadSum=0,this.waiting=Object.fromEntries(t.map(h=>[h,[]])),this.queues=Object.fromEntries(t.map(h=>[h,0])),this.states=Object.fromEntries(e.map(h=>[h.id,{busy:!1,remaining:0,busySeconds:0,blockedSeconds:0,job:null}])),this.events=[],this.finished=[],this.materialSource=u,this.materialStarved=!1,this.materialDeferred=0,e.filter(h=>t.includes(h.type)).some(h=>!Number.isFinite(h.cycle)||h.cycle<1))throw Error("Invalid process cycle")}event(e,t,n=null){let s={time:this.time,serial:e.serial,kind:t,device:n,source:"synthetic-planning"};e.history.push(s),this.events.push(s)}advance(e){if(!Number.isFinite(e)||e<0)throw Error("Invalid elapsed time");if(!this.orderComplete){for(this.remainder+=e;this.remainder>=1-1e-9;)if(this.remainder=Math.max(0,this.remainder-1),this.step(),this.orderComplete){this.remainder=0;break}}}step(){this.time++;for(let e of this.transfers.filter(t=>t.readyAt<=this.time))this.waiting[e.to].push(e.job),this.event(e.job,"arrive",e.from);if(this.transfers=this.transfers.filter(e=>e.readyAt>this.time),!!this.sequence.every(e=>this.devices.some(t=>t.type===e))){if(this.released<this.targetQuantity&&this.time%this.arrival===0)if(this.wip<this.wipLimit&&this.occupancy(this.sequence[0])<this.bufferCapacity){let e=this.orderId+"-"+String(this.released+1).padStart(6,"0"),t=this.materialSource?this.materialSource({serial:e,orderId:this.orderId,time:this.time}):{supplySource:"purchased_frame",synthetic:!0};if(this.materialStarved=!t,t){this.released++;let n={orderId:this.orderId,serial:e,releasedAt:this.time,history:[],partsLot:"DEMO-LOT-001",frameMaterial:structuredClone(t)};this.waiting[this.sequence[0]].push(n),this.event(n,"release")}else this.materialDeferred++,this.deferred++}else this.deferred++;for(let e of this.devices){let t=this.states[e.id];t.busy&&t.remaining>0&&(t.remaining--,t.busySeconds++)}for(let e=this.sequence.length-1;e>=0;e--)for(let t of this.devices.filter(n=>n.type===this.sequence[e])){let n=this.states[t.id];if(!n.busy||n.remaining>0)continue;let s=n.job,r=this.sequence[e+1];if(r&&this.occupancy(r)>=this.bufferCapacity){n.blockedSeconds++,n.blockReason="\u4E0B\u7AD9\u7DE9\u885D\u5DF2\u6EFF",n.wasBlocked||this.event(s,"blocked",t.id),n.wasBlocked=!0;continue}if(r&&this.logistics&&this.logistics.mode!=="conveyor"&&this.transfers.length>=this.logistics.fleet){n.blockedSeconds++,n.blockReason="\u7269\u6D41\u5FD9\u788C",n.wasBlocked||this.event(s,"blocked",t.id),n.wasBlocked=!0;continue}if(n.blockReason="",this.event(s,"finish",t.id),r){let o=this.devices.find(l=>l.type===r),a=this.logistics?Bc(t,o,this.logistics):null,c=a?.seconds??this.transportSeconds;c?(this.transfers.push({job:s,from:t.id,to:r,departAt:this.time,readyAt:this.time+c,...a||{}}),this.event(s,"depart",t.id)):this.waiting[r].push(s)}else this.completed++,s.completedAt=this.time,this.leadSum+=this.time-s.releasedAt,this.finished.push(s),this.event(s,"complete");n.busy=!1,n.job=null,n.wasBlocked=!1}for(let e of this.devices){if(!this.sequence.includes(e.type))continue;let t=this.states[e.id];!t.busy&&this.waiting[e.type].length&&(t.job=this.waiting[e.type].shift(),t.busy=!0,t.remaining=Math.ceil(e.cycle),this.event(t.job,"start",e.id))}for(let e of this.sequence)this.queues[e]=this.waiting[e].length;this.wipArea+=this.wip}}occupancy(e){return this.waiting[e].length+this.transfers.filter(t=>t.to===e).length}get orderComplete(){return this.completed>=this.targetQuantity}get wip(){return this.released-this.completed}get throughput(){return this.time?this.completed*3600/this.time:0}get averageWip(){return this.time?this.wipArea/this.time:0}get averageLeadSeconds(){return this.completed?this.leadSum/this.completed:0}};function xo(i,e,t=Je){if(!Array.isArray(i)||i.length<1||i.length>30)throw Error("\u5DE5\u5E8F\u9700\u67091\u201330\u7AD9");let n=new Set;for(let s of i){if(!s||!Object.hasOwn(t,s.type)||n.has(s.type))throw Error("\u5DE5\u7AD9\u985E\u578B\u7121\u6548\u6216\u91CD\u8907");if(n.add(s.type),typeof s.name!="string"||!s.name.trim()||s.name.length>60)throw Error("\u5DE5\u5E8F\u540D\u7A31\u9700\u70BA1\u201360\u5B57");let r=e.filter(o=>o.type===s.type);if(!r.length)throw Error(s.name+"\u7F3A\u5C11\u8A2D\u5099\uFF0C\u8ACB\u5148\u65B0\u589E");if(r.some(o=>!Number.isFinite(o.cycle)||o.cycle<1||o.cycle>86400))throw Error(s.name+"\u5DE5\u6642\u9700\u70BA1\u201386400\u79D2")}return i}function Xc(i,e){let t=new Map(e.map(o=>[o.id,o])),n=o=>e.find(a=>a.type===o),s=[];for(let[o,a]of Object.entries(i.waiting)){let c=n(o);if(c)for(let l=0;l<a.length;l++)s.push({serial:a[l].serial,status:"queued",type:o,x:c.x+l%4*.55-1,z:c.z+2.3+Math.floor(l/4)*.55,y:1})}for(let[o,a]of Object.entries(i.states)){if(!a.job)continue;let c=t.get(o);s.push({serial:a.job.serial,status:a.remaining===0?"blocked":"processing",type:c.type,device:o,x:c.x,y:3,z:c.z,progress:1-a.remaining/Math.ceil(c.cycle)})}let r=i.time+i.remainder;for(let o of i.transfers){if(o.points){let _=Math.max(0,Math.min(1,(r-o.departAt)/(o.readyAt-o.departAt))),p=zc(o.points,_);s.push({serial:o.job.serial,status:"moving",type:o.to,x:p.x,z:p.z,y:1.2,heading:p.heading,mode:o.mode,progress:_});continue}let a=t.get(o.from),c=n(o.to);if(!a||!c)continue;let l=Math.max(0,Math.min(1,(r-o.departAt)/(o.readyAt-o.departAt))),u=[[a.x,a.z],[a.x,a.z+2.3],[c.x,a.z+2.3],[c.x,c.z+2.3]],h=u.slice(1).map((_,p)=>Math.hypot(_[0]-u[p][0],_[1]-u[p][1])),d=h.reduce((_,p)=>_+p,0),f=l*d,g=u[0];for(let _=0;_<h.length;_++){if(f<=h[_]||_===h.length-1){let p=h[_]?f/h[_]:1;g=u[_].map((m,b)=>m+(u[_+1][b]-m)*p);break}f-=h[_]}s.push({serial:o.job.serial,status:"moving",type:o.to,x:g[0],z:g[1],y:1.2,progress:l})}return s}var _h={moving:5627647,processing:5759907,queued:15910252,blocked:16742520,idle:6651282},Yc=class{constructor(e,t){this.board=t,this.tokens=new Yi(new on(.95,.65,.75),new _t({roughness:.45,metalness:.2}),256),this.tokens.instanceMatrix.setUsage(Lc),this.tokens.count=0,this.tokens.frustumCulled=!1,e.add(this.tokens),this.lights=new Yi(new oo(.26,8,6),new Jt,1e3),this.lights.count=0,this.lights.frustumCulled=!1,e.add(this.lights),this.matrix=new De,this.color=new Pe,this.elements=new Map}configure(e,t){this.steps=e,this.devices=t,this.board.replaceChildren(),this.elements.clear(),this.width=Math.max(800,e.length*170+100),this.board.setAttribute("viewBox",`0 0 ${this.width} 200`),this.board.style.minWidth=this.width+"px";let n="http://www.w3.org/2000/svg";this.ns=n;let s=(r,o,a)=>{let c=document.createElementNS(n,r);for(let[l,u]of Object.entries(o))c.setAttribute(l,u);return a&&(c.textContent=a),this.board.append(c),c};e.forEach((r,o)=>{let a=60+o*170;o<e.length-1&&s("path",{d:`M${a+55} 86H${a+155}`,stroke:"#35617a","stroke-width":3,fill:"none"}),s("rect",{x:a-40,y:45,width:125,height:80,rx:12,fill:"#162d40",stroke:"#42718a"}),s("text",{x:a-28,y:69,fill:"#bde3f0","font-size":12},`${o+1} \xB7 ${r.name}`);let c=s("text",{x:a-28,y:111,fill:"#9bb9c9","font-size":11},"");r.boardText=c})}update(e){let t=Xc(e,this.devices),n=t.slice(0,256);this.jobs=t,this.tokens.count=n.length,n.forEach((r,o)=>{this.matrix.makeTranslation(r.x,r.y,r.z),this.tokens.setMatrixAt(o,this.matrix),this.tokens.setColorAt(o,this.color.setHex(_h[r.status]))}),this.tokens.instanceMatrix.needsUpdate=!0,this.tokens.instanceColor&&(this.tokens.instanceColor.needsUpdate=!0),this.lights.count=this.devices.length,this.devices.forEach((r,o)=>{let a=e.states[r.id],c=this.steps.some(l=>l.type===r.type)&&a?.busy?a.remaining===0?"blocked":"processing":"idle";this.matrix.makeTranslation(r.x,3.6,r.z),this.lights.setMatrixAt(o,this.matrix),this.lights.setColorAt(o,this.color.setHex(_h[c]))}),this.lights.instanceMatrix.needsUpdate=!0,this.lights.instanceColor&&(this.lights.instanceColor.needsUpdate=!0);let s=new Set;for(let r of n){s.add(r.serial);let o=this.elements.get(r.serial);if(!o){o=document.createElementNS(this.ns,"circle"),o.setAttribute("r",6),o.setAttribute("stroke","#071724"),o.setAttribute("stroke-width",2);let u=document.createElementNS(this.ns,"title");u.textContent=r.serial,o.append(u),this.board.append(o),this.elements.set(r.serial,o)}let a=this.steps.findIndex(u=>u.type===r.type),c=60+a*170+17,l=86;if(r.status==="moving"){let u=e.transfers.find(f=>f.job.serial===r.serial),h=this.devices.find(f=>f.id===u?.from),d=this.steps.findIndex(f=>f.type===h?.type);c=60+(d+(a-d)*r.progress)*170+17,l=145}if(r.status==="queued"){let u=e.waiting[r.type].findIndex(h=>h.serial===r.serial);c+=u%8*13-40,l=167+Math.floor(u/8)*13}o.setAttribute("cx",c),o.setAttribute("cy",l),o.setAttribute("fill","#"+_h[r.status].toString(16))}for(let[r,o]of this.elements)s.has(r)||(o.remove(),this.elements.delete(r));return this.steps.forEach(r=>{let o=this.devices.filter(c=>c.type===r.type),a=o.filter(c=>e.states[c.id]?.busy).length;r.boardText.textContent=`${a}/${o.length} \u52A0\u5DE5 \xB7 \u7B49\u5F85${e.queues[r.type]}`}),{total:t.length,visible:n.length}}};var xh=new Map;function dr(i){return xh.has(i)||xh.set(i,new _t({color:i,roughness:.45,metalness:.35})),xh.get(i)}function vt(i,e,t,n,s,r=0,o=0,a=0){let c=new Ne(new on(e,t,n),dr(s));return c.position.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Un(i,e,t,n,s){let r=new C(...t).sub(new C(...e)),o=new Ne(new An(n,n,r.length(),8),dr(s));return o.position.set(...e).addScaledVector(r,.5),o.quaternion.setFromUnitVectors(new C(0,1,0),r.normalize()),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function yh(i,e,t,n,s=.36){let r=new Ae;r.position.set(e,t,n),i.add(r);let o=new Ne(new Ki(s,Math.min(.045,s*.125),10,48),dr(1385782));r.add(o);let a=new Ne(new Ki(s-.055,.012,6,48),dr(11121336));r.add(a);for(let c=0;c<16;c++){let l=c*Math.PI/8;Un(r,[0,0,0],[Math.cos(l)*s,Math.sin(l)*s,0],.009,12306641)}return vt(r,.08,.08,.08,16238175,s-.06,0,.025),r}function Tb(){let i=new Ae,e=new Ae,t=new Ae,n=new Ae,s=new Ae,r=new Ae,o=new Ae,a=new Ae,c=[-.6,.42,0],l=[0,.44,0],u=[-.15,1.05,0],h=[.6,1.02,0],d=[.7,.42,0];for(let[p,m]of[[c,l],[c,u],[l,u],[u,h],[h,l]])Un(e,p,m,.035,2521720);Un(t,h,d,.03,14739694),Un(t,h,[.65,1.2,0],.025,14739694),Un(t,[.65,1.2,-.22],[.65,1.2,.22],.025,1583161),vt(n,.33,.07,.19,1648698,-.2,1.2);let f=Un(n,[0,.44,0],[.15,.35,.15],.028,8293275),g=[yh(s,...c),yh(s,...d)];for(let p of[c,d]){let m=new Ne(new An(.11,.11,.015,24),dr(9477024));m.rotation.x=Math.PI/2,m.position.set(p[0],p[1],.055),s.add(m)}Un(n,u,[-.19,1.2,0],.021,9214366);let _=new Ne(new Ki(.12,.015,8,24),dr(9148061));_.position.set(0,.44,.07),n.add(_),Un(n,[-.58,.42,.065],[.02,.56,.065],.012,5002587),Un(n,[-.58,.42,.065],[.02,.32,.065],.012,5002587);for(let p of[-.21,.21])vt(t,.16,.04,.06,2107179,.65,1.2,p);return vt(r,.3,.27,.25,9335502,0,.48,.03),vt(o,.15,.46,.18,3361117,.22,.76,.02),vt(a,2.1,1.2,.55,12819307,0,.7,0),i.add(e,t,n,s,r,o,a),{g:i,frame:e,fork:t,drive:n,wheels:s,motor:r,battery:o,carton:a,rotating:g,crank:f}}function Rb(i){let e=new Ae,t=[],n=new Ae;e.add(n);for(let s of[-.8,.8])for(let r of[-.3,.3])vt(n,.055,.36,.055,5859697,s,.03,r);if(n.visible=!1,vt(e,2.05,.13,.76,i==="agv"?6912383:9148058,0,.25),Un(e,[0,.31,0],[0,.79,0],.035,9017502),vt(e,.18,.1,.12,2503739,0,.79,0),i==="agv"&&(vt(e,1.9,.22,.72,4017493,0,.14),vt(e,.12,.12,.74,14399797,1,.18),vt(e,.12,.12,.74,14399797,-1,.18),vt(e,.08,.06,.12,5636017,1.15,.2)),i==="cart"&&Un(e,[-1,.3,.38],[-1,1.2,.38],.025,10399935),i!=="conveyor")for(let s of[-.8,.8])for(let r of[-.43,.43]){let o=yh(e,s,.14,r,.12);t.push(o)}return{g:e,rollers:t,feet:n}}function Cb(i){let e=new Ae;e.position.set(i.x,0,i.z),e.rotation.y=(i.rotation||0)*Math.PI/180;let t=new Ae;t.position.set(.7,.85,-.8),e.add(t),vt(t,.32,.055,.28,7899536,0,0),vt(t,.12,.95,.12,7110022,0,.48),vt(t,1.05,.12,.16,9149346,-.4,.94);for(let l of[-.1,.1])for(let u of[-.08,.08])vt(t,.025,.025,.025,4938082,l,.04,u);let n=new Ae;n.position.set(-.45,.88,0),t.add(n),vt(n,.24,.24,.25,6847364);let s=vt(n,.11,.34,.11,10464949,0,-.25,0);Un(n,[0,-.42,0],[0,-.52,0],.025,4345428),t.visible=["kit","motor","drive"].includes(i.type);let r=vt(e,.08,.65,.75,6586254,-1.1,1.4,0),o=vt(e,.012,.48,.7,12099707,-1.1,1.35,0);r.visible=o.visible=i.type==="torque";let a=new Ae;a.position.set(0,1.2,0),vt(a,1.7,.04,.5,12692619,0,0,.25),e.add(a),a.visible=i.type==="pack",Un(e,[1.15,.1,-.65],[1.15,1.85,-.65],.024,3688014);let c=new Ne(new An(.065,.065,.18,12),new _t({color:7438456,emissive:1390636,emissiveIntensity:.5}));return c.position.set(1.15,1.9,-.65),e.add(c),{g:e,arm:t,elbow:n,tool:s,scanner:r,beam:o,flap:a,statusLight:c}}function Ib(i){i.updateMatrixWorld(!0);let e=new Map;i.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh&&!t.userData.sharedAsset){let n=t.material.uuid;e.has(n)||e.set(n,[]),e.get(n).push(t)}});for(let t of e.values()){if(t.length<2)continue;let n=t.map(o=>o.geometry.clone().applyMatrix4(o.matrixWorld)),s=Dc(n,!1);if(!s)continue;let r=new Ne(s,t[0].material);r.castShadow=!0,r.receiveShadow=!0,r.name="assumed_conveyor_structural_frame",i.add(r);for(let o of t)o.removeFromParent(),o.geometry.dispose();for(let o of n)o.dispose()}}function Pb(i,e){return e.length?[0,1].map(t=>{let n=e[0].children[t],s=new Yi(n.geometry,n.material,e.length);s.instanceMatrix.setUsage(Lc),s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,s.name=t?"roller_rotation_marks":"assumed_connector_rollers";for(let r of e.slice(1))r.children[t].geometry.dispose(),r.children[t].geometry=n.geometry;return i.add(s),s}):[]}function Lb(i,e,t){let n=Math.abs(i[0]-e[0])>1e-4?0:1,s=i[1-n],r=n+":"+s.toFixed(4),o=Math.min(i[n],e[n]),a=Math.max(i[n],e[n]);if(a-o<1e-4)return[];let c=[[o,a]];for(let[u,h]of t.get(r)||[])c=c.flatMap(([d,f])=>h<=d+1e-4||u>=f-1e-4?[[d,f]]:[[d,Math.max(d,u)],[Math.min(f,h),f]].filter(([g,_])=>_-g>1e-4));let l=t.get(r)||[];return t.set(r,[...l,[o,a]]),c.map(([u,h])=>{let d=[...i],f=[...e];return d[n]=i[n]<e[n]?u:h,f[n]=i[n]<e[n]?h:u,[d,f]})}var Kc=class{constructor(e){this.root=new Ae,e.add(this.root),this.objects=new Map,this.motion={},this.clock=0,this.instanceMatrixTemp=new De}clear(){this.root.traverse(e=>{e.userData.sharedAsset||e.geometry?.dispose()}),this.root.clear(),this.objects.clear()}configure(e,t,n,s){this.clear(),this.steps=e,this.devices=t,this.mode=n,this.rigs=t.filter(a=>e.some(c=>c.type===a.type)).map(a=>{let c=Cb(a);return c.d=a,this.root.add(c.g),c}),this.belts=[],s.traverse(a=>{a.name==="fixture-bike"&&(a.visible=!1),a.userData.type==="conveyor"&&(a.visible=!1)}),this.surfaceHeight=na("conveyor")?.7693:.82;let r=4,o=new Map;for(let a=0;a<e.length-1;a++){let c=t.find(l=>l.type===e[a+1].type);if(c)for(let l of t.filter(u=>u.type===e[a].type)){let u=Bc(l,c,{mode:n,speed:1,fleet:2}),h=new Ae,d=[];for(let g=0;g<u.points.length-1;g++)for(let[_,p]of Lb(u.points[g],u.points[g+1],o)){let m=Math.hypot(p[0]-_[0],p[1]-_[1]);if(m<.01)continue;let b=Math.atan2(p[1]-_[1],p[0]-_[0]),x=na("conveyor"),M=x?Math.max(x.x,x.z):1/0,I=0;if(n==="conveyor"&&x&&M<m&&r>0&&["fork","drive"].includes(l.type)&&Math.abs(p[1]-_[1])<.01){let E=Math.min(r,Math.floor(m/M));r-=E;for(let D=0;D<E;D++){let G=uo("conveyor"),v=(D+.5)*M;G.rotation.y=-b+(x.z>x.x?Math.PI/2:0),G.position.set(_[0]+Math.cos(b)*v,0,_[1]+Math.sin(b)*v),h.add(G)}I=E*M}let A=n==="conveyor"?I:0;if(n==="conveyor"&&m-A>.05){let E=new Ae,D=m-A;E.position.set(_[0]+Math.cos(b)*(A+D/2),0,_[1]+Math.sin(b)*(A+D/2)),E.rotation.y=-b;for(let G of[-.58,.58])vt(E,D,.13,.08,8688796,0,this.surfaceHeight-.08,G);for(let G=-D/2+.2;G<D/2;G+=2)for(let v of[-.48,.48])vt(E,.065,this.surfaceHeight-.16,.065,6715781,G,(this.surfaceHeight-.16)/2,v);h.add(E)}for(let E=A;E<m;E+=n==="conveyor"?.28:.9){let D=new Ae;if(D.position.set(_[0]+Math.cos(b)*E,n==="conveyor"?this.surfaceHeight-.085:.035,_[1]+Math.sin(b)*E),D.rotation.y=-b,n==="conveyor"){let G=new Ne(new An(.07,.07,1.02,12),dr(11187901));G.rotation.x=Math.PI/2,G.castShadow=!0,D.add(G),vt(D,.026,.012,.09,12755262,0,.072,.4),d.push(D)}else vt(D,.28,.008,.07,n==="agv"?14727484:11647421),h.add(D)}}Ib(h);let f=Pb(h,d);this.root.add(h),this.belts.push({from:l.id,link:h,drums:d,batches:f})}}}update(e,t){let n=e.time+e.remainder;this.clock=n;let s=Xc(e,this.devices).slice(0,60),r=new Set;for(let o of s){r.add(o.serial);let a=this.objects.get(o.serial);if(!a){let _=Tb(),p=Rb(this.mode),m=new Ae;m.add(p.g,_.g),this.root.add(m),a={g:m,bike:_,base:p},this.objects.set(o.serial,a)}let{bike:c,base:l}=a,u=this.steps.findIndex(_=>_.type===o.type),h=new Set(this.steps.slice(0,u).map(_=>_.type)),d=_=>h.has(_)||o.type===_&&o.status!=="queued"&&(o.status==="moving"||o.progress>.5);c.fork.visible=d("fork")||h.has("final"),c.drive.visible=d("drive")||h.has("final"),c.wheels.visible=d("final"),c.motor.visible=d("motor"),c.battery.visible=d("battery"),c.carton.visible=d("pack"),c.frame.visible=!c.carton.visible;for(let _ of[c.fork,c.drive,c.wheels,c.motor,c.battery])c.carton.visible&&(_.visible=!1);o.status==="moving"&&(c.fork.visible=h.has("fork"),c.drive.visible=h.has("drive"),c.wheels.visible=h.has("final"),c.motor.visible=h.has("motor"),c.battery.visible=h.has("battery"),c.carton.visible=h.has("pack"));let f=o.status==="moving",g=f?this.mode==="conveyor"?this.surfaceHeight-.315:0:o.status==="queued"?this.mode==="conveyor"?.15:0:.65;if((o.status==="processing"||o.status==="blocked")&&(o.type==="kit"&&(g=.125),o.type==="roller"&&(g=.045),o.type==="pack"&&(g=c.carton.visible?.487:.572)),l.feet.visible=o.status==="queued"&&this.mode==="conveyor",a.g.position.set(o.x,g,o.z),a.g.rotation.y=f?-(o.heading||0):0,c.g.position.y=.34,l.g.visible=f||o.status==="queued",o.status==="processing"&&o.type==="roller")for(let _ of c.rotating)_.rotation.z=-n*3;for(let _ of l.rollers)_.rotation.z=f?-n*2:0}for(let[o,a]of this.objects)r.has(o)||(this.root.remove(a.g),a.g.traverse(c=>c.geometry?.dispose()),this.objects.delete(o));this.motion={};for(let o of this.rigs){let a=e.states[o.d.id],c=a?.busy&&a.remaining>0,l=c?n*1.8:0;o.statusLight.material.color.setHex(a?.busy?a.remaining===0?15444534:6929294:6911866),o.statusLight.material.emissive.setHex(a?.busy?a.remaining===0?7754246:1461553:0),o.arm.rotation.z=0,o.elbow.position.x=-.45+(c?Math.sin(l*.7)*.12:0),o.tool.position.y=-.25+(c?Math.sin(l)*.035:0),o.tool.rotation.y=c?l*2:0,o.scanner.position.x=c?Math.sin(l)*.9:-1.1,o.beam.position.x=o.scanner.position.x,o.flap.rotation.x=c?Math.sin(l)*.8:0,this.motion[o.d.id]={working:c,arm:o.arm.rotation.z,toolSlide:o.elbow.position.x,tool:o.tool.rotation.y,scanner:o.scanner.position.x,flap:o.flap.rotation.x}}for(let o of this.belts){let a=e.transfers.length>0;for(let c of o.drums){let l=c.children[0];l.rotation.y=a?n*3:l.rotation.y;let u=c.children[1];u.position.x=a?Math.sin(n*3)*.07:u.position.x}for(let c=0;c<o.drums.length;c++){let l=o.drums[c];l.updateMatrix();for(let u=0;u<o.batches.length;u++)l.children[u].updateMatrix(),o.batches[u].setMatrixAt(c,this.instanceMatrixTemp.multiplyMatrices(l.matrix,l.children[u].matrix))}for(let c of o.batches)c.instanceMatrix.needsUpdate=!0}return s}snapshot(){return{clock:this.clock,machines:this.motion,carriers:[...this.objects].map(([e,t])=>({serial:e,position:t.g.position.toArray(),heading:t.g.rotation.y,mode:this.mode,hasWheels:t.bike.wheels.visible,boxed:t.bike.carton.visible})),rollerAngle:this.belts.flatMap(e=>e.drums).map(e=>e.children[0]?.rotation.y)}}};var yo=(i,e,t)=>Number.isInteger(i)&&i>=e&&i<=t;function tm(i,e=Je,t="bicycle"){if(!i||typeof i!="object")throw Error("\u5DE5\u55AE\u8A2D\u5B9A\u7F3A\u5931");if(Object.assign(i,ls(i,t)),_i(i.devices,e),xo(i.steps,i.devices,e),i.processes)for(let n of Object.keys(Is)){if(!i.processes[n])throw Error("\u5DE5\u55AE\u7F3A\u5C11\u88FD\u7A0B");xo(i.processes[n],i.devices,e)}if(hr(i.logistics),!yo(i.arrival,1,3600)||!yo(i.transportSeconds,1,3600))throw Error("\u5DE5\u55AE\u6295\u6599\uFF0F\u642C\u904B\u53C3\u6578\u932F\u8AA4");if(!["push","lean"].includes(i.policy)||![i.wipLimit,i.bufferCapacity].every(n=>yo(n,1,500)))throw Error("\u5DE5\u55AE\u6D41\u52D5\u53C3\u6578\u932F\u8AA4");return i}function nm(i){let e=structuredClone(i);if(!e||!["bicycle-line-v0.3","bicycle-line-v0.7","bicycle-line-v0.9"].includes(e.schema)||!Object.hasOwn(Is,e.route)||!yo(e.arrival,1,3600)||!Array.isArray(e.bom)||e.bom.length>500)throw Error("\u914D\u7F6E\u683C\u5F0F\u932F\u8AA4");if(e.transportSeconds??(e.transportSeconds=8),!yo(e.transportSeconds,1,3600))throw Error("\u642C\u904B\u6642\u9593\u7121\u6548");if(e.customTypes??(e.customTypes={}),!e.customTypes||typeof e.customTypes!="object"||Array.isArray(e.customTypes)||Object.keys(e.customTypes).length>30)throw Error("\u81EA\u8A02\u985E\u578B\u683C\u5F0F\u932F\u8AA4");for(let[s,r]of Object.entries(e.customTypes))if(!/^custom_[0-9]+$/.test(s)||!r||typeof r.name!="string"||!r.name.trim()||r.name.length>60||r.w!==4||r.d!==3||r.model!=="bench"||!Number.isInteger(r.color)||r.color<0||r.color>16777215||r.cycle!==60)throw Error("\u81EA\u8A02\u5DE5\u7AD9\u683C\u5F0F\u7121\u6548");let t={...Object.fromEntries(Object.entries(Je).filter(([s])=>!s.startsWith("custom_"))),...e.customTypes};_i(e.devices,t),e.logistics=e.logistics?hr(e.logistics):{mode:"conveyor",speed:.7,fleet:2},e.flow??(e.flow={policy:"push",wipLimit:12,bufferCapacity:2}),e.processes??(e.processes=Object.fromEntries(Object.entries(Is).map(([s,r])=>[s,r.map(o=>({type:o,name:t[o].name}))])));for(let s of Object.keys(Is)){if(!e.processes[s])throw Error("\u7F3A\u5C11\u88FD\u7A0B");xo(e.processes[s],e.devices,t)}if(tm({devices:e.devices,steps:e.processes[e.route],logistics:e.logistics,arrival:e.arrival,transportSeconds:e.transportSeconds,...e.flow},t,e.route),e.bom.some(s=>!s||typeof s.part!="string"||!yo(s.quantity,0,1e4)||!Object.hasOwn(t,s.station)))throw Error("BOM\u683C\u5F0F\u932F\u8AA4");if(e.workOrders??(e.workOrders=[{id:"WO-IMPORTED",product:e.route,quantity:20}]),!Array.isArray(e.workOrders)||e.workOrders.length<1||e.workOrders.length>100)throw Error("\u5DE5\u55AE\u6E05\u55AE\u932F\u8AA4");if(e.workOrders=e.workOrders.map(s=>(kc(s),s.settings&&tm(s.settings,t,s.product),{id:s.id,product:s.product,quantity:s.quantity,...s.settings?{settings:s.settings}:{}})),new Set(e.workOrders.map(s=>s.id)).size!==e.workOrders.length)throw Error("\u91CD\u8907\u5DE5\u55AE");e.activeOrderId??(e.activeOrderId=e.workOrders[0].id);let n=e.workOrders.find(s=>s.id===e.activeOrderId);if(!n)throw Error("\u627E\u4E0D\u5230\u76EE\u524D\u5DE5\u55AE");if(n.product!==e.route)throw Error("\u76EE\u524D\u5DE5\u55AE\u8ECA\u7A2E\u8207\u8DEF\u7DDA\u4E0D\u7B26");return e.frameFactory=Bn(e.frameFactory??ui()),e}var jc=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ah(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new zh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Rs.extractUrlBase(e);o=Rs.resolveURL(l,this.path)}else o=Rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Jo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===am){try{o[st.KHR_BINARY_GLTF]=new kh(e)}catch(h){s&&s(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new Eh;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new Hh(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new Gh;break;case st.KHR_MESH_QUANTIZATION:o[h]=new Vh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Nb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sh=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Qt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new or(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new co(u),l.distance=h;break;case"spot":l=new wc(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ns(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Eh=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(s)}},wh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],Qt),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Lh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Dh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Oh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fh=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bh=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},zh=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let _=new De,p=new C,m=new pn,b=new C(1,1,1),x=new Yi(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&b.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(p,m,b));for(let M in c)if(M==="_COLOR_0"){let I=c[M];x.instanceColor=new rr(I.array,I.itemSize,I.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Rt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},am="glTF",la=12,im={JSON:1313821514,BIN:5130562},kh=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,la),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-la,r=new DataView(e,la),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===im.JSON){let l=new Uint8Array(e,la+o,a);this.content=n.decode(l)}else if(c===im.BIN){let l=la+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=qh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=qh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=vo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(f)},a,l,Qt,d)})})}},Gh=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vh=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Zc=class extends ws{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,b=1-p,x=m-d+h;for(let M=0;M!==a;M++){let I=o[_+M+a],A=o[_+M+c]*u,E=o[g+M+a],D=o[g+M]*u;r[M]=b*I+x*A+p*E+m*D}return r}},Db=new pn,Wh=class extends Zc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Db.fromArray(r).normalize().toArray(r),r}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sm={9728:kt,9729:qt,9984:Zr,9985:Qs,9986:ki,9987:kn},rm={33071:Mn,33648:nr,10497:Gi},vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ub={CUBICSPLINE:void 0,LINEAR:Vi,STEP:bs},bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ob(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new _t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),i.DefaultMaterial}function fr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ns(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Bb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zb(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mh(t.attributes):e=i.indices+":"+Mh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mh(i.targets[n]);return e}function Mh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Xh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Hb=new De,Yh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Sc(this.options.manager):this.textureLoader=new Ac(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return fr(r,a,s),Ns(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Rs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=vh[s.type],a=vo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new gt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=vh[s.type],l=vo[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(f&&f!==h){let m=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,x=t.cache.get(b);x||(_=new l(a,m*f,s.count*f/u),x=new io(_,f/u),t.cache.add(b,x)),p=new sr(x,c,d%f/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new gt(_,c,g);if(s.sparse!==void 0){let m=vh.SCALAR,b=vo[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,I=new b(o[1],x,s.sparse.count*m),A=new l(o[2],M,s.sparse.count*c);a!==null&&(p=new gt(p.array.slice(),p.itemSize,p.normalized));for(let E=0,D=I.length;E<D;E++){let G=I[E];if(p.setX(G,A[E*c]),c>=2&&p.setY(G,A[E*c+1]),c>=3&&p.setZ(G,A[E*c+2]),c>=4&&p.setW(G,A[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=sm[d.magFilter]||qt,u.minFilter=sm[d.minFilter]||kn,u.wrapS=rm[d.wrapS]||Gi,u.wrapT=rm[d.wrapT]||Gi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let p=new Xt(_);p.needsUpdate=!0,d(p)}),t.load(Rs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||kb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new $o,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ms,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return _t}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){let h=s[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ot)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);let u=r.alphaMode||bh.OPAQUE;if(u===bh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Se(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Jt){let h=r.emissiveFactor;a.emissive=new Pe().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&o!==Jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ns(h,r),t.associations.set(h,{materials:e}),r.extensions&&fr(s,h,r),h})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return om(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=zb(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=om(new Gt,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?Ob(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let _=u[f],p=o[f],m,b=l[f];if(p.mode===qn.TRIANGLES||p.mode===qn.TRIANGLE_STRIP||p.mode===qn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new gc(_,b):new Ne(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===qn.TRIANGLE_STRIP?m.geometry=Wu(m.geometry,Ic):p.mode===qn.TRIANGLE_FAN&&(m.geometry=Wu(m.geometry,ta));else if(p.mode===qn.LINES)m=new so(_,b);else if(p.mode===qn.LINE_STRIP)m=new Ss(_,b);else if(p.mode===qn.LINE_LOOP)m=new yc(_,b);else if(p.mode===qn.POINTS)m=new vc(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Bb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ns(m,r),p.extensions&&fr(s,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&fr(s,h[0],r),h[0];let d=new Ae;r.extensions&&fr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(ni.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new to(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ns(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new De;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xc(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let b=0,x=d.length;b<x;b++){let M=d[b],I=f[b],A=g[b],E=_[b],D=p[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let G=n._createAnimationTracks(M,I,A,E,D);if(G)for(let v=0;v<G.length;v++)m.push(G[v])}return new Mc(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Hb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Zo:l.length>1?u=new Ae:l.length===1?u=l[0]:u=new Rt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ns(u,r),r.extensions&&fr(n,u,r),r.matrix!==void 0){let h=new De;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ae;n.name&&(r.name=s.createUniqueName(n.name)),Ns(r,n),n.extensions&&fr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof wn||d instanceof Xt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ls[r.path]===Ls.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ls[r.path]){case Ls.weights:l=ji;break;case Ls.rotation:l=gi;break;case Ls.position:case Ls.scale:l=Zi;break;default:n.itemSize===1?l=ji:l=Zi;break}let u=s.interpolation!==void 0?Ub[s.interpolation]:Vi,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Ls[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Xh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof gi?Wh:Zc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gb(i,e,t){let n=e.attributes,s=new rn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let u=Xh(vo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Xh(vo[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function om(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=qh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ut.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Ns(i,e),Gb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Fb(i,e.targets,t):i})}var $c=[{id:"barrier_fence_metal_a02",label:"\u91D1\u5C6C\u8B77\u6B04",sha256:"a0d31e1a7b13ff55c9d24d947d4a3931905b296d28655e4a899ebf7e3458e1d5",encoding:"gzip",byteLength:865224,compressedBytes:793285,compressedSha256:"4906344d41a0628780986fe7be0e2899b0dfb5fdfd96e2a19ee118e72b7b4e17",url:"assets/simready/barrier_fence_metal_a02.glb.gz?v=a0d31e1a7b13"},{id:"box_corrugated_brown_b08",label:"\u74E6\u695E\u7D19\u7BB1",sha256:"5c3ca1853f2032965a30b37ccb4af2a11a0fdab1a439896b37d50e91341fce82",encoding:"gzip",byteLength:2274120,compressedBytes:1890244,compressedSha256:"689c81b5f06734fc24fd9f8a622d47377dd46f2331a770ad44f4198226b03470",url:"assets/simready/box_corrugated_brown_b08.glb.gz?v=5c3ca1853f20"},{id:"conveyor_belt_a05",label:"\u5DE5\u696D\u6EFE\u7B52\u8F38\u9001\u6A5F",sha256:"bc8439c574afa753c16a544787e2f449582f1aaaa8250917363449593ff810f7",encoding:"gzip",byteLength:12270108,compressedBytes:7460593,compressedSha256:"7577e4f47ffe8c2c68fc52988540cd51e633b36955204aa6bcc112e1527c08be",chunks:[{url:"assets/simready/conveyor_belt_a05.glb.gz.part001?v=bc8439c574af",bytes:7340032,sha256:"38a677282945ba592dfe71293c9abcb7c7dd49703d2c89908d8c5b58ea2b3ed2"},{url:"assets/simready/conveyor_belt_a05.glb.gz.part002?v=bc8439c574af",bytes:120561,sha256:"58851e2be1b78a375a3986b87c5bd008b28a40af960ff75cd0f088ee1308c340"}]},{id:"table_deluxe_packing_a01",label:"\u5305\u88DD\u5DE5\u4F5C\u53F0",sha256:"d495efaec8503871c86e1215d9ed46202f49f8f101941fc7155dfb0f069de2de",encoding:"gzip",byteLength:18332896,compressedBytes:12583225,compressedSha256:"9ef1553a5786d237e6487518a531d58e833c8e460976dabe71c0ed0d94677e62",chunks:[{url:"assets/simready/table_deluxe_packing_a01.glb.gz.part001?v=d495efaec850",bytes:7340032,sha256:"2d0da446903706232e6237881e33c71faf53e472cc07da1d3cb09813b4d98b9f"},{url:"assets/simready/table_deluxe_packing_a01.glb.gz.part002?v=d495efaec850",bytes:5243193,sha256:"db595f130b5be42b3d678a59bf38317dbf791c6cc761617dded99af30898cc7c"}]},{id:"table_metal_stainless_a03",label:"\u4E0D\u93FD\u92FC\u7E3D\u88DD\u5DE5\u4F5C\u53F0",sha256:"6597fa6a5a131851835b5bac4a532ba2b65e1da9379138bca602327196d10c4c",encoding:"gzip",byteLength:1573316,compressedBytes:1367187,compressedSha256:"ef80d0aaea84e3b2dee20cc03d1bd7ef7d0eaf172ce5e1b51b7df9309ec15336",url:"assets/simready/table_metal_stainless_a03.glb.gz?v=6597fa6a5a13"},{id:"rack_h3m_s01",label:"\u4E09\u7C73\u5009\u5132\u8CA8\u67B6",sha256:"7d2397c73bad8101037e252bd23486495af104c533f535a02ce55e16b1baba8d",encoding:"gzip",byteLength:14766456,compressedBytes:6146961,compressedSha256:"549bfdbc41a021fd1ff5b3690d88b0818605b470c6f0be0e89d324cdfa327d48",url:"assets/simready/rack_h3m_s01.glb.gz?v=7d2397c73bad"},{id:"equipment_mechanic_tool_cart_g01",label:"\u6A5F\u4FEE\u5DE5\u5177\u8ECA",sha256:"53f3025e40dd307f1b576789b377e0de26caa7edec43a870ac6727053884a1cc",encoding:"gzip",byteLength:26782932,compressedBytes:13014782,compressedSha256:"60adcdea94c58e8808d792b20a789eab871b08cb0294190a82c75cc1b0eeb823",chunks:[{url:"assets/simready/equipment_mechanic_tool_cart_g01.glb.gz.part001?v=53f3025e40dd",bytes:7340032,sha256:"8dfd0cbc69abab3298b1d57aafea0a00777356eb5a78dc3f41defcfe120dd901"},{url:"assets/simready/equipment_mechanic_tool_cart_g01.glb.gz.part002?v=53f3025e40dd",bytes:5674750,sha256:"7e1629c642f4f21b132798d4a4c35e52b33678f8b8e9c086f5f1f044f9462909"}]},{id:"pallet_wood_recycled_a05",label:"\u6728\u6258\u76E4",sha256:"d1a8a370ecb170f28a3ed222d3839274c9888c9a58f070a7fff2d5150bb4792a",encoding:"gzip",byteLength:1279404,compressedBytes:1191579,compressedSha256:"3ced671084efb741f7d23b177356c109ffe9f9801cb8542592ef493f80f80d84",url:"assets/simready/pallet_wood_recycled_a05.glb.gz?v=d1a8a370ecb1"},{id:"equipment_bench_vise_a01",label:"\u901A\u7528\u684C\u864E\u9257",sha256:"b30bbb4ad93d2ee3c5197fdf83282d8f28bcd53abc7a6c012ab40cc68b7924d5",encoding:"gzip",byteLength:4698972,compressedBytes:3367414,compressedSha256:"f8c1b825f5753582a384bbc9b606c5c35f8942f510acc3257a293d130c316d5f",url:"assets/simready/equipment_bench_vise_a01.glb.gz?v=b30bbb4ad93d"}];var jh={target:[-22,1,-16],camera:[-13,8,-5]};async function Kh(i,e,t,n){if(e&&i.byteLength!==e)throw Error(n+"\u9577\u5EA6\u4E0D\u7B26\uFF0C\u8ACB\u91CD\u8A66");if(t){if(!globalThis.crypto?.subtle)throw Error("\u5B8C\u6574\u6027\u9A57\u8B49\u9700\u8981 HTTPS\uFF0F\u5B89\u5168\u700F\u89BD\u5668\u4F86\u6E90");let s=await crypto.subtle.digest("SHA-256",i);if([...new Uint8Array(s)].map(o=>o.toString(16).padStart(2,"0")).join("")!==t)throw Error(n+" SHA-256 \u4E0D\u7B26\uFF0C\u5DF2\u62D2\u7D55\u8F09\u5165")}}async function Vb(i,e=()=>{}){let t,n=!!(i.url||i.chunks?.length);if(n){let r=i.chunks?.length?i.chunks:[{url:i.url,bytes:i.compressedBytes,sha256:i.compressedSha256}],o=[],a=0;for(let l of r){let u=await fetch(l.url,{cache:"force-cache"});if(!u.ok)throw Error("\u7D20\u6750\u4E0B\u8F09\u5931\u6557\uFF08HTTP "+u.status+"\uFF09");let h;if(u.body?.getReader){let d=u.body.getReader(),f=[],g=0;for(;;){let{value:p,done:m}=await d.read();if(m)break;f.push(p),g+=p.length,a+=p.length,e(i.compressedBytes?Math.min(1,a/i.compressedBytes):0,a)}h=new Uint8Array(g);let _=0;for(let p of f)h.set(p,_),_+=p.length}else h=new Uint8Array(await u.arrayBuffer()),a+=h.length,e(Math.min(1,a/i.compressedBytes),a);await Kh(h,l.bytes,l.sha256,"\u7D20\u6750\u5206\u7247"),o.push(h)}t=new Uint8Array(o.reduce((l,u)=>l+u.length,0));let c=0;for(let l of o)t.set(l,c),c+=l.length;await Kh(t,i.compressedBytes,i.compressedSha256,"\u5B8C\u6574gzip")}else t=Uint8Array.from(atob(i.base64),r=>r.charCodeAt(0));let s=t.buffer;if(i.encoding==="gzip"&&!(t[0]===103&&t[1]===108)){if(typeof DecompressionStream>"u")throw Error("\u700F\u89BD\u5668\u7F3A\u5C11 gzip DecompressionStream\uFF1B\u8ACB\u6539\u7528\u652F\u63F4\u6B64\u529F\u80FD\u7684\u65B0\u7248\u684C\u9762\u700F\u89BD\u5668\uFF0C\u8A2D\u5099\u4E26\u672A\u8F09\u5165");s=await new Response(new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return n&&await Kh(s,i.byteLength,i.sha256,"GLB\u7D20\u6750"),s}function cm(i,e=()=>{}){let t=new Ae;t.name="NVIDIA_SimReady_Visual_Derivatives",i.add(t);let n={state:"loading",loaded:0,total:$c.length,instances:0,errors:[],version:0,source:"NVIDIA SimReady / visual GLB conversion",assets:$c.map(c=>({id:c.id,label:c.label,state:"queued",progress:0,received:0,error:""}))},s=new jc,r;async function o(c){let l=n.assets.find(u=>u.id===c.id);l.state="loading",l.error="",l.progress=0,e();try{let u=0,h=await Vb(c,(_,p)=>{l.progress=_,l.received=p;let m=performance.now();m-u>100&&(u=m,e())});l.state="decoding",l.progress=1,e();let d=await new Promise((_,p)=>s.parse(h,"",_,p));Bp(c.id,d.scene);let f=Object.values(Uc).includes(c.id),g=c.id==="pallet_wood_recycled_a05"?[[-34.84,0,-18.64]]:f?[]:c.id.startsWith("barrier")?[-37.4,-36.15,-34.9].map(_=>[_,.03,-7.2]):[[0,0,0],[1,0,0],[0,0,1],[1,0,1],[0,1,0],[1,1,0]].map(([_,p,m])=>[-35+_*.32,.1212+p*.304,-18.8+m*.32]);for(let[_,p,m]of g){let b=d.scene.clone(!0);b.name=c.id,b.position.set(_,p,m),b.userData={source:"NVIDIA SimReady",assetId:c.id,originalAsset:c.id,derivativeSha256:c.sha256,visualOnly:!0,meters:!0,sharedAsset:!0},t.add(b),n.instances++}l.state="ready",n.loaded++,n.version++}catch(u){l.state="failed",l.error=String(u?.message||u)}e()}async function a(){n.state="loading";let c=$c.filter(h=>n.assets.find(d=>d.id===h.id).state!=="ready"),l=0,u=async()=>{for(;l<c.length;)await o(c[l++])};return await Promise.all([u(),u()]),n.errors=n.assets.filter(h=>h.state==="failed").map(h=>h.label+"\uFF1A"+h.error),n.state=n.loaded===n.total?"ready":n.loaded?"partial":"unavailable",e(),n}return r=Promise.resolve().then(a),{root:t,get ready(){return r},status:n,snapshot:()=>structuredClone(n),retry(){return n.state==="loading"||(r=Promise.resolve().then(a)),r}}}var Wb={concrete:new _t({color:9279131,roughness:.93,metalness:0}),wall:new _t({color:14870247,roughness:.8}),steel:new _t({color:3556944,roughness:.55,metalness:.75}),yellow:new _t({color:14070579,roughness:.8}),light:new _t({color:16777215,emissive:14479103,emissiveIntensity:.8})};function mn(i,e,t,n){let s=new Ne(new on(...e),Wb[n]||n);return s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function lm(){let i=new Ae;i.name="Assumed_factory_architecture",mn(i,[80,.12,50],[0,-.1,0],"concrete"),mn(i,[80,6,.24],[0,3,-25],"wall"),mn(i,[.24,1.15,50],[-40,.575,0],"wall"),mn(i,[.24,1.15,18],[40,.575,-16],"wall"),mn(i,[.24,1.15,25],[40,.575,12.5],"wall"),mn(i,[80,.65,.25],[0,.325,-24.85],new _t({color:3232350,roughness:.7}));for(let e of[-36,-24,-12,0,12,24,36])mn(i,[.35,7,.35],[e,3.5,-24.5],"steel"),mn(i,[.65,.1,.65],[e,.05,-24.5],"steel");mn(i,[76,.3,.3],[0,6.8,-24.5],"steel");for(let e of[-30,-18,-6,6,18,30]){mn(i,[8,1.6,.09],[e,4.8,-24.83],new _t({color:9351103,roughness:.25,metalness:.2}));for(let t of[-11,8])mn(i,[5.5,.08,.22],[e,6.5,t],"steel"),mn(i,[5.2,.045,.16],[e,6.44,t],"light")}for(let e of[-5,7])for(let t of[-1,1])mn(i,[76,.008,.065],[0,.015,e+t],"yellow");for(let e of[-5,7])for(let t=-37;t<38;t+=2.4)mn(i,[.75,.009,.06],[t,.02,e],"yellow");for(let e of[-28,-16]){mn(i,[5,.012,6],[e,.012,21],new _t({color:7570058,roughness:.9}));for(let t of[-2.5,2.5])mn(i,[.06,.016,6],[e+t,.022,21],"yellow")}return i}function um(i){i.traverse(e=>{if(e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material))for(let t of Array.isArray(e.material)?e.material:[e.material])t.color&&!e.userData.nvidiaAsset&&t.metalness>.1&&(t.roughness=Math.max(.35,t.roughness))})}var Jc=class extends ti{constructor(e=null){super();let t=new on;t.deleteAttribute("uv");let n=new _t({side:fn}),s=new _t,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new co(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ne(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Ne(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Ne(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let u=new Ne(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let h=new Ne(t,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let d=new Ne(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Ne(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let g=new Ne(t,bo(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Ne(t,bo(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let p=new Ne(t,bo(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let m=new Ne(t,bo(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let b=new Ne(t,bo(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let x=new Ne(t,bo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function bo(i){let e=new Jt;return e.color.setScalar(i),e}var P=i=>document.getElementById(i),ot=zp(),$h=kp(),Ft="bicycle",es=105,bi=8,rs="lean",ts=12,ns=2,yi=null,bt=!1,_e,Xn,en={mode:"conveyor",speed:.7,fleet:2},ri=[{id:"WO-BIKE-001",product:"bicycle",quantity:20},{id:"WO-EBIKE-001",product:"ebike",quantity:12}],gn="WO-BIKE-001",si=()=>ri.find(i=>i.id===gn),At=new wa(ui({defaultKit:{alignmentRequired:!0,alignmentReviewRef:"SYNTHETIC-DEMO-ALIGNMENT-REVIEW"}})),{supplyMode:ai,frameSpec:oi}=ls(),xi=At.frame.config,pr=null,is=Object.fromEntries(Object.entries(Is).map(([i,e])=>[i,e.map(t=>({type:t,name:Je[t].name}))])),ci=()=>is[Ft],pa=()=>ci().map(i=>i.type),an=[],vi=[];for(let i of ri)i.settings=da(i.product);var tn=new ti;tn.background=new Pe(13950692);var wt=new Ht(43,1,.1,500);wt.position.set(62,67,72);var ft;try{ft=new ir({antialias:!0,preserveDrawingBuffer:!0})}catch(i){let e=document.createElement("div");e.id="rendererError",e.setAttribute("role","alert"),e.style.cssText="margin:32px;padding:26px;max-width:620px;background:#fff;color:#243847;border:1px solid #b9c8d0;border-radius:10px;line-height:1.8";let t=document.createElement("h2");t.textContent="\u7121\u6CD5\u555F\u52D5 3D\uFF1A\u6B64\u700F\u89BD\u5668\u7684 WebGL \u4E0D\u53EF\u7528";let n=document.createElement("p");n.textContent="\u7522\u7DDA\u8207\u7522\u80FD\u6578\u64DA\u5C1A\u672A\u8F09\u5165\uFF0C\u4E26\u975E\u6B63\u5728\u6B63\u5E38\u751F\u7522\u3002\u8ACB\u4F7F\u7528\u5141\u8A31 WebGL\uFF0F\u786C\u9AD4\u52A0\u901F\u7684\u684C\u9762\u700F\u89BD\u5668\u91CD\u65B0\u958B\u555F\uFF1B\u82E5\u74B0\u5883\u7531\u7CFB\u7D71\u7BA1\u7406\uFF0C\u8ACB\u5411\u7BA1\u7406\u54E1\u78BA\u8A8D\u5716\u5F62\u529F\u80FD\u3002",e.append(t,n),P("viewport").replaceChildren(e),P("assetStatus").textContent="3D \u521D\u59CB\u5316\u5931\u6557 \xB7 \u6240\u6709\u751F\u7522\u63A7\u5236\u5DF2\u505C\u7528",P("orderMessage").textContent="\u5C1A\u672A\u555F\u52D5\uFF0C\u6C92\u6709\u7522\u80FD\u6578\u64DA";for(let s of document.querySelectorAll("button,input,select"))s.disabled=!0;throw new Error("WebGL unavailable; explicit fallback shown.",{cause:i})}ft.setPixelRatio(Math.min(devicePixelRatio,2));ft.setClearColor(13950692);ft.outputColorSpace=Ot;ft.toneMapping=Fu;ft.toneMappingExposure=1.12;ft.shadowMap&&(ft.shadowMap.enabled=!0,ft.shadowMap.type=Ou);if(ft.capabilities){let i=new no(ft);tn.environment=i.fromScene(new Jc,.04).texture,i.dispose()}P("viewport").append(ft.domElement);var jt=!0,_n=new Vc(wt,ft.domElement);_n.addEventListener("change",()=>jt=!0);_n.enableDamping=!0;_n.maxPolarAngle=Math.PI/2.05;tn.add(new Ec(15135487,6843760,1.25));var Yn=new or(16774111,3.1);Yn.position.set(-18,35,22);Yn.castShadow=!0;Yn.shadow.mapSize.set(2048,2048);Object.assign(Yn.shadow.camera,{left:-45,right:45,top:32,bottom:-32,near:.5,far:100});Yn.shadow.normalBias=.025;tn.add(Yn,Yn.target);var pm=new or(14150399,1.05);pm.position.set(25,15,-18);tn.add(pm);tn.add(lm());var Jh=[];for(let i=-40;i<=40;i+=5)Jh.push(i,.04,-25,i,.04,25);for(let i=-25;i<=25;i+=5)Jh.push(-40,.04,i,40,.04,i);var qb=new so(new Gt().setAttribute("position",new Lt(Jh,3)),new Ms({color:6912903,transparent:!0,opacity:.16}));tn.add(qb);var mr=new Yc(tn,P("flowBoard"));mr.lights.visible=!1;var So=new Kc(tn),Ds=new Hc(tn);Ds.configure(At.frame.config);var ua=cm(tn,()=>{jt=!0;let i=ua.status;(i.state==="ready"||i.state==="partial")&&Qh(),P("assetStatus").textContent=i.state==="loading"?`\u8F09\u5165 NVIDIA \u771F\u8A2D\u5099 ${i.loaded}/${i.total} \xB7 \u5C1A\u672A\u5B8C\u6210\u7684\u985E\u578B\u66AB\u986F\u898F\u5283\u66FF\u4EE3\u6A21\u578B`:i.state==="ready"?`NVIDIA SimReady \xB7 ${i.loaded}\u7A2E\u771F\u5BE6\u8A2D\u5099\uFF0F\u9053\u5177\u5DF2\u8F09\u5165 \xB7 \u50C5\u8996\u89BA\uFF0C\u672A\u542B\u7269\u7406\u8A9E\u610F`:`NVIDIA \u7D20\u6750 ${i.loaded}/${i.total} \u6210\u529F\uFF0C\u5931\u6557\u985E\u578B\u4ECD\u662F\u898F\u5283\u66FF\u4EE3\u6A21\u578B\uFF0C\u8ACB\u91CD\u8A66`,P("retryAssets").hidden=i.state==="loading"||i.state==="ready",P("assetProgress").max=Math.max(1,i.total),P("assetProgress").value=i.loaded,P("assetList").replaceChildren(...i.assets.map(e=>{let t=document.createElement("div");return t.className="assetItem "+e.state,t.textContent=e.label+" \xB7 "+{queued:"\u7B49\u5F85",loading:`\u4E0B\u8F09 ${Math.round(e.progress*100)}%`,decoding:"\u89E3\u78BC\uFF0F\u5EFA\u7ACB\u6750\u8CEA",ready:"\u5DF2\u8F09\u5165\u771F\u5BE6\u6A21\u578B",failed:"\u5931\u6557\uFF1A"+e.error}[e.state],t}))}),ha=new Ss(new Gt,new Ms({color:7529156}));ha.visible=!1;tn.add(ha);function Zh(i){i.traverse(e=>{e.userData.sharedAsset||(e.geometry?.dispose(),e.material&&(e.material.map?.dispose(),e.material.dispose()))})}function Xb(i,e,t){let n=document.createElement("canvas");n.width=512,n.height=64;let s=n.getContext("2d");s.fillStyle="#0b1421dd",s.fillRect(0,0,512,64),s.font="28px sans-serif",s.fillStyle="#d4e6ee",s.textAlign="center",s.fillText(i,256,43);let r=new mc(new jo({map:new Es(n),depthTest:!1}));return r.position.set(e,2,t),r.scale.set(8,1,1),r}var Qc=new Ae;tn.add(Qc);function ma(){Xn&&(tn.remove(Xn),Zh(Xn)),Xn=Ku(ot,{zones:P("zones").checked}),um(Xn),tn.add(Xn),Zh(Qc),Qc.clear();for(let e of lr)P("zones").checked&&P("zoneLabels").checked&&Qc.add(Xb({incoming:"01 RECEIVING / STORAGE",prep:"02 FRAME / WHEEL PREP",electric:"03 E-BIKE BRANCH",assembly:"04 MAIN ASSEMBLY",quality:"05 QUALITY / TEST",outgoing:"06 PACKING / DISPATCH"}[e.id],e.x,e.z-e.d/2+1));ha.geometry.dispose(),ha.geometry=new Gt().setFromPoints(pa().flatMap(e=>{let t=ot.find(n=>n.type===e);return t?[new C(t.x,2.6,t.z)]:[]}));let i=_o(ot,Je);P("note").textContent=i.length?"\u914D\u7F6E\u63D0\u793A\uFF1A"+i.join("\uFF1B"):"\u914D\u7F6E\u77E9\u5F62\u6AA2\u67E5\u901A\u904E \xB7 \u62D6\u66F3\u8A2D\u5099\u79FB\u4F4D\uFF0F\u7A7A\u767D\u8655\u65CB\u8F49 \xB7 \u9EC3\u8272\u70BA\u7269\u6D41\u6307\u5F15\uFF0C\u7DA0\u7DDA\u70BA\u88FD\u7A0B\u9806\u5E8F",mm()}function mm(){jt=!0,Xn.traverse(i=>{if(i.isMesh){let e=i;for(;e&&!e.userData.id;)e=e.parent;i.material.emissive?.setHex(e?.userData.id===yi?.id?1461315:0)}})}function Os(i){yi=i,P("selection").textContent=i?i.id+" \xB7 "+Je[i.type].name:"\u9EDE\u9078\u6A21\u578B\u4EE5\u7DE8\u8F2F";for(let e of["x","z","cycle","rotation"])P(e).value=i?i[e]:"";mm()}function Mi(){return!_e?.released||confirm("\u6B64\u8B8A\u66F4\u6703\u5F9E\u96F6\u91CD\u8A2D\u76EE\u524D\u5DE5\u55AE\u7684\u9032\u5EA6\uFF0C\u78BA\u5B9A\u5957\u7528\uFF1F")}function ss(i){At.setRunning(bt),P("campusRun").textContent=bt?"\u96D9\u5EE0\u66AB\u505C":"\u96D9\u5EE0\u555F\u52D5",P("run").textContent=_e.orderComplete?"\u5DF2\u5B8C\u6210":bt?"\u66AB\u505C":"\u958B\u59CB",P("run").disabled=_e.orderComplete,P("step60").disabled=_e.orderComplete,P("playState").textContent=i||(_e.orderComplete?"\u5DE5\u55AE\u5B8C\u6210 \xB7 \u6A21\u64EC\u5DF2\u505C\u6B62":bt?"\u904B\u8F49\u4E2D \xB7 \u6982\u5FF5\u6A21\u64EC\u8CC7\u6599":"\u5DF2\u66AB\u505C"),id()}function Si(){pr=At.snapshot(),Ds.update({...pr,time:pr.time+pr.remainder});let i=Ds.snapshot();P("frameVisibleStatus").textContent="\u9130\u5EE0\u53EF\u898B\u4EF6\u6578 "+(i.visibleWorkpieces+i.vehicles.reduce((t,n)=>t+n.loadedFrames,0))+" / \u5168\u90E8\u672A\u9818\u7528\u672A\u5831\u5EE2 "+(pr.counts.admitted-pr.counts.consumed-pr.counts.scrapped)+" \u5957\uFF1B\u6BCF\u7AD9\u52A0\u5DE58\uFF0F\u5F85\u65998\u3001\u6BCF\u8F09\u51778\u3001\u7E3D\u88DD\u63A5\u6536\u67B68\u7684\u986F\u793A\u4E0A\u9650\u4E0D\u5F71\u97FF\u5B8C\u6574\u5EAB\u5B58\u8A08\u7B97\u3002";let e=mr.update(_e);So.update(_e,bt),P("visibleJobs").textContent=`3D\u5DE5\u4EF6 ${Math.min(e.total,60)} / \u5728\u88FD\u54C1 ${e.total} \xB7 \u6D41\u7A0B\u5716 ${e.visible}`,jt=!0}function Ei(){si()&&(si().product=Ft,si().runtime=null),bt=!1,P("playState").textContent="\u5DF2\u66AB\u505C \xB7 \u5F9E\u96F6\u958B\u59CB",P("run").textContent="\u958B\u59CB",_e=new ca(ot,{route:pa(),arrival:es,transportSeconds:bi,logistics:en,orderId:gn,targetQuantity:si().quantity,materialSource:At.materialAdapter({supplyMode:ai,frameSpec:oi},gn,Ft),...rs==="lean"?{wipLimit:ts,bufferCapacity:ns}:{}}),mr.configure(ci(),ot),So.configure(ci(),ot,en.mode,Xn),mr.tokens.visible=!1,mr.update(_e),So.update(_e,bt),jt=!0,ss("\u5DF2\u66AB\u505C \xB7 \u5F9E\u96F6\u958B\u59CB"),Us(),nd(),Em(),Si()}function Us(){id(),wo(),P("flowStats").textContent=`\u5E73\u5747WIP ${_e.averageWip.toFixed(1)} \xB7 \u5E73\u5747\u5B8C\u5DE5\u524D\u7F6E ${(_e.averageLeadSeconds/60).toFixed(1)}\u5206 \xB7 \u642C\u904B${_e.transfers.length}\u4EF6 \xB7 \u672A\u6295\u6599\u6A5F\u6703 ${_e.deferred}`,P("time").textContent=[Math.floor(_e.time/3600),Math.floor(_e.time%3600/60),_e.time%60].map(i=>String(i).padStart(2,"0")).join(":"),P("completed").textContent=_e.completed,P("wip").textContent=_e.wip,P("throughput").textContent=_e.throughput.toFixed(1),P("stations").replaceChildren(...ot.filter(i=>pa().includes(i.type)).map(i=>{let e=_e.states[i.id],t=e.busy?e.remaining===0?"\u963B\u585E":"\u52A0\u5DE5":"\u5F85\u6599",n=document.createElement("div");n.className="stationCard",n.dataset.device=i.id;let s=document.createElement("strong");s.textContent=`${i.id} \xB7 ${ci().find(c=>c.type===i.type).name}`;let r=document.createElement("div");r.textContent=`${t} \xB7 \u5DE5\u6642${i.cycle}\u79D2 \xB7 \u5269\u9918${e.remaining}\u79D2 \xB7 \u6392\u968A${_e.queues[i.type]}`;let o=document.createElement("progress");o.max=1,o.value=e.busy?1-e.remaining/Math.ceil(i.cycle):0,n.style.borderColor=t==="\u963B\u585E"?"#ff7878":t==="\u52A0\u5DE5"?"#57e3a3":"#32536a";let a=document.createElement("small");return a.textContent=`${e.job?.serial||"\u2014"}${t==="\u963B\u585E"?" \xB7 "+(e.blockReason||"\u4E0B\u7AD9\u7B49\u5F85"):""} \xB7 \u5FD9\u788C${_e.time?(100*e.busySeconds/_e.time).toFixed(0):0}% \xB7 \u963B\u585E${e.blockedSeconds}\u79D2`,n.append(s,r,o,a),n.onclick=()=>{Os(i),P("cycle").focus()},n}))}function gr(){ma(),Ei()}function wi(i){P("error").textContent=i.message||String(i)}for(let[i,e]of Object.entries(Je))P("kind").add(new Option(e.name,i));for(let i of lr)P("focus").add(new Option(i.name,i.id));P("focus").add(new Option("\u8ECA\u67B6\u5EE0","frame"));P("focus").add(new Option("\u96D9\u5EE0\u5712\u5340","campus"));P("legend").innerHTML=lr.map(i=>`<div><i style="background:#${i.color.toString(16).padStart(6,"0")}"></i>${i.name}</div>`).join("");P("apply").onclick=()=>{if(yi)try{let i=Object.fromEntries(["x","z","cycle","rotation"].map(e=>[e,Number(P(e).value)]));if(_i(ot.map(e=>e===yi?{...e,...i}:e),Je),!Mi())return;Object.assign(yi,i),P("error").textContent="",gr()}catch(i){wi(i)}};P("delete").onclick=()=>{if(!yi)return;let i=ot.filter(e=>e!==yi);if(Object.values(is).some(e=>e.some(t=>t.type===yi.type))&&!i.some(e=>e.type===yi.type))return wi(Error("\u6B64\u8A2D\u5099\u4ECD\u88AB\u5DE5\u5E8F\u4F7F\u7528\uFF1B\u8ACB\u5148\u79FB\u9664\u8A72\u5DE5\u5E8F\u6216\u65B0\u589E\u540C\u985E\u8A2D\u5099\uFF0C\u4E0D\u80FD\u522A\u9664\u6700\u5F8C\u4E00\u53F0\u3002"));Mi()&&(ot=i,Os(null),gr())};P("add").onclick=()=>{let i=P("kind").value,e=1;for(;ot.some(t=>t.id==="N"+e);)e++;for(let t=-22;t<=22;t+=4)for(let n=-36;n<=36;n+=5){let s={id:"N"+e,type:i,x:n,z:t,cycle:Je[i].cycle,rotation:0};try{if(_i([...ot,s],Je),_o([...ot,s],Je).length>_o(ot,Je).length)continue;if(!Mi())return;ot.push(s),gr(),Os(s);return}catch{}}wi(Error("\u627E\u4E0D\u5230\u8DB3\u5920\u7A7A\u4F4D"))};function Qh(){Ds.configure(At.frame.config),Ds.setLabels(P("frameLabels").checked),ma(),So.configure(ci(),ot,en.mode,Xn),Si()}P("routeOverlay").onchange=()=>{ha.visible=P("routeOverlay").checked,jt=!0};P("zones").onchange=Qh;P("zoneLabels").onchange=Qh;P("overview").onclick=()=>tl(.1,100,.1);P("perspective").onclick=()=>tl(62,67,72);P("focus").onchange=()=>{if(P("focus").value==="frame")return P("frameView").click();if(P("focus").value==="campus")return P("campusView").click();let i=lr.find(e=>e.id===P("focus").value);if(!i)return P("perspective").click();_n.target.set(i.x,0,i.z),wt.position.set(i.x+19,27,i.z+24)};P("route").onchange=()=>{if(!Mi()){P("route").value=Ft;return}Ft=P("route").value,oi=br(Ft),gr(),Ai()};P("run").onclick=()=>{if(_e.orderComplete){bt=!1,ss();return}if(!pa().every(i=>ot.some(e=>e.type===i)))return wi(Error("\u88FD\u7A0B\u7F3A\u5C11\u5FC5\u8981\u5DE5\u7AD9\uFF0C\u8ACB\u65B0\u589E\u8A2D\u5099"));bt=!bt,ss(),Ai()};P("reset").onclick=()=>{Mi()&&Ei()};P("parameters").onclick=()=>{let i=Number(P("arrival").value),e=Number(P("transport").value);if(!Number.isInteger(i)||i<1||i>3600||!Number.isInteger(e)||e<1||e>3600)return wi(Error("\u6295\u6599\u9593\u9694\u9700\u70BA 1\u20133600 \u6574\u6578\u79D2"));Mi()&&(es=i,bi=e,Ei())};function Eo(i,e,t){let n=URL.createObjectURL(new Blob([i],{type:t})),s=document.createElement("a");s.href=n,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function gm(i=!1){let e=new Set(ot.map(t=>t.type));for(let t of ri)if(t.id!==gn)for(let n of(t.runtime?.settings||t.settings)?.devices||[])e.add(n.type);if(i)for(let t of vi)e.add(t.type);return e}function _m(){let i=gm(!0);for(let e of Object.keys(Je))e.startsWith("custom_")&&!i.has(e)&&delete Je[e]}function da(i=Ft){return{supplyMode:ai,frameSpec:i===Ft?{...oi}:br(i),devices:structuredClone(ot),processes:Object.fromEntries(Object.entries(is).map(([e,t])=>[e,t.map(({type:n,name:s})=>({type:n,name:s}))])),steps:is[i].map(({type:e,name:t})=>({type:e,name:t})),logistics:{...en},arrival:es,transportSeconds:bi,policy:rs,wipLimit:ts,bufferCapacity:ns}}function xm(){return structuredClone({schema:"bicycle-line-v0.9",frameFactory:At.frame.config,source:"synthetic-planning",floor:{width:80,depth:50,units:"m",assumed:!0},devices:ot,bom:$h,route:Ft,arrival:es,transportSeconds:bi,processes:Object.fromEntries(Object.entries(is).map(([i,e])=>[i,e.map(({type:t,name:n})=>({type:t,name:n}))])),customTypes:Object.fromEntries(Object.entries(Je).filter(([i])=>i.startsWith("custom_")&&gm().has(i))),logistics:en,workOrders:ri.map(i=>({id:i.id,product:i.product,quantity:i.quantity,settings:i.id===gn?da():i.runtime?.settings||i.settings||da(i.product)})),activeOrderId:gn,flow:{policy:rs,wipLimit:ts,bufferCapacity:ns}})}P("save").onclick=()=>Eo(JSON.stringify(xm(),null,2),"bicycle_line_v09.json","application/json");P("load").onclick=()=>P("file").click();P("file").onchange=async()=>{try{if(!P("file").files[0])return;let i=nm(JSON.parse(await P("file").files[0].text()));if(!Mi())return;for(let e of Object.keys(Je))e.startsWith("custom_")&&delete Je[e];Object.assign(Je,i.customTypes),At.configure(i.frameFactory),sl(),ri=i.workOrders,gn=i.activeOrderId,en={...i.logistics},ot=i.devices,$h=i.bom,Ft=i.route,es=i.arrival,bi=i.transportSeconds,is=i.processes,rs=i.flow.policy,ts=i.flow.wipLimit,ns=i.flow.bufferCapacity,{supplyMode:ai,frameSpec:oi}=ls(si().settings||{},Ft),ed(),Os(null),gr(),ym(),nl(),il(),Ai(),P("error").textContent="\u914D\u7F6E\u5DF2\u8F09\u5165\uFF1B\u6240\u6709\u5DE5\u55AE\u5F9E\u96F6\u66AB\u505C\uFF0C\u672A\u4FDD\u5B58\u57F7\u884C\u4E2D\u7684\u5728\u88FD\u54C1\u3002"}catch(i){wi(i)}finally{P("file").value=""}};function ed(){P("supplyMode").value=ai,P("policy").value=rs,P("wipLimit").value=ts,P("bufferCapacity").value=ns,P("route").value=Ft,P("arrival").value=es,P("transport").value=bi}P("glb").onclick=async()=>{await ua.ready;let i=Ku(ot),e=ua.root.clone(!0);i.add(e);try{let t=await new go().parseAsync(i,{binary:!0});Eo(t,"bicycle_factory.glb","model/gltf-binary")}catch(t){wi(t)}finally{i.remove(e),Zh(i)}};P("csv").onclick=()=>Eo(`metric,value
scenario,`+Ft+`
simulation_seconds,`+_e.time+`
completed,`+_e.completed+`
wip,`+_e.wip+`
throughput_per_hour,`+_e.throughput+`
seed,42
`,"line_kpi.csv","text/csv");function ym(){P("bom").replaceChildren(...$h.map(i=>{let e=document.createElement("tr"),t=document.createElement("td");t.textContent=i.part;let n=document.createElement("td"),s=document.createElement("input");s.type="number",s.min=0,s.max=1e4,s.value=i.quantity,s.onchange=()=>{let o=Number(s.value);Number.isInteger(o)&&o>=0&&o<=1e4?i.quantity=o:s.value=i.quantity},n.append(s);let r=document.createElement("td");return r.textContent=Je[i.station].name,e.append(t,n,r),e}))}var td=new Rc,hm=new Se,Yb=new Ln(new C(0,1,0),0),On=null,fa=null;function vm(i){let e=ft.domElement.getBoundingClientRect();hm.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),td.setFromCamera(hm,wt)}ft.domElement.addEventListener("pointerdown",i=>{if(i.button!==0)return;vm(i);let t=td.intersectObjects(Xn.children,!0).find(s=>{let r=s.object;for(;r&&!r.userData.id;)r=r.parent;return r})?.object;for(;t&&!t.userData.id;)t=t.parent;let n=ot.find(s=>s.id===t?.userData.id);n&&(Os(n),On=n,fa={x:n.x,z:n.z,px:i.clientX,py:i.clientY},_n.enabled=!1,ft.domElement.setPointerCapture(i.pointerId))});ft.domElement.addEventListener("pointermove",i=>{if(!On||Math.hypot(i.clientX-fa.px,i.clientY-fa.py)<5)return;vm(i);let e=new C;if(td.ray.intersectPlane(Yb,e)){let t={...On,x:Math.round(e.x*2)/2,z:Math.round(e.z*2)/2};try{_i([t],Je),Object.assign(On,t),Xn.children.find(s=>s.userData.id===On.id).position.set(On.x,0,On.z),P("x").value=On.x,P("z").value=On.z}catch{}}});function bm(){On&&(On.x!==fa.x||On.z!==fa.z)&&gr(),On=null,_n.enabled=!0}ft.domElement.addEventListener("pointerup",bm);ft.domElement.addEventListener("pointercancel",bm);new ResizeObserver(()=>{let i=P("viewport"),e=i.clientWidth,t=i.clientHeight;if(ft.setSize(e,t),wt.aspect=e/t,wt.updateProjectionMatrix(),!P("focus").value){let n=wt.position.clone().sub(_n.target).normalize();tl(n.x,n.y,n.z)}jt=!0}).observe(P("viewport"));var Mm=0,el=0;window.lineRenderStats=()=>({renderedFrames:Mm,fps:Number(el.toFixed(1)),drawCalls:ft.info?.render.calls||0,triangles:ft.info?.render.triangles||0,geometries:ft.info?.memory.geometries||0,textures:ft.info?.memory.textures||0});var dm=performance.now(),fm=0;function Sm(i){requestAnimationFrame(Sm);let e=(i-dm)/1e3,t=Math.min(.1,e);if(e>0&&(el=el?el*.9+.1/e:1/e),dm=i,bt){let n=_e.orderComplete;At.advance(t*Number(P("speed").value),_e),_e.orderComplete&&!n?(bt=!1,ss(),Us()):i-fm>150&&(Us(),fm=i),Si()}_n.update(),jt&&(ft.render(tn,wt),Mm++,jt=!1)}_i(ot,Je);ma();Ei();ym();P("policy").value=rs;requestAnimationFrame(Sm);wm();window.addEventListener("error",i=>wi(i.error||i.message));window.linePreview={view:(i,e,t,n=0,s=0)=>{let r=ft.getSize(new Se),o=wt.aspect;ft.setSize(1600,900,!1),wt.aspect=16/9,wt.updateProjectionMatrix(),wt.position.set(i,e,t),_n.target.set(n,0,s),_n.update(),ft.render(tn,wt);let a=ft.domElement.toDataURL("image/png");return ft.setSize(r.x,r.y,!1),wt.aspect=o,wt.updateProjectionMatrix(),jt=!0,a}};function tl(i,e,t){let n=new rn;for(let h of ot){let d=Je[h.type];n.expandByPoint(new C(h.x-d.w/2,0,h.z-d.d/2)),n.expandByPoint(new C(h.x+d.w/2,3.6,h.z+d.d/2))}let s=n.getCenter(new C),r=new C(i,e,t).normalize(),o=new C(0,1,0).cross(r).normalize(),a=r.clone().cross(o).normalize(),c=Math.tan(ni.degToRad(wt.fov/2)),l=c*wt.aspect,u=1;for(let h of[n.min.x,n.max.x])for(let d of[n.min.y,n.max.y])for(let f of[n.min.z,n.max.z]){let g=new C(h,d,f).sub(s);u=Math.max(u,g.dot(r)+Math.max(Math.abs(g.dot(o))/l,Math.abs(g.dot(a))/c))}_n.target.copy(s),wt.position.copy(s).addScaledVector(r,u*1.08),jt=!0}P("flowApply").onclick=()=>{let i=Number(P("wipLimit").value),e=Number(P("bufferCapacity").value);if(![i,e].every(t=>Number.isInteger(t)&&t>=1&&t<=500))return wi(Error("\u4E0A\u9650\u9700\u70BA1\u2013500\u6574\u6578"));Mi()&&(rs=P("policy").value,ts=i,ns=e,Ei())};P("trace").onclick=()=>Eo(JSON.stringify({source:"synthetic-planning",route:Ft,policy:rs,transportSeconds:bi,process:ci().map(({type:i,name:e})=>({type:i,name:e})),time:_e.time,events:_e.events,completedVehicles:_e.finished},null,2),"synthetic_trace.json","application/json");P("compare").onclick=()=>{if(ai==="manufactured_qualified_frame"){P("comparison").textContent="\u6B648\u5C0F\u6642\u5DE5\u5177\u53EA\u6BD4\u8F03\u5916\u8CFC\u8ECA\u67B6\u7684\u7E3D\u88DD\u653F\u7B56\uFF1B\u81EA\u88FD\u6A21\u5F0F\u53D7\u9130\u5EE0\u54C1\u8CEA\u8207\u914D\u9001\u9650\u5236\uFF0C\u8ACB\u6539\u7528\u96D9\u5EE0\u5BE6\u969B\u63A8\u9032\u8207\u5C65\u6B77\uFF0C\u4E0D\u7522\u751F\u5FFD\u7565\u4F9B\u6599\u7684\u6BD4\u8F03\u6578\u5B57\u3002";return}let i=["push","lean"].map(e=>{let t=new ca(ot,{route:pa(),arrival:es,transportSeconds:bi,logistics:en,...e==="lean"?{wipLimit:ts,bufferCapacity:ns}:{}});return t.advance(28800),{mode:e,completed:t.completed,endingWip:t.wip,averageWip:t.averageWip,averageLeadSeconds:t.averageLeadSeconds,blockedMachineSeconds:Object.values(t.states).reduce((n,s)=>n+s.blockedSeconds,0),unreleasedOpportunities:t.deferred}});P("comparison").textContent=i.map(e=>`${e.mode==="push"?"\u56FA\u5B9A\u6295\u6599":"WIP\u9650\u5236"}\uFF1A${e.completed}\u53F0\uFF0C\u671F\u672BWIP ${e.endingWip}\uFF0C\u5E73\u5747WIP ${e.averageWip.toFixed(1)}\uFF0C\u524D\u7F6E ${(e.averageLeadSeconds/60).toFixed(1)}\u5206`).join("\uFF1B"),Eo(JSON.stringify({source:"synthetic-planning",frameSupply:"purchased_frame",hours:8,route:Ft,arrival:es,transportSeconds:bi,logistics:en,process:ci().map(({type:e,name:t})=>({type:e,name:t})),wipLimit:ts,bufferCapacity:ns,results:i},null,2),"flow_comparison.json","application/json")};function Em(){let i=P("devicePicker");i.replaceChildren(new Option("\u9078\u53D6\u8A2D\u5099\uFF0F\u8ABF\u6574\u79D2\u6578",""),...ot.map(e=>new Option(e.id+" \xB7 "+Je[e.type].name,e.id))),i.value=yi?.id||""}P("devicePicker").onchange=()=>Os(ot.find(i=>i.id===P("devicePicker").value)||null);function nl(){let i=()=>Object.entries(Je).filter(([e,t])=>t.cycle>0).map(([e,t])=>new Option(t.name,e));P("stepType").replaceChildren(...i(),new Option("\uFF0B\u81EA\u8A02\u5DE5\u4F5C\u7AD9","__custom")),P("kind").replaceChildren(...Object.entries(Je).map(([e,t])=>new Option(t.name,e)))}function nd(){an=ci().map(({type:i,name:e})=>({type:i,name:e})),vi=structuredClone(ot),Mo()}function Mo(){P("processEditor").replaceChildren(...an.map((e,t)=>{let n=document.createElement("div");n.className="stepRow";let s=document.createElement("strong");s.textContent=String(t+1).padStart(2,"0");let r=document.createElement("input");r.value=e.name,r.maxLength=60,r.setAttribute("aria-label","\u5DE5\u5E8F\u540D\u7A31"+(t+1)),r.oninput=()=>e.name=r.value;let o=document.createElement("div");o.className="cycleList";for(let c of vi.filter(l=>l.type===e.type)){let l=document.createElement("label");l.className="cycleField",l.textContent=c.id;let u=document.createElement("input");u.type="number",u.min=1,u.max=86400,u.value=c.cycle,u.dataset.cycleDevice=c.id,u.setAttribute("aria-label",c.id+"\u5DE5\u6642"),u.oninput=()=>c.cycle=Number(u.value),l.append(u,"\u79D2"),o.append(l)}o.children.length||(o.textContent="\u7F3A\u5C11\u8A2D\u5099\uFF1A\u8ACB\u5148\u65B0\u589E");let a=document.createElement("div");a.className="buttons";for(let[c,l,u]of[["\u2191",()=>{[an[t-1],an[t]]=[an[t],an[t-1]],Mo()},t===0],["\u2193",()=>{[an[t+1],an[t]]=[an[t],an[t+1]],Mo()},t===an.length-1],["\u522A\u9664",()=>{an.splice(t,1),Mo()},!1]]){let h=document.createElement("button");h.textContent=c,h.disabled=u,h.onclick=l,a.append(h)}return n.append(s,r,o,a),n}))}P("stepAdd").onclick=()=>{let i=P("stepType").value;if(i==="__custom"){if(_m(),Object.keys(Je).filter(r=>r.startsWith("custom_")).length>=30)return P("processError").textContent="\u6700\u591A30\u500B\u81EA\u8A02\u985E\u578B\uFF1B\u8ACB\u5148\u9084\u539F\u8349\u7A3F\u6216\u79FB\u9664\u4E0D\u7528\u7684\u81EA\u8A02\u8A2D\u5099\u3002";let e=1;for(;Je["custom_"+e];)e++;let t="custom_"+e,n={name:"\u81EA\u8A02\u5DE5\u5E8F"+e,w:4,d:3,cycle:60,color:9550294,model:"bench"};Je[t]=n;let s;e:for(let r=-22;r<=22;r+=4)for(let o=-36;o<=36;o+=5){let a={id:"U"+e,type:t,x:o,z:r,cycle:60,rotation:0};if(!ot.some(c=>c.id===a.id))try{if(_i([...vi,a],Je),_o([...vi,a],Je).length>_o(vi,Je).length)continue;s=a;break e}catch{}}if(!s)return delete Je[t],wi(Error("\u6C92\u6709\u7A7A\u4F4D\u65B0\u589E\u81EA\u8A02\u5DE5\u7AD9"));vi.push(s),an.push({type:t,name:n.name}),Mo(),nl(),P("processError").textContent="\u81EA\u8A02\u5DE5\u7AD9\u5DF2\u52A0\u5165\u8349\u7A3F\uFF1B\u5957\u7528\u524D\u4E0D\u5F71\u97FF\u6B63\u5728\u57F7\u884C\u7684\u5DE5\u55AE\u3002";return}if(an.some(e=>e.type===i))return P("processError").textContent="\u6B64\u985E\u578B\u5DF2\u5B58\u5728\uFF1B\u82E5\u8981\u591A\u500B\u9806\u5E8F\u5DE5\u5E8F\uFF0C\u8ACB\u4F7F\u7528\u81EA\u8A02\u5DE5\u4F5C\u7AD9\u3002";an.push({type:i,name:Je[i].name}),Mo()};P("processApply").onclick=()=>{try{if(_i(vi,Je),xo(an,vi),!Mi())return;ot=structuredClone(vi),is[Ft]=an.map(i=>({...i})),Os(null),gr(),P("processError").textContent="\u5DF2\u5957\u7528\uFF0C\u6A21\u64EC\u5F9E\u96F6\u91CD\u8A2D\u3002"}catch(i){P("processError").textContent=i.message}};P("speed").oninput=()=>P("speedValue").textContent=P("speed").value+"\xD7";function wm(){Mi()&&(Ei(),At.advance(600,_e,{force:!0}),bt=!_e.orderComplete,ss(_e.orderComplete?void 0:"\u793A\u7BC4\u904B\u8F49\u4E2D \xB7 \u5DF2\u9810\u71B110\u5206\u9418"),Us(),Si(),jt=!0)}P("demo").onclick=wm;nl();window.lineAssetAudit=()=>{let i={},e=0;return tn.traverseVisible(t=>{if(t.userData.assetId&&(i[t.userData.assetId]=(i[t.userData.assetId]||0)+1),t.isMesh){let n=t.geometry.index?.count||t.geometry.attributes.position?.count||0;e+=n/3*(t.isInstancedMesh?t.count:1)}}),{assets:i,visibleSceneTriangles:Math.round(e)}};window.lineState=()=>({campus:{time:At.frame.time,running:At.running},supplyMode:ai,frameSpec:{...oi},materialStarved:_e.materialStarved,order:{id:gn,quantity:si().quantity,product:Ft},logistics:{...en},mechanics:So.snapshot(),assets:ua.snapshot(),time:_e.time,running:bt,orderComplete:_e.orderComplete,released:_e.released,configuration:xm(),completed:_e.completed,wip:_e.wip,steps:ci().map(({type:i,name:e})=>({type:i,name:e})),devices:structuredClone(ot),jobs:mr.jobs?.map(i=>({...i}))||[],transfers:_e.transfers.map(i=>({serial:i.job.serial,from:i.from,to:i.to,departAt:i.departAt,readyAt:i.readyAt,mode:i.mode,distance:i.distance}))});P("step60").onclick=()=>{bt=!1,At.setRunning(!1),At.advance(60,_e,{force:!0}),ss(_e.orderComplete?void 0:"\u5DF2\u66AB\u505C \xB7 \u5FEB\u8F491\u5206\u9418"),Us(),Si()};function id(){_e&&(P("tab-orders").hidden||Ai(),P("liveOrder").textContent=gn,P("liveOutput").textContent=_e.completed+" / "+si().quantity,P("orderProgress").max=si().quantity,P("orderProgress").value=_e.completed,P("liveMode").textContent=po[en.mode].name,P("liveTransfer").textContent=_e.transfers.length,P("mainRun").textContent=_e.orderComplete?"\u5DE5\u55AE\u5B8C\u6210":bt?"\u66AB\u505C\u7522\u7DDA":"\u555F\u52D5\u7522\u7DDA",P("mainRun").disabled=_e.orderComplete,P("orderMessage").textContent=_e.orderComplete?"\u5DE5\u55AE\u5B8C\u6210\uFF0C\u8ACB\u9078\u4E0B\u4E00\u5F35\u5DE5\u55AE":`${bt?"\u904B\u8F49":"\u66AB\u505C"}${_e.materialStarved?" \xB7 \u7B49\u5F85\u5408\u683C\u81EA\u88FD\u67B6":""} \xB7 ${Ft==="ebike"?"\u96FB\u52D5\u81EA\u884C\u8ECA":"\u4E00\u822C\u81EA\u884C\u8ECA"} \xB7 \u5DF2\u6295\u6599${_e.released} / ${si().quantity}\u53F0`,P("logTasks").replaceChildren(..._e.transfers.map(i=>{let e=document.createElement("div");return e.textContent=`${i.job.serial} \xB7 ${i.from} \u2192 ${i.to} \xB7 ${po[i.mode||en.mode].name} \xB7 \u5269\u9918${Math.max(0,i.readyAt-_e.time)}\u79D2`,e})))}function Am(){let i=si();i&&_e&&(i.settings=da(),i.runtime={sim:_e,settings:i.settings})}function Kb(i){({supplyMode:ai,frameSpec:oi}=ls(i,Ft)),ot=structuredClone(i.devices),i.processes&&(is=structuredClone(i.processes)),is[Ft]=i.steps.map(e=>({...e})),en={...i.logistics},es=i.arrival,bi=i.transportSeconds,rs=i.policy,ts=i.wipLimit,ns=i.bufferCapacity}function jb(i){if(!ri.some(n=>n.id===i))return;if(i===gn){P("run").click();return}Am(),bt=!1,gn=i;let e=si();Ft=e.product;let t=e.runtime?.settings||e.settings;t&&Kb(t),Os(null),ma(),e.runtime?(_e=e.runtime.sim,mr.configure(ci(),ot),So.configure(ci(),ot,en.mode,Xn),nd(),Em()):Ei(),bt=!_e.orderComplete,ed(),il(),ss(),Us(),Si(),Ai(),jt=!0}function Ai(){P("orderList").replaceChildren(...ri.map(i=>{let e=document.createElement("div");e.className="orderRow"+(i.id===gn?" active":"");let t=i.id===gn?_e:i.runtime?.sim,n=document.createElement("span");n.textContent=`${i.id} \xB7 ${i.product==="ebike"?"\u96FB\u52D5\u8ECA":"\u4E00\u822C\u8ECA"} \xB7 ${t?.completed||0}/${i.quantity} \xB7 ${t?.orderComplete?"\u5DF2\u5B8C\u6210":i.id===gn?bt?"\u904B\u8F49\u4E2D":"\u66AB\u505C":"\u5F85\u751F\u7522\uFF0F\u66AB\u505C"}`;let s=document.createElement("button");return s.textContent=t?.orderComplete?"\u5DF2\u5B8C\u6210":i.id===gn?bt?"\u66AB\u505C":"\u7E8C\u505A":"\u555F\u52D5",s.disabled=!!t?.orderComplete&&i.id===gn,s.setAttribute("aria-label","\u5207\u63DB\u5DE5\u55AE "+i.id),s.onclick=()=>jb(i.id),e.append(n,s),e}))}P("createOrder").onclick=()=>{try{let i=kc({id:P("woId").value.trim(),product:P("woProduct").value,quantity:Number(P("woQty").value)});if(ri.some(e=>e.id===i.id))throw Error("\u5DE5\u55AE\u7DE8\u865F\u91CD\u8907");if(ri.length>=100)throw Error("\u6700\u591A100\u5F35\u5DE5\u55AE");i.settings=da(i.product),ri.push(i),Ai(),P("opsError").textContent="\u5DF2\u65B0\u589E\u5DE5\u55AE\uFF0C\u6309\u555F\u52D5\u958B\u59CB"}catch(i){P("opsError").textContent=i.message}};for(let i of document.querySelectorAll("[data-tab]"))i.onclick=()=>{for(let e of document.querySelectorAll("[data-tab]"))e.classList.toggle("active",e===i);for(let e of document.querySelectorAll(".tabPane"))e.hidden=e.id!=="tab-"+i.dataset.tab;i.dataset.tab==="orders"&&Ai()};P("mainRun").onclick=()=>{P("run").click(),id(),Ai()};function il(){P("logSpeed").value=en.speed,P("logFleet").value=en.fleet;for(let i of document.querySelectorAll(".logMode"))i.classList.toggle("active",i.dataset.mode===en.mode);P("transport").disabled=!0}function Tm(i){try{if(hr(i),_e.released>0&&!confirm("\u5207\u63DB\u7269\u6D41\u6703\u5F9E\u96F6\u91CD\u8A2D\u76EE\u524D\u5DE5\u55AE\u7684\u9032\u5EA6\uFF0C\u78BA\u5B9A\u5207\u63DB\uFF1F"))return;en={...i},ma(),Ei(),il(),Ai(),P("opsError").textContent="\u5DF2\u5207\u63DB\u7269\u6D41\uFF0C\u8ACB\u6309\u555F\u52D5\u7522\u7DDA"}catch(e){P("opsError").textContent=e.message}}for(let i of document.querySelectorAll(".logMode"))i.onclick=()=>Tm({mode:i.dataset.mode,speed:po[i.dataset.mode].speed,fleet:2});P("applyLogistics").onclick=()=>Tm({mode:en.mode,speed:Number(P("logSpeed").value),fleet:Number(P("logFleet").value)});P("wholeFactory").onclick=()=>{ga(0),P("focus").value="",tl(62,67,72)};P("closeLine").onclick=()=>{ga(0),P("focus").value="assembly",_n.target.set(-14,.9,1),wt.position.set(-3,8.5,15),jt=!0};P("retryAssets").onclick=()=>ua.retry();P("assetView").onclick=()=>{P("focus").value="incoming",_n.target.set(...jh.target),wt.position.set(...jh.camera),jt=!0};P("jumpProcess").onclick=()=>P("processPanel").scrollIntoView({behavior:"smooth"});P("processDiscard").onclick=()=>{nd(),_m(),nl(),P("processError").textContent="\u5DF2\u9084\u539F\u672A\u5957\u7528\u7684\u5DE5\u5E8F\u8349\u7A3F\u3002"};il();Ai();sl();wo();setTimeout(()=>P("closeLine").click(),0);function sd(i){P("frameError").textContent=i.message||String(i)}function sl(){xi=At.frame.config,P("frameFocusStation").replaceChildren(new Option("\u9078\u64C7\u5DE5\u7AD9\u8FD1\u770B",""),...xi.stations.map(i=>new Option(i.id+" "+i.name,i.id))),P("frameInitial").value=xi.initialQuantity,P("frameAlignment").checked=xi.defaultKit.alignmentRequired,P("frameQuality").value=xi.qualityMode,P("frameFleet").value=xi.logistics.fleet,P("frameBatch").value=xi.logistics.batchSize,P("frameSpeed").value=xi.logistics.speed,P("frameStationRows").replaceChildren(...xi.stations.map(i=>{let e=document.createElement("tr"),t=document.createElement("td");t.textContent=i.id+" "+i.name,e.append(t);for(let s of["cycleSeconds","capacity","parallelResources","maxWaitSeconds"]){let r=document.createElement("td"),o=document.createElement("input");o.type="number",o.min=s==="maxWaitSeconds"?0:1,o.value=i[s],o.dataset.frameStation=i.id,o.dataset.frameField=s,o.setAttribute("aria-label",i.id+" "+s),s==="capacity"&&i.mode==="single"&&(o.disabled=!0),o.oninput=()=>i[s]=Number(o.value),r.append(o),e.append(r)}let n=document.createElement("td");return n.id="frameState-"+i.id,e.append(n),e})),P("supplyMode").value=ai}function wo(){let i=At.snapshot(),e=i.counts;P("campusTime").textContent=i.time+" \u79D2",P("frameWip").textContent=e.incoming+e.queued+e.processing+e.batch_wait+" / "+e.qc_hold,P("frameStock").textContent=e.released+" / "+e.assemblyReady,P("frameConsumed").textContent=e.consumed,P("supplyStatus").textContent="\u672C\u5DE5\u55AE\uFF1A"+_l[ai]+" \xB7 "+oi.frameSpecId+" / "+oi.sizeCode+" / "+oi.drawingRevision+(_e?.materialStarved?" \xB7 \u7F3A\u5C11\u7B26\u5408\u898F\u683C\u7684\u5DF2\u63A5\u6536\u8ECA\u67B6\uFF0C\u66AB\u505C\u6295\u6599\uFF1B\u4E0D\u6703\u81EA\u52D5\u6539\u5916\u8CFC":" \xB7 \u671F\u521D\u81EA\u88FD\u6210\u54C1\u5EAB\u5B58\u70BA\u96F6\uFF1B\u672A\u6295\u6599\u5DE5\u55AE\u624D\u53EF\u5207\u4F86\u6E90");for(let[s,r]of Object.entries(i.stations)){let o=P("frameState-"+s);o&&(o.textContent={idle:"\u5F85\u6599",processing:"\u52A0\u5DE5",qc_hold:"\u5F85\u6AA2\uFF0F\u9694\u96E2",batch_wait:"\u7B49\u6279",queued:"\u6392\u968A"}[r.phase]+" \xB7 "+r.jobs.length+"\u4EF6 \xB7 \u7B49\u5F85"+r.queue.length+" \xB7 "+r.remaining+"\u79D2")}let t=i.frames.filter(s=>s.status==="qc_hold"),n=new Set;P("frameHolds").replaceChildren(...t.filter(s=>{let r=s.hold?.loadId||s.frameId;return n.has(r)?!1:(n.add(r),!0)}).slice(0,30).map(s=>{let r=document.createElement("div"),o=document.createElement("div");o.textContent=s.stationId+" \xB7 "+(s.hold?.loadId||s.frameId),r.append(o);for(let[a,c]of[["\u6A21\u64EC\u63A5\u53D7","pass"],["\u7E7C\u7E8C\u9694\u96E2","hold"]]){let l=document.createElement("button");l.textContent=a,l.onclick=()=>{try{let u={result:c,evidenceRef:"UI-SYNTHETIC-REVIEW-"+At.frame.time,synthetic:!0};s.hold?.kind==="batch"?At.frame.recordBatchInspection(s.hold.loadId,u):At.frame.recordInspection(s.frameId,u),wo(),Si()}catch(u){sd(u)}},r.append(l)}return r})),t.length||(P("frameHolds").textContent="\u76EE\u524D\u6C92\u6709\u5F85\u6AA2\u8ECA\u67B6\u3002\u54C1\u8CEA\u7D50\u679C\u70BA\u6A21\u64EC\uFF0C\u975E\u5BE6\u6E2C\u3002"),P("frameTrips").replaceChildren(...i.logistics.vehicles.map(s=>{let r=document.createElement("div");return r.textContent=s.id+" \xB7 "+{idle:"\u7A7A\u8ECA\u5F85\u547D",loading:"\u88DD\u8F09\u5408\u683C\u67B6",outbound:"\u8DE8\u5EE0\u914D\u9001",unloading:"\u7E3D\u88DD\u6536\u6599",empty_return:"\u7A7A\u8ECA\u8FD4\u7A0B",loaded_return:"\u62D2\u6536\u8FD4\u7A0B"}[s.phase]+" \xB7 \u8F09"+s.frameIds.length+"\u67B6 \xB7 \u5269\u9918"+s.remaining+"\u79D2",r})),P("frameConservation").textContent=(i.conservation.ok?"\u5B88\u6046\u6AA2\u67E5\u901A\u904E":"\u5B88\u6046\u7570\u5E38")+" \xB7 \u4F86\u6599"+i.conservation.admitted+"\u5957\uFF1D\u6240\u6709\u72C0\u614B"+i.conservation.accounted+"\u5957\uFF08\u8ECA\u67B6\u7576\u91CF\uFF0C\u4E0D\u662F\u8CEA\u91CF\u5B88\u6046\uFF09 \xB7 \u6A21\u64EC\u54C1\u8CEA\u7D50\u679C\uFF0C\u975E\u5BE6\u6E2C"}P("frameView").onclick=()=>{ga(74),P("focus").value="frame",_n.target.set(...Ju.target),wt.position.set(...Ju.position),jt=!0};P("campusView").onclick=()=>{ga(27,!0),P("focus").value="campus",Zb(new rn(new C(-40,0,-25),new C(94,6,25)),new C(60,70,90))};P("frameFocusStation").onchange=()=>{let i=$u[P("frameFocusStation").value];i&&(ga(74),_n.target.set(i[0],1,i[1]),wt.position.set(i[0]+5,5.5,i[1]+8),P("focus").value="frame",jt=!0)};P("campusRun").onclick=()=>{bt=!bt,ss(bt?"\u96D9\u5EE0\u5171\u6642\u9418\u904B\u8F49":"\u96D9\u5EE0\u5DF2\u66AB\u505C"),Us()};P("campusStep").onclick=()=>{bt=!1,At.setRunning(!1),At.advance(60,_e,{force:!0}),ss("\u96D9\u5EE0\u5FEB\u8F491\u5206\u9418 \xB7 \u5DF2\u66AB\u505C"),Us(),Si()};P("frameSettings").onclick=()=>P("framePanel").scrollIntoView({behavior:"smooth"});P("applySupply").onclick=()=>{try{if(_e.released>0)throw Error("\u672C\u5DE5\u55AE\u5DF2\u6295\u6599\uFF0C\u4E0D\u80FD\u6539\u5BEB\u4F86\u6E90\u3002\u8ACB\u65B0\u589E\u5DE5\u55AE\u6216\u660E\u78BA\u91CD\u8A2D\u76EE\u524D\u5DE5\u55AE\u5F8C\u518D\u9078\u4F86\u6E90\u3002");({supplyMode:ai,frameSpec:oi}=ls({supplyMode:P("supplyMode").value,frameSpec:oi},Ft)),Ei(),ed(),wo(),P("opsError").textContent="\u4F9B\u6599\u4F86\u6E90\u5DF2\u5957\u7528\uFF1B\u81EA\u88FD\u6A21\u5F0F\u53EA\u9818\u7528\u6700\u7D42\u5408\u683C\u4E14\u5DF2\u904B\u62B5\u7E3D\u88DD\u7684\u8ECA\u67B6\u3002"}catch(i){P("supplyMode").value=ai,P("opsError").textContent=i.message}};P("frameDiscard").onclick=()=>{sl(),P("frameError").textContent="\u5DF2\u9084\u539F\u9130\u5EE0\u8A2D\u5B9A\u8349\u7A3F\uFF1B\u751F\u7522\u9032\u5EA6\u672A\u6539\u52D5\u3002"};P("frameApply").onclick=()=>{try{let i=structuredClone(xi);i.initialQuantity=Number(P("frameInitial").value),i.defaultKit.alignmentRequired=P("frameAlignment").checked,i.defaultKit.alignmentReviewRef=i.defaultKit.alignmentRequired?"SYNTHETIC-DEMO-ALIGNMENT-REVIEW":null,i.qualityMode=P("frameQuality").value,i.logistics.fleet=Number(P("frameFleet").value),i.logistics.batchSize=Number(P("frameBatch").value),i.logistics.speed=Number(P("frameSpeed").value);let e=i.logistics.waypoints,t=e.slice(1).reduce((s,r,o)=>s+Math.hypot(r.x-e[o].x,r.z-e[o].z),0);i.logistics.travelSeconds=i.logistics.returnSeconds=Math.max(1,Math.ceil(t/i.logistics.speed));let n=Bn(i);if(!confirm("\u5C07\u91CD\u8A2D\u96D9\u5EE0\u60C5\u5883\uFF1A\u6240\u6709\u5DE5\u55AE\u9032\u5EA6\u3001\u9130\u5EE0\u5728\u88FD\u54C1\u3001\u54C1\u8CEA\u8207\u4F9B\u6599\u5EAB\u5B58\u5747\u6E05\u96F6\u91CD\u5EFA\u3002\u8A2D\u5B9A\u4FDD\u7559\uFF0C\u78BA\u5B9A\u5957\u7528\uFF1F"))return;Am();for(let s of ri)s.runtime=null;At.configure(n),bt=!1,Ei(),Ds.configure(n),sl(),wo(),Si(),P("frameError").textContent="\u96D9\u5EE0\u60C5\u5883\u5DF2\u91CD\u8A2D\u4E26\u66AB\u505C\uFF1B\u6240\u6709\u79D2\u6578\u8207\u54C1\u8CEA\u7D50\u679C\u4ECD\u70BA\u5408\u6210\u5047\u8A2D\u3002"}catch(i){sd(i)}};P("frameReceive").onclick=()=>{try{At.frame.receiveKits({quantity:Number(P("frameReceiveQty").value),...br(P("frameReceiveProduct").value)}),wo(),Si(),P("frameError").textContent="\u5DF2\u63A5\u6536\u65B0\u7684\u5916\u8CFC\u7BA1\u6750\uFF0F\u935B\u4EF6\u5957\u4EF6\uFF0C\u5C1A\u975E\u5408\u683C\u8ECA\u67B6\u3002"}catch(i){sd(i)}};P("frameTrace").onclick=()=>Eo(JSON.stringify(At.snapshot(),null,2),"frame_factory_trace_synthetic.json","application/json");window.frameState=()=>({...At.snapshot(),visual:Ds.snapshot()});function Zb(i,e){e.normalize();let t=i.getCenter(new C),n=new C(0,1,0).cross(e).normalize(),s=e.clone().cross(n).normalize(),r=Math.tan(ni.degToRad(wt.fov/2)),o=r*wt.aspect,a=1;for(let c of[i.min.x,i.max.x])for(let l of[i.min.y,i.max.y])for(let u of[i.min.z,i.max.z]){let h=new C(c,l,u).sub(t);a=Math.max(a,h.dot(e)+Math.max(Math.abs(h.dot(n))/o,Math.abs(h.dot(s))/r))}_n.target.copy(t),wt.position.copy(t).addScaledVector(e,a*1.05),jt=!0}P("frameLabels").onchange=()=>{Ds.setLabels(P("frameLabels").checked),jt=!0};function ga(i,e=!1){Yn.position.set(i-18,35,22),Yn.target.position.set(i,0,0),Yn.target.updateMatrixWorld(),Object.assign(Yn.shadow.camera,{left:e?-85:-45,right:e?85:45}),Yn.shadow.camera.updateProjectionMatrix()}})();
