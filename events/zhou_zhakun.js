
/**
 * 副本: 无限火力
 * @author 
 */

let killPlayer=0;
let fightTime = 50 * 60 * 1000;//每一轮时间
let waitTime= 5*60 *  1000;
let MAP_ID = 993000000;//BOSS所在的地图
var endMap  =  940204111;//打完BOSS，传送的地图
let EXIT_MAP=940204113;//不通关地图
let level = 1;
let map;
let bossHp=80000000000000*15;
let bossId=9833101;
let endTime;
let start;
let end;
let totalTime=0;
let BOSS_LOG="远征副本";

var bossname="远征副本";
let DEATH_COUNT=5;
var tupoTotal=0;
let members;
var times=0;
var state =0;
var startTime;
function init(attachment) {
		waitTime=attachment;
		start=new Date().getTime();
        event.getMap(MAP_ID).clearMobs();
        map = event.getMap(MAP_ID);
		map.reset();
		//召唤BOSS
		//计算血量：突破值总数X 基础倍数
		//bossHp=(tupoTotal+1)*bossHp;
		//等待时间初始化
		//map.blowWeatherEffectNotice(waitTime/1000+"分钟后开始战斗 ！！！！", 102, waitTime);
		startTime=new Date().getTime() + waitTime;
		endTime = new Date().getTime() + fightTime;
        event.startTimer("action", waitTime);
        event.startTimer("kick", fightTime);
		event.setVariable("endTime",endTime);
		event.setVariable("waitTime",waitTime);

		
}


function action(){
	map.blowWeatherEffectNotice("周副本正式开始!勇敢的男人冲啊！", 102, 5000);
	state=1;
	//初始化，把当前地图的玩家全部绑定到事件当中
	members=map.getPlayers();
	for (let i = 0; i < members.length; i++) {
		members[i].setEvent(event);
		members[i].addPQLog(BOSS_LOG);
		members[i].setDeathCount(DEATH_COUNT);
		//判断伤害初始化 20191017
		event.setVariable(members[i].getName()+"伤害",0);
	}
	
	map.showTimer(fightTime/1000);
	//召唤第一波怪物
	var mob1 = map.makeMob(bossId);
	mob1.changeBaseHp(80000000000000);
	map.spawnMob(mob1, 0, 153);


}

function mobDied(mob) {
	if(mob.getDataId()==bossId){

	
		//通关
		endTime=new Date().getTime();
		totalTime=(endTime-start)/1000;

		//停止倒计时踢出
		
		//30秒后踢出
        //event.startTimer("kick", 30*1000);
		map.showTimer(30);
		var damList=[];
		var datotal=0;
		members=map.getPlayers();
		//做伤害排名
		for (let i = 0; i < members.length; i++) {

			//给奖励
			members[i].runScript("远征奖励");


		    //冒泡排序

		    //获取伤害
			var da=parseFloat(event.getVariable(members[i].getName()+"伤害"));
			datotal+=da;
			var arr=new Array(da,members[i]);
		    damList.push(arr);

		}
		//拿到数组进行排序
		var temp;
		for(var i = 0; i<damList.length;  i++){ 
			//j是数组的最后一个角标
			for (var j = damList.length-1; j > i; j--) {
				
				if (damList[j][0] > damList[j - 1][0]) {
					//从后往前进行比较，小数往前，一轮之后最小数就在最前面了
					temp = damList[j - 1];
					damList[j - 1] = damList[j];
					damList[j] = temp;
				}
			}
		}

		//damList此时为从大到小排序
		event.broadcastPlayerNotice(7, "[伤害排名] 总伤害 "+parseFloat(datotal)+" "   );
		var killId=0;
		for(var i = 0; i<damList.length;  i++){ 

			var player=damList[i][1];
			//排名奖励
			if(i==0){
				//第一名

			}else if(i==1){

				//第二名

			}else if(i==2){
				//第三名

			}

			if(killPlayer==player.getId()){
				//击杀者奖励
				killId=i;
				
			}

			if(i==0){
				event.broadcastPlayerNotice(7, "["+bossname+"伤害排名] 排名:"+(i+1)+"  玩家："+player.getName()+"  伤害 ："+damList[i][0]+"  伤害占比 : "+parseFloat(damList[i][0]/datotal)*100+" %"   );
				
				player.gainItem(4033911,1);
			}
			
		}

		//击杀者部分
		//击杀奖励
		var player=damList[killId][1];
		player.gainItem(4033911,1);
		event.broadcastPlayerNotice(7, "["+bossname+"击杀奖励]通关时间: "+totalTime+" 秒 击杀 玩家："+damList[killId][1].getName()+"  伤害 ："+damList[killId][0]+"  伤害占比 : "+parseFloat(damList[killId][0]/datotal)*100+" %"   );

		//结束副本
		event.stopTimer ("kick");
		map.transferPlayers(endMap); 
		event.destroyEvent();

	}
}		




//记录伤害 20191017
function mobHit(player, mob, damage) {
	if(mob.getDataId()==bossId){
		var playerAllDamage = parseFloat(event.getVariable(player.getName()+"伤害"));
		event.setVariable(player.getName()+"伤害",(playerAllDamage+damage))
		
		//player.dropMessage(1,"玩家："+player.getName()+" 目前伤害为:"+Math.floor((playerAllDamage+damage))+"");
	
		
		var datotal=0;
		//做伤害排名
		for (let i = 0; i < members.length; i++) {
		    //冒泡排序

		    //获取伤害
			var da=parseFloat(event.getVariable(members[i].getName()+"伤害"));
			datotal+=da;

		}
		if(datotal>=bossHp){
			//击杀
			killPlayer=player.getId();
			player.dropMessage(1,"玩家："+player.getName()+" 进行了最后一击:  伤害为"+Math.floor((playerAllDamage+damage))/100000000+" E");
		}
	}
	
}

function removePlayer(playerId, changeMap) {
	for (let i = 0; i < members.length; i++) {
			if (members[i].getId() == playerId) {
					//dissociate event before changing map so playerChangedMap is
					//not called and this method is not called again by the player
					members[i].setEvent(null);
					if (changeMap)
							members[i].changeMap(EXIT_MAP, "st00");
					//collapse the members array so we don't accidentally warp
					//this member again if the leader leaves later.
					
					break;
			}
	}
	members=map.getPlayers();
	if (members.length <= 0) {
			event.destroyEvent();
	}
}


function playerDisconnected(player) {
        removePlayer(player.getId());
}

function playerChangedMap(player,destination) { 

	removePlayer(player.getId());
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId());
}

function timerExpired(key) {
        switch (key) {
			case "kick":
				members=map.getPlayers();
				for (let i = 0; i < members.length; i++) {
					//dissociate event before changing map so playerChangedMap is not
					//called and this method is not called again by the player
					members[i].setEvent(null);
					members[i].changeMap(EXIT_MAP);
				}
				event.destroyEvent();
				break;
			case "action":
			
				action();
				break;
			
			
        }
}


function deinit() {
		for (let i = 0; i < members.length; i++) {
			//dissociate event before changing map so playerChangedMap is not
			//called and this method is not called again by the player
			members[i].setEvent(null);
			members[i].setDeathCount(-1);
		}
}
