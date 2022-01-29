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
        npc.sayNext("#h0#,，为了表达欢迎你来到这里，送上一个小礼物给你。使用装备的方法很简单。请使用#b#e快捷键I#k#n。就会开启您的背包.稍等一下，你是个急性子呢？我的话说完以后你试试看吧。帽子还在我手里。通过快捷键 I 开启道具栏，双击帽子，就可以穿上该装备啦。现在要试试看了吗？");
        npc.startQuest();
        player.gainItem(1003769, 1);
        player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/5");
}
