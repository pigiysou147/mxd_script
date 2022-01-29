
var random = Math.floor(Math.random() * 4);
var icon0 = "#fUI/UIWindow2/AdditionalOptionTooltip/epic#";//A图标
var icon1 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"; //开始条件
//-----------------------------------------------------------------------------------------//
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
    Array(2435733, 100000)
);


var txt = "\r\n#d ┏━━━━━━━━━#b━精品店#d━━━━━━━━━┓#k\r\n\r\n";
txt += "\t\t\t\t\t　" + icon1 + "\r\n\r\n";
txt += "　　　　" + icon0 + "#r 管理员提示：请选择你需购买的道具,一个核心是1000个核心碎片 " + icon0 + "#k\r\n\r\n";
txt += "#d ┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
for (var i = 0; i < itemlist.length; i++) {
	txt += "#L" + i + "##v" + itemlist[i] + "#  ";
	if (i != 0 && (i + 1) % 5 == 0) {
		txt += "\r\n";
	}
}
let selects=npc.askMenuS(txt);

let buynum=npc.askNumber("请输入你请你输入想要购买的数量\r\n\r\n#d当前购买的道具 [ #z" + itemlist[selects][0] + "# ] \r\n\r\n#r - 1个需要 [ " + itemlist[selects][1] + " ] 点卷\r\n ", 1, 0, 100000);

let sel =npc.askYesNo("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉 [ " + (buynum * itemlist[selects][1]) + " ] 点卷");

if (player.getCashShopCurrency(1) >= buynum * itemlist[selects][1]) {
	player.modifyCashShopCurrency(1, -buynum * itemlist[selects][1]);
	player.gainItem(itemlist[selects][0], buynum);
	npc.say("购买成功了！");
	
} else {
	npc.say("对不起，你没有足够的点卷");
	
}
