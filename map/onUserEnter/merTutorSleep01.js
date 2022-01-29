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

for (; player.getLevel() < 10; ) {
        player.gainExp(1024);
}
if (player.getJob() == 2002) {
        player.setJob(2300);
        player.gainSp(5);
        player.resetStats(4, 4, 4, 4);
}
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
player.setInGameCurNodeEventEnd(true);
player.showReservedEffect("Effect/Direction5.img/mersedesTutorial/Scene1");