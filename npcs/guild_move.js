/*
 * AuroMS MapleStory server emulator written in Java
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
selection = npc.askYesNo("你好。我是负责家族支援工作的蕾雅。为了工作方便，我来到了英雄殿堂，为大家提供帮助。你想到英雄殿堂去处理家族相关事务吗？");
if (selection == 1) {
        npc.sayNext("好的，我马上把你送过去。");
        npc.rememberMap("GUILD_FIELD");
        player.changeMap(200000301, 0);
} else {
        npc.sayNext("想去英雄殿堂的话，请再来找我。");
}