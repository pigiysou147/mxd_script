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
        npc.sayNextNoEsc("与黑魔法师战斗的英雄们……有关他们的信息几乎什么都没有留下。即使在预言书中也只有记载5位英雄，也没有任何有关他们外貌的描述。你还能记起来些什么吗？");
        npc.sayNextSNoEsc("一点都想不起来了……", false);
        npc.sayNextNoEsc("果然，黑魔法师的诅咒果然很厉害。不过，作为英雄的你肯定和过去应该还会存在某个联系点。会是什么呢？武器和衣服是不是在战斗中都遗弃了呢……啊，对了，应该是#b武器#k！");
        npc.sayNextSNoEsc("武器？", false);
        npc.sayNextNoEsc("以前，我们在冰窖中挖掘英雄的时候，发现过一个巨大的武器。我们猜测可能是英雄使用的武器，所以就放在村子的中央。你来来去去的时候没看到吗？ #b#p1201001##k…… \r\r#i4032372#\r\r大概是这个样子……");
        npc.sayNextSNoEsc("确实，那个巨大的战斧在村子里，看起来是有些奇怪。", false);
        let sel = npc.askAcceptNoEsc("没错，就是那个东西，据说英雄的武器是会挑选主人的，如果你就是使用巨大的战斧的英雄，那么在抓住巨大的战斧的刹那，武器应该会有反映的。快去点击#b巨大的战斧试试#k。");
        if (sel == 1) {
                npc.startQuest();
                npc.completeQuest();
                npc.sayNextNoEsc("如果#p1201001#有反映，就说明你是使用过巨大战斧的英雄，是#b战神#k。");
                player.showReservedEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm");
        } else {
                npc.sayNextNoEsc("你就不想去试试吗？你不好奇自己的谁吗？");
        }
}
