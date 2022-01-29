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
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.setVansheeMode(true);
//player.setForcedInput(0);
player.setInGameCurNodeEventEnd(true);
//npc.setDelay(1000);
switch (data) {
        case "5":
                player.showScreenAutoLetterBox("Map/Effect2.img/eunwol/gofoxvillage", 0);
                //npc.setDelay(3000);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.setInGameCurNodeEventEnd(true);
                player.changeMap(940200010, 0);
                break;
        default:
                npc.sayNextSNoEsc("......");
                npc.sayNextSNoEsc("我要……死了吗？");
                npc.sayNextSNoEsc("死后的世界是不存在的。估计没办法在黄泉中再见了。弗里德那个家伙，一定会很失望。");
                npc.sayNextSNoEsc("......");

                //npc.setDelay(1000);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/0", 3200, 300, -210, false, 0, false, 0);
                //npc.setDelay(300);

                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/1", 2900, -300, -70, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/2", 2600, 300, 0, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/3", 2300, -300, 70, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/4", 2000, 300, 210, false, 0, false, 0);
                //npc.setDelay(2000);
                npc.sayNextSNoEsc("怎么回事，这个声音？");
                //npc.setDelay(500);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/5", 3200, -300, -70, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/6", 2900, 300, -210, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/7", 2600, -300, 70, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/8", 2300, 300, 0, false, 0, false, 0);
                //npc.setDelay(300);
                player.showPlayerEffectPlay("Effect/Direction15.img/effect/story/BalloonMsg1/9", 2000, 300, 210, false, 0, false, 0);
                //npc.setDelay(300);
                player.setLayerBlind(true, 250, 3000);
                //npc.setDelay(3000);
                //player.setLayerBlind(false, 0, 1000);
                //npc.setDelay(1000);
                player.showScreenAutoLetterBox("Map/Effect2.img/eunwol/meetfox", 0);
                //npc.setDelay(3200);
                for (let lv = player.getLevel(); lv < 10; lv++) {
                        player.gainExp(1024);
                }
                player.setInGameCurNodeEventEnd(true);
                player.setInGameDirectionMode(false, false, false, false);
                //player.setStandAloneMode(false);
                player.setVansheeMode(false);
                player.changeMap(940200010, 0);
                break;
}
