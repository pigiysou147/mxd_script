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
 * Holy Stone (NPC 2030006)
 * Hidden Street: Holy Ground at the Snowfield (Map 211040401)
 *
 * <insert description here>
 *
 * @author Jackson (content from DelphiMS r418)
 */

//TODO: make wrong answers
let ret = npc.askYesNo("#b(一个神秘的能量包围着这块石头。老年人明确地告诉我去碰它…我真的应该碰这东西吗？)#k");
if (ret == 1) {
        if (player.isQuestStarted(1431) || player.isQuestStarted(1432) || player.isQuestStarted(1433) || player.isQuestStarted(1435) || player.isQuestStarted(1436) || player.isQuestStarted(1437) || player.isQuestStarted(1439) || player.isQuestStarted(1440) || player.isQuestStarted(1442) || player.isQuestStarted(1443) || player.isQuestStarted(1445) || player.isQuestStarted(1446) || player.isQuestStarted(1447) || player.isQuestStarted(1448)) {
                player.changeMap(910540000, 0);
        } else {
                npc.sayNext("你想3转的时候再来吧。");
        }
} else {
        npc.say("准备好了再来吧。");
}
