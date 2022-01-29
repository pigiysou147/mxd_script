/* 点卷商店 */

var status = -1;
var shenmi = Array(
	1214018,
	1403018, //神秘之影拳炮
	1213018,
	1152196,
	1152197,
	1152198,
	1152199,
	1152200,
	1004808,
	1004809,
	1004810,
	1004811,
	1004812,
	1102940,
	1102941,
	1292018,
	1102942,
	1102943,
	1102944,
	1082695,
	1082696,
	1082697,
	1082698,
	1082699,
	1053063,
	1053064,
	1053065,
	1053066,
	1592020,
	1053067,
	1073158,
	1073159,
	1073160,
	1073161,
	1073162,
	1212120,
	1222113,
	1232113,
	1242121,
	1242122,
	1252098,
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
	1542117,
	1552119,
	1582023,
	1690204,
	1690321,
	1690322,
	1690323,
	1690324,
	1690325,
	1690326
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
var text = "";

text = "\t\t#e- 以下是准备分解的装备,请核对仔细 \r\n PS ：为了防止误操作，只识别背包前32格的装备哦 -#n\r\n\r\n#b";
var item;
var newItemList = Array();
for(var i = 1; i < 32; i++) {
	item = player.getInventorySlot(1, i);
	if(item != null) { 
		//FFN计算个数
		for(var j = 0; j < shenmi.length; j++) {
			if(shenmi[j] == item.getDataId()) {
				if(item.getExpiration()==-1 || item.getExpiration()==3439728000000){

				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
				shenmiCount++;
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
		//计算shenmi
		for(var i = 0; i < shenmiCount; i++) {
			var maple = Math.floor(Math.random() * 10);
			if(maple % 2 == 1) {
				huohua++;
			} else {
				jinse++;
			}
		}


		var tupo = 0;
		tupo += Math.floor((Math.random() * 3 + 2) * shenmiCount);
		player.gainItem(4033298, shenmiCount*10);
		player.gainItem(4036457,shenmiCount);
		
		player.gainItem(4001118,shenmiCount*3);
		
		var heise =Math.floor((Math.random() * 3 + 3) * shenmiCount);
		player.gainItem(5064501,heise);
		player.gainItem(2614058, tupo); //十万突破
		text = "分解成功，获得了#v4001118# X "+shenmiCount*3+"#v4033298# X " + shenmiCount*10 + "和#v4036457#X " + shenmiCount + " #v2614058#" + tupo + "个 #v5064501# X "+heise;
		npc.say(text);
	}
}