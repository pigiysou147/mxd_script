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
if (!player.isQuestStarted(21002) && !player.isQuestCompleted(21002)) {
        npc.sayNext("哦，战神，你醒了！伤势如何？…什么？你想知道现在发生了什么？");
        npc.sayNext("我们马上就要离开这个地方。我们每个人都在船上，神兽会在飞行中保护我们的方舟，所以你不用担心。一旦我们完成了所有的事情，我们将继续逃往金银岛。");
        npc.sayNext("战神的伙伴们…？好...他们已经去和黑魔法师的战斗了。他们决定趁我们逃跑的时候，去找黑魔法师。什么？你想加入他们的战斗？不，没有办法！你受伤了！你现在应该登上船跟我们一起离开！！");
        player.startQuest(21002, 0, "1");
        player.showReservedEffect("Effect/Direction1.img/aranTutorial/Trio");
} else {
        let sel = npc.askMenu("我们正处于紧急状态。您想了解些什么？ \r #b#L0#黑魔法师在哪里？#l \r #b#L1#为逃避准备的如何？#l \r #b#L2#我的伙伴们呢？#l");
        switch (sel) {
                case 0:
                        npc.sayNext("我听说我们现在这个地方最接近黑魔法师。因为黑魔法师控制着龙我们甚至不能穿过森林逃脱。这就是为什么我们来到了方舟逃生路线。我们离开这个地方的唯一办法是飞往金银岛。");
                        break;
                case 1:
                        npc.sayNext("我们的人都已经上船了，我们都准备好逃离这个地方了。我们船上还需要一些东西，我们就要去金银岛了。在我们的飞行，神兽会提供保护，因为此时她没有人保护。");
                        break;
                case 2:
                        npc.sayNext("你的伙伴们... 离开这里和黑魔法师战斗了，为我们逃跑争取多一些时间。他们决定不带走你，因为你受伤了。一旦我们拯救了孩子，你应该和我们一起上船离开了，战神！");
                        break;
        }
}
