/*
 * AuroMS MapleStory server emulator written in Java
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
let skin = [1, 2, 3, 4, 9, 10, 11];

let hairs = [
        34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210,
        34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420,
        34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34660, 34670, 34680, 34690,
        34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34790, 34800, 34830, 34860, 34870, 34880, 34890, 34900, 34910, 34990, 33000, 33030,
        33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230,
        33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440,
        33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33660, 33670,
        33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33800, 33810, 33960, 33970, 33980, 33990
];
let faces = [
        21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019,
        21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043,
        21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 20000, 20001, 20002, 20003, 20004, 20005,
        20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025,
        20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049,
        20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061
];

let res;
let sel;
let buy;

let cHair;
let cFace;

if (player.hasAndroid()) {
        let selection = npc.askMenu("你好！我是智能机器人化妆师仙姬。你想重新装扮自己的机器人？那你就找对人了！我可以为你的智能机器人更换一切！\r\n#b#L0#皮肤护理#l\r\n#L1#更换发型#l\r\n#b#L2#头发染色#l\r\n#L3#更换脸型#l\r\n#L4#眼睛换色#l");
        switch (selection) {
                case 0:
                        res = npc.askAndroid("您想将安卓更换成什么样的皮肤呢？请挑选一下～", skin, 5153015);
                        sel = res[0];
                        buy = res[1];
                        checkItem(2, 5153015);
                        break;
                case 1:
                        cHair = getHairStyleChoices(player.getAndroidHair());
                        res = npc.askAndroid("我可以帮您的安卓换成全新的发型。您厌倦了现在的安卓发型了吗？只要您有#b万能会员卡#k，我就可以帮您的安卓更换发型。请慢慢挑选自己喜欢的发型～", cHair, 5150052);
                        sel = res[0];
                        buy = res[1];
                        checkItem(1, 5150052);
                        break;
                case 2:
                        cHair = npc.getAllAndroidHairColors();
                        res = npc.askAndroid("我们可以为您的安卓改变头发的颜色。是不是已经厌倦了安卓头发的颜色啊？如果您有#b万能会员卡#k，我就可以给您安卓染发，慢慢挑选您喜欢的颜色吧！", cHair, 5151036);
                        sel = res[0];
                        buy = res[1];
                        checkItem(1, 5151036);
                        break;
                case 3:
                        cFace = getFaceStyleChoices(player.getAndroidFace());
                        res = npc.askAndroid("可以让您的安卓面容焕然一新…不想让您的安卓面容变一变吗？ 只需要#b万能会员卡#k就可以给您的安卓做整形手术.怎么样~慢慢挑选一下您想要的面容~", cFace, 5152057);
                        sel = res[0];
                        buy = res[1];
                        checkItem(0, 5152057);
                        break;
                case 4:
                        cFace = npc.getAllAndroidEyeColors();
                        res = npc.askAndroid("请选择您喜欢的眼睛颜色吧.", cFace, 5152057);
                        sel = res[0];
                        buy = res[1];
                        checkItem(0, 5152057);
                        break;
        }
} else {
        npc.sayNext("没有智能机器人的话，我什么都做不了。你能带着智能机器人一起来吗？");
}

function checkItem(type, itemId) {
        if (player.hasItem(itemId, 1)) {
                player.loseItem(itemId, 1);
                modify(type);
        } else if (buy == 1) {
                if (player.getCashShopCurrency(2) >= 980) {
                        player.modifyCashShopCurrency(2, -980);
                        modify(type);
                } else {
                        npc.sayNext("嗯……你的抵用券好像不够哦，那我无法为你进行服务。");
                }
        } else {
                npc.sayNext("嗯……看样子你没有#i" + itemId + "##t" + itemId + "#……很抱歉，没有#i" + itemId + "##t" + itemId + "#的话，我不能给你做整形手术。");
        }
}

function modify(type) {
        switch (type) {
                case 0://脸型
                        player.setAndroidFace(cFace[sel]);
                        break;
                case 1://发型
                        player.setAndroidHair(cHair[sel]);
                        break;
                case 2://皮肤
                        player.setAndroidSkin(skin[sel]);
                        break;
        }
        npc.sayNext("好了,一定认不出来了!");
}




function getHairStyleChoices(currentHair) {
        let color = currentHair % 10;
        let styles = [];
        for (let i = 0; i < hairs.length; i++) {
                if (npc.isAndroidHairValid(hairs[i] + color)) {
                        styles.push(hairs[i] + color);
                }
        }
        return styles;
}


function getFaceStyleChoices(currentFace) {
        let color = currentFace % 1000 - (currentFace % 100);
        let styles = [];
        for (let i = 0; i < faces.length; i++) {
                if (npc.isAndroidFaceValid(faces[i] + color)) {
                        styles.push(faces[i] + color);
                }
        }
        return styles;
}