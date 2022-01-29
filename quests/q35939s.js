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

/* global npc, player */

/**
 *
 * @author Jackson
 */

startScript();

function startScript() {
        let ret = npc.askYesNoENoEsc("#face3##b（遗物发出了明亮的光，似乎会有什么事情发生。\r\n必须集中精神。）#k", 1013358);
        if (ret == 1) {
                player.setInGameCurNodeEventEnd(true);
                player.setInGameDirectionMode(true, false, false, false);
                //player.setStandAloneMode(true);
                player.removeAdditionalEffect();
                player.showFadeInOutEffect(500, 1250, 2500, 210);
                player.soundEffect("Sound/SoundEff.img/pathfinder/relic");
                player.showSpineScreen(0, 0, "Effect/Direction22.img/effect/PF_relic/skeleton", "1-->2", "00");
                //npc.setDelay(3500);

                npc.sayNextENoEsc("#face3##b（伴随着神秘的光，遗物的力量又解放了一个阶段。\r\n感觉古代之力变得更强了。）#k", 1013358);
                //npc.setDelay(1000);
                npc.sayNextENoEsc("#face0##i03801377# #b（运用强化的古代之力，应该就可以使用更强的技能了……）#k", 1013358);
                player.setLayerBlind(true, 255, 0, 0, 0, 500, 2);
                //npc.setDelay(500);
                //npc.setDelay(1000);
                npc.sayNextENoEsc("#face2##b（真厉害……不试不知道，一试吓一跳。刚刚掌握，就已经这么厉害了……）#k", 1013358);


                npc.sayNextENoEsc("#face0##i03801374#  #b（根据使用的#s3011004#暗红之力技能，遗物的纹样改变了。）#k", 1013358);
                npc.sayNextENoEsc("#face0##i03801373#  #b（用#s3011004#暗红之力技能攻击敌人时，数值条会逐渐充满。）#k", 1013358);
                npc.sayNextENoEsc("#face1##b（消耗充满的数值条，可以使用强力技能#s3301008#……\r\n好好使用，今后一定能起到很大的作用。）#k", 1013358);
                player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
                //npc.setDelay(1200);
                //player.setLayerBlind(false, 255, 0, 0, 0, 1000, 2);
                //npc.setDelay(1400);
                player.setOverlapDetail(0, 1000, 3000, true);
                npc.setCameraZoom(0, 1000, 2500, 2147483647, 2147483647);

                npc.setCameraMove(true, 0, false, 0, 0);
                //npc.setDelay(300);
                player.removeOverlapDetail(1000);
                npc.setCameraMove(true, 0, false, 0, 0);
                //player.setStandAloneMode(false);
                player.setInGameDirectionMode(false, true, false, false);
                npc.completeQuest();
                player.setJob(330);
                player.gainSp(5);
                player.openUI(1);
                player.openUI(2);
                player.openUIWithOption(3, 3310000);
                player.gainItem(1143162, 1);
                player.equip(-10, 1353701);
        } else {
                npc.sayNextENoEsc("#face6#手滑了吗？", 1013358);
        }
}
