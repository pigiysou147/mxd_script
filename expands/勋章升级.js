/*芬芬时尚潮流  在线时间兑换东西*/
var status = 0;
var eff = "#fEffect/CharacterEff/1112904/0/0#"
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#"; //黄色条
var wi2 = "#fUI/piggyBarMinigame.img/crunch/9#"; //
var wi1 = "#fUI/piggyBarMinigame.img/crunch/1#"; //
var xx = "#fUI/piggyBarMinigame.img/crunch/1#"; //
var yy = "#fUI/UIWindowBT.img/WorldMap/BtNext/normal/0#"; //
var jj = "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#"; //
var p;
var eventid = 16711; //活動ID
var menpaiboss = false;
var mpid;
var sel;
var sl = 5; //兑换数量
var sl1 = 10; //兑换数量
var sl2 = 10000; //兑换数量

var reward = Array(
		//等级 贡献度 物品ID 四维 攻击 
	Array(2, 2000, 1162040, 30, 20, 1, 8), //
	Array(3, 3000, 1162041, 50, 30, 3, 10), //
	Array(4, 5000, 1162042, 80, 50, 5, 15), //			 
	Array(5, 8000, 1162043, 150, 80, 7, 20), //       
	Array(6, 10000, 1162044, 200, 100, 9, 25), //
	Array(7, 15000, 1162045, 250, 150, 12, 30),
	Array(8, 20000, 1162046, 300, 200, 15, 35)

);

mpid = getMenpaiId();
gx = getMenpaiMemberPoints();
var txt = " " + wi8 + "\r\n\r\n";
txt += "#fs16##fn黑体#" + wi1 + " 你当前的门派贡献度为：#r" + gx + "#k。#fs14##k\r\n\r\n";
txt += "" + wi1 + " 升级时，请#r取下#k口袋装备，放在背包的第一个格子。\r\n";
for(var i = 0; i < reward.length; i++) {
	if(player.getPQLog("口袋" + i) == 0) {

		txt += "#d#L" + i + "# " + wi2 + " 升级至#i" + reward[i][2] + "# #z" + reward[i][2] + "#  #g[未完成]#l\r\n";
	} else {
		txt += "#d#L" + i + "# " + wi2 + " 升级至#i" + reward[i][2] + "# #z" + reward[i][2] + "#  #r[已完成]#l\r\n";
	}
}

let sel = npc.askMenuS(txt);

var txt = "#fn黑体#";

txt += "#fs17##d" + yy + " 升级可获得: #i" + reward[sel][2] + "##b #z" + reward[sel][2] + "#\r\n\r\n#fs15#";
txt += "#d" + jj + " 四维属性: + #r" + reward[sel][3] + "\r\n";
txt += "#d" + jj + " 攻击力: + #r" + reward[sel][4] + "\r\n";
txt += "#d" + jj + " 魔法力: + #r" + reward[sel][4] + "\r\n";
txt += "#d" + jj + " 星之力: + #r" + reward[sel][5] + "\r\n";
txt += "#d" + jj + " 全属性: + #r" + reward[sel][6] + "%\r\n\r\n";
txt += "" + yy + " #d升级要求贡献度达到 #r" + reward[sel][1] + " (不扣除)";

 npc.sayNext(txt);
var itemID = reward[sel][2]
var itemID1 = itemID - 1;
var all = reward[sel][3];
var atk = reward[sel][4];
var state = reward[sel][6];
var Enh = reward[sel][5];
var cost = reward[sel][1];
var item =player.getInventorySlot(1,1);
if(itemID1!=item.getDataId()) {
	npc.say("请将#i" + itemID1 + "#放在背包内的第一个格子!");
} else {

	if(gx >= reward[sel][1] && player.getPQLog("口袋" + sel) <1) {
		player.loseInvSlot(1, 1);
		var toDrop = player.makeItemWithId(itemID); // 生成一个Equip类
		toDrop.setStr(all); //装备力量
		toDrop.setDex(all); //装备敏捷
		toDrop.setInt(all); //装备智力
		toDrop.setLuk(all); //装备运气
		toDrop.setPad(atk); //物理攻击
		toDrop.setMad(atk); //魔法攻击
		toDrop.setCHUC(Enh); //
		toDrop.setStatR(state);
		//设置潜能等级
		toDrop.setGrade(item.getGrade());
		//设置潜能
		toDrop.setOption( 1, item.getOption(1,false),false);
		toDrop.setOption( 2,item.getOption(2,false), false);
		toDrop.setOption( 3, item.getOption(3,false),false);
		toDrop.setOption( 1,item.getOption(1,true), true);
		toDrop.setOption( 2, item.getOption(2,true),true);
		toDrop.setOption( 3, item.getOption(3,true),true);
		player.gainItem(toDrop);
		player.addPQLog("口袋" + sel, 1,999);
		npc.broadcastGachaponMsgEx("『门派相争』:" + " : " + "恭喜" +player.getName() + " 将口袋升级为第" + reward[sel][0] + "阶了!",toDrop);
		npc.broadcastWeatherEffectNotice(2,"『门派相争』:" + " : " + "恭喜" +player.getName() + " 将口袋升级为第" + reward[sel][0] + "阶了!",10000);
				
		//p.AddMenpaiMemberPoints(-cost);

		//cm.worldSpouseMessage(0x1F, "『门派相争』" + " : " + "恭喜" + cm.getChar().getName() + " 将口袋升级为第" + reward[sel][0] + "阶了!");
		//cm.worldSpouseMessage(0x1F, "『门派相争』" + " : " + "恭喜" + cm.getChar().getName() + " 将口袋升级为第" + reward[sel][0] + "阶了!");
		//cm.worldSpouseMessage(0x1F, "『门派相争』" + " : " + "恭喜" + cm.getChar().getName() + " 将口袋升级为第" + reward[sel][0] + "阶了!");
		//cm.startMapEffect("恭喜" + player.getName() + " 将口袋升级为第" + reward[sel][0] + "阶了!", 5120026);
		npc.say("恭喜你升级成功!");
	} else {
		npc.say("对不起,你的贡献度不足 " + reward[sel][1] + "点或者你已经升级过了!");
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

function FormatString(c, length, content) {
	var str = "";
	var cs = "";
	if(content.length > length) {
		str = content;
	} else {
		for(var j = 0; j < length - content.getBytes("GB2312").length; j++) {
			cs = cs + c;
		}
	}
	str = content + cs;
	return str;
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

function getMenpaiId() { //得到角色门派的ID
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	return i;
}

function getMenpaiBoss(mpid) { //通過贡献度排名第一个的情況来确定门派老大(24小时內必须有增加活跃度)。
	var RankDataBase = player.customSqlResult("SELECT charname,DATE_FORMAT(date,'%m月%d日') as date FROM menpaiMember where mpid = " + mpid + " and DATE_SUB(CURDATE(), INTERVAL 1 DAY) <= date(date) ORDER BY points DESC LIMIT 1");
	if(RankDataBase.size() > 0) {
		return RankDataBase.get(0).get("charname");
	}
}

function getMenpaiRank(mpid) { //获得门派头衔
	var RankDataBase = player.customSqlResult("SELECT charname,DATE_FORMAT(date,'%m月%d日') as date FROM menpaiMember where mpid = " + mpid + " and DATE_SUB(CURDATE(), INTERVAL 1 DAY) <= date(date) ORDER BY points DESC LIMIT 20");
	if(RankDataBase.size() > 0) {
		return RankDataBase.get(0).get("charname");
	}
}

function getMenPaiMemberTotal(mpid) { //门派总人数
	var i = 0;
	var data = player.customSqlResult("SELECT id FROM menpaiMember where mpid = " + mpid + ""); // 查询数据
	for(var key in data) {
		if(data.size() > 0) {
			i++;
		}
	}
	return i;
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