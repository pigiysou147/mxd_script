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

if (!"1".equals(player.getQuestRecordEx(35947, "2"))) {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        player.removeAdditionalEffect();
        player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
        player.teleportToPos(3, player.getId(), new java.awt.Point(-991, -668));
        npc.setCameraZoom(0, 1000, 0, -378, -163);

        player.setInGameCurNodeEventEnd(true);
        //npc.setDelay(800);
        //player.setForcedInput(7);
        //npc.setDelay(500);

        player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
        //npc.setDelay(1200);

        //player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
        //npc.setDelay(1400);

        player.showTextEffect("#fn???? ExtraBold##fs18#几天后，帕勒坦遗迹", 1000, 6);
        //npc.setDelay(4000);

        player.setForcedMove(4, 250);
        npc.setCameraZoom(1500, 1500, 1500, -650, -300);
        //npc.setDelay(2000);

        //player.setForcedInput(6);
        //npc.setDelay(500);

        player.setForcedMove(2, 180);
        //npc.setDelay(2500);

        npc.sayNextENoEsc("#face3#帕勒坦遗迹……终于找到了。\r\n插图上画的地方应该就是这里。", 1013358);
        npc.sayNextENoEsc("#face1#呵呵……规模比想象的还要雄伟嘛。\r\n感觉这里一定埋藏着了不起的东西。", 1013358);
        //npc.setDelay(1000);


        npc.sayNextENoEsc("#face0#“找到三把钥匙，插在考验祭坛之上。”\r\n书桌上的纸条，这样写道。", 1013358);
        npc.setCameraZoom(1500, 1500, 1500, -650, -400);
        //npc.setDelay(1500);

        player.setLayerOn(500, "00", 0, -100, -1, "Effect/Direction22.img/effect/PF_key/0", 4, true, -1, false, 0, 0);
        player.soundEffect("Sound/SoundEff.img/pathfinder/key");
        //npc.setDelay(1000);

        player.setLayerOff(550, "00");
        player.setLayerOn(300, "01", 0, -100, -1, "Effect/Direction22.img/effect/PF_key/1", 4, true, -1, false, 0, 0);
        //npc.setDelay(1000);

        player.setLayerOn(500, "02", 0, -100, -1, "Effect/Direction22.img/effect/PF_key/2", 4, true, -1, false, 0, 0);
        player.setLayerOff(300, "01");
        //npc.setDelay(1000);

        player.setLayerOff(550, "02");
        //npc.setDelay(500);

        npc.setCameraZoom(1500, 1500, 1500, -650, -300);
        //npc.setDelay(1000);

        npc.sayNextENoEsc("#face1#一把已经在研究室中得到了。\r\n另一把在来的路上找到了。", 1013358);

        npc.sayNextENoEsc("#face0#从钥匙的反应来看……\r\n最后一把钥匙一定就在这个遗迹中。", 1013358);
        //npc.setDelay(500);

        player.soundEffect("Sound/SoundEff.img/pathfinder/roar1d");
        player.setFieldFloating(10, 10, 50);
        //npc.setDelay(1000);

        player.setFieldFloating(0, 0, 0);

        npc.setCameraZoom(0, 1500, 0, -700, -300);
        //npc.setDelay(300);
        npc.sayNextENoEsc("#face3#怎么在震动？难道……要坍塌了吗？", 1013358);
        npc.sayNextENoEsc("#face0#但是煮熟的鸭子总不能就这样飞了吧。r\n迅速把事情搞定，然后离开这里吧。", 1013358);
        //npc.setDelay(1000);

        player.setOverlapDetail(0, 1000, 3000, true);
        npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);
        npc.setCameraMove(true, 0, false, 0, 0);
        //npc.setDelay(300);

        player.removeOverlapDetail(1000);
        npc.setCameraMove(true, 0, false, 0, 0);

        //player.setStandAloneMode(false);
        player.setInGameDirectionMode(false, true, false, false);

        player.updateQuestRecordEx(35947, "2", "1");
        player.showAvatarOriented("UI/tutorial.img/34");
}