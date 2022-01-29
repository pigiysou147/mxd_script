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

let mapId;
let player, map;

function init(attachment) {
        player = attachment;
        event.startTimer("kick", 60 * 60 * 1000);
		event.setVariable("lasttime",new Date().getTime());
		
		event.setVariable("yctimes",0);
        endTime = new Date().getTime() + 60 * 60 * 1000;
        player.initTradeKingShop();
        var data = player.getQuestRecordEx(15326);//推车
        var type = 0;
        if (data != null) {
                type = Number(data);
        }
        var maxWeight = 10 + (type * 10);
        for (let i = 0; i < 5; i++) {
                data = player.getQuestRecordEx(15325, String(i));
                if (data != null) {
                        var workerNum = Number(data);
                        var addWeight = getTradeKingWeightAdd(i) * workerNum;
                        maxWeight += addWeight;
                }
        }
        player.resetPQLog("TK_9001087");
        player.resetPQLog("TK_9001088");
        player.resetPQLog("TK_9001091");
        player.updateQuestRecordEx(15324, "mWeight", String(maxWeight));
        player.changeMap(993000801);
        player.setEvent(event);
}

function playerDisconnected(player) {
        event.destroyEvent();
}

function playerChangedMap(player, destination) {
        switch (destination.getId()) {
                case 993000801://尼哈沙漠自由贸易地区 - 休彼德蔓的探险列车
                case 993000802://尼哈沙漠自由贸易地区 - 贸易地区岔路
                case 993000803://尼哈沙漠自由贸易地区 - 丰饶沙漠-1
                case 993000804://尼哈沙漠自由贸易地区 - 丰饶沙漠-2
                case 993000805://尼哈沙漠自由贸易地区 - 丰饶沙漠-3
                case 993000806://尼哈沙漠自由贸易地区 - 仙人掌沙漠-1
                case 993000807://尼哈沙漠自由贸易地区 - 仙人掌沙漠-2
                case 993000808://尼哈沙漠自由贸易地区 - 仙人掌沙漠-3
                case 993000809://尼哈沙漠自由贸易地区 - 孤独沙漠-1
                case 993000810://尼哈沙漠自由贸易地区 - 孤独沙漠-2
                case 993000811://尼哈沙漠自由贸易地区 - 孤独沙漠-3
                case 993000812://尼哈沙漠自由贸易地区 - 寂静沙漠-1
                case 993000813://尼哈沙漠自由贸易地区 - 寂静沙漠-2
                case 993000814://尼哈沙漠自由贸易地区 - 寂静沙漠-3
                case 993000815://尼哈沙漠自由贸易地区 - 寂静沙漠便道-1
                case 993000816://尼哈沙漠自由贸易地区 - 寂静沙漠便道-2
                case 993000817://尼哈沙漠自由贸易地区 - 寂静沙漠便道-3
                case 993000818://尼哈沙漠自由贸易地区 - 前往阿里安特贸易区的路
                case 993000819://尼哈沙漠自由贸易地区 - 前往玛加提亚贸易区的路
                case 993000820://尼哈沙漠自由贸易地区 - 前往古代遗迹的路
                case 993000821://尼哈沙漠自由贸易地区 - 阿里安特贸易区-1
                case 993000822://尼哈沙漠自由贸易地区 - 阿里安特贸易区-2
                case 993000823://尼哈沙漠自由贸易地区 - 阿里安特贸易区-3
                case 993000824://尼哈沙漠自由贸易地区 - 阿里安特贸易区-4
                case 993000825://尼哈沙漠自由贸易地区 - 玛加提亚贸易区-1
                case 993000826://尼哈沙漠自由贸易地区 - 玛加提亚贸易区-2
                case 993000827://尼哈沙漠自由贸易地区 - 玛加提亚贸易区-3
                case 993000828://尼哈沙漠自由贸易地区 - 玛加提亚贸易区-4
                case 993000829://尼哈沙漠自由贸易地区 - 古代遗迹内部-1
                case 993000830://尼哈沙漠自由贸易地区 - 古代遗迹内部-2
                case 993000831://尼哈沙漠自由贸易地区 - 古代遗迹内部-3
                case 993000832://尼哈沙漠自由贸易地区 - 古代遗迹内部-4
                case 993000833://尼哈沙漠自由贸易地区 - 地下便道-1
                case 993000834://尼哈沙漠自由贸易地区 - 地下便道-2
                case 993000835://尼哈沙漠自由贸易地区 - 地下便道-3
                case 993000836://尼哈沙漠自由贸易地区 - 隐藏的绿洲   
                        player.showTimer((endTime - new Date().getTime()) / 1000);
                        for (var i = 0; i < 5; i++) {
                                player.cancelSkillEffect(80001960 + i);
                        }
                        break;
                default:
                        for (let i = 0; i < 3; i++) {
                                player.cancelSkillEffect(80001950 + i);
                        }
                        for (var i = 0; i < 5; i++) {
                                player.cancelSkillEffect(80001960 + i);
                        }
                        event.destroyEvent();
        }
}

function kick() {
        event.destroyEvent();
        for (let i = 0; i < 3; i++) {
                player.cancelSkillEffect(80001950 + i);
        }
        for (var i = 0; i < 5; i++) {
                player.cancelSkillEffect(80001960 + i);
        }
        player.changeMap(993000837);
}

function timerExpired(key) {
        switch (key) {
                case "kick":
                        kick();
                        break;
        }
}

function deinit() {
        player.setEvent(null);
}



function getTradeKingWeightAdd(type) {
        switch (type) {
                case 0:
                        return 10;
                case 1:
                        return 20;
                case 2:
                        return 10;
                case 3:
                        return 15;
                case 4:
                        return 25;
                default:
                        return 10;
        }
}
