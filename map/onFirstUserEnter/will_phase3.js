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

let eventName = "boss_will";
let bossId;
let flowerId;
let bossHp= 260000000000000;
       
let event = npc.getEvent(eventName);

if (event != null && event.getVariable("boss3") == null) {
        event.setVariable("boss3", false);
		if(event.getVariable("hard")>=1){
			bossHp=bossHp*10;
		}
        let boss = map.makeMob(8880342);
        boss.changeBaseHp(bossHp);
        map.spawnMob(boss, -85, 150);

        let spie = map.makeMob(8880354);
        spie.changeBaseHp(bossHp);
        map.spawnMob(spie, -85, 150);

        let eye = map.makeMob(8880358);
        eye.changeBaseHp(bossHp);
        map.spawnMob(eye, -85, 150);
}