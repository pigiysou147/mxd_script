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

startScript();

function startScript() {
        npc.sayNext("#h0#，这是……");
        npc.sayNextS("啊……这是南哈特让我交给你的冒险岛骑士团活动报告书……", false);
        npc.sayNext("呵呵，南哈特是这么说的？这是推荐书。他说这段时间你比任何人都努力，变强了不少，还有他说你为了骑士团尽了自己的全力，内容就是这些。");
        npc.sayNextS("嗯？……南哈特大人……", false);
        let ret = npc.askAccept("我认可你这段时间来的努力、成就和功劳，我决定授予你新的职位，希望你能接受");
        if (ret == 1) {
                if (player.getJob() == 1111 || player.getJob() == 1211 || player.getJob() == 1311 || player.getJob() == 1411 || player.getJob() == 1511) {
                        player.setJob(player.getJob() + 1);
                        player.gainSp(5);
                }
                npc.startQuest();
                npc.completeQuest();
                npc.sayNext("#h0#，我任命你为高级骑士。从现在开始，你就是冒险骑士团的高级骑士了。随着地位的提高，你必须承担更困难的任务。希望你能继续努力。");
        } else {
                npc.sayNext("我猜你还没有准备好！");
        }
}
