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

npc.sayNextENoEsc("#b艾尔宾！艾米！你们听到凯尼斯的话了吗？", true);
npc.sayNextENoEsc("#b难道……他能帮我建个更大的房屋吗？", true);
npc.sayNextENoEsc("#face3##h0#……你的眼睛怎么突然开始放光了……？", 9400920);
npc.sayNextENoEsc("#face1#虽然我没听到详细的内容，不过如果你想要更大的房屋，那在这个村子里能够帮你的人就只有凯尼斯了。", 9400921);
npc.sayNextENoEsc("#face1#凯尼斯的家一直对居民们敞开，你要是好奇，就去找他吧？", 9400920);
npc.sayNextENoEsc("#b你能和我一起去吗？", true);


npc.sayNextENoEsc("#face2#当然了！", 9400921);
npc.sayNextENoEsc("#face2#当然了~只要你给我小费，呵呵", 9400920);
npc.sayNextENoEsc("#face1#我开玩笑的，#h0#，快走吧？", 9400920);
npc.startQuest();
player.startNavigation(871200000, 0, "out00", 0);