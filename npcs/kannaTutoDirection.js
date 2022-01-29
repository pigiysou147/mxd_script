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
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);

player.showScreenDelayedEffect("JPKanna/magicCircle1", 0);
//npc.setDelay(7000);
npc.sayNextENoEsc("看来是成功了啊。结界已经被削弱了不少。", true);
npc.sayNextENoEsc("接下来要做的，就是破坏位于正殿地下的祭坛，彻底阻止仪式的进行……最好还是加快速度吧。", true);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(807100112);