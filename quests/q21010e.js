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

npc.sayNext("我们一直试图在冰层深处寻找传说中的英雄，不过从没想过真能找到你！预言果然没有错！#p1201000#做出了正确的选择！既然英雄重新回来了，我们就没有必要再惧怕黑魔法师了！");
npc.sayNext("哎呦，我怎么抓着您聊了这么久？实在是太高兴了……其他的企鹅估计也会像我这样的。虽然知道你很忙，不过在回村子的路上，#b还是尽量和其他的企鹅搭搭话吧#k。有大英雄和他们说话，他们肯定会惊讶得要死！\r\n\r\n#fUI/UIWindow.img/Quest/reward# \r\n#i2000022# #t2000022# 5个\r\n#i2000023# #t2000023# 5个");
npc.sayNext("你升级了吗？不知道你有没有得到技能点数？在冒险岛世界，每升1级就能获得技能点数3。按#bK键#k，打开技能栏就可确认。");
npc.completeQuest();
player.gainExp(16);
player.gainItem(2000022, 5);
player.gainItem(2000023, 5);
       