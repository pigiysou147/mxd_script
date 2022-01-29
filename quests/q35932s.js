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
        let ret = npc.askYesNoE("#face3##b（腰间的遗物在发光。\r\n光又想把我引导到什么地方。跟过去看看吧。）#k", 1013358);
        if (ret != 1) {
                npc.sayNextE("#face0##b（遗迹的意念所说的时候，好像就是现在。\r\n最好跟着遗物之光过去看看。）#k\r\n\r\n #r ※ 自动移动到任务地图。#k", 1013358);
        }
        player.updateQuestRecordEx(35932, "rMap", map.getId());
        player.changeMap(910090316, 0);
}
