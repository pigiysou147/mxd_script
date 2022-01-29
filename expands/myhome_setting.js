/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

let n = player.getIntQuestRecordEx(500773, "manager");
let npcId = 9400920 + n;
let old = player.getWorldShareRecord(500763, "name");
if (old == null) {
        old = player.getName() + "'的我的小屋";
}
let menu = "#face0#我能帮你做什么？\r\n\r\n#L0##b查看我的小屋信息#k#l\r\n#L1##b变更我的小屋名称#k#l\r\n#L2##b变更访问权限设定#k#l\r\n#L99##b我的小屋说明#k#l";
let sel = npc.askMenuA(menu, npcId);
switch (sel) {
        case 0:
                let text = "#face0#我的小屋名称 : #b" + old;
                text += "#k\r\n最多访问人数 : #b";
                text += "#k\r\n收到的点赞数 : #b";
                text += "#k\r\n最多访问人数 : #b";
                text += "#k\r\n购买剩余时间 : #b";
                text += "#k\r\n\r\n#L0##b确认#k#l";
                npc.askMenuA(text, npcId);
                break;
        case 1:
                let name = npc.askTextE("#face0#当前的我的小屋名字为 #b" + old + "#k。你要变更为什么名字呢？\r\n\r\n ", "", 4, 30, npcId);
                player.updateQuestRecordEx(500763, "name", name);
                player.updateWorldShareRecord(500763, "name", name);
                npc.sayNextE("#face1#我的小屋的名字已变为#b" + name + "#k！", npcId);
                break;
        case 2:
                npc.sayNextE("#face0#当前不支持！", 9400920);
                break;
        case 99:
                while (true) {
                        infos();
                }
                break;
}


function infos() {
        let qSel = npc.askMenuA("#face0#你想知道什么？\r\n\r\n#L0##b我的小屋是？#k#l\r\n#L1##b权限#k#l\r\n#L2##b家具#k#l\r\n#L3##b邀请/访问#k#l\r\n#L4##b管家#k#l", npcId);
        switch (qSel) {
                case 0:
                        npc.sayNextE("#face0#我的小屋是可以自己亲手装饰的，专属于我的珍贵空间！\r\n请利用各种各样的#b建筑样式#k和#b家具#k来打造专属于我的小屋吧！", npcId);
                        npc.sayNextE("#face0#我的小屋是#b世界中所有角色共享#k的空间。一旦装饰好之后，不仅世界中的所有角色都能使用，而且还能邀请其他人来到我的小屋。", npcId);
                        break;
                case 1:
                        npc.sayNextE("#face0#点击我的小屋菜单的#b#i3801390##t3801390##k按键，就能更改我的家的#b建筑样式#k和#b建筑外形#k。", npcId);
                        npc.sayNextE("#face0#在选择自己喜欢的屋顶或者墙，窗户的建筑外形后，点击#b应用#k按键，就能立刻应用外形。请综合各种建筑外形，创造出专属", npcId);
                        npc.sayNextE("#face0#变更#b建筑样式#k，就能改变整个家的风格和形态！点击你喜欢的建筑图纸后，选定建筑外形，然后点击#b确认#k按键就可以了。", npcId);
                        npc.sayNextE("#face0#但是，在选择新的图纸时，需要重新翻新建筑，所以需要#b1分钟#k的完成时间，另外请注意，所有家具都会被取消设置！", npcId);
                        break;
                case 2:
                        npc.sayNextE("#face0#点击我的小屋菜单的#b#i3801391##t3801391##k按键，打开#b家具保管箱#k时，就能查看拥有的家具。\r\n请利用收集到的各种家具来装饰自己的家吧！", npcId);
                        npc.sayNextE("#face0#在#b家具保管箱#k中选择喜欢的家具后，点击#b放置#k按键，或者点击我的小屋菜单的#b#i3801392##t3801392##k按键，进入#b放置家具#k模式。", npcId);
                        npc.sayNextE("#face0#你可以在#b放置家具#k模式自由地放置你喜欢的家具。请不要忘记，挂在墙上的家具和放在地上的家具是可以重叠放置的！", npcId);
                        npc.sayNextE("#face0##b点击#k特定家具或者按下#b空格#k键就能更改#b特别功能#k。亲自去探寻一下每个家具都隐藏有什么样的功能吧，是不是很有趣？s", npcId);
                        break;
                case 3:
                        npc.sayNextE("#face0#可以邀请好友或者访客进入自己精心装饰的我的小屋。通过我的小屋菜单的#b#i3801393##t3801393##k按键，输入自己想要邀请的角色名字吧。", npcId);
                        npc.sayNextE("#face0#在冒险岛世界中查看#b角色信息#k，或者#b右键点击角色#k就能访问该角色的我的小屋。\r\n而且在#b好友名单#k或者#b聊天窗口#k #b右键点击角色名字#k也能访问我的小屋！", npcId);
                        npc.sayNextE("#face0#你是不是偶尔也想去全新的地方看看？点击我的小屋菜单的#b#i3801394##t3801394##k按键，就能随机访问其他玩家精心装饰的我的小屋哦！", npcId);
                        npc.sayNextE("#face0#但是，请注意每个我的小屋都有同时可访问人数的上限，有的玩家还会禁止访客的访问哦！", npcId);
                        break;
                case 4:
                        npc.sayNextE("#face0#精心装饰的我的小屋，在#h0#出门的时候，需要人来管理吧？这就是我们这样的#b管家#k存在的理由。", npcId);
                        npc.sayNextE("#face0#管家会在我的小屋中待很长时间，\r\n#b1. 每天提供有用的增益或者\r\n2. 购买新的家具又或者\r\n3.为了迎接访客而做准备#k\r\n等，承担着多种角色。", npcId);
                        npc.sayNextE("#face0#通过#b管家的帮助增益#k，每天可以获得一次增益，可以对在冒险岛世界的生活起到帮助。虽然可以选择你想要的增益种类，但是强度和持续时间都会根据#b管家的能力#k而产生变化。", npcId);
                        npc.sayNextE("#face0##b家具选购#k是为了获得新家具的管家的重要任务。为了让#h0#的家变得更加美丽和丰富，肯定需要更多的家具吧？\r\n但是家具的下单，制作，购买都需要不少时间，需要经常查看选购情况哦。", npcId);
                        npc.sayNextE("#face0#为了迎接#b访客#k，需要管家的帮助。需要和管家讨论并确定是否允许访客的访问，管家的能力还将决定可以同时访问的人数。", npcId);
                        npc.sayNextE("#face0#虽然这能力属于不起眼的管家，但是否能够成长为更加熟练的样子，很大程度取决于#h0#能否给予不断的关心。\r\n如果每天都#b和管家对话#k，关心管家，管家就会更加努力，能力也会成长得更快！", npcId);
                        break;
        }
}