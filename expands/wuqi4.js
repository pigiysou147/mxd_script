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

var name = "飞侠类";
var wuqi = Array(
	Array("暗影双刀", 1342000,1342002,1342005,1342007,1332000,1332001,1332044,1332046,1332051),
	Array("隐士（标飞）", 1352290,1352291,1352293,1472061,1472008,1472026,1472179),
	Array("侠盗（刀飞）", 1352280,1352281,1352282,1332000,1332009,1332041,1332051),
	Array("幻影", 1352105,1352106,1352103,1362046,1362050,1362055,1362013),
	Array("夜行者", 1352970,1352971,1352972,1472061,1472008,1472026,1472179),
	Array("魔链隐士", 1353300,1353301,1353303,1272000,1272001,1272003,1272007),
	Array("虎影", 1292001,1292002,1292003,1292006,1353800,1353801,1353802,1353806)

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