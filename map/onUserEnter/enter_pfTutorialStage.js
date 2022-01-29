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

let event = npc.getEvent();
if (event != null) {
        event.setVariable("st", new Date().getTime());
        player.updateQuestRecordEx(34500, "time", "10000000");
        player.updateQuestRecordEx(34500, "type", "1");
        player.showPlatformerTimer(2, 10000000, 10000000, 34500);
        player.showScreenAutoLetterBox("event/start", 0);
        player.soundEffect("Sound/MiniGame.img/multiBingo/start");
        let stage = parseInt(map.getId() % 1000 / 10);
        switch (stage) {
                case 4:
                case 6:
                        npc.setCameraPutlooseLevel(3);
                        npc.setCameraRelMove(0, 0, 0, 200);
                        break;
                case 5:
                        npc.setCameraPutlooseLevel(3);
                        npc.setCameraRelMove(0, 0, 0, -100);
                        break;
                case 8:
                        event.startTimer("summon_obtacle", 100);
                        npc.setCameraRelMove(0, 1000, 400, 350);
                        break;
                case 9:
                        npc.setCameraRelMove(0, 1000, 400, 350);
                        break;
                default:
                        npc.setCameraPutlooseLevel(5);
                        npc.setCameraRelMove(0, 1000, 400, 0);

        }

}


