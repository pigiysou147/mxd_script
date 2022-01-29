//自動刷BOSS -幾里

//地圖數組 每一個地方都會召喚一個怪物
var mapIds = Array(
	//地圖ID 地圖名 X坐標 Y坐標
	Array(100000200,"邱比特公園",2923,573)
)




function init(attachment) {
    scheduleNew();
}
function scheduleNew() {
    event.setVariable("state", "0");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
		nextTime += 1000 * 60 * 60 * 1; //設置多久開啟 最後的2就是2個小時
		//nextTime += 1000 * 10;//測試
    }
	event.startTimer("makeMob", (nextTime-java.lang.System.currentTimeMillis()));
}


function timerExpired(key) {
    switch (key) {
        case "makeMob":
			if (event.getVariable("state")=="0"){
				event.setVariable("state", "1");
				var cal = java.util.Calendar.getInstance();
				cal.set(java.util.Calendar.HOUR, 0);
				cal.set(java.util.Calendar.MINUTE, 20);
				cal.set(java.util.Calendar.SECOND, 0);
				var nextTime = cal.getTimeInMillis();
				while (nextTime <= java.lang.System.currentTimeMillis()) {
					nextTime += 1000 * 60 * 30; //設置多久結束
					//nextTime += 1000 * 30; //測試
				}
				
				//召喚怪物
				for(var i = 0; i < mapIds.length;i++){
					var map = event.getMap(mapIds[i][0]);
					var mob = map.makeMob(9390859);//怪物ID
					mob.changeBaseHp(Math.pow(10, 1)); //血量
					map.spawnMob(mob,  mapIds[i][2], mapIds[i][3]);
				}
				
				event.broadcastPlayerNotice(22,"[世界王] 活動已經開啟,怪物已在各個主城刷新。30分鐘後怪物消失！");
				event.broadcastPlayerNotice(22,"[世界王] 活動已經開啟,怪物已在各個主城刷新。30分鐘後怪物消失！");
				event.broadcastPlayerNotice(22,"[世界王] 活動已經開啟,怪物已在各個主城刷新。30分鐘後怪物消失！");
				event.startTimer("clearMob", (nextTime-java.lang.System.currentTimeMillis()));
			}
            break;
		case "clearMob":
	
			//清理怪物
			for(var i = 0; i < mapIds.length;i++){
				var map = event.getMap(mapIds[i][0]);
				map.clearMobs();
			}
		
			event.broadcastPlayerNotice(22,"[世界王] 怪物已消失，下次活動將在1小時後開啟，歡迎大家積極參加。");
			event.broadcastPlayerNotice(22,"[世界王] 怪物已消失，下次活動將在1小時後開啟，歡迎大家積極參加。");
			event.broadcastPlayerNotice(22,"[世界王] 怪物已消失，下次活動將在1小時後開啟，歡迎大家積極參加。");
			event.broadcastPlayerNotice(22,"[世界王] 怪物已消失，下次活動將在1小時後開啟，歡迎大家積極參加。");
			event.broadcastPlayerNotice(22,"[世界王] 怪物已消失，下次活動將在1小時後開啟，歡迎大家積極參加。");
			scheduleNew();
            break;
    }
}

