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

/* global npc, player */

/**
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNextENoEsc("#face0#好的，要到祭坛钥匙指向的地方去看看吗？\r\n刚好就在这附近。快去看看吧。", 1013358);
        npc.sayNextENoEsc("#face0#与钥匙产生共鸣的地方……在那边。", 1013358);
        npc.startQuest();
        player.startNavigation(910090302, 1, "1013305", 35900);
}
