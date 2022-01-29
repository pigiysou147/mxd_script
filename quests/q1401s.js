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

npc.sayNextNoEsc("你就是麦加推荐的那个人啊。听说你想转职成战士……对吗？我就是战士转职官武术教练。我可以为想要以战士身份冒险的人提供帮助。");
npc.sayNextNoEsc("你对战士了解多少呢？战士是以强大的力量和体力为基础，挥舞近战武器打倒敌人的职业。在最接近敌人的地方战斗的无畏的人。是不是很有魅力？");

let sel = npc.askAcceptNoEsc("你好像充分拥有了资格。像你这样的人想成为战士，我随时表示欢迎。你想成为战士吗？接受的话，我就使用转职官的特权，邀请你到#b勇士部落的战士圣殿#k去。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以引导你走其他职业的道路#k。");
if (sel == 1) {
    npc.startQuest();
    player.changeMap(102000003, 0);
} else {
    let njob = npc.askMenu("你不想走战士之路吗？不愿意的话，我就不能勉强。那你就去选择其他道路吧。除了战士之外，还有四条道路可供选择。\r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l");
    player.startQuest(1406, 0, njob);
    switch (njob) {
        case 2:
            npc.sayNextNoEsc("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。#b汉斯#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
        case 3:
            npc.sayNextNoEsc("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。#b赫丽娜#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
        case 4:
            npc.sayNextNoEsc("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。#b达克鲁#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
        case 5:
            npc.sayNextNoEsc("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。#b凯琳#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
    }
}