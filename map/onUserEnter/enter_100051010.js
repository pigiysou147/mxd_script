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

/* global player, npc */


if (player.getJob() == 301 && !"1".equals(player.getQuestRecordEx(35947, "6"))) {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        player.removeAdditionalEffect();

        npc.setCameraZoom(0, 2000, 0, 220, 120);
        player.setInGameCurNodeEventEnd(true);
        ////npc.setDelay(1000);
        npc.sayNextENoEsc("#face3#草丛中好像有什么东西在动。去确认一下吧。", 1013358);
        player.setForcedMove(2, 320);
        npc.setCameraZoom(2000, 1000, 2000, 110, -30);
        ////npc.setDelay(2500);

        npc.sayNextENoEsc("#face1#呃……救，救救我。我的头……卡在地上了。", 1013353);
        npc.sayNextENoEsc("#face1##b（先把他弄出来吧。说不定能找到什么线索。）#k", 1013358);
        player.setOverlapDetail(0, 1000, 3000, true);
        npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);
        npc.setCameraMove(true, 0, false, 0, 0);
        ////npc.setDelay(300);
        player.removeOverlapDetail(1000);
        npc.setCameraMove(true, 0, false, 0, 0);

        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, true, false, false);
        player.updateQuestRecordEx(35947, "6", "1");
}