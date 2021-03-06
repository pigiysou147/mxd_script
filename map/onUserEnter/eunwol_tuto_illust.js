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

let data = player.getQuestEntryData(38900);

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
player.setVansheeMode(true);
//player.setForcedInput(0);


switch (data) {
        case "1":
                player.showScreenAutoLetterBox("Map/Effect2.img/eunwol/enter", 0);
                //npc.setDelay(3000);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(927030020, 0);
                break;
        case "2":
                player.showReservedEffect("Effect/Direction15.img/eunwolTutorial/Scene0");
                //npc.setDelay(4000);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(927030030, 0);
                break;
        case "3":
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(927030040, 0);
                break;
        default :
                npc.setMonologue("\r\n\r\n?????????????????????????????????????????????????????????", false);
                npc.setMonologue("\r\n?????????????????????????????????????????????????????????????????????????????????", false);
                npc.setMonologue("\r\n?????????????????????????????????, ??????????????????????????????", false);
                npc.setMonologue("\r\n??????????????????????????????????????????", false);
                npc.setMonologue("\r\n\r\n\r\n??????......", false);
                npc.setMonologue("\r\n???????????????????????????????????????????????????????????????????????????", true);
                //npc.setDelay(1000);
                player.showReservedEffect("Effect/Direction8.img/lightningTutorial/Scene0");
                //npc.setDelay(3300);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.changeMap(927030000, 0);
                break;
}