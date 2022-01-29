/*
装备出售
 */
var icon0 = "#fUI/Basic.img/VScr7/enabled/thumb0#"; //小图标
var icon1 = "#fUI/ChatBalloon.img/pet/16/nw#"; //小黄鸡
var icon2 = "#fUI/ChatBalloon.img/pet/16/ne#"; //小黄鸡
var icon3 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/7#"; //发呆
var icon4 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/6#"; //愤怒
var icon5 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/3#"; //大笑
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#"; //大笑
var status;
var text;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var listq = Array(
	2, 5, 10
);
var itemq = 0;

var txt = "#e#b\t\t\t\t　道具分解中心#k#n\r\n\r\n";
txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
txt += "　　 #d#L0#" + icon3 + " 分解说明    [ #r新手必看#d ]  " + icon3 + "#l#k\r\n";
//txt += "　　 #d#L3#" + icon3 + " 一键分解  [ #r□130-149□#d ] " + icon3 + "#l#k\r\n";
txt += "　　 #d#L999#" + icon3 + "分解战国、法弗纳、小暴君、旋涡（紫火）" + icon3 + "#l#k\r\n";
txt += "　　 #d#L1000#" + icon6 + "分解埃苏、特米、大暴君（金火）  " + icon6 + "#l#k\r\n";
txt += "　　 #d#L1001#" + icon6 + "分解 神秘系列 （黑火） " + icon6 + "#l#k\r\n\r\n";
txt += icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + icon1 + icon2 + "\r\n\r\n";
let selection =npc.askMenuS(txt);
switch(selection) {
	case 0:
		text = icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";
		text += icon6 + "　　　　　　　　　　　　　　　　　　　　　　　　" + icon6 + "\r\n";
		text += icon6 + "　　　　　　#b分解说明 -  仔细阅读 #k 　　　　　  　" + icon6 + "\r\n";
		text += icon6 + " #d分解FFN系列可以获得紫火，用于各类强化          " + icon6 + "\r\n";
		text += icon6 + " #d分解AS，暴君等装备可以获得金火，用于神秘强化   " + icon6 + "\r\n";
		text += icon6 + " #d分解神秘武器防具等，获得黑火用于强化创世装备   " + icon6 + "\r\n";
		
		text += icon6 + "　　　　　　　　　　　　　　　　　　　　    　　" + icon6 + "\r\n";
		text += icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + icon6 + "\r\n";
		npc.say(text);
		break;
	case 999:
		player.runScript( "ffnhg");
		break;
	case 1000:
		player.runScript( "ashg");
		break;
	case 1001:
		player.runScript( "smhg");
		break;

}

function getType(reqLevel) {
	if(reqLevel >= 130 && reqLevel < 139) {
		return listq[0];
	} else if(reqLevel >= 140 && reqLevel < 149) {
		return listq[1];
	} else if(reqLevel >= 150 && reqLevel < 159) {
		return listq[2];
	} else {
		return 0;
	}
}