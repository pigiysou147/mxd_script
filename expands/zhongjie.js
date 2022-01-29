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
	
	item = item2;
} else {
	
	item = item1;
}
//TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
//TXT += "#d尊敬的「#h #」 请选择您需办理的业务\r\n";
TXT += "#d行情：点卷 [#r " + item[0][0] + "：" + item[0][1] + " #d] 反向 [#r " + item[1][0] + "：" + item[1][1] + " #d] 中介\r\n"

TXT += "当前#b余额#k数量：#d" + getHyPay() + "\r\n";
TXT += "#r当前点卷数量：#d" + player.getCashShopCurrency(1) + "#r\r\n";
TXT += "当前货币数量：#d" + player.getAmountOfItem(4031997) + "\r\n";
//TXT += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
TXT += "#L0##i4031997#点卷购#z4031997# [中介通用货币]#l\r\n";
TXT += "#L1##i4031997##z4031997#购点卷 [中介通用货币]#l\r\n";
TXT += "#L2# 余额购买点券 [#r余额可以通过充值获取哦#k]#l\r\n";
TXT += "#L3#金币购#i4001715##z4001715# [用于直充交易]#l\r\n";
//TXT += "#L4##v4032056#购#i4031997##z4031997# [修正点券币]#l\r\n";
let selection = npc.askMenuS(TXT);
let number;
if(selection == 0) {
	
	number = npc.askNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需购买#z4031997#的数量 [ " + item[0][0] + "：" + item[0][1] + " ]\r\n\r\n", 1, 1, player.getCashShopCurrency(1) / item[0][1]);
	if(!player.canGainItem(4031997, number)) {
		npc.say("#e#r你背包“其它”空间不足!请至少有" + number + "个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!");

	} else if(player.getCashShopCurrency(1) >= number * item[selection][0]) {
		player.modifyCashShopCurrency(1, -number * item[selection][1]);
		player.gainItem(4031997, (number * item[selection][0]) );
		npc.say("#r#e[ #h # ] 恭喜您\r\n\r\n您成功用#r " + (number * item[selection][1]) + " 点卷\r\n购买了#z4031997# #i4031997# x #r" + (number * item[selection][0]))
		npc.broadcastNotice( "[ 金融中心 ] 恭喜 " + player.getName() + " 用 " + (number * item[selection][1]) + " 点卷购买了 " + (number * item[selection][0]) + " 枚中介币 ");

	}
}else if(selection==1)  {
	

	number = npc.askNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需购买点卷的数量 [ " + item[1][0] + "：" + item[1][1] + " ]\r\n\r\n", 1, 1, player.getAmountOfItem(4031997));
	if(player.hasItem(4031997, number)) {
		player.loseItem(4031997, (number * item[selection][0]));
		player.modifyCashShopCurrency(1, item[selection][1] * number);
		npc.say("#r#e[ #h # ]恭喜您\r\n\r\n您成功用#z4031997# #v4031997# x #r" + (number * item[selection][0]) + " #k\r\n购买了#r " + (item[selection][1] * number) + " #k点卷");
		npc.broadcastNotice( "[ 金融中心 ] 恭喜 " + player.getName() + " 用 " + (number * item[selection][0]) + " 枚中介币购买了 " + (item[selection][1] * number) + " 点卷 [ -100 手续费用 ]");

	} 
}else if(selection ==2){
	var yue = getHyPay();
	number = npc.askNumber("#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你想要兑换的余额的数量 [#r1余额:1500点券#k ]\r\n\r\n", 1, 1, yue);
	if(number>yue){
		npc.say("余额不足，请重新输入");
	}else{
		addHyPay(number);
		player.modifyCashShopCurrency(1,number*1500 );
		npc.broadcastNotice( "[ 金融中心 ] 恭喜 " + player.getName() + " 用 "+number+"余额购买了 " + number*1500 + " 点卷    [真土豪  ]");

		npc.say("购买成功,你购买了");
	}
	
}else if(selection ==3){
	
	number = npc.askNumber("#r#e\r\n\r\n请入你想要兑换的定居币的数量 [#r1E金币:1定居币#k 注意：需要扣除4%的交易手续费]\r\n\r\n", 1, 1, 100);
	var need =number*104000000;
	if(!player.hasMesos(need)){
		npc.say("金币不足，需要金币："+need+"请重新输入");
	}else{
		if(!player.canGainItem(4001715, number)) {
			npc.say("#e#r你背包“其它”空间不足!请至少有" + number + "个空间以上.\r\n如果上面有出现小数的话请入位!\r\n如：出现<至少有7.5个空间以上>那么您就需要留8个空间!");
	
		} else{
			player.loseMesos(need);
			player.gainItem(4001715,number);
			
			npc.say("购买成功");
		}
		
	}
	
}else if(selection ==4){
	
	number = npc.askNumber("#r#e\r\n\r\n请入你想要兑换的蘑菇金币币的数量 [#r1#v4032056#:1#v4031997##k ]\r\n\r\n", 1, 1, 100);
	var need =number;
	if(player.getAmountOfItem(4032056)<need){
		npc.say("四叶草币不足，需要币："+need+"请重新输入");
	}else{
		player.loseItem(4032056,need);
		player.gainItem(4031997,number);
		
		npc.say("购买成功");
	}
	
}
	

function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}