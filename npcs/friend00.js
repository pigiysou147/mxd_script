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
 * Mr. Goldstein: Buddy List Admin (NPC 1002003)
 * Victoria Road: Lith Harbor (Map 104000000)
 *
 * Increases the maximum amount of buddies a player could have.
 *
 * @author Jackson (content from Vana r3171)
 */

npc.sayNext("我希望我能挣到和昨天一样多的钱…好吧，你好！你不想扩展你的好友列表吗？你看起来像有很多朋友的人…你觉得呢？有了一些钱，我就能为你实现梦想。但是请记住，它一次只适用于一角色，因此它不会影响您帐户上的任何其他角色。你想这样做吗？");
selection = npc.askYesNo("很好！其实没那么贵。#b50000#k金币，我会在你的好友列表中再增加5个。一旦你增加了，它将永远在你的好友名单上。所以如果你是其中一个需要更多空间的人，那么你也可以这样做。你怎么认为？你会花5万金币吗？");
if (selection == 1) {
        if (player.hasMesos(50000) && player.getBuddyCapacity() < 50) {
                player.loseMesos(50000);
                player.gainBuddySlots(5);
                npc.say("好吧！你的好友列表现在有5个额外的容量。你自己去看看。如果你还需要更多的空间在你的好友名单上，你知道可以找谁的。当然，这不会是免费的…好吧，这么久了…");
        } else {
                npc.sayNext("嘿。。。你确定你有B50000金币吗？如果是这样，那么检查一下你的好友列表容量是否到最大值。即使你付钱了，你的好友列表中最多的是#b50 #k。.");
        }
} else {
        npc.sayNext("我懂了。。。我觉得你没有我想的那么多朋友。如果没有，你现在就没有5万金币？不管怎样，如果你改变主意，回来我们谈生意。当然，一旦你得到足够的金币…呵呵…");
}
