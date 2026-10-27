export const TYPES={
 storage:{name:'零件貨架',w:4,d:1.5,cycle:0,color:0x608aaa,model:'rack'},
 receive:{name:'收料檢查台',w:3,d:2,cycle:0,color:0x608aaa,model:'bench'},
 frame:{name:'車架備料架',w:4,d:2,cycle:0,color:0xa28eda,model:'frameRack'},
 wheel:{name:'輪組校正／預組台',w:3,d:2,cycle:0,color:0xd4aa66,model:'wheel'},
 kit:{name:'配套備料台',w:3,d:2,cycle:90,color:0x36b9a6,model:'bench'},
 fork:{name:'前叉／頭碗安裝',w:4,d:3,cycle:100,color:0x36b9a6,model:'stand'},
 drive:{name:'傳動／煞車安裝',w:4,d:3,cycle:140,color:0x36b9a6,model:'stand'},
 motor:{name:'馬達／線束安裝',w:4,d:3,cycle:160,color:0xd5a4eb,model:'motor'},
 battery:{name:'電池／控制器安裝',w:4,d:3,cycle:120,color:0xd5a4eb,model:'battery'},
 final:{name:'輪組／整車總組',w:4,d:3,cycle:120,color:0x36b9a6,model:'stand'},
 torque:{name:'扭力／功能檢查',w:4,d:3,cycle:100,color:0xf39474,model:'inspection'},
 roller:{name:'滾輪測試台',w:4,d:3,cycle:90,color:0xf39474,model:'roller'},
 pack:{name:'包裝台',w:5,d:3,cycle:130,color:0x70a6df,model:'pack'},
 pallet:{name:'成品棧板',w:4,d:3,cycle:0,color:0x70a6df,model:'pallet'},
 conveyor:{name:'滾筒輸送段',w:6,d:1.2,cycle:0,color:0x75869a,model:'conveyor'},
 cart:{name:'補料推車',w:1.5,d:1,cycle:0,color:0xd4aa66,model:'cart'}
};
// All coordinates and process times are planning assumptions, metres and seconds.
export const ZONES=[
 {id:'incoming',name:'01 收料／零件倉儲',x:-26,z:-15,w:24,d:16,color:0x608aaa},
 {id:'prep',name:'02 車架／輪組預組',x:2,z:-15,w:28,d:16,color:0xd4aa66},
 {id:'electric',name:'03 電動車支線',x:27,z:-15,w:20,d:16,color:0xa28eda},
 {id:'assembly',name:'04 自行車總組',x:-6,z:0,w:64,d:10,color:0x36b9a6},
 {id:'quality',name:'05 品檢／滾輪測試',x:27,z:15,w:20,d:16,color:0xf39474},
 {id:'outgoing',name:'06 包裝／成品出貨',x:-12,z:15,w:48,d:16,color:0x70a6df}
];
const entries=[
 ['R01','receive',-34,-18],['R02','storage',-26,-19],['R03','storage',-19,-19],['R04','storage',-26,-12],['R05','storage',-19,-12],
 ['P01','frame',-8,-19],['P02','frame',-1,-19],['P03','wheel',7,-19],['P04','wheel',7,-11],['P05','cart',0,-10],
 ['E01','motor',23,-18],['E02','battery',31,-11],
 ['A01','kit',-34,0],['A02','fork',-22,0],['A03','drive',-10,0],['A04','drive',-10,4],['A05','final',4,0],
 ['C01','conveyor',-28,0],['C02','conveyor',-16,0],['C03','conveyor',-3,0],['C04','conveyor',11,0],
 ['Q01','torque',24,10],['Q02','roller',31,18],
 ['B01','pack',6,16],['B02','pack',-3,16],['B03','pallet',-16,16],['B04','pallet',-27,16]
];
export const defaultDevices=()=>entries.map(([id,type,x,z])=>({id,type,x,z,cycle:TYPES[type].cycle,rotation:0}));
export const ROUTES={bicycle:['kit','fork','drive','final','torque','roller','pack'],ebike:['kit','fork','drive','motor','battery','final','torque','roller','pack']};
export const defaultBOM=()=>[
 ['車架',1,'frame'],['前叉／頭碗',1,'fork'],['輪組（前後）',2,'wheel'],['外胎／內胎',2,'wheel'],['傳動套件',1,'drive'],['煞車組',2,'drive'],['車把／龍頭',1,'final'],['座墊／座管',1,'final'],['踏板',2,'final'],['包裝箱',1,'pack'],['馬達（電動車）',1,'motor'],['電池（電動車）',1,'battery'],['控制器／線束（電動車）',1,'battery']
].map(([part,quantity,station])=>({part,quantity,station}));
export const processTypes=new Set(Object.values(ROUTES).flat());
