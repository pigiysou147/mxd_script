/*
抽奖副本
*/
var status = 0;
var psrw;
var rand;

psrw = player.customSqlResult("select itemid from zdata_damageskin where itemid!=-1 ");
rand = Math.floor(Math.random() * psrw.size());
var txt = "                    #r 【伤害皮肤抽奖】 #k\r\n";
txt += "			使用#r10W点券#k 就可以抽奖   \r\n\r\n";
txt += "			奖品清单如下：   \r\n\r\n";
txt += "#r----------------------------------------#k\r\n";
for(var i = 0; i < psrw.size(); i++) {
	txt += "#v" + psrw.get(i).get("itemid") + "#";
}

let selection=npc.askYesNo(txt);

if(selection == 1) {
	if(player.getCashShopCurrency(1) < 100000) {
		npc.say("你没有10W点券");
	} else if(player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
		npc.say("你保证你背包的每一栏都有空位");
	} else {
		player.gainGachaponItem("伤害皮肤抽奖",psrw.get(rand).get("itemid"), 1,  3);
		//cm.gainItem(psrw[rand].get("skin"),1);
		player.modifyCashShopCurrency(1, -100000); //减少1个使用的情迷道具
		npc.say("获取了 #v" + psrw.get(rand).get("itemid") + "# 1个");

	}
}