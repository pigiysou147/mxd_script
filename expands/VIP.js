var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子蓝
var eff1 = "#fEffect/CharacterEff/1112905/0/1#"; //小红心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var rmb = 0;
rmb = getHyPay();

var selStr = "  \t\t\t\t#d您当前的余额为：#r" + rmb + " #d #k\r\n\r\n\r\n";
selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
selStr += "\t\t\t\t#r" + tz +      			"会员等级" + tz + "#k\r\n";
selStr += "#L2##b" + aaa + " 超级实惠理财服务130余额/周[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
selStr += "#L3##b" + aaa + " 超级实惠理财服务300余额/月[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
selStr += "#L4##b" + aaa + " 超级实惠理财服务1500余额/永久[#r#e火爆#b#n点击查看]#l#k\r\n\r\n";
selStr += "" + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + " " + eff1 + "";
let selection = npc.askMenuS(selStr);

if(player.hasItem(2436363, 1)) {
	npc.say("你的会员还没到期~请到期之后再购买哦~");
} else {
	 if(selection == 3) {
		//月会员
		var txt = "- #e#d超级实惠理财服务一月权：#n#k\r\n\r\n";
		txt += "- #e#r提示:#k#n  #r理财神秘盒子 300余额/1月#k\r\n\r\n";
		txt += "- #e#d办理等级：#n#k\r\n\t\t#b钻石VIP \r\n";
		txt += "- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您300余额，每天享有：\r\n【三倍经验/双爆】【每日1000W金币 10000点卷】\r\n【会员折扣洗血】【每日BOSS重置】更有每日会员抽奖。\r\n\r\n";
		txt += "还有一个全属性100，攻击和魔攻都为100的奖杯#v1142742\r\n\r\n";
		txt += "- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k";
		let sel = npc.askYesNo(txt);
		if(sel == 1) {
			if(rmb < 300) {
				npc.say("充值金额不够 ");
			} else {

				let newItem = player.makeItemWithId(2436363);
				newItem.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * 30);
				player.gainItem(newItem);

				addHyPay(300);
				player.addPQLog("月会员", 1, 30);
				npc.say("恭喜您成功购买一个月黄金理财服务.");
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 成功成为了回忆岛的尊贵月费会员。", 10000);
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵月费会员。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵月费会员。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵月费会员。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵月费会员。");
			}
		}

	} else if(selection == 4) {
		//永久会员
		var txt = "- #e#d超级实惠理财服务永久权：#n#k\r\n\r\n";
		txt += "- #e#r提示:#k#n  #r理财神秘盒子 1500余额/永久#k\r\n\r\n";
		txt += "- #e#d办理等级：#n#k\r\n\t\t#b王者VIP \r\n";
		txt += "- #e#d详细说明：#n#k\r\n\t\t办理后会扣掉您1500余额，每天享有：\r\n【三倍经验/双爆】【每日余额返点】【每日1000W金币 】\r\n【会员折扣洗血】【每日BOSS重置+10000点卷】更有每日会员抽奖。\r\n\r\n";
		txt += "还有一个全属性300，攻击和魔攻都为300的奖杯#v1143059\r\n\r\n";
		txt += "- #e#d管理提示：#n#b点是进行购买。点否返回上一页.#k"
		let sel = npc.askYesNo(txt);
		if(sel == 1) {
			if(rmb < 1500) {
				npc.say("充值金额不够 ")
			} else {
				player.gainItem(2436363, 1);
				addHyPay(1500);
				player.addPQLog("年会员", 1, 999);
				npc.say("恭喜您成功购买永久黄金理财服务.");
				npc.broadcastWeatherEffectNotice(37, "恭喜玩家 " + player.getName() + " 成功成为了回忆岛的尊贵永久会员。", 10000);
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵永久会员。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵永久会员。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵永久会员。");
				npc.broadcastNotice("[系统公告] : 恭喜 " + player.getName() + " 成功成为了回忆岛的尊贵永久会员。");
			}
		}
	}
}

function getHyPay() {

	var result = player.customSqlResult("select pay from hypay where accountId=?", player.getAccountId());

	return result.get(0).get("pay");

}

function addHyPay(price) {

	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";

	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}