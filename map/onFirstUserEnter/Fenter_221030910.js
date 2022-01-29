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
 * Caoong 
 * @author Jackson
 */


let event = npc.getEvent("boss_caoong");
if (event != null && event.getVariable("boss1") == null) {
        event.setVariable("boss1", false);
		let boss = map.makeMob(8880200);
        boss.changeBaseHp(150000000000);
        
        map.spawnMob(boss, 615, 298);
		
		let boss2 = map.makeMob(8880202);
        boss2.changeBaseHp(150000000000);
        
        map.spawnMob(boss2, 615, 298);
}