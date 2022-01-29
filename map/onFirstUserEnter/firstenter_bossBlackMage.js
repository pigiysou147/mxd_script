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
300000000000000     黑魔法师第一阶段两个剑灵  都是300W亿血量
 500000000000000     第二阶段  500W亿
800000000000000     第三阶段 800W亿
1200000000000000     第四阶段1200W亿




 */


let event = npc.getEvent("boss_blackmage");
if (event != null) {
		let hard=event.getVariable("hard");
        switch (map.getId()) {
                case 450013100:
                        if (event.getVariable("boss1") == null) {
                                event.setVariable("boss1", false);
                                let dummy = map.makeMob(8880505);
                                let baseHp=300000000000000;
                                if(hard==1 || hard==3){
                                        baseHp=baseHp*7;
                                }
                                let knight1 = map.makeMob(8880500);
                                knight1.changeBaseHp(baseHp);
                                map.spawnMob(knight1, -883, 84);

                                let knight2 = map.makeMob(8880501);
                                knight2.changeBaseHp(baseHp);
                                map.spawnMob(knight2, 924, 84);

                                dummy.setDummyBossGroups(knight1, knight2);
                                dummy.changeBaseHp(baseHp);
                                map.spawnMob(dummy, 0, 84);


                                let boss = map.makeMob(8880512);
								boss.changeBaseHp(baseHp);
                                map.spawnMob(boss, 0, 84);

                                map.startFieldEvent();
                        }
                        break;
                case 450013300:
                        if (event.getVariable("boss2") == null && event.getVariable("boss1")) {
                                event.setVariable("boss2", false);
                                let baseHp=500000000000000;
                                if(hard==1 || hard==3){
                                        baseHp=baseHp*7;
                                }
                                let boss = map.makeMob(8880502);
                                boss.changeBaseHp(baseHp);
                                map.spawnMob(boss, 0, 87);

                                let mob1 = map.makeMob(8880512);
                                map.spawnMob(mob1, 0, 87);
                                let mob2 = map.makeMob(8880516);
                                map.spawnMob(mob2, 0, 87);
                                map.startFieldEvent();
                        }
                        break;
                case 450013500:
                        if (event.getVariable("boss3") == null && event.getVariable("boss2")) {
                                event.setVariable("boss3", false);
                                let baseHp=800000000000000;
                                if(hard==1 || hard==3){
                                        baseHp=baseHp*7;
                                }
                                let boss = map.makeMob(8880503);
                                boss.changeBaseHp(baseHp);
                                map.spawnMob(boss, 0, 84);
                                boss.setZoneDataType(1);

                                let mob1 = map.makeMob(8880512);
                                map.spawnMob(mob1, 0, 84);

                                map.startFieldEvent();
                        }
                        break;
                case  450013700  :
                        if (event.getVariable("boss4") == null && event.getVariable("boss3")) {
                                event.setVariable("boss4", false);
                                let baseHp=1200000000000000;
                                if(hard==1 || hard==3){
                                        baseHp=baseHp*7;
                                }
                                let boss = map.makeMob(8880504);
                                boss.changeBaseHp(baseHp);
                                map.spawnMob(boss, 0, 218);

                                let mob1 = map.makeMob(8880512);
                                map.spawnMob(mob1, 0, 218);
                                map.startFieldEvent();
                        }
                        break;
                case 450013750:
                        if (event.getVariable("boss4") ) {
                        if(event.getVariable("hard")<2){
                                //竞速模式
                                event.setVariable("boss5", false);
                                let boss = map.makeMob(8880518);//创世之卵才是最后可以爆物的怪物 
                                map.spawnMob(boss, 0, 217);
                        }
                                
                        }
                        break;
        }
}