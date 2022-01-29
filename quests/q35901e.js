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

npc.sayNextENoEsc("#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”#k", 1013358);
npc.sayNextENoEsc("#face1#啊哈，感觉像是某种暗语……下一句话是……", 1013358);
npc.sayNextENoEsc("#face0##b（解读箱子上写着的古代文字。\r\n虽然全都是暗语，但仔细斟酌一下，就能猜到大概的意思。）#k", 1013358);
npc.completeQuest();
player.startQuest(11620, 0, "0");
player.gainExp(16);
player.gainExp(35);
player.gainExp(58);