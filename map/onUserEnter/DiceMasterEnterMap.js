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

let diceCount = 10;
if(player.isGm()){
	diceCount=20;
}

if (event != null) {
        if (!"1".equals(event.getVariable("Start"))) {
                event.setVariable("Start", "1");
                player.updateQuestRecordEx(63376, "pathNum", "0");
                player.updateQuestRecordEx(63376, "type", "0");
                player.updateQuestRecordEx(63376, "diceCount", String(diceCount));
                player.updateQuestRecordEx(63376, "cheatValue", "0");
                player.updateQuestRecordEx(63376, "cheat", "0");
                player.showScreenAutoLetterBox("event/start", 0);
                player.scriptProgressMessage("已进入掷骰大师游戏，投掷骰子可前进。");
        }
}
