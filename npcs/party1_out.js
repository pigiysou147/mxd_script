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
 * Nella (NPC 9020002)
 * Hidden Street: 1st Accompaniment <1st Stage> (Map 103000800),
 *   Hidden Street: 1st Accompaniment <2nd Stage> (Map 103000801),
 *   Hidden Street: 1st Accompaniment <3rd Stage> (Map 103000802),
 *   Hidden Street: 1st Accompaniment <4th stage> (Map 103000803),
 *   Hidden Street: 1st Accompaniment <Last Stage> (Map 103000804),
 *   Hidden Street: 1st Accompaniment <Bonus> (Map 103000805),
 *   Hidden Street: 1st Accompaniment <Exit> (Map 103000890)
 *
 * Exit NPC to forfeit the Kerning City party quest.
 *
 * @author Jackson (content from KiniroMS r227)
 */

//TODO: GMS-like conversation
if (map.getId() == 910340000) {
	
       player.changeMap(910002000); //TODO: shouldn't this be a random portal in Kerning?
        player.loseItem(4001007);
        player.loseItem(4001008);
} else {
        let str;
        if (map.getId() == 910340500)
                str = "你准备好离开这个地图了吗？?";
        else
                str = "一旦你离开地图，你必须重新启动整个任务如果你想再试一次。你还想离开这里吗？";
        if (npc.askYesNo(str) == 1)
                player.changeMap(910340000, "st00");
}