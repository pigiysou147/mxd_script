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
 * Jinhillah
 * @author Jackson
 */


let event_name;
let bossId;
let handId;
let smogId;
let hp;
switch (map.getId()) {
        case 450010100:
                event_name = "boss_jinhillah";
                bossId = 8880410;
                handId = 8880411;
                smogId = 8880412;
                hp = 100000000000000;
                break;
        case 450010700:
                event_name = "boss_jinhillah_hard";
                bossId = 8880410;
                handId = 8880411;
                smogId = 8880412;
                hp = 8000000000000
                break;
}
let event = npc.getEvent(event_name);
if (event != null && event.getVariable("boss") == null) {
		map.reset();
        map .resetJinHillah();
        event.setVariable("boss", false);
        let boss = map.makeMob(bossId);
        boss.changeBaseHp(hp);
		boss.setForcedMobStat(265);
        map.spawnMob(boss, 16, 265);
        map.setJinHillBossId(boss.getEntityId());
        let hand = map.makeMob(handId);
		
        hand.changeBaseHp(hp);
		hand.setForcedMobStat(265);
        map.spawnMob(hand, 16, 265);
        let smog = map.makeMob(smogId);
		
		smog.setForcedMobStat(265);
        smog.changeBaseHp(hp);
        map.spawnMob(smog, 16, 265);

}