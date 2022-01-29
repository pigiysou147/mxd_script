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

startScript();

function startScript() {
        npc.sayNext("双弩精灵，双弩精灵！我想见你！呜呜~虽然我装的很坦然，但我一直害怕我们再也不能见面了！");
        npc.sayNextS("你身体没事吧，迪纳卡？", false);
        npc.sayNext("是的！没事！就身体而言，我自信比任何精灵都要强壮！虽然没有什么自信能像以前那样使用技能，但是没有不舒服的地方！");
        npc.sayNextS("太好了……", false);
        let ret = npc.askAccept("当然了！很棒吧！独立生活在已经历数百年时间的世界！那是多么苦闷的事情呀！呜哇！从现在开始，就让迪纳卡我来陪伴你吧！");
        if (ret == 1) {
                npc.startQuest();
        }
}
