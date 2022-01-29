/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:Day Quest
 *  
 *  @Author Jackson 
 */

/* global java, cm */

var status = -1;
var ip=""
var mac=getmac();
var cal = new Date();
var Day_Of_Week = cal.getDay();

var dayInfo = Array(
	"周一的特别任务",
	"周二的特别任务",
	"周三的特别任务",
	"周四的特别任务",
	"周五的特别任务",
	"周六的特别任务",
	"周日的特别任务"
);

var macCount =getCount(mac);


var str = "";
if(Day_Of_Week == 0) {
	Day_Of_Week = 7;
}
str += "\r\n#e小子,我手头上有巨量你想要的#v2614002#突破石！\r\n#i" + 3800157 + ":#~#i" + 3800163 + ":#之间都会发布危险的任务\r\n今天是#r#e" + getDayDes(Day_Of_Week) + "#k#n 如果你能帮我找到需要的东西，那么我将可以给分你一些突破石！请打开地图#i" + 3800529 + ":#，去幸运百货里买个冒险岛任意门，搜索关键词想去哪里点哪里~\r\n";
str+="#r目前识别你的IP，电脑下当天已经完成的次数为："+macCount+"\r\n";
str += "#e#r#L0#开始今天的任务#l\r\n";
str += "#e#b#L1#查看今天任务报酬#l\r\n\r\n ";
let selection = npc.askMenu(str);
if(selection == 0) {

	str = "#b小子【#h #】听我说 #r" + dayInfo[Day_Of_Week - 1] + " #b，如果你能收集够如下物品指定的数量，我就给你几颗突破石！\r\n";

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
			str += "#e#b#i" + 4000182 + ":# #z" + 4000182 + "# x200个\r\n";
			str += "#e#r注意：物品你可以通过怪物：骨骸鱼获取：\r\n";
			str += "怪物出没地点：【深海峡谷2】\r\n";
			str += "当前拥有#i" + 4000182 + ":#数量：" + player.getAmountOfItem(4000182) + " / 200个\r\n";
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
			str += "浓姬组队BOSS（请组队前往BOSS浓姬）\r\n";
			str += "当前拥有#i" + 1061039 + ":#数量：" + player.getAmountOfItem(1061039) + " / 1个粉红棉内裤\r\n";
			str += "#e#b你是否要兑换呢？";
			break;
	}
	let sel = npc.askYesNo(str);
	if(sel == 1) {
		if(player.getLevel() < 200) {
			npc.say("#e#b注意：你的等级不够200，请加油升级后再来提交任务吧！！！");
		} else if(getEventCount("Day_Quest") > 0) {
			npc.say("#e#b注意：你今天已经完成过该任务了！！");
		} else if(player.getFreeSlots(2) < 5 || player.getFreeSlots(5) < 5) {
			npc.say("#e#r注意：你的 消耗栏 和 特殊栏 的空间不足 5 个空位！！！");
		}else if(macCount>=1){
			npc.say("#e#r 一个IP地址一天只能做一次突破任务哦。");
		} else {
			
			if(Day_Of_Week == 1) {
				if(player.hasItem(4000016, 500)) {
					setEventCount("Day_Quest",1,1);
					player.loseItem(4000016, 500);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
					player.gainItem(2437474, 3);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠至尊宝】任务●ω● 获得了超多突破石");
					npc.say("恭喜你完成了至尊宝的突破任务");
				}else{
					npc.say("请检查材料是否足够");
				}
			} else if(Day_Of_Week == 2) {
				if(player.hasItem(4000004, 500)) {
					setEventCount("Day_Quest",1,1);
					player.loseItem(4000004, 500);
					player.gainItem(2437474, 3);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠至尊宝】任务●ω● 获得了超多突破石");
					npc.say("恭喜你完成了至尊宝的突破任务");
				}else{
					npc.say("请检查材料是否足够");
				}
			} else if(Day_Of_Week == 3) {
				if(player.hasItem(4000182, 200)) {
					setEventCount("Day_Quest",1,1);
					player.loseItem(4000182,  200);
					player.gainItem(2437474, 4);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠至尊宝】任务●ω● 获得了超多突破石");
					npc.say("恭喜你完成了至尊宝的突破任务");
				}else{
					npc.say("请检查材料是否足够");
				}
			} else if(Day_Of_Week == 4) {
				if(player.hasItem(4000273, 300) && player.hasItem(4000274, 300)) {
					setEventCount("Day_Quest",1,1);
					player.loseItem(4000273,  300);
					player.loseItem(4000274,  300);
					player.gainItem(2437474, 4);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠至尊宝】任务●ω● 获得了超多突破石");
					npc.say("恭喜你完成了至尊宝的突破任务");
				}else{
					npc.say("请检查材料是否足够");
				}
			} else if(Day_Of_Week == 5) {
				if(player.hasItem(4000834, 500)) {
					setEventCount("Day_Quest",1,1);
					player.loseItem(4000834,  500);
					player.gainItem(2437474, 4);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
					player.modifyCashShopCurrency(1, 5000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠至尊宝】任务●ω● 获得了超多突破石");
					npc.say("恭喜你完成了至尊宝的突破任务");
				}else{
					npc.say("请检查材料是否足够");
				}
			} else if(Day_Of_Week == 7) {
				if(player.hasItem(1061039, 1)) {
					setEventCount("Day_Quest",1,1);
					player.loseItem(1061039, 1);
					player.gainItem(2437474, 6);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
					player.modifyCashShopCurrency(1, 10000);
					npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]完成【大侠至尊宝】任务●ω● 获得了超多突破石");
					npc.say("恭喜你完成了至尊宝的突破任务");
				}else{
					npc.say("请检查材料是否足够");
				}
			}else if(Day_Of_Week == 6) {

				if(player.getLevel() < 220) {
					npc.say("#e#b需要等级220级以上哦~");
				}else if(player.getOnlineTime()<200){
						npc.say("#e#b需要在线200分钟哦~");
				} else {
						var item =player.getInventorySlot(-1,-11);
						if(item==null){
							npc.say("请装备武器");
						}else{
							item.setLimitBreak(item.getLimitBreak() + 1000000);
							player.updateItem(-11,item);
							setEventCount("Day_Quest",1,1);
							getEventCount("活跃");
					setEventCount("活跃",1,10);
							//player.gainItem(2437474, 2);
							npc.say("#e#b领取成功！！");
						}
						
				}
			} 
			
				
			
		}
	}
} else {
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
			detial += "#e#b可以直接领取#i" + 2437474 + ":# #z" + 2437474 + "#x2个";
			break;
		case 7: //星期天
			detial += "#e#r【悲催的周日】\r\n";
			detial += "#e#b收集指定的物品后，你可以通过兑换来得到：\r\n";
			detial += "#i" + 2437474 + ":# #z" + 2437474 + "#x6个，点券x10000";
			break;
	}
	npc.say(detial);
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

function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(mac){
	
	
	var sql = "select sum(value) macCount from accounts_event where `event`='Day_Quest' and mac =?";
	var result = player.customSqlResult(sql,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
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
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}