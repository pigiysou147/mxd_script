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
        npc.sayNextSNoEsc("嗡嗡嗡嗡嗡……", false);
        npc.sayNextSNoEsc("#b（#p1201001#在发出嗡鸣声。奇怪，那边的少年是谁？）#k", false);
        npc.sayNextSNoEsc("#b（以前没见过他啊？怎么看起来不太像人类？）#k", false);
        npc.sayNextNoEsc("喂！战神！还听不见我的声音吗？到底听不听得见？唉，烦死了！");
        npc.sayNextSNoEsc("#b（咦？这是谁的声音？怎么听起来像个凶巴巴的少年……）#k", false);
        npc.sayNextNoEsc("唉……哪有这样的主人啊？丢开武器在冰窟里睡了几百年，现在连话都听不懂了……");
        npc.sayNextSNoEsc("你是谁啊？", false);
        npc.sayNextNoEsc("啊，战神？现在听到我的声音了？是我啊，不记得我了？我就是武器#b长矛 #p1201002##k啊？");
        npc.sayNextSNoEsc("#b（……#p1201002#？#p1201001#会说话？）#k", false);
        npc.sayNextNoEsc("不至于吧？这么吃惊？再怎么失忆，总不能连我都忘了吧？太不够意思了！");
        npc.sayNextSNoEsc("不好意思，真的一点都想不起来。", false);
        let ret = npc.askYesNo("说声不好意思就能算了？！几百年来就我一个人孤苦伶仃地，有多寂寞你知道吗？不管怎样，你快点给我想起来！");
        if (ret == 1) {
                npc.sayNextSNoEsc("#b（一口一个自己是#p1201001#、#p1201002#的，还越说越生气了。再这么说下去也不会有啥进展，还是先走到 #p1201000#跟前，好好商量商量。）#k", false);
                npc.completeQuest();
                let mov = npc.askYesNoS("是否想跳过剧情动画？");
                if (mov != 1) {
                        player.changeMap(914090200, 0);
                }
        } else {
                npc.sayNextNoEsc("你这家伙！好歹也要努力颠峰一下吧？");
        }
}
