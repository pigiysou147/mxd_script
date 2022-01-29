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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNext("(哔哩哔哩…哔哔…)");
        npc.sayNextS("嗯？这鸟是从哪里忽然跑出来的？", false);
        npc.sayNext("(哔哩哩。哔哔， 哔哩哩哩…)");
        npc.sayNextS("难道我有听得懂小鸟说话的能力吗？！好像在叫我跟着他走…等待真是无聊，在奇赞回来前稍微跟去看看吧？", false);
        npc.startQuest();
        player.gainExp(57);
        npc.completeQuest();
        player.changeMap(130030104, 0);
}
