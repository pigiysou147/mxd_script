/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：Garden
 *  
 *  @Author Jackson 
 */

/* global cm */

﻿
var status = -1;
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var wi1 = "#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#"; //星星图标

var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var count =0;
while(count<20){
	count++

var gardenData = null;
var gardenFlowerPot = null;
var typed = -1;
var operationId = 0;
var buyFlower = null;

gardenData = getGardenInfo();
var text = "\t" + epp + "  #r#e花园 - 培养之室  " + epp + "\r\n\r\n";
text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "#k#k\r\n";
text += "\t\t\t" + icon1 + " #e#d花园等级：#r[" + gardenData['level'] + "]#d 级  \r\n";
text += "\t\t\t" + icon1 + " #e#d经验值：#r[" + gardenData['exp'] + "/" + calcLevelUp(gardenData['level']) + "]#k\r\n";
text += "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "" + tz13 + "" + tz14 + "" + tz12 + "#k#k\r\n";
text += "               " + "#b#L3#" + icon2 + "花园介绍" + icon2 + "#l\r\n\r\n";
text += "  " + "#b#L0#" + icon2 + " 照顾花朵#l";
text += "#b#L1#" + icon2 + " 扩建花园#l";
text += "#b#L2#" + icon2 + " 购买种子#l";
let selection = npc.askMenu(text);
if(selection == 3) {
	var text = "\t每个角色初生花园技术等级为1级。可以拥有1个花盆，提升等级之后可以扩建花园增加花盆，花园技术等级决定你能的花种。每当收获时可以获得经验和花的产物。任何的花只要超过一天没有采摘就会枯萎。\r\n";
	text += "\t每天可以为的花进行一次浇水、施肥，浇水消耗10点活力值值，可以减少1小时的作物成长时间，施肥消耗20点活力值值，可以减少2小时的作物成长时间。";
	npc.say(text);
}else if(selection==2){
			//购买种子操作
			var text = "#d#e以下是您的等级可以购买的种子：#n#k\r\n";
			var flowers = getFlowers();
			for(var key in flowers) {
				var tips = flowers[key][1] + "#n#b级";
				if(flowers[key][1] > gardenData['level'])
					tips = "(需要" + flowers[key][1] + "级)#n#b";
				text += "#b#L" + key + "##i" + flowers[key][0] + ":# #t" + flowers[key][0] + "#种子 #r#e" + tips + " (产量：" + flowers[key][4] + "~" + flowers[key][5] + ")#l\r\n";
			}
			text += "";
			let sel=npc.askMenuS(text);
			//输入数量
			var flower = getFlowers();
			flower = flower[sel];
			buyFlower = flower;
			var ripeningTime = flower[3] * 3600;
			var DHM = toDHM(ripeningTime);
			var text = "\t\t\t\t\t#d#e★ 种子信息 ★#n#k\r\n";
			text += icon3 + "#r品种：#b#v" + flower[0] + "##t" + flower[0] + "#种子\r\n";
			text += icon3 + "#r产量：#b" + flower[4] + "~" + flower[5] + "\r\n";
			text += icon3 + "#r单价：#b" + flower[2] + " 游戏币\r\n";
			text += icon3 + "#r成熟时间：#b" + DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分#k\r\n\r\n";
			text += icon3 + "#d#e请输入你要购买的数量：#n#k\r\n";
			let quantity=npc.askNumberS(text, 0, 1, 100);
			
			var cost = buyFlower[2] * quantity;
			if(gardenData['level'] < buyFlower[1]) {
				npc.say("您的花园等级不足，无法购买该种子。\r\n");
			} else if(!player.hasMesos(cost) ) {
				npc.say("游戏币不足，购买失败！");
				
			} else {
				player.loseMesos(cost);
				gainSeed(buyFlower[0], quantity);
				npc.say("购买成功！\r\n");
			}
}else if(selection==1){
	var meso = (1 + player.getPQLog("扩建花坛")) * 200000000;
	let sel=npc.askYesNo("扩建花园需要#r"+meso+"#k，扩建之后将会多出一个花盆，是否扩建？");
	if(sel==1){
		
		if(player.hasMesos(meso)) {
					if(addFlowerPot()) {
						player.loseMesos(meso);
						player.addPQLog("扩建花坛",1,999);
						npc.say("扩建成功！\r\n");
					} else {
						npc.say("扩建失败！您的#r花园等级不足#k或花盆数量已达到#r6个#k，无法继续扩建，请先提升花园等级。\r\n");
					}
				} else {
					npc.say("您没有那么多游戏币！\r\n");
		}
	}
}else if(selection==0){
	gardenFlowerPot = getFlowerPot();
	var currentTimestamp = java.lang.System.currentTimeMillis();
	var text = "\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
	for(var key in gardenFlowerPot) {
		var seedid = gardenFlowerPot[key]['seedid'];
		var flowerpotid = gardenFlowerPot[key]['id'];
		var expiration = gardenFlowerPot[key]['expiration'];
		if(seedid != 0) {
			var tips = "";
			var seconds = (expiration - currentTimestamp) / 1000;
			if(seconds <= 0)
				tips = "#g作物已经成熟#k";
			else {
				var DHM = toDHM(seconds);
				tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分";
			}
			text += "#L" + flowerpotid + "#" + icon1 + " #b[#i" + seedid + ":#]#k " + tips + "#l\r\n";
		} else {
			text += "#L" + flowerpotid + "#" + icon1 + " #b[这是一个空的花盆，点击栽种]\r\n";
		}

	}
	let flowerpotid =npc.askMenuS(text);
	
	var currentTimestamp = java.lang.System.currentTimeMillis();
	
	operationId = flowerpotid;
	var seedid = gardenFlowerPot[flowerpotid]['seedid'];
	var expiration = gardenFlowerPot[flowerpotid]['expiration'];
	var text = "\t\t\t\t\t#d#e★ 我的花园 ★#n#k\r\n";
	if(seedid != 0 && seedid != -1) {
		var seconds = (expiration - currentTimestamp) / 1000;
		var flag = false;
		var tips = '';
		if(seconds <= 0) {
			flag = true;
			var tips = "#g作物已经成熟，可以采摘#k";
		} else {
			var DHM = toDHM(seconds);
			tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小时" + DHM[2] + "分#k";
		}
		text += "#r#t" + seedid + "##k\r\n";
		text += tips + "\r\n";
		if(!flag) {
			text += "#b#L0#" + icon2 + "浇水#l\t#L1#" + icon2 + "施肥#l\t#L2#" + icon2 + "挖除#l";
		} else {
			text += "#b#L4#" + icon2 + "采摘#l\t#L2#" + icon2 + "挖除#l";
		}
		let ch =npc.askMenuS(text);
		if(ch==0){
			//浇水操作
			if(player.getPQLog("花园浇水" + operationId) > 0) {
				npc.say("啊，好像浇过水了，不能拔苗助长！\r\n");
			} else {
				if(player.getCashShopCurrency(1) >= 3000) {
					player.addPQLog("花园浇水" + operationId,1,1);
					//活力
					player.modifyCashShopCurrency(1, -3000);
					Operations(operationId, 0);
					npc.say("消耗了3000点卷，缩短了1小时成长时间。\r\n好开心，花儿又长大了一点！\r\n");
				} else {
					npc.say("糟糕了，没有点卷了！\r\n");
				}
			}
		}else if(ch==1){
			//施肥操作
			if(player.getPQLog("花园施肥" + operationId) > 0) {
				npc.say("啊，好像施过肥了，不能拔苗助长！\r\n");
			} else {
				if(player.getCashShopCurrency(1) >= 5000) {
					player.addPQLog("花园施肥" + operationId);
					player.modifyCashShopCurrency(1, -5000);
					Operations(operationId, 1);
					npc.say("消耗了5000点卷，缩短了2小时成长时间。\r\n好开心，花儿又长大了一点！\r\n");
				} else {
					npc.say("糟糕了，没有点卷了！\r\n你目前点卷：" + cm.getNX(1) + "\r\n");
				}
			}
		}else if(ch==2){
			clearFlowerPot(operationId);
			npc.say("噢，挖好了，让我来种上新的种子吧！\r\n");
		}else{
			//采摘果实
			var currentTimestamp = java.lang.System.currentTimeMillis();
			var seedid = gardenFlowerPot[operationId]['seedid'];
			if(player.getFreeSlots(Math.floor(seedid / 1000000)) < 2) {
				npc.say("你的包裹空间好像不够呢，整理一下再来采摘吧！");
				
			}else{
				var expiration = gardenFlowerPot[operationId]['expiration'];
				var seconds = (expiration - currentTimestamp) / 1000;
				var flower = getFlower(seedid);
				var catchNum = Math.floor(Math.random() * (flower[5] - flower[4] + 1) + flower[4]);
				var flowerLevel = flower[1];
				var cash = flowerLevel * 20;
				if(seconds <= 0) {
					player.gainItem(seedid, catchNum);
					//清空花盆
					clearFlowerPot(operationId);
					//得到经验
					var getExp = gainPlantExp(seedid);
					var levelStr = "";
					if(getExp == -1) {
						levelStr = "花园等级提升了#r1#k级！";
					} else {
						levelStr = "得到了#r" + getExp + "#k点花园经验值";
					}
					player.modifyCashShopCurrency(1, cash);
					npc.say("好开心，终于到了收获果实的季节！\r\n得到了#b" + catchNum + "#k个#v" + seedid + "##b#t" + seedid + "##k\r\n得到了#r" + cash + "#k点卷\r\n" + levelStr + "\r\n"); //#L0##b" + icon2 + "点我返回#l
				} else {
					npc.say("骚年，你真的要强行采摘吗？");
				}
			}
			
		}
	} else {
		//栽种操作
		//识别每个坑位栽种的物品
		//达到每个坑位不能重复
		text += "#r这是一个空的花盆，您可以进行栽种。\r\n";
		text += "#b#L5#" + icon2 + "栽种#l";
		let ch =npc.askMenuS(text);
		var seeds = getSeeds();
		text = "#d#e选择想要种下的种子：#n#k\r\n"
		if(seeds != '' && seeds != null && seeds != Array()) {
			for(var key in seeds) {
				text += "#b#L" + seeds[key][0] + "#[#v" + seeds[key][0] + "##t" + seeds[key][0] + "#种子] 数量：[" + seeds[key][1] + "]个#l\r\n";
			}
			let seed=npc.askMenuS(text);
			
			//查询这个IP下 总共的坑位数
			//先拿到IP 
			
			//var recentip = player.customSqlResult("select recentip from accounts where id = ?", player.getAccountId()).get(0).get("recentip");
			var recentip = getmac();
			var sql = "SELECT count(id) count from zcustom_flowerpot where recentip=? and expiration <>-1 ";
			var count = player.customSqlResult(sql, recentip).get(0).get("count");
			if(count<6){
				plantFlower(seed, operationId,recentip);
				text = "种好咯！快快长大吧！\r\n";
				npc.say(text);
			}else{
				npc.say("同一个IP只能同时种植6个未成熟的作物哦");
			}
			
			
			
		} else {
			text = "啊哦，好像没有种子了。得去买一些！\r\n";
			npc.say(text);
			
		}
		
	}
}

}
/*



自定义函数群

*/
/*
 得到花园数据
 */
function getGardenInfo() {
	var charid = player.getId();
	var sql = "SELECT * FROM zcustom_garden WHERE charid = ? limit 1";
	var data = player.customSqlResult(sql, charid);

	if(data.size() > 0) {
		var info = {};
		var result = data.get(0);
		info['level'] = result.get('level');
		info['exp'] = result.get('exp');
		return info;
	} else {
		sql = "INSERT INTO zcustom_garden(charid, level, exp) VALUES(?,1,0)";
		player.customSqlInsert(sql, charid);
		return getGardenInfo();
	}
}
/*
 升级经验计算
 */
function calcLevelUp(level) {
	var base = 10 + level * level * 5;
	return base;
}


/*
 时间转换
 */
function toDHM(seconds) {
	var days = Math.floor(seconds / 86400);
	var hour = Math.floor(seconds % 86400 / 3600);
	var minute = Math.floor(seconds % 86400 % 3600 / 60);
	return Array(days, hour, minute);
}

 /*
 得到种子
 */
function gainSeed(seedid, quantity) {
	if(quantity == null) {
		quantity = 1;
	}
	var charid = player.getId();
	var sql = "SELECT * FROM zcustom_seedpackage WHERE charid = ? and seedid = ?";
	var data = player.customSqlResult(sql, charid, seedid);

	if(data.size() > 0) {
		sql = "UPDATE zcustom_seedpackage SET quantity=quantity+? WHERE charid=? AND seedid=?";
		player.customSqlUpdate(sql, quantity, charid, seedid);
	} else {
		sql = "INSERT INTO zcustom_seedpackage(charid, seedid, quantity) VALUES(?,?,?)";
		player.customSqlInsert(sql, charid, seedid, quantity);
	}
	return true;
}

/* 新增加花盆 */
function addFlowerPot() {
	var charid = player.getId();
	if(isAllowUpgrade()) {
		var sql = "INSERT INTO zcustom_flowerpot(charid, seedid, expiration) VALUES(?,0,-1)";
		player.customSqlInsert(sql, charid);
		return true;
	} else {
		return false;
	}
}
/*
 是否允许扩建
 */
function isAllowUpgrade() {
	var charid = player.getId();
	var sql = "SELECT COUNT(id) as pn FROM zcustom_flowerpot WHERE charid = ?";
	var data = player.customSqlResult(sql, charid);

	var flag = true;
	if(data.size() > 0) {
		var result = data.get(0);
		var pn = result.get('pn');
		if(pn < gardenData['level'] && pn < 6) {
			flag = true;
		} else {
			flag = false;
		}
	}
	return flag;
}

/*
 得到花盆数据
 */
function getFlowerPot() {
	var charid = player.getId();
	var sql = "SELECT * FROM `zcustom_flowerpot` WHERE `charid` = ?";

	var data = player.customSqlResult(sql, charid);

	var results = {};
	for(var i = 0; i < data.size(); i++) {
		var result = data.get(i);
		if(null == result) {
			break;
		}
		var info = {};
		info['id'] = result.get('id');
		info['seedid'] = result.get('seedid');
		info['expiration'] = result.get('expiration');
		results[info['id']] = info;
	}
	if(isEmptyObject(results)) {
		sql = "INSERT INTO zcustom_flowerpot(charid, seedid, expiration) VALUES(?,0,-1)";
		player.customSqlInsert(sql, charid);
		return getFlowerPot();
	}
	return results;
}
function isEmptyObject(e) {
	var t;
	for(t in e)
		return !1;
	return !0
}

/*
 种花
 */
function plantFlower(flowerid, flowerpotid,recentip) {
	var charid = player.getId();
	var flower = getFlower(flowerid);
	var currentTimestamp = java.lang.System.currentTimeMillis();
	var expiration = flower[3] * 3600 * 1000 + currentTimestamp;
	var sql = "UPDATE zcustom_flowerpot p, zcustom_seedpackage s SET p.recentip=?,p.expiration=?, p.seedid=?, s.quantity=s.quantity-1 WHERE s.seedid=? and p.charid=s.charid and p.id=? and p.charid=?";

	player.customSqlUpdate(sql, recentip,expiration, flowerid, flowerid, flowerpotid, charid);
}
/*
 获取背包种子
 */

function getSeeds() {
	var charid = player.getId();
	var sql = "SELECT * FROM zcustom_seedpackage WHERE charid = ? and quantity>0 order by seedid desc";
	var data = player.customSqlResult(sql, charid);

	var seeds = Array();
	for(var i = 0; i < data.size(); i++) {
		var result = data.get(i);
		if(null == result) {
			break;
		}
		seeds.push(Array(result.get('seedid'), result.get('quantity')));
	}
	return seeds;
}

function getFlower(flowerid) {
	var flowers = getFlowers();
	for(var key in flowers) {
		if(flowers[key][0] == flowerid)
			return flowers[key];
	}
}
/*
 获取花信息
 */
function getFlowers() {
	return Array(
		//物品ID，等级，价格，成熟时间(小时),产量最小值，产量最大值
		//恢复类
		Array(4001832, 1, 10000, 5, 100, 500), // 咒语痕迹
		Array(2340000, 3, 500000, 6, 1, 2), // 祝福卷轴
		Array(4001839, 5, 200000, 12, 1000, 2000), // 星星
		Array(2049750, 8, 1000000, 20, 1, 2), // S级潜能卷轴 80%
		Array(2049116, 10, 5000000, 20, 1, 2), // 强化混沌卷轴
		Array(2022531, 13, 20000000, 22, 1, 2), // 四叶草花语
		Array(2049323, 16, 50000000, 22, 2, 4), // 高级装备强化卷轴 无损
		Array(2049604, 19, 50000000, 22, 1, 2), // 还原卷轴 60%
		Array(2614063, 20, 100000000, 22, 1, 1) // 突破百万之石 50%

	);
}
/*
 浇水施肥操作
 */
function Operations(flowerpotid, type) {
	var growUp = (type + 1) * 60 * 60 * 1000;
	var charid = player.getId();
	var sql = "UPDATE zcustom_flowerpot SET expiration=expiration-? WHERE id=? and charid=?";

	player.customSqlUpdate(sql, growUp, flowerpotid, charid);
}
/*
 挖除操作
 */
function clearFlowerPot(flowerpotid) {
	var charid = player.getId();
	var sql = "UPDATE zcustom_flowerpot SET expiration=-1, seedid=0 WHERE id=? and charid=?";
	player.resetPQLog("花园施肥" + flowerpotid);
	player.resetPQLog("花园浇水" + flowerpotid);

	player.customSqlUpdate(sql, flowerpotid, charid);

}
/*
 得到经验
 */
function gainPlantExp(flowerid) {
	var expNum = getFlowerLevel(flowerid) * 10;
	var charid = player.getId();
	var pstmt = null;
	if((gardenData['exp'] * 1 + expNum) >= calcLevelUp(gardenData['level'])) {
		var lastExp = (gardenData['exp'] * 1 + expNum) - calcLevelUp(gardenData['level']);
		var sql = "UPDATE zcustom_garden SET exp=?, level=level+1 WHERE charid=?";
		player.customSqlUpdate(sql, lastExp, charid);
		return -1;
	} else {
		var sql = "UPDATE zcustom_garden SET exp=exp+? WHERE charid=?";
		player.customSqlUpdate(sql, expNum, charid);
		return expNum;
	}
	return 0;
}
function getFlowerLevel(flowerid) {
	var flowers = getFlowers();
	for(var key in flowers) {
		if(flowers[key][0] == flowerid)
			return flowers[key][1];
	}
}
function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}