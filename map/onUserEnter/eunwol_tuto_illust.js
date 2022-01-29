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

let data = player.getQuestEntryData(38900);

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
player.setVansheeMode(true);
//player.setForcedInput(0);


switch (data) {
        case "1":
                player.showScreenAutoLetterBox("Map/Effect2.img/eunwol/enter", 0);
                //npc.setDelay(3000);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(927030020, 0);
                break;
        case "2":
                player.showReservedEffect("Effect/Direction15.img/eunwolTutorial/Scene0");
                //npc.setDelay(4000);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(927030030, 0);
                break;
        case "3":
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(927030040, 0);
                break;
        default :
                npc.setMonologue("\r\n\r\n冒险岛世界已经被一股沉沉的黑暗所笼罩。", false);
                npc.setMonologue("\r\n突然出现的黑魔法师想用他那强大的黑暗力量支配冒险岛世界", false);
                npc.setMonologue("\r\n所有的人都惧怕黑魔法师, 所以无人敢与他对抗。", false);
                npc.setMonologue("\r\n冒险岛世界只剩下无尽的绝望。", false);
                npc.setMonologue("\r\n\r\n\r\n还有......", false);
                npc.setMonologue("\r\n终于愿意将冒险岛从黑魔法师的魔爪中救出的人出现了。", true);
                //npc.setDelay(1000);
                player.showReservedEffect("Effect/Direction8.img/lightningTutorial/Scene0");
                //npc.setDelay(3300);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.changeMap(927030000, 0);
                break;
}