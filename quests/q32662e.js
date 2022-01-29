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


npc.sayNext("#h0#,欢迎你。我是管理这里的#b图书馆馆长泰列斯#k。你不会因为我是猴子就吓到了吧。");
npc.sayNext("你问这里是什么地方吗？这里是 #b次元图书馆#k。\r\n\r\n这里是汇聚世上所有知识和记录的地方。虽然很多人都不知道这个地方，但即便没有专人来书写记录，冒险岛的故事也会自动汇集到这里来，形成书籍。");
npc.sayNext("呵呵呵，你觉得我在说谎吗？甚至连你也可以成为#b实际存在过的人物#k，进到故事里去呢。要不要亲自去确认一下啊？");
npc.sayNext("正好我这里有#b云雀丽塔#k交给我的四本书。书里写的就是冒险岛世界实际发生过的事件。");
let ret = npc.askAccept("如果你能通关四本书中的全部故事，不仅会变得很强，我还会送你一件#b你一定会喜欢的礼物#k。怎么样，要挑战试试吗？\r\n\r\n#b - #v3015614##z3015614#\r\n\r\n - #v1122263##z1122263# (附带额外属性可强化哦~！)");
if (ret == 1) {
        npc.completeQuest();
}