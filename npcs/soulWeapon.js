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

/* global npc, player */

/**
 * V核心大师
 * NpcId 1540945
 * @author Jackson 
 */


let response = npc.askMenu("我叫毛莫，从事灵魂研究。你关心与灵魂有关的事情吗？\r\n\r\n#b#L0# 你是恶魔吗？#l \r\n#L1# 我想详细了解有关灵魂武器的事情。#l \r\n#L2# 我想把灵魂武器恢复成原来的武器。#l \r\n#L3# 不，我讨厌这种阴森的话题。#l \r\n#L4# 你在这里做什么呢？#l");
switch (response) {
        case 0:
                npc.sayNextNoEsc("恶魔？恶魔是什么东西？");
                npc.sayNextSNoEsc("就是你啊！你长得跟恶魔一样可怕。", false);
                npc.sayNextNoEsc("你说我可怕？\r\n嗯……怪不得我每次去村庄时，都会被人赶出来……呵呵\r\n不管怎么说，我长得没那么可怕。在我原来那个地方，我算长得比较帅气的……");
                npc.sayNextSNoEsc("(就那种长相，还算帅气……？) 原来的地方？你既然是恶魔，应该是从魔界来的吧？", false);
                npc.sayNextNoEsc("魔界？……虽然我不懂这个词的意思，但你指的应该是其他的世界吧。\r\n在我那个世界里，我是一名专门开发新武器的研究者。在研究更加强力的武器过程中，我领悟到了#r灵魂#k的力量。而且，通过对那种力量的长期研究，我终于开发出了叫做#b灵魂武器#k的强大兵器。\r\n可问题是，大家都不认同那种技术……");
                npc.sayNextSNoEsc("(他看上去一副悲伤的表情。) \r\n#b灵魂武器#k？光听名字就感觉是很厉害的东西呐。好像不是随随便便什么人都能使用的。", false);
                npc.sayNextNoEsc("对的！看来你知道的还真不少。#b灵魂武器#k可以说是魔法兵器的巅峰之作！\r\n我已经辗转多个世界，终于遇到了像你这样的知音啊。\r\n(自言自语)啊，我当初早该听艾里葛斯的话。这样一来，我的研究就能在这个世界得到认可……");
                npc.sayNextSNoEsc("刚，刚才你提到艾里葛斯！？", false);
                npc.sayNextNoEsc("嗯？你知道艾里葛斯？他既是我的朋友又是我的远亲。啊哈……在这么遥远的地方，居然能够遇到一位知道艾里葛斯的朋友。我今天真是太走运了。呵呵……");
                npc.sayNextSNoEsc("啊……是嘛……哈哈哈……\r\n(艾里葛斯可是传说中毁灭了圣瑞尼亚城的恶魔啊！感觉这个大叔好像是个危险人物。)", false);
                break;
        case 1:
                npc.sayNextNoEsc("你想知道有关#b灵魂武器#k的事情？\r\n灵魂武器，其实就是#b灵魂和武器结合后的状态#k。而且，要想把普通武器制作成灵魂武器的话，就需要#b灵魂附魔石#k。");
                npc.sayNextNoEsc("所谓#b灵魂附魔石#k，就是为了让武器能够吸收（保管）灵魂，而制作出的魔法道具。\r\n在武器上使用这种道具后，该武器就变成了灵魂武器。之后，#b每次吸收灵魂时，攻击力和魔力就会提高#k。");
                npc.sayNextNoEsc("灵魂武器的能力还远不止如此。将强大生命体的#b灵魂结晶#k装备在灵魂武器上后，就能获得#b额外潜能#k，并且，#b集齐所有灵魂后，便可施展出召唤该生命体的强大技能#k。");
                npc.sayNextSNoEsc("哦，好神奇的技术啊！", false);
                break;
        case 2:
                let ret = npc.askYesNo("你确定要把灵魂武器恢复成原来的武器吗？#r进行恢复后，目前灵魂武器上装备的灵魂结晶将自动消失#k，因此请考虑清楚。");
                if (ret == 1) {
                        let result = player.removeWeaponSoul();
                        if (result == -1) {
                                npc.sayNext("你并没有装备武器呀，请在确认下。");
                        } else if (result == 0) {
                                npc.sayNext("装备中的武器好像不是灵魂武器啊。无法进行恢复。");
                        } else if (result == 1) {
                                npc.sayNext("装备中的灵魂武器，已经完成恢复了。");
                        }
                } else {
                        npc.sayNext("你不想听啊。那等你改变主意再来和我说话吧。");
                }
                break;
        case 3:
                npc.sayNext("居然说阴森……(看他那表情，好像受到打击一般。) \r\n那个……反正你听了也不会有什么损失，改变主意的话再来找我吧。");
                break;
        case 4:
                npc.sayNextNoEsc("我感觉到这附近有强大的灵魂存在。强大的灵魂非常值得研究哦。");
                npc.sayNextSNoEsc("(强大的灵魂？难道是说我吗？?)", false);
                npc.sayNextNoEsc("你是不是想问，我为何能感觉到你有强大的灵魂？答案非常简单。\r\n因为你身上散发出了#r可口的香味#k……呵呵呵");
                npc.sayNextSNoEsc("!!!! \r\n(得赶快离开这里才行！)", false);
                npc.sayNextNoEsc("嗯？你怎么了？……啊，难道，你还怕我吃了你不成？\r\n放心，你和我这么谈得来，我怎么会吃你呢。");
                break;
}