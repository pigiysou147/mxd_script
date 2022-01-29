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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

endScript();

function endScript() {
        npc.sayNext("我是闪电骑士团长，叫做胡克。听过我的名字吗？这个身体非常灵活，这一点你是知道的吧？");
        npc.sayNextS("嗯？不，我还…", false);
        npc.sayNext("不要不好意思了。见到平常向往的对象，会不之所错是当然的。你对奇袭者将感到兴趣吗？对了，你说你叫什么呢？");
        npc.sayNext("胡克，新骑士团候补生名字是#h0#。现在打过招呼了，走吧。", 1102006);
        npc.sayNext("那个我日后会慢慢教育的。那么请慢走吧。");
        npc.sayNext("刚刚说到哪了呢？新进骑士团员教育结束后，会收到任命成为修炼骑士，到时候也能够决定自己未来的前途。魂骑士，炎术士，风灵使者，夜行者，奇袭者…选择一条适合你自己的道路。", 1102006);
        npc.sayNext("骑士团的任务就是守护女皇，打败黑魔法师维持冒险岛世界的和平。除此之外，还有跟身为黑魔法师追踪者的黑色之翼打交道的任务、情报收集…等，很多的事情要做呢。", 1102006);
        npc.sayNext("今天的课程就到这里。下一堂课是…你去问问奇姆吧。", 1102006);
        npc.completeQuest();
}
