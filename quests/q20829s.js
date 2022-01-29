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

startScript();

function startScript() {
        let ret = npc.askYesNo("我是要教你战斗的奇赞。你说你叫做#h0#对吧？\r\n之后好好加油吧。要现在就开始吗？");
        if (ret == 1) {
                npc.startQuest();
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/3");
                for (let i = 0; i < 5; i++) {
                        map.spawnMob(9300730, -355, -7);
                }
        }
}