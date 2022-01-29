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


player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, -1, 0);

player.changeBGM("Bgm00.img/Silence");
////npc.setDelay(500);
switch (map.getId()) {
        case 450013000:
                player.showSpineScreen(0, "Effect/Direction20.img/bossBlackMage/start_spine/blasck_space", "animation", "intro");
                player.soundEffect("Sound/SoundEff.img/BM3/boss_start");
                break;
        case 450013200:
                player.showSpineScreen(0, "Effect/Direction20.img/bossBlackMage/start2_spine/skeleton", "animation", "intro");
                player.soundEffect("Sound/SoundEff.img/BM3/boss_start2");
                break;
        case 450013400:
                player.showSpineScreen(0, "Effect/Direction20.img/bossBlackMage/space/blasck_space", "animation", "intro");
                player.soundEffect("Sound/SoundEff.img/BM3/boss_start3");
                break;
        case 450013600:
                player.showSpineScreen(0, "Effect/Direction20.img/bossBlackMage/start4_spine/black_Phase_3_4", "animation", "intro");
                player.soundEffect("Sound/SoundEff.img/BM3/boss_start3");
                break;
}
////npc.setDelay(5500);
player.setLayerOn(1000, "BlackOut", 0, 0, 13, "Map/Effect2.img/BlackOut", 4);
////npc.setDelay(1000);
player.offSpineScreen("intro", 100);
player.setLayerOff(1000, "BlackOut");
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
 */
player.changeMap(map.getId() + 100);


