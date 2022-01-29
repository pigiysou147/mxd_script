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

//player.setStandAloneMode(true);
npc.sayNextNoEsc("不可以再靠近了…！", 2159006);
npc.sayNextNoEsc("怎么会来这里？这里是禁止出入的地方。", 2159006);
npc.sayNextSNoEsc("你是谁？！", false);
npc.sayNextNoEsc("在…在这里，往上看。", 2159006);
player.updateQuestRecordEx(23007, "vel00", "1");
player.showReservedEffect("Effect/Direction4.img/Resistance/ClickVel");
