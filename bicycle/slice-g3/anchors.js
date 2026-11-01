/** Original presentation proposal only. Not measured/validated plant geometry.
 * Core planar [x,y] m becomes world [x,height,-y]. Core routes are never moved.
 * Terminal receiving conveyors represent only slice-boundary handoff. No
 * warehouse is modeled; finite terminal ledger capacities and routes stay G2-owned.
 */
export const PRESENTATION_ASSUMPTIONS = Object.freeze([
 'Fixtures, buffer slot offsets, rack locations and Cartesian-assist handling paths are proposed presentation geometry, not measured plant data. P_OUT/A_IN front/rear rows are proposed planar Y=6.0/7.7; Q_IN is Y=6.0. These revised clearances require geometry sweep and do not establish collision safety.',
 'G2 records buffer ownership, not physical slot IDs. History-derived presentation slot identities are stable when provided; this raw snapshot fallback may reflow after other committed departures.',
 'FG/SCRAP are slice-boundary handoffs with finite G2 ledger capacity, not modeled warehouses. Exit positions and receiving conveyors are presentation assumptions; G2.1 rack anchors come from the versioned layout; legacy recordings use display offsets. Unpacking and individual shelf placement are ledger-level services, not animated manual operations.'
]);
export const STATION_ANCHORS=Object.freeze(Object.fromEntries([['P',3],['A',9],['Q',15]].map(([id,x])=>[id,Object.freeze({id,position:Object.freeze([x,0,-6]),fixture:Object.freeze([x,.78,-7.10]),assumed:true})])));
export const MATERIAL_ANCHORS=Object.freeze(Object.fromEntries(Object.entries({frame:[1.4,0,-10.8],fork:[3,0,-10.8],wheel:[4.6,0,-10.8],drive:[2.2,0,-11.6],fastener:[3.8,0,-11.6],repair:[15.8,0,-10.8]}).map(([id,position])=>[id,Object.freeze({id,position:Object.freeze(position),assumed:true})])));
export function toWorld(point,height=0){if(!Array.isArray(point)||point.length!==2||!point.every(Number.isFinite)||!Number.isFinite(height))throw Error('Finite planar point required');return [point[0],height,-point[1]];}
export function fixtureAnchor(id){const a=STATION_ANCHORS[id];if(!a)throw Error('Unknown fixture '+id);return [...a.fixture];}
export const BOUNDARY_ANCHORS=Object.freeze({
 FG:Object.freeze({id:'FG',portRoot:Object.freeze([18,0,-4.5]),exitTarget:Object.freeze([20.6,.595,-4.5]),gate:Object.freeze({axis:'x',value:20.2,direction:1}),assumed:true}),
 SCRAP:Object.freeze({id:'SCRAP',portRoot:Object.freeze([18,0,-.5]),exitTarget:Object.freeze([18,.595,2.4]),gate:Object.freeze({axis:'z',value:1.3,direction:1}),assumed:true})
});
export function boundaryAnchor(id){const b=BOUNDARY_ANCHORS[id];if(!b)throw Error('Unknown slice boundary '+id);return {id:b.id,portRoot:[...b.portRoot],exitTarget:[...b.exitTarget],gate:{...b.gate},assumed:true};}
export function bufferSlotAnchor(id,index){if(!Number.isInteger(index)||index<0)throw Error('Nonnegative slot index required');switch(id){
 case 'P_OUT':return [.4,.35,-6-index*1.7];
 case 'A_IN':return [6.4,.35,-6-index*1.7];
 case 'A_OUT':return [11.6,.35,-6.6-index*1.4];
 case 'Q_IN':return [12.4,.35,-6-index*1.7];
 case 'Q_GOOD':return [17.6,.35,-6.2-index*1.4];
 case 'Q_SCRAP':return [17.6,.35,-7.4-index*1.4];
 // Terminal indices are ledger identities, not warehouse locations.
 case 'FG':return [...BOUNDARY_ANCHORS.FG.exitTarget];
 case 'SCRAP':return [...BOUNDARY_ANCHORS.SCRAP.exitTarget];
 default:throw Error('Unknown buffer anchor '+id);
}}
export function materialAnchor(id){const a=MATERIAL_ANCHORS[id];if(!a)throw Error('Unknown material anchor '+id);return [...a.position];}
export function vehicleCargoAnchor(position){return [position[0],position[1]+.595,position[2]];}
export const ANCHORS=Object.freeze({stations:STATION_ANCHORS,materials:MATERIAL_ANCHORS,boundaries:BOUNDARY_ANCHORS,assumed:true});

/** True visible-surface targets; wrist sphere centres are distinct from contact. */
export function processContactAnchors(stationId){const [x,y,z]=fixtureAnchor(stationId);const contacts={left:[x-.25,y+.3957627118644067,z-.028],right:[x+.25,y+.6760416666666667,z-.028]};return {contacts,wrists:Object.fromEntries(Object.entries(contacts).map(([side,p])=>[side,[p[0],p[1],p[2]-.065]])),palmRadius:.065,assumed:true};}
export function transferControlAnchors(stationId){const station=STATION_ANCHORS[stationId];if(!station)throw Error('Unknown control station '+stationId);const x=station.position[0],contacts={left:[x-.13,.98,-7.26],right:[x+.13,.98,-7.26]};return {contacts,wrists:Object.fromEntries(Object.entries(contacts).map(([side,p])=>[side,[p[0],p[1]+.065,p[2]]])),palmRadius:.065,assumed:true};}

/** Proposed cart bar rear surface, shared with model: centre z=-.53, radius .02.
 * Cart root is the recorded body centre. Local +Z faces heading 0 / core -Y.
 */
export function cartHandleAnchors(position,heading,handleLocalWorld=[[-.30,1.15,-.55],[.30,1.15,-.55]],palmRadius=.065){
 if(!Array.isArray(position)||position.length!==3||!position.every(Number.isFinite)||!Number.isFinite(heading))throw Error('Finite cart pose required');
 if(!Array.isArray(handleLocalWorld)||handleLocalWorld.length!==2||handleLocalWorld.some(p=>!Array.isArray(p)||p.length!==3||!p.every(Number.isFinite)))throw Error('Two finite cart handle contacts required');
 if(!Number.isFinite(palmRadius)||palmRadius<=0)throw Error('Positive palm radius required');
 const world=([x,y,z])=>[position[0]+x*Math.cos(heading)+z*Math.sin(heading),position[1]+y,position[2]-x*Math.sin(heading)+z*Math.cos(heading)];
 return {contacts:Object.fromEntries(['left','right'].map((side,i)=>[side,world(handleLocalWorld[i])])),wrists:Object.fromEntries(['left','right'].map((side,i)=>[side,world([handleLocalWorld[i][0],handleLocalWorld[i][1],handleLocalWorld[i][2]-palmRadius])])),palmRadius,assumed:true};
}
