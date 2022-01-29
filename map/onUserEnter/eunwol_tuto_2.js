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
//player.setForcedInput(0);
//npc.setDelay(1000);

npc.sayNextNoEsc("……啊，我就知道会这样。幻影和夜光法师只要一见面就要吵架。也是，他们的性格相差太大了，这也是没办法的事。", 2159441);

npc.sayNextSNoEsc("在我看来，他们的性格还挺相配的。一个太吵，一个太无趣，刚好可以平衡一下。");

npc.sayNextNoEsc("啊哈哈，那倒也是。不过估计他们本人听了之后一定不会高兴。啊，他们来了。", 2159441);
npc.setCameraMove(false, 200, 1100, 66);
//npc.setDelay(1364);

player.spawnTempNpc(2159442, 770, 50, 0);
player.setNpcSpecialAction(2159442, "summon", 0, true);

player.spawnTempNpc(2159443, 970, 50, 0);
player.setNpcSpecialAction(2159443, "summon", 0, true);

player.spawnTempNpc(2159444, 1170, 50, 0);
player.setNpcSpecialAction(2159444, "summon", 0, true);
//npc.setDelay(300);
npc.setCameraMove(true, 200, 0, 0);
//npc.setDelay(1364);

npc.sayNextSNoEsc("等等，我来处理。");
//player.setForcedInput(1);
npc.setCameraMove(false, 180, 1100, 66);
//npc.setDelay(500);

//player.setForcedInput(0);
//npc.setDelay(500);
player.setForcedAction(412, 900);
player.showPlayerEffectPlay("Skill/512.img/skill/5121007/effect", 900, -40, -25, false, 0, false, 0);
player.showPlayerEffectPlay("Skill/512.img/skill/5121007/effect0", 810, -40, -25, false, 0, false, 0);
player.soundEffect("eunwolTuto/Use");

player.setNpcSpecialAction(2159442, "hit", 0, true);
player.setNpcSpecialAction(2159443, "hit", 0, true);
player.setNpcSpecialAction(2159444, "hit", 0, true);

player.showNpcEffectPlay(2159442, "Skill/512.img/skill/5121007/hit/0", 0, -5, -20, true, 0, false, 0);
player.showNpcEffectPlay(2159443, "Skill/512.img/skill/5121007/hit/0", 0, -5, -20, true, 0, false, 0);
player.showNpcEffectPlay(2159444, "Skill/512.img/skill/5121007/hit/0", 0, -5, -20, true, 0, false, 0);
player.soundEffect("eunwolTuto/Hit");

player.showPlayerEffectPlay("Skill/512.img/skill/5121020/effect", 900, -40, -25, false, 0, false, 0);
player.showPlayerEffectPlay("Skill/512.img/skill/5121020/effect0", 810, -40, -25, false, 0, false, 0);
player.soundEffect("eunwolTuto/Use");
player.setNpcSpecialAction(2159442, "hit", 0, true);
player.setNpcSpecialAction(2159443, "hit", 0, true);
player.setNpcSpecialAction(2159444, "hit", 0, true);

player.showNpcEffectPlay(2159442, "Skill/512.img/skill/5121020/hit/0", 0, -5, -20, true, 0, false, 0);
player.showNpcEffectPlay(2159443, "Skill/512.img/skill/5121020/hit/0", 0, -5, -20, true, 0, false, 0);
player.showNpcEffectPlay(2159444, "Skill/512.img/skill/5121020/hit/0", 0, -5, -20, true, 0, false, 0);
player.soundEffect("eunwolTuto/Hit");
//npc.setDelay(600);

player.setNpcSpecialAction(2159442, "die", 0, true);
player.setNpcSpecialAction(2159443, "die", 0, true);
player.setNpcSpecialAction(2159444, "die", 0, true);
//npc.setDelay(2100);
player.destroyTempNpc(2159442);
player.destroyTempNpc(2159443);
player.destroyTempNpc(2159444);
//npc.setDelay(800);

//player.setForcedInput(2);
npc.setCameraMove(true, 0, 0, 0);
//npc.setDelay(30);

//player.setForcedInput(0);
//npc.setDelay(500);
npc.sayNextSNoEsc("你打算一直待在这里吗？");

npc.sayNextNoEsc("嗯，必须有人守着这个路口。反正现在的状态也不是黑魔法师的对手。", 2159441);

npc.sayNextSNoEsc("那就先进去吧。……让我看看。");
npc.sayNextNoEsc("嗯！", 2159441);
//player.setForcedInput(2);
//npc.setDelay(4000);
//player.setForcedInput(0);
//npc.setDelay(100);

player.setVansheeMode(true);
player.setLayerBlind(true, 200, 1000);
//npc.setDelay(1000);

npc.setMonologue("\r\n\r\n战神从他的背影中感到一种不祥之兆。.", false);
npc.setMonologue("\r\n\r\n就好似再也看不到了一样......#fs35#一种预感#fs20#或者#fs35#直觉。", false);
player.startQuest(38900, 0, "1");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);
player.changeMap(927030050, 0);

