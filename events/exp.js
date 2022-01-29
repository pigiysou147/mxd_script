/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：经验副本
 *  
 *  @Author Jackson 
 */

/* global event, java */
var HP = 5;

function init() {
	event.setVariable("state", "0");
	event.setVariable("leader", "true");
}

function setup(eim, leaderid) {
	event.setVariable("state", "1");
	event.setVariable("leader", "true");
	var eim = player.setEvent("exp");
	var map = eim.setInstanceventap(993000500);
	map.resetFully();
	for (var i = 0; i < 20; i++) {
		var mob = event.getMonster(9300684);
		mob.setMaxHp(HP);
		eim.registerMonster(mob);
		map.spawnMob(mob,319, 353);
	}
	event.startTimer(1000 * 60 * 30);
	return eim;
}

function playerEntry(eim, player) {
	var map = eim.getMapInstance(0);
	player.changeMap(map, map.getPortal(0));
	eim.broadcastPlayerMsg(1, "欢迎来到 <经验副本>!!\r\n在这裡你可以进行快速升级,请享受升级的快乐吧! ");
}

function playerRevive(eim, player) {
	player.addHP(50);
	var map = eim.getMap(993000500);
	player.changeMap(map, map.getPortal(0));
	return true;
}

function changedMap(eim, player, mapid) {
	if (mapid != 993000500) {
		eim.unregisterPlayer(player);
		if (eim.disposeIfPlayerBelow(0, 0)) {
			event.setVariable("state", "0");
			event.setVariable("leader", "true");
		}
	}
}

function playerDisconnected(eim, player) {
	eim.disposeIfPlayerBelow(0, 940020000);
	event.setVariable("state", "0");
	event.setVariable("leader", "true");
	return 0;
}

function monsterValue(eim, mobId) {
	return 1;
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		event.setVariable("state", "0");
		event.setVariable("leader", "true");
	}
}
function scheduledTimeout(eim) {
	eim.disposeIfPlayerBelow(100, 940020000);
	event.setVariable("state", "0");
	event.setVariable("leader", "true");
}

function clearPQ(eim) {
	scheduledTimeout(eim);
}

function allMonstersDead(eim, player) {
	var map = eim.getMapInstance(0);
	var state = parseInt(event.getProperty("state"));
	event.setVariable("state", state + 1);
	switch (event.getVariable("state")) {
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
			for (var i = 0; i < 20; i++) {
				var mob = map.makeMob(9300684 + (state - 1));
				mob.setMaxHp(HP + (5 * (state - 1)));
				mob.changeBaseHp(mob);
				map.spawnMob(mob, 319, 353);
			}
			break;
		case"11":
			eim.broadcastWeatherEffectNotice("所有怪物已被击杀,请点击NPC进行离场。", 147, 5000);
			break;
		default:
			eim.broadcastPlayerMsg(1, "系统出错! ");
			break;
	}//13最终
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function summonFall(eim) {
}
function pickupItevent(eim, player, iteventID) {
}
function monsterDamaged(eim, player, mobID, damage) {
}
function monsterKilled(eim, player, mobID) {
	var sql = "select needexp from levelup where id = '" + player.getLevel() + "'";
			var push = player.customSqlResult(sql);
				if (push.size() > 0) {
			var result = push.get(0);
			var getExpNeededForLevel = result.get("needexp");
	}
				if (player.getLevel() <= 180) {
				player.gainExp(getExpNeededForLevel * 0.4);
		} else if (player.getLevel() > 180 && player.getLevel() <= 200) {
				player.gainExp(getExpNeededForLevel * 0.2);
		} else if (player.getLevel() > 200 && player.getLevel() <= 210) {
				player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 210 && player.getLevel() <= 220) {
				player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 220 && player.getLevel() <= 230) {
				player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 230 && player.getLevel() <= 240) {
				player.gainExp(getExpNeededForLevel * 0.00625);
		} else if (player.getLevel() > 240 && player.getLevel() <= 250) {
				player.gainExp(getExpNeededForLevel * 0.00625);
		}
	}
