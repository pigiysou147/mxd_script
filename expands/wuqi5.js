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

var name = "海盗类";
var wuqi = Array(
	Array("墨玄", 1403001,1403002,1403003,1352860,1352861,1352862,1352863),
	Array("冲锋队长", 1352900, 1352901, 1352902, 1352903, 1482065, 1482009, 1482012, 1482074),
	Array("船长", 1352910, 1352911, 1352913, 1492109, 1492004, 1492009, 1492012),
	Array("神炮王", 1352920, 1352921, 1352922, 1352923, 1532000, 1532004, 1532008, 1532057),
	Array("隐月", 1353100, 1353101, 1353102, 1353103, 1482065, 1482009, 1482012, 1482074),
	Array("奇袭者", 1352970, 1352971, 1352972, 1492109, 1492004, 1492009, 1492012),
	Array("机械师", 1352700, 1352701, 1352702, 1492109, 1492004, 1492009, 1492012),
	Array("尖兵", 1353000, 1353002, 1353003, 1353004, 1242001, 1242000, 1242002, 1242004, 1242008),
	Array("爆破手", 1353400, 1353401, 1353402, 1353403, 1582000, 1582001, 1582003, 1582007),
	Array("龙的传人", 1352820, 1352821, 1352822, 1352823, 1492109, 1492004, 1492009, 1492012),
	Array("暴力萌天使", 1352600, 1352601, 1352602, 1222036, 1222027, 1222004, 1222008),
	Array("影魂异人", 1353600, 1353601, 1353602, 1482065, 1482009, 1482012, 1482074, 1353604)

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