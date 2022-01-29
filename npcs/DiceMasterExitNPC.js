/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

let countN = getEventCount("DiceMaster");
let sel = npc.askMenu("你好，#b#e#h0##n#k。你喜欢哪种游戏模式呢？\r\n#b\r\n#L1# 普通关卡(每个账号1天可以进入1次 - " + countN + "/1)    请注意：严禁换账号刷奖励方式，查到直接封号处理哦#l\r\n#l", 9400493);
switch (sel) {
        case 1: {
                let count = 1 - countN;
				if(player.isGm()){
					count=1;
				}
                if (count <= 0) {
                        npc.say(count+"今天已经无法再次进入掷骰大师普通关卡了！\r\n #r 请注意 一个账号一天只能进入一次", 9400493);
                }else {
                        npc.sayNext("你带来了1W点卷入场券了吗？今天还可以进入#b#e" + count + "#n#k次。要立即进入掷骰大师普通关卡吗？\r\n\r\n#r#e[注意事项]\r\n1. 掷骰大师 普通关卡。每个账号1天可以进入1次，切换账号刷奖励者被查到会直接封号的哦 。\r\n2. 本内容建议使用1024*768以上的清晰度。#n#k", 9400493);
                        let mapId = 867121000 + Math.floor(Math.random() * 9) * 100;
						player.modifyCashShopCurrency(1,-10000);
                        setEventCount("DiceMaster",1,1);
                        npc.rememberMap("RETURN_MAP");
                        npc.makeEvent("dicemaster", false, [player, mapId]);
                }
                break;
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