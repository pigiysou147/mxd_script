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

npc.sayNextNoEsc("麦加说的那个人就是你？#h0#……嗯，据她说，你是个很有天赋的小孩……喂，你想成为飞侠吗？你知道飞侠吗？");
npc.sayNextNoEsc("有些人觉得飞侠是些偷偷摸摸的小偷，但其实不是这样的。冒险岛世界的飞侠是在黑暗中用锋利的短刀和飞镖战斗的人。可能有一点不是那么堂堂正正，但是这就是飞侠的本质，没有必要否定。");
npc.sayNextNoEsc("飞侠是可以用快速强力技能攻击敌人的职业。虽然你体力较弱，但因为行动快速，所以可以轻松地躲避怪物。因为运气很强，所以擅长爆击。");

let sel = npc.askAcceptNoEsc("怎么样？你想一起踏上飞侠之路吗？如果你决定选择飞侠之路，我就使用转职官的特权，邀请你到#b废都的废都酒吧#k去……那是个隐秘的地方，你应该感到荣幸。#r但是如果更喜欢其他职业的话，你可以拒绝。我会为你推荐飞侠之外的其他道路#k");
if (sel == 1) {
    npc.startQuest();
    player.changeMap(103000003, 0);
} else {
    let njob = npc.askMenu("你不喜欢飞侠之路吗？不喜欢的话，我也不想勉强。那你想选择什么职业呢？\r\n#b#L1#战士#l \r\n#b#L2#魔法师#l \r\n#b#L3#弓箭手#l \r\n#b#L5#海盗#l");
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
        case 5:
            npc.sayNextNoEsc("你想走海盗之路吗？虽然很遗憾，但我尊重你的选择。#b凯琳#k会联系你的。你可以通过#b左侧的任务提示#k查看。");
            break;
    }
}