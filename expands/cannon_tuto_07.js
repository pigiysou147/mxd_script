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
player.spawnTempNpc(1096012, -51, -97, 1);
player.setNpcSpecialAction(1096012, "summon", 0, false);
//player.setForcedInput(0);
//player.setForcedInput(2);
////npc.setDelay(2000);
//player.setForcedInput(0);
npc.sayNextNoEsc("好了，现在出发！", 1096005);
player.destroyTempNpc(1096012);

player.soundEffect("cannonshooter/fire");
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/flying/0", 7000, 0, 0, false, 0, false, 0);
player.showPlayerEffectPlay("Effect/Direction4.img/effect/cannonshooter/flying1/0", 7000, 0, 0, false, 0, false, 0);
////npc.setDelay(800);

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.changeMap(912060300, 0);