/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：新手5天任务
 *  @Author ajing
 */

var regTime;
var nowTime = new Date().getTime();
var flag = Array(
	0,
	0,
	0,
	0,
	0
);
var lq1 ="#fUI/UIWindow2.img/bohabManager/enchant/BtEnchant/normal/0#"
var lq2 ="#fUI/UIWindow2.img/bohabManager/enchant/BtEnchant/disabled/0#"
var text = "		萌新5天任务\r\n" ;
text += "按照注册时间的天数来算\r\n";
text += "一个账号只能做一次\r\n";
text += "当天的任务当天做完哦\r\n";
text += "任务全部达成会有额外奖励哦\r\n";
for(var i = 1; i < 6; i++) {
	text += "#L" + i + "##r#b第[" + i + "]天任务   状态:" + isOver(i) + "#l\r\n";
}

let selection = npc.askMenu(text);
var txt = "任务要求:\r\n";
let sel;
if(selection == 1) {
	txt += "24小时内到达150级并且加入一个家族\r\n";
	txt += "奖品清单:\r\n";
	txt += "#v4310028#X30\r\n";
	txt += "#v2048706#X5\r\n";
	txt += "#v5062009#X100\r\n";
	sel = npc.askYesNoS(txt);
} else if(selection == 2) {
	txt += "24小时内到击杀黑龙\r\n";
	txt += "奖品清单:\r\n";
	txt += "#v4001714#X10\r\n";
	txt += "#v2049758#X2\r\n";
	txt += "#v5062009#X100\r\n";
	txt += "#v5062500#X100\r\n";
	sel = npc.askYesNoS(txt);
} else if(selection == 3) {
	txt += "24小时内拥有自己的第一件SS潜能装备 \r\n[请将装备放在装备栏第一格]\r\n";
	txt += "奖品清单:\r\n";
	txt += "#v5062024#X20\r\n";
	txt += "#v5152053#X50\r\n";
	txt += "#v5150040#X50\r\n";
	sel = npc.askYesNoS(txt);
} else if(selection == 4) {
	txt += "24小时内 击杀一次班雷昂\r\n";
	txt += "奖品清单:\r\n";
	txt += "#v2049372#X2\r\n";
	txt += "#v4031997#X30\r\n";
	sel = npc.askYesNoS(txt);
} else if(selection == 5) {
	txt += "24小时内 达到210级 并且拥有一个5阶翅膀\r\n";
	txt += "奖品清单:\r\n";
	txt += "#v2049758#X5\r\n";
	txt += "#v2048704#X10\r\n";
	txt += "#v2614002#X2\r\n";
	sel = npc.askYesNoS(txt);
}

if(selection == 1) {
	if(player.getPQLog("新手第一天任务") > 0) {
		npc.say("你已经领取过该任务的奖励了");
	} else if(player.getLevel() > 149 && player.getGuildId() != 0) {
		player.gainItem(4310028, 30);
		player.gainItem(2048706, 5);
		player.gainItem(5062009, 100);
		player.addPQLog("新手第一天任务", 1, 365);
		npc.say("你完成了第一天的任务");
	} else {
		npc.say("你还没完成任务");
	}
} else if(selection == 2) {
	if(player.getPQLog("新手第二天任务") > 0) {
		npc.say("你已经领取过该任务的奖励了");
	} else if(player.getPQLog("新手黑龙") != 0) {
		player.gainItem(2049758, 2);
		player.gainItem(4001714, 30);
		player.gainItem(5062009, 100);
		player.gainItem(5062500, 100);
		player.addPQLog("新手第二天任务", 1, 365);
		npc.say("你完成了新手第二天任务");
	} else {
		npc.say("你还没完成任务");
	}
} else if(selection == 3) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("请把SS潜能的装备放在装备栏第一格哦~！！！");

	} else {
		if(flag[selection - 1] == 1) {
			npc.say("您的任务已超时");
		} else if(player.getPQLog("新手第三天任务") > 0) {
			npc.say("你已经领取过该任务的奖励了");
		} else if(item.getGrade() == 20) {
			player.gainItem(5062024, 20);
			player.gainItem(5152053, 50);
			player.gainItem(5150040, 50);
			player.addPQLog("新手第三天任务", 1, 365);
			npc.say("你完成了新手第三天任务");
		} else {
			npc.say("你还没完成任务");
		}
	}

} else if(selection == 4) {
	if(player.getPQLog("新手第四天任务") > 0) {
		npc.say("你已经领取过该任务的奖励了");
	} else if(player.getPQLog("新手狮子") > 0) {
		player.gainItem(2049372, 2);
		player.gainItem(4031997, 30);
		player.addPQLog("新手第四天任务", 1, 365);
		npc.say("你完成了新手第四天任务");
	} else {
		npc.say("你还没完成任务");
	}
} else if(selection == 5) {
	if(player.getPQLog("新手第五天任务") > 0) {
		npc.say("你已经领取过该任务的奖励了");
	} else if(player.getPQLog("披风进阶") >= 5) {
		player.gainItem(2049758, 5);
		player.gainItem(2048704, 10);
		player.gainItem(2614002, 2);

		player.addPQLog("新手第五天任务", 1, 365);
		npc.say("你完成了新手第五天任务");
	} else {
		npc.say("你还没完成任务");
	}
}

function getCreateTime(accountId) {
	var sql = "select createdat from accounts where id=?";

	var result = player.customSqlResult(sql, accountId);
	return result.get(0).get("createdat");
}

function isOver(day) {
	//regTime = java.sql.Timestamp.valueOf(getCreateTime(player.getAccountId())).getTime();
	var days = 7;
	var result = "";
	switch(day){
		case 1:
		if(player.getPQLog("新手第一天任务")>0){
			result = "#r任务已完成#k";
			
		}else{
			if(days > 7) {
				result = lq2;
				flag[day - 1] = 1;
			} else {
				result = lq1;
			}
		}
		
		break;
		case 2:
		if(player.getPQLog("新手第二天任务")>0){
			result = "#r任务已完成#k";
			
		}else{
			if(days > 7) {
				result = lq2;
				flag[day - 1] = 1;
			} else {
				result = lq1;
			}
		}
		
		break;
		case 3:
		if(player.getPQLog("新手第三天任务")>0){
			result = "#r任务已完成#k";
			
		}else{
			if(days > 7) {
				result = lq2;
				flag[day - 1] = 1;
			} else {
				result = lq1;
			}
		}
		
		break;
		case 4:
		if(player.getPQLog("新手第四天任务")>0){
			result = "#r任务已完成#k";
			
		}else{
			if(days > 7) {
				result = lq2;
				flag[day - 1] = 1;
			} else {
				result = lq1;
			}
		}
		
		break;
		case 5:
		if(player.getPQLog("新手第五天任务")>0){
			result = "#r任务已完成#k";
			
		}else{
			if(days > 7) {
				result = lq2;
				flag[day - 1] = 1;
			} else {
				result = lq1;
			}
		}
		
		break;
		
		
	}
	
	return result;
}