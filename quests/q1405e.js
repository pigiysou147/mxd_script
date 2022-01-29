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

let ret = npc.askYesNoNoEsc("很高兴能在这里见到你……干嘛这么吃惊？我看上去太年轻了吗？其实我的年纪比看上去要大得多，你可别小看我。好了，我马上让你转职成海盗。");
if (ret == 1) {
    npc.completeQuest();
    player.gainEquipInventorySlots(8);
    player.gainUseInventorySlots(8);
    player.gainSetupInventorySlots(8);
    player.gainEtcInventorySlots(8);
    player.gainCashInventorySlots(8);
    player.setJob(500);
    player.resetStats(4, 4, 4, 4);
    player.gainSp(3);
    if (player.canGainItem(1142107, 1)) {
        player.gainItem(1142107, 1);
    }
    if (player.canGainItem(1482065, 1)) {
        player.gainItem(1482065, 1);
    }
    if (player.canGainItem(1492065, 1)) {
        player.gainItem(1492065, 1);
    }
    if (player.canGainItem(2330000, 800)) {
        player.gainItem(2330000, 800);
    }
    if (player.canGainItem(2330000, 800)) {
        player.gainItem(2330000, 800);
    }
    npc.sayNextNoEsc("好了，现在你已经是海盗的一员了。你已经有了很多海盗技能，你可以打开技能窗看一看。我给了你一些SP，你可以用来提升技能。随着等级的升高，你可以使用更多的技能。努力修炼吧。");
    npc.sayNextNoEsc("光是技能还不行。请你打开属性窗，按照海盗的需要对自己的属性进行分配。想成为拳手的话，就以力量为中心，想成为火枪手的话，就以敏捷为中心。不知道的话，使用#b自动分配#k会比较方便。");
    npc.sayNextNoEsc("还有一个礼物就是, 我给你增加了装备、消费、设置、其他道具保管箱的数量。若有价值的物品就放到背包里好了。");
    npc.sayNextNoEsc("啊，还有一件事必须记住。你已经从新手成为了海盗，战斗时一定要注意体力。死了的话，之前积累的经验值会受到损失。要是辛苦积累到的经验值受到损失，岂不是很冤枉？");
    npc.sayNextNoEsc("好了！我能教你的就只有这些。我给了你几件适合你使用的武器，希望你一边旅行，一边锻炼自己。如果遇到了黑魔法师的部下，一定要消灭掉他们！明白了吗？");
} else {
    npc.sayNextNoEsc("你还没做好心理准备吗？");
}
