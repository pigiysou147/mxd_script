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

npc.sayNext("你好，#b#e#h0##n#k！\r\n我想为来自#e#b冒险岛世界#k#n的勇士提供一些帮助！");
npc.sayNext("你知道#i2030059##e#b[回城卷轴]#k#n吗？");
npc.sayNext("#e#b[回城卷轴]#k#n\r\n是可以从你当前所在位置移动到#r#e最近的村庄#k#n的道具。\r\n在狩猎的过程中想要回到村庄时使用，可以节约走路的时间，因此是非常有用的道具。");
npc.sayNext("#e#r使用之后会立即移动#k#n到村庄，并消耗#e#r一个#k#n回城卷轴。\r\n此外，在部分#e#r无法传送的地区#k#n无法使用回城卷轴。希望你能记住这些。");
npc.sayNext("最后，#b[回城卷轴]#k#n可以在附近村庄的#b#e杂货商人#n#k那里购买。");
let ret = npc.askYesNo("现在我可以送你一些#b[回城卷轴]#k。\r\n你想现在领取#i2030059##e#b10个[回城卷轴]#k#n吗？");
if (ret == 1) {
        if (player.canGainItem(2030059, 10)) {
                player.gainItem(2030059, 10);
                npc.completeQuest();
                npc.sayNext("#i2030059##e#b10个[回城卷轴]#k#n已经送给你了");
                npc.sayNext("#e#b#h0##k#n，希望在冒险的时候能对你有用！");
        }else {
                 npc.sayNext("想领取#i2030059##e#b[回城卷轴]#k#n的话，请现在整理下背包吧。");
        }

} else {
        npc.sayNext("想领取#i2030059##e#b[回城卷轴]#k#n的话，请点击头顶上的灯泡。");
}
