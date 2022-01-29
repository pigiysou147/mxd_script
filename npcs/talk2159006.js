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

let data = player.getQuestRecordEx(23007, "vel00");
if ("1".equals(data)) {
        npc.sayNextNoEsc("我是…　#r格里梅尔博士#k的实验者。我叫作#b贝比蒂#k… 虽然不知道你们怎么跑进来的，但是请快点出去！要是被博士发现的话，就完蛋了！");
        npc.sayNextSNoEsc("实验者？格里梅尔？到底在说什么啊？这里到底是什么地方？你为什么会在里面？", false);
        npc.sayNextNoEsc("你不知道格里梅尔？ 格里梅尔博士… 黑色之翼的疯狂科学家！这里是格里梅尔的实验室，格里梅尔在这里进行人体实验…");
        npc.sayNextSNoEsc("人体…实验？", false);
        npc.sayNextNoEsc("对，人体实验，你如果被抓到，说不定也会变成实验品！快走吧！");
        npc.sayNextSNoEsc("什么？走、逃走…？但是你…！", false);

        npc.sayNextNoEsc("…噓！小声一点！格里梅尔博士來了。");
        player.updateQuestRecordEx(23007, "vel00", "2");
        player.changeMap(931000011, 0);
}
