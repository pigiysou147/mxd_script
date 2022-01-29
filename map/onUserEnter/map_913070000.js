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
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);


player.scriptProgressMessage("林伯特的杂货店");
//npc.setDelay(500);

player.scriptProgressMessage("冒险岛历XXXX年3月4日……");
//npc.setDelay(1000);

player.setUserEmotionLocal(6, 10000);
player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/0", 2000, 0, -100, true, -100, false, 0);
//npc.setDelay(2000);

player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/1", 2000, 0, -100, true, -100, false, 0);
//npc.setDelay(2000);

player.setUserEmotionLocal(4, 8000);
player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/2", 3000, 0, -100, true, -100, false, 0);
//npc.setDelay(3000);

//player.setForcedInput(1);
//npc.setDelay(800);

//player.setForcedInput(0);
player.setUserEmotionLocal(6, 1000);
player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/3", 3000, 0, -100, true, -100, false, 0);
//npc.setDelay(2000);

//npc.setDelay(1000);

//player.setForcedInput(1);
//npc.setDelay(1800);

//player.setForcedInput(0);
npc.sayNextSNoEsc("你……你找我有事吗？");

npc.sayNextNoEsc("你叫什么名字？", 1106000);

npc.sayNextSNoEsc("我……没有名字。你就叫我#b“小孩”#k好了。林伯特大叔就是这么叫我的。你想要什么东西呢？");

npc.sayNextNoEsc("家人……没有家人吗？", 1106000);

npc.sayNextSNoEsc("我没有家人……#b\r\n(这个人是谁，为什么会问我这种问题？)#k\r你不想买东西的话……我……");

npc.sayNextNoEsc("你知道光之骑士库洛姆吗？", 1106000);

npc.sayNextSNoEsc("库洛姆？嗯……我……#b\r\n(库洛姆是谁？这个人为什么要问我这种事情呢？)");

npc.sayNextNoEsc("#e小孩！\r我让你清理箱子，你在那跟谁聊天呢！！", 1106002);

npc.sayNextSNoEsc("是……是！！林伯特大叔！我正想清理呢！\r\n嗯，那我……就去……做事了……");

player.completeQuest(20030, 0);
player.setUserEmotionLocal(6, 2000);
player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/4", 2000, 0, -100, true, -100, false, 0);
//npc.setDelay(2000);

npc.sayNextSNoEsc("那……那个人去哪儿了？\r\n对了！不想被林伯特大叔骂的话，得赶紧把箱子清理干净！");

//player.setForcedInput(2);
//npc.setDelay(800);


player.setInGameDirectionMode(false, true, false, false);
player.changeMap(913070001, 0);

 