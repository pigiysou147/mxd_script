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
 * Lucid 
 * @author Jackson
 */

let eventName;
let bossId;
let bossHp;
switch (map.getId()) {
        case 450004250:
                eventName = "boss_lucid";
                bossId = 8880150;
                bossHp = 10000000000000;
                break;
        case 450004550:
                eventName = "boss_lucid_hard";
                bossId = 8880151;
                bossHp = 60000000000000;
                break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss2") == null) {
        event.startTimer("ButterflyPhase2", 5000);
        event.setVariable("boss2", false);
        let boss = map.makeMob(bossId);
        boss.changeBaseHp(bossHp);
        map.spawnMob(boss, 636, -491);

}