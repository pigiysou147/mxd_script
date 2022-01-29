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


if (player.hasItem(4033195, 1)) {
        npc.sayS("药水箱清理好了，应该到1层去。不快点的话，又要被林伯特大叔骂了……");
} else if (player.isQuestActive(20031)) {
        let ret = npc.askYesNoS("装满了药水，覆盖着一层灰尘的药水箱。让人怀疑还能不能出售。\r\n要把药水箱拿出来吗？");
        if (ret == 1) {
                player.gainItem(4033194, 1);
                player.gainItem(4033195, 1);
                npc.sayS("嗯？这封信是怎么回事？是林伯特大叔寄来的信吗？看上去好像很旧的样子。\r\n“库洛姆”寄……库洛姆是谁？好像在哪里听说过。记不起来了。没写收信人……先把他交给林伯特大叔看看吧。");
        } else {
                npc.sayS("好像是林伯特大叔说的药水箱没错……");
        }
}
