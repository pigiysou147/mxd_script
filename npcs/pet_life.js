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
 * Mar the Fairy: Pet Master (NPC 1032102)
 * Hidden Street: Marr's Forest (Map 101000200)
 *
 * Revives pets with the Water of Life in "Mar" the Fairy and the Water of Life
 * (Quest 2049)
 *
 * @author Jackson
 */


let selection = npc.askMenu("我可以帮助你复活宠物，进化宠物，学习群宠技能，那么你需要什么帮助呢？\r\n#b"
        + "#L0#复活我的宠物.#l\r\n"
        + "#L1#进化宠物.#l\r\n"
        + "#L2#学习群宠技能.#l\r\n");
switch (selection) {
        case 0:
                if (!player.isQuestStarted(2049) || player.isQuestCompleted(2049)) {
                        npc.sayNext("很高兴见到你，我是 #p1032102#，我在#m101000000#这里学习各种类型的咒语. 我对生活的魔力特别着迷。没有尽头的神秘，被称为生命的神秘…我正在努力探索如何创造生命。");
                        selection = npc.askYesNo("看起来你已经找到了#p1012005#. #p1012005#是一个和我一起学习生命魔法的人。我听说他在娃娃上使用了一种不完全的生命魔法来创造一种活生生的动物... 你的娃娃和那个#p1012005#创造的一样, 一个#b宠物#k?");
                        if (selection == 0) {
                                npc.say("但看起来肯定是由#p1012005#创造的. 嗯.. 好吧，我一年前见过#p1012005#，我敢肯定，他在玩偶的生命魔法方面是失败的。那么……");
                        } else {
                                npc.sayNext("我理解。娃娃变成了一只活生生的动物…但和#p1012005#给宠物的生命一样, #b#t5180000##k干涸后又变成了娃娃…显然是不动的，因为它现在是一个娃娃…哼哼…这就是所谓的现实生活，不是你可以用魔法创造出来的吗？...?");
                                npc.sayNext("你想把这个洋娃娃带到它曾经的样子吗？你想回到你的宠物服从的时代吗？只有你和它的同伴，对吗？当然，这是完全可能的，我曾经和#p1012005#一起学习过魔法... 也许我能让它再次复活。..");
                                selection = npc.askYesNo("如果我得到一个#b#t5180000##k和一个 #b#t4031034##k,也许我可以把你的宠物复活。你怎么认为？你想带东西来吗？收集物品，我会尽力让你的宠物复活。");
                                if (selection == 0) {
                                        npc.say("你想让宠物保持原样吗？这是一个娃娃，但…用它也很难抹去你的记忆。如果你改变主意，找到我，好吗？");
                                } else {
                                        player.startQuest(2049, npc.getNpcId());
                                        npc.say("很好。我会再说一遍，但我真正需要的是一个#b#t5180000##k和一个#b#t4031034##k.得到它们，我就能把宠物复活。哦，还有#b#t4031034##k更难获得。.. 你可以找#b射手村#k的#b#p1012006##k? 也许这个人可以给一两个提示…...");
                                }
                        }
                } else {
                        if (player.hasItem(4031034, 1) && player.hasItem(5180000, 1)) {
                                selection = npc.askYesNo("你带来了#b#t5180000##k和#b#t4031034##k... 有了它们，我可以用我的魔力把你的洪武复活。你怎么认为？你想用这些东西唤醒你的宠物吗？?");
                                if (selection == 0) {
                                        npc.say("我理解。。。你还没有完全准备好，对吗？你不想离开这个娃娃，对吧？如果你改变意见请回来。");
                                } else {
                                        selection = npc.askPet("那么，你想复活哪只宠物？选择你最想要的宠物.");
                                        player.revivePet(selection);
                                        player.loseItem(4031034, 1);
                                        player.loseItem(5180000, 1);
                                        player.completeQuest(2049, npc.getNpcId());
                                        npc.say("你的娃娃现在又变成宠物了。然而，我的魔法并不完美。因此，我不能保证永生…请在#t5180000#干枯前好好照顾它. 就这样，再见.");
                                }
                        } else {
                                npc.say("还没有找到#b#t5180000##k和#b#t4031034##k,好吧? 去找#b射手村#k的#b#p1012006##k,那个人应该对卷轴有所了解。请快把这些东西找来吧。");
                        }
                }
                break;
        case 1:
                //TODO: GMS-like lines
                break;
        case 2:
                let leaderSkill = getSkillByJob(player.getJob());
                let sel = npc.askYesNo("学习群宠技能必须付出一定的金币哟!大约需要:#r20000000金币#k,你是否想学习？");
                if (sel == 1) {
                        if (player.getSkillLevel(leaderSkill) > 0) {
                                npc.sayNext("抱歉，你已经学习了群宠技能了，不需要再次学习!");
                        } else if (!player.hasMesos(20000000)) {
                                npc.sayNext("您似乎没有那么多的金币哟！在去努力攒钱吧！");
                        } else {
                                player.loseMesos(20000000);
                                player.setSkillLevel(leaderSkill, 1, 1, false);
                                npc.sayNext("恭喜,你学习了群宠技能!");
                        }
                } else {
                        npc.sayNext("要学习了群宠技能记得再来找我哦!");
                }
                break;
}


function getSkillByJob(jobID) {
        switch (jobID) {
                case 1000:
                        return 10000018;
                case 2001:
                        return 20011024;
                case 2000:
                        return 20000024;
                case 4001:
                        return 40011024;
                case 4002:
                        return 40021024;
                default:
                        return 8;
        }
}