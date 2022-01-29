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
        let ret = npc.askYesNo("看你在努力训练的样子,真令人开心. 应该很快修炼成为骑士吧. 不停训练应该很累吧?这里喝点冰凉的饮料,休息一下吧. 来, 拿去吧.");
        if (ret == 1) {
                npc.startQuest();
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/2");
                player.gainItem(2001555, 1);
        } else {
                npc.sayNext("饮料不符合你的胃口吗？");
        }
}
