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
npc.sayNext("哈哈，你来啦？红雅怎么可能真的让你吃毒药呢，这个只是红雅的考验啦，并不是毒药！但是，你一旦背叛，就会永远与暗影双刀全员为敌！");
let ret = npc.askYesNo("你做好准备成为飞花院的一员了吗？");
if (ret == 1) {
    npc.completeQuest();
    player.gainEquipInventorySlots(4);
    player.gainUseInventorySlots(4);
    player.gainSetupInventorySlots(4);
    player.gainEtcInventorySlots(4);
    player.gainCashInventorySlots(4);
    player.setJob(400);
    player.resetStats(4, 4, 4, 4);
    player.gainSp(3);
    npc.sayNext("好了，现在你也是飞花院的一员了。现在你有了很多暗影双刀技能，打开技能窗看看吧。我给了你一些SP，你可以用它提升技能。等级提高之后，你可以使用更多的技能。希望你努力修炼。");
    npc.sayNext("光是技能还不行。请你打开属性窗，按照暗影双刀的需要对自己的属性进行分配。暗影双刀必须以运气为中心。不知道的话，可以使用#b自动分配#k。");
    npc.sayNext("此外我再送你一件礼物。我帮你增加了其他栏的空格数。如果是需要的东西，可以放进背包带在身上。");
    npc.sayNext("啊，还有一件事不能忘记。你成为了暗影双刀，在战斗的时候必须注意管理体力。死亡的话，之前技能的经验值会受到损失。好不容易获得的经验值，如果损失的话，岂不是太可惜了。");
    npc.sayNext("好了！我能教你的就是这些。我给了你几件适合你使用的武器，你去一边旅行，一边锻炼自己吧。明白了吗？");
} else {
    npc.sayNext("好的，那等你准备好了在来吧。");
}