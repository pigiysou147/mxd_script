/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:Day Quest
 *  
 *  @Author Jackson 
 */

/* global java, cm */

var cal = java.util.Calendar.getInstance();
var Day_Of_Week = cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;

var dayInfo = Array(=
	"周一的特别任务",
	"周二的特别任务",
	"周三的特别任务",
	"周四的特别任务",
	"周五的特别任务",
	"周六的特别任务",
	"周日的特别任务"
);
var tupo=0;
var str = "";
if(Day_Of_Week == 0) {
	Day_Of_Week = 7;
}
str += "\r\n#e小子,我手头上有巨量你想要的#v2614002#突破石！\r\n#i" + 3800157 + ":#~#i" + 3800163 + ":#之间都会发布危险的任务\r\n今天是#r#e" + getDayDes(Day_Of_Week) + "#k#n 如果你能帮我找到需要的东西，那么我将可以给分你一些突破石！请打开地图#i" + 3800529 + ":#，去幸运百货里买个冒险岛任意门，搜索关键词想去哪里点哪里~\r\n";
str += "#e#r#L0#开始今天的任务#l\r\n";
str += "#e#b#L1#查看今天任务报酬#l\r\n\r\n ";
let selection = npc.askMenu(str);
str = "#b小子【#h #】听我说 #r" + dayInfo[Day_Of_Week - 1] + " #b，如果你能收集够如下物品指定的数量，我就给你几颗突破石！\r\n";
if(selection == 1) {
	var detial = "";
	switch(Day_Of_Week) {
		case 1: //星期1
			detial += "#e#r【周一的特别任务】\r\n";
			detial += "#e#b收集指定的物品后，你可以获取：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x3个，点券x5000";
			break;
		case 2:
			detial += "#e#r【周二的特别任务】\r\n";
			detial += "#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x3个，点券x5000";
			break;
		case 3:
			detial += "#e#r【周三的特别任务】\r\n";
			detial += "#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x4个，点券x5000";
			break;
		case 4:
			detial += "#e#r【周四的特别任务】\r\n";
			detial += "#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x4个, 点券x5000";
			break;
		case 5:
			detial += "#e#r【周五的特别任务】\r\n";
			detial += "#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x4个，点券x5000";
			break;
		case 6:
			detial += "#e#r【今天没啥卵事，小子便宜你了 陪我喝一杯直接给你把】\r\n";
			detial += "#e#b可以直接领取#i" + 2614002 + ":# #z" + 2614002 + "#x2个";
			break;
		case 7: //星期天
			detial += "#e#r【悲催的周日】\r\n";
			detial += "#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x6个，点券x10000";
			break;
	}
	npc.say(detial);
} else {
	switch(Day_Of_Week) {
		case 1:
			str += "#e#b#i" + 4000016 + ":# #z" + 4000016 + "# x500个\r\n";
			str += "#e#r注意：物品你可以通过怪物：红蜗牛获取：\r\n";
			str += "怪物出没地点：【小道1】【小道2】【森林的起点】\r\n";
			str += "当前拥有#i" + 4000016 + ":#数量：" + player.getAmountOfItem(4000016) + " / 500个\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
		case 2:
			str += "#e#b#i" + 4000004 + ":# #z" + 4000004 + "# x500个\r\n";
			str += "#e#r注意：物品你可以通过怪物：绿水灵获取：\r\n";
			str += "怪物出没地点：【接近风的地方】【发光森林通道】\r\n";
			str += "当前拥有#i" + 4000004 + ":#数量：" + player.getAmountOfItem(4000004) + " / 500个\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
		case 3:
			str += "#e#b#i" + 4000182 + ":# #z" + 4000182 + "# x500个\r\n";
			str += "#e#r注意：物品你可以通过怪物：骨骸鱼获取：\r\n";
			str += "怪物出没地点：【深海峡谷2】\r\n";
			str += "当前拥有#i" + 4000182 + ":#数量：" + player.getAmountOfItem(4000182) + " / 500个\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
		case 4:
			str += "#e#b#i" + 4000273 + ":# #z" + 4000273 + "# x500个\r\n";
			str += "#e#b#i" + 4000274 + ":# #z" + 4000274 + "# x500个\r\n";
			str += "#e#r注意：物品你可以通过怪物：骷髅龙获取：\r\n";
			str += "【神木村：主巢穴山峰（需要星之力 65星以上）】\r\n";
			str += "当前拥有#i" + 4000273 + ":#数量：" + player.getAmountOfItem(4000273) + " / 500个\r\n";
			str += "当前拥有#i" + 4000274 + ":#数量：" + player.getAmountOfItem(4000274) + " / 500个\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
		case 5:
			str += "#e#b#i" + 4000834 + ":# #z" + 4000834 + "# x500个\r\n";
			str += "#e#r注意：物品你可以通过怪物：变形的铁面怪人获取：\r\n";
			str += "【荒废发掘地区4】\r\n";
			str += "当前拥有#i" + 4000834 + ":#数量：" + player.getAmountOfItem(4000834) + " / 500个\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
		case 6:
			str += "#b玩家【#h #】今天没啥卵事，小子便宜你了 陪我喝一杯直接给你突破石！\r\n";
			str += "#e#b好的大侠，小弟我先干你随意。";
			break;
		case 7:
			str += "#b玩家【#h #】你好，今天是 #k合作的周日 #b，能够把浓姬的内裤给我偷来的话我可以给你一些礼物哦\r\n";
			str += "#e#b#i" + 1061039 + ":# #z" + 1061039 + "# x1个\r\n";
			str += "#e#r注意：这内裤就是浓姬副本获取（BOSS血量颇高，你需要一根大腿）：\r\n";
			str += "逃脱组队任务（请组队前往BOSS浓姬）\r\n";
			str += "当前拥有#i" + 1061039 + ":#数量：" + player.getAmountOfItem(1061039) + " / 1个粉红棉内裤\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
	}
	let sel = npc.askYesNo(str);
	if(sel == 1) {
		var wq = player.getInventorySlot(-1, -11);
		if(player.getLevel() < 200) {
			npc.say("#e#b注意：你的等级不够200，请加油升级后再来提交任务吧！！！");
		} else if(getEventCount("Day_Quest") > 0) {
			npc.say("#e#b注意：你今天已经完成过该任务了！！");
		} else if(player.getFreeSlots(2) < 5) {
			npc.say("#e#r注意：你的 消耗栏 空间不足 5 个空位！！！");
		} else if(wq == null) {
			npc.say("#e#r先把武器穿上再来和我对话吧");
		} else {
			var done = false;
			if(Day_Of_Week == 1) {
				if(player.hasItem(4000016, 500)) {
					done = true;
					player.loseItem(4000016, 500);
					addLimit(3);
					//player.gainItem(4310030, 10);
					player.modifyCashShopCurrency(1, 5000);
				}
			} else if(Day_Of_Week == 2) {
				if(player.hasItem(4000004, 500)) {
					done = true;
					player.loseItem(4000004, 500);
					addLimit(3);
					player.modifyCashShopCurrency(1, 5000);
				}
			} else if(Day_Of_Week == 3) {
				if(player.hasItem(4000182, 500)) {
					done = true;
					player.loseItem(4000182, 500);
					addLimit(4);
					player.modifyCashShopCurrency(1, 5000);
				}
			} else if(Day_Of_Week == 4) {
				if(player.hasItem(4000273, 300) && player.hasItem(4000274, 300)) {
					done = true;
					player.loseItem(4000273, 300);
					player.loseItem(4000274, 300);
					addLimit(4);
					player.modifyCashShopCurrency(1, 5000);
				}
			} else if(Day_Of_Week == 5) {
				if(player.hasItem(4000834, 500)) {
					done = true;
					player.loseItem(4000834, 500);
					addLimit(4);
					player.modifyCashShopCurrency(1, 5000);
				}
			} else if(Day_Of_Week == 6) {

				if(player.getLevel() < 220) {
					done = false;
					npc.say("#e#b需要等级220级以上哦~");
				} else {
					done = true;
					addLimit(2);
					npc.say("#e#b领取成功！！");
				}
			} else if(Day_Of_Week == 7) {
				if(player.hasItem(1061039, 1)) {
					done = true;
					player.loseItem(1061039, 1);
					addLimit(6);

					player.modifyCashShopCurrency(1, 10000);
				}
			}
			if(!done) {
				if(Day_Of_Week != 6) {
					npc.say("#e#b注意：收集的物品数量还不够哦！！！");
				}

			} else {
				npc.broadcastNotice(" 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠麦吉】任务●ω● 给武器添加了 "+tupo+" 的突破");
				setEventCount("Day_Quest", 1, 1);

			}
		}
	}
}

function addLimit(count) {

		var maxd = 100;
		var mind = 30;
		for(var i=0;i<count;i++){
			var ran2 = (Math.random() * (maxd - mind) + mind);
			
			tupo+=ran2*10000;
		}
		wq.setLimitBreak(wq.getLimitBreak() + tupo);
		player.updateItem(-11,wq);
		
}

function updateDate() {
	cal = java.util.Calendar.getInstance();
	Day_Of_Week = cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;
}

function getDayDes(weekday) {
	switch(weekday) {
		case 1:
			return "周一";
		case 2:
			return "周二";
		case 3:
			return "周三";
		case 4:
			return "周四";
		case 5:
			return "周五";
		case 6:
			return "周六";
		case 7:
			return "周日";
		default:
			return "N/A";
	}
}

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}