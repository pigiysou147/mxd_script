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

var event = npc.getEvent();
if (event != null) {
        var number = parseInt(Math.floor(Math.random() * 8) + 1);
        var color = "r";
        var rand = parseInt(Math.floor(Math.random() * 4));
        switch (rand) {
                case 0:
                        color = "r";
                        break;
                case 1:
                        color = "b";
                        break;
                case 2:
                        color = "g";
                        break;
                case 3:
                        color = "y";
                        break;
        }
        //g r b y
        var bb = number == 8 ? "8" : "0";
        player.updateQuestRecordEx(42006, "g", bb);
        player.updateQuestRecordEx(42006, "r", bb);
        player.updateQuestRecordEx(42006, "b", bb);
        player.updateQuestRecordEx(42006, "y", bb);
        player.updateQuestRecordEx(42006, color, number);
        player.showAvatarOrientedRepeat("Effect/OnUserEff.img/aquarisTower/cardChange/v", 0, 1);
        player.showAvatarOrientedRepeat("Effect/OnUserEff.img/aquarisTower/card/" + color + "/" + number, 0, 1);
}
player.showAvatarOrientedRepeat(true,"Effect/OnUserEff.img/aquarisTower/cardChange/v");
player.showAvatarOrientedRepeat(true,"Effect/OnUserEff.img/aquarisTower/card/g/7");


