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

var name = "战士类";
var wuqi = Array(
	Array("御剑骑士", 1354001,1354002,1354003,1354004),
	Array("魂骑士", 1352970, 1352971, 1352972, 1402001, 1402000, 1402126, 1402128, 1402016),
	Array("黑骑士", 1352220, 1352221, 1352222, 442000, 1442001, 1442008, 1442211),
	Array("狂龙战士", 1352500, 1352501, 1352502, 1352503, 1402000, 1402126, 1402128, 1402016),
	Array("剑豪", 1352800, 1352801, 1352802, 1352803, 1542000, 1542002, 1542004, 1542009),
	Array("米哈尔", 1098000, 1098001, 1098002, 1098003, 1302007, 1302009, 1302012, 1302023),
	Array("战神", 1352930, 1352931, 1352932, 1442000, 1442001, 1442031, 1442205),
	Array("恶魔复仇者", 1099001, 1099002, 1099003, 1099004, 1232002, 1232003, 1232004, 1232005, 1232006, 1232007),
	Array("圣骑士", 1352210, 1352211, 1352212, 1422000, 1422001, 1422017, 1422027),
	Array("英雄", 1352201, 1352202, 1352203, 1402000, 1402126, 1402128, 1402016)
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