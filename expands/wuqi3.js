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

var name = "射手类";
var wuqi = Array(
	
	Array("炼狱黑客", 1214001,1214002,1214005,1354010,1354011,1354012),

	Array("神射手", 1352260,1352261,1352262,1452137,1452032,1452146,1452020),
	Array("双弩精灵", 1352005,1352007,1352006,1352003,1522028,1522030,1522066,1522079),
	Array("风灵游侠", 1352970,1352971,1352972,1452137,1452032,1452146,1452020),
	Array("箭神", 1352270,1352271,1352272,1452137,462126,1462130,1462135,1462016),
	Array("古迹猎人", 1353700,1353702,1353704,1592000,1592001,1592006,1592007),
	Array("豹弩", 1352960,1352961,1352962,1462001,1462130,1462036,1462015)
	

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