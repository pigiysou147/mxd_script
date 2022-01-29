/* 点卷商店 */
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#"; //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#"; //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#"; //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#"; //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#"; //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#"; //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; ////美化2
var yun = "#fUI/UIWindow/Quest/icon7/0#"; ////红沙漏
var yun1 = "#fUI/UIWindow/Quest/icon7/10#"; ////红色圆
var yun2 = "#fUI/UIWindow/Quest/icon8/0#"; ////蓝指标
var yun3 = "#fUI/UIWindow/Quest/prob#"; ////机率获得
var yun4 = "#fUI/UIWindow/Quest/reward#"; ////奖励
var yun5 = "#fUI/UIWindow/Quest/summary#"; ////任务简洁
var yun6 = "#fUI/UIWindow/PartySearch2/BtPrev/mouseOver/0#"; ////左指标
var yun7 = "#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#"; ////右指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"; ////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"; ////金右指标
var yun12 = "#fUI/UIWindow/Megaphone/2#"; ////骷髅
var xiaoyun1 = "#fUI/UIWindow/AriantMatch/characterIcon/0#"; ////红方
var xiaoyun2 = "#fUI/UIWindow/AriantMatch/characterIcon/1#"; ////蓝方
var xiaoyun3 = "#fUI/UIWindow/AriantMatch/characterIcon/2#"; ////绿方
var xiaoyun4 = "#fUI/UIWindow/AriantMatch/characterIcon/3#"; ////黄方
var xiaoyun5 = "#fUI/UIWindow/AriantMatch/characterIcon/4#"; ////紫方
var xiaoyun6 = "#fUI/UIWindow/AriantMatch/characterIcon/5#"; ////橙方
var xiaoyun7 = "#fUI/UIWindow/Minigame/Common/btStart/mouseOver/0#"; ////开始
var xiaoyun8 = "#fUI/UIWindow/Minigame/Common/mark#"; ////冒险岛图标
var status = 0;

var selStr = "\t  " + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "\r\n";
selStr += "\t  " + xiaoyun1 + "\t\t\t#e#r每日福利\t\t\t  " + xiaoyun5 + "\r\n";
selStr += "\t " + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun6 + "" + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "\r\n";
selStr += "\t\t#b领取福利时请把符号放到背包\r\n";
selStr += "\r\n" + "#L0##d" + zs + "#z1190401#福利领取" + zs + "\r\n" + "#d#L1#" + zs1 + "#z1190402#福利领取" + zs1 + "\r\n" + "#d#L2#" + zs + "#z1190405#福利领取" + zs + "\r\n" + "#d#L3#" + zs1 + "#z1190407#福利领取" + zs + "#d\r\n#L4#" + zs1 + "#z1190301#福利领取" + zs + "\r\n";
let selection = npc.askMenuS(selStr);
///1190407
if(getEventCount("符号工资") < 1) {
	switch(selection) {
		case 0:
			if(player.hasItem(1190401, 1)) {
				player.gainItem(4001736, 10); //qian
				player.modifyCashShopCurrency(2, 3888);
				setEventCount("符号工资", 1, 1);

				npc.broadcastPlayerNotice(0x0A, "[C等级符号] : 恭喜 " + player.getName() + " 领取C等级符号每日工资，获得1000W游戏币。3888抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[C等级符号] : 恭喜 " + player.getName() + " 领取C等级符号每日工资，获得1000W游戏币。3888抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[C等级符号] : 恭喜 " + player.getName() + " 领取C等级符号每日工资，获得1000W游戏币。3888抵用券.");
				npc.say("成功领取C等级符号的奖励。");
			} else {
				npc.say("符号都没有，学什么人当大神！");

			}
			break;
		case 1:
			if(player.hasItem(1190402, 1)) {
				player.gainItem(4001736, 20); //qian
				player.modifyCashShopCurrency(2, 5888);
				setEventCount("符号工资", 1, 1);

				npc.broadcastPlayerNotice(0x0A, "[B-等级符号] : 恭喜 " + player.getName() + "  领取B-等级符号每日工资，获得2000W游戏币。5888抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[B-等级符号] : 恭喜 " + player.getName() + "  领取B-等级符号每日工资，获得2000W游戏币。5888抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[B-等级符号] : 恭喜 " + player.getName() + "  领取B-等级符号每日工资，获得2000W游戏币。5888抵用券.");
				npc.say("你成功换取啦。");
			} else {
				npc.say("符号都没有，学什么人当大神！");

			}
			break;
		case 2:
			if(player.hasItem(1190405, 1)) {
				player.gainItem(4001736, 30); //qian
				player.modifyCashShopCurrency(2, 7888);
				setEventCount("符号工资", 1, 1);

				npc.broadcastPlayerNotice(0x0A, "[A等级符号] : 恭喜 " + player.getName() + "  领取A等级符号每日工资，获得3000W游戏币。7888抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[A等级符号] : 恭喜 " + player.getName() + "  领取A等级符号每日工资，获得3000W游戏币。7888抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[A等级符号] : 恭喜 " + player.getName() + "  领取A等级符号每日工资，获得3000W游戏币。7888抵用券.");
				npc.say("你成功换取A等级符号每日工资啦。");
			} else {
				npc.say("符号都没有，学什么人当大神！");

			}
			break;
		case 3:
			if(player.hasItem(1190407, 1)) {
				player.gainItem(4001736, 50); //qian
				player.modifyCashShopCurrency(2, 10000);
				setEventCount("符号工资", 1, 1);

				npc.broadcastPlayerNotice(0x0A, "[S等级符号] : 恭喜 " + player.getName() + "  领取S等级符号每日工资，获得5000W游戏币。10000抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[S等级符号] : 恭喜 " + player.getName() + "  领取S等级符号每日工资，获得5000W游戏币。10000抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[S等级符号] : 恭喜 " + player.getName() + "  领取S等级符号每日工资，获得5000W游戏币。10000抵用券.");
				npc.say("你成功换取啦。");
			} else {
				npc.say("符号都没有，学什么人当大神！或者今天已经领取过了");

			}
			break;
		case 4:
			if(player.hasItem(1190301, 1)) {
				player.gainItem(4001736, 80); //qian
				player.modifyCashShopCurrency(2, 10000);
				setEventCount("符号工资", 1, 1);
				npc.broadcastPlayerNotice(0x0A, "[S等级符号] : 恭喜 " + player.getName() + "  领取SS等级符号每日工资，获得8000W游戏币。10000抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[S等级符号] : 恭喜 " + player.getName() + "  领取SS等级符号每日工资，获得8000W游戏币。10000抵用券.");
				npc.broadcastPlayerNotice(0x0A, "[S等级符号] : 恭喜 " + player.getName() + "  领取SS等级符号每日工资，获得8000W游戏币。10000抵用券.");
				npc.say("你成功换取啦。");
			} else {
				npc.say("符号都没有，学什么人当大神！或者今天已经领取过了");

			}
			break;
	}
} else {
	npc.say("今天已经领取过了");
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