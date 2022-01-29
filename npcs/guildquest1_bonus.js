/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 *  Gatekeeper, Sharenian: Door to the Sharenian Castle (990000600)
 * 
 * @author Jackson 
 */
 var mac=getmac();
 
var macCount =getCount(mac);
let event = npc.getEvent("guild_quest");
if (event != null) {
        let boss = event.getVariable("boss");
        let leader = event.getVariable("leader");
       
		if (boss == null) {
				event.setVariable("boss", "o");
				npc.say("这里是最后的挑战了！ 打败黑暗领主之后给我#t4001024#！");
		} else if ("clear".equals(boss)) {
				if(player.getOnlineTime()<240){
					npc.say("需要在线满240分钟噢");
				}else{
					//领取家族奖励
					if(getEventCount("家族任务")<2 && macCount<2){
						
						setEventCount("家族任务",1,1);
						//player.gainGuildCommitment(500);
						player.modifyCashShopCurrency(1,3000);
						player.gainItem(3994979,2);
						
						player.gainItem(4001715,1);
						var item =player.getInventorySlot(-1,-11);
						if(item==null){
							npc.say("请佩戴武器");
						}else{
							if(item.getLimitBreak()>10000000000){
								
								addHyPay(10*2);
							}else{
								addHyPay(10);
							}

							if(item.getLimitBreak()>10000000000){
								
								item.setLimitBreak(item.getLimitBreak()+50000000);
							}else{
								
								item.setLimitBreak(item.getLimitBreak()+5000000);
							}
							player.updateItem(-11,item);
						}

						player.dropMessage(1,"获得了家族任务的奖励");
						npc.broadcastNotice("[家族任务] 恭喜玩家"+player.getName()+"完成了家族任务，获得了丰厚的奖励");
					}else{
						player.dropMessage(1,"每天只能获得一次家族任务的奖励");
					}
					
					
					
					player.changeMap(990001100);
				}
				
		} else if (player.hasItem(4001024, 1)) {
				event.setVariable("boss", "clear");
				player.loseItem(4001024);
				map.soundEffect("Party1/Clear");
				map.screenEffect("quest/party/clear");
			   
				npc.say("恭喜你们打败黑暗领主!!");
		} else {
				npc.say("还在干什么？快点打败黑暗领主之后，然后把#t4001024#交给我！");
		}


}




function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(mac){
	
	
	var sql = "select sum(value) macCount from accounts_event where `event`='家族任务' and mac =?";
	var result = player.customSqlResult(sql,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
}


function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}


function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}