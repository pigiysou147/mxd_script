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
 * Trainer Bartos: Pet Trainer (NPC 1012006)
 * Victoria Road: Pet-Walking Road (Map 100000202)
 *
 * Starts the pet walking challenge.
 *
 * @author Jackson (content from KiniroMS r227)
 */

function askQuestions() {
        let questions = [
                "出售#t2120000#的#p1012004#来自于哪里?\r\n#b"
                        + "#L0# #m104000000##l\r\n"
                        + "#L1# #m100000000##l\r\n"
                        + "#L2# #m102000000##l\r\n"
                        + "#L3# #m101000000##l\r\n"
                        + "#L4# #m103000000##l\r\n"
                        + "#L5# #m105040300##l",
                "哈哈。。。那只是为了练习。好吧，那么……从这些人中，选择与宠物无关的人。\r\n#b"
                        + "#L0# #p1032102##l\r\n"
                        + "#L1# #p1012005##l\r\n"
                        + "#L2# #p1012101##l",
                "太容易了，对吧？好吧，从这些关于宠物的描述中，选择一个没有意义的！\r\n#b"
                        + "#L0#要命名宠物，需要宠物命名道具来命名。#l\r\n"
                        + "#L1#当你给宠物一个指令，然后它就服从命令，亲密程度有时会上升。#l\r\n"
                        + "#L2#让宠物挨饿，亲密度可能会下降。#l\r\n"
                        + "#L3#宠物可以用它的主人攻击怪物。#k#l",
                "再来两个！！！！好吧，宠物在什么等级以上可以开始命令宠物说话?\r\n"
                        + "#L0##e1. #n#b等级 5#k#l\r\n"
                        + "#L1##e2. #n#b等级 10#k#l\r\n"
                        + "#L2##e3. #n#b等级 15#k#l\r\n"
                        + "#L3##e4. #n#b等级 20#k#l",
                "最后一个! #m100000000#的#p1012004#出售的\r\n"
                        + "#t2120000#. 它能提高多少饱满度？\r\n#b"
                        + "#L0# 10#l\r\n"
                        + "#L1# 20#l\r\n"
                        + "#L2# 30#l\r\n"
                        + "#L3# 40#l"
        ];
        let correct = [1, 2, 3, 1, 2];

        for (let i = 0; i < questions.length; i++) {
                let answer = npc.askMenu("问题" + (i + 1) + "：" + questions[i]);
                if (answer != correct[i]) {
                        if (i == questions.length - 1)
                                npc.sayNext("哦不！！太棒了…这是最后一个问题！！不要放弃！");
                        else
                                npc.sayNext("错了！！你这都不了解…你真的养过宠物吗？这太可怕了！");
                        return false;
                }
        }
        return true;
}

let selection = npc.askMenu("你找我有什么事情?\r\n#b"
        + "#L0#告诉我这里是做什么的#l\r\n"
        + "#L1#妖精玛丽让我来找你...#l");
switch (selection) {
        case 0:
                if (player.hasItem(4031035, 1)) {
                        npc.sayNext("收到那封信，带着你的宠物跳过障碍物，把那封信交给我弟弟的教练弗罗德。把信给他，你的宠物就会有好事情发生。");
                } else {
                        selection = npc.askYesNo("这是一条可以带着宠物散步的路。你可以带着它到处走，或者训练你的宠物穿过障碍物。如果你还没有和你的宠物太近，那可能会出现问题，他也不会像你一样听从你的命令…那么，你觉得呢？想训练你的宠物吗？");
                        if (selection == 0) {
                                npc.sayNext("太忙了，现在不能做？不过，如果你想这么做，回来找我。");
                        } else {
                                if (player.gainItem(4031035, 1))
                                        npc.sayNext("好的，这是信。如果你直接去的话，他不会知道我派你去的，所以和你的宠物一起穿过障碍物，到最上面去，然后和训练师弗罗德谈谈，把信给他。如果你在遇到障碍的时候注意你的宠物，那就不难了。祝你好运！");
                                else //TODO: GMS-like line
                                        npc.say("背包已满，请检查你的背包！");
                        }
                }
                break;
        case 1:
                if (player.isQuestStarted(2049)) {
                        if (player.hasItem(4031034, 0)) {
                                npc.sayNext("你带着一个#b失去魔力的宠物#k? 很遗憾... 啊? #b#p1032102##k让你来找我的? 我看看... #b#t4031034##k, 哈哈... 嘿，嘿~好像我真的有那个…什么，我口袋里是什么？");
                                npc.sayNext("哇哈!! 这是... 这是#b#t4031034##k? 好的... #p1012005# 可能借了我的衣服出去了什么的... 该死的，我告诉他不要光拿别人的衣服穿…好吧，反正这不是我的……你需要这个吗？Hmm.？");
                                selection = npc.askYesNo("我想我不能把它给你！我需要测试一下你对宠物的一般知识。如果宠物的主人甚至不关心它，那它就太差劲了。你需要把这些都做好，否则你就得不到卷轴了。你怎么认为？想要测试吗？");
                                if (selection == 0) {
                                        npc.sayNext("什么。。。你已经放弃了？如果你把宠物养得好，那应该是小菜一碟！当你改变主意的时候找到我。");
                                } else {
                                        npc.sayNext("好吧！5个问题，你需要正确回答所有问题！你准备好了吗？就在这里！！");
                                        if (askQuestions()) {
                                                npc.sayNext("好吧！Hmmm.！你对宠物很了解。很好，既然你知道很多，我很乐意把卷轴给你。我知道这不是我的，但…谁穿着别人的衣服，然后在里面留下了非常重要的东西？不管怎样，给你！");
                                                let needsItem = player.hasItem(4031034, 0);
                                                if (!needsItem || player.canGainItem(4031034, 1)) {
                                                        if (needsItem)
                                                                player.gainItem(4031034, 1);
                                                        npc.sayNext("好吧，那么，你现在要做的就是拿着它和#b#t5180000##k去找\r\n"
                                                                + "#p1032102# ... 哈哈哈，祝你好运!");
                                                } else {
                                                        //TODO: GMS-like line
                                                        npc.say("背包已满，请检查你的背包！");
                                                }
                                        }
                                }
                        } else {
                                npc.sayNext("Hmmm... 你已经有#b#t4031034##k了. 带上卷轴去#m101000000#找#b#p1032102##k吧.");
                        }
                } else {
                        npc.say("嘿，你确定你见过妖精玛丽吗？如果你以前从未见过她，不要骗我，因为这很明显。那甚至不是一个好的谎言！");
                }
                break;
}