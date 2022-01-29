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
        npc.sayNext("这是为了欢迎新加入的骑士团员而举行的欢迎会。嗯，在哪儿呢？我想介绍个人给你认识。修炼教官奇库在哪儿呢？这里人太多，不太容易找到……");
        npc.sayNext("请看画面左上方。点击小地图UI右侧的NPC按钮，会显示该地图上的NPC名字。请点击其中的奇库。那样的话，小地图上就会用箭头显示奇库的位置。请你找到奇库，去和他打个招呼。");
        npc.startQuest();
}
