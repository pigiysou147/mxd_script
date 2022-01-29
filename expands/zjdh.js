/*原创作者AND358122354

	优化版中介兑换
*/
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var item;
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化
var item;
var item1 = Array( //点卷：中介
	Array(1, 1000),
	Array(1, 950)
); //这些为普通玩家比例
var item2 = Array(
	Array(1, 1000),
	Array(1, 980)
); //这些为会员玩家比例

var TXT = "";
if(player.hasItem(2430865,1)) {
	TXT += "#r#e★★★★★★★★★『会员玩家』★★★★★★★★★\r\n\r\n";
	item = item2;
} else {
	TXT += "#r#e☆☆☆☆☆☆☆☆☆『普通玩家』☆☆☆☆☆☆☆☆☆\r\n\r\n";
	item = item1;
}
TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
TXT += "#d尊敬的「#h #」 请选择您需办理的业务\r\n";
TXT += "#d行情：点卷 [#r " + item[0][0] + "：" + item[0][1] + " #d] 反向 [#r " + item[1][0] + "：" + item[1][1] + " #d] 中介\r\n"
TXT += "#r当前点卷数量：#d" + player.getCashShopCurrency(1) + "#r\r\n";
TXT += "当前货币数量：#d" + player.getAmountOfItem(4031997) + "\r\n";
TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n\r\n";
TXT += "#L0##i4031997#点卷购#z4031997# [中介通用货币]#l\r\n";
TXT += "#L1##i4031997##z4031997#购点卷 [中介通用货币]#l\r\n\r\n";
let selection = npc.askMenuS(TXT);
let number;
if(selection == 1) {
	

	number = npc.askNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需购买点卷的数量 [ " + item[1][0] + "：" + item[1][1] + " ]\r\n\r\n", 1, 1, player.getAmountOfItem(4031997));
	if(player.hasItem(4031997, number)) {
		player.loseItem(4031997, (number * item[selection][0]));
		player.modifyCashShopCurrency(1, item[selection][1] * number);
		npc.say("#r#e[ #h # ]恭喜您\r\n\r\n您成功用#z4031997# #v4031997# x #r" + (number * item[selection][0]) + " #k\r\n购买了#r " + (item[selection][1] * number) + " #k点卷");
		npc.broadcastNotice( "[ 金融中心 ] 恭喜 " + player.getName() + " 用 " + (number * item[selection][0]) + " 枚中介币购买了 " + (item[selection][1] * number) + " 点卷 [ -100 手续费用 ]");

	} 
} else if(selection == 0) {
	
	number = npc.askNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需购买#z4031997#的数量 [ " + item[0][0] + "：" + item[0][1] + " ]\r\n\r\n", 1, 1, player.getCashShopCurrency(1) / item[0][0]);
	if(!player.canGainItem(4031997, number)) {
		npc.say("#e#r你背包“其它”空间不足!请至少有" + number + "个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!");

	} else if(player.getCashShopCurrency(1) >= number * item[selection][0]) {
		player.modifyCashShopCurrency(1, -number * item[selection][1]);
		player.gainItem(4031997, (number * item[selection][0]) );
		npc.say("#r#e[ #h # ] 恭喜您\r\n\r\n您成功用#r " + (number * item[selection][1]) + " 点卷\r\n购买了#z4031997# #i4031997# x #r" + (number * item[selection][0]))
		npc.broadcastNotice( "[ 金融中心 ] 恭喜 " + player.getName() + " 用 " + (number * item[selection][1]) + " 点卷购买了 " + (number * item[selection][0]) + " 枚中介币 ");

	}
	

}