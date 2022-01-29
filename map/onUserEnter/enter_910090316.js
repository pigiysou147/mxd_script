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
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.removeAdditionalEffect();
npc.setCameraZoom(0, 1000, 0, -45, 200);

player.setMapTagedObjectVisibleEx("light", 0);
//npc.setDelay(500);

npc.setCameraZoom(8000, 1000, 8000, -25, 1850);
player.showTextEffect("#fn???? ExtraBold##fs18#水下世界深海", 1000, 6);
//npc.setDelay(2500);
player.setForcedMove(2, 520);
//npc.setDelay(6500);

npc.sayNextENoEsc("#face3##b（果然把我带到了那个石像所在的地方。\r\n啊，遗物之光好像想让我继续前进。）#k", 1013358);
npc.setCameraZoom(1000, 1500, 1000, 123, 1988);
player.setForcedMove(2, 120);
//npc.setDelay(1500);
player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);
player.setMapTagedObjectVisibleEx("light", 1);
npc.setCameraZoom(0, 1500, 0, 123, 1988);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0##b（感觉到一股强大的能量传到了遗物中。\r\n堕落之力也与之呼应，开始激荡起来。）#k", 1013358);
//npc.setDelay(1000);
player.setLayerBlind(true, 255, 240, 240, 240, 1300, 2);
//npc.setDelay(1600);
//npc.setDelay(500);
player.setLayerOn(500, "00", 0, 0, 1, "Effect/Direction22.img/effect/PF_34job/1", 4, true, -1, false, 0, 0);
//npc.setDelay(1000);

player.showTextEffect("#fn???? ExtraBold##fs35##d果然被挡住了。#k", 2700, 7);
//npc.setDelay(3200);
player.showTextEffect("#fn???? ExtraBold##fs35##d看来可以再现的古代之力就只有这么多。#k", 3900, 7);
//npc.setDelay(6000);
//npc.setDelay(500);
player.showTextEffect("#fn???? ExtraBold##fs35##d到刚才为止……#k", 2700, 7);
//npc.setDelay(3200);

player.setLayerOff(300, "00");
//npc.setDelay(500);

player.setLayerBlind(true, 255, 240, 240, 240, 0, 2);
//npc.setDelay(1200);

//player.setLayerBlind(true, 0, 0, 0, 0, 1000, 0);//npc.setDelay(1400);
//npc.setDelay(500);

npc.sayNextENoEsc("#face0##b（诅咒之印消失了。这是遗物的最后一项考验吗？\r\n但是疑问却越来越重了。）#k", 1013358);
npc.sayNextENoEsc("#face0##b（奇拉……他为什么能重现古代之力呢？\r\n被什么东西挡住了，又是什么意思呢？）#k", 1013358);

npc.sayNextENoEsc("#face0##b（在那个遗迹中……也许可以找到什么线索。\r\n到那里去看看吧。）#k", 1013358);

//npc.setDelay(500);
player.setLayerBlind(true, 255, 0, 0, 0, 500, 2);
//npc.setDelay(500);


player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(910090317, 0);
