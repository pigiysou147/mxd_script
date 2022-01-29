var status = -1;

var itemList = Array(
	
	Array(2048749, 1), 
	Array(2049604, 1), 
	Array(3992025, 2), 
	Array(3994387, 4), 
	Array(2431190, 8), 
	Array(2643129, 6), 
	Array(4023026, 3), 
	
	Array(4023025, 25), 
	
	Array(2433981, 30), 
	Array(2049388, 30), 
	Array(4036457, 50), 
	
	Array(2438756, 10), 
	Array(2633293, 60),// 棉花糖伤害皮肤（单元）
	Array(2632288, 60),// 本性森林伤害皮肤（单元）
	Array(2632124, 60),// AWAKE伤害皮肤（单元）
	Array(2631893, 60),// 水晶金色伤害皮肤（单元）

	Array(2631451, 60),
	Array(2630753, 60), 
	Array(2439572, 60), 
	Array(2439395, 60), 
	Array(2439337, 60), 
	Array(2630970, 100), 
	Array(2631451, 100), 
	Array(2631095, 100), 
	Array(2630380, 60)
	
);

var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光

var need = 4110010;
var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#e#d          " + xx + "  豆豆票兑换中心" + xx + "\r\n";
selStr += "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
var selStr = "-请选购商品:";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   需要#r" + itemList[i][1] + "#k个#i" + need + "##l";
}
let selection = npc.askMenuS(selStr);
var count =itemList[selection][1];
var itemid=itemList[selection][0];

let number = npc.askNumber("请输入要兑换#v"+itemid+"#的数量",1,1,100);
count=count*number;
let yes = npc.askYesNo("#r#e是否要兑换呢？");
if(yes==1){
	if(!player.hasItem(need, count)) {
		npc.say("您的#v" + need + "#不足" + count + "个.");
		
	}else {
		player.gainItem(itemid, number);
		player.loseItem(need, count);
		npc.say("购买成功。");
	}
}