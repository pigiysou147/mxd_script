var status = -1;

var reward = Array(
	//	  物品ID  消耗数量 获取数量
	Array(4310260, 13000,1,"<#r#e可以兑换创世武器，附带完美传承转移现有武器属性。#k>"),
	Array(2438497, 8888,1,"<#r#e3发均10创世级别首饰#k>"),
	Array(2432755, 3000,1,"<#r#e6条全属性极品宠物装备#k>"),
 	//Array(3700527, 1500,1,"<#r#e顶级称号#k>"),
	Array(3700514, 800,1,"<#r#e次顶级称号#k>"),
	Array(1033000, 666,1,"<#r#e时装毕业耳环#k>"),
	Array(1113220, 777,1,"<#r#e很好用的戒指#k>"),
	Array(1182158, 6666,1,"<#r#e次顶级徽章#k>")
	//Array(2591008, 100,1,"<#r#e最强宝珠#k>")
	
);

var itemId = -1;
var points = -1;
var period = -1;
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var need = 4009398;
var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#e#d            #v4009398#兑换中心#v4009398#\r\n";
selStr += "#e#d介绍：在游戏中，每当消耗1点直冲，都可以获得#v4009398#\r\n比例为:1 : 1 \r\n";
selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";

for(var i = 0; i < reward.length; i++) {
	selStr += "\r\n#L" + i + "##i" + reward[i][0] + ":# #b"+reward[i][3]+" X "+reward[i][2]+"#k价格: #r" + reward[i][1] + "#k#l";
}
var 序号 = npc.askMenuS(selStr);
let sel = npc.askYesNo("是否要选择购买#v"+reward[序号][0]+"# 需要  #v"+need+"#  X "+reward[序号][1]);
if(sel==1){
	if(player.hasItem(need, reward[序号][1])) {
		player.gainGachaponItem("[个人礼包]", reward[序号][0], reward[序号][2], 1);
		player.loseItem(need, reward[序号][1]);
		npc.say("购买成功。");
	} else {
		npc.say("您的#v" + need + "#不足" + reward[序号][1] + "个.");
	}
}
