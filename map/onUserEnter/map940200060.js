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
//player.setForcedInput(0);

player.spawnTempNpc(3002100, 10, 20, 0);
player.setNpcSpecialAction(3002100, "summon", 0, false);
player.setInGameCurNodeEventEnd(true);
//npc.setDelay(1000);



player.setNpcForceMove(3002100, 1, 250, 100);
//player.setForcedInput(2);
//npc.setDelay(4500);


player.setNpcForceMove(3002100, -1, 70, 100);
//player.setForcedInput(0);
//npc.setDelay(2000);

npc.sayNextNoEsc("人类怎么走这么慢啊？是因为没有尾巴吗？", 3002100);


npc.sayNextNoEsc("呃呃, 不行!我要先走了。村子就在眼前, 现在不会再有危险了, 你跟我来吧。沿着这条路简直走就行了。不可以走错哦!那我先走了!", 3002100);



player.setNpcForceMove(3002100, 1, 510, 100);
//npc.setDelay(3000);

npc.sayNextSNoEsc("……自说自话。刚才还拉着我说要一起到村里去，现在又让我自己找过去。唉，最好先跟过去。不能在这里迷路。");

player.scriptProgressMessage("按键盘的方向键[←]和[→] 键，可以移动。");
player.destroyTempNpc(3002100);
player.startQuest(38000, 0);
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
