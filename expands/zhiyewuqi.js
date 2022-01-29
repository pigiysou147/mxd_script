var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xp = "#fItem/PetCapsule/Training/4/symbol/s#";
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子

var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系

var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
		var text = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
		text += "#e#d           " + xx + "全职业武器副手" + xx + "\r\n";
		text += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
		text += "\t#L1#" + xxx + "战士类#l#d#e\t";
		text += "\t#L2#" + xxx + "法师类#l#d#e\r\n";
		text += "\t#L3#" + xxx + "弓手类#l#d#e\t";
		text += "\t#L4#" + xxx + "飞侠类#l#d#e\r\n";
		text += "\t#L5#" + xxx + "海盗类#l#d#e\t";
		text += "\r\n\r\n" + epp + "" + epp + "" + epp + "" + epp + ""
		let selection=npc.askMenu(text);
		
		player.runScript("wuqi"+selection);

