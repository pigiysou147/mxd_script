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
        let ret = npc.askYesNo("我迟到了吧？你好。我是教导关于圣地历史的奇努。怎么傻傻站在这呢？这里有椅子，快坐吧。");
        if (ret == 1) {
                npc.sayNext("走到椅子前，按快捷鍵X，便可以坐下。");
                npc.startQuest();
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/10");
        }
}
