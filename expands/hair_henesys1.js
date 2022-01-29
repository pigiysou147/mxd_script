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



function getStyleChoices(gender, currentHair) {
        let color = currentHair % 10;
        let styles;
        if (gender == 0)
                styles = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
        else if (gender == 1)
                styles = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
        for (let i = 0; i < styles.length; i++)
                if (npc.isHairValid(styles[i] + color)) //prefer current hair color
                        styles[i] += color;
        return styles;
}
let res;
let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
        isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}
let selection = npc.askMenu("我是美发店店长#b#p" + npc.getNpcId() + "##k,如果你有#b#t5150052##k或#b#t5151036##k，就来我这里做个头发吧？请选择你要做的项目。\r\n#b#L0#更换发型（使用高级理发券）#l\r\n#L1#染色（使用高级染色卡）#l");
switch (selection) {
        case 0:
                hairs = getStyleChoices(isBeta ? 1 : player.getGender(), player.getHair());
                res = npc.askAvatar("我能把你现在的发型变成全新的发型。你对现在的发型不厌倦吗?只要你有#b#t5150052##k,我就帮你换发型。慢慢挑选你想要的发型吧~", hairs, 5150052, isAngel, isBeta);
                item = 5150052;
                take = true;
                styleChange = true;
                break;
        case 1:
                hairs = npc.getAllHairColors();
                res = npc.askAvatar("我能把你现在的头发换个颜色。你对现在的发色不厌倦吗? 只要你有#b#t5151036##k,我就帮你染发。慢慢挑选你想要的发色吧！", hairs, 5151036, isAngel, isBeta);
                item = 5151036;
                take = true;
                styleChange = false;
                break;
}
selection = res[0];
let buy = res[1];

if (player.hasItem(item, 1)) {
        player.loseItem(item, 1);
        modify();
} else if (buy == 1) {
        if (player.getCashShopCurrency(2) >= 980) {
                player.modifyCashShopCurrency(2, -980);
                modify();
        } else {
                npc.sayNext("嗯……你的抵用券好像不够哦，那我无法为你进行服务。");
        }
} else {
        npc.sayNext("呃……你好像没有我们美发店的专用理发卡啊？很抱歉，没有理发券的话，我不能给你做头发。");
}

function modify() {
        if (isAngel) {
                player.setSubHair(hairs[selection]);
                player.modifiedDressUp();
        } else if (isBeta) {
                player.setSubHair(hairs[selection]);
        } else {
                player.setHair(hairs[selection]);
        }
        player.zeroTag(isBeta);
        npc.sayNext("完成了,享受你的" + styleChange ? "新发型吧!" : "新发色吧!");
}