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

startScript();

function startScript() {
        npc.sayNext("在妖精漫长的历史中，从来没有发生过类似的大事件。现在是战争时期，精灵们都在默默地战斗。精灵的年轻国王啊，请一定把精灵们引向胜利。");

        npc.sayNext("……在忙碌的战争时期，你没有必要再到这里来。本来为了学习新技能，必须接受第二次、第三次试炼，但是现在就省略了吧。");
        let ret = npc.askAccept("我会直接去找你。只要你能找回原来的能力，可以承受国王的力量，我就去唤醒你的能力……我很期待。");
        if (ret == 1) {
                npc.startQuest();
                npc.completeQuest();
                if (player.getJob() == 2300) {
                        player.setJob(2310);
                        player.gainSp(5);
                }
        }
}
