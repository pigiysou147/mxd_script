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

startScript();

function startScript() {
        npc.sayNextSNoEsc("#b冒险之书#k？你是说可以在这里写下我的冒险故事，对吧？", false);
        npc.sayNextSNoEsc("我正想开始进行冒险，现在马上开始就行了。……哎？", false);
        if (player.canGainItem(4460004, 1)) {
                player.gainItem(4460004, 1);
                npc.completeQuest();
                player.setInGameCurNodeEventEnd(true);
                player.setInGameDirectionMode(true, true, false, false);
                player.showScreenAutoLetterBox("adventureStory/mapleLeaf/0", 0);
                //npc.setDelay(1800);
                player.setInGameDirectionMode(false, false, false, false);
                player.setInGameCurNodeEventEnd(true);
                npc.sayNextSNoEsc("这是什么枫叶？这么看来，冒险岛上存在着巨大的枫树。这枫叶是跟随我来到这里的吗？", false);
                npc.sayNextSNoEsc("这也算是一种纪念，好好珍藏吧。夹在#b 冒险之书#k里的话，就不会弄皱了。", false);
        } else {
                npc.sayNextSNoEsc("先整理下背包吧.", false);
        }
}
