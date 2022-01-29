
/**
 * 副本: 无限火力
 * @author 
 */

let mobId = 9101078;
let killPlayer=0;
let fightTime = 10 * 60 * 1000;//每一轮时间
let MAP_ID = 867202398;
let EXIT_MAP=224000000;
let level = 1;
let map;
let bossHp=100000;
let endTime;
let start;
let end;
let totalTime=0;
let BOSS_LOG="团队火焰狼";

var bossname="团队火焰狼";
let DEATH_COUNT=5;
var tupoTotal=0;
let members;
function init(attachment) {

        party = attachment;
		
		start=new Date().getTime();
        event.getMap(MAP_ID).clearMobs();
        party.changeMap(MAP_ID, 0);
		members=party.getLocalMembers();
        map = event.getMap(MAP_ID);
		//召唤BOSS
		//计算血量：突破值总数X 基础倍数
		bossHp=(tupoTotal+1)*bossHp;
		let mob = map.makeMob(mobId);
		mob.changeBaseHp(bossHp);
		mob.setForcedMobStat(275,10000);
		map.spawnMob(mob, -363, -65);

		
		
        event.startTimer("makeMob", 10*1000);
        event.startTimer("kick", fightTime);
		endTime = new Date().getTime() + fightTime;
		map.showTimer(fightTime/1000);

		for (let i = 0; i < members.length; i++) {
			members[i].setEvent(event);
			members[i].addPQLog(BOSS_LOG);
			members[i].setDeathCount(DEATH_COUNT);
			//判断伤害初始化 20191017
			event.setVariable(members[i].getName()+"伤害",0);
		}
}

function mobDied(mob) {
    if(mobId==mob.getDataId()){
		//通关
		endTime=new Date().getTime();
		totalTime=(endTime-start)/1000;

		//停止倒计时踢出
		event.stopTimer ("kick");
		//30秒后踢出
        event.startTimer("kick", 30*1000);
		map.showTimer(30);
		var damList=[];
		var datotal=0;
		//做伤害排名
		for (let i = 0; i < members.length; i++) {
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

			
			event.broadcastPlayerNotice(7, "[伤害排名] 排名:"+(i+1)+"  玩家："+player.getName()+"  伤害 ："+damList[i][0]+"  伤害占比 : "+parseFloat(damList[i][0]/datotal)*100+" %"   );
		}

		//击杀者部分
		//击杀奖励
		var player=damList[killId][1];
		player.gainItem(4000000,1);
		event.broadcastPlayerNotice(7, "[击杀奖励]通关时间: "+totalTime+" 秒 击杀 玩家："+damList[killId][1].getName()+"  伤害 ："+damList[killId][0]+"  伤害占比 : "+parseFloat(damList[killId][0]/datotal)*100+" %"   );
		

 

		
	}
}



//记录伤害 20191017
function mobHit(player, mob, damage) {
	if(mobId==mob.getDataId()){
		var playerAllDamage = parseFloat(event.getVariable(player.getName()+"伤害"));
		event.setVariable(player.getName()+"伤害",(playerAllDamage+damage))
		
		player.dropMessage(1,"玩家："+player.getName()+" 目前伤害为:"+Math.floor((playerAllDamage+damage))+"");
	
		
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
					members.splice(i, 1);
					break;
			}
	}
	if (members.length <= 0) {
			event.destroyEvent();
	}
}


function playerDisconnected(player) {
        removePlayer(player.getId());
}

function playerChangedMap(player,destination) { 

	if(destination.getId() != MAP_ID){
		removePlayer(player.getId());
	}else{
		player.showTimer((endTime - new Date().getTime()) / 1000);
		player.showDeathCount();
	}
}

function partyMemberDischarged(party, player) {
	removePlayer(player.getId());
}

function timerExpired(key) {
        switch (key) {
			case "kick":
				
				for (let i = 0; i < members.length; i++) {
					//dissociate event before changing map so playerChangedMap is not
					//called and this method is not called again by the player
					members[i].setEvent(null);
					members[i].changeMap(EXIT_MAP);
				}
				event.destroyEvent();
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
