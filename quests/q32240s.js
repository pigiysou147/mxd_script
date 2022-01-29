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
    npc.sayNextNoEsc("#h0#, 我有东西要交给你。这是一本#b冒险之书#k, 它可以记录你日后在冒险岛世界旅行过程中所经历的事情。在这里可以记录将要发生的只属于你的故事。");
    let ret = npc.askYesNoNoEsc("怎么样，要领取#b冒险之书#k吗？");
    if (ret == 1) {
        let trueJobGrade = parseInt(player.getJob() / 100);
        npc.startQuest(trueJobGrade);
        let job = "";
        switch (trueJobGrade) {
            case 1:
                job = "战士";
                break;
            case 2:
                job = "魔法师";
                break;
            case 3:
                job = "弓箭手";
                break;
            case 4:
                job = "飞侠";
                break;
            case 5:
                job = "海盗";
                break;
        }
        npc.sayNextNoEsc("给你......这本冒险之书正适合你这名" + job + "......");
        npc.sayNextNoEsc("详细内容你可以慢慢查看。......");
        npc.sayNextNoEsc("虽然这条路并不平坦, 但我希望即将启程的你可以尽情享受这次冒险之旅。");
    }
}
