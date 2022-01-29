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

npc.sayNext("嗯，你的等级慢慢升上来了。你决定要选择什么职业了吗？你可以是一个拥有强大力量和高生命的战士，一个拥有很多法术的魔术师，一个从远处射箭的弓箭手，一个使用快速、秘密攻击的飞侠，或者一个拥有各种技能的海盗……有那么多！");
let sel = npc.askMenu("到金银岛去，可以通过转职官转职成自己喜欢的职业。在这之前，如果你能把喜欢的职业告诉我，我就可以帮你给#b他们#k写封推荐信。收到推荐信之后，你去找他们，转职起来应该就会更容易。你想选择什么职业呢？\r\n" +
        "#b#L0#拥有强大力量和体力的战士#l\r\n" +
        "#L1#使用各种魔法和敌人战斗的魔法师#l\r\n" +
        "#L2#用快速准确的箭发动远距离攻击的弓箭手#l\r\n" +
        "#L3#在黑暗中发挥能力的飞侠#l\r\n" +
        "#L4#以各种连续技而著称的海盗#l");
switch (sel) {
    case 0:
        npc.sayNext("想成为战士，嗯？孩子，你会变得很强壮的！它们可以承受成吨的伤害。好的，我会把我的推荐信寄给战士的转职官。");
        npc.completeQuest();
        player.startQuest(1406, 0, "1");
        npc.sayNext("等你到达10级的时候，他就会跟你联系，希望你能转职为帅气的战士。");
        break;
    case 1:
        npc.sayNext("你想当魔术师吗？他们一定很神秘！他们的魔法非常强大，而且有各种效果。只是不要被击中…魔术师不知道他们的耐力！好的，我会把我的推荐信寄给老魔法师的转职官。");
        npc.completeQuest();
        player.startQuest(1406, 0, "2");
        npc.sayNext("等你到达10级的时候，他就会跟你联系，希望你能转职为帅气的魔法师。");
        break;
    case 2:
        npc.sayNext("你想当弓箭手吗？希望你的目标真的很好！凭借他们高超的机智，他们可以毫无问题地避免攻击，并自己大量开火。好的，我会把我的推荐信寄给弓箭手转职官。");
        npc.completeQuest();
        player.startQuest(1406, 0, "3");
        npc.sayNext("等你到达10级的时候，他就会跟你联系，希望你能转职为帅气的弓箭手。");
        break;
    case 3:
        npc.sayNext("你会成为飞侠吗？他们又快又鬼鬼祟祟，他们的敌人直到太迟才看到他们来。他们太酷了！好的，我会把我的推荐信寄给飞侠转职官。");
        npc.completeQuest();
        player.startQuest(1406, 0, "4");
        npc.sayNext("等你到达10级的时候，他就会跟你联系，希望你能转职为帅气的飞侠。");
        break;
    case 4:
        npc.sayNext("你想当海盗？无论是枪战还是肉搏，海盗们都是有型的！我认为你能接受挑战。好的，我会把我的推荐信寄给海盗转职官。");
        npc.completeQuest();
        player.startQuest(1406, 0, "5");
        npc.sayNext("等你到达10级的时候，他就会跟你联系，希望你能转职为帅气的海盗。");
        break;
}