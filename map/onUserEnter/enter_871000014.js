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


player.spawnTempNpc(9400928, -200, 250, 1);//92 4C 0F 00
player.setNpcSpecialAction(9400928, "summon", 0, false);

player.spawnTempNpc(9400929, -300, 250, 1);//93 4C 0F 00
player.setNpcSpecialAction(9400929, "summon", 0, false);

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -150, 80);



player.showTextEffect("#fs20#建筑家凯尼斯家", 2000, 6);
//npc.setDelay(1000);
npc.setCameraRelMove(0, 3000, 350, 0);
//npc.setDelay(600);
//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
//npc.setDelay(1000);
npc.sayNextENoEsc("#b哇……", true);
player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
//npc.setDelay(500);
npc.setCameraAbsMove(0, 0, 250, 300);
npc.setCameraRelMove(0, 3000, -350, 0);

//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
//npc.setDelay(1000);
player.setForcedMove(2, 180);
//npc.setDelay(1000);
player.setForcedFlip(-1);
npc.sayNextENoEsc("#b太厉害了！这是什么？扎昆……桌子？！", true);
player.setNpcForceMove(9400928, 1, 20, 100);
npc.sayNextENoEsc("#face0#哇！你怎么知道的？！", 9400920);
npc.sayNextENoEsc("#b这一看就是扎昆的手啊？", true);
player.setNpcForceMove(9400929, 1, 80, 100);
npc.sayNextENoEsc("#face0#这样啊……我们没见过扎昆，所以不知道呢。", 9400921);

npc.sayNextENoEsc("#face1#据说这是凯尼斯在当冒险家的时候，抓住扎昆后得到的东西。", 9400921);

npc.sayNextENoEsc("#face0#没错，我听那个故事大概有50遍了吧。", 9400920);
npc.sayNextENoEsc("#b抓住扎昆做成了桌子？", true);
npc.sayNextENoEsc("#face1#虽然我也不是亲眼所见，但是据说如果消灭冒险岛世界的BOSS怪物，就能得到特殊的家具。", 9400921);


player.spawnTempNpc(9400931, 270, 260, 1);//99 4C 0F 00
player.setNpcSpecialAction(9400931, "summon", 0, false);
npc.sayNextENoEsc("#face0#至今我听说过的，有#t2672045:#、#t2672046:#、#t2672013:#？还有吗，艾米？", 9400921);
npc.sayNextENoEsc("#face0#好像还有#t2672052:#！", 9400920);

player.setNpcForceMove(9400931, -1, 170, 100);
npc.setCameraRelMove(0, 3000, 100, 0);
npc.sayNextENoEsc("#face1#除此之外好像还有很多。只不过我们没见过罢了，如果是你，应该能得到很多吧。", 9400922);

player.setForcedFlip(1);
npc.sayNextENoEsc("#b凯尼斯！", true);

npc.sayNextENoEsc("#face1#你来的还真快啊，呵呵", 9400922);
npc.sayNextENoEsc("#b那个……", true);
npc.sayNextENoEsc("#face0#你觉得之前的家有点小吧？那个房屋其实也是我建的。那是我学习建筑后建的第二个房屋，第一个是这间房屋。", 9400922);
npc.sayNextENoEsc("#face0#虽然我很喜欢那个房屋，但是我知道它又小又旧，住起来有点不方便。", 9400922);
npc.sayNextENoEsc("#face0#请稍等一下。", 9400922);

//npc.setDelay(300);
player.setNpcSpecialAction(9400931, "special", 3000, false);
//npc.setDelay(3000);
npc.sayNextENoEsc("#face0#来，看看，这个怎么样？", 9400922);

player.setLayerBlind(true, 150, 0, 0, 0, 300, 0);
player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHome/1", 4, true, -1, false, 0, 0);
npc.sayNextENoEsc("#b把这个房屋给我……？", true);

npc.sayNextENoEsc("#face1#太帅气了！看看这蘑菇屋顶的曲线！", 9400921);

npc.sayNextENoEsc("#face1#呵呵，你啊，如果能答应我几件事，我就把这个房屋的图纸给你，怎么样？", 9400922);

player.setLayerOff(300, "0");
//player.setLayerBlind(false, 150, 0, 0, 0, 300, 0);
npc.sayNextENoEsc("#b什么事……？", true);

npc.sayNextENoEsc("#face0#没多难的。", 9400922);

npc.sayNextENoEsc("#face0#第一，这房屋完全是为了你而创造的空间，所以它是给你的。", 9400922);
npc.sayNextENoEsc("#b当然了！", true);
npc.sayNextENoEsc("#face0#第二，在辛苦的狩猎和战斗后，回到家好好休息，家是恢复活力的空间。", 9400922);
npc.sayNextENoEsc("#b这也是当然的！", true);

npc.sayNextENoEsc("#face0#最后，你要和我们凯兰西亚的居民们一直好好相处下去。", 9400922);
npc.sayNextENoEsc("#b当然，这都是理所当然的事情，不用这么强调也行啊？", true);

npc.askMenuENoEsc("#face1#呵呵，忙起来了之后，很容易就会忘记理所当然的事情哦。\r\n#b#L0#我答应你，凯尼斯。#l", 9400922);

npc.sayNextENoEsc("#face0#谢谢你能答应我，那以后就好好相处吧！", 9400922);
if (!player.gainItem(2630598, 1)) {
        player.gainParcel(2630598, 1, "背包空间不足，以包裹发送");
}
player.updateQuestRecordEx(64605, "chk=1;give=1");
npc.sayNextENoEsc("#face1#[#i2630598:##t2630598#]\r\n来，拿着吧！这就是你的建筑图纸。", 9400922);

npc.sayNextENoEsc("#face1#双击背包消耗栏的图纸，就能激活你的建筑列表。", 9400922);
player.updateQuestRecordEx(64605, "dir", "1");

player.setLayerOn(900, "1", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/5", 4, true, -1, false, 0, 0);
npc.sayNextENoEsc("#face0#前往我的小屋，点击我的小屋菜单的#i3801390#按键，选择射手村2层房屋后，选择你喜欢的屋顶、外墙和窗户，然后就能进行建造了。", 9400922);
npc.sayNextENoEsc("#face0#如果有什么问题，你可以随时来找我。等你建成了美丽的新家，记得邀请我去参观啊，哈哈哈", 9400922);
player.setLayerOff(300, "1");
npc.sayNextENoEsc("#b谢谢你，凯尼斯！", true);

npc.sayNextENoEsc("#face2#要是家变大了，就能有更多可以装饰的地方了吧？真是让人激动呢！", 9400921);
npc.sayNextENoEsc("#face2#什么啊，真是羡慕呢~！别傻站着了，赶快去我的小屋，开始建造吧。我要第一个参观你的新家！", 9400920);

player.completeQuest(64605, 0);
player.updateQuestRecordEx(500767, "1", "1");
player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
npc.setCameraReturnToUser(0, 0);
player.setInGameDirectionMode(false, true, false, false);
player.destroyTempNpc(9400928);
player.destroyTempNpc(9400929);
player.destroyTempNpc(9400931);
player.changeMap(871000001, 0);
