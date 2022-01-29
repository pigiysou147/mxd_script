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

let ret = npc.askYesNo("#b#h ##k. 你来了,现在想要对数据进行更新吗?(#r进行1转#k)");
if (ret == 1) {
        player.resetStats(4, 4, 4, 4);
        player.setJob(14200);
        player.gainSp(5);
        player.gainEquipInventorySlots(4);
        player.gainUseInventorySlots(4);
        player.gainSetupInventorySlots(4);
        player.gainEtcInventorySlots(4);
        player.gainCashInventorySlots(4);
        if (!player.gainItem(1353200, 1)) {
                player.gainParcel(1353200, 1, "背包空间不足以邮件发送");
        }
        npc.startQuest();
        npc.completeQuest();
}
