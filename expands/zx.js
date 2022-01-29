var eff = "#fEffect/CharacterEff/1112904/0/0#"
var sl = 5; //兑换数量
var sl1 = 10; //兑换数量
var sl2 = 10000; //兑换数量
var selStr = "#e#d您今天时长为： #r" + player.getOnlineTime() + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23 ： 50#n #b至#r #e00 ： 10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。#k\r\n\r\n";

selStr += "#L1#" + eff + "#b领取在线物品奖励#l\r\n";
selStr += "#L2#" + eff + "#b领取在线点券奖励#l\r\n";


let selection = npc.askMenuS(selStr);
if(selection ==1){
	player.runScript("zxjl");
}else{
	player.runScript("zxdj");
}