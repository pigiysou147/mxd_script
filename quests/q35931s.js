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
        let ret = npc.askYesNoENoEsc("#face3##b（腰间的遗物在发光。\r\n光似乎想把我引导到什么地方。要跟过去看看吗？）#k", 1013358);
        if (ret == 1) {
                player.updateQuestRecordEx(35931, "rMap", map.getId());
                player.changeMap(910090315, 0);
        } else {
                npc.sayNextENoEsc("#face6#手滑了吗？", 1013358);
        }
}
