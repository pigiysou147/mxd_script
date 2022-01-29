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

let ret = npc.askYesNoNoEsc("很高兴能在这里见到你……我来把你变成飞侠吧。做好心理准备了吗？临阵退缩的人，不配成为飞侠。");
if (ret == 1) {
    npc.completeQuest();
    player.gainEquipInventorySlots(4);
    player.gainUseInventorySlots(4);
    player.gainSetupInventorySlots(4);
    player.gainEtcInventorySlots(4);
    player.gainCashInventorySlots(4);
    player.setJob(400);
    player.resetStats(4, 4, 4, 4);
    player.gainSp(3);
    if (player.canGainItem(1142107, 1)) {
        player.gainItem(1142107, 1);
    }
    if (player.canGainItem(1332063, 1)) {
        player.gainItem(1332063, 1);
    }
    if (player.canGainItem(1472000, 1)) {
        player.gainItem(1472000, 1);
    }
    if (player.canGainItem(1472063, 1)) {
        player.gainItem(1472063, 1);
    }
    if (player.canGainItem(2070008, 800)) {
        player.gainItem(2070008, 800);
    }
    npc.sayNextNoEsc("成为飞侠的你已然变得更强。并且你也有了作为飞侠可使用的技能, 那就赶紧拿出来试一试吧。");
    npc.sayNextNoEsc("另外, 你的能力值也得进行适当修改, 以便更加适合飞侠的特点。显然对于飞侠而言, LUK才是核心属性, 而DEX为补助属性。若不清楚的话, 不妨使用#b自动分配#k也好。");
    npc.sayNextNoEsc("为了纪念你已成为飞侠, 我还将适当给你增加背包空间。你可以收集更多的武器和防具, 让自己变得更加强大。");
    npc.sayNextNoEsc("对了，有一点需要注意。虽然新手的时候没关系，但是成为飞侠的瞬间开始，必须小心不要死掉……万一死了的话，之前积累的经验值可能会受到损失……");
    npc.sayNextNoEsc("我能教你的只有这些……我送了你一些装备，现在你去锻炼自己，让自己变得更强吧。");
} else {
    npc.sayNextNoEsc("哎呀……没想到你这么胆小。难道你失去成为飞侠的自信了吗？");
}
