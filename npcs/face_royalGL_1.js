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


let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
        isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}

let selection = npc.askMenu("你好，我是整形手术领域的艺术家#b#p" + npc.getNpcId() + "##k。我可以为你做脸部整形手术。怎么样？ 你想让自己的脸变得完美无瑕吗？\r\n#b#L1#开始做整形手术#l");
if (selection == 1) {
        if (player.hasItem(5152053, 1)) {
                let ret = npc.askYesNo("使用#b#t5152053##k，可以随机更改脸型。但是请别担心，我的手术已经达到了一定的境界。你真的要使用#b#t05152053##k，做整形手术吗？");
                if (ret == 1) {
                        let color = player.getHair() % 10;
                        let face = npc.getRandFace(isAngel || isBeta);//获得随机的脸型
                        player.loseItem(5152053, 1);
                        if (isAngel) {
                                player.setSubFace(face);
                                player.modifiedDressUp();
                        } else if (isBeta) {
                                player.setSubFace(face);
                        } else {
                                player.setFace(face);
                        }
                        player.zeroTag(isBeta);
                        npc.sayNext("完成了,享受你的新发型吧!");
                } else {
                        npc.sayNext("你还没做好心理准备吗？决定好了之后，请你再来和我说话。");
                }
        } else {
                npc.sayNext("真可惜，您没有可使用的会员卡。可以到商城进行购买后再来使用哦！");
        }
}