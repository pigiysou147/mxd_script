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
 * Admits players into dragonRider party quest.
 *
 * @author Jackson
 */

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = 130;
let maxLevel = 300;
let maxenter = 5;
let PQLog = "dragon_rider";

let sel = npc.askMenu("#e<组队任务：御龙魔>#n\r\n\r\n年轻人，你能不能帮我做件事？麻烦你去消灭搅乱神木村平静生活的御龙魔吧。\r\n#b#L0# 1. 我要进入天渡。（130以上/2名以上）#l\r\n#L1# 2. 我要寻找一起组队的同伴。#l\r\n#L2# 3. 我想听介绍。#l\r\n#L3# 4. 我想知道今天的剩余挑战次数。#l\r\n#L4# 5. 我想学习#r[飞翔]#b技能。#l");
switch (sel) {
        case 0:
                npc.sayNext("如果你要挑战一下，我将会把你送到天渡……");
                let skillId = (player.getJob() * 10000) + 1026;
                if (player.getSkillLevel(skillId) > 0) {
                        npc.rememberMap("RETURN_MAP");
                        player.changeMap(240080000, 0);
                } else {
                        npc.say("对不起,没有学习了[飞翔]技能是无法飞翔蓝天的！");
                }
                break;
        case 1:
                npc.say("请向周围的朋友们请求组队。使用寻找组队(快捷键O)功能，可以在任何时间任何地点寻找组队。敬请参考。");
                break;
        case 2:
                npc.say("#e<组队任务：御龙魔>#n\r\n\r\n前往#b<天空之门 >#k，搞清楚#r御龙魔#k的真实身份吧。使用#b飞翔#k技能在天空中飞翔，消灭飞龙并进行追踪，就可以找到御龙魔。\r\n - #e等级#n：130级以上 \r\n - #e规定时间#n：30分钟\r\n - #e参加人员#n：3～6名\r\n - #e参加条件#n：学习飞翔技能");
                break;
        case 3:
                let pqtry = maxenter - player.getPQLog(PQLog);
                npc.say("今天剩余挑战次数是#r" + pqtry + "次#k.");
                break;
        case 4:
                let ret = npc.askYesNo("学习[飞翔]技能必须付出一定的金币哟!大约需要:#r2000000#k,那么你想现在就学习么?");
                if (ret == 1) {
                        let skillId = (player.getJob() * 10000) + 1026;
                        if (player.getSkillLevel(skillId) <= 0) {
                                if (player.hasMesos(2000000)) {
                                        player.loseMesos(2000000);
                                        player.setSkillLevel(skillId, 1, 1, false);
                                        npc.say("恭喜,你学习了[飞翔]技能!");
                                } else {
                                        npc.say("您似乎没有那么多的金币哟！在去努力攒钱吧！");
                                }
                        } else {
                                npc.say("你已经获得了[飞翔]技能了!不需要重新再学习了。");
                        }
                }
                break;
}
