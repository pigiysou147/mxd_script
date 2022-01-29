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

if (player.hasItem(4031343, 1) && player.hasItem(4031344, 1)) {
    let ret = npc.askYesNo("干得漂亮, 你确定要进行4转了吗?");
    if (ret == 1) {
        if (player.canGainItem(1142110, 1)) {
            switch (player.getJob()) {
                case 111:
                    player.setJob(112);
                    break;
                case 121:
                    player.setJob(122);
                    break;
                case 131:
                    player.setJob(132);
                    break;
            }
            npc.completeQuest();
            player.gainSp(3);
            player.loseItem(4031343);
            player.loseItem(4031344);
            player.gainItem(1142110, 1);
            npc.sayNext("你已经成功4转了, 恭喜你！");
        } else {
            npc.sayNext("你先整理下你的装备栏，需要1个空格！");
        }
    } else {
        npc.sayNext("考虑好后再来找我吧。");
    }
}