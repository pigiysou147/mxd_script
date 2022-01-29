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

var name = "法师类";
var wuqi = Array(
	Array("火毒", 1352230, 1352232, 1352233, 1372005, 1372001, 1372097, 1372162),
	Array("冰雷", 1352240, 1352241, 1352243, 1372005, 1372001, 1372097, 1372162),
	Array("主教", 1352250, 1352251, 1352253, 1372005, 1372001, 1372097, 1372162),
	Array("炎术士", 1352970, 1352971, 1352972, 1372162, 1372005, 1372001, 1372097, 1372162),
	Array("幻灵", 1352950, 1352951, 1352952, 1372005, 1372001, 1372097, 1372162),
	Array("超能力", 1353200, 1353201, 1353202, 1353203, 1262001, 1262003, 1262004, 1262007),
	Array("阴阳师", 1552111, 1552022, 1552055, 1552008),
	Array("夜光", 1352400, 1352401, 1352402, 1352403, 1212001, 1212045, 1212005, 1212008),
	Array("圣经使徒", 1353500, 1353501, 1353502, 1353503, 1282000, 1282001, 1282002, 1282004, 1282007),
	Array("龙神", 1352940, 1352941, 1352942, 1372005, 1372001, 1372097, 1372162),
	Array("林之灵", 1352810, 1352811, 1352812, 1352813, 1252001, 1252002, 1252003, 1252005, 1252007)

);
var ch = 0;

var text = "#e#d                  " + xx + "#r" + name + "#k武器副手" + xx + "\r\n";
text += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
for(var i = 0; i < wuqi.length; i++) {
	text += "\t#L" + i + "#" + xxx + wuqi[i][0] + " 武器副手#l#d#e\r\n";
}
text += "\r\n\r\n" + epp + "" + epp + "" + epp + "" + epp + ""
let selection=npc.askMenu(text);

var txt = "#e#d                  " + xx + "#r" + wuqi[selection][0] + "#k武器副手" + xx + "\r\n";
txt += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
for(var i = 1; i < wuqi[selection].length; i++) {
	txt += "\t#L" + i + "#" + xxx + "#v" + wuqi[selection][i] + "##z" + wuqi[selection][i] + "# #l#d#e\r\n";
}
let sel =npc.askMenu(txt);
if(!player.hasMesos(300000) ) {
	npc.say("需要30W金币哦~");
} else {
	var item = player.gainGachaponItem("新手武器商店",wuqi[selection][sel], 1,  3);
	if(item < 0) {
		npc.say("请清理背包哦");
	}else{
		player.loseMesos(300000);
		npc.say("购买成功");
	}
	

}