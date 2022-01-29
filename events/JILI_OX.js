/**
 * OX答题
 *
 * @author 几里  315342975
 */

let time = 180 * 1000; //准备时间

let player;
let players = [];

let map,map1,map2;
let number = 10;//最多答题数
let killNumber = 4;//可以答错多少次
let nowNumber = 0;
let nowAsk;

//题库
let askArray = Array(
	//问题 答案（0=不是 1=是） 1是o  1是对

	Array("阿莉娅是死在奥尔卡手上吗？",0),
	Array("龙神的龙叫米勒吗？",0),
	Array("战神的矛叫摩诃吗？",1),
	Array("冰凤凰是神射手的召唤物吗?",0),
	Array("钻石星尘是战神的技能吗？",0),
	Array("冒险家是为了救小乖和小强来到的冒险岛世界吗？",1),
	Array("尖兵属于单独势力吗？",0),
	Array("恶魔猎手是军团长之一？",1),
	Array("光之超越者就是黑魔法师？",1),
	Array("神之子是时间超越者？",1),
	Array("生命超越者是阿塔莎？",0),
	Array("艾尔达是冒险岛世界的基础？",1),
	Array("阿卡伊勒是时间神官？",1),
	Array("马加提亚是黑魔法师研究黑暗魔法的场所？",0),
	Array("狮子城堡城主班·雷昂是自愿成为军团战的？",0),
	Array("希拉曾经是阿斯旺的守护者？",1),
	Array("冒险岛骑士团有5个职业？",1),
	Array("黑暗龙王是被冒险家封印的？",0),
	Array("恶魔猎手的家在神木村？",1),
	Array("赫丽娜是希望之子？",1),
	Array("《上古魔书》记载了强大的魔法？",1),
	Array("想进入海底世界必需装备空气铃？",0),
	Array("九灵龙战胜了黑暗龙王？",0),
	Array("雅典娜女神是天空之城的守护者？",1),
	Array("黑色之翼是斯乌成立的组织？",0),
	Array("吉格蒙特是反抗者的首领？",1),
	Array("雪姬建立秘密组织“飞花院”是为了报杀父之仇？",1),
	Array("飞侠职业都可以隐身？",0),
	Array("隐月自我牺牲当了祭品所以被其他人遗忘？",1),
	Array("隐月的名字是阿琅帮他起的？",1)
);



function init(attachment) {
	player = attachment;
    map = event.getMap(910048000);
    map1 = event.getMap(910048100);
    map2 = event.getMap(910048200);
    map.showTimer(time/1000);
	event.setVariable("canPut", "1");
	event.startTimer("canPut0", time);
    event.setVariable("players", players);
	map.blowWeather(5120199,"开始报名参赛，点击<甘迪>报名吧");
}

function removePlayer(playerId, changeMap) {
	//player.setEvent(null);
	event.destroyEvent();
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
}

function partyMemberDischarged(party, player) {
    removePlayer(player.getId(), false);
}

function timerExpired(key) {
    switch (key) {
       
		case "canPut0":
			event.setVariable("canPut", "0");
			map.showTimer(5);
			map.blowWeather(5120199,"停止报名，5秒后传送到问答地图！");
			event.startTimer("start", 5000);
			break;
       
		case "start":
			players = event.getVariable("players");
			
			for(var i = 0; i<players.length ;i++){
				try{
					players[i].changeMap(910048100);
				}catch(e){
					
				}
			}
			map1.showTimer(5);
			map1.blowWeather(5120199,"15秒后开始问答啦！");
			
			event.startTimer("wd", 15 * 1000);

			break;
       
		case "wd":
		
		
			//随机题目
			var ran = Math.floor(Math.random() * askArray.length);
			var askA = (askArray.splice(ran,1)+"").split(",");
			nowAsk = askA[1];
			//event.setVariable("nowAsk", nowAsk[0]);
			
			nowNumber++;
			event.setVariable("nowNumber", nowNumber);
			map1.blowWeather(5120199,"第"+nowNumber+"题:"+askA[0]);
			
			for(var i = 0; i<players.length ;i++){
				try{
					var playerKill = event.getVariable(players[i].getName()+"Kill");//错误次数
					if(playerKill >= killNumber){
					}else{
						players[i].showSystemMessage("【OX问答】:总共 <"+number+"> 题，当前第 <"+nowNumber+"> 题 :");
						players[i].showSystemMessage("【OX问答】:你只有 15 秒时间作答！请赶快！");
						players[i].showSystemMessage("【OX问答】:题目:" + askA[0]);
						players[i].showSystemMessage("【OX问答】:如果你认为是正确的请到<O区域> 否则请前往<X区域>");
						players[i].scriptProgressMessage("如果你认为是正确的请到<O区域> 否则请前往<X区域>");
						players[i].scriptProgressMessage("如果你认为是正确的请到<O区域> 否则请前往<X区域>");
						players[i].scriptProgressMessage("如果你认为是正确的请到<O区域> 否则请前往<X区域>");
					}
				}catch(e){
					
				}
			}
			
			map1.showTimer(15);
			event.startTimer("end", 15 * 1000);
			break;
			
		case "end":
			var maxY = 575;
			var minY = -20;

			//横坐标分割线
			var splitX = -664;
			
			for(var i = 0; i<players.length ;i++){
				try{

					var playerKill = event.getVariable(players[i].getName()+"Kill");//错误次数
					var playerGrade = event.getVariable(players[i].getName()+"Grade");
					var playerReward = event.getVariable(players[i].getName()+"Reward");
					
					if(playerKill >= killNumber){
						//players[i].showSystemMessage("【OX问答】:你已经输了哦，无法再进行答题了!你的最终积分为："+parseInt(playerGrade));
					}else{
						//玩家坐标获取
						var playerX = players[i].getPosition().getX();
						var playerY = players[i].getPosition().getY();


						if(playerY > maxY || playerY < minY){
							players[i].showSystemMessage("【OX问答】:你已经失败了，或者你所处位置不对，本题无效!");
						}else if(playerX > splitX && nowAsk == "0"){
							playerGrade++;
							event.setVariable(players[i].getName()+"Grade",playerGrade);//分数
							players[i].showSystemMessage("【OX问答】:回答正确，当前积分为 "+parseInt(playerGrade));
							players[i].showSystemMessage("【OX问答】:回答正确，当前积分为 "+parseInt(playerGrade));
							players[i].showSystemMessage("【OX问答】:回答正确，当前积分为 "+parseInt(playerGrade));
							
						}else if(playerX <= splitX && nowAsk == "1"){
							playerGrade++;
							event.setVariable(players[i].getName()+"Grade",playerGrade);//分数
							players[i].showSystemMessage("【OX问答】:回答正确，当前积分为 "+parseInt(playerGrade));
							players[i].showSystemMessage("【OX问答】:回答正确，当前积分为 "+parseInt(playerGrade));
							players[i].showSystemMessage("【OX问答】:回答正确，当前积分为 "+parseInt(playerGrade));
						}else{
							playerKill++;
							if(playerKill >= killNumber){
								players[i].showSystemMessage("【OX问答】:很遗憾，你已经失败"+killNumber+"次，无法继续答题了。你的最终积分为："+parseInt(playerGrade));
								players[i].showSystemMessage("【OX问答】:很遗憾，你已经失败"+killNumber+"次，无法继续答题了。你的最终积分为："+parseInt(playerGrade));
								players[i].showSystemMessage("【OX问答】:很遗憾，你已经失败"+killNumber+"次，无法继续答题了。你的最终积分为："+parseInt(playerGrade));
								if(playerReward == 0)
									players[i].runScript("OX奖励");
							}else{
								players[i].showSystemMessage("【OX问答】:回答错误,你已失败"+playerKill+"次，还有"+(killNumber-playerKill)+"次机会！当前积分为："+parseInt(playerGrade));
								players[i].showSystemMessage("【OX问答】:回答错误,你已失败"+playerKill+"次，还有"+(killNumber-playerKill)+"次机会！当前积分为："+parseInt(playerGrade));
								players[i].showSystemMessage("【OX问答】:回答错误,你已失败"+playerKill+"次，还有"+(killNumber-playerKill)+"次机会！当前积分为："+parseInt(playerGrade));
							}
							event.setVariable(players[i].getName()+"Kill",playerKill);//分数
						}
					}
				}catch(e){
					
				}
			}
				
				
			if(nowNumber >= number){
				for(var i = 0; i<players.length ;i++){
					try{
						var playerReward = event.getVariable(players[i].getName()+"Reward");
						//players[i].changeMap(910048200);
						if(playerReward == 0)
							players[i].runScript("OX奖励");
					}catch(e){
						
					}
				}
				map1.blowWeather(5120000,"活动结束，奖励已发");
				event.startTimer("return", 5 * 1000);
			}else{
				event.startTimer("wd", 15 * 1000);
				map1.blowWeather(5120000,"15秒后开始下一题")
			}
			map1.showTimer(5);
			break;
		case "return":
			map2.showTimer(20);
			map2.blowWeather(5120000,"请自行离开地图哦");
			event.startTimer("kick", 20 * 1000);
			break;
		case "kick":
			/*
			for(var i = 0; i<players.length ;i++){
				try{
					players[i].changeMap(910000000);
				}catch(e){
					
				}
			}
			*/
			event.destroyEvent();
			break;
			
    }
}

function deinit() {
    removePlayer(player.getId(), true);
}

