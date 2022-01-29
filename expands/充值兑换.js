var status = -1;

var reward = Array(
	//	  物品ID  消耗数量 获取数量
 	Array(3992025, 1,5),
	Array(2591484, 1,1),
	Array(2591676, 1,1),
	Array(2591590, 1,1),
	Array(2048749, 1,5),
	Array(4001332, 5,1),
	Array(4036457, 5,2),
	Array(2435824, 5,5),
	Array(2431578, 5,3),
	Array(2048749, 10,100),
	Array(1202193, 20,1)
	
);

var itemId = -1;
var points = -1;
var period = -1;
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var need = 4441001;
var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#e#d          " + xx + "  个人礼包兑换中心" + xx + "\r\n";
selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";

var selStr = "-请选购:";
for(var i = 0; i < reward.length; i++) {
	selStr += "\r\n#L" + i + "##i" + reward[i][0] + ":# #b#t" + reward[i][0] + "# X "+reward[i][2]+"#k   需要#r" + reward[i][1] + "#k个#i" + need + "##l";
}
var 序号 = npc.askMenuS(selStr);

if(player.hasItem(need, reward[序号][1])) {
	player.gainGachaponItem("[个人礼包]", reward[序号][0], reward[序号][2], 1);
	player.loseItem(need, reward[序号][1]);
	npc.say("购买成功。");
} else {
	npc.say("您的#v" + need + "#不足" + reward[序号][1] + "个.");
}