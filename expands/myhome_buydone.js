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
let n = player.getIntQuestRecordEx(500773, "manager");
let npcId = 9400920 + n;
let nowTime = new Date().getTime();
let t = player.getQuestRecordEx(500778, "t");
let nT = getMyDate(nowTime);
if (player.isQuestStarted(500778)) {
        let reward = player.getQuestRecordEx(500778, "reward");
        if (nT > t) {
				player.addPQLog("家具购买",1,999);
                player.updateQuestRecordEx(500778, "last=" + getMyDate(nowTime));
                player.updateWorldShareRecord(500778, player.getQuestRecordEx(500778));
                player.forfeitQuest(500778);
                if (!player.gainItem(reward, 1)) {
                        player.gainParcel(reward, 1, "背包空间不足，以邮件发送。");
                }
                npc.sayNextE("#face1#啦啦~！收集到了#b#i" + reward + ",Count:1:# #t" + reward + ",Count:1##k！", npcId);
        } else {
                npc.sayNextE("#face1#购物还未结束呢！", npcId);
        }
} else {
        npc.sayNextE("#face1#发生未知错误", npcId);
}


function getMyDate(str) {
        var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oTime = oYear + '/' + addZero(oMonth) + '/' + addZero(oDay) + '/' + addZero(oHour) + '/' + addZero(oMin);
        return oTime.substr(2);
}

//补零操作
function addZero(num) {
        if (parseInt(num) < 10) {
                num = '0' + num;
        }
        return num;
}