/*
 *兑换
 */

var status = 0;
var cost = 1;
var selects = 0;
var zzz = "#fMap/MapHelper.img/weather/starPlanet2/8#";

let selects = npc.askNumber("\r\n#d想当门派老大么？ 那么如果您以每 #r" + cost + " #d余额增加1点门派贡献度。贡献度达到第一的时候那么您就可以出任门派老大了。\r\n\r\n#b\t\t\t" + zzz + "目前您的余额：#r" + getHyPay() + " #k#b\r\n\t\t\t" + zzz + "门派贡献度为：#r" + getMenpaiMemberPoints() + "\r\n\r\n 请问你想购买多少贡献度?　", 1, 1, getHyPay());

let sel = npc.askYesNo("您确定购买贡献度吗？\r\n增加 #r" + selects + "#k 点贡献度将会使用掉您 #r" + selects * cost + "#k 余额\r\n");
if(sel == 1) {
	if(getHyPay() >= selects * cost) {
		addHyPay(selects * cost);
		AddMenpaiMemberPoints(selects)
		npc.broadcastPlayerNotice(0x05, "[门派贡献度] ：恭喜玩家 " + player.getName() + " 使用 " + selects * cost + " 余额增加了 " + selects + " 门派个人贡献度。");
		npc.say("成功增加了 " + selects + " 贡献度。");
	} else {
		npc.say("您没有足够的余额,请获取后使用");
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
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

function RankingNew(mpid) {
	var text = "#e  名次\t\t\玩家名称\t\t\t\t贡献度\r\n#n"
	var result = player.customSqlResult("SELECT * FROM menpaiMember where mpid = " + mpid + " ORDER BY points DESC LIMIT 5");
	for(var i = 0; i <= 5; i++) {
		if(result.length <= i) {
			break;
		}
		if(i == 0) {
			text += "#r";
		} else if(i == 1) {
			text += "#g";
		} else if(i == 2) {
			text += "#b";
		}
		text += "\t " + (i + 1) + "\t\t ";

		// 填充名字空格
		text += result[i].get("charname");
		for(var j = 16 - result[i].get("charname").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result[i].get("points");

		text += "\t\t\t #k";

		text += "\r\n";

	}
	return text;
}

function AddMenpaiMemberC(mpid) { //加入角色表门派
	return player.customSqlUpdate("update characters set mpid = ? where id = " + player.getId() + "", mpid); //更新角色门派
}

//函數名字(),如：AddMenpaiMemberPoints(增加的贡献度)
function getMenpaiBoss(mpid) { //通過贡献度排名第一个的情況来确定门派老大(24小时內必须有增加活跃度)。
	var RankDataBase = player.customSqlResult("SELECT charname,DATE_FORMAT(date,'%m月%d日') as date FROM menpaiMember where mpid = " + mpid + " and DATE_SUB(CURDATE(), INTERVAL 1 DAY) <= date(date) ORDER BY points DESC LIMIT 1");
	if(RankDataBase.length > 0) {
		return RankDataBase.get(0).get("charname");
	}
}

function getMenpaiRank(mpid) { //获得门派头衔
	var RankDataBase = player.customSqlResult("SELECT charname,DATE_FORMAT(date,'%m月%d日') as date FROM menpaiMember where mpid = " + mpid + " and DATE_SUB(CURDATE(), INTERVAL 1 DAY) <= date(date) ORDER BY points DESC LIMIT 20");
	if(RankDataBase.length > 0) {
		return RankDataBase.get(0).get("charname");
	}
}

function getMenPaiMemberTotal(mpid) { //门派总人数
	var i = 0;
	var data = player.customSqlResult("SELECT id FROM menpaiMember where mpid = " + mpid + ""); // 查询数据

	return data.size();
}

function getMenpaiPoints(mpid) { //得到门派的总荣誉值
	var data = player.customSqlResult("SELECT SUM(points) FROM menpaiMember where mpid = " + mpid + ""); // 查询数据
	if(data.size() > 0) {
		return data.get(0).get("SUM(points)");
	}
}

function getMenpaiPPoints(mpid) { //得到门派的总活跃度
	var data = player.customSqlResult("SELECT SUM(playerPoints) FROM characters where mpid = " + mpid + ""); // 查询数据
	if(data.size() > 0) {
		return data.get(0).get("SUM(playerPoints)");
	}
}

function AddMenpaiMemberPoints(points) { //增加门派角色的贡献度（可负号扣除）
	var data = player.customSqlResult("SELECT * FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(!data.size() > 0) {
		//cm.playerMessage("增加贡献度失敗，请先加入一个门派。");
	}
	var update = player.customSqlUpdate("update menpaiMember set points = points+?,date = ? where charid = " + player.getId() + "", points, null); //更新為已使用
	checkIfBeingBoss(); ////检查是否变成了门派老大！
}

function checkIfBeingBoss() { //检查是否变成了门派老大！
	if(getMenpaiBoss(getMenpaiId()) == player.getName()) {
		cm.worldMessage(6, "恭喜" + player.getName() + "成为了" + getMenpaiName() + "的门派老大！！");
	}
	return;
}

function getMenpaiMemberPoints() { //得到门派角色的贡献度
	var data = player.customSqlResult("SELECT points FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		return data.get(0).get("points");
	}
}

function AddMenpaiMember(mpid) { //在某个门派中增加一个成员
	var data = player.customSqlResult("SELECT * FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		return false;
	}
	player.customSqlInsert("INSERT INTO menpaiMember VALUES(?,?,?,?,?,?,?)", null, mpid, player.getId(), player.getName(), 0, 0, null); // 載入數據
	setEventPoints(eventid, player.getId(), 1);
	return true;
}

function getMenpaiName() { //得到角色门派的名字
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	if(i == 1) {
		return "飞龙在天";
	} else if(i == 2) {
		return "虎啸九天";
	} else {
		return i;
	}
}

function getMenpaiItem() { //得到角色门派的勋章代码
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	if(i == 1) {
		return "1142745";
	} else if(i == 2) {
		return "1142746";
	} else {
		return i;
	}
}

function getMenpaiNpc() { //得到角色门派的NPC代码
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	if(i == 1) {
		return "2091133";
	} else if(i == 2) {
		return "2091134";
	} else {
		return i;
	}
}

function getMenpaiId() { //得到角色门派的ID
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	return i;
}
// ----- 分割線（下面是活動需要函數） ------
function DelEventPoints(Eventid, charid) {
	return player.customSqlUpdate("delete from EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
}

function DelEventPoints(Eventid, charid) {
	return player.customSqlUpdate("delete from EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
}

function getEventTimes(Eventid, charid) { //通過eventid來得到參與這個活動的次數
	var i = 0;
	var Times = player.customSqlResult("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查詢數據
	if(Times.length > 0) {
		i = Times.get(0).get("times"); //得到次數
	}
	return parseInt(i);
}

function getEventPoints(Eventid, charid) { //通過eventid來得到參與這個活動的點數
	var i = 0;
	var Times = player.customSqlResult("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查詢數據
	if(Times.length > 0) {
		i = Times.get(0).get("points"); //得到點數
	}
	return parseInt(i);
}

function setEventPoints(Eventid, charid, points) { //通過eventid來給予參與這個活動的點數
	var i = 0;
	var Times = player.customSqlResult("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查詢數據
	if(Times.length == 0) { //insert
		return player.customSqlInsert("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)", null, Eventid, player.getId(), player.getName(), points, this.getEventTimes(1, charid), null); // 載入數據
	} else { //update
		return player.customSqlUpdate("update EventTimes set points = points+? where eventid = " + Eventid + " and cid = " + charid + "", points); //更新為已使用
	}
}

function setEventTimes(Eventid, charid, times) { //通過eventid來設置參與這個活動的次數
	var i = 0;
	var Times = player.customSqlResult("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + ""); // 查詢數據
	if(Times.length == 0) { //insert
		return player.customSqlInsert("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)", null, Eventid, player.getId(), player.getName(), this.getEventPoints(2, charid), times, null); // 載入數據
	} else { //update
		return player.customSqlUpdate("update EventTimes set times = times+? where eventid = " + Eventid + " and cid = " + charid + "", times); //更新為已使用
	}
}