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
if (player.getJob() == 2001) {
        npc.completeQuest();
        player.scriptProgressMessage("孵化器里的蛋中孵化出了幼龙，获得了可以提升龙的技能的3点SP，幼龙好像想说话。点击幼龙，和它说话吧！");
        player.gainEquipInventorySlots(4);
        player.gainUseInventorySlots(4);
        player.gainSetupInventorySlots(4);
        player.gainEtcInventorySlots(4);
        player.gainCashInventorySlots(4);
        player.setJob(2200);
        player.gainSp(5);
        let string = ["UI/tutorial/evan/14/0"];
        npc.sayImage(string);
}