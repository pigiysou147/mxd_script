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

endScript();

function endScript() {
        npc.sayNext("你拿了3个#t4033670#来吗?");
        npc.sayNext("呵呵?我听说了。考试合格了。我现在要给你的东西，是我亲手打造的椅子。好好使用吧。疲劳的时候坐着休息是最好的了。HP会快速恢复的。放在背包的设置栏里，去确认一下吧。");
        player.gainItem(3010060, 1);
        player.loseItem(4033670);
        player.gainExp(840);
        npc.completeQuest();
}
