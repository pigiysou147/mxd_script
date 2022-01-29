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
let flowerId;
let bossHp;
switch (map.getId()) {
        case 450004150:
                eventName = "boss_lucid";
                bossId = 8880140;
                flowerId = 8880166;
                bossHp = 4000000000000;
                break;
        case 450004450:
                eventName = "boss_lucid_hard";
                bossId = 8880141;
                flowerId = 8880176;
                bossHp = 30000000000000;
                break;
}
let event = npc.getEvent(eventName);
if (event != null && event.getVariable("boss1") == null) {
        event.setVariable("boss1", false);
        event.startTimer("ButterflyPhase1", 5000);
        let boss = map.makeMob(bossId);
        boss.changeBaseHp(bossHp);
        map.spawnMob(boss, 1000, 48);

        let flower = map.makeMob(flowerId);
        flower.changeBaseHp(bossHp);
        map.spawnMob(flower, 1000, 48);
}