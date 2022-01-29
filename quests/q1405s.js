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

npc.sayNextNoEsc("嗯，麦加说的果然没错，你看上去很有天赋。见到你很高兴。我叫凯琳，是海盗船诺特勒斯号的船长，同时也是海盗们的转职官。听说你对海盗感兴趣，是吗？");
npc.sayNextNoEsc("我们得先谈点个人的事情。为了对抗威胁冒险岛世界的人——黑魔法师，我在不久前组建了海盗团。诺特勒斯号的海盗们现在正在冒险岛世界各地调查黑魔法师的痕迹。");
npc.sayNextNoEsc("如果你成为海盗的话，就必须帮助调查黑魔法师。当然，这不是义务，而是建议。虽然我是海盗们的转职官，但不是海盗们的主人。所以不是命令，只是建议。");
npc.sayNextNoEsc("海盗大致分为使用短枪的人和使用体术的人，各自的技能存在很大的差别。如果说有什么共同点的话，那就是都有华丽的连续技。虽然操作很难，但熟悉了的话，就会变得很强。");

let sel = npc.askAcceptNoEsc("我好像说得太多了……你快决定吧。到底是成为海盗，还是选择其他职业？如果想成为海盗，我就使用转职官的特权，马上邀请你到诺特勒斯号去。#r拒绝的话，我会建议你选择其他职业。请别担心#k。");
if (sel == 1) {
    npc.startQuest();
    player.changeMap(120000101, 0);
} else {
    let njob = npc.askMenu("你想选择海盗以外的其他道路吗？这也不坏。那你想选择什么职业呢？ \r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l");
    player.startQuest(1406, 0, njob);
    switch (njob) {
        case 1:
            npc.sayNextNoEsc("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。");
            break;
        case 2:
            npc.sayNextNoEsc("你想走魔法师之路吗？虽然很遗憾，但我尊重你的选择。#b汉斯#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
        case 3:
            npc.sayNextNoEsc("你想走弓箭手之路吗？虽然很遗憾，但我尊重你的选择。#b赫丽娜#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
        case 4:
            npc.sayNextNoEsc("你想走飞侠之路吗？虽然很遗憾，但我尊重你的选择。#b达克鲁#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
    }
}