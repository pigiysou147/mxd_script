/**
* 消耗一個道具， 為指定裝備增加 XXX屬性值 【要求裝備剩余次數必須為XX，星星必須超過XX才可以使用】  QQ:739977676 
**/
let eff1 = "#fEffect/CharacterEff/1112924/0/0#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
let eff3 = "#fEffect/CharacterEff/1112924/0/0#";
//這裡面放可以使用本系統的裝備代碼
let ItemListWQ = Array(
		1592022, //- 創世双头杖 等级要求：200
		1212129, //- 創世双头杖 等级要求：200
		1222122, //- 創世灵魂手铳 等级要求：200
		1232122, //- 創世亡命剑 等级要求：200
		1242139, //- 創世能量剑 等级要求：200
		1242141, //- 創世能量剑 等级要求：200
		1252106, //- 創世魔法槌 等级要求：200
		1262051, //- 創世ESP限制器 等级要求：200
		1302355, //- 創世单手剑 等级要求：200
		1312213, //- 創世斧 等级要求：200
		1322264, //- 創世锤 等级要求：200
		1332289, //- 創世匕首 等级要求：200
		1342104, //- 神秘之影刃 等级要求：200
		1362149, //- 創世手杖 等级要求：200
		1372237, //- 神秘之影短杖 等级要求：200
		1382274, //- 神秘之影长杖 等级要求：200
		1402268, //- 神秘之影双手剑 等级要求：200
		1412189, //- 神秘之影双手战斧 等级要求：200
		1422197, //- 神秘之影双手锤 等级要求：200
		1432227, //- 神秘之影长枪 等级要求：200
		1442285, //- 神秘之影矛 等级要求：200
		1452266, //- 神秘之影弓 等级要求：200
		1462252, //- 神秘之影弩 等级要求：200
		1472275, //- 神秘之影拳套 等级要求：200
		1482232, //- 神秘之影指节 等级要求：200
		1492245, //- 神秘之影短枪 等级要求：200
		1522152, //- 神秘之影双弩枪 等级要求：200
		1532157, //- 神秘之影攻城炮 等级要求：200
		1542128, //- 神秘之影武士刀 等级要求：200
		1552130, //- 神秘之影折扇  等级要求：200
		1582044, //- 神秘之影机甲枪 等级要求：200
		1272040, //- 創世锁链 等级要求：200
		1282040  //- 神秘之影魔力手套 等级要求：200
);
let equipState = true; //是否限制只有以上裝備才可以使用？ true=是 false=否
let addAp = 100;//增加的屬性
let equipHaveLevel = 0;//裝備剩余次數
let equipStar = 0;//裝備的星之力
let needItem = 2431676;
let onlyOne = false ; //是否只能用一次 用跳躍力判斷
var eff = "#fEffect/CharacterEff/1051296/1/0#";

let toDrop = player.getInventorySlot(1, 1);
let str = "#d#e#fs15#創世缺少B傷修復道具#k\r\n\r\n#fs12#";
	str +="#r"+eff+"#e是否強化下列物品\r\n";
	str +="#r"+eff+"#i"+toDrop.getDataId()+"##t"+toDrop.getDataId()+"";

let YN = npc.askYesNo(str);

if(YN ==1){
if(toDrop == null){
	npc.say("請將您需要打造的裝備放到第一格！");
}else{
	let type = -1;
	if(ItemListWQ.indexOf(toDrop.getDataId()) != -1){
		type = 1;
	}
	if(equipState && type == -1){
		let ss="#b當前不支持該裝備。目前只支持以下裝備\r\n#r\r\n"
		for(let i = 0; i< ItemListWQ.length;i++){
			ss += "#v"+ItemListWQ[i]+"# "
		}
		npc.say(ss);
	}else{
		if(player.hasItem(needItem,1)){
	if(toDrop.getInventoryId()!=-1){
				npc.say("不可用於點裝上");
			}else{
						player.loseItem(needItem,1);
						toDrop.setBossDamageR((toDrop.getBossDamageR()+30))
						toDrop.setIgnorePDR((toDrop.getIgnorePDR()+20))
						player.updateItem(1, toDrop);
						npc.say("恭喜你，強化成功!")
				
				}
		}else{
			npc.say("你沒有#v"+needItem+"#")
		}
	}
}
}else if(YN == 0){
	npc.say("下次見");
}



