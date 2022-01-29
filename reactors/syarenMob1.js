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

let event = reactor.getEvent("guild_quest");
if (event != null) {
        map.changeBGM("Bgm10/Eregos");
        map.broadcastEventNotice("恐怖的黑暗力量出现了。");

        let boss = map.makeMob(9300028);
        //boss.setForcedMobStat(230, 2);//改变等级  基础倍率
        //boss.changeBaseHp(3000000000000);
        map.spawnMob(boss, 351, 101);

        let mob = map.makeMob(9300031);
        //mob.setForcedMobStat(230, 2);//改变等级  基础倍率
        //mob.changeBaseHp(3000000000000);
        map.spawnMob(mob, 130, 90);


        mob = map.makeMob(9300032);
        //mob.setForcedMobStat(230, 2);//改变等级  基础倍率
        //mob.changeBaseHp(3000000000000);
        map.spawnMob(mob, 540, 90);


        mob = map.makeMob(9300029);
        //mob.setForcedMobStat(230, 2);//改变等级  基础倍率
        //mob.changeBaseHp(3000000000000);
        map.spawnMob(mob, 130, 90);


        mob = map.makeMob(9300029);
        //mob.setForcedMobStat(230, 2);//改变等级  基础倍率
        //mob.changeBaseHp(3000000000000);
        map.spawnMob(mob, 540, 90);
}


