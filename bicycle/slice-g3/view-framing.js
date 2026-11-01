/** Conservative overview sphere for the proposed layout, not a pixel acceptance. */
export function overviewFraming(aspect=1,verticalFovDegrees=43){
 if(!Number.isFinite(aspect)||aspect<=0)throw Error('Positive viewport aspect required');
 const vertical=verticalFovDegrees*Math.PI/180,horizontal=2*Math.atan(Math.tan(vertical/2)*aspect),radius=24,distance=radius/Math.sin(Math.min(vertical,horizontal)/2),direction=[25,29,32],length=Math.hypot(...direction),target=[9,1,-7.5];
 return {target,position:target.map((v,i)=>v+direction[i]/length*distance),distance,radius,limitingFov:Math.min(vertical,horizontal)};
}
