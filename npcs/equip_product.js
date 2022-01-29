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

let selStr = "我是装备制作达人#b埃珅#k。找我有事吗？\r\n";
if (player.getMakingSkillLevel(92020000) > 0) {
        selStr += "#k#l\r\n#L2##b提升#e装备制作#n等级。#l\r\n#L3#装备制作技术初始化。#k#l";
} else {
        selStr += "#L0##b听取有关#e装备制作#n的说明。#l\r\n#L1#学习#e装备制作#n技术。#k#l";
}
let sel = npc.askMenu(selStr);
switch (sel) {
        case 0:
                npc.sayNext("装备制作是用采矿提炼好的矿物或宝石，在巨大的熔炉里融化，制作成自己需要的防具或武器的技术。只要在我这里学会了装备制作技术，就可以制作出以前从未见过的武器和防具。");
                break;
        case 1:
                if (player.getLevel() < 30) {
                        npc.say("哎呀……你好像还不够强，还不能学些专业技术。#b至少必须达到30级2转以上，龙神必须3转以上，暗影双刀必须2转+以上#k，才能学习专业技术。等达到条件之后再来找我吧。");
                } else if (player.getMakingSkillLevel(92020000) > 0) {
                        npc.say("你已经学些过#e装备制作#n，难道还想学？");
                } else if (!player.isQuestCompleted(3199)) {
                        npc.say("你对装备制作感兴趣吗？想学的话，必须先去见见#b希梅尔#k～在村子入口处就能见到希梅尔了。");
                } else if (getMakingSkillSize() > 0) {
                        npc.say("嗯，你好像已经学习了其他的制作技术。真想学习的话，就必须先放弃当前的制作技术。");
                } else if (player.getMakingSkillLevel(92010000) <= 0) {
                        npc.say("没学习采矿的人，是无法学习装备制作的。没有材料的话，就不可能坚持下去……你先到旁边的采矿大师#b诺布#k那里去学习采矿吧。");
                } else {
                        let ret = npc.askYesNo("你真的要学习#b装备制作#k吗？\r\n学费是#b5000金币#k。\r\n#b");
                        if (ret == 1) {
                                if (player.hasMesos(5000)) {
                                        player.loseMesos(5000);
                                        player.setSkillLevel(92020000, 0x1000000, 12, false);
                                        player.soundEffect("profession/levelup");
                                        player.showAvatarOriented("Effect/OnUserEff.img/professions/equip_product_levelup");
                                        npc.say("好！非常好！太棒了！！好了～我已经把装备制作知识全部传授给你了。熟练度满了之后，可以提升装备制作等级。别忘了到时再来找我。");
                                } else {
                                        npc.say("你的钱不够啊。想要学习的话，需要#b5000金币#k才行。这可是规矩。");
                                }
                        } else {
                                npc.say("什么！！！装备制作是非常有用的技术。这都还要考虑？你也太慎重了吧？");
                        }
                }
                break;
        case 2:
                if (player.getMakingSkillLevel(92020000) >= 12) {
                        npc.sayNext("你已经达到最高等级了，不需要在提升了！");
                } else if (player.checkMakingSkillExpFull(92020000)) {
                        let ret = npc.askYesNo("你的熟练度积满了呀，现在是否要提升至下一等级，学习新的内容？");
                        if (ret == 1) {
                                let nLevel = Math.min(12, player.getMakingSkillLevel(92020000) + 1);
                                player.setSkillLevel(92020000, nLevel << 24, 12, false);
                                player.soundEffect("profession/levelup");
                                player.showAvatarOriented("Effect/OnUserEff.img/professions/equip_product_levelup");
                                npc.sayNext("好了，我已经帮你提升了装备制作等级。熟练度积满后可再提升至下一等级，就可以学习新的内容。等你积满熟练度后，再来找我吧。");
                        } else {
                                npc.sayNext("看来你很慎重。好的，你先仔细考虑一下，然后再来找我。");
                        }
                } else {
                        npc.sayNext("哎呀！你可真贪心。熟练度还不够。你再去练习练习吧。");
                }
                break;
        case 3:
                let ret = npc.askYesNo("你想放弃装备制作？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？");
                if (ret == 1) {
                        player.setSkillLevel(92020000, -1, -1, false);
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