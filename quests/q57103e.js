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

npc.sayNextE("我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。", true);
npc.sayNextE("#face1#姐崎剑斗……真是久仰了。能见到鼎鼎有名的晓月流剑圣，实在是我的光荣。", 9130024);
npc.sayNextE("阁下太客气了，能见到人称忠肝义胆的幸盛，才真是我的荣幸呢。如果知道你也参加了本能寺攻略战，我真应该早点过来和你打声招呼了。实在是太遗憾了。", true);
npc.sayNextE("#face0#虽然还有很多话想说，但我现在还是先简单说明一下本能寺攻略战时候发生的问题，以及现在的情况吧。等你做好心理准备之后，再来和我进行对话吧。", 9130024);
npc.sayNextE("#face0#我本以为你会为弄不清现在究竟是什么状况而感到混乱……还是说，你已经察觉到了呢？现在我们所处的地方和我们原本所在的日本并不相同。虽说看起来有些相似，但其实是完全不一样的两个地方。", 9130024);
npc.sayNextE("看起来有些相似，但其实是完全不一样的两个地方？", true);
npc.sayNextE("#face0#没错。说得再清楚一点吧，这里并不是日本。而是我们所不知道的完全陌生的世界。虽然不清楚究竟发生了什么事，但是在我们进行本能寺攻略战的途中，突然有一道耀眼的光柱从本堂方向射出。而后，我们就来到了这个完全未知的世界。而且，我们每个人所到达的时间点和位置都不一样。", 9130024);
npc.sayNextE("未知的世界……？真的会有这样的事情发生吗？", true);
let ret = npc.askYesNoE("#face0#这个嘛，其实具体什么情况我也不太清楚。只不过，先我们一步到达这里的人聚在一起讨论的时候，得出了这样一个结果。先行到达的他们已经在这座丘陵之上建起了新的阵地。我们先一起到新的阵地去吧。", 9130024);
if (ret == 1) {
        npc.completeQuest();
}

