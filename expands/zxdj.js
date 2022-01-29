var eff = "#fEffect/CharacterEff/1112904/0/0#"

var lq1 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
var sl = 5; //兑换数量
var sl1 = 10; //兑换数量
var sl2 = 10000; //兑换数量
var selStr = "#e#d您今天时长为： #r" + player.getOnlineTime() + "#k #d分钟#n#k\r\n#e#d提示#n#k：#e#r23 ： 50#n #b至#r #e00 ： 10#n #b时无法领取在线奖励。#k\r\n#b请在 #e#r23：50#n#b 分前领取当天未领取的奖励。以免造成损失。#k\r\n\r\n";

selStr += "#L4##b在线60分钟[#r获得5000点卷#b]奖励 " + lq1 + "#l \r\n";
selStr += "#L3##b在线120分钟[#r获得8000点卷#b]奖励 " + lq1 + "#l\r\n";
selStr += "#L5##b在线240分钟[#r获得15000点卷#b]奖励 " + lq1 + "#l\r\n";
selStr += "#L7##b在线360分钟[#r获得20000点卷#b]奖励 " + lq1 + "#l\r\n";

let selection = npc.askMenuS(selStr);
switch(selection) {
	case 4:
		if(getEventCount("60分钟奖励点卷") == 0 && player.getOnlineTime() >= 60) {
			// cm.addHyPay(-sl * 1);
			player.modifyCashShopCurrency(1,5000);
			setEventCount("60分钟奖励点卷",1,1);
			npc.broadcastPlayerNotice(0x2, "[挂机点卷] " + player.getName() + " 玩家今天上线已经达到60分钟,给予5000点卷作为奖励.");

			npc.say("#r - 60分钟奖励 >> \r\n#d领取成功#k\r\n获得5000点卷！");
			
		} else {
			npc.say("你还没有在线60分钟哟.或者你已经领取过今天的60分钟奖励了");
			
		}
		break;
	case 3:
		if(getEventCount("120分钟奖励点卷") == 0 && player.getOnlineTime() >= 120) {
			// cm.addHyPay(-sl * 1);
			player.modifyCashShopCurrency(1,8000);
			setEventCount("120分钟奖励点卷",1,1);
			npc.broadcastPlayerNotice(0x2, "[挂机点卷] " + player.getName() + " 玩家今天上线已经达到120分钟,给予8000点卷作为奖励.");

			npc.say("#r - 120分钟奖励 >> \r\n#d领取成功#k\r\n获得8000点卷！");
			
		} else {
			npc.say("你还没有在线120分钟哟.或者你已经领取过今天的120分钟奖励了");
			
		}
		break;
	case 5:
		if(getEventCount("240分钟奖励点卷") == 0 && player.getOnlineTime() >= 240) {
			// cm.addHyPay(-sl * 1);
			player.modifyCashShopCurrency(1,15000);
			setEventCount("240分钟奖励点卷",1,1);
			npc.broadcastPlayerNotice(0x2, "[挂机点卷] " + player.getName() + " 玩家今天上线已经达到240分钟,给予15000点卷作为奖励.");

			npc.say("#r - 240分钟奖励 >> \r\n#d领取成功#k\r\n获得15000点卷！");
			
		} else {
			npc.say("你还没有在线240分钟哟.或者你已经领取过今天的240分钟奖励了");
			
		}
		break;
	case 7:
		if(getEventCount("360分钟奖励点卷") == 0 && player.getOnlineTime() >= 360) {
			player.modifyCashShopCurrency(1,20000);
			setEventCount("360分钟奖励点卷",1,1);
			npc.broadcastPlayerNotice(0x2, "[挂机点卷] " + player.getName() + " 玩家今天上线已经达到360分钟,给予20000点卷作为奖励.");
			npc.say("#r - 360分钟奖励 >> \r\n#d领取成功#k\r\n获得20000点卷！");
			
		} else {
			npc.say("你还没有在线360分钟哟.或者你已经领取过今天的360分钟奖励了");
			
		}
		break;
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

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

}

function setEventCount(eventName,type,value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type,value,player.getAccountId(), eventName);


}