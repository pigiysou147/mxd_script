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

let selStr = "#b梅兹#k大人我高尚的业余爱好是宝石鉴赏。看着闪光的宝石，不知不觉一天就过去了。嗯～你也感兴趣吗？看你也不像是对宝石感兴趣的人啊？\r\n";
if (player.getMakingSkillLevel(92030000) > 0) {
        selStr += "#k#l\r\n#L2##b提升#e饰品制作#n等级。#l\r\n#L3#饰品制作技术初始化。#k#l";
} else {
        selStr += "#L0##b听取有关#e饰品制作#n的说明。#l\r\n#L1#学习#e饰品制作#n技术。#k#l";
}
let sel = npc.askMenu(selStr);
switch (sel) {
        case 0:
                npc.sayNext("要想说明饰品制作，就必须先谈谈宝石之美。不过都说的话，可能说上一整天都不够，我就长话短说吧……\r\n饰品制作非常简单。就是对未加工的宝石和矿石进行加工，制作成美丽的饰品。通过这个过程，可以发挥出材料隐藏的力量，让人变得更美或者更强。");
                break;
        case 1:
                if (player.getLevel() < 30) {
                        npc.say("哎呀……你好像还不够强，还不能学些专业技术。#b至少必须达到30级2转以上，龙神必须3转以上，暗影双刀必须2转+以上#k，才能学习专业技术。等达到条件之后再来找我吧。");
                } else if (player.getMakingSkillLevel(92030000) > 0) {
                        npc.say("你已经学些过#e饰品制作#n，难道还想学？");
                } else if (!player.isQuestCompleted(3199)) {
                        npc.say("你对饰品制作感兴趣吗？想学的话，必须先去见见#b希梅尔#k～在村子入口处就能见到希梅尔了。");
                } else if (getMakingSkillSize() > 0) {
                        npc.say("嗯，你好像已经学习了其他的制作技术。真想学习的话，就必须先放弃当前的制作技术。");
                } else if (player.getMakingSkillLevel(92010000) <= 0) {
                        npc.say("哎呀～这可怎么办呢？要想学习饰品制作的话，就必须先学习采矿。要想制作饰品，需要有各种金属和宝石～你先到左边去，那里有个长得像蘑菇一样的叫#b诺布#k的采矿大师，你先去那里学习采矿吧。");
                } else {
                        let ret = npc.askYesNo("你真的要学习#b饰品制作#k吗？\r\n学费是#b5000金币#k。\r\n#b");
                        if (ret == 1) {
                                if (player.hasMesos(5000)) {
                                        player.loseMesos(5000);
                                        player.setSkillLevel(92030000, 0x1000000, 12, false);
                                        player.soundEffect("profession/levelup");
                                        player.showAvatarOriented("Effect/OnUserEff.img/professions/acc_product_levelup");
                                        npc.say("好！非常好！太棒了！！好了～我已经把饰品制作知识全部传授给你了。熟练度满了之后，可以提升饰品制作等级。别忘了到时再来找我。");
                                } else {
                                        npc.say("你的钱不够啊。想要学习的话，需要#b5000金币#k才行。这可是规矩。");
                                }
                        } else {
                                npc.say("什么！！！饰品制作是非常有用的技术。这都还要考虑？你也太慎重了吧？");
                        }
                }
                break;
        case 2:
                if (player.getMakingSkillLevel(92030000) >= 12) {
                        npc.sayNext("你已经达到最高等级了，不需要在提升了！");
                } else if (player.checkMakingSkillExpFull(92030000)) {
                        let ret = npc.askYesNo("你的熟练度积满了呀，现在是否要提升至下一等级，学习新的内容？");
                        if (ret == 1) {
                                let nLevel = Math.min(12, player.getMakingSkillLevel(92030000) + 1);
                                player.setSkillLevel(92030000, nLevel << 24, 12, false);
                                player.soundEffect("profession/levelup");
                                player.showAvatarOriented("Effect/OnUserEff.img/professions/acc_product_levelup");
                                npc.sayNext("好了，我已经帮你提升了饰品制作等级。熟练度积满后可再提升至下一等级，就可以学习新的内容。等你积满熟练度后，再来找我吧。");
                        } else {
                                npc.sayNext("看来你很慎重。好的，你先仔细考虑一下，然后再来找我。");
                        }
                } else {
                        npc.sayNext("哎呀！你可真贪心。熟练度还不够。你再去练习练习吧。");
                }
                break;
        case 3:
                let ret = npc.askYesNo("你想放弃饰品制作？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？");
                if (ret == 1) {
                        player.setSkillLevel(92030000, -1, -1, false);
                        player.checkMakingSkillEff();
                        npc.sayNext("全部初始化了……真可惜。如果你想重新学习的话，可以随时来找我。");
                } else {
                        npc.sayNext("看来你很慎重。好的，你先仔细考虑一下，然后再来找我。");
                }
                break;
}

function getMakingSkillSize() {
        let ret = 0;
        for (let i = 9202; i <= 9204; i++) {
                if (player.getMakingSkillLevel(i * 10000) > 0) {
                        ret++;
                }
        }
        return ret;
} 