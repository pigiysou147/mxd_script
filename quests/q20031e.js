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

npc.askMenu("怎么这么慢？该不会是趁我不在的时候，在哪儿偷懒吧？让你去拿的东西呢？\r\n#b\r\n#L0# ……在这里……还有，我在阁楼里捡到了这封信。好像还没看过……好像是个叫库洛姆的人寄来的……#l");
npc.sayNext("你说什么！！快给我！干嘛随便碰别人的东西？");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.setUserEmotionLocal(4, 1000);
//npc.setDelay(1000);

npc.sayNextSNoEsc("呜呜……今天又被骂了……");
npc.sayNextSNoEsc("嗯？那是什么？");
player.showPlayerEffectPlay("Effect/Direction7.img/effect/tuto/soul/0", 4000, 0, -100, true, -100, false, 0);
//npc.setDelay(5000);
npc.sayNextSNoEsc("哇！！刚才那是什么？我看见了……一道明亮的光……？");

player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
npc.completeQuest();
player.changeMap(913070002);

