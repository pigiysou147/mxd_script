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

startScript();

function startScript() {
    npc.sayNext("你好，我的名字叫麦加。我从来没有见过你哦，看来你是新来的#b冒险家#k吧？");
    npc.sayNextS("#b冒险家？#k", false);
    npc.sayNext("是的，为了在冒险岛世界展开冒险而从其他世界来的人。我们称这种人为“冒险家”。所有冒险家都是从#b冒险岛#k开始冒险的。");
    npc.sayNextS("#b冒险岛？#k", false);
    npc.sayNext("嗯，冒险岛！这里本来只是个无名小岛，但不知从何时起有很多冒险家都纷至沓来。为了他们的到来，这里开始陆陆续续有设施搭建起来，现在这里已经变成了一个不错的村庄。并且由我来为像你一样的新手冒险家提供帮助。");
    npc.sayNext("你是叫……#h0#吧？既然你是第一次来到冒险岛世界，那就多听一下我做的说明吧？通过我的小测试的话，我就会给你对冒险非常有用的礼物哦！");
    npc.sayNext("如果你不想听我的说明，我马上送你去村庄。不过那样一来，你就无法获得礼物。");
    let sel = npc.askMenu("明白了的话，现在开始选择吧。.你要怎么做呢？\r\n#b#L0# 听取麦加的说明，并获得新装备作为礼物。 #l\r\n#L1# 不听说明，立即移动至村庄。#l#k");
    if (sel == 0) {
        npc.sayNext("不错的选择！如果你按照我的说明去做，以后在冒险岛世界生活不会有任何问题的。");
        npc.completeQuest();
        player.gainExp(20);
    } else if (sel == 1) {
        npc.sayNext("好吧，那么我现在立刻送你去彩虹村。");
        npc.sayNext("我已经把礼物放到你背包里，是恢复用药水。你待会儿打开消耗栏确认一下吧。");
        player.gainItem(2000013, 50);
        player.gainItem(2000014, 50);
        npc.sayNext("你到了彩虹村的话，别忘了去见见#b路卡斯#k村长!他会给你一些建议，让你能刚好地去适应新世界。");
        player.changeMap(4000020, 0);
        player.gainExp(273);
        npc.completeQuest();
        player.startQuest(32210, 0);
    }
}
