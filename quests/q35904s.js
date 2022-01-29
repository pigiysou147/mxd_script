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
        npc.sayNextENoEsc("#face1#喂，要我把你弄出来吗？", 1013358);
        npc.sayNextENoEsc("#face1#拜，拜托了……请，请帮帮我！", 1013353);
        npc.sayNextENoEsc("#face1#要是我帮了你，你什么都能答应我吗？", 1013358);
        npc.sayNextENoEsc("#face1#好，好吧……但是……不能到村外去！\r\n除了那个之外，我什么都听你！", 1013353);
        npc.sayNextENoEsc("#face1#很好，那我就开始拔了哦？", 1013358);
        npc.sayNextENoEsc("#face1#呃……不，不行！\r\n要是那样，我马斯卡波的身体就要变成两截了！", 1013353);
        npc.sayNextENoEsc("#face6#那该怎么办呢？", 1013358);
        let ret = npc.askAcceptENoEsc("#face1#洒，洒点种子油，应该就能拔出来了！\r\n那个东西在附近很常见，应该很快就能找到！", 1013353);
        if (ret == 1) {
                npc.startQuest();
                player.startNavigation(100051011, 0, "", 35904);
                npc.sayNextENoEsc("#face1#请帮我从#r#o2300201##k身上搜集#b10个#k#b#i4036524# #t4036524##k！\r\n胖胖花在附近的#r#m100051011##k就能找到！", 1013353);
        } else {
                npc.sayNextENoEsc("#face6#算了吧。我看……好像没什么用。", 1013358);
        }
}
