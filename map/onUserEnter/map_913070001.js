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
if (!player.isQuestStarted(20031) && !player.isQuestCompleted(20031)) {//20031
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        player.scriptProgressMessage("林伯特的杂货店");
        //npc.setDelay(500);
        player.scriptProgressMessage("冒险岛历XXXX年3月4日……");
        player.showProgressMessageFont("点击灯泡就可以开始任务。任务状态快捷键[Q]/选择型[J]", 3, 20, 20, 0);
        //npc.setDelay(1500);
        player.showAvatarOriented("UI/tutorial.img/34");
        //npc.setDelay(1200);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
}

