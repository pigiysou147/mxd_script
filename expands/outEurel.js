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

player.setInGameDirectionMode(true, true, true, false);
//player.setStandAloneMode(true);
player.setInGameCurNodeEventEnd(true);
//npc.setDelay(1000);

player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", 0, 0, -120, false, 0, false, 0);
//npc.setDelay(2000);

player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", 0, 0, -120, false, 0, false, 0);
//npc.setDelay(2000);
npc.sayNextSNoEsc("等下... 好像有些奇怪.. .. 我的等级是多少？");
npc.sayNextSNoEsc("10级?!");
player.startQuest(24093, 0, "1");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
