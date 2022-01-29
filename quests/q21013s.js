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
        npc.askMenuNoEsc("英、英雄大人……我一直都很想见你。 \r\n#b#L0#（做腼腆状。）#l");
        let sel = npc.askAcceptNoEsc("我从很久以前就想送英雄大人一件礼物……既然今天遇见了英雄，不知英雄能否赏脸收下我这份薄礼？");
        if (sel == 1) {
                npc.startQuest();
                npc.sayNextNoEsc("制作礼物的材料放在这附近的箱子里了。劳烦英雄大人找到这个箱子，把#b#t4032309##k和#b#t4032310##k带来给我。然后我就能立刻把礼物做好。");
                player.showHireTutorMsg(18);
        } else {
                npc.sayNextNoEsc("对于英雄大人而言肯定是有帮助的。请你一定收下。");
        }
}
