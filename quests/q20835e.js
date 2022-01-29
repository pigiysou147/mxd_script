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
        npc.sayNext("不用太在意那南哈特的話。#h0#，在受命担任修炼骑士之前，不只是和了不起的胡可，还有皇家骑士团长们见面的感觉如何啊？要不要給你一点自我介绍的时间啊？#h0#，自我介绍吧~！");
        npc.sayNextS("你好，我是#h0#。受女皇之命来到这里。想要成位一名勇敢的骑士，打败黑魔法师，守护冒险岛！");
        npc.sayNext("是个梦想非常坚定的小子啊。希望你能够成为一个了解自己的事并且有能力解决的人。不要惹那些麻烦的事端。我是暗之骑士团长，伊卡尔特。", 1101006);
        npc.sayNext("我是火之骑士团长，奧茲。欢迎你来到圣地。 但你是从哪里来的呢？", 1102109);
        npc.sayNext("奧茲，好奇的事情可真多啊。从你身上感觉到了舒服的风呢。我是风之骑士团长，#p1102110#。祝你好运。", 1102110);
        npc.sayNext("我是光之骑士团长，米哈尔。不要太松懈，要努力进行自我修炼。要有身为骑士团的骄傲。#h0#，迟早会再见面的，打招呼之类的话就到这里…你快进去吧。", 1101003);
        npc.sayNext("知道了，米哈尔。#h0#。那么，因为有事要忙，就不聊了。我们走吧?认真修炼吧。");
        player.gainExp(135);
        npc.completeQuest();
}
