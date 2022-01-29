// /*
//  * Copyright (C) 2019 Kent
//  *
//  * This program is free software; you can redistribute it and/or
//  * modify it under the terms of the GNU General Public License
//  * as published by the Free Software Foundation; either version 2
//  * of the License, or (at your option) any later version.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  * GNU General Public License for more details.
//  *
//  * You should have received a copy of the GNU General Public License
//  * along with this program; if not, write to the Free Software
//  * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
//  */


// /**
//  *
//  * @author Kent
//  */
let btl = new Array(
        new Array(20, 30, 50), //1
        new Array(20, 30, 50), //2
        new Array(20, 30, 50), //3
        new Array(10, 30, 50), //4
        new Array(20, 60, 100), //5
        new Array(15, 45, 75), //6
        new Array(30, 90, 180), //7
        new Array(15, 45, 75), //8
        new Array(20, 60, 100), //9
        new Array(35, 105, 175), //10

        new Array(30, 90, 150), //11
        new Array(20, 30, 100), //12
        new Array(25, 75, 125), //13
        new Array(15, 45, 75), //14
        new Array(15, 45, 75), //14
        new Array(20, 60, 100), //16
        new Array(20, 60, 100), //17
        new Array(120, 200, 300), //18
        new Array(40, 120, 200), //19
        new Array(50, 150, 250), //20

        new Array(30, 90, 150), //21
        new Array(30, 90, 150), //22
        new Array(30, 90, 150), //23
        new Array(30, 90, 150), //24
        new Array(40, 120, 200), //25
        new Array(40, 120, 200), //26
        new Array(60, 180, 300), //27
        new Array(60, 180, 300), //28
        new Array(35, 105, 175), //29
        new Array(30, 90, 150), //30


        new Array(30, 90, 150), //31
        new Array(15, 45, 75), //32
        new Array(60, 180, 300), //33
        new Array(15, 45, 75), //34
        new Array(60, 180, 300), //35
        new Array(40, 120, 200), //36
        new Array(40, 120, 200), //37
        new Array(45, 135, 225), //38
        new Array(35, 105, 175), //39
        new Array(540, 570, 600)//40
        );

let stage = parseInt(player.getQuestEntryData(34502));

let questId = 18838 + stage;

let nowTime = new Date().getTime();
var mac=getmac();
var count =1;
let event = npc.getEvent();
if (event != null) {
        let st = event.getVariable("st");
        let br = (nowTime - st) / 1000;
        let stc = btl[stage - 1];
        let cs = 0;
        if (br < stc[0]) {
                cs = 3;
        } else if (br < stc[1]) {
                cs = 2;
        } else if (br < stc[2]) {
                cs = 1;
        }
        player.updateQuestRecordEx(18838, "hack", "0");
        if (player.getIntQuestRecordEx(18838, "stage") < stage) {
                player.updateQuestRecordEx(18838, "stage", String(stage));
                player.updateQuestRecordEx(18838, "stageT", getMyDate(nowTime));
        }
        player.updateQuestRecordEx(18870, "timeSum", "0");
        player.updateQuestRecordEx(18870, "timeSumT", getMyDate(nowTime));

        player.updateQuestRecordEx(questId, "isClear", "1");
        player.updateQuestRecordEx(questId, "br", String(br));//时间
        player.updateQuestRecordEx(questId, "cs", String(cs));//星星
        if (!"1".equals(player.getQuestRecordEx(questId, "first"))) {
                player.updateQuestRecordEx(questId, "first", "1");
        }
        player.showPlatformerTimer(3, -1, 0, 34500);
        player.updateQuestRecordEx(34500, "time", "0");
        player.updateQuestRecordEx(34500, "type", "0");
        player.updateQuestRecordEx(500651, "1", String(Math.floor(stage / 5)));

        let starSum = 0;
        for (let i = 18839; i <= 18879; i++) {
                starSum += player.getIntQuestRecordEx(i, "cs");
        }
        player.updateQuestRecordEx(18869, "starSum", String(starSum));
        player.updateQuestRecordEx(18869, "starSumT", getMyDate(nowTime));

        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, true, true, false);

        player.showScreenAutoLetterBox("monsterPark/clearF", 0);
        player.soundEffect("Sound/MiniGame.img/prize");
        player.showWeatherEffectNotice("已通关，前往大厅。", 212, 2000);
        ////npc.setDelay(100);
        player.setUserEmotionLocal(10, 3000);
        player.scriptProgressMessage(player.getName() + "以" + cs + "颗星通关！ 当前总共星星为:"+starSum+" 总共星星达到100星可以解锁终极奖励哦");
        
		player.soundEffect("Sound/MiniGame.img/Catch");

        player.showAvatarOriented("Effect/CharacterEff.img/12thMiniGame/getMesso2");
        ////npc.setDelay(2400);
		
        player.setInGameDirectionMode(false, true, false, false);
		if(cs==3){
			if(player.getLevel()<260){
				player.scriptProgressMessage("需要260级才能领取三星奖励哦~");
			}else{
				var macCount =getCount(mac,"kongzhi"+stage);
				if(getEventCount("kongzhi"+stage)<1 || macCount>0 ){
					setEventCount("kongzhi"+stage,0,1);
					
					if(stage<=10){
						count =1;
					}else if(stage >10 && stage <=20){
						count =2;
					}else if(stage >20 && stage <=30){
						count =4;
					}else if(stage >30 && stage <=40){
						count =10;
					}
					player.scriptProgressMessage("获取了百万突破石X "+count);
					player.gainItem(2614002,count);
				}else{
					player.scriptProgressMessage("当前关卡的3星奖励已经领取过了");
				}
			}
			
			
		}
		//starSum 满星
		if(starSum>=100 && getEventCount("kongzhi"+40)>0 ){
			var item =player.getInventorySlot(-1,-11);
			
			if(getEventCount("manxing")<1){
				if(item==null){
					player.scriptProgressMessage("请携带武器，才能正常领取奖励");
				}else{
					count =1; 
					if(item.getLimitBreak()/100000000>100){
						//100E以上
						count=count*10;
					}
					setEventCount("manxing",0,1);
					var rankResult = player.customSqlResult("select * from accounts_event where event = 'manxing' and value=1");
					var rank =rankResult.size()+1;
					for(var i=0;i<rankResult.size();i++){
						if(rankResult.get(i).get("accounts_id")==player.getAccountId()){
							rank--;
						}
					}
					if(rank>=1 && rank <=5){
						//1-5
						item.setLimitBreak(item.getLimitBreak()+10*count*100000000);
						
						
					}else if(rank>5  && rank<=10){
						//5-10
						
						item.setLimitBreak(item.getLimitBreak()+5*count*100000000);
						
					}else if(rank>10  && rank<=100){
						//10-100
						
						item.setLimitBreak(item.getLimitBreak()+1*count*100000000);
					}
					player.updateItem(-11,item);
					
					
					player.dropMessage(1,"恭喜满星通关,当前你的名次为:"+rank);
					npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"通关控制之神，解锁操作大神称号，从此受到万人敬仰！！！",10000);
					
					//识别排名
				}
				
				
			}else{
				player.scriptProgressMessage("当前满星奖励已经领取过了");
			}
		}
		//player.addPQLog("xj",starSum,);
		
		npc.broadcastPlayerNotice(1,player.getName() + "以" + cs + "颗星通关第"+stage+"关！ 当前总共星星为:"+starSum+" 总共星星达到120星可以解锁终极奖励哦");
        
		//player.gainItem(4036208,100);
}
player.changeMap(993001000, 0);

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value,time) values(?,?,?,?,?,now())";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value,day) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value,mac, player.getAccountId(), eventName);

}

function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(mac,name){
	var sql = "select sum(value) macCount from accounts_event where `event`=? and mac =?";
	var result = player.customSqlResult(sql,name,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
}

function getMyDate(str) {
        var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oSen = oDate.getSeconds(),
                oTime = oYear + addZero(oMonth) + addZero(oDay) + addZero(oHour) + addZero(oMin) + addZero(oSen);
        return oTime.substr(2);
}

//补零操作
function addZero(num) {
        if (parseInt(num) < 10) {
                num = '0' + num;
        }
        return num;
}