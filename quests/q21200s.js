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
        let sel = npc.askAccept("修炼进展得如何？哟，等级升得这么高了？难怪人们都说济州岛是养马的天堂，金银岛是升级的天堂……对了，现在还不是说闲话的时候。能否麻烦你回岛上来一趟？");
        if (sel == 1) {
                npc.startQuest();
                npc.sayNext("#b保管在#m140000000##k的你的#b#p1201001##k突然出现了奇怪的反应。据说长矛在呼唤自己主人的时候才会发出那样的反应。#b也许有什么事情要转达给你？#k请速回岛上一趟吧。");
        } else {
                npc.sayNext("有很紧急的事情。要是拒绝的话，肯定会后悔的哦？#b有关你长矛的事情#k，也就是有关你的过去。谁知道呢？……说不定这个长矛能够唤醒你的能力？");
        }
}
