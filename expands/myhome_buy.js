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

if (!player.isQuestStarted(500778)) {
        let name = player.getKeyValue("HOME_BUY_NAME");
        let time = player.getIntKeyValue("HOME_BUY_TIME");
        let key = player.getKeyValue("HOME_BUY_KEY");
        let reward = player.getKeyValue("HOME_BUY_REWARD");
        let ret = npc.askAcceptE("#face0##b" + name + "#k家具选购需要#b" + time + "小时#k #r(10分钟 额外降低加成)#k。你确定要现在出发吗？", 9400920);
        if (ret == 1) {
                let nowTime = new Date().getTime();
                let endTime = nowTime + time * 60 * 60 * 1000;
                player.updateQuestRecordEx(500778, "reward", reward);
                player.updateQuestRecordEx(500778, "Count", String(1));
                player.updateQuestRecordEx(500778, "lotteryName", key);
                player.updateQuestRecordEx(500778, "last", getMyDate(nowTime));
                player.updateQuestRecordEx(500778, "bonusCoin", String(0));
                player.updateQuestRecordEx(500778, "t", getMyDate(endTime));
                player.startQuest(500778, 0);
                player.updateWorldShareRecord(500778, player.getQuestRecordEx(500778));
                npc.sayNextE("#face1#好的！那我就去找家具了，你慢慢等吧！", 9400920);

        }
} else {
        let ret = npc.askAcceptE("#face3#选购还没结束呢！你真的要取消吗？", 9400920);
        if (ret == 1) {
                player.forfeitQuest(500778);
                let nowTime = new Date().getTime();
                player.updateQuestRecordEx(500778, "");
                player.updateQuestRecordEx(500778, "last", getMyDate(nowTime));
                player.updateWorldShareRecord(500778, player.getQuestRecordEx(500778));
        }
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