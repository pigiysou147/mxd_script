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
        npc.sayNextS("……到底是怎么回事？我的等级……怎么这么低？只有10级！10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！");
        npc.sayNextS("……啊！不是做梦啊！难道是黑魔法师的诅咒影响造成的！");
        player.showAvatarOriented("Effect/Direction5.img/mersedesQuest/Scene2");
        player.showReservedEffect("Effect/OnUserEff.img/questEffect/mercedes/q24040");
        npc.completeQuest();

}
