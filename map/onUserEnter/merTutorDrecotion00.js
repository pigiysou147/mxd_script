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
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
player.setInGameCurNodeEventEnd(true);
//npc.setDelay(100);
let selection = npc.playMovie("Mercedes.avi", true);
if (selection == 0) {
        player.scriptProgressMessage("播放动画失败。");
}

//player.setForcedInput(0);
//npc.setDelay(30);

//player.setForcedInput(4);
//npc.setDelay(2100);

player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", 2000, 0, -100, true, 0, false, 0);
//npc.setDelay(3000);

//player.setForcedInput(2);
player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/1", 2000, 0, -100, true, 0, false, 0);
//npc.setDelay(2000);


//player.setForcedInput(2);
player.setInGameCurNodeEventEnd(true);
player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/2", 2000, 0, -100, true, 0, false, 0);
//npc.setDelay(2000);


//player.setForcedInput(2);
player.setInGameCurNodeEventEnd(true);
player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/3", 2000, 0, -100, true, 0, false, 0);
//npc.setDelay(2000);

//player.setForcedInput(2);
player.setInGameCurNodeEventEnd(true);
player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/4", 2000, 0, -100, true, 0, false, 0);
//npc.setDelay(2000);

//player.setForcedInput(2);
player.setInGameCurNodeEventEnd(true);
player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/5", 2000, 0, -100, true, 0, false, 0);
//npc.setDelay(2000);

player.setInGameDirectionMode(false, false, false, false);

player.setSkillLevel(20021181, 1, 0, false);
player.setSkillLevel(20021166, 1, 0, false);