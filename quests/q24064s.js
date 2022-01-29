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
        npc.sayNext("双弩精灵！");
        npc.sayNextS("你身体没事吧，阿斯迪拉？", false);
        npc.sayNext("是的！还好我这个老太婆没什么地方不舒服，我很健康！虽然力量变弱了，但是没问题！");
        npc.sayNextS("太好了……。菲利乌斯和迪纳卡全部都很结实，但是我很担心阿斯迪拉你。", false);
        npc.sayNext("多谢国王陛下的担心，我没事。呵呵呵……国王陛下一个人先醒过来，一定经历了不少事情吧？");
        npc.sayNextS("嗯……但是没遇到什么困难，", false);
        let ret = npc.askAccept("你小小年纪就登上了王位，甚至还见过黑魔法师，你经历的苦难让你看起来成熟稳重.....看来磨炼诗人成长这句话果真没错啊。");
        if (ret == 1) {
                npc.startQuest();
                npc.sayNext("现在我们……精灵的三位长老全部聚齐了。虽然其他百姓还被黑魔法师的诅咒困在冰里……但是有国王在，有我们在，我们就不会害怕任何人");
        }
}
