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
 * Franz the Owner: Plastic Surgeon (NPC 2010002)
 * Orbis Park: Orbis Plastic Surgery (Map 200000201)
 *
 * Orbis face changer - VIP coupons, eye style only.
 *
 * @author Jackson (content from KiniroMS r227)
 */

function getStyleChoices(gender, currentFace) {
        let color = currentFace % 1000 - (currentFace % 100);
        let styles;
        if (gender == 0)
                styles = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
        else if (gender == 1)
                styles = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
        for (let i = 0; i < styles.length; i++)
                if (npc.isFaceValid(styles[i] + color)) //prefer current eye color
                        styles[i] += color;
        return styles;
}

let faces = getStyleChoices(player.getGender(), player.getFace());
let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
        isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}
let use = npc.askMenu("我是整形外科院长#b#p" + npc.getNpcId() + "##k,你是想换脸型吗?是想换个新样子啊?好~ 我就帮你变成你想要的样子。\r\n#L0##b整容(使用高级会员卡)#l");
if (use == 0) {
        let res = npc.askAvatar("我能把你现在的脸变成全新的脸...你不想换张新的脸吗?只要有#b#t5152057##k的话,我就给你做整容手术。慢慢挑选你喜欢的脸吧~", faces, 5152057, isAngel, isBeta);
        let selection = res[0];
        let buy = res[1];
        if (player.hasItem(5152057, 1)) {
                player.loseItem(5152057, 1);
                modify();
        } else if (buy == 1) {
                if (player.getCashShopCurrency(2) >= 980) {
                        player.modifyCashShopCurrency(2, -980);
                        modify();
                } else {
                        npc.sayNext("嗯……你的抵用券好像不够哦，那我无法为你进行服务。");
                }
        } else {
                npc.sayNext("嗯……看样子你没有整容券……很抱歉，没有整容券的话，我不能给你做整形手术。");
        }
}


function modify() {
        if (isAngel) {
                player.setSubFace(faces[selection]);
                player.modifiedDressUp();
        } else if (isBeta) {
                player.setSubFace(faces[selection]);
        } else {
                player.setFace(faces[selection]);
        }
        player.zeroTag(isBeta);
        npc.sayNext("好了,你的朋友们一定认不出来是你了!");
}
