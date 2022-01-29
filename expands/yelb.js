var status = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var giftContent = Array(
	Array("月光箱子（更换最新月光宠物）", 1, Array(
		Array(2630127, 1)
	)),
	Array("link联盟神器(请使用大号购买)", 15, Array(
		Array(2434364, 1)
	)),
	Array("首充箱子（首充戒指补领）", 1, Array(
		Array(2430682, 1)
	)),
	Array("删除角色箱子(操作不可撤回，谨慎！)", 1, Array(
		Array(2439178, 1)
	)),
	Array("X卷轴x1", 50, Array(
		Array(2434666, 1)
	)),

	Array("V卷自选x1", 80, Array(
		Array(2435824, 1)
	)),
	Array("究极黑暗自选卷轴x1", 150, Array(
		Array(2431578, 1)
	)),
	Array("百宝转蛋卷x1", 1, Array(
		Array(5220040, 1)
	)),
	Array("20星强化卷x1", 500, Array(
		Array(2049376, 1)
	)),
	Array("15星强化卷x1", 100, Array(
		Array(2049384, 1)
	)),
	Array("特米纳斯武器（自选)", 1000, Array(
		Array(2430761, 1)
	)),
	Array("古董品图腾套装", 600, Array(
		Array(1202261, 1),
		Array(1202260, 1),
		Array(1202262, 1)
	)),

	Array("土豪喇叭（霸屏利器）", 20, Array(
		Array(2630205, 1)
	)),
	Array("高级智能机器人（男）", 50, Array(
		Array(1662102, 1)
	)),
	Array("高级智能机器人（女）", 50, Array(
		Array(1662103, 1)
	)),

	Array("毁灭军团盾（白毛最强副手）", 500, Array(
		Array(1099015, 1)
	)),
	Array("高科技电光标（最强飞镖）", 50, Array(
		Array(2070019, 1)
	)),
	Array("平衡之怒（个性飞镖）", 50, Array(
		Array(2070018, 1)
	)),
	Array("无限飞镖（最帅飞镖）", 50, Array(
		Array(2070024, 1)
	)),
	Array("高科技穿甲弹（最强子弹）", 50, Array(
		Array(2330007, 1)
	)),
	Array("圣诞大星（20-25星材料）", 20, Array(
		Array(3992025, 1)
	)),
	Array("品克缤称号", 50, Array(
		Array(3700550, 1)
	)),
	
	Array("极品属性称号", 300, Array(
		Array(3700440, 1)
	)),
	Array("银河副手自选", 100, Array(
		Array(2430893, 1)
	)),
	Array("超越保护戒指（白毛神器）", 100, Array(
		Array(1113044, 1)
	)),
	Array("黄金休彼德蔓徽章II", 300, Array(
		Array(1182017, 1)
	)),
	Array("战神祝福戒指", 200, Array(
		Array(1113020, 1)
	)),
	Array("独眼巨人之眼Lv.3", 300, Array(
		Array(1022226, 1)
	)),
	Array("校长织田徽章", 500, Array(
		Array(1162035, 1)
	)),
	Array("次等级心脏", 350, Array(
		Array(1672040, 1)
	)),
	Array("次等级心脏", 350, Array(
		Array(1672073, 1)
	)),
	
	Array("战斗机器人(女)", 300, Array(
		Array(1662072, 1)
	)),
	Array("战斗机器人(男)", 300, Array(
		Array(1662073, 1)
	)),
	
	Array("属性时装", 50, Array(
		Array(1082553, 1)
	)),
	Array("探险之黑暗暴击戒指", 200, Array(
		Array(1113069, 1)
	)),
	Array("未来机器人(男)", 100, Array(
		Array(1662033, 1)
	)),
	Array("未来机器人(女)", 100, Array(
		Array(1662034, 1)
	)),
	Array("未来机器人心脏 : 最高级", 200, Array(
		Array(1672039, 1)
	))

);

var giftId = -1;
var gifts = null;
var price = 999;

var text = "";
text = "" + iconHR + "尊敬的玩家#b#h ##k,欢迎来到#b#e冒险岛土豪商城！#n#k\r\n";
text += "" + icon2 + "您当前余额为：#r" + getHyPay() + "#k " + "\t\t#k\r\n";
text += "" + icon2 + "请注意，百宝转蛋卷一次性购买不要超过10张。损失不补哦 " + "\t\t#k\r\n";
text += "" + icon2 + "#e余额可以通过充值获得哦~#k " + "\t\t#k\r\n";
for(var key in giftContent) {
	text += "#b#L" + key + "#购买【#r#e" + giftContent[key][0] + "#n#b】 #e#d需要" + giftContent[key][1] + "余额#n#b#l#k\r\n";
}
let selection = npc.askMenuS(text);
giftId = parseInt(selection);
price = giftContent[giftId][1];
gifts = giftContent[giftId][2];
let number = npc.askNumber("请选择要购买的数量", 1, 1, getHyPay() / price);
price = number * price;
var text = "#r#e" + giftContent[giftId][0] + "#n#b\r\n内容包含如下：\r\n";
for(var key in gifts) {
	var itemId = gifts[key][0];
	var getItemQuantity = gifts[key][1];
	var itemRemarks = "";
	if(null != gifts[key][2]) {
		itemRemarks = icon3 + "(" + gifts[key][2] + ")" + icon3;
	}

	text += "#i" + itemId + ":##b" + (itemId == -1 ? "赠送点券" : "#z" + itemId + "#") + "#k #rx " + getItemQuantity * number + "#k\t #r" + itemRemarks + "\r\n";
}

text += "\r\n#d是否花费#e#r" + price + "#n#d余额购买" + number + "个该礼包？#k";
let sel = npc.askYesNo(text);

if(sel == 1) {
	if(player.getFreeSlots(1) < 5) {
		npc.say("请保证每个栏位都有5个位置以上~。");
	}
	if(getHyPay() < price) {
		npc.say("您的余额不足,请先充值后再购买。");
	} else {
		if(itemId == 5220040) {
			player.gainItem(itemId, number);
		} else if(itemId == 2070019) {
			player.gainItem(itemId, number * 9999);
		} else if(itemId == 2330007) {
			player.gainItem(itemId, number * 9999);
		} else if(itemId == 2070018) {
			player.gainItem(itemId, number * 9999);
			
		}  else {
			for(var i = 0; i < number; i++) {
				for(var key in gifts) {
					var itemId = gifts[key][0];
					var getItemQuantity = gifts[key][1];

					player.gainItem(itemId, getItemQuantity);

				}

			}
		}

		addHyPay(price);
		npc.say("恭喜您,购买成功！");
		//cm.getMap().startMapEffect("[余额商城] 土豪玩家 " + player.getName() + " 从商城里掏走了价值" + price + "的[" + giftContent[giftId][0] + "]装备！！！", 5120012);
		//cm.worldSpouseMessage(1, "[现金点商城] 土豪玩家 " + player.getName() + " 从商城里掏走了价值" + price + "的[" + giftContent[giftId][0] + "]装备！！！");

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
	var sql = "update hypay set pay=pay-?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}