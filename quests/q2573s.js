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
        npc.sayNext("你好？你不觉得今天是旅游的好天气吗？我看你很陌生，是新开始冒险的冒险家吧。我是开往冒险岛的这条船的船长，我叫斯奇普。见到你很高兴。");
        let hurt = npc.askAccept("还不是出航时间。现在正在做出航准备，你可以在船上看看四处看看，顺便等一下。");
        if (hurt == 1) {
                npc.startQuest();
                npc.completeQuest();
                player.changeMap(3000000, 0);
        } else {
                npc.sayNext("你在这里还有什么事情要做吧？");
        }
}
