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


let res;
let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
        isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}

res = npc.askCustomMixHair("把两种颜色混合后，可以改变发色。请选择底色和混合色，拉动滚动条，创作出属于自己的发色吧。", isAngel, isBeta);
let nMixBaseHairColor = Number(res[0]);
let nMixAddHairColor = Number(res[1]);
let nMixHairBaseProb = Number(res[2]);
if (isAngel) {
        let newBaseHair = Number(Math.floor(player.getIntKeyValue("SUB_HAIR") / 10) * 10) + nMixBaseHairColor;
        player.setSubHair(newBaseHair);
        player.setKeyValue("SUB_MIX_BASE_HC", String(nMixBaseHairColor));
        player.setKeyValue("SUB_MIX_ADD_HC", String(nMixAddHairColor));
        player.setKeyValue("SUB_MIX_HAIR_BP", String(nMixHairBaseProb));
        player.modifiedDressUp();
} else if (isBeta) {
        let newBaseHair = Number(Math.floor(player.getIntKeyValue("SUB_HAIR") / 10) * 10) + nMixBaseHairColor;
        player.setSubHair(newBaseHair);
        player.setKeyValue("SUB_MIX_BASE_HC", String(nMixBaseHairColor));
        player.setKeyValue("SUB_MIX_ADD_HC", String(nMixAddHairColor));
        player.setKeyValue("SUB_MIX_HAIR_BP", String(nMixHairBaseProb));
} else {
        let newBaseHair = Number(Math.floor(player.getHair() / 10) * 10) + nMixBaseHairColor;
        player.setHair(newBaseHair);
        player.setMixBaseHairColor(nMixBaseHairColor);
        player.setMixAddHairColor(nMixAddHairColor);
        player.setMixHairBaseProb(nMixHairBaseProb);
}
player.zeroTag(isBeta);
if (npc.getSlot() > 0) {
        player.loseItem(npc.getItemId(), npc.getSlot(), 1);
}