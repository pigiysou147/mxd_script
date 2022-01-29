/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */


player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);

player.showScreenDelayedEffect("JPKanna/magicCircle2", 0);
//npc.setDelay(7000);
npc.sayNextENoEsc("看来相马他们的行动也已经成功了。结界正在逐渐消失。", true);
npc.sayNextENoEsc("我也要尽快赶往正殿地下，去阻止仪式的进行了。", true);

player.setInGameDirectionMode(false, true, false, false);
player.setSkillLevel(40021183, -1, -1, false);
player.setSkillLevel(40021184, -1, -1, false);
player.setSkillLevel(40021185, -1, -1, false);
player.setSkillLevel(40021186, -1, -1, false);
player.changeMap(807100103, 0);