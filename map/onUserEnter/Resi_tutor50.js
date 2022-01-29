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
//player.setStandAloneMode(true);
player.setDirectionMod(false);

npc.sayNextNoEsc("好险…格里梅尔好像有事出去了…快，就趁現在，你快走吧。", 2159006);
npc.sayNextSNoEsc("我一个人逃走吗？那你呢？", false);
npc.sayNextNoEsc("我没有办法逃走。格里梅尔博士记得自己实验过的所有东西，只要少一个，马上就会发现的…所以你快走吧。", 2159006);
npc.sayNextSNoEsc("不可以！你也跟我一起走！", false);
npc.sayNextNoEsc("都说了不可能了，更何况我…被关在里面。想要逃也逃不了…谢谢你的心意。好久没有人这么关心我了。快，快去吧。", 2159006);
let ret = npc.askYesNoNoEsc("#b（贝比蒂把眼睛闭上了，就像放弃了一切，到底该怎么办？去打开贝比蒂的实验室看看！）#k", 2159006);
if (ret == 1) {
        player.updateQuestRecordEx(23007, "vel00", "4");
        player.updateQuestRecordEx(23007, "vel01", "1");
        player.gainExp(60);
        player.changeMap(931000013, 0);
}

