/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：枫叶交换
 *  @Author Kent 
 */
var cashitem;

var time;
var itemId;
var quantity;
var x = 0;
var id;
var str = "";
var itemList = Array(
	Array(4031997, 1, 500, 10), //国庆纪念币
	Array(2049419, 1, 1000, 10), //特殊潜能附加古卷
	Array(2048306, 1, 2500, 10), //特殊附加潜能附加古卷
	Array(2049500, 1, 1000, 10), //金色刻印之印
	Array(2049752, 1, 1000, 10),
	Array(2048700, 1, 300, 10), //涅槃火焰
	Array(2048701, 1, 500, 10),
	Array(2048702, 1, 700, 10),
	Array(2048703, 1, 1000, 10),
	Array(2048704, 1, 1400, 10),
	Array(2048725, 1, 1800, 10),
	Array(2048724, 1, 3000, 10),
	Array(2048723, 1, 4500, 10) //涅槃火焰
);

for(var i = 0; i < itemList.length; i++) {
	var itemId = itemList[i][0];
	str += "#L" + i + "#[#v" + itemId + "##b#z" + itemId + "##k需要#r" + itemList[i][2] + "#k个#z4001126#]#k 剩余次数:#r"+(itemList[i][3]-player.getPQLog("领取：" + itemList[i][0]))+"#k\r\n";
}
let selection = npc.askMenuS("#e你现在拥有 " + player.getAmountOfItem(4001126) + " 个#z4001126##n\n\r\n"+ str);

var limit = itemList[selection][3];
if(player.getPQLog("领取：" + itemList[selection][0]) >= limit) {
	npc.say("你今天已经不能再兑换这个物品了！");
} else if(player.getAmountOfItem(4001126) >= itemList[selection][2] && player.getFreeSlots(1) >= 1 && player.getFreeSlots(2) >= 1 && player.getFreeSlots(3) >= 1 && player.getFreeSlots(4) >= 1 && player.getFreeSlots(5) >= 1) {
	var id = itemList[selection][0];
	var quantity = itemList[selection][1];
	var use = itemList[selection][2];
	player.gainItem(itemList[selection][0], quantity);
	player.loseItem(4001126, use);
	if(limit > 0) {
		player.addPQLog("领取：" + itemList[selection][0],1,1);
	}
	npc.say("兑换成功！");
} else {
	npc.say("你还没有满足条件，请确认你有足够的枫叶或者背包空间不足(每一栏都必须要有1格以上的空间)！！");
}