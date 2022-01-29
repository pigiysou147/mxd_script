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
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.scriptProgressMessage("杂货店后院");
//npc.setDelay(500);

player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/4", 2000, 0, -100, true, -100, false, 0);
//npc.setDelay(2000);

player.setUserEmotionLocal(6, 10000);
npc.sayNextSNoEsc("呃！真的有人。那个少年是谁？");

player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/step0/5", 2000, 0, -100, true, -100, false, 0);
//npc.setDelay(2000);

//player.setForcedInput(2);
//npc.setDelay(3800);

//player.setForcedInput(0);
npc.sayNextSNoEsc("你是谁？迷路了吗？");
npc.sayNextNoEsc("我找了你好久。终于找到了。拥有光之命运的人。", 1106001);
npc.sayNextSNoEsc("你说什么？光之命运？");
npc.sayNextNoEsc("要有礼貌，少年！这位大人是很高贵的！", 1106003);
npc.sayNextSNoEsc("啊！你是不久前到店里来的……对了！我想起来了。你问过我认不认识库洛姆，对吧？不久前我在商店的阁楼里发现了他寄来的信。虽然不知道是不是那个人……但林伯特也许认识那个人。等林伯特回来之后……");
npc.sayNextNoEsc("库洛姆……他和林伯特没什么关系，倒是和你有关。他就是你的父亲……", 1106001);
npc.sayNextSNoEsc("嗯？你说什么？……你说什么？我不记得我父亲是谁。在我很小的时候，他就离开了……");
npc.sayNextNoEsc("他并不是抛弃了你。你的父亲，光之骑士库洛姆因为失去了心爱的妻子而陷入了黑暗。光明和黑暗的差异其实只在一线之间。在黑暗波及到你之前，他把你送到了这里。最终他没能战胜黑暗，最后死去了……", 1106001);
npc.sayNextSNoEsc("他救了我？不对，我的人生充满了黑暗。我一直都不知道自己的名字，被关在这个小店里，在心中默默地等待着永远不会回来的父亲。");
npc.sayNextNoEsc("光明是从黑暗中诞生的。就像剑的双刃一样……因为一直在黑暗中，现在你才能变成光。跟我走吧。到属于你的地方去。", 1106001);
npc.sayNextNoEsc("等等，女皇陛下。我还不能完全信任这个少年。必须确认一下他是否有成为光之骑士的资格。", 1106003);
npc.sayNextNoEsc("南哈特，你还在怀疑吗……好吧。我同意你的方法，但是不能让他受伤。", 1106001);
npc.sayNextSNoEsc("等等！你想干什么？");
//npc.setDelay(1000);
for (var i = 0; i < 10; i++) {
        map.spawnMob(9001050, 388, 48);
}

player.completeQuest(20034, 0);
player.startQuest(20035, 0);

player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);










