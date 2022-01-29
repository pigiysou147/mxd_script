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
npc.sayNext("您好。冒险岛的勇士大人。今日也托您的福，冒险岛世界依旧维持着和平呢");
let ret = npc.askAccept("为了像您一样的勇士，我想介绍一些可以帮的上您的新同伴，可以吗？");
if (ret == 1) {
    npc.sayNext("很久以前，在冒险岛世界上，有一群随着勇士们一起奋战的伙伴。而其中有部分勇士透过与特定怪物的情感交流来成为生死与共的同伴。");
    npc.sayNext("大家都把这些伙伴称为 #b怪怪#k。虽然有一阵子没有怪怪继续与勇士们一起冒险了，但我感觉到您身上有一些特别的气息。如果是您的话，说不定能召唤怪怪呢。");
    npc.sayNext("#i3801009#\r\n 召唤怪怪的方法是与怪物战斗后获得' 怪怪卡牌包 '，使用相关道具时会出现怪物卡片。只要点击使用卡片，相关卡片会登录在怪怪图鉴里，这时就能在图鉴上召唤相关怪怪。");
    npc.sayNext("怪怪图鉴可随时透过左侧的 #b游戏内容提醒图示#k #i3801007##i3801008# 来开启。");
    npc.startQuest();
    npc.completeQuest();
}
