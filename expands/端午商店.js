var status = -1;

var reward = Array(
	Array(2614063, 10000),
	Array(3010409, 1),
	Array(3018093, 5000),
	Array(3018094, 5000),
	Array(3018095, 5000),
	Array(3018096, 5000),
	Array(3018097, 5000),
	Array(3018098, 5000),
	Array(5062024, 300),
	Array(2049323, 2500),
	Array(2049116, 800),
	Array(2340000, 100),
	Array(2049604, 3000),
	Array(2432206, 20000),
	Array(2435824, 45000),
	Array(2430675, 88888),
	Array(2614058, 3500),
	Array(2430209, 3000),
	Array(5064501, 3800),
	Array(3992025, 7500),
	Array(2614055, 1500)
);

var itemId = -1;
var points = -1;
var period = -1;
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var need = 4001449;
var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#e#d          " + xx + "  端午兑换中心" + xx + "\r\n";
selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";

selStr += "-回忆岛祝所有岛友们端午阖家欢乐，身体健康，事业蒸蒸日上，老汉子们越来越帅气，小姐姐越长越年轻！:";

selStr += "-请选购的时候注意背包空间哦，如果因为空间不够导致没有得到物品不负责的哦:";
for(var i = 0; i < reward.length; i++) {
	selStr += "\r\n#L" + i + "##i" + reward[i][0] + ":# #b#t" + reward[i][0] + "#  需要#r" + reward[i][1] + "#k个#i" + need + "##l";
}
var 序号 = npc.askMenuS(selStr);

if(player.hasItem(need, reward[序号][1])) {
	player.gainGachaponItem("[端午商店]", reward[序号][0], 1, 1);
	player.loseItem(need, reward[序号][1]);
	npc.say("购买成功。");
} else {
	npc.say("您的#v" + need + "#不足" + reward[序号][1] + "个.");
}