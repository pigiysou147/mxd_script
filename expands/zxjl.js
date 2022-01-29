var status = -1;
var text;
var diff;
var sel;
var time;
var aaa = "#fEffect/CharacterEff/1112949/4/0#";

var lq1 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
// 每个礼包所需的在线时长
var condition = new Array(60, 120, 240, 360);
var reward = new Array( // 礼包编号、道具id、数量

	Array(1, 2450062, 2),   //双倍经验
	Array(1, 5152053, 2),     // 皇家
	Array(1, 5062500, 5),    // 高级神奇魔方
	Array(1, 2000005, 200),    // 超级药水
	Array(1, 2000005, 200),    // 超级药水
	Array(1, 4001714, 1),     // 定居金100万					
	Array(1, 2431739, 1),   //抵用券一千商品券

	// 240                                    
	Array(2, 5062002, 8),      // 高级神奇魔方                          
	Array(2, 5062009, 5),      // 超级神奇魔方                          
	Array(2, 5064000, 3),      // 防暴                         
	Array(2, 2340000, 3),      // 祝福卷轴                          
	Array(2, 4001785, 2),      // 定居金五百万       
	Array(2, 2048730, 1), //140级涅磐火焰  

	// 540
	Array(3, 5062010, 5),    // 终极神奇魔方
	Array(3, 5062009, 10),   //超级神奇魔方
	Array(3, 4032226, 3), //黄金猪猪
	Array(3, 5062500, 10), //大师附加魔方                	
	Array(3, 5062503, 5), //附加潜能记忆魔方          	
	Array(3, 5064000, 4), //防暴  
	Array(3, 2340000, 4), //祝福卷轴

					// 880
	Array(4, 5062010, 5),    //终极神奇魔方
	Array(4, 5062009, 20),   // 超级神奇魔方
	Array(4, 4032226, 5),   // 黄金猪猪
	Array(4, 5062500, 10), //大师附加魔方 
	Array(4, 5062503, 10), //附加潜能记忆魔方  
	Array(4, 5062024, 5), //闪炫魔方
	Array(4, 2340000, 5),  //祝福卷轴
	Array(4, 4310028, 15) 

);
var date = new Date();
var hour=date.getHours();
var minute=date.getMinutes();
var time = player.getOnlineTime();
var curlevel = -1;

text = "#e#d您今天在时长为： #r" + time + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23 ： 50#n #b至#r #e00 ： 10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。服务中心内还有免费点券可以领哦~#k\r\n\r\n";
for(var i = 1; i <= condition.length; i++) {
	text+="#L" + i + "#" ;
	
	text += "#e#b在线" + condition[i - 1] + "分钟奖励    ";
	if(getEventCount("在线礼包" + i) > 0) {
		text += lq2;
		curlevel = curlevel == -1 ? i : curlevel;
	}else{
		text += lq1;
	}
	text += "#l\r\n";
}
text += "#k";
let selection = npc.askMenuS(text);
// 23:50 ~ 23: 59 前一天不领取的时间  00:00 ~ 00:10 第二天不领取的时间  
if((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))) {
	npc.say("#d服务器当前时间： #r" + hour + " 时 " + minute + " 分 #k\r\n\r\n#e#d提示#n#k：#r23 ： 50 #b至#r 00 ： 10 #b时无法领取在线奖励。#k");
} else if(getEventCount("在线礼包" + selection) > 0) {
	npc.say("这个礼包您已经领取过了");
} else {
	text = "\t\t\t\t#e#r- 在线 " + condition[selection - 1] + " 分钟奖励 -#k#n\r\n\r\n";
	for(var i = 0; i < reward.length; i++) {
		if(reward[i][0] == selection) {
			if(reward[i][1] == -1) {
				text += "\t\t\t#r点券:   " + reward[i][2] + "#k\r\n";
			} else {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
			}

		}
	}
	let sel = npc.askYesNo(text);
	if(sel == 1) {
		var rewardlist = Array();
			for(var i = 0; i < reward.length; i++) {
				if(reward[i][0] == selection) {
					if(reward[i][3] == null || reward[i][3] == '')
						reward[i][3] = 0;
					rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
				}
			}
		if(time < condition[selection - 1]) {
			npc.say("在线时间不足，无法领取。");

		} else if(!player.getFreeSlots(1) > rewardlist.length) {
			npc.say("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");

		} else {
			
			setEventCount("在线礼包" + selection, 1, 1);
			if(selection==4){
				getEventCount("活跃");
					setEventCount("活跃", 1, 10);
			}
			for(var i = 0; i < rewardlist.length; i++) {
				if(rewardlist[i][0] == -1) {
					//点券
					player.modifyCashShopCurrency(1, rewardlist[i][1]);
				} else {
					//无期限道具
					player.gainItem(rewardlist[i][0], rewardlist[i][1]);
				}
			}
			npc.broadcastNotice("『在线时间奖励』" + " : " + "玩家 " + player.getName() + " 领取了在线奖励。");
			npc.say("领取成功！");
			

		}

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