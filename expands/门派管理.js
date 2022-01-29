/*
 * 
 * 門派系統（門派管理）
 */

/*
 - menpaiMember
 id,mpid,charid,charName,points,type,date
 id - index
 mpid - 外鍵mpid
 mpid = 1  飞龙在天
 mpid = 2  虎啸九天
 charid - 角色id
 charname - 角色名字
 points - 角色貢獻度
 type - 角色在門派中扮演的角色
 type = 0 普通成員
 type = 1 門派老大
 date - 角色門派加入時間
 */
var status;

var eff = "#fEffect/CharacterEff/1051296/1/0#";
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#"; //黄色条
var p;
var eventid = 16711; //活動ID
var menpaiboss = false;
var mpid;
var Reward = Array( //飞龙在天
	Array(5062009, 10),
	Array(5062010, 10),
	Array(4310143, 20) //BOSS币
);
var Reward1 = Array( //虎啸九天
	Array(5062009, 10),
	Array(5062010, 10),
	Array(4310143, 20) //BOSS币
);

if(getMenpaiId() == 0) {
	player.runScript("门派选择");
} else {
	if(getMenpaiBoss(getMenpaiId()) == player.getName()) {
		menpaiboss = true;
	}
	mpid = getMenpaiId();
	var text = "";
	text += "\t\t\t #d #i" + getMenpaiItem() + "# #fs20##fn黑体#" + getMenpaiName() + " #i" + getMenpaiItem() + "##fs13#\r\n"
	text += "  " + wi8 + "\r\n";
	text += "\t\t#b门派威望：#r" + (getMenpaiPoints(mpid) + getMenpaiPPoints(mpid)) + "\r\n"
	text += "\t\t#b总人數：#r" + getMenPaiMemberTotal(mpid) + "\r\n";
	text += "\t\t#b我的贡献度：#r" + getMenpaiMemberPoints() + "\r\n";
	if(menpaiboss) {
		text += "\t\t#b目前我的职位是：#r门派老大#k\r\n\r\n";
	} else {
		text += "\t\t#b目前我的职位是：#d门派成员#k\r\n\r\n";
	}
	text += "#L0#" + eff + " #r门派每日奖励领取。\r\n";
	//text += "#L5#" + eff + " #d门派任务令。\r\n";
	text += "#L6#" + eff + " #d补领门派勋章\r\n";
	text += "#L9#" + eff + " #d购买愤怒符咒(需要20E金币哦)\r\n";
	text += "#L99#" + eff + " #b门派系统介绍（贡献度获取方式）\r\n"; //
	let selection = npc.askMenu(text, getMenpaiNpc());

	if(selection == 2) {
		npc.say(RankingNew(mpid));
	} else if(selection == 5) { //门派任务
		player.runScript("门派任务主页");
	} else if(selection == 6) { //门派任务
		if(mpid==1){
			var toDrop = player.makeItemWithId(1142745);

			toDrop.setStr(30); //装备力量
			toDrop.setDex(30); //装备敏捷
			toDrop.setInt(30); //装备智力
			toDrop.setLuk(30); //装备运气
			toDrop.setPad(30); //物理攻击
			toDrop.setMad(30); //魔法攻击
			//toDrop.setDamR(10);
			toDrop.setCHUC(25);
			player.gainItem(toDrop);
		}else{
			var toDrop = player.makeItemWithId(1142746);

			toDrop.setStr(30); //装备力量
			toDrop.setDex(30); //装备敏捷
			toDrop.setInt(30); //装备智力
			toDrop.setLuk(30); //装备运气
			toDrop.setPad(30); //物理攻击
			toDrop.setMad(30); //魔法攻击
			toDrop.setCHUC(25);
			player.gainItem(toDrop);
		}
	npc.say("补领成功");
		
	} else if(selection == 9) { //传送门派地图
		if(player.hasMesos(2000000000)){
			
			let sel =npc.askYesNo("购买将会扣除你的20E金币哦，请确认是否要购买呢？");
			if(sel==1){
				player.loseMesos(2000000000);
				var toDrop = player.makeItemWithId(1162039); // 生成一个Equip类
				toDrop.setStr(20); //装备力量
				toDrop.setDex(20); //装备敏捷
				toDrop.setInt(20); //装备智力
				toDrop.setLuk(20); //装备运气
				toDrop.setPad(15); //物理攻击
				toDrop.setMad(15); //魔法攻击
				toDrop.setCHUC(1); //
				toDrop.setStatR(5);
				
				player.gainItem(toDrop);
				npc.say("领取成功 。");
			}
			
		}else{
			npc.say("金币不足，需要20E金币");
		}
		

	} else if(selection == 7) { //传送门派地图
		if(mpid == 1) {
			player.changeMap(706041400);
		} else {
			player.changeMap(706041350);
		}
	} else if(selection == 99) {
		npc.say("#b门派活跃度来源于捐献获得。\r\n#b\r\n #k");
	} else if(selection == 1) { //老大领取怪物召唤包
		var txt = "#fn黑体##fs15#尊敬的" + getMenpaiName() + "派老大:\r\n";
		txt += "你可以领取道具#i2432252#,召唤各种强力BOSS。\r\n";
		txt += "#r注意：#k只能在门派地图使用召唤功能。\r\n";
		txt += "每日限领取1个，请妥善保管！";
		let sel = npc.askYesNo(txt, getMenpaiNpc())
		if (getEventCount("老大召唤") == 1) {
            npc.say("对不起，你今天已经领取过啦。");
            
        }else{
			setEventCount("老大召唤",0,1);
			player.gainItem(2432252, 1);
			npc.say("领取成功 。");
			npc.broadcastPlayerNotice(0x29, " [门派相争] :    恭喜 " + cm.getChar().getName() + " 领取了门派老大BOSS召唤书.");

		}
		
	} else if(selection == 0) { //每日奖励
		if(mpid == 1) {
			if(getEventCount("mp1") >= 1 || player.getOnlineTime() <= 300) {
				npc.say("福利每天只能领取一次！并且需要在线5个小时");
			} else {
				var pass = true;
				var text = "";
				for(var i = 1; i < 4; i++) {
					if(player.getFreeSlots(i) < Reward.length) {
						pass = false;
						break;
					}
				}
				if(pass) {
					for(var i = 0; i < Reward.length; i++) {
						player.gainItem(Reward[i][0], Reward[i][1]);
						text += "#v" + Reward[i][0] + "##t" + Reward[i][0] + "# x" + Reward[i][1] + "\r\n"
					}
					setEventCount("mp1",1,1);
					npc.say("成功領取了门派福利！\r\n" + text);
				} else {
					npc.say("对不起，您的背包栏不足。\r\n必須腾出" + Reward.length + "个格子。")
				}
			}
		} else {
			if(getEventCount("mp1") >= 1 || player.getOnlineTime() <= 300) {
				npc.say("福利每天只能领取一次！并且需要在线5个小时");
				status = -1;
			} else {
				var pass = true;
				var text = "";
				for(var i = 1; i < 4; i++) {
					if(player.getFreeSlots(i) < Reward1.length) {
						pass = false;
						break;
					}
				}
				if(pass) {
					for(var i = 0; i < Reward1.length; i++) {
						player.gainItem(Reward1[i][0], Reward1[i][1]);
						text += "#v" + Reward1[i][0] + "##t" + Reward1[i][0] + "# x" + Reward1[i][1] + "\r\n"
					}
					setEventCount("mp1",1,1)
					npc.say("成功領取了门派福利！\r\n" + text);
				} else {
					npc.say("对不起，您的背包栏不足。\r\n必須腾出" + Reward1.length + "个格子。")
				}
			}
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

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 1, 0);
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
	var result = player.customSqlResult("SELECT * FROM menpaiMember where mpid = " + mpid + " ORDER BY points DESC LIMIT 50");
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