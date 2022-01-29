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


let sel = npc.askYesNo("学习群宠技能必须付出一定的金币哟!大约需要:#r20000000金币#k,你是否想学习？");
if (sel == 1) {
        let skillId = getSkillByJob(player.getJob());
        if (player.getSkillLevel(skillId) > 0) {
                npc.sayNext("抱歉，你已经学习了群宠技能了，不需要再次学习!");
        } else if (!player.hasMesos(20000000)) {
                npc.sayNext("您似乎没有那么多的金币哟！在去努力攒钱吧！");
        } else {
                player.loseMesos(20000000);
                player.setSkillLevel(skillId, 1, 1, false);
                npc.sayNext("恭喜,你学习了群宠技能!");
        }
} else {
        npc.sayNext("要学习了群宠技能记得再来找我哦!");
}



function getSkillByJob(jobID) {
        switch (jobID) {
                case 1000:
                        return 10000018;
                case 2001:
                        return 20011024;
                case 2000:
                        return 20000024;
                case 4001:
                        return 40011024;
                case 4002:
                        return 40021024;
                default:
                        return 8;
        }
}
