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
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
player.setVansheeMode(true);
//player.setForcedInput(0);
player.spawnTempNpc(2159449, 215, -85, 0);
player.setNpcSpecialAction(2159449, "summon", 0, true);
player.setInGameCurNodeEventEnd(true);
npc.setCameraMove(false, 400, 215, -85);
//npc.setDelay(1310);

player.setLayerBlind(true, 200, 1000);
//npc.setDelay(1000);
npc.setMonologue("\r\n\r\n情况不妙。", false);
npc.setMonologue("\r\n\r\n黑魔法师的力量要比想象中还要强大。", false);
npc.setMonologue("\r\n\r\n看来光靠他们的力量根本无法铲除黑魔法师。", false);

npc.setMonologue("\r\n\r\n现在, 办法只有一个, \r\n那就是通过时间封印将黑魔法师#fs35#封印#fs20#起来。", true);

//player.setLayerBlind(false, 0, 1000);
//npc.setDelay(1000);
npc.sayNextNoEsc("(已经将5个封印全部启动了。现在要怎么做呢? )", 2159467);
npc.sayNextNoEsc("(现在剩下的事情，就是将时间的力量从黑魔法师身上抽出来。当然，必须满足一个小小的条件。)", 2159445);

npc.sayNextNoEsc("(条件? 什么条件? )", 2159467);
npc.sayNextNoEsc("(要想启动时间封印, 需要付出一个人的所有时间, 也就是'#r#e存在#k#n`。坦白说, 就相当于祭物或者代价。啊, 你不用表现出那种表情, 这事由我负责。)", 2159445);

npc.sayNextNoEsc("(别废话!为什么由你去做? )", 2159467);
npc.sayNextNoEsc("(是我制造的，当然应该我来。让我也当一次主人公吧。每次都跟在你们后面，我已经厌倦了。)", 2159445);

npc.sayNextNoEsc("(在这种状况下还能开玩笑? 绝对不可以。还不如我去。我已经没什么可失去的了。)", 2159467);
npc.sayNextNoEsc("(夜光法师，我知道你的心意。但是，这……)", 2159445);

npc.sayNextNoEsc("(还是我来吧。)", 2159467);
npc.sayNextNoEsc("(哈，怎么连你都来掺和？这可是关系到冒险岛世界的命运的事情。不能感情用事。)", 2159445);

npc.sayNextNoEsc("(所以才应该让我来。弗里德，以你现在的状态，估计很难承受住封印。这一点你应该最清楚。)", 2159467);

npc.sayNextNoEsc("(……)", 2159445);
npc.sayNextNoEsc("(所以说我......)", 2159467);

npc.sayNextNoEsc("(夜光法师，你还有更重要的事情要做。那就是启动封印。为了封印黑魔法师，需要你拥有的光的力量。这是只有你才能做到的事情。这你应该知道吧？)", 2159445);

npc.sayNextNoEsc("(不过这毕竟要牺牲一个人呀!做祭物!这和去死有什么区别? !)", 2159467);

npc.sayNextNoEsc("(如果必须有人去做的话，由我来做最合适。我没有需要守护的族人，也没有心爱的家人。虽然被称作祭品，感觉有点不太舒服。)", 2159449);

npc.sayNextNoEsc("(现在没时间去说什么伤感的话了。那个等以后在黄泉中再见之后再说吧。)", 2159449);

//npc.setDelay(500);
player.setNpcForceMove(2159445, -1, 180, 100);
//npc.setDelay(2000);
player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/story/BalloonMsg0/0", 0, 410, -210, true, 0, true, 0);
//npc.setDelay(2500);

player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/story/BalloonMsg0/1", 0, 410, -180, true, 0, true, 0);
//npc.setDelay(2000);
player.showNpcEffectPlay(2159449, "Effect/Direction15.img/effect/story/BalloonMsg0/2", 0, 0, -100, true, 0, false, 0);
//npc.setDelay(2000);

player.showNpcEffectPlay(2159449, "Effect/BasicEff.img/Teleport", 0, 0, -100, true, 0, false, 0);
player.destroyTempNpc(2159449);
//npc.setDelay(300);
npc.setCameraMove(true, 0, 0, 0);
//npc.setDelay(10);

player.setVansheeMode(false);
//npc.setDelay(1000);
player.showAvatarOriented("Effect/BasicEff.img/Teleport");
//npc.setDelay(1400);
npc.sayNextNoEsc("好的，开始吧？", 2159449);

//npc.setDelay(500);

player.startQuest(38900, 0, "2");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);
player.changeMap(927030050, 0);
