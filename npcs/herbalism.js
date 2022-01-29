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

let selStr = "我是采药大师 #b斯塔切#k，找我有事吗？\r\n\r\n";
if (player.getMakingSkillLevel(92000000) > 0) {
        selStr += "#L2##b提升#e采药#n等级。#l\r\n#L4##b交换#t2028066#。#k#l";//#L3#采药初始化。#k#l\r\n
} else {
        selStr += "#L0##b听取有关#e采药#n的说明。#l\r\n#L1#学习#e采药#n。#k#l";
}
let sel = npc.askMenu(selStr);
switch (sel) {
        case 0:
                npc.sayNext("采药是利用铲子之类的工具，采集地图上的药草的技能。把采集到的药草装在#p9031007#出售的油瓶中提炼，可以获得装备、饰品、炼金术所需的材料。");
                break;
        case 1:
                if (player.getLevel() < 30) {
                        npc.say("哎呀，你好像还不够强，还不能学习专业技术。#b至少必须达到30级2转以上，龙神必须3转以上，暗影双刀必须2转+以上#k，才能学习专业技术。请你继续努力，等达到条件之后再来找我。");
                } else if (player.getMakingSkillLevel(92000000) > 0) {
                        npc.say("你已经学些过#e采药#n，难道还想学？");
                } else if (!player.isQuestCompleted(3199)) {
                        npc.say("你对采药感兴趣吗？想学的话，必须先去见见#b希梅尔#k～在村子入口处就能见到希梅尔了。");
                } else if (getMakingSkillSize() > 2) {
                        npc.say("嗯，你好像已经学习了3种专业技术。真想学习的话，就必须先放弃一种技术。");
                } else {
                        let ret = npc.askYesNo("学习#b采药#k。确定要进行学习吗？需要#b5000金币#k的费用。这些钱你应该有的吧？#b");
                        if (ret == 1) {
                                if (player.hasMesos(5000)) {
                                        player.loseMesos(5000);
                                        player.setSkillLevel(92000000, 0x1000000, 10, false);
                                        player.soundEffect("profession/levelup");
                                        player.showAvatarOriented("Effect/OnUserEff.img/professions/herbalism_levelup");
                                        npc.say("好了，我已经把采药的基本知识传授给你了。熟练度积满后提升至下一等级，就可以学习新的内容。等你积满熟练度后，再来找我吧。");
                                } else {
                                        npc.say("你的钱不够啊。想要学习的话，需要#b5000金币#k才行。这可是规矩。");
                                }
                        } else {
                                npc.say("你还挺谨慎啊。好吧，想清楚后再来找我吧。");
                        }
                }
                break;
        case 2:
                if (player.checkMakingSkillExpFull(92000000)) {
                        let ret = npc.askYesNo("你的熟练度积满了呀，现在是否要提升至下一等级，学习新的内容？");
                        if (ret == 1) {
                                let nLevel = Math.min(10, player.getMakingSkillLevel(92000000) + 1);
                                player.setSkillLevel(92000000, nLevel << 24, 10, false);
                                player.soundEffect("profession/levelup");
                                player.showAvatarOriented("Effect/OnUserEff.img/professions/herbalism_levelup");
                                npc.sayNext("好了，我已经帮你提升了采药等级。熟练度积满后可再提升至下一等级，就可以学习新的内容。等你积满熟练度后，再来找我吧。");
                        } else {
                                npc.sayNext("看来你很慎重。好的，你先仔细考虑一下，然后再来找我。");
                        }
                } else {
                        npc.sayNext("哎呀！你可真贪心。熟练度还不够。你再去练习练习吧。");
                }
                break;
        case 3:
                if (player.getMakingSkillLevel(92040000) > 0) {
                        npc.sayNext("你学习了炼金术，现在无法初始化。真想初始化的话，就得先对炼金术进行初始化。");
                } else {
                        let ret = npc.askYesNo("你想放弃#e采药#n？是厌倦了吗？之前积累的等级和熟练度……付出的努力和金钱……都将会变成泡影……你真的要初始化吗？");
                        if (ret == 1) {
                                player.setSkillLevel(92000000, -1, -1, false);
                                if (player.isQuestStarted(3195)) {
                                        player.forfeitQuest(3195);
                                }
                                if (player.isQuestStarted(3196)) {
                                        player.forfeitQuest(3196);
                                }
                                npc.sayNext("采药技术已经初始化。如果想重新学习，请再来找我。");
                        } else {
                                npc.sayNext("看来你很慎重。好的，你先仔细考虑一下，然后再来找我。");
                        }
                }
                break;
        case 4:
                if (!player.hasItem(4022023, 100)) {
                        npc.say("#b#t4022023#100个#k可以交换#i2028066:##b#t2028066#1个#k。请你再去搜集一些#t4022023#。");
                } else if (!player.canGainItem(2028066, 1)) {
                        npc.say("背包空间不足。");
                } else {
                        player.loseItem(4022023, 100);
                        player.gainItem(2028066, 1);
                        npc.say("兑换成功.");
                }
                break;
}

function getMakingSkillSize() {
        let ret = 0;
        for (let i = 9200; i <= 9204; i++) {
                if (player.getMakingSkillLevel(i * 10000) > 0) {
                        ret++;
                }
        }
        return ret;
} 