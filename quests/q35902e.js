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
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.removeAdditionalEffect();
player.setLayerBlind(true, 255, 0, 0, 0, 250, 2);
//npc.setDelay(1000);
player.teleportToPos(3, player.getId(), new java.awt.Point(-100, 50));
player.setForcedFlip(-1);
//npc.setDelay(1000);
player.setForcedFlip(0);
player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
//npc.setDelay(1200);
//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 2);
//npc.setDelay(1400);

while (true) {
        let sel = npc.askMenuENoEsc("#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”’#k\r\n放到刻着这个谜题正确答案的柱子上吧。\r\n#b#L0# 云 #l　#L1# 火 #l　#L2# 月光#l", 1013358);
        if (sel == 1) {
                break;
        } else {
                npc.sayNextENoEsc("#face3#好像不是这个……", 1013358);
        }
}
npc.sayNextENoEsc("#face3#这是……", 1013358);
//npc.setDelay(1500);

player.soundEffect("Sound/SoundEff.img/pathfinder/key");
player.setLayerOn(500, "00", 0, 0, 1, "Effect/Direction22.img/effect/PF_key/0", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);

player.setLayerOff(550, "00");
player.setLayerOn(300, "01", 0, 0, 1, "Effect/Direction22.img/effect/PF_key/1", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);

player.setLayerOff(300, "01");
player.setLayerOn(300, "02", 0, 0, 1, "Effect/Direction22.img/effect/PF_key/2", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);

player.setLayerOff(550, "02");

npc.sayNextENoEsc("#face1#啊哈，最后一把祭坛钥匙原来就在这里。\r\n呼……幸亏看了一眼谜题的内容。", 1013358);
//npc.setDelay(1000);

npc.sayNextENoEsc("#face1#三把钥匙全部找到了。那接下来要做的事情……\r\n是的，就是把钥匙插在祭坛上。", 1013358);

npc.sayNextENoEsc("#face3#钥匙又开始发光了。在光指向的地方一定有什么东西。\r\n一定没错。祭坛所在的地方就是那里。", 1013358);

player.setForcedMove(2, 200);
//npc.setDelay(1000);

player.setLayerBlind(true, 255, 0, 0, 0, 500, 2);
//npc.setDelay(500);

player.showTextEffect("#fn???? ExtraBold##fs18#片刻之后，帕勒坦遗迹某处", 1000, 6);
//npc.setDelay(4500);

npc.sayNextENoEsc("#face1#呵呵……发现了遗迹所在的地方。", 1013358);

player.setBGMVolume(0, 1500);
//npc.setDelay(1500);

player.changeBGM("Bgm00.img/Silence");
player.setBGMVolume(50, 300);
//npc.setDelay(300);

//npc.setDelay(1000);
player.setOverlapDetail(0, 1000, 3000, true);

npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);


player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);

//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(910090304, 0);

