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
let bossHp= 30000000000000;
                
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss1") == null) {
		if(event.getVariable("hard")>=1){
			bossHp=bossHp*10;
		}
        event.setVariable("boss1", false);
        let boss = map.makeMob(8880340);
        boss.changeBaseHp(bossHp);
        boss.setHpLimitPercent(2 / 3);
        map.spawnMob(boss, 352, -2022);

        let boss2 = map.makeMob(8880343);
        boss2.changeBaseHp(bossHp);
        boss2.setHpLimitPercent(2 / 3);
        map.spawnMob(boss2, 352, 157);

        let boss3 = map.makeMob(8880344);
        boss3.changeBaseHp(bossHp);
        boss3.setHpLimitPercent(2 / 3);
        map.spawnMob(boss3, 352, -2022);


        let spie = map.makeMob(8880351);
        spie.changeBaseHp(bossHp);
        map.spawnMob(spie, 352, 157);

        let eye = map.makeMob(8880355);
        eye.changeBaseHp(bossHp);
        map.spawnMob(eye, 252, 157);


        let spie2 = map.makeMob(8880352);
        spie2.changeBaseHp(bossHp);
        map.spawnMob(spie2, 352, -2022);

        let eye2 = map.makeMob(8880356);
        eye2.changeBaseHp(bossHp);
        map.spawnMob(eye2, 352, -2022);

        let peras = [666, 333, 3];
        map.setWillBoss(boss, boss2, boss3);
        map.showWillHpBar(peras);

}