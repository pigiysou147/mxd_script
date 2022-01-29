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

npc.sayNextENoEsc("#face1#桌子怎么样？是不是很坚固？", 9400923);
npc.sayNextENoEsc("#b是的，太谢谢你了。", true);
npc.sayNextENoEsc("#face0#嗯嗯，这是我特！别！给你做的，你当然要感谢我了。", 9400923);
npc.sayNextENoEsc("#face0#如果弄坏了，就拿来找我。我会给你特！别！售后服务的。", 9400923);
npc.sayNextENoEsc("#b那正好，现在这个似乎有点歪……", true);
npc.sayNextENoEsc("#face2#哪里？哪里？明明就很平啊！", 9400923);
npc.completeQuest();
player.destroyTempNpc(9400923);