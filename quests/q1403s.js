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

npc.sayNextNoEsc("你好，#h0#……我经常听麦加提起你的名字。听说你对弓箭手很感兴趣。我是弓箭手转职官赫丽娜。见到你很高兴……");
npc.sayNextNoEsc("你对弓箭手的了解有多少呢？弓箭手是使用弓或弩，在远距离攻击敌人的职业……虽然移动速度相对较慢，但锐利的箭矢从来不会射偏，每一发都非常具有威胁。");

let sel = npc.askAcceptNoEsc("如果你真的想成为弓箭手，我就用转职官的特权，邀请你到#b射手村的弓箭手培训中心#k来。#r如果你想选择其他职业，可以拒绝。我会帮助你走上其他道路的#k……你想成为弓箭手吗？");
if (sel == 1) {
    npc.startQuest();
    player.changeMap(100000201, 0);
} else {
    let njob = npc.askMenu("你想选择其他职业啊……虽然不无遗憾，但这是你自己的选择……那在弓箭手之外，你想选择哪条道路呢？\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l");
    player.startQuest(1406, 0, njob);
    switch (njob) {
        case 1:
            npc.sayNextNoEsc("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。");
            break;
        case 2:
            npc.sayNextNoEsc("魔法师……你想和拥有惊人魔法力量的人成为同伴吗？汉斯马上会联系你的。你只要看一下#b左侧的任务提示#k就行。");
            break;
        case 4:
            npc.sayNextNoEsc("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。#b达克鲁#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
        case 5:
            npc.sayNextNoEsc("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。#b凯琳#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
    }
}