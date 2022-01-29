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
//player.setForcedInput(0);
////npc.setDelay(30);


npc.sayNextSNoEsc("这里……啊……女皇大人！");

//player.setForcedInput(2);
////npc.setDelay(420);

//player.setForcedInput(0);
npc.sayNextSNoEsc("女皇大人你在看什么呢……？");

player.showPlayerEffectPlay("Map/Effect.img/nightmare/mirror", 3200, 298, -200, false, 0, false, 0);
////npc.setDelay(2100);

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);

npc.makeEvent("change_job", false, [player, 913031002]);
