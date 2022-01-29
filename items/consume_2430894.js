/**
* 消耗一個道具， 為指定裝備增加 XXX屬性值 【要求裝備剩余次數必須為XX，星星必須超過XX才可以使用】  QQ:739977676 
**/
let eff1 = "#fEffect/CharacterEff/1112924/0/0#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
let eff3 = "#fEffect/CharacterEff/1112924/0/0#";
//這裡面放可以使用本系統的裝備代碼
let ItemListWQ = Array(
    1592022,
    1212129,
	1222122,
	1232122,
	1242139,
	1242141,
	1252106,
	1262051,
	1302355,
	1312213,
	1322264,
	1332289,
	//1342104,
	1362149,
	1372237,
	1382274,
	1402268,
	1412189,
	1422197,
	1432227,
	1442285,
	1452266,
	1462252,
	1472275,
	1482232,
	1492245,
	1522152,
	1532157,
	1542128,
	1552130,
	1582044,
	1282040,
	1272040
);
let equipState = true; //是否限制只有以上裝備才可以使用？ true=是 false=否
let addAp = 0;//增加的屬性
let equipHaveLevel = 0;//裝備剩余次數
let equipStar = 0;//裝備的星之力
let needItem = 2430894;
let onlyOne = true ; //是否只能用一次 用跳躍力判斷
var eff = "#fEffect/CharacterEff/1051296/1/0#";

let toDrop = player.getInventorySlot(1, 1);
let str = "#d#e#fs15#創世修復#k\r\n\r\n#fs12#";
	str +="#b"+eff+"100%將創世B傷,無視修復\r\n";
	//str +="#b"+eff+"可重複使用、累積疊加\r\n";
	//str +="#b"+eff+"點裝、寵物裝備也可使用\r\n";
	str +="#b"+eff+"請將您需要打造的裝備放到第一格！\r\n\r\n";
	//str +="#r"+eff+"如果你的裝備前面有非斗內拿到此字段\r\n\r\n";
	//str +="#r"+eff+"#fs16##e千萬請勿使用#n\r\n\r\n";
	//str +="#r"+eff+"#fs12#不要使用之後跟GM說你上錯無法強化有BUG\r\n\r\n";
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
		npc.say(ss)
	}else{
		if(player.hasItem(needItem,1)){
			if(toDrop.getJump() > 100){
				npc.say("該裝備已使用過！無法再次使用！");
			}else if(toDrop.getInventoryId()!=-1){
				npc.say("不可用於點裝上");
			}else{
				if(toDrop.getCHUC() >= equipStar){
					if(toDrop.getRUC() >= equipHaveLevel){
						player.loseItem(needItem,1);
						toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
						toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
						toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
						toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
						toDrop.setMad(toDrop.getMad() + addAp);
						toDrop.setPad(toDrop.getPad() + addAp);
						toDrop.setBossDamageR(30);// BOSS伤 
		                toDrop.setIgnorePDR(20);// 无视防御
						//toDrop.setJump(120);
						//toDrop.setTitle("改屬裝備");
						player.updateItem(1, toDrop);
						npc.say("恭喜你，強化成功!")
					}else{
						npc.say("您的裝備砸卷次數不夠！")
					}
				}else{
					npc.say("您的裝備星之力不夠！")
				}
			}
		}else{
			npc.say("你沒有#v"+needItem+"#")
		}
	}
}
}else if(YN == 0){
	npc.say("下次見");
}



