/**
*花園系統  739977676 
**/


var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var wi1 = "#fUI/SoulUI.img/DungeonMap/icon/dungeonItem/0#";  //星星圖標

var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黃星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //紅星
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

var gardenData = null;
var gardenFlowerPot = null;
var typed = -1;
var operationId = 0;
var buyFlower = null;

var needMoney = 500000000;//擴建需要金幣


/* 花園信息 */
while(true){
	gardenData = getGardenInfo();
	var text= "\t"+epp+"  #r#e花園 - 培養之室  "+epp+"\r\n\r\n\r\n";
	text+=""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+"#k#k\r\n\r\n";
	text+= "\t\t\t"+icon1+" #e#d花園等級：#r["+gardenData['level']+"]#d 級  \r\n";
	//text+= "\t\t\t"+icon1+" #e#d活力：#r["+getPlayerEnergy()+"]#d 點\r\n";
	//text+= "\t\t\t"+icon1+" #e#d積分：#r[" + getPlayerPoints() + "]#d 點\r\n";
	text+= "\t\t\t"+icon1+" #e#d經驗值：#r["+gardenData['exp']+"/"+calcLevelUp(gardenData['level'])+"]#k\r\n\r\n";
	text+=""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+""+tz13+""+tz14+""+tz12+"#k#k\r\n";
	text+="  "+"#b#L0#"+icon2+" 照顧花朵#l";
	text+="#b#L1#"+icon2+" 擴建花園#l";
	text+="#b#L2#"+icon2+" 購買種子#l";
	var selected = npc.askMenu(text)
	switch(selected){
		case 0:
			//照顧花朵
			gardenFlowerPot = getFlowerPot();
			var currentTimestamp = java.lang.System.currentTimeMillis();
			var text = "\t\t\t\t\t#d#e★ 我的花園 ★#n#k\r\n";
			for (var key in gardenFlowerPot) {
				var seedid = gardenFlowerPot[key]['seedid'];
				var flowerpotid = gardenFlowerPot[key]['id'];
				var expiration = gardenFlowerPot[key]['expiration'];
				if (seedid != 0) {
					var tips = "";
					var seconds = (expiration - currentTimestamp) / 1000;
					if (seconds <= 0) tips = "#g作物已經成熟#k";
					else {
						var DHM = toDHM(seconds);
						tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小時" + DHM[2] + "分";
					}
					text += "#L" + flowerpotid + "#" + icon1 + " #b[#i" + seedid + ":#]#k " + tips + "#l\r\n";
				} else {
					text += "#L" + flowerpotid + "#" + icon1 + " #b[這是一個空的花盆，點擊栽種]\r\n";
				}
			}
			selected = npc.askMenu(text)
			
			var currentTimestamp = java.lang.System.currentTimeMillis();
			var flowerpotid = selected;
			operationId = flowerpotid;
			var seedid = gardenFlowerPot[flowerpotid]['seedid'];
			var expiration = gardenFlowerPot[flowerpotid]['expiration'];
			var text = "\t\t\t\t\t#d#e★ 我的花園 ★#n#k\r\n";
			if (seedid != 0 && seedid != -1) {
				var seconds = (expiration - currentTimestamp) / 1000;
				var flag = false;
				var tips = '';
				if (seconds <= 0) {
					flag = true;
					var tips = "#g作物已經成熟，可以采摘#k";
				} else {
					var DHM = toDHM(seconds);
					tips = "#b剩余 " + DHM[0] + "天" + DHM[1] + "小時" + DHM[2] + "分#k";
				}
				text += "#r#t" + seedid + "##k\r\n";
				text += tips + "\r\n";
				if (!flag) text += /*"#b#L0#" + icon2 + "活力澆水#l\t#L1#" + icon2 + "積分施肥#l\t*/ "#L2#" + icon2 + "強行移除#l";
				else text += "#b#L4#" + icon2 + "采摘果實#l\t#L2#" + icon2 + "挖除#l";
				selected = npc.askMenu(text)
				if(selected == 2){
					clearFlowerPot(operationId);
					npc.say("噢，挖好了，讓我來種上新的種子吧！");
				}else{
					//采摘
					var currentTimestamp = java.lang.System.currentTimeMillis();
					var seedid = gardenFlowerPot[operationId]['seedid'];
					var expiration = gardenFlowerPot[operationId]['expiration'];
					var seconds = (expiration - currentTimestamp) / 1000;
					var flower = getFlower(seedid);
					var catchNum = Math.floor(Math.random() * (flower[5] - flower[4] + 1) + flower[4]);
					var flowerLevel = flower[1];
					var cash = flowerLevel * 20;
					if (!player.canGainItem(seedid, catchNum)) {
						npc.say("你的包裹空間好像不夠呢，整理一下再來采摘吧！");
					}else{
						if (seconds <= 0) {
							player.gainItem(seedid, catchNum);
							//清空花盆
							clearFlowerPot(operationId);
							//得到經驗
							var getExp = gainPlantExp(seedid);
							var levelStr = "";
							if (getExp == -1) {
								levelStr = "花園等級提升了#r1#k級！";
							} else {
								levelStr = "得到了#r" + getExp + "#k點花園經驗值";
							}
							player.modifyCashShopCurrency(1,cash);
							npc.broadcastPlayerNotice(15,"【我的花園】 : 恭喜玩家 " + player.getName() + " 的奇珍長成，豐收的時刻來臨！");
							npc.say("好開心，終於到了收獲果實的季節！\r\n得到了#b" + catchNum + "#k個#v" + seedid + "##b#t" + seedid + "##k\r\n得到了#r" + cash + "#k點卷\r\n" + levelStr + "\r\n");
						} else {
							npc.say("沒有成熟不能采摘哦");
						}
					}
				}
			} else {
				text += "#r這是一個空的花盆，您可以進行栽種。\r\n";
				text += "#b#L5#" + icon2 + "栽種#l";
				selected = npc.askMenu(text)
				var seeds = getSeeds();
				var text = "#d#e選擇想要種下的種子：#n#k\r\n"
				if (seeds != '' && seeds != null && seeds != Array()) {
					for (var key in seeds) {
						text += "#b#L" + seeds[key][0] + "#[#v" + seeds[key][0] + "##t" + seeds[key][0] + "#種子] 數量：[" + seeds[key][1] + "]個#l\r\n";
					}
					typed = 5;
					selected = npc.askMenu(text);
					plantFlower(selected, operationId);
					text = "種好咯！快快長大吧！";
					npc.say(text);
				} else {
					text = "啊哦，好像沒有種子了。得去買一些！";
					npc.say(text);
				}
			}
			
			break;
		case 1:
			//擴建花園
			var YN = npc.askYesNo("擴建花園需要#r"+needMoney+"#k，擴建之後將會多出一個花盆，是否擴建？");
			if(YN == 1){
				if (player.hasMesos(needMoney)) {
					if (addFlowerPot()) {
						player.loseMesos(needMoney);
						npc.broadcastPlayerNotice(15,"【我的花園】 : 恭喜玩家 " + player.getName() + " 擴建了花圃！");
						npc.say("擴建成功！");
					} else {
						npc.say("擴建失敗！您的#r花園等級不足#k或花盆數量已達到#r6個#k，無法繼續擴建，請先提升花園等級。");
					}
				} else {
					npc.say("您沒有那麼多遊戲幣！");
				}
			}else{
				npc.say("真遺憾，返回繼續操作吧！");
			}
			break;
		case 2:
			//購買種子
			var text = "#d#e以下是您的等級可以購買的種子：#n#k\r\n";
			var flowers = getFlowers();
			for (var key in flowers) {
				var tips = flowers[key][1] + "#n#b級";
				if (flowers[key][1] > gardenData['level']) tips = "(需要" + flowers[key][1] + "級)#n#b";
				text += "#b#L" + key + "##i" + flowers[key][0] + ":# #t" + flowers[key][0] + "#種子 #r#e" + tips + " (產量：" + flowers[key][4] + "~" + flowers[key][5] + ")#l\r\n";
			}
			selected = npc.askMenu(text);
			var flower = getFlowers();
			flower = flower[selected];
			buyFlower = flower;
			var ripeningTime = flower[3] * 3600;
			var DHM = toDHM(ripeningTime);
			var text = "\t\t\t\t\t#d#e★ 種子信息 ★#n#k\r\n";
			text += icon3 + "#r品種：#b#v" + flower[0] + "##t" + flower[0] + "#種子\r\n";
			text += icon3 + "#r產量：#b" + flower[4] + "~" + flower[5] + "\r\n";
			text += icon3 + "#r單價：#b" + flower[2] + " 遊戲幣\r\n";
			text += icon3 + "#r成熟時間：#b" + DHM[0] + "天" + DHM[1] + "小時" + DHM[2] + "分#k\r\n\r\n";
			text += icon3 + "#d#e請輸入你要購買的數量：#n#k\r\n";
			var number = npc.askNumber(text,"0",0,999);
			var cost = buyFlower[2] * number;
			if (gardenData['level'] < buyFlower[1]) {
				npc.say("您的花園等級不足，無法購買該種子。");
			} else if (player.hasMesos(cost)) {
				player.loseMesos(cost);
				gainSeed(buyFlower[0], number);
				npc.say("購買成功！");
			} else {
				npc.say("遊戲幣不足，購買失敗！\r\n");
			}
			break;
	}
}

/*
	得到種子
*/
function gainSeed(seedid, quantity) {
	if (quantity == null) quantity = 1;
	var charid = player.getId();
	var sql = "SELECT * FROM jili_seedpackage WHERE charid = '"+charid+"' and seedid = '"+quantity+"'"
	var data = player.customSqlResult(sql);
	if (data.size() > 0) {
		sql = "UPDATE jili_seedpackage SET quantity=quantity+"+quantity+" WHERE charid='"+charid+"' AND seedid='"+seedid+"'";
		player.customSqlUpdate(sql);
	} else {
		sql = "INSERT INTO jili_seedpackage(charid, seedid, quantity) VALUES('"+charid+"','"+seedid+"','"+quantity+"')";
		player.customSqlInsert(sql);
	}
	return true;
}
/*
	獲取背包種子
*/

function getSeeds() {
	var charid = player.getId();
	var sql = "SELECT * FROM jili_seedpackage WHERE charid = '"+charid+"' and quantity>0 order by seedid desc";
	
	var data = player.customSqlResult(sql);
	var seeds = Array();
	var i = 0;
	while (i < data.size()) {
		
		seeds.push(Array(data.get(i).get('seedid'), data.get(i).get('quantity')));
		i++;
		
	}
	return seeds;
}
/*
	是否允許擴建
*/
function isAllowUpgrade() {
	var charid = player.getId();
	var sql = "SELECT COUNT(id) as pn FROM jili_flowerpot WHERE charid = '"+charid+"'";
	var rs = player.customSqlResult(sql);
	var flag = true;
	if (rs.size() > 0) {
		var pn = rs.get(0).get('pn');
		if (pn < gardenData['level'] && pn < 6) {
			flag = true;
		} else {
			flag = false;
		}
	}
	return flag;
}
/* 新增加花盆 */
function addFlowerPot() {
	var charid = player.getId();
	if (isAllowUpgrade()) {
		var sql = "INSERT INTO jili_flowerpot(charid, seedid, expiration) VALUES('"+charid+"',0,-1)";
		player.customSqlInsert(sql);
		return true;
	} else {
		return false;
	}
}
/*
	種花
*/
function plantFlower(flowerid, flowerpotid) {
	var charid = player.getId();
	var flower = getFlower(flowerid);
	var currentTimestamp = java.lang.System.currentTimeMillis();
	var expiration = flower[3] * 3600 * 1000 + currentTimestamp;
	var sql = "UPDATE jili_flowerpot p, jili_seedpackage s SET p.expiration='"+expiration+"', p.seedid='"+flowerid+"', s.quantity=s.quantity-1 WHERE s.seedid='"+flowerid+"' and p.charid=s.charid and p.id='"+flowerpotid+"' and p.charid='"+charid+"'";

	player.customSqlUpdate(sql);
}

/*
	獲取花信息
*/
function getFlowers() {
	return Array(
	//物品ID，等級，價格，成熟時間(小時),產量最小值，產量最大值
	//恢復類
	Array(2460003, 1, 2000000, 0.001, 5, 30), // 放大鏡
	Array(4001832, 2, 3000000, 0.001, 50, 100),// 咒語痕跡
	Array(2049124, 4, 5000000, 8, 1, 2),  // 正向混沌卷軸
    Array(5064000, 6 ,10000000, 10, 2, 3),  // 防爆卷軸
	Array(2049116, 8, 30000000, 12, 1, 2),  //強化混沌卷軸 
    Array(4001839, 10, 40000000, 14, 500 ,1000), //星星
	Array(2049323, 14, 50000000, 16, 1, 2),  //無損
	Array(2432127, 16, 50000000, 18, 1, 3),  //神奇餅干盒  （強化材料箱子）
	Array(2022530, 18, 100000000, 20, 1, 2), //迎春花花語
	Array(2614067, 20, 150000000, 22, 1, 3));//1000萬極限突破石100%
}

function getFlowerLevel(flowerid) {
	var flowers = getFlowers();
	for (var key in flowers) {
		if (flowers[key][0] == flowerid) return flowers[key][1];
	}
}

function getFlower(flowerid) {
	var flowers = getFlowers();
	for (var key in flowers) {
		if (flowers[key][0] == flowerid) return flowers[key];
	}
}

/*
	升級經驗計算
*/
function calcLevelUp(level) {
	var base = 10 + level * level*5;
	return base;
}
/*
	得到經驗
*/
function gainPlantExp(flowerid) {
	var expNum = getFlowerLevel(flowerid) * 10;
	var charid = player.getId();
	var pstmt = null;
	if ((gardenData['exp'] * 1 + expNum) >= calcLevelUp(gardenData['level'])) {
		var lastExp = (gardenData['exp'] * 1 + expNum) - calcLevelUp(gardenData['level']);
		var sql = "UPDATE jili_garden SET exp='"+lastExp+"', level=level+1 WHERE charid='"+charid+"'";
		player.customSqlUpdate(sql);
		return - 1;
	} else {
		var sql = "UPDATE jili_garden SET exp=exp+'"+expNum+"' WHERE charid='"+charid+"'";
		player.customSqlUpdate(sql);
		return expNum;
	}
	return 0;
}

/*
	挖除操作
*/
function clearFlowerPot(flowerpotid) {
	var charid = player.getId();
	var sql = "UPDATE jili_flowerpot SET expiration=-1, seedid=0 WHERE id='"+flowerpotid+"' and charid='"+charid+"'";
	player.resetPQLog("花園施肥" + flowerpotid);
	player.resetPQLog("花園澆水" + flowerpotid);
	player.customSqlUpdate(sql);
}
/*
	澆水施肥操作
*/
function Operations(flowerpotid, type) {
	var growUp = (type + 1) * 60 * 60 * 1000;
	var charid = player.getId();
	var sql = "UPDATE jili_flowerpot SET expiration=expiration-"+growUp+" WHERE id='"+flowerpotid+"' and charid='"+charid+"'";
	player.customSqlUpdate(sql);
}

/*
	得到花園數據
*/
function getGardenInfo() {
	var charid = player.getId();
	var sql = "SELECT * FROM jili_garden WHERE charid = '"+charid+"' limit 1";
	var data = player.customSqlResult(sql);
	if (data.size() > 0) {
		var info = Array();
		info['level'] = data.get(0).get('level');
		info['exp'] = data.get(0).get('exp');
		return info;
	} else {
		sql = "INSERT INTO jili_garden(charid, level, exp) VALUES('"+charid+"',1,0)";
		player.customSqlInsert(sql);
		return getGardenInfo();
	}
}

/*
	得到花盆數據
*/
function getFlowerPot() {
	var charid = player.getId();
	var sql = "SELECT * FROM jili_flowerpot WHERE charid = '"+charid+"'";
	var data = player.customSqlResult(sql);
	var result = Array();
	var i = 0;
	while (i < data.size()) {
		var info = Array();
		info['id'] = data.get(i).get('id');
		info['seedid'] = data.get(i).get('seedid');
		info['expiration'] = data.get(i).get('expiration');
		result[info['id']] = info;
		i++;
	}
	
	if (result == "") {
		sql = "INSERT INTO jili_flowerpot(charid, seedid, expiration) VALUES('"+charid+"',0,-1)";
		player.customSqlInsert(sql);
		return getFlowerPot();
	}
	return result;
}

/*
	時間轉換
*/
function toDHM(seconds) {
	var days = Math.floor(seconds / 86400);
	var hour = Math.floor(seconds % 86400 / 3600);
	var minute = Math.floor(seconds % 86400 % 3600 / 60);
	return Array(days, hour, minute);
}

function getPlayerEnergy() {
    rs = player.customSqlResult("SELECT id, PlayerEnergy FROM `characters` WHERE `id` = '" + player.getId() + "';");
    return rs.get(0).get("PlayerEnergy");
}

function getPlayerPoints() {
    rs = player.customSqlResult("SELECT id, PlayerPoints FROM `characters` WHERE `id` = '" + player.getId() + "';");
    return rs.get(0).get("PlayerPoints");
}

function gainPlayerEnergy(num) {
    player.customSqlUpdate("UPDATE `characters` SET `PlayerEnergy`=PlayerEnergy+'" + num + "' WHERE (`id`='" + player.getId() + "');");
}

function gainPlayerPoints(num) {
    player.customSqlUpdate("UPDATE `characters` SET `playerPoints`=playerPoints+'" + num + "' WHERE (`id`='" + player.getId() + "');");
}