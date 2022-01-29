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

/* global player, npc */
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.removeAdditionalEffect();
player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
npc.setCameraZoom(0, 1000, 0, -384, -300);

player.setLayerBlind(true, 255, 0, 0, 0, 0, 2);
//npc.setDelay(1200);
player.setLayerBlind(true, 0, 0, 0, 0, 1000, 2);
//npc.setDelay(1400);

npc.setCameraZoom(4000, 1000, 4000, -384, 0);
player.showTextEffect("#fn???? ExtraBold##fs18#帕勒坦遗迹", 1000, 6);
//npc.setDelay(4500);
npc.sayNextENoEsc("#face0#寻找道路之人，你已经将遗物之力完全解放出来了。\r\n我认可你是遗物真正的主人。", 1013360);
npc.askMenuENoEsc("#face0#……但是你心中的迷雾并未消失。\r\n如果需要，我可以解答你的疑惑。\r\n\r\n#b#L0# 几百年前的仪式 #l", 1013360);
//npc.setDelay(500);
npc.sayNextENoEsc("#face0#几百年前，穿着黑袍的怪人\r\n想通过仪式重现遗物原本的力量。", 1013360);
npc.sayNextENoEsc("#face0#就像之前说的那样，遗物是世界秩序形成前制造出来的东西。\r\n为了让它恢复力量，就必须让时间回到过去。", 1013360);
npc.sayNextENoEsc("#face0#但是他说被挡住了。", 1013358);
//npc.setDelay(500);

npc.sayNextENoEsc("#face0#没错。他被时间封印挡住，没能让遗物完全恢复力量。\r\n但是……没有什么是不可能的。", 1013360);
npc.sayNextENoEsc("#face0#虽然那个怪人没能做到，但也许有一天能够重现古代之力的人就会出现。\r\n不管其意志是善良，还是邪恶……", 1013360);

//npc.setDelay(500);
npc.sayNextENoEsc("#face0#所以我一直在期待……\r\n希望有人能恢复那种力量，并用它来守护世界。", 1013360);
//npc.setDelay(500);

npc.sayNextENoEsc("#face0#遗物就拜托你了，寻找道路之人……", 1013360);
//npc.setDelay(500);

player.setLayerBlind(true, 255, 240, 240, 240, 1300, 2);
//npc.setDelay(1600);


npc.sayNextENoEsc("#face0##b（那个叫奇拉的人销声匿迹了吗？\r\n但是像他那样执着的人，应该不会轻易放弃。）#k", 1013358);
npc.sayNextENoEsc("#face6##b（也许有一天他会再次出现，让世界陷入到危机之中……\r\n就像意念说的那样，没有什么是不可能的。）#k", 1013358);
//npc.setDelay(500);

npc.sayNextENoEsc("#face0##b（过去我只是出于兴趣而在世界各地流浪。\r\n但是在冒险的旅途中，我也拥有了很多珍视的东西。）#k", 1013358);
npc.sayNextENoEsc("#face0##b（我要用这种力量来保护他们。\r\n在笼罩世界的黑暗中，为大家照亮前行之路，是我的使命。）#k", 1013358);

player.startQuest(35932, 0);
player.setOverlapDetail(0, 1000, 3000, true);
npc.setCameraZoom(0, 1000, 2147483647, 2147483647, 2147483647);

npc.setCameraMove(true, 0, false, 0, 0);
//npc.setDelay(300);
player.removeOverlapDetail(1000);
npc.setCameraMove(true, 0, false, 0, 0);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, true, false, false);
player.changeMap(player.getIntQuestRecordEx(35932, "rMap"), 0);
 