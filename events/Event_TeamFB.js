var eim;
var minPlayers = 1;
var cal;
var map_2;
var endMap  =  940204111;//打完BOSS，传送的地图
var startMap = 993000000;//BOSS所在的地图
var falseEndMap = 940204113;//不通关地图
let endTime;
var times=0;
function init(attachment) {
	 scheduleNew();
}

function scheduleNew() {
    event.setVariable("state","0");
	event.setVariable("stage","0");
	event.setVariable("number","0");
    cal = new Date();
    var hour = cal.getHours();
    var min = cal.getMinutes();
	var weekday = 0;
	var startMin=30;
	if(min>startMin){
		startMin=90;
	}
	var time = (startMin-min);
	var startTime= (startMin-min)*60*1000;
	event.startTimer("newopen",startTime);

}

function newopen() {
    if (parseInt(event.getVariable("state")) == 0) {
		event.setVariable("state","1");//--------------------------------------------
		map_2 = event.getMap(startMap);
		map_2.reset();
		map_2.showTimer(5*60);
		var waitTime=5 * 60 * 1000;
		endTime = new Date().getTime() +waitTime;
		event.setVariable("endTime", endTime);
		event.startTimer("scheduledTimeout",waitTime);
		
		 event.broadcastNoticeWithoutPrefix("[远征多人副本]：30人远征BOSS副本BOSS已经在频道9刷新,有5分钟的入场时间，有兴趣的玩家可以通过活动副本-远征副本进入,希望大家积极参加,奖励非常丰厚! !");
		 event.broadcastPlayerNotice(7, "[远征多人副本]：30人远征BOSS副本BOSS已经在频道9刷新,有5分钟的入场时间，有兴趣的玩家可以通过活动副本-远征副本进入,希望大家积极参加,奖励非常丰厚! !");
		 event.broadcastPlayerNotice(8, "[远征多人副本]：30人远征BOSS副本BOSS已经在频道9刷新,有5分钟的入场时间，有兴趣的玩家可以通过活动副本-远征副本进入,希望大家积极参加,奖励非常丰厚! !");
		 event.broadcastPlayerNotice(9, "[远征多人副本]：30人远征BOSS副本BOSS已经在频道9刷新,有5分钟的入场时间，有兴趣的玩家可以通过活动副本-远征副本进入,希望大家积极参加,奖励非常丰厚! !");
		 event.broadcastPlayerNotice(10, "[远征多人副本]：30人远征BOSS副本BOSS已经在频道9刷新,有5分钟的入场时间，有兴趣的玩家可以通过活动副本-远征副本进入,希望大家积极参加,奖励非常丰厚! !");
    
	
	}
}

function scheduledTimeout() {
	//事件实例计时完毕
    if (parseInt(event.getVariable("state")) == 1) {
		event.setVariable("state","2");
		endTime = new Date().getTime() + 50*60 * 1000;
		//设定结束时间
		event.setVariable("endTime", endTime);
		event.startTimer("scheduledTimeout",50*60*1000);
		
    } else {
		kickfalse();
    }
}



function SapwnMonster() {
	
		switch(times)
		{
			case 0:
				times++;
				event.setVariable("times",times);
				var mob1 = map_2.makeMob(9833101);
				mob1.changeBaseHp(80000000000000);
				map_2.spawnMob(mob1, 0, 153);

				var mob2 = map_2.makeMob(8645039);//吨凯尔
				mob2.changeBaseHp(80000000000000*3);////
				map_2.spawnMob(mob2, 0, 153);//
			break;	
		
			case 3:
				times++;
				event.setVariable("times",times);
				event.getMap(startMap).blowWeatherEffectNotice("现在进入第二波攻势！！！", 102, 5000);
				
				var mob3 = map_2.makeMob(9833101);
				mob3.changeBaseHp(80000000000000*2);
				map_2.spawnMob(mob3,  0, 153);

				var mob4 = map_2.makeMob(8645039);//吨凯尔
				mob4.changeBaseHp(80000000000000+80000000000000);////
				map_2.spawnMob(mob4, 0, 153);//
				
				break;
			case 5:
				//第三波
				times++;
				event.setVariable("times",times);
				event.getMap(startMap).blowWeatherEffectNotice("现在进入最后一波攻势！！！大家加油呀，胜利就在前方 ！", 102, 5000);
				
				var mob5 = map_2.makeMob(9833101);
				mob5.changeBaseHp(80000000000000*3);
				map_2.spawnMob(mob5,  0, 153);

				var mob6 = map_2.makeMob(8645039);//吨凯尔
				mob6.changeBaseHp(80000000000000*3);////
				map_2.spawnMob(mob6, 0, 153);//
				
				
				var mob7 = map_2.makeMob(8880342);//品客宾
				mob7.changeBaseHp(80000000000000);////
				map_2.spawnMob(mob7,  0, 153);
				event.setVariable("stage","0");
				break;
			case 8 :
				kick();
			break;
		}				
}


function kick() {
	event.setVariable("number","0");
		map_2.clearMobs();
		event.stopTimer("scheduledTimeout");
		event.setVariable("state","0");//--------------------------------------------
		event.setVariable("stage","0");
		times=0;
		//event.destroyEvent();
		//map_2.transferPlayers(endMap); 
		scheduleNew();
		//var size = map_2.getPlayerCount();     
}

function kickfalse() {
		event.setVariable("number","0");
		map_2.clearMobs();
		event.stopTimer("scheduledTimeout");
		event.setVariable("state","0");//--------------------------------------------
		event.setVariable("stage","0");
		times=0;
		//event.destroyEvent();
		//map_2.transferPlayers(falseEndMap); 
		scheduleNew();
		//var size = map_2.getPlayerCount();     
}


// function mobDied(mob) { 
// 	times++;
// 	event.setVariable("times",times);
// 	SapwnMonster();

// }

function timerExpired(key) {
    switch (key) {
		case "scheduledTimeout":
			scheduledTimeout();
			break;
		case "newopen":
			newopen();
			break;
		case "kick":
			kick();
			break;
		
		case "kick":
			kick();
			break;
		
		
    }
}



 