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
npc.sayNext("请稍等下。在你出发前往<神秘河畔>之前，我有话要对你说。");
npc.askMenu("你还记得这里的一位名叫#b卡奥#k的神官吗？\r\n\r\n#b#L0#记得#l");
npc.sayNext("#fNpc/3003131.img/stand/0#\r\n那个孩子最终还是没能查清楚自己的真实身份。之前为了查出自己的真实身份，他付出了很多努力，不惜做任何事情。");
npc.askMenu("我们神官随着艾尔达的异常流动，前往现在之门另一边时，那个孩子也一起消失了。\r\n我试图想挽留那个孩子，可是已经太迟了。\r\n\r\n#b#L0#我这就去现在之门的另一边找他#l");
npc.askMenu("请等一下。神秘河畔的怪物出生在艾尔达密度极高的河水中...\r\n\r\n你必须拥有#e<神秘力量>#n，才能发挥出所有的力量。\r\n\r\n#b#L0#<神秘力量>？#l");
npc.sayNext("百闻不如一见，请你先去试着狩猎那个地方的怪物吧。在那之后，我会重新去找你的。\r\n\r\n#b(前往现在之门另一边的神秘河畔，试着狩猎第一个见到的怪物，然后再获得旁观者的帮助吧。)#k");
npc.startQuest();