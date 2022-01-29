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

let event = reactor.getEvent("boss_zakum_chaos");
if (event != null && event.getVariable("boss") == null) {
        event.setVariable("boss", true);
        map.broadcastEventNotice("进阶扎昆出现了，请在规定时间范围内击败它。");
        let boss = map.makeMob(8800102);
        var totalHp = 0;
        for (let i = 8800141; i <= 8800148; i++) {
                let hand = map.makeMob(i);
                totalHp += hand.getHp();
                map.spawnMob(hand, -10, -215);
        }
        boss.changeBaseHp(boss.getHp() + totalHp);
        map.spawnMob(boss, -10, -215);
}

