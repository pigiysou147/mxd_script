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


switch (map.getId()) {
        case 807100110:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.setSkillLevel(40020000, 1, 1, false);
                player.setSkillLevel(40020001, 1, 1, false);
                player.setSkillLevel(40020109, 1, 1, false);
                player.showScreenDelayedEffect("JPKanna/text0", 0);
                //npc.setDelay(7000);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100100);
                break;
        case 807100100:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                //player.setForcedInput(2);
                //npc.setDelay(2500);
                //player.setForcedInput(0);
                npc.sayNextENoEsc("#face0#才刚一走进这里，立刻就能够感受到这里有多么阴森。", 9130010);
                npc.sayNextENoEsc("这里的气氛异常诡谲，真叫人起了一身的鸡皮疙瘩。", true);
                npc.sayNextENoEsc("而且，周围的声音如此嘈杂……看来我们并不是唯一的入侵者啊。", true);
                npc.sayNextENoEsc("#face0#敌人就在本能寺内……看来除了我们之外，还有人也是这么想的。", 9130010);
                npc.sayNextENoEsc("你知不知道是怎么回事？这里到底发生了什么啊？", true);
                npc.sayNextENoEsc("#face0#我这就去调查这里到底出了什么事。 神那你还是尽快前去阻止仪式的进行吧。", 9130010);
                npc.sayNextENoEsc("#face0#负责攻占北侧佛堂的相马和次藤已经出发了。正如谦信大人所言，就请你直接前去阻止仪式，不要再分心去管周围的情况了。", 9130010);
                npc.sayNextENoEsc("#face0#你的任务就是破坏设置在西侧佛堂的结界，削弱正殿的气势。然后前往破坏掉正殿地下的祭坛，这样才能正式阻止仪式的进行。千万不要忘了这一点！", 9130010);
                npc.sayNextENoEsc("我明白了。", true);
                npc.sayNextENoEsc("#face0#动作一定要快啊，神那！", 9130010);
                player.setInGameDirectionMode(false, true, false, false);
                player.startNavigation(807100100, 0, "out00", 0);
                break;
        case 807100111:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.showScreenDelayedEffect("JPKanna/text1", 0);
                //npc.setDelay(7000);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100101);
                break;
        case 807100101:
                //player.setStandAloneMode(true);
                break;
        case 807100112:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.showScreenDelayedEffect("JPKanna/text2", 0);
                //npc.setDelay(7000);
                player.setInGameDirectionMode(false, true, false, false);
                npc.makeEvent("change_job", false, [player, 807100102]);
                break;
        case 807100102:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                map.spawnMob(9421572, -450, 32);
                map.spawnMob(9421572, -360, 32);
                map.spawnMob(9421572, -270, 32);
                map.spawnMob(9421572, -180, 32);
                map.spawnMob(9421572, -90, 32);
                map.spawnMob(9421572, 0, 32);
                map.spawnMob(9421572, 90, 32);
                map.spawnMob(9421572, 180, 32);
                map.spawnMob(9421572, 270, 32);
                map.spawnMob(9421572, 360, 32);
                map.spawnMob(9421572, 450, 32);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/1", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/2", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/3", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.scriptProgressMessage("打败所有的敌人！");
                player.showScreenDelayedEffect("aran/tutorialGuide2", 0);

                player.setSkillLevel(40021183, 1, 1, false);
                player.setSkillLevel(40021184, 1, 1, false);
                player.setSkillLevel(40021185, 1, 1, false);
                player.setSkillLevel(40021186, 1, 1, false);
                player.setInGameDirectionMode(false, true, false, false);
                break;

        case 807100103:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                //player.setForcedInput(2);
                //npc.setDelay(1500);
                //player.setForcedInput(6);
                //npc.setDelay(1000);
                //player.setForcedInput(0);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/4", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/5", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.setForcedAction(1817, 0);
                player.showPlayerEffectPlay("Skill/4212.img/skill/42121005/tile/begin", 0, 0, 0, false, 0, false, 0);
                //npc.setDelay(1400);
                player.showPlayerEffectPlay("Skill/4212.img/skill/42121005/tile/0", 0, 0, 0, false, 0, false, 0);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/6", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(1440);
                player.showPlayerEffectPlay("Skill/4212.img/skill/42121005/tile/end", 0, 0, 0, false, 0, false, 0);
                //npc.setDelay(960);
                //player.setForcedInput(2);
                //npc.setDelay(1000);
                //player.setForcedInput(0);
                //npc.setDelay(500);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100104);
                break;
        case 807100104:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.setNpcSpecialAction(9131004, "back", 0, false);

                //player.setForcedInput(2);
                //npc.setDelay(3500);
                //player.setForcedInput(3);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/7", 0, 0, -100, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/8", 0, 0, -100, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/9", 0, 250, -150, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/10", 0, 0, -100, false, 0, false, 0);
                //npc.setDelay(2000);

                player.setForcedAction(1819, 0);
                player.showPlayerEffectPlay("Skill/4200.img/skill/42001000/effect", 0, 0, 0, false, 0, false, 0);
                //npc.setDelay(270);
                player.setForcedAction(1820, 0);
                player.showPlayerEffectPlay("Skill/4200.img/skill/42001005/effect", 0, 0, 0, false, 0, false, 0);
                //npc.setDelay(330);
                player.showPlayerEffectPlay("Skill/4212.img/skill/42121008/effect", 0, 0, 0, false, 0, false, 0);
                //npc.setDelay(200);

                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100105, 0);
                break;
        case 807100105:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                let selection = npc.playMovie("JPKanna.avi", true);
                if (selection == 0) {
                        player.scriptProgressMessage("播放动画失败。");
                }
                player.setInGameDirectionMode(false, true, false, false);
                for (let i = 0; player.getLevel() < 10; i++) {
                        player.gainExp(500);
                }
                player.updateQuestRecordEx(11620, "0");
                player.setSkillLevel(40021227, 1, 1, false);
                player.startQuest(57471, 0);
                player.completeQuest(57471, 0);
                player.gainEquipInventorySlots(4);
                player.gainUseInventorySlots(4);
                player.gainSetupInventorySlots(4);
                player.gainEtcInventorySlots(4);
                player.gainCashInventorySlots(4);
                player.setJob(4200);
                player.resetStats(4, 4, 4, 4);
                player.gainSp(5);
                player.changeMap(807040000, 0);
                break;
}



