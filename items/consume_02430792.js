/**
* 消耗一個道具， 為指定裝備增加 XXX屬性值 【要求裝備剩余次數必須為XX，星星必須超過XX才可以使用】  QQ:739977676 
**/
let eff1 = "#fEffect/CharacterEff/1112924/0/0#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
let eff3 = "#fEffect/CharacterEff/1112924/0/0#";
//這裡面放可以使用本系統的裝備代碼
let ItemListWQ = Array(
    1212120,
    1222113,
    1232113,
    1242121,
    1242122,
    1262039,
    1272017,
    1282017,
    1302343,
    1312203,
    1322255,
    1332279,
    1342104,
    1362140,
    1372228,
    1382265,
    1402259,
    1412181,
    1422189,
    1432218,
    1442274,
    1452257,
    1462243,
    1472265,
    1482221,
    1492235,
    1522143,
    1532150,
    1582023,
    1542117,
    1552119,
    1252098
);
let equipState = false; //是否限制只有以上裝備才可以使用？ true=是 false=否
let addAp = 116;//增加的屬性
let equipHaveLevel = 0;//裝備剩余次數
let equipStar = 0;//裝備的星之力
let needItem = 2430791;
let onlyOne = true ; //是否只能用一次 用跳躍力判斷
var eff = "#fEffect/CharacterEff/1051296/1/0#";

let toDrop = player.getInventorySlot(1, 1);
if(toDrop!=null){
let str = "#d#e#fs15#服主生日點裝全屬+1106道具#k\r\n\r\n#fs12#";
	str +="#b"+eff+"為了歡慶服主生日\r\n";
	str +="#b"+eff+"100%將任何裝備額外提升全能力+1106\r\n";
	str +="#b"+eff+"只限定用在點裝上面\r\n";
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
		npc.say(ss);
	}else{
		if(player.hasItem(needItem,1)){
			if(toDrop.getJump() > 100){
				npc.say("該裝備已使用過！無法再次使用！");
			}else if(toDrop.getInventoryId()==-1){
				npc.say("不可用於普通裝備上");
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
						toDrop.setJump(120);
						toDrop.setTitle("服主生日改屬");
						player.updateItem(1, toDrop);
						npc.	broadcastGachaponMsgEx(player.getName() + "：我成功使用【服主生日道具】將點裝增加了全屬116。",toDrop);
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
}else{
	player.dropAlertNotice("你的裝備欄第一格道具為空")
}


