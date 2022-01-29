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
        let sel = npc.askAccept("开始基础体力锻炼吧？准备好了？再确认一下剑是否装备好了？技能和药水是否已经托到了快捷栏中？");
        if (sel == 1) {
                npc.startQuest();
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
        } else {
                npc.sayNext("还没做好准备吗？那么准备好后再来跟我说一声。");
        }
}
