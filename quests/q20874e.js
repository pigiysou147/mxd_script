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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

endScript();


function endScript() {
        let ret = npc.askAccept("#h0#, 你表现的很出色.#b骑士等级考试#k结束了，你通过考试了，是否现在成为一个正式的骑士。");
        if (ret == 1) {
                if (player.gainItem(1142067, 1)) {
                        if (player.getJob() == 1400) {
                                player.setJob(1410);
                                player.gainSp(5);
                        }
                        npc.completeQuest();
                        npc.sayNext("现在你已经成为一名正式的骑士团骑士了！");
                } else {
                        npc.sayNext("背包装备栏不足！请清理你的装备栏！");
                }
        } else {
                npc.sayNext("我猜你还没有准备好！");
        }
}
