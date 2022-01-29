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
 * Romi: Dermatologist (NPC 2012008)
 * Orbis Park: Orbis Skin-Care (Map 200000203)
 *
 * Orbis skin changer.
 *
 * @author Jackson (content from KiniroMS r227)
 */

let skinColorChoices = npc.getAllSkinColors();
let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
        isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}

npc.sayNext("你好！欢迎光临天空之城护肤中心。你想获得和我一样健康紧绷的皮肤吗？只要有#b万能护肤券#k的话，我就可以按照你的要求为你护理皮肤。你想尝试一下吗？");
let res = npc.askAvatar("用我们护肤中心开放的机械，可以查看护肤后的效果。你想要什么样的皮肤呢？请挑选一下～", skinColorChoices, 5153015, isAngel, isBeta);
let selection = res[0];
let buy = res[1];
if (player.hasItem(5153015, 1)) {
        player.loseItem(5153015, 1);
        modify();
} else if (buy == 1) {
        if (player.getCashShopCurrency(2) >= 480) {
                player.modifyCashShopCurrency(2, -480);
                modify();
        } else {
                npc.sayNext("嗯……你的抵用券好像不够哦，那我无法为你进行服务。");
        }
} else {
        npc.sayNext("嗯……你好像没有万能护肤券啊。对不起，没有万能护肤券的话，我就不能帮你护理皮肤。");
}

function modify() {
        if (isAngel) {
                player.setSubSkin(skinColorChoices[selection]);
                player.modifiedDressUp();
        } else if (isBeta) {
                player.setSubSkin(skinColorChoices[selection]);
        } else {
                player.setSkin(skinColorChoices[selection]);
        }
        player.zeroTag(isBeta);
        npc.sayNext("完成了,让朋友们赞叹你的新肤色吧!");
}
