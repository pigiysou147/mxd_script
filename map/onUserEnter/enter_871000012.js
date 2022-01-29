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

player.spawnTempNpc(9400929, -830, 300, 0);
player.setNpcSpecialAction(9400929, "summon", 0, false);

player.spawnTempNpc(9400928, -350, 300, 0);
player.setNpcSpecialAction(9400928, "summon", 0, false);

player.spawnTempNpc(9400933, 70, 300, 0);
player.setNpcSpecialAction(9400933, "summon", 0, false);


player.spawnTempNpc(9400932, 500, 300, 0);
player.setNpcSpecialAction(9400932, "summon", 0, false);

player.setNpcSpecialAction(9400933, "special", 0, false);


player.spawnTempNpc(9400935, 1300, 300, 0);
player.setNpcSpecialAction(9400935, "summon", 0, false);

player.spawnTempNpc(9400936, 1300, 300, 0);
player.setNpcSpecialAction(9400936, "summon", 0, false);

npc.setCameraScaleAbsMove(0, 0, 1000, 600, -800, 150);


player.showTextEffect("#fs20#凯兰西亚广场", 2000, 6);
npc.setCameraRelMove(0, 5000, 1500, 0);

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
////npc.setDelay(1200);

//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
////npc.setDelay(1400);


////npc.setDelay(4000);

player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
////npc.setDelay(500);

//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setCameraScaleAbsMove(0, 0, 500, 1000, 900, -450);


////npc.setDelay(2000);


player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
////npc.setDelay(500);
//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);

npc.setCameraAbsMove(0, 0, 800, 150);

////npc.setDelay(2000);

player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
////npc.setDelay(500);
//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
npc.setCameraAbsMove(0, 0, -290, 150);
////npc.setDelay(2000);

npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -330, 320);
////npc.setDelay(500);


player.showPlayerEffectPlay("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, "");
////npc.setDelay(500);


npc.sayNextENoEsc("#b!!!", true);
npc.setCameraRelMove(0, 0, -300, 0);

npc.sayNextENoEsc("#b等，等一下？！", true);

player.setForcedMove(2, 400);
////npc.setDelay(500);

npc.setCameraRelMove(0, 2000, 300, 0);

player.setNpcForceFlip(9400928, -1);


player.showNpcEffectPlay(9400928, "Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, true, 0, false, 0, "");

////npc.setDelay(1500);
player.showNpcEffectPlay(9400928, "Effect/OnUserEff.img/emotion/oh", 0, 0, 0, true, 0, false, 0, "");

////npc.setDelay(1000);

player.setNpcForceFlip(9400928, 1);
////npc.setDelay(500);

player.setNpcForceMove(9400928, 1, 100, 100);

npc.sayNextENoEsc("#b哎，哎！我们来聊一下！", true);

npc.sayNextENoEsc("#face3#你……你干嘛呀！怎么了？！", 9400920);

player.setNpcForceFlip(9400928, -1);
////npc.setDelay(500);

player.setNpcForceFlip(9400928, 1);
////npc.setDelay(500);

player.setNpcForceMove(9400928, 1, 50, 100);

player.setForcedMove(2, 170);
npc.setCameraRelMove(0, 2000, 150, 0);
////npc.setDelay(2000);
npc.sayNextENoEsc("#b抓住了！", true);

player.setNpcForceFlip(9400928, -1);
npc.sayNextENoEsc("#face3#哼，哼。怎么了？", 9400920);

npc.sayNextENoEsc("#b你还记得我吧？\r\n这房屋和宣传单上的也太不一样了！", true);

player.destroyTempNpc(9400929);

player.spawnTempNpc(9400929, -550, 300, 0);
player.setNpcSpecialAction(9400929, "summon", 0, false);
////npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 250, 100);

npc.sayNextENoEsc("#face3#虽然照片里看起来有点~大……但我不是说过了是个小巧朴素的家嘛！ ", 9400920);
////npc.setDelay(1000);

npc.sayNextENoEsc("#face3#艾米……？把房屋卖给#h0#的人是艾米？", 9400921);
player.showNpcEffectPlay(9400928, "Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, true, 0, false, 0, "");
npc.sayNextENoEsc("#face3#哥……哥哥？！哥哥你怎么在这里！？", 9400920);

npc.sayNextENoEsc("#b你们俩认识？", true);
npc.sayNextENoEsc("#face3#这是我双胞胎妹妹。", 9400921);
npc.sayNextENoEsc("#face4#等一下，艾米！那根本不是我们的房子，你怎么能卖给其他人呢？", 9400921);
npc.sayNextENoEsc("#face4#是我的房子！我买下来的！", 9400920);
npc.sayNextENoEsc("#face4#你哪里来的房屋……", 9400921);
npc.sayNextENoEsc("#face4#之前买了这房屋的姐姐以5万金币的价格私下转手卖给了我呢！", 9400920);
npc.sayNextENoEsc("#b5万金币……？5万金币买进然后50万金币卖出吗？", true);
npc.sayNextENoEsc("#face4#你这人看来不明白啊！不动产投资本来就是这样的！", 9400920);
npc.sayNextENoEsc("#face3#艾米……我可不是这么养育你的啊……", 9400921);
npc.sayNextENoEsc("#face4#等一下，哥哥你又在说什么啊！我是自己长大的，可不是哥哥养我长大的哦？啊，又来了！别做出这种悲伤的表情啊！", 9400920);
npc.sayNextENoEsc("#face4#艾米……把钱还给人家。", 9400921);
npc.sayNextENoEsc("#face4#…", 9400920);
npc.sayNextENoEsc("#face4#…", 9400921);
npc.sayNextENoEsc("#b…", true);
npc.sayNextENoEsc("#face3#等一下，这可是正当交易啊~！还写了合同呢！", 9400920);
npc.sayNextENoEsc("#face4#但是……哥哥我还是觉得应该把差额还给人家。", 9400921);

let sel = npc.askMenuENoEsc("#face3#… \r\n#b#L0#把差额45万金币还给我。#l\r\n#L1#合同就是合同，即使不返还45万金币也可以。#l", true);

if (sel == 1) {
        npc.sayNextENoEsc("#face2#真的吗？果然！勇士大人太帅了！我最初看到你的时候，就一下子感觉到了你的帅气哦！", 9400920);
        npc.sayNextENoEsc("#face2#以后我一定会对你很好的！", 9400921);
} else {
        npc.sayNextENoEsc("#face2#合同就是合同，反正我是不会还的啦！不过，之后我会对你好的咯！", 9400920);
}
npc.sayNextENoEsc("#face3#……不用对我很好也没关系。", 9400920);
npc.sayNextENoEsc("#face2#啊！你是来参观广场的吧？让我来带路吧！我们一起去！", 9400920);

player.setNpcForceFlip(9400928, 1);
////npc.setDelay(300);
player.setNpcForceMove(9400928, 1, 100, 100);
//npc.setDelay(300);

player.setForcedMove(2, 110);

//npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 100, 100);
npc.setCameraRelMove(0, 1000, 150, 0);

//npc.setDelay(2000);


npc.sayNextENoEsc("#face1#你好，米兰达。你今天也在画素描啊！今天的天气让人很容易迸发灵感吧？", 9400921);
npc.sayNextENoEsc("#face0#你好，艾尔宾。你好，艾米。 \n\r多亏了你们，我想到了一个好主意。你们觉得说谎警示钟怎么样？", 9400924);
npc.sayNextENoEsc("#face3#呃……呃……你都看到了啊！", 9400920);

npc.sayNextENoEsc("#face1#能，能帮到米兰达的工作可真好呢……如果你画好了，一定要给我看看。", 9400920);

npc.sayNextENoEsc("#face1#对了，来打个招呼吧！这位是#h0#。今天刚搬到我们隔壁。", 9400921);

npc.sayNextENoEsc("#face1##h0#，这位是米兰达。她是个多才多艺的艺术家，最近正在制作装修物品，对吧？", 9400921);
npc.sayNextENoEsc("#face0#(点头) ", true);

npc.sayNextENoEsc("#face0#很高兴见到你，#h0#", 9400924);

npc.sayNextENoEsc("#face1#你有新做什么吗？我很喜欢米兰达的作品，让我们看看吧！", 9400921);
npc.sayNextENoEsc("#face0#今天没有呢。", 9400924);
npc.sayNextENoEsc("#face1#可惜了，那就下次再参观吧！再见", 9400921);


player.setNpcForceMove(9400928, 1, 380, 100);
//npc.setDelay(300);

player.setForcedMove(2, 420);
//npc.setDelay(300);

player.setNpcForceMove(9400929, 1, 350, 100);
//npc.setDelay(300);

npc.setCameraRelMove(0, 3000, 450, 0);
//npc.setDelay(3000);

npc.sayNextENoEsc("#face1#咳，今天米兰达也很漂亮吧？", 9400923);
npc.sayNextENoEsc("#face0#要是被米兰达听见了，你就要被打了~", 9400920);
npc.sayNextENoEsc("#face2#真是的，才不会呢。", 9400923);
npc.sayNextENoEsc("#face0#别幼稚了，打个招呼吧！这是新搬到我们隔壁的#h0#。", 9400920);

npc.sayNextENoEsc("#face1#哈哈哈，你好，我是凯兰西亚最棒的木匠，我叫艾丹，哈哈", 9400923);
npc.sayNextENoEsc("#b哇！ 很高兴见到你，我叫#h0#。正好我家里需要很多家具，比如桌子……", true);
npc.sayNextENoEsc("#face0#……啊！对了！我忘记了我还有事儿呢。那你们就慢慢参观，注意安全啊。哈哈。", 9400923);
player.setNpcForceMove(9400932, -1, 500, 100);
//npc.setDelay(500);

player.setNpcForceFlip(9400928, -1);


//npc.setDelay(300);

player.setNpcForceMove(9400936, 1, 200, 100);
npc.sayNextENoEsc("#face3#艾丹这个傻瓜，说谎也太明显了！", 9400920);
npc.sayNextENoEsc("#face0#艾米，你可不能这么说。", 9400921);

player.setNpcForceFlip(9400928, 1);
//npc.setDelay(500);

player.setNpcForceMove(9400928, 1, 450, 100);
//npc.setDelay(600);

player.setForcedMove(2, 500);
player.setNpcForceMove(9400936, 1, 450, 100);
//npc.setDelay(300);

npc.setCameraRelMove(0, 4000, 500, 0);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face1#很遗憾，艾丹还只是个学徒，所以不能制作家具售卖。", 9400921);

npc.sayNextENoEsc("#face0#他的师父卡朋特现在不在工坊，所以暂时由艾丹运营，修理一些破家具。", 9400921);
npc.sayNextENoEsc("#b真是可惜呢。", true);
npc.sayNextENoEsc("#face1#这里是特鲁迪家的面包店。 ", 9400921);
npc.sayNextENoEsc("#face0#这里是建筑家凯尼斯的家。是向居民们开放的空间。", 9400921);

npc.setCameraRelMove(0, 3000, 0, -650);

//npc.setDelay(2000);
npc.sayNextENoEsc("#face0#嗯~~现在凯尼斯好像不在，之后再给你介绍吧。", 9400921);
//npc.setDelay(1000);

npc.setCameraRelMove(0, 0, 0, 650);

npc.sayNextENoEsc("#face0#只要再走一点就是艾丹家的家具工坊，过了工坊就是前往森林的入口。广场就差不多是这样了！", 9400921);
player.setNpcForceMove(9400935, -1, 250, 100);

npc.setCameraRelMove(0, 2000, 100, 0);
npc.sayNextENoEsc("#face1#哥哥啊啊啊啊~！姐姐啊啊啊啊~~！ 凯蒂~~！ ", 9400926);
npc.sayNextENoEsc("#face2#特鲁迪~小心不要跌倒了~", 9400921);
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#这是谁~？", 9400926);
npc.sayNextENoEsc("#face1#这是今天搬到哥哥家隔壁的勇士大人。", 9400921);
npc.sayNextENoEsc("#face0#勇……士大人？", 9400926);


player.setNpcSpecialAction(9400935, "eye", 0, false);
npc.sayNextENoEsc("#b见到你很高兴，特鲁迪？", true);
player.showNpcEffectPlay(9400935, "Effect/OnUserEff.img/emotion/flower", 0, 0, 0, true, 0, false, 0, "");
npc.sayNextENoEsc("#face1#啊啊啊", 9400926);

//npc.setDelay(1000);
player.setNpcForceFlip(9400935, 1);
//npc.setDelay(500);


player.setNpcForceMove(9400935, 1, 500, 100);
player.setNpcForceMove(9400936, 1, 1000, 100);

npc.sayNextENoEsc("#face2#怎，怎么了。特鲁迪现在是在害羞吗？啊啊啊！真可爱！", 9400920);
npc.sayNextENoEsc("#face1#看来是因为你是陌生人吧。这个村子已经很久没有外人来过了。我也觉得很激动，很开心呢！总觉得会有什么更开心的事情发生呢。", 9400921);

player.setNpcForceFlip(9400928, -1);
npc.setCameraRelMove(0, 2000, -100, 0);

npc.sayNextENoEsc("#face2#这~都是因为我啊。", 9400920);
npc.sayNextENoEsc("#face2#哈哈，那就重新回到家里去吧？", 9400921);

//npc.setDelay(1000);

player.setForcedFlip(1);
player.setNpcForceFlip(9400928, -1);
npc.setCameraRelMove(0, 3000, -1000, 0);

//npc.setDelay(2000);


player.setLayerBlind(true, 255, 0, 0, 0, 500, 0);
//npc.setDelay(500);
player.completeQuest(64595, 0);

player.destroyTempNpc(9400929);
player.destroyTempNpc(9400928);
player.destroyTempNpc(9400933);
player.destroyTempNpc(9400932);
player.destroyTempNpc(9400935);
player.destroyTempNpc(9400936);

player.setInGameDirectionMode(false, true, false, false);
player.changeMap(871000000, 0);

