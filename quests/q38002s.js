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

npc.sayNext("这么说来, 你的名字是‘人类’了? 呵呵, 真是个有趣的名字。嗯? 你说不是名字? 那你叫什么? ");

npc.sayNextS("我叫......我叫......(最早给无名无姓四处流浪的我起名字的是弗里德啊。现在的弗里德......)", false);
npc.sayNext("嗬, 报个姓名怎么还磨磨蹭蹭的? 莫非你有什么苦衷? 好吧, 看你的表情应该就是了。那么, 我来给你起个好听的名字吧!你的毛发是黑色的, 就叫玄氏吧?  要么, 你的身材高大, 叫魁硕也不错。");

npc.sayNextS("不, 我有名字......", false);

npc.sayNext("唉, 什么呀!和人类一点都不相配。既然你是我捡回来的, 名字也该由我来起。嗯......嗯......你说你来自那个只有一个月亮的地方, 对吧? 所以......藏有一个月亮的地方。隐......月......嗯, 隐月!隐月不错。意思是隐藏的月亮, 怎么样? ");

npc.sayNext("唉, 是不是太土了。我觉得还是玄氏或者魁硕要......");
npc.sayNextS("我要叫隐月。", false);
npc.sayNext("嗯? 你是认真的? 嗬, 爱好还挺独特的。反正, 既然你喜欢我也没办法......好吧, 那从现在开始你的名字就是隐月了。一开始可能会有些别扭, 不过渐渐就会适应的。");

npc.sayNext("那么隐月, 你要不要参观一下你今后生活的房子呢? 因为那里已经很久都没有主人了, 所以堆积了厚厚的尘埃。如果有什么不便的, 不必见外, 直接告诉我。");


npc.sayNext("你沿着这条路往左径直走, 就会看见一个摆着酱缸台的房子。那就是你以后住的地方, 你仔细瞧瞧吧。因为房子的主人从不回来, 所以比露宿街头强多了吧。所需物品我会为你准备的。");

npc.completeQuest();
if (player.getJob() == 2005) {
        player.setJob(2500);
        player.resetStats(4, 4, 4, 4);
        player.gainSp(5);
        player.gainEquipInventorySlots(4);
        player.gainUseInventorySlots(4);
        player.gainSetupInventorySlots(4);
        player.gainEtcInventorySlots(4);
        player.gainCashInventorySlots(4);
}
