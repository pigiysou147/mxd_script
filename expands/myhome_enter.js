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
if (player.getChannel() == 1) {
        if (map.getId() >= 871100000 && map.getId() <= 871100099) {
                player.runScript("myhome_exit");
        } else {
                if (map.getId() != 100000000) {
                        player.showSystemMessage("当前无法进入,仅限射手村可以进入！");
                } else {
                        let type = player.getMyHomeType();
                        let ret = npc.askYesNoE("#face0#你要现在进入我的小屋吗？", 9400920);
                        if (ret == 1 && type > 0) {
                                npc.rememberMap("RETURN_MAP");
                                if (player.isQuestStarted(64591)) {
                                        player.changeMap(871000011);
                                } else {
                                        player.goMyHome();
                                }
                        }
                }
        }
} else {
        npc.sayNextE("#face0#当前只有#b频道-1#k可以进入！", npcId);
}

