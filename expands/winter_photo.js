/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */


let ret = npc.askYesNo("啊，你好#e#ho##n！可能……我等的人就是#e#ho##n你呢！\r\n\r\n我#e#r有话对你说#k#n，你想听吗？");
if (ret == 1) {

        npc.sayNext("谢谢你！#e#ho##n，我就知道你一定愿意听我讲！\r\n你知道冒险岛世界中出现的#e#b冬日照片卡#n#k吗？");
        npc.sayNextS("冬日照片卡？");
        npc.sayNext("仅在今年冬天发放的#e#b冬日照片卡#n#k是印着希纳斯骑士团和反抗者英雄们的样子的卡片。卡片上不仅有英雄们的风采，还含有#e#r特殊力量#n#k！");
        npc.sayNext("根据#e#b冬日照片卡#n#k的#e#b种类和等级#n#k，卡片的#e#r特殊力量#n#k也是千差万别！啊，这个不重要……\r\n为了给冒险岛世界的所有人分发#e#b冬日照片卡#n#k，我把一张～一张～的卡片都小心翼翼地装在#e#b袋子#n#k里了呢。");
        npc.sayNext("不过，是因为卡片的力量太强了吗？#e#b袋子#n#k都落到冒险岛世界各处去了。\r\n要是卡片#e#r特殊力量#n#k被怪物们使用，那可就糟了……");
        npc.sayNextS("难道你内心……！");
        let ans = npc.askYesNo("没错，我一直在等你……\r\n我这全都是为了和未来的#e#b冬日照片卡收藏家#n#k见面～★\r\n\r\n#e#ho##n！你想成为#e#b冬日照片卡收藏家#n#k吗？");
        if (ans == 1) {
                npc.sayNextNoEsc("好！我以女皇陛下的名义～\r\n任命你为#e#b冬日照片卡收藏家#n#k！给，拿着这个！ \r\n\r\n#i3110004# #b#e#t3110004##k#n ");
                if (!player.hasItem(3110004, 1)) {
                        player.gainItem(3110004, 1);
                }
                npc.sayNextNoEsc("打开#b#e#t3110004##k#n，就能获得卡片拥有的#e#r特殊力量#n#k了！以后#b#e#t3110004##k#n会帮助你完成冬日照片卡收藏家的#r#e任务#k#n。");
                npc.sayNextSNoEsc("冬日照片卡收藏家的任务?");
                npc.sayNextNoEsc("冬日照片卡收藏家的#r#e任务#k#n很简单～★\r\n\r\n打开#i2437502##e#t2437502##n，找回卡片就行了！");
                npc.sayNextNoEsc("#i2437502##e#t2437502##n可以通过狩猎#r#e等级范围怪物物#k#n，或在#r#e抢滩斗士#k#n中获得。\r\n\r\n-等级范围怪物物：以角色的等级为准，从-20级到 + 20级范围内对应的怪物");
                npc.sayNextNoEsc("对了，你现在还是一张卡片都没有的#e新手收藏家#n呢。我这里有剩余的A级卡片，就送你一张好了。");
                gainCard();
                npc.sayNextNoEsc("#fEffect/BasicEff.img/MainNotice/summerPhotoCard/Default/0##r#e卡片收藏#n#k可以在左侧的提示中打开。\r\n我卡珊德拉大人会在#e装备、交换、合成#n上助你一臂之力，所以最好经常打开看看哦～\r\n\r\n#fUI/UIWindow6.img/summerPhotoCard/button:equip/normal/0# : 装备#e#b待生效的卡片#n#k\r\n#fUI/UIWindow6.img/summerPhotoCard/button:exchange/normal/0# : 消耗卡片，交换为#e#b其他种类的卡片#n#k\r\n#fUI/UIWindow6.img/summerPhotoCard/button:combine/normal/0# : 消耗卡片，合成为#e#b更高等级的卡片#n#k");
                npc.sayNextNoEsc("我帮你开启了#r#e卡片收藏#n#k，确认一下里面的卡片吧～★\r\n装备卡片，打开#b#e#t3110004##k#n就准备完毕了！\r\n\r\n还有其他想知道的，随时来问我卡珊德拉大人吧～\r\n加油哦～★");

        } else {
                npc.sayNext("你是不是命中注定的#e#b冬日照片卡收藏家#n#k呢……？\r\n\r\n#b#e※活动时间\r\n2018年2月28日～9102年12月31日下午23点59分#n#k");
        }
} else {
        npc.sayNext("嗯，不知怎么地，总有一种就是你的预感……\r\n没办法了。你要是改变主意，就再来找我吧！\r\n\r\n#b#e※ 活动时间\r\n2018年2月28日～9102年12月31日下午23点59分#n#k");
}


function gainCard() {
        var name = "";
        var gainA = player.getQuestRecordEx(16362, "giveA");
        if (!"2".equals(gainA)) {
                for (var i = 0; i < 12; i++) {
                        player.updateQuestRecordEx(16350 + i, "B=0;A=0;S=0;SS=0");
                }
                player.updateQuestRecordEx(16345, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0;10=0;11=0;0d=-1;1d=-1;2d=-1;3d=-1;4d=-1;0g=-1;1g=-1;2g=-1;3g=-1;4g=-1");
                player.updateQuestRecordEx(16362, "giveA", "1");
                //haandle gain rand card
                var rand = Math.floor(Math.random() * 12);
                switch (rand) {
                        case 0:
                                name = "希纳斯";
                                break;
                        case 1:
                                name = "南哈特";
                                break;
                        case 2:
                                name = "吉格蒙特";
                                break;
                        case 3:
                                name = "米哈尔";
                                break;
                        case 4:
                                name = "奥兹";
                                break;
                        case 5:
                                name = "伊莉娜";
                                break;
                        case 6:
                                name = "伊卡尔特";
                                break;
                        case 7:
                                name = "胡克";
                                break;
                        case 8:
                                name = "爆破手";
                                break;
                        case 9:
                                name = "唤灵斗师";
                                break;
                        case 10:
                                name = "豹弩游侠";
                                break;
                        case 11:
                                name = "切奇";
                                break;
                }
                var cardQuest = 16350 + rand;
                player.updateQuestRecordEx(cardQuest, "A", "1");
                player.scriptProgressMessage("获得了A级" + name + "卡片。");
        }
        var start = player.getQuestRecordEx(16362, "start");
        if (!"1".equals(gainA)) {
                player.updateQuestRecordEx(16362, "start", "1");
        }
        player.startQuest(16394, 0);
        player.completeQuest(16392, 0);
        npc.sayNextNoEsc("当当！你获得了一张A级" + name + "卡片～★\r\n\r\n已获得的冬日照片卡可以在#r#e卡片收藏#n#k中查看。");//
}


