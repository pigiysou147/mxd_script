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

endScript();

function endScript() {
        npc.sayNext("你来找我，是想成为弓箭手吗？嗯？好像不是的样子……熟悉的面孔……你……你……！");
        npc.sayNext("双弩精灵！");
        let string = ["UI/tutorial/mersedes/0/0"];
        npc.sayImage(string);
        npc.sayNext("你还活着啊！我就知道你会活下来的！我一直这么坚信着！坚信....身为王的你绝不会死在黑魔法师的手中！");
        npc.completeQuest();
}
