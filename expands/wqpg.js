//中介币的物品ID
var zjbid = 4310014;
var zmtid = 4310085;
var zyhzid = 4033356;
var zfzbid = 4310036;
var zmtNum = Math.floor(Math.random() * 100001 + 100000);
var zyhzNum = Math.floor(Math.random() * 70001 + 30000);
var zjbNum = Math.floor(Math.random() * 1300001 + 700000);
var yeNum = Math.floor(Math.random() * 3000000 + 2000000);

var yuepogong = Math.floor(Math.random() * 3000000 + 5000000); //50余额破功 目前代表 随机100~600 范围
var yuepogong2 = Math.floor(Math.random() * 20000000 + 60000000); //500余额破功 目前代表 随机100~600 范围

var 中介1 = Math.floor(Math.random() * 100000 + 300000); //50余额破功 目前代表 随机100~600 范围
var 中介2 = Math.floor(Math.random() * 2000000 + 3000000); //50余额破功 目前代表 随机100~600 范围

var zjNum = 1000000;
var zfzNum = 1;

var txt = "";
txt += "亲爱的#r#h ##k您好，我是伤害上限突破系统:\r\n#b\r\n\r\n";
txt += "#L999#一键批量使用突破石#v2614005##l\r\n";
txt += "#L5#[武器]雪花币突破 #b(#k2000雪花币:100W~突破100E以上800W#b)#l\r\n";
txt += "#L4#[武器]余额突破 #b(#k50余额:500W~800W#b)#l\r\n";
txt += "#L2#[武器]余额突破 #b(#k500余额:6000W~8500W#b)#l\r\n";
txt += "#L7#[武器]余额突破 #b(#k500余额:6E~6E8#b 需要突破100E以上)#l\r\n#l"
txt += "#L8#[武器]余额突破 #b(#k5000余额:60E~68E#b 需要突破100E以上)#l\r\n#l"
let selection = npc.askMenuS(txt);
let yes = 0;
if(selection == 999) {
	player.runScript("韵_一键使用突破石");
} else if(selection == 2) {
	yes = npc.askYesNo("是否花费500#b余额#k对当前穿戴的武器进行伤害上限突破？");
} else if(selection == 4) {
	yes = npc.askYesNo("是否花费50#b余额#k对当前穿戴的武器进行伤害上限突破？");
} else if(selection == 5) {
	yes = npc.askYesNo("是否花费2000个#b#v4310014##k对当前穿戴的武器进行伤害上限突破？");
} else if(selection == 7) {
	yes = npc.askYesNo("是否花费500#b余额#k对当前穿戴的武器进行伤害上限突破？");
}else if(selection == 8) {
	yes = npc.askYesNo("是否花费5000#b余额#k对当前穿戴的武器进行伤害上限突破？");
}
var wq = player.getInventorySlot(-1, -11);
if(yes == 1) {
	if(selection == 2) {
		if(getHyPay() > 499) {
			if(wq != null) {
				addHyPay(500);
				wq.setLimitBreak(wq.getLimitBreak() + yuepogong2);
				player.updateItem(-11, wq);
				npc.broadcastNoticeWithoutPrefix("[伤害突破] 玩家 " + player.getName() + " 使用 [ 500 ]余额 让武器伤害上限突破成功 本次追加 " + yuepogong2 + " 伤害值 。");

				npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + yuepogong2 + "#b.");
			} else {
				npc.say("#b突破失败.\r\n系统未检测到角色身上装备武器或已到达21E上限.");
			}

		} else {
			npc.say("#b突破失败.\r\n需要 500余额 才可以突破.");

		}
	} else if(selection == 4) {
		if(getHyPay() > 49) {
			if(wq != null) {
				addHyPay(50);
				wq.setLimitBreak(wq.getLimitBreak() + yuepogong);
				player.updateItem(-11, wq);
				npc.broadcastNoticeWithoutPrefix("[伤害突破] 玩家 " + player.getName() + " 使用 [ 50 ]余额 让武器伤害上限突破成功 本次追加 " + yuepogong + " 伤害值 。");
				npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + yuepogong + "#b.");
			} else {
				npc.say("#b突破失败.\r\n系统未检测到角色身上装备武器或已到达21E上限.");
			}

		} else {
			npc.say("#b突破失败.\r\n需要 50余额 才可以突破.");

		}
	} else if(selection == 5) {
		let number=npc.askNumber("请输入要突破的次数。（每次消耗2000个#v4310014# 哦,最大次数为10次 ）",1,1,10);
		if(player.getAmountOfItem(4310014) >= 2000*number) {
			var 雪花突破 = 1000000*number; //50余额破功 目前代表 随机100~600 范围
			if(wq.getLimitBreak() >= 10000000000) {
				雪花突破 =8000000*number;
			} 
			
			if(wq != null) {
				wq.setLimitBreak(wq.getLimitBreak() + 雪花突破);
				player.updateItem(-11, wq);
				player.loseItem(4310014,2000*number);
				npc.broadcastNoticeWithoutPrefix("[伤害突破] 玩家 " + player.getName() + " 使用 [ "+(2000*number)+" ]雪花币 让武器伤害上限突破成功 本次追加 " + 雪花突破 + " 伤害值 。");
				npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + 雪花突破 + "#b.");
			} else {
				npc.say("#b突破失败.\r\n系统未检测到角色身上装备武器.");
			}

		} else {
			npc.say("#b突破失败.\r\n需要 "+(2000*number)+"雪花币 才可以突破.");

		}
		

	}else if(selection == 7) {
		if(wq.getLimitBreak() < 10000000000) {
			npc.say("佩戴武器破功必须达到100E才能使用本功能");

		} else {
			if(getHyPay() > 500) {
				var 余额破功100亿 = Math.floor(Math.random() * 100000000 + 600000000); //50余额破功 目前代表 随机100~600 范围
				if(wq != null) {
					addHyPay(500);
					wq.setLimitBreak(wq.getLimitBreak() + 余额破功100亿);
					player.updateItem(-11, wq);
					npc.broadcastNoticeWithoutPrefix("[伤害突破] 玩家 " + player.getName() + " 使用 [ 500 ]余额 让武器伤害上限突破成功 本次追加 " + 余额破功100亿 + " 伤害值 。");
					npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + 余额破功100亿 + "#b.");
				} else {
					npc.say("#b突破失败.\r\n系统未检测到角色身上装备武器.");
				}

			} else {
				npc.say("#b突破失败.\r\n需要 500余额 才可以突破.");

			}
		}

	}else if(selection == 8) {
		if(wq.getLimitBreak() < 10000000000) {
			npc.say("佩戴武器破功必须达到100E才能使用本功能");

		} else {
			if(getHyPay() > 5000) {
				var 余额破功100亿 = Math.floor(Math.random() * 1000000000 + 6000000000); //50余额破功 目前代表 随机100~600 范围
				if(wq != null) {
					addHyPay(5000);
					wq.setLimitBreak(wq.getLimitBreak() + 余额破功100亿);
					player.updateItem(-11, wq);
					npc.broadcastNoticeWithoutPrefix("[伤害突破] 玩家 " + player.getName() + " 使用 [ 5000 ]余额 让武器伤害上限突破成功 本次追加 " + 余额破功100亿 + " 伤害值 。");
					npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + 余额破功100亿 + "#b.");
				} else {
					npc.say("#b突破失败.\r\n系统未检测到角色身上装备武器.");
				}

			} else {
				npc.say("#b突破失败.\r\n需要 5000余额 才可以突破.");

			}
		}

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