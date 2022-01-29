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

if (player.isQuestStarted(24008) && !player.isQuestStarted(24009)) {
        player.setInGameDirectionMode(true, true, false, false);
        //player.setStandAloneMode(true);
        player.setInGameCurNodeEventEnd(true);
        //player.setForcedInput(1);
        ////npc.setDelay(2000);
        //player.setForcedInput(0);
        npc.sayNextSNoEsc("长老们？");
        player.setInGameCurNodeEventEnd(true);
        //player.setForcedInput(2);
        ////npc.setDelay(3000);
        //player.setForcedInput(0);
        npc.sayNextSNoEsc("孩子们？");
        //player.setForcedInput(1);
        ////npc.setDelay(500);
        //player.setForcedInput(0);
        npc.sayNextSNoEsc("怎么大家都还没有醒来？");


        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, false, false, false);
        player.startQuest(24009, 0, "1");
}
