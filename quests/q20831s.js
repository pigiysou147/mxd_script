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
        let ret = npc.askYesNo("饮料的口味还可以吗？不知道合不合你的胃口。是我们的贵族非常喜欢的果汁呢。..那么要再开始训练了吗？这次是复习！刚才学过的东西应该没有忘记吧？打败3只..#o9300730#并收集3个#t4000489#。");
        if (ret == 1) {
                npc.startQuest();
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/4");
                for (let i = 0; i < 3; i++) {
                        map.spawnMob(9300730, -355, -7);
                }
        } else {
                npc.sayNext("这个很有难度吗？");
        }
}
