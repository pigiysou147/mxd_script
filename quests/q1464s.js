/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* global npc, player, map */

npc.sayNext("如果说冒险岛世界是井然有序的，那绯红就是混乱、充满未知的。我们从很久前开始就充当着这个世界的影子。", false);
npc.sayNext("其实，我并不想帮助冒险岛世界。不过，如果冒险岛世界消失，我们的世界也会受到威胁。就算是为我们自己考虑，我们也要尽全力阻止黑魔法师。", false);
npc.sayNextS("那你愿意帮忙喽？");
npc.sayNext("嗯？我好像没那么说吧？", false);
npc.sayNextS("……");
npc.sayNext("……", false);
npc.sayNextS("……");
npc.askMenu("我知道了。你不要露出这种表情。我帮你不就行了嘛。不过，在此之前，我想进行简单的测试！\r\n\r\n#b#L0#测试？", false);
npc.askMenu("嗯，是非常简单的运气测试。我会把你赶走，你只要重新回来就行了。不过，入口将会被转移到其他地方，而不是原来的地方。\r\n\r\n#b#L0#等等，怎么能这样...", false);
npc.sayNext("我不会等你太久的，让我看看你的运气吧。\r\n\r\n#b(5分钟内，在世界树上端找到传送口吧！)#k", false);
npc.startQuest();
player.updateQuestRecordEx(1464, "find=0;r=1");
player.changeMap(105300000, 0);