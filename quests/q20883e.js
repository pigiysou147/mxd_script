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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

endScript();


function endScript() {
        npc.sayNext("#h0#，你守护的那本书是非常重要的东西，绝对不能落入黑魔法师之手……虽然你的力量还比较弱，但你和敌人战斗的勇气令人赞叹。具体内容，我现在还不方便告诉你。");
        let ret = npc.askAccept("解决了这件事情，女皇赐予了你新的爵位，你现在想接受爵位吗？");
        if (ret == 1) {
                if (player.gainItem(1142068, 1)) {
                        if (player.getJob() == 1110 || player.getJob() == 1210 || player.getJob() == 1310 || player.getJob() == 1410 || player.getJob() == 1510) {
                                player.setJob(player.getJob() + 1);
                                player.gainSp(5);
                        }
                        npc.completeQuest();
                        npc.sayNext("#h0#，我任命你为高级骑士。从现在开始，你就是冒险骑士团的高级骑士了。随着地位的提高，你必须承担更困难的任务。希望你能继续努力。");
                } else {
                        npc.sayNext("背包装备栏不足！请清理你的装备栏！");
                }
        } else {
                npc.sayNext("我猜你还没有准备好！");
        }
}
