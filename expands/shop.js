var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xp = "#fUI/piggyBarMinigame/crunch/5#";
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";
var xx = "#fEffect/CharacterEff.img/1003249/0/0#"; //兔子

var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系

var epp1 = "#fEffect/ItemEff.img/2022109/1#"; //彩光
var epp2 = "#fEffect/ItemEff.img/2022109/2#"; //彩光
var epp3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"; //彩光
var epp4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"; //彩光
var epp5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"; //彩光
var epp6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"; //彩光
var epp7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"; //彩光
var text = "#e#d                  " + xp + "百货中心" + xp + "\r\n";
text += "     #v3801199#\r\n";
text += "\t#L4#" + xx + "#r杂货商店#k#l#d#e\t";
text += "\t#L3#" + xx + "货币商店#l#d#e\r\n";
text += "\t#L5#" + xx + "双倍/经验/爆率#l#d#e  #L10#" + xx + "抵用商店#l#d#e\r\n";
text += "\t#L7#" + xx + "机器人商店#l#d#e\t  #L8#" + xx + "飞镖商店#l#d#e\\r\n";
text += "\t#L2#" + xx + "全职业低级武器商店#l#d#e\r\n";
//text += "" + epp1 + "" + epp2 + "" + epp3 + "" + epp4 +epp5 +epp6 +epp7 + "\r\n";
text += "\t#L0#" + xx + "百货商店#v5150040##v2048306##v2049419##v5062024##v5062500##l#d#e\r\n";
text += "\t#L1#" + xx + "#b绝版点装商城#k#v1053317##v1051366##v1402014##v1702688##l#d#e\r\n";

//text += "\r\n\r\n" + epp1 + "" + epp2 + "" + epp3 + "" + epp4 +epp5 +epp6 +epp7 + "\r\n";
let selection = npc.askMenu(text);
if(selection == 0) {

	player.runScript("daojujuanzhou");
} else if(selection == 1) {

	player.runScript("xiyoudianzhuang");
} else if(selection == 7) {

	player.runScript("jiqiren");
} else if(selection == 2) {

	player.runScript("zhiyewuqi");
} else if(selection == 3) {

	player.runScript("hbsd");
} else if(selection == 4) {
	//杂货店

	npc.sendShop(4);
} else if(selection == 5) {
	//杂货店

	player.runScript("shuangbei");
}else if(selection == 6) {
	//杂货店

	player.runScript("公测商店");
}else if(selection == 8) {
	//杂货店

	player.runScript("feibiao");
}else if(selection == 10) {
	//杂货店

	player.runScript("diyong");
}