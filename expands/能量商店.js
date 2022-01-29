var status = -1;

var reward = Array(
	// 物品ID  消耗数量 获取数量
 	Array(4001433, 10,	5),
 	Array(5064501, 5,	1),
 	Array(3992025, 5,	1),
	Array(4001848, 1,	2)
	
	
);

var itemId = -1;
var points = -1;
var period = -1;
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var need = 3994535;
var total =player.getPQLog("奖杯能量");
var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#e#d          " + xx + "  远征BOSS时间能量兑换中心" + xx + "\r\n";
selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";

var selStr = "当前时间能量值:"+total+"\r\n-请选购:";
for(var i = 0; i < reward.length; i++) {
	selStr += "\r\n#L" + i + "##i" + reward[i][0] + ":# #b#t" + reward[i][0] + "# X "+reward[i][2]+"#k   需要#r" + reward[i][1] + "点能量值#k#l";
}
var 序号 = npc.askMenuS(selStr);
var number = npc.askNumber("请输入要兑换的#v"+reward[序号][0]+"#数量",1,1,parseInt(total/reward[序号][1]));

if(total>=reward[序号][1]*number) {
	player.gainGachaponItem("[远征BOSS能量兑换中心]", reward[序号][0], reward[序号][2]*number, 1);
	player.addPQLog("奖杯能量", -reward[序号][1]*number,999);
	npc.say("购买成功。");
} else {
	npc.say("您的能量记录不足" + reward[序号][1] + "个.");
}