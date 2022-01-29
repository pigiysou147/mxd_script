/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：等级送礼
 *  @Author Kent 
 */
//10, 50, 100, 150, 180, 200, 220, 230, 250, 260 ，275
var status = 0;
var bossid = "dengji";
var giftLevel = Array(30, 60, 100, 140, 160, 180, 200, 220, 230, 240, 260, 275);
var giftContent = Array(
	//30
	Array(
		Array(2615000, 6, 0), //
		//Array(2431855, 1, 0), 
		Array(5190011, 1, 0),
		Array(4001713, 10, 0),
		Array(2022956, 10, 0),
		Array(2001505, 999, 0)
	),
	//60
	Array(
		Array(5152053, 10, 1), //皇家整容卷
		Array(4001713, 10, 1), //定居金币
		Array(5150040, 10, 1) //皇家理发卷
	),
	//100
	Array(
	
	
		
		Array(1182175, 1, 2),
		Array(5062000, 100, 2)
	),
	//140
	Array(
		Array(2431941, 1, 3),
		Array(5062002, 10, 3),
		Array(5064000, 5, 3),
		Array(2049147, 15, 3)
	),

	//160
	Array(
		Array(4001714, 20, 4),
		Array(5152053, 30, 4),
		Array(5150040, 30, 4)
	),
	//180
	Array(
		Array(1122264, 1, 5),
		Array(1032220, 1, 5), //mib
		Array(1113072, 1, 5), //mib
		Array(1132243, 1, 5), //mib
		Array(2049147, 15, 5), //mib
		Array(5062500, 5, 5), 
		Array(5062002, 5, 5),
		Array(2022956, 10, 5)
	),
	//200
	Array(
		Array(2435733, 1, 6), //核心宝石碎片
		Array(2049751, 2, 6),
		//Array(5062009,80, 6),	
		//Array(5062500, 80, 6), 
		Array(2431741, 2, 6)
	),
	//220
	Array(
		 Array(2046075,2,7),
		Array(2046074,2,7),
		Array(2049762,3,7),
		Array(5062009,100, 7),	
		Array(5062500, 100, 7),
		Array(2431741,5,7)
	),

	//230
	Array(
		Array(2340000, 10, 8),
        Array(2049124, 5, 8),
        Array(5062024, 5, 8),
		Array(5062009,120, 8),	
		Array(5062500, 120, 8),
		Array(2431741, 5, 8)
	), //[MS特价]潜能变化魔方

	//240
	Array(
		Array(2049124, 10, 9),
		Array(2340000, 20,9),
		Array(1012553, 1,9),
		Array(5062024, 10,9),
		Array(5062009,150, 9),	
		Array(5062500, 150, 9)
	),
	//260
	Array(

		Array(1113056, 1, 10),
		Array(1022195, 1, 10),
		Array(1032201, 1, 10),
		Array(1122259, 1, 10),
		Array(1012414,1,10),
		Array(2046996, 1, 10),
		Array(2046996, 1, 10),
		Array(2046997, 1, 10),
		Array(2046997, 1, 10),
		Array(2047818, 1, 10),
		Array(2047818, 1, 10),
		Array(2612059, 1, 10),
		Array(2612059, 1, 10),
		Array(5062024, 30, 10)
	),
	//275
	Array(
		Array(2614067, 3, 11),
		Array(2022530, 30, 11),
		Array(1162035, 1, 11),
		Array(2433323, 1000, 11),
		Array(3992025, 5, 11),
		Array(4001326, 2, 11),
		Array(3018244, 1, 11)
	)
);
var giftId = -1;
var giftToken = Array();
var gifts = null;
var text = "";
text += "嘿，我为你准备了许多宝贝，等你达到相应等级的时候就可以领取了，另外点击可以查看礼包内容呢，快抢先看看吧！\r\n";
var lq1 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
for(var i = 0; i < giftLevel.length; i++) {
	var tips = "";
	if(player.getLevel() >= giftLevel[i]) {
		if(player.getPQLog(bossid + (i + 1)) == 0) {
			tips = " "+lq1;
		} else {
			tips = " "+lq2;
		}
	} else {
		tips = "#r(等级不足)#b";
	}
	text += "#b#L" + i + "#领取#r#e" + giftLevel[i] + "#n#b级等级礼包 " + tips + "#l#k\r\n";
}
let giftId = npc.askMenuS(text);

var text = "#r#e" + giftLevel[giftId] + "#n#b级礼包内容：\r\n";
gifts = giftContent[giftId];
for(var i = 0; i < gifts.length; i++) {
	var itemId = gifts[i][0];
	var getItemQuantity = gifts[i][1];
	text += "#v" + itemId + "##b#t" + itemId + "##k #rx " + getItemQuantity + "#k\r\n";
}
text += "\r\n#d是否现在就领取该礼包？#k";
let sel = npc.askYesNo(text);

if(sel == 1) {

	if(player.getFreeSlots(1) < 8 || player.getFreeSlots(2) < 8 || player.getFreeSlots(3) < 8 || player.getFreeSlots(4) < 8 || player.getFreeSlots(5) < 8) {
		npc.say("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
	} else {
		var job = player.getJob();
		if(player.getPQLog(bossid + (giftId + 1)) == 0 && player.getLevel() >= giftLevel[giftId]) {
			if(giftId==giftContent.length-1){
				if(getEventCount("275奖励")<1){
					setEventCount("275奖励", 0, 1);
					player.addPQLog(bossid + (giftId + 1), 1, 365);
					
					for(var i = 0; i < gifts.length; i++) {
						var itemId = gifts[i][0];
						var getItemQuantity = gifts[i][1];
						player.gainItem(itemId, getItemQuantity);
					}
					
					npc.say("恭喜您，领取成功！快打开包裹看看吧！");
				}else{
					npc.say("275级的奖励，每个账号只有一次机会哦");
				}
			}else{
				player.addPQLog(bossid + (giftId + 1), 1, 365);
				for(var i = 0; i < gifts.length; i++) {
					var itemId = gifts[i][0];
					var getItemQuantity = gifts[i][1];
					player.gainItem(itemId, getItemQuantity);
				}
				
				npc.say("恭喜您，领取成功！快打开包裹看看吧！");
			}
			
			
		} else {
			npc.say("您已经领过了该礼包或者等级未达到要求，无法领取。");
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