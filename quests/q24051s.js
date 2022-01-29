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
        npc.sayNextS("虽然这个回答没有点诚意，但是会说话的树也许说得没错。");
        npc.sayNextS("对我而言，和黑魔法师的激战就像是昨天的事情一样，但是对其他人来说，只不过是发生在几百年前，只有在历史书中才能看到的事情而已……");
        npc.sayNextS("用来保护冒险岛世界的力量已经全部失去了。连对付绿水灵都手忙脚乱的我，不能在弱了。");
        npc.sayNextS("情况和以前不同了。之前我的身边有可靠的同伴，但现在什么人都没有……没有人……");
        npc.sayNextS("但是……但是！不能就这样放弃！");
        npc.sayNextS("我必须站起来。因为我是国王，是因为黑魔法师的诅咒而困在冰里的百姓们的国王……！");
        npc.sayNextS("#b国王的词典里没有放弃两个字！");
        npc.sayNextS("不能放弃的话，就必须决定应该怎么做！必须把痛苦的百姓从诅咒中解救出来！只要努力提高力量，就一定可以解开黑魔法师的诅咒！");
        npc.sayNextS("虽然我现在很弱很弱……但只要积累经验，一定可以重新恢复之前的力量。不要着急，一步一步来……先做应该做的事、能做的事。");
        npc.startQuest();
        npc.completeQuest();
}
