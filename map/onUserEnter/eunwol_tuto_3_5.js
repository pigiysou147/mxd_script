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
//player.setForcedInput(0);
//npc.setDelay(1000);

player.soundEffect("eunwolTuto/seal");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/front");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/back");
//npc.setDelay(300);

player.soundEffect("eunwolTuto/particle");
//npc.setDelay(1500);

player.soundEffect("eunwolTuto/seal_stone");
player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/tuto/seal/stone", 0, 600, -310, true, 0, true, 0);
//npc.setDelay(1000);

player.soundEffect("eunwolTuto/seal");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/front");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/back");
//npc.setDelay(300);


player.soundEffect("eunwolTuto/particle");
//npc.setDelay(1500);

player.soundEffect("eunwolTuto/seal_stone");
player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/tuto/seal/stone", 0, -600, -310, true, 0, true, 0);
//npc.setDelay(1000);


player.soundEffect("eunwolTuto/seal");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/front");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/back");
//npc.setDelay(300);


player.soundEffect("eunwolTuto/particle");
//npc.setDelay(1500);


player.soundEffect("eunwolTuto/seal_stone");
player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/tuto/seal/stone", 0, 150, -520, true, 0, true, 0);
//npc.setDelay(1000);


player.soundEffect("eunwolTuto/seal");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/front");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/back");
//npc.setDelay(300);

player.soundEffect("eunwolTuto/particle");
//npc.setDelay(1500);

player.soundEffect("eunwolTuto/seal_stone");
player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/tuto/seal/stone", 0, -150, -520, true, 0, true, 0);
//npc.setDelay(1000);

player.soundEffect("eunwolTuto/seal");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/front");
player.showAvatarOriented("Effect/Direction15.img/effect/tuto/seal/back");
//npc.setDelay(300);

player.soundEffect("eunwolTuto/particle");
//npc.setDelay(900);

player.soundEffect("eunwolTuto/seal_stone");
player.showNpcEffectPlay(0, "Effect/Direction15.img/effect/tuto/seal/stone", 0, 0, -81, true, 0, true, 0);
//npc.setDelay(600);


player.startQuest(38900, 0, "3");
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);
player.changeMap(927030050, 0);

