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
        npc.sayNext("好了，说明到这里就告一段落，我们要进入下一阶段了。下一阶段是什么？刚才我已经说过了。就是不断的磨练自己直到你拥有足以战胜黑魔法师的实力。");
        npc.sayNext("虽然在几年前你确实是英雄，但这毕竟是很久以前的事情了。就算没有黑魔法师的诅咒，在冰块里封冻了那么久，身体筋骨什么的也没那么灵活了吧？首先要做些准备活动。想知道是怎么样的准备活动？");
        let sel = npc.askAccept("身体是革命的本钱。英雄也要从基本体力开始训练！……那句话你也知道吧？当然要从#b 基本体力锻炼#k开始练起……啊，你可能不记的了。不过也没关系。尝试一下你就明白了。现在就开始基础体力锻炼吧？");
        if (sel == 1) {
                npc.startQuest();
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
        } else {
                npc.sayNext("还没做好准备吗？那么准备好后再来跟我说一声。");
        }
}
