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
        npc.sayNextENoEsc("#face6#也就是说，需要给守护遗迹的家伙带去祭品。\r\n然后放到刻着正确答案的柱子上就OK了。", 1013358);
        npc.sayNextENoEsc("#face0#正确答案已经知道了。那就去寻找#r#o2300200##k，搜集#b5个#k#b#i4036523# #t4036523##k吧。\r\n在附近找找看，应该就能找到遗迹防御兵。", 1013358);
        npc.startQuest();
        player.startNavigation(910090303, 0, "", 35902);

}
