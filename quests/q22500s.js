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
npc.sayNext("我终于出来了！啊，这一定是我呼吸的空气。而且，那一定是太阳！而那，一棵树！而那是一株植物！而那，一朵花！哈哈哈！真不可思议！这比我想象的世界要好得多，而我却被困在蛋里。你...你是我的主人吗？嗯，我觉得你是不同的。");
npc.sayNextS("#b哇……他会说话!", false);
npc.sayNext("我的主人很奇怪。我想我现在什么也做不了，因为契约已经达成了。唉，好吧，很高兴见到你。我们会看到对方很多。");
npc.sayNextS("#b嗯？什么意思？我们会经常见面吗？什么契约?", false);
npc.sayNext("你什么意思，我的意思是什么？你把我从蛋里吵醒了。你是我的主人！所以，当然，你有责任照顾我，训练我，帮助我成为一条强壮的龙。很明显！!");
npc.sayNextS("#b什么？龙？你是一条龙？我不明白…为什么我是你的主人？你在说什么呢？", false);
npc.sayNext("你在说什么呢？你的精神与我的灵魂达成协议！我们都是一样的人。我真的需要解释吗？所以，你已经成为我的主人。我们受契约约束。你不能改变你的想法…契约不能被打破。");
npc.sayNextS("#b等待，等待，等待。让我把事情搞清楚。你是说我没有选择，而是帮助你吗？", false);
npc.sayNext("喂喂喂！嘿…！你脸上是什么表情？你……难道不想做我的主人吗？");
npc.sayNextS("#b不...不是那样的…我只是不知道我是否准备好养宠物了。", false);
npc.sayNext("一个宠物？？？你是不是叫我宠物？怎么敢…为什么，我是一条龙！是这世界上最强大！");
npc.sayNextS("#b...#b(你怀疑的盯着他。他看起来像只蜥蜴。一个弱小的小家伙。)#k", false);
let ret = npc.askYesNo("你为什么那样看着我？看！看看我能用我的力量做什么。准备好了吗？");
if (ret == 1) {
        npc.startQuest();
        npc.sayNext("让我们来消灭#r#o1210100##k! 现在就开始! 我会让你知道龙消灭#o1210100#会有多快!!");
        npc.sayNext("等一下! 你是否分配了AP? 我受#bINT 和 LUK#k 影响!如果你真的想见识我的力量, 分配好AP并#b装备上魔法武器#k!");
        let string = ["UI/tutorial/evan/11/0"];
        npc.sayImage(string);
} else {
        npc.sayNext("你不相信我？你这真让我发狂！");
}