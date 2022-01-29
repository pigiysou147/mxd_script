/* 点卷商店 */

var status = -1;
var ffn = Array(
	1214016,
	1482168,
	1232117,
	1472269,
	1212124,
	1302275,
	1462247,
	1382269,
	1552063,
	1403036,//法弗纳拳炮
	1212063,
	1532098,
	1302347,
	1522094,
	1252100,
	1372177,
	1332225,
	1422192,
	1432167,
	1412184,
	1272015,
	1342082,
	1542063,
	1372232,
	1332283,
	1422140,
	1492239,
	1582016,
	1412135,
	1252015,
	1213039,
	1213016,
	1213040,
	1482225,
	1462193,
	1242127,
	1222117,
	1232057,
	1402196,
	1342107,
	1242060,
	1262043,
	1532152,
	1312153,
	1442280,
	1452205,
	1312207,
	1242061,
	1362090,
	1322203,
	1582033,
	1522147,
	1542120,
	1262016,
	1362144,
	1282015,
	1552122,
	1432222,
	1472214,
	1322259,
	1442223,
	1382208,
	1452261,
	1402263,
	1492179,
	1222058,
	1042257,
	1042255,
	1042258,
	1042254,
	1042256,
	1062168,
	1062167,
	1062169,
	1062165,
	1062166,
	1003799,
	1003801,
	1003798,
	1003797,
	1003800
);
var zhanguo = Array(
	1003605,
	1232119,
	1312118,
	1542124,
	1152094,
	1432224,
	1412106,
	1322261,
	1402265,
	1003601,
	1322164,
	1302229,
	1442282,
	1102456,
	1302349,
	1232072,
	1422194,
	1422109,
	1072711,
	1542045,
	1432140,
	1052509,
	1003604,
	1442184,
	1052513,
	1342109,
	1472271,
	1102459,
	1052512,
	1362069,
	1362146,
	1242077,
	1342071,
	1582030,
	1242134,
	1072714,
	1132156,
	1312209,
	1402153,
	1082472,
	1412186,
	1152098,
	1222052,
	1132160,
	1082476,
	1242135,
	1482142,
	1242078,
	1532076,
	1102460,
	1332286,
	1082475,
	1472181,
	1492241,
	1532154,
	1482229,
	1152098,
	1222052,
	1132160,
	1082476,
	1242135,
	1482142,
	1072715,
	1492154,
	1222119,
	1492154,
	1242078,
	1532076,
	1052513,
	1082476,
	1132160,
	1152098,
	1102460,
	1072714,
	1003604,
	1332195,
	1472181,
	1342071,
	1362069,
	1052512,
	1082475,
	1152097,
	1132159,
	1102459,
	1242077,
	1072713,
	1003603,
	1252056,
	1382170,
	1552045,
	1262028,
	1372141,
	1212057,
	1052511,
	1082474,
	1152096,
	1132158,
	1102458,
	1072711,
	1003601,
	1412106,
	1312118,
	1402153,
	1422109,
	1232072,
	1432140,
	1542045,
	1442184,
	1302229,
	1052509,
	1082472,
	1152094,
	1132156,
	1102456,
	1072712,
	1003602,
	1522073,
	1462161,
	1452172,
	1052510,
	1322164,
	1132157,
	1082473,
	1152095,
	1102457,
	1072715,
	1482142,
	1003605,
	1222052,
	1072737,
	1132169,
	1102476,
	1072740,
	1102479,
	1132172,
	1072738,
	1102477,
	1132170,
	1072739,
	1102478,
	1132171,
	1072741,
	1102480,
	1132173
);
var xuanwo ;
var selectedItem = 1;
var selectedCost = 1;
var text;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var ffnCount = 0;
var zhanguoCount = 0;
var indexof = 1;
var text = "";

text = "\t\t#e- 以下是准备分解的装备,请核对仔细 \r\n PS ：为了防止误操作，只识别背包前32格的装备哦 -#n\r\n\r\n#b";
var item;
var newItemList = Array();
for(var i = 1; i < 32; i++) {
	item = player.getInventorySlot(1, i);
	if(item != null) {
		//FFN计算个数
		for(var j = 0; j < ffn.length; j++) {
			if(ffn[j] == item.getDataId()) {
				//npc.say(item.getExpiration());
				if(item.getExpiration()==-1 || item.getExpiration()==3439728000000){
					
					newItemList[i - 1] = item.getDataId();
					beDeletedArr.push(i);
					ffnCount++;
				}
				
			}
		}

		//战国计算个数
		for(var j = 0; j < zhanguo.length; j++) {
			if(zhanguo[j] == item.getDataId()) {
				if(item.getExpiration()==-1 || item.getExpiration()==3439728000000){
					newItemList[i - 1] = item.getDataId();
					beDeletedArr.push(i);
					zhanguoCount++;
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
		var lvse = 0;
		//计算FFN和漩涡的概率
		for(var i = 0; i < ffnCount; i++) {
			var maple = Math.floor(Math.random() * 10);
			if(maple % 2 == 1) {
				huohua++;
			} else {
				lvse++;
			}
		}

		//计算战国 小暴君
		for(var i = 0; i < zhanguoCount; i++) {
			var maple = Math.floor(Math.random() * 100);
			if(maple >= 90) {
				if(maple % 2 == 1) {
					huohua++;
				} else {
					lvse++;
				}
			}

		}

		var tupo = 0;
		tupo += Math.floor((Math.random() * 2 + 1) * ffnCount);
		tupo += Math.floor((Math.random() * 2 + 1) * zhanguoCount);
		if(tupo>0){
			player.gainItem(2614030, tupo); //十万突破
		}
		
		//npc.say(huohua+" "+lvse);
		if(huohua>0){
			
			player.gainItem(2048704, huohua); //火花
		}
		if(lvse>0){
			player.gainItem(4023026, lvse); //绿色结晶体
		}
		
		
		text = "分解成功，获得了#v2048704# X " + huohua + "和#v4023026#X " + lvse + " #v2614030#" + tupo + "个";
		npc.say(text);
	}

}