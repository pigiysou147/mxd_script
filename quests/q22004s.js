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
npc.sayNext("最近农场上的#o1210100#有点奇怪。经常无缘无故地发脾气，做出一些烦人的事情。我对此很担心，所以今天很早就出来了。果然有一只#o1210100#钻过了篱笆，逃到外面去了。");
let ret = npc.askYesNo("在找到#o1210100#之前，必须先把坏了的篱笆修好。还好坏得不是太严重，只要有几个#t4032498#应该就能修好了。小不点，要是你能帮我搜集#b3个#t4032498##k就好了……");
if (ret == 1) {
        npc.startQuest();
        npc.sayNext("哦，真是谢谢你。#b#t4032498##k可以从周围的#r#o0130100##k身上搜集到。它们虽然不是很强，但不小心的话，可能会遇到危险。你一定要好好使用技能道具。");
        let string = ["UI/tutorial/evan/6/0"];
        npc.sayImage(string);
} else {
        npc.sayNext("嗯……#p1013101#的话，应该就能帮我了。");
}
