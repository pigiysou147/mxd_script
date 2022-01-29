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




let res;
let isAngel = false;
let isBeta = false;
while(1==1){

if (player.getJob() == 6001) {
        isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
        isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}
let selection = npc.askMenu( "我是美发店店长#b#p" + npc.getNpcId() + "##k,只需要1500点券级可以随机换一个发型。\r\n#b#L0#开始随机选发型#l\r\n",1012117);
switch (selection) {
        case 0:
                hairs = getStyleChoices(isBeta ? 1 : player.getGender(), player.getHair());
                //res = npc.askAvatar("我能把你现在的发型变成全新的发型。你对现在的发型不厌倦吗?只要你有#b#t5150052##k,我就帮你随机换发型。慢慢挑选你想要的发型吧~", hairs, 5150052, isAngel, isBeta);
                item = 5150052;
                take = true;
                styleChange = true;
                break;
       
}
	selection = hairs[parseInt(Math.random()*hairs.length)];
	if (player.getCashShopCurrency(1) >= 1500) {
		player.modifyCashShopCurrency(1, -1500);
		modify(selection);
	} else {
                npc.say("嗯……你的抵用券好像不够哦，那我无法为你进行服务。");
	}

}


function getStyleChoices(gender, currentHair) {
        
        return npc.getAllHairStyles();
}

function modify(selection) {
	if(selection==45240 || selection==32560 ){
		npc.say("请重新随机发型");
	}else{
		 if (isAngel) {
                player.setSubHair(selection);
                player.modifiedDressUp();
        } else if (isBeta) {
                player.setSubHair(selection);
        } else {
                player.setHair(selection);
        }
        player.zeroTag(isBeta);
        npc.sayNext("完成了,享受你的新发型吧!!");
	}
     
}