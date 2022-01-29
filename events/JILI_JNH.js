/**
 * 擂台
 *
 * @author 幾里  315342975
 */
let maps = [980002003,980002004,980000600,980000700,980001701,980001601,980001001,980000901]
let EXIT_MAP = 980030000;
let START_MAP = 610030600;
let time = 3 * 60 * 1000; //闖關時間
let minPoint = 100;//最低打到多少積分才能拿
let PQLog = "JILI_JNH";

let party;
let members;
let endTime;
let membersLength;
let map;

let team1 = Array();
let team2 = Array();
let team1Point = 0;
let team2Point = 0;
let team1Index = Array();

let fightMaps = Array(
	Array(980001701,980001601),
	Array(980001001,980000901)
);
let fightmap1,fightmap2;

function init(attachment) {
	
	
	//隨機地圖
	var ranmap = Math.floor(Math.random() *2);
	fightmap1 = fightMaps[ranmap][0];
	fightmap2 = fightMaps[ranmap][1];
	
    party = attachment;
    members = party.getLocalMembers();
	membersLength = members.length;
	
    for (let i = 0; i < members.length; i++) {
        members[i].setEvent(event);
        members[i].addPQLog(PQLog);
    }
	
	//隨機分配人員
	var arr = [];
    for (let i = 0; i < members.length; i++) {
		arr.push(i);
    }
	var result = [];
	var ranNum = membersLength/2;
	for (var i = 0; i < ranNum; i++) {
		var ran = Math.floor(Math.random() * arr.length);
		result.push(arr.splice(ran, 1)[0]);
	};

	//1隊
	for(var i = 0; i < result.length; i++){
		team1.push(members[result[i]])
		team1[i].changeMap(980000600);
	}
	//2隊
	for(var i = 0; i < arr.length; i++){
		team2.push(members[arr[i]])
		team2[i].changeMap(980000700);
	}

	for (let dd = 0; dd < members.length; dd++) {
		members[dd].showSystemMessage("--------------------------------------------------");
		members[dd].showSystemMessage("[擂台]：分隊提醒,一隊隊員為：");
		var sss= "";
		for(let ii = 0;ii<team1.length;ii++){
			sss += team1[ii].getName()+"  "
		}
		members[dd].showSystemMessage("[擂台]："+sss);
		members[dd].showSystemMessage("--------------------------------------------------");
		members[dd].showSystemMessage("[擂台]：分隊提醒,二隊隊員為：");
		sss= "";
		for(let ii = 0;ii<team2.length;ii++){
			sss += team2[ii].getName()+"  "
		}
		members[dd].showSystemMessage("[擂台]："+sss);
		members[dd].showSystemMessage("--------------------------------------------------");
		members[dd].showSystemMessage("[擂台]:即將傳送至戰場！請做好準備！倒計時30秒！");
	}
	
	
    event.startTimer("startGame", 30*1000);//準備時間
    var mapReady1 = event.getMap(980000600);
    mapReady1.showTimer(30);
	mapReady1.blowWeather(5120000,"你們被編為一隊，請做好準備，將二隊比下去！");
	var mapReady2 = event.getMap(980000700);
    mapReady2.showTimer(30);
	mapReady2.blowWeather(5120000,"你們被編為二隊，請做好準備，將一隊比下去！");
	
}

function removePlayer(playerId, changeMap) {
    if (party.getLeader() == playerId) {
        for (let i = 0; i < members.length; i++) {
            members[i].setEvent(null);
            if (changeMap || members[i].getId() != playerId)
                members[i].changeMap(EXIT_MAP, "st00");
        }
        event.destroyEvent();
    } else {
        for (let i = 0; i < members.length; i++) {
            if (members[i].getId() == playerId) {
                members[i].setEvent(null);
                if (changeMap)
                    members[i].changeMap(EXIT_MAP, "st00");
                members.splice(i, 1);
                break;
            }
        }
    }
}

function mobDied(mob) {
	var mapId = mob.getMapId();
	switch (mapId){
		case fightmap1:
			//一隊的怪;
			team1Point ++;
			for(let ii = 0;ii<team1.length;ii++){
				team1[ii].showSystemMessage("[擂台]:殺死怪物獲得積分！當前積分 ："+team1Point);
			}
			break;
		case fightmap2:
			//二隊的怪;
			team2Point ++;
			for(let ii = 0;ii<team2.length;ii++){
				team2[ii].showSystemMessage("[擂台]:殺死怪物獲得積分！當前積分 ："+team2Point);
			}
			break;
	}
}

function playerDisconnected(player) {
    removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
       if(destination.getId() == 980000600 ||destination.getId() == 980000700 ){
	   }else if(destination.getId() == fightmap1 ||destination.getId() == fightmap2 ){
			var mapReady1 = event.getMap(fightmap1);
			mapReady1.showTimer(time/1000);
			var mapReady2 = event.getMap(fightmap2);
			mapReady2.showTimer(time/1000);
	   }else if(maps.indexOf(destination.getId()) != -1){
	   }else{
			removePlayer(player.getId(), false);
	   }
}

function partyMemberDischarged(party, player) {
}

function timerExpired(key) {
    switch (key) {
        case "endTime":
			//時間到
			//計算分值
			var mapY = event.getMap(980002003);
			var mapN = event.getMap(980002004);
			if(team1Point > team2Point){
				//1隊贏
				for(let ii = 0;ii<team1.length;ii++){
					team1[ii].changeMap(980002003);
					team1[ii].showSystemMessage("[擂台]:遊戲結束！");
					team1[ii].showSystemMessage("[擂台]:一隊積分 "+team1Point +"   二隊積分 "+team2Point);
					team1[ii].showSystemMessage("[擂台]:恭喜你們，獲得勝利！5秒后自動出場！");
					if(team1Point >= minPoint)
						team1[ii].runScript("擂台勝利獎勵");
					else
						team1[ii].showSystemMessage("[擂台]:積分未達到"+minPoint+",沒有獎勵！");
				}
				for(let ii = 0;ii<team2.length;ii++){
					team2[ii].changeMap(980002004);
					team2[ii].showSystemMessage("[擂台]:遊戲結束！");
					team2[ii].showSystemMessage("[擂台]:一隊積分 "+team1Point +"   二隊積分 "+team2Point);
					team2[ii].showSystemMessage("[擂台]:很遺憾，你們輸了！5秒后自動出場！");
					if(team2Point >= minPoint)
						team2[ii].runScript("擂台失敗獎勵");
					else
						team2[ii].showSystemMessage("[擂台]:積分未達到"+minPoint+",沒有獎勵！");
				}
			}else if(team1Point < team2Point){
				for(let ii = 0;ii<team1.length;ii++){
					team1[ii].changeMap(980002004);
					team1[ii].showSystemMessage("[擂台]:遊戲結束！");
					team1[ii].showSystemMessage("[擂台]:一隊積分 "+team1Point +"   二隊積分 "+team2Point);
					team1[ii].showSystemMessage("[擂台]:很遺憾，你們輸了！5秒后自動出場！");
					if(team1Point >= minPoint)
						team1[ii].runScript("擂台失敗獎勵");
					else
						team1[ii].showSystemMessage("[擂台]:積分未達到"+minPoint+",沒有獎勵！");
				}
				for(let ii = 0;ii<team2.length;ii++){
					team2[ii].changeMap(980002003);
					team2[ii].showSystemMessage("[擂台]:遊戲結束！");
					team2[ii].showSystemMessage("[擂台]:一隊積分 "+team1Point +"   二隊積分 "+team2Point);
					team2[ii].showSystemMessage("[擂台]:恭喜你們，獲得勝利！5秒后自動出場！");
					if(team2Point >= minPoint)
						team2[ii].runScript("擂台勝利獎勵");
					else
						team2[ii].showSystemMessage("[擂台]:積分未達到"+minPoint+",沒有獎勵！");
				}
				
			}else{
				//平局
				for(let ii = 0;ii<team1.length;ii++){
					team1[ii].changeMap(980002003);
					team1[ii].showSystemMessage("[擂台]:遊戲結束！");
					team1[ii].showSystemMessage("[擂台]:一隊積分 "+team1Point +"   二隊積分 "+team2Point);
					team1[ii].showSystemMessage("[擂台]:平局收尾,請再接再厲！5秒后自動出場！");
					if(team1Point >= minPoint)
						team1[ii].runScript("擂台平局獎勵");
					else
						team1[ii].showSystemMessage("[擂台]:積分未達到"+minPoint+",沒有獎勵！");
				}
				for(let ii = 0;ii<team2.length;ii++){
					team2[ii].changeMap(980002003);
					team2[ii].showSystemMessage("[擂台]:遊戲結束！");
					team2[ii].showSystemMessage("[擂台]:一隊積分 "+team1Point +"   二隊積分 "+team2Point);
					team2[ii].showSystemMessage("[擂台]:平局收尾,請再接再厲！5秒后自動出場！");
					if(team2Point >= minPoint)
						team2[ii].runScript("擂台平局獎勵");
					else
						team2[ii].showSystemMessage("[擂台]:積分未達到"+minPoint+",沒有獎勵！");
				}
			}
			mapY.showTimer(5);
			mapN.showTimer(5);
			mapY.blowWeather(5120000,"恭喜你們獲得勝利！");
			mapN.blowWeather(5120000,"很遺憾，你們失敗了！請再接再厲！");
			event.startTimer("black", 5000);//準備時間
            break;
		case "startGame":
			for(let ii = 0;ii<team1.length;ii++){
				team1[ii].changeMap(fightmap1);
				team1[ii].showSystemMessage("[擂台]: 你屬於一隊！趕緊為隊伍爭光吧！消滅怪物獲取積分！");
			}
			for(let ii = 0;ii<team2.length;ii++){
				team2[ii].changeMap(fightmap2);
				team2[ii].showSystemMessage("[擂台]: 你屬於二隊！趕緊為隊伍爭光吧！消滅怪物獲取積分！");
			}
			event.startTimer("endTime", time);//準備時間
			break;
		case "black":
			kick();
			break;
    }
}


function kick() {
	for (let i = 0; i < members.length; i++) {
			//dissociate event before changing map so playerChangedMap is not
			//called and this method is not called again by the player
			members[i].setEvent(null);
			members[i].changeMap(EXIT_MAP);
	}
	event.destroyEvent();
}

function deinit() {
        for (let i = 0; i < members.length; i++) {
                members[i].setEvent(null);
                members[i].setDeathCount(-1);
        }
}