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
        npc.sayNextNoEsc("现在，身体筋骨差不多舒展开了吧？这种时候还要进一步加强训练强度才能保证锻炼出过硬的基础体力。来吧，继续基础体力的锻炼吧。");
        npc.sayNextNoEsc("这次去#b#m140020200##k消灭#r#o0100133##k试试看。大概消灭#r20只#k就行，将会对你的体力增长大有帮助。快去快去……咦？你有什么话要说吗？");
        npc.sayNextSNoEsc("……为什么消灭的怪兽数量越来越多了？", false);
        npc.sayNextNoEsc("是要越来越多。难道说20只还不够吗？要不消灭100只试试？哦，这还不够，索性不如像林中之城那样，一口气消灭999只怪兽试试……");
        npc.sayNextSNoEsc("不，不用了，这样就够了。", false);
        let sel = npc.askAcceptNoEsc("哎呦哎呦，用不着这么谦虚。我充★分★理解英雄大人渴望赶紧变得厉害起来的心情。真不愧是英雄大人……");
        if (sel == 1) {
                npc.startQuest();
                npc.sayNextSNoEsc("#b(再这么说下去，搞不好真得让我去消灭999这怪兽了，赶紧接任务得了。)#k", false);
                npc.sayNextNoEsc("那就拜托你消灭20只#o0100133#。");
                player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
        } else {
                npc.sayNextNoEsc("#b(我们的英雄，你这是怎么了？)#k");
        }
}
