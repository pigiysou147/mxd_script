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
 *
 * @author Jackson

 */



npc.say("#e#r你好单身呱,现在不是七夕跳跳开放时间~ 孤寡孤寡");
/**

var txt="\r\n恭喜勇士到达了七夕跳跳的终点，这里会给你丰厚的奖励哦~\r\n";
txt+="#L0##r领取奖励#l";
let selection =npc.askMenu(txt);
if(selection==0){
	
	if(getEventCount("七夕跳跳")>0){
		
		npc.say("你已经领取过奖励了~");
		
	}else if(player.getOnlineTime()<200){
		npc.say("需要在线200分钟哦");
	}else{
		setEventCount("七夕跳跳",1,1);
		player.gainItem(2614079,1);
		player.modifyCashShopCurrency(1,500000);
		npc.broadcastWeatherEffectNotice(37,"[七夕跳跳]： 玩家 " + player.getName() + " 在七夕跳跳中通关啦，点击活动副本进行传送哦~~各位玩家快来参与吧", 10000);
		npc.broadcastNotice("恭喜玩家" + player.getName() + "完成了七夕跳跳，获得了1000万突破以及50万点券的奖励");
	}
	player.changeMap(100000000);
}*/

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

}

function setEventCount(eventName,type,value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type,value,player.getAccountId(), eventName);


}


