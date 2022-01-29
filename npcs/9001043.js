var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow/Minigame/Common/mark#";
var sl1 = 0; //兑换数量
var daan = "87762232";
var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(mode == 1) {
		status++;
	} else {
		if(status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if(status == 0) {
		Start();
		cm.setInGameCurNodeEventEnd(true);
        cm.setStandAloneMode(true);
        cm.setInGameDirectionMode(true, true, true, false);
        
        cm.setForcedInput(0);
        cm.setDelay(30);
		
		cm.setMonologue("#r欢迎来到【啾啾岛】 \r\n  本服为仿官设置无论是老枫叶玩家还是新玩家，都希望你们在这里得到的是快乐。\r\n 先为大家介绍一下本服的基础命令，以便在游戏中更加便捷。# " ,true);
	}else if(status==1){
		cm.setMonologue("本服常用命令：\r\n @拍卖（所有功能都在里面）\r\n @解卡 （角色卡住无法操作、无法打开NPC、过图时使用）\r\n @怪物 （了解离角色最近的怪物信息） \r\n @ems （打开邮件）\r\n 重要提醒：枫叶岛不需要做国服任务，新手打开拍卖即可转职。\r\n 请务必在群文件下载新手攻略查看 么么哒 #r >.< #  " ,true);
	}else if(status==2){
		cm.setMonologue("欢迎你邀请更多好友一起加入我们的大家庭，祝您游戏愉快！\r\n 玩家群：87762232。 " ,true);
	}else if(status==3){
		cm.setInGameDirectionMode(false, false, false, false);
		
		cm.setStandAloneMode(false);

		var text = "#e#d欢迎来到【 啾啾岛 】，先来了解一下本服的特色 \r\n";
		//text += "· 本服为仿官方模式\r\n";
		text += "· #e#d本服为仿官设置 不会像变态服那样 但是长久好玩 经验30倍  金币5倍  爆率5倍 \r\n";
		text += "· 有什么游戏问题欢迎大家填写意见与建议，用TXT格式发送给群管理 一经采用 绝对厚礼.\r\n";
		text += "· 各种特色副本趣味活动丰厚奖励,尽享游戏欢乐,强力的等级奖励,各种独有副本-搬砖.土豪.上班族的天堂\r\n";
		text += "#d请输入Q群号领取礼包。#d\r\nQ群是：#r87762232\r\n\r\n";
		cm.askText(text, 5, 20);
	} else if(status == 4) {
		cm.dispose();
		fee = cm.getText();
		if(selection == daan || fee == daan && cm.getPQLog("新手驾到", -1) <1 ) {
			cm.setPQLog("新手驾到", -1)
			cm.gainItem(2432022, 1); //运营员箱子 此处下面可添加想赠送的道具。
			cm.gainItem(2430241, 1);
			//cm.gainItem(2430222, 1);//金元宝
			cm.gainItem(2430607, 1);
			cm.gainItem(2432068, 1);
			//cm.gainItem(2430154, 1);
			cm.gainItem(4310088, 300);
			cm.gainMeso(1000000);
			//cm.gainPetItem(5000483, 1);
			//cm.gainPetItem(5000016, 1);
			cm.gainItemPeriod(5000483, 1, 60 * 60 * 60 * 24 * 30 * 1000);
			cm.warp(410000010);
			cm.sendOk("恭喜您通过了测试，请尽情享受乐趣吧。");
			cm.worldSpouseMessage(0x15, "『萌新到来』：玩家 【" + cm.getPlayer().getName() + "】 bomm的一声进入到了啾啾岛，大家一起热烈欢迎他(她)吧!");
		} else {
			cm.dispose();
			cm.sendOk(cm.getPQLog("新手驾到", -1)+"#d答案错误。请重新输入。正确答案是：#r" + daan + "#d,请确认一下重新输入。#b或者您已经领取过新手礼包了。");
			cm.dispose();
		}
			
			
	}
}
function Start() {
	var isExist = false;
	var sql_a = "SELECT name FROM accounts where id = ?";
	var result_a = cm.customSqlResult(sql_a, cm.getPlayer().getAccountID());
	var name = "";
	if(result_a.size() != 0) {
		if(result_a[0] != null) {
			name = result_a[0].get("name");
		}
	}

	var sql = "select pay from hypay where accname = ? ";

	var result = cm.customSqlResult(sql, name);

	if(result.size() > 0) {
		if(result[0] != null) {
			isExist = true;
		}
	}
	if(!isExist) { //不存在这条记录，就添加一条
		var sql_b = "INSERT INTO hypay (accountId,accname) values (?,?) ";
		cm.customSqlInsert(sql_b, cm.getPlayer().getAccountID(), name);
	}
}
