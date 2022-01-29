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

npc.sayNext("无数个勇者在冒险世界，但只有少数值得和我见面。你已经获得了令人难以置信的力量…但是不把力量与伟大混淆了。");
npc.sayNext("#b4转#k将给予你更大的威力, 但它也带来了新的责任。你必须用你的力量主持正义。这将是你#b领导冒险世界走向未来#k的职责。");
npc.sayNext("也许你无忧无虑的周游世界，只是为了乐趣。现在是时候成为一个英雄，并帮助你周围的人。");
let ret = npc.askAccept("现在，这对你的考验时间。#r天鹰#k和#r火焰龙#k 有权承认真正的英雄。你的任务是击败他们，获得#b#t4031343##k和#b#t4031344##k。");
if (ret == 1) {
    npc.startQuest();
    npc.sayNext("你愿意帮助冒险世界吗?");
} else {
    npc.sayNext("考虑好后再来找我吧。");
}