var aisu = Array(
	1004424,
	1232109,
	1222109,
	1592019,
	1332280,
	1482222,
	1452258,
	1272016,
	1152176,
	1362141,
	1102775,
	1222114,
	1004425,
	1073035,
	1332274,
	1052887,
	1522138,
	1532148,
	1472266,
	1242116,
	1432219,
	1242123,
	1402251,
	1152179,
	1542108,
	1152178,
	1322250,
	1004423,
	1522144,
	1232114,
	1004424,
	1272021,
	1492231,
	1532144,
	1102794,
	1492236,
	1152174,
	1262017,
	1073034,
	1102795,
	1312199,
	1102797,
	1482216,
	1342105,
	1442268,
	1422190,
	1004422,
	1102796,
	1552110,
	1212121,
	1412182,
	1082639,
	1462244,
	1004426,
	1082638,
	1372222,
	1382259,
	1462239,
	1382266,
	1073030,
	1052888,
	1052890,
	1212115,
	1452252,
	1582017,
	1402260,
	1412177,
	1252093,
	1242124,
	1282022,
	1282016,
	1073033,
	1432214,
	1262040,
	1082640,
	1312204,
	1242120,
	1052882,
	1442276,
	1052889,
	1372229,
	1582027,
	1322256,
	1302333,
	1362135,
	1342101,
	1082636,
	1422184,
	1472261,
	1082637,
	1073032,
	1152177,
	1302344
);
var temi = Array(
	1403034,
    1213034,
	1092113,
	1212080,
	1222075,
	1232075,
	1242081,
	1252066,
	1262030,
	1272029,
	1282029,
	1302290,
	1312166,
	1322216,
	1332239,
	1342086,
	1362102,
	1372189,
	1382223,
	1402211,
	1412148,
	1422153,
	1432179,
	1442235,
	1452217,
	1462205,
	1472227,
	1482180,
	1492191,
	1522106,
	1532110,
	1542068,
	1552068,
	1582026,
	1072743,
	1072744,
	1072745,
	1072746,
	1072747,
	1082543,
	1082544,
	1082545,
	1082546,
	1082547,
	1102481,
	1102482,
	1102483,
	1102484,
	1102485,
	1132174,
	1132175,
	1132176,
	1132177,
	1132178,
	1592033
);
var selectedItem = 1;
var selectedCost = 1;
var text;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var shenmiCount = 0;
var aisuCount = 0;
var temiCount=0;
var text = "";
text = "\t\t#e- 以下是准备分解的装备,请核对仔细 \r\n PS ：为了防止误操作，只识别背包前32格的装备哦 -#n\r\n\r\n#b";
var item;
var newItemList = Array();
for(var i = 1; i < 32; i++) {
	item = player.getInventorySlot(1, i);
	if(item != null) {
		//埃苏计算个数
		for(var j = 0; j < aisu.length; j++) {
			if(aisu[j] == item.getDataId()) {
				if(item.getExpiration()==-1 || item.getExpiration()==3439728000000){
					newItemList[i - 1] = item.getDataId();
					beDeletedArr.push(i);
					aisuCount++;
				}
			}
		}

		//计算特米
		for(var j = 0; j < temi.length; j++) {
			if(temi[j] == item.getDataId()) {
				if(item.getExpiration()==-1 || item.getExpiration()==3439728000000){

				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
				temiCount++;
				}
			}
		}
	}
}

for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？#n#k";
let selection = npc.askYesNo(text);
if(selection == 1) {
	if(player.getFreeSlots(2) < 2 || player.getFreeSlots(2) < 2) {
		npc.say("请清理背包");
	} else {
		for(var key in beDeletedArr) {
			player.loseInvSlot(1, beDeletedArr[key]);
		}
		var huohua = 0;
		var jinse = 0;

		//计算埃苏
		for(var i = 0; i < aisuCount; i++) {
			var maple = Math.floor(Math.random() * 100);
			if(maple >= 40) {
				if(maple % 2 == 1) {
					huohua++;
				} else {
					jinse++;
				}
			}

		}

		//计算特米
		for(var i = 0; i < temiCount; i++) {
			var maple = Math.floor(Math.random() * 100);
			if(maple >= 1) {
				
				huohua++;
			
				jinse++;
				
			}

		}
		var tupo = 0;
		tupo += Math.floor((Math.random() * 3 + 1) * shenmiCount);
		tupo += Math.floor((Math.random() * 2 + 1) * aisuCount);
		tupo += Math.floor((Math.random() * 3 + 1) * temiCount);
		
		
		if(jinse>0){
			player.gainItem(4023025, jinse); //不灭之火焰
		}
		
		if(tupo>0){
			player.gainItem(2614055, tupo); //十万突破
		}
		
		//npc.say(huohua+" "+lvse);
		if(huohua>0){
			
			player.gainItem(2048704, huohua); //火花
		}
		if(temiCount>0){
			player.gainItem(4001118, temiCount); //绿色结晶体
		}
		
		
		
		text = "分解成功，获得了#v4001118# X "+temiCount+"#v2048723# X " + huohua + "和#v4023025#X " + jinse + " #v2614055#" + tupo + "个";
		npc.say(text);
	}
}