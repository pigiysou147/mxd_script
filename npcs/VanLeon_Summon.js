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
let mobId;
let event_name;
switch (map.getId()) {
        case 211070102:
                mobId = 8840013;
                event_name = "boss_vonleon_easy";
                break;
        case 211070100:
                mobId = 8840010;
                event_name = "boss_vonleon";
                break;
        case 211070104:
                mobId = 8840018;
                event_name = "boss_vonleon_hard";
                break;
}

let event = npc.getEvent(event_name);
if (event != null && party != null && player.getId() == party.getLeader() && event.getVariable("npc") != null) {
        let ret = npc.askAccept("你们谁来打败我？或者你们是反黑魔法师联盟的人？不管你是谁…没有必要再谈下去!!!!!!!\r\n\r\n#b(来吧!你们这些傻瓜!)");
        if (ret == 1) {
                let entId = event.getVariable("npc");
                map.destroyTempNpc(entId);
                event.setVariable("boss", true);
				let boss = map.makeMob(mobId);
				boss.changeBaseHp(2100000000);
                map.spawnMob(boss, -5, -181);
        }
}