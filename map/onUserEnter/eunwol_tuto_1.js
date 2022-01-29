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
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
player.setVansheeMode(true);
//player.setForcedInput(0);

player.spawnTempNpc(2159439, 1210, 10, 1);
player.setNpcSpecialAction(2159439, "summon", 0, false);
player.spawnTempNpc(2159467, 830, 10, 0);
player.setNpcSpecialAction(2159467, "summon", 0, false);
//npc.setDelay(1000);
player.setInGameCurNodeEventEnd(true);

npc.sayNextNoEsc("……我从一开始就不喜欢你。", 2159439);
npc.sayNextNoEsc("你那种圆滑的性格我也很讨厌。", 2159467);
npc.sayNextNoEsc("我们之间唯一的共同点就是都不喜欢对方。但是弗里德却还是把我们一起派了过来，真不知道他在想些什么。那个家伙，难道是遇到了什么心情不好的事情吗？你说呢？", 2159439);
//npc.setDelay(500);

player.setVansheeMode(false);
//npc.setDelay(2000);
player.showAvatarOriented("Effect/BasicEff.img/Summoned");
npc.sayNextNoEsc("这个嘛，我也不太清楚。不过如果一直在这里浪费时间的话，弗里德可能真的要发火了。", 2159467);
npc.sayNextNoEsc("弗里德发火？那一定很有趣。", 2159439);
npc.sayNextSNoEsc("不过很可能永远都不会见到。我先进去了。里面散发出来的气息很不寻常。");
//player.setForcedInput(1);
//npc.setDelay(3000);
//player.setForcedInput(0);
//npc.setDelay(500);
player.setVansheeMode(true);
//npc.setDelay(1000);
npc.setCameraMove(false, 100, 1000, 18);
//npc.setDelay(91);

npc.sayNextNoEsc("……那就先聊到这里。再见面的话，让我们直接问问弗里德好了。不要在这里浪费时间。", 2159439);
//npc.setDelay(500);
player.setNpcSpecialAction(2159439, "teleportation", 0, true);
//npc.setDelay(840);
player.destroyTempNpc(2159439);
//npc.setDelay(500);
player.setInGameCurNodeEventEnd(true);
player.destroyTempNpc(2159467);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);
player.changeMap(927030010, 0);
