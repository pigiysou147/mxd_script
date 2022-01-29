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

npc.sayNextNoEsc("你好，#h0#哦，你就是麦加说的那个人啊。你好？听说你对魔法师之路感兴趣。那么，我魔法师转职官汉斯可以帮助你。");
npc.sayNextNoEsc("相信你应该已经对魔法师有所了解了。那是以较高的智力为基础，使用魔法的职业。虽然远距离和近距离战斗都很出色，但体力稍微有点弱……但是魔法师创造出了很多魔法来克服这一缺点，不要太担心。");

let sel = npc.askAcceptNoEsc("你看上去好像充分具备成为魔法师的素质……你想成为魔法师吗？接受的话，我就使用转职官的特权，邀请你到#b魔法密林的魔法图书馆#k去。和我见个面，然后帮你转职。#r但是就算拒绝，也不是没有别的路可走。拒绝的话，我可以为你介绍魔法师以外的职业。#k");
if (sel == 1) {
    npc.startQuest();
    player.changeMap(101000003, 0);
} else {
    let njob = npc.askMenu("你不喜欢魔法师之路吗？很遗憾。但是我尊重你的选择。那你想走哪条道路呢？\r\n#b#L1#战士#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飞侠#l \r\n#b#L5#海盗#l");
    player.startQuest(1406, 0, njob);
    switch (njob) {
        case 1:
            npc.sayNextNoEsc("你想选择战士吗？虽然很遗憾，但是没办法。武术教练会联系你的。你可以留意#b左侧的任务提示#k。");
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