/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:Custom Cash Item
 *  
 *  @Author Jackson 
 */

/* global cm */

﻿var status = 0;
var choice;
var aaa = false;
var ticket = 4034012;
var CashList = [];

//這裡添加過濾的物品
//格式
//物品id,物品id,物品id

var guolv = [
	1112918, //羈絆之翼
	1102963, //羈絆之翼
	1003843, //奇怪的狐貍面具
	1082553, //紅色十字架手套
	1032234, //藍色桃心耳環
	1012553, //咬緊牙關的面罩
	1702472, //萬圣節的命運
	1102724, //黑暗天使羽翼
	1102723, //光明天使羽翼
	1115014, //MVP對話框戒指（鉆石）
	1115102, //MVP名片戒指（鉆石）
	1115012, //MVP對話框戒指（白銀） 等級要求：0
	1115013, //MVP對話框戒指（黃金） 等級要求：0
	1115100, //MVP名片戒指（白銀） 等級要求：0
	1115101, //MVP名片戒指（黃金） 等級要求：0
	1102965, //螢火蟲之舞 等級要求：0
	1112244, //蝙蝠聊天戒指
	1004472, //餓狼傳說帽子
	1102604, //蒼穹之翼
	1112966, //靈魂密友友情戒指
	1112968, //靈魂密友友情戒指
	1102873, //永恒初心者
	1102872//閃耀初心者
];

		text = "#e#b歡迎使用#r傷害皮膚搜索功能#b：#n\r\n";
		text += "#d請輸入你想要的皮膚名稱的關鍵字，我們會為您篩選：";
		npc.askText(text, 0, 20);
		var resultList = im.customSqlResult("select itemid from zdata_damageSkin ORDER BY id desc LIMIT 500")
		for (var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i)
			if (result == null) {
				break;
			}
			var itemid = result.get("itemid")
			var str = im.getItemName(itemid);
			if (str != null) {
				if (str.indexOf(im.getText()) >= 0) {
					CashList.push(itemid);
				}
			}
		}
		if (CashList.length == 0) {
			npc.say("#e#b未搜到相關皮膚，請重新確認輸入信息...#k\r\n#r注：搜索的信息不要有間隔，確保皮膚名稱中存在。#k#n");
			status = -1;
			return;
		}
		text = "#e#b為您檢索到了已下皮膚，請選擇你需要的吧：#k#n\r\n";
		for (var a = 0; a < guolv.length; a++) {
			for (var i = 0; i < CashList.length; i++) {
				if (guolv[a] == CashList[i]) {
					//CashList.remove(guolv[a]);
					delete CashList[i];
					//CashList.splice(i);
				}
			}
		}
		for (var i = 0; i < CashList.length; i++) {
			if (!CashList[i] == "") {
				text += "#L" + i + "##i" + CashList[i] + "# #e#r#z" + CashList[i] + "##k#n\r\n";
			}
		}
		im.sendNext(text);
	} else if (status == 2) {
		im.askYesNo("#e#b只要你點擊“是”按鍵，我就會#r扣除您10余額#b，然後把\r\n\r\n#i" + CashList[selection] + "# #r“#z" + CashList[selection] + "#”#b 直接應用了喔！\r\n\r\n本操作會直接覆蓋掉你原來的皮膚，哈哈！");
		choice = selection;
	} else if (status == 3) {
		if (selection != 1) {
			im.dispose();
			return;
		}
		var itemID = CashList[choice];
		if (text == "") {
			im.dispose();
		} else {
			if (getHyPay(1) >= 10) {
				gainHyPay(-10)
				im.updateDamageSkin(getSkin(itemID));
				im.dropMessage(-2, "使用了新的傷害皮膚！");
				im.sendOk("恭喜您成功應用了 #i" + itemID + ":# #b#t" + itemID + "# 傷害皮膚效果#k。");
			} else {
				im.dropAlertNotice("對不起，您沒有足夠的余額。")
			}
			im.dispose();
		}
	}
}

function getSkin(id) {
	var i = -1;
	var sql = "select * from zdata_damageSkin where itemid = " + id + "";
	var push = im.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var damageSkin = result.get("damageSkin");
	}
	return damageSkin;
}

function getItem(id) {
	var i = -1;
	var sql = "select * from zdata_damageSkin where damageSkin = " + id + "";
	var push = im.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var itemid = result.get("itemid");
	}
	return itemid;
}

function getAccountName() {
	var i = -1;
	var sql = "select name,id from accounts where id=" + im.getAccountID() + " order by name limit 1;";
	var push = im.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var name = result.get("name");
	}

	return name;
}

function getHyPay(type) {
	var i = -1;
	var sql = "select * from zz_hypay where accname = '" + cm.getAccountName() + "'";
	var push = im.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		if (type == 1) {
			var pay = result.get("pay");
		} else if (type == 2) {
			var pay = result.get("payUsed");
		} else if (type == 3) {
			var pay = result.get("Cumulative");
		}
	} else {
		im.customSqlInsert("INSERT INTO `zz_hypay`(`accname`) VALUES ('" + cm.getAccountName() + "');");
		return getHyPay(1);
	}
	if (pay == null) {
		pay = 0;
	}
	return pay;
}

function Update() {
	var sql = "update zz_hypay set accounts_id =" + im.getAccountID() + " where accname = '" + im.getAccountName() + "';";
	var sql1 = "update zz_hypay set Cumulative =pay+payUsed where accname = '" + im.getAccountName() + "';";
	var sql2 = "update zz_hypay set characters ='" + im.getPlayer().getName() + "' where accname = '" + im.getAccountName() + "';";
	im.customSqlUpdate(sql); //生成賬號ID
	im.customSqlUpdate(sql1); //累計
	im.customSqlUpdate(sql2); //自動生成名字
}

function gainHyPay(count) {
	var sql = "update zz_hypay set pay =pay+? where accname = '" + im.getAccountName() + "';";
	var sql1 = "update zz_hypay set payused =payused-? where accname = '" + im.getAccountName() + "';";
	var sql2 = "insert into zlog_hypay(accounts_id,accname, characters, Before_use, After_use, Pay_use, paylog, time) values(" + im.getAccountID() + ",'" + im.getAccountName() + "','" + im.getPlayer().getName() + "'," + getHyPay(1) + "," + (getHyPay(1) + count) + ",'" + count + "', '辦理理財', now())";
	im.customSqlUpdate(sql, count); //消耗余額數量
	im.customSqlUpdate(sql1, count); //增加余額使用數量
	im.customSqlInsert(sql2);
	if (count > 0) {
		im.dropMessage(-1, "餘額增加了 " + count + "");
		im.dropMessage(-2, "餘額增加了 " + count + "");
	} else if (count < 0) {
		im.dropMessage(-1, "餘額減少了 " + (-count) + "");
		im.dropMessage(-2, "餘額減少了 " + (-count) + "");
	}
}