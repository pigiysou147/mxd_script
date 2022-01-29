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

npc.startQuest();
if (!player.gainItem(2672016, 1)) {
        player.gainParcel(2672016, 1, "背包不足，以邮件发送！");
}
npc.sayNextENoEsc("#face2#啦啦！我从艾丹那里拿到了桌子！还是免费的！", 9400921);

npc.sayNextENoEsc("#face0#嗯……虽然有点小~问题，但不是不能用。", 9400921);

npc.sayNextENoEsc("#face1#我们也从米兰达的跳蚤市场买来了钟！", 9400920);
npc.sayNextENoEsc("#face1#正好！那就把桌子和时钟都放置一下吧？", 9400921);
npc.sayNextENoEsc("#face1#对了，墙上的家具和地上的家具是能够重叠的。这样就能把家里布置得更好了吧？", 9400921);
