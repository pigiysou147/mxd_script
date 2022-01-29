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
 * @author Jackson (content from DelphiMS r418)
 */
let event = npc.getEvent("boss_akayrum_easy");
if (event != null && party != null && player.getId() == party.getLeader() && event.getVariable("npc") != null) {
        let ret = npc.askAccept("把我精心安排的计划化为泡影的家伙们竟然会自己找上门来, 就别提我有多么高兴了。\r\n\r\n#r作为其代价, 就让我赐给你们这世上最痛苦的死法吧。#k");
        if (ret == 1) {
                let entId = event.getVariable("npc");
                map.destroyTempNpc(entId);
                event.setVariable("boss", true);
                map.spawnMob(8860007, 342, -181);
        }
}