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
 * Shuang (NPC 9040000)
 * Victoria Road: Excavation Site <Camp> (Map 101030104)
 *
 * Starts the guild quest.
 *
 * @author Jackson 
 */

let gqItems = [1032033, 4001024, 4001025, 4001026, 4001027, 4001028, 4001029, 4001030, 4001031, 4001032, 4001033, 4001034, 4001035, 4001036, 4001037];

let selection = npc.askMenu("通往圣瑞尼亚城堡的城门就在前面了，你想做什么呢？  \r\n\r\n#b"
        + "#L0#开启家族任务#l\r\n"
        + "#L1#加入家族任务#l");
switch (selection) {
        case 0:
                if (player.getGuildId() <= 0 || player.getGuildRank() >= 3) { //no guild or not guild master/jr. master
                        npc.sayNext("只有族长或者副族长才可以开始家族任务。");
                } else {
                        //no true requirements, make an instance and start it up
                        let event = npc.getEvent("guild_quest");
                        if (event == null) {
                                //start GQ
                                let guildId = player.getGuildId();
                                //makeEvent
                                event = npc.makeEvent("guild_quest", true, [guildId, player]);
                                if (event == null) {
                                        npc.say("现在家族任务还没有开放，请稍后再试。");
                                } else {
                                        //remove all GQ items from player entering
                                        for (let i = 0; i < gqItems.length; i++) {
                                                player.loseItem(gqItems[i]);
                                        }
                                        npc.broadcastGuildMessage(guildId, "[家族任务] [" + player.getName() + "]已开启家族任务，请成员前往[频道-" + player.getChannel() + "]的遗迹发掘地参与家族任务！");
                                }
                        } else {
                                let openGId = event.getVariable("GuildId");
                                if (openGId > 0) {
                                        if (openGId == player.getGuildId()) {
                                                npc.say("你的家族已经开启了家族任务挑战，无法再次开启！");
                                        } else {
                                                npc.say("已经有家族在执行任务了，请更换频道后再试。");
                                        }
                                }
                        }
                }
                break;
        case 1:
                if (player.getGuildId() <= 0) { //no guild or not guild master/jr. master
                        npc.sayNext("如果你想进入家族任务的话，你必须要加入一个家族。");
                } else {
                        let event = npc.getEvent("guild_quest");
                        if (event == null) {
                                npc.say("当前频道并没有家族任务在进行，请稍后再试。");
                        } else {
                                let openGId = event.getVariable("GuildId");
                                let canEnter = event.getVariable("canEnter");
                                let members = event.getVariable("members");
                                if (openGId > 0) {
                                        if (openGId == player.getGuildId()) {
                                                if (canEnter) {
                                                        npc.sayNext("那么我现在就送你进去！");
                                                        for (let i = 0; i < gqItems.length; i++) {
                                                                player.loseItem(gqItems[i]);
                                                        }
                                                        player.setEvent(event);
                                                        members.push(player);
                                                        player.changeMap(990000000, 0);
                                                } else {
                                                        npc.say("家族任务已经正式开启了，当前无法在进行申请进入！");
                                                }
                                        } else {
                                                npc.say("正在举行家族任务的不是您的家族，请检查后再试。");
                                        }
                                }
                        }
                }
                break;
}
