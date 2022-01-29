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

player.soundEffect("cannonshooter/flying");
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/balloon/0", 9000, 0, 0, true, 0, false, 0);
////npc.setDelay(1500);

player.setInGameCurNodeEventEnd(true);
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/balloon/1", 9000, 0, 0, true, 0, false, 0);
////npc.setDelay(1500);

player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/balloon/2", 9000, 0, 0, true, 0, false, 0);

player.showReservedEffect("Effect/Direction4.img/cannonshooter/face02");
player.showReservedEffect("Effect/Direction4.img/cannonshooter/out01");
