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
player.setInGameDirectionMode(true, false, true, false);
//player.setStandAloneMode(true);
player.setInGameCurNodeEventEnd(true);
player.showBlindEffect(true);
////npc.setDelay(100);
switch (map.getId()) {
        case 914090010:
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/Scene0");
                break;
        case 914090011:
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/Scene1" + player.getGender());
                break;
        case 914090012:
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/Scene2" + player.getGender());
                break;
        case 914090013:
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/Scene3");
                break;
        case 914090100:
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/HandedPoleArm" + player.getGender());
                break;
        case 914090200:
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/Maha");
                break;
}