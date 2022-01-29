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

/* global npc, player */

/**
 *
 * @author Jackson
 */
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.removeAdditionalEffect();
npc.sayNextENoEsc("#face3##b（是受到了刚才涌入的力量的影响吗？遗物正在发生变化。\r\n将所有精神都集中在遗物上吧。）#k", 1013358);
//npc.setDelay(500);

player.showFadeInOutEffect(500, 1250, 2500, 210);
player.soundEffect("Sound/SoundEff.img/pathfinder/relic");
player.showSpineScreen(0, 0, "Effect/Direction22.img/effect/PF_relic/skeleton", "2-->3", "00");
//npc.setDelay(3500);

npc.sayNextENoEsc("#face3##b（遗物之力又解放了一个阶段。\r\n感觉到强大的古代之力在奔涌而出。）#k", 1013358);
//npc.setDelay(500);
player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2500, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);
npc.completeQuest();
player.setJob(331);
player.gainSp(5);
player.openUI(2);
player.openUIWithOption(3, 3310000);
player.gainItem(1143163, 1);
player.equip(-10, 1353702);

