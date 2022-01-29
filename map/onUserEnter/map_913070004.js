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

if (!player.isQuestStarted(20034) && !player.isQuestCompleted(20034)) {//20031
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        player.scriptProgressMessage("林伯特的杂货店");
        //npc.setDelay(500);
        player.scriptProgressMessage("冒险岛历XXXX年3月4日……");
        //player.setForcedInput(2);
        //npc.setDelay(1000);

        //player.setForcedInput(1);
        //npc.setDelay(1000);

        player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/5", 2000, 0, -100, true, -100, false, 0);
        //npc.setDelay(2000);

        //player.setForcedInput(2);
        //npc.setDelay(500);

        //player.setForcedInput(0);
        player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/6", 2000, 0, -100, true, -100, false, 0);
        //npc.setDelay(1000);

        player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/4", 3000, 0, -100, true, -100, false, 0);
        //npc.setDelay(1000);

        player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/7", 3000, 0, -100, true, -100, false, 0);
        //npc.setDelay(1000);

        player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/8", 3000, 0, -100, true, -100, false, 0);
        //npc.setDelay(1000);

        player.startQuest(20034, 0);
        player.scriptProgressMessage("后院好像有人。到后院去看看吧。");
        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, true, false, false);
}
