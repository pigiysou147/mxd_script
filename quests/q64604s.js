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

npc.sayNextENoEsc("#face1#我还没来得及自我介绍呢，我是这个村子的建筑家，我叫凯尼斯，很高兴见到你！ ", 9400922);
npc.sayNextENoEsc("#b我也很高兴见到你，请多多指教！", true);
npc.sayNextENoEsc("#face0#没想到居然会有这么有名的勇士来到我们村子，真让人感到神奇又安心。", 9400922);
npc.sayNextENoEsc("#face0#我在定居这里之前，也是冒险岛世界的冒险家。虽然已经是很久之前的事情了……", 9400922);
npc.sayNextENoEsc("#face0#以前的事情之后再说，你怎么会搬到这里来？这个房屋已经空了很久了，没想到会有人搬来呢。", 9400922);
npc.sayNextENoEsc("#face3#哈哈，我们村子还是挺有名的吧？是吧？哈哈哈", 9400922);


npc.sayNextENoEsc("#b是啊，是的……", true);
npc.sayNextENoEsc("#face0#这个房屋看起来有点窄啊，你住得还习惯吗？", 9400922);
npc.sayNextENoEsc("#face1#如果需要我的帮助，你可以随时来找我。别看我这样，这村子里的房屋大部分都是我建的呢！ ", 9400922);

npc.sayNextENoEsc("#b真的吗？", true);
npc.sayNextENoEsc("#face1#当然是真的了，呵呵", 9400922);
npc.sayNextENoEsc("#b谢谢！", true);
npc.sayNextENoEsc("#face0#那就下次再见吧。", 9400922);
npc.completeQuest();
player.destroyTempNpc(9400922);