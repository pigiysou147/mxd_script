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

player.spawnTempNpc(9400838, 197, -136);
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
npc.sayNextSNoEsc("阿琅", false);
npc.sayNextNoEsc("是谁……？啊！", 9400838);
npc.sayNextSNoEsc("好久不见，虽然也许你已经忘了我是谁，单我来这里有样东西要还给你……", false);
npc.sayNextNoEsc("哇，好神奇啊！！！你，和我的守护精灵长得一模一样！没有耳朵和尾巴，眼睛也是一模一样！", 9400838);
npc.sayNextSNoEsc("你在说什么？守护精灵，你的守护精灵和我……", false);
npc.sayNextNoEsc("对呀，你想要看看我的守护精灵吗？", 9400838);
//召唤 自己的模样？？？
npc.sayNextSNoEsc("（是真的，阿琅有了守护精灵，而且不知道是出于何种缘故，居然与我长得一模一样？）", false);
npc.sayNextNoEsc("嘿嘿，我不分昼夜地向狐神大人祈祷，居然也有了自己的守护精灵！而且还要比其他人的守护精灵更帅！现在我也不会孤单了！", 9400838);
npc.sayNextNoEsc("对了你是从哪儿来的啊？为什么会和我的守护精灵长得这么像？嗯？", 9400838);

player.spawnTempNpc(3002108, 138, -136);
npc.sayNextNoEsc("阿琅，有什么事情吗？", 3002108);
npc.sayNextNoEsc("爷爷！", 9400838);
npc.sayNextNoEsc("咳咳，我是听着有点吵就过来看看，居然是有个奇怪的异邦人在！你找我们阿琅做什么！", 3002108);
npc.sayNextNoEsc("爷爷，他不是坏人，你看他和我的守护精灵长得一模一样！", 9400838);
npc.sayNextNoEsc("天啊，是真的啊，我说你，这到底是怎么回事？", 3002108);
npc.sayNextSNoEsc("我才真的很好奇呢，这到底是怎么一回事？", false);
npc.sayNextNoEsc("嗯我可没见过这种情况……", 3002108);
npc.sayNextNoEsc("难道……虽然那一直以来只是个传说……", 3002108);
npc.sayNextNoEsc("大家都说狐狸的守护精灵会与自己内心深处非常思念的人相像，而且这种精灵的力量会胜过任何精灵的力量。", 3002108);
npc.sayNextNoEsc("不可能，爷爷，我见够没见过他，怎么会思念他呢？", 9400838);
npc.sayNextNoEsc("我就是这个意思，阿琅，你见过这个大个子吗？应该叫大块头才对嘛……", 3002108);
npc.sayNextNoEsc("没有啊！我第一次见！啊，话说回来，你来这里是做什么的啊！", 9400838);
npc.sayNextSNoEsc("我是来还从你这儿借走的守护精灵的……", false);
npc.sayNextNoEsc("嗯？这是什么意思？我没借过啊？而且我已经有了这么帅气的守护精灵了，我不需要其他的守护精灵。", 9400838);
npc.sayNextSNoEsc("……好吧。（不知为何，内心既温暖又有些悲伤，看样子是没法继续再待在这里了。）", false);
//player.setForcedInput(1);//左
//npc.setDelay(400);
//player.setForcedInput(2);//右
//npc.setDelay(300);
//player.setForcedInput(0);
//npc.setDelay(50);
npc.sayNextNoEsc("等一下，你这就要走了吗？至少要告诉我你的名字啊！", 9400838);
npc.sayNextSNoEsc("我的名字是你给我起的，阿琅，以后我会让你再记起来的。", false);
npc.sayNextNoEsc("嘤嘤……哪有这样的道理！", 9400838);
npc.sayNextSNoEsc("多亏了你，我找到了今后要继续前进的原因。", false);
npc.sayNextSNoEsc("我一定会找到方法，让你记起我来的，你把我看得这么重要，我也同样很珍惜你。", false);
npc.sayNextSNoEsc("等我找到了方法，我会再来见你的，你能等到那一天吗？", false);
npc.sayNextNoEsc("嗯……虽然我不知道你在说些什么，不过幻影再来玩哦！", 9400838);
npc.sayNextSNoEsc("嗯，谢谢。（我也一直很思念阿琅……我的守护精灵会不会也越来越像阿琅了呢？）", false);
//player.setForcedInput(1);
player.scriptProgressMessage("可以通过[精灵凝聚最大化]形成思念的阿琅的模样。");
player.completeQuest(1542, 0);
//npc.setDelay(1000);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//回到源地图
let [mapId, spawnPoint] = npc.resetRememberedMap("RETURN_MAP");
if (mapId == 999999999) { //warped to FM without having previous position saved
        mapId = 100000000; //Perion
        spawnPoint = 0; //market00 on Perion
}
player.changeMap(mapId, spawnPoint);

