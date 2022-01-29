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
npc.sayNextENoEsc("#face0#(即使记忆消失...身体.这双手还是本能的知道战斗的感觉，我应该曾经是经常面临这种状况的人)", 3001500);
npc.sayNextENoEsc("#face0#(不，得先做好战斗的姿态，现在我的状态是如何呢？可以运用的东西...)", 3001500);
player.resetStats(4, 4, 4, 4);
player.setJob(15500);
player.gainSp(5);
player.gainEquipInventorySlots(4);
player.gainUseInventorySlots(4);
player.gainSetupInventorySlots(4);
player.gainEtcInventorySlots(4);
player.gainCashInventorySlots(4);
npc.startQuest();
npc.completeQuest();

