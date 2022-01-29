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
let cdkey = npc.askText("请输入CDK,CDKEY可以通过群主发放获得", "", 1, 10);

var result = player.customSqlResult("select * from cdkey where cdkey=?", cdkey);
if(result.size() == 0) {
	npc.say("cdk不存在");
} else {
	//cdk存在
	var gift = result.get(0);
	var state = gift.get("state");
	if(state == 0) {
		//可以使用
		//查询重复IP
		var ipresult =player.customSqlResult("select recentmacs from accounts where id=?", player.getAccountId());
		var cunzai =player.customSqlResult("select mac from cdkey where mac=? and mac<>'00-00-00-00-00-00'", ipresult.get(0).get("recentmacs"));
		if(cunzai.size()>0){
			npc.say("请不要重复领取");
		}else{
			if(getEventCount("CDKEY") < 1) {

				setEventCount("CDKEY", 0, 1);

				//更新
				player.customSqlUpdate("update cdkey set state=1,name=?,accountid=?,mac=? where cdkey=?", player.getName(), player.getAccountId(),ipresult.get(0).get("recentmacs"), cdkey);
				
				player.modifyCashShopCurrency(1, 200000);
				player.gainItem(2434007, 1);
				player.gainItem(2431941,1);
				
				//赠送新手
				player.gainItem(1082647,1);
				player.gainItem(1052929,1);
				player.gainItem(1073057,1);
				player.gainItem(1102828,1);
				player.gainItem(1004492,1);
				player.gainItem(1132287,1);
				player.gainItem(1122306,1);
				player.gainItem(1152187,1);
				
				//新手强化材料
				player.gainItem(4000008,80*9);
				player.gainItem(4000006,200*9);
				player.gainItem(4000017,60*9);
				
				player.gainItem(5062024, 100);
				player.gainItem(5062500, 300);
				player.gainItem(2022530, 10);
				player.gainItem(5062009, 300);
				npc.broadcastNotice("[CDKEY]： 恭喜玩家 " + player.getName() + " 在CDK礼包中领到了FFN武器自选X1");
				npc.say("使用成功");
			} else {
				npc.say("你已经领取过了");
			}
		}
		
	} else {
		npc.say("该礼包码已经被使用过了");
	}
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

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}