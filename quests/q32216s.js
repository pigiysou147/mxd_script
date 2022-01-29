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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

startScript();

function startScript() {
    npc.sayNextNoEsc("你那样帮我，而且刚才还打倒了怪物。看来#h # 你已经是一个像模像样的冒险家了。你决定好选择哪个职业了吗？");
    npc.sayNextSNoEsc("#b哪个职业？#k", false);
    npc.sayNextNoEsc("恩，现在开始，你要去的金银岛中，有另外五种职业可以进行转职。嗯，我记得是……战士、魔法师、弓箭手、飞侠和海盗。有这五种职业。");
    npc.sayNextSNoEsc("#b那些职业各有什么不同呢？#k", false);
    npc.sayNextNoEsc("首先，战士的力量和体力很强，适合近距离战斗。同时，防御力也相当出色，所以不会轻易倒下。魔法师与战士不同，通过魔法进行战斗，所以相比力量，智力更加重要。因为使用魔法，所以可在远距离一次攻击多个敌人。");
    npc.sayNextNoEsc("说到远距离攻击，弓箭手才是最适合的。其可以在远距离使用箭矢，并且控制距离的能力也相当出色。飞侠虽有不亚于战士的近距离战斗能力，但在战斗时往往以速度为主，而非力量。");
    npc.sayNextNoEsc("最后一个，海盗……其特征很难用一句话来概括。海盗既能用体术发动近身攻击，又能在远距离用手枪或大炮进行攻击。而且，无论哪种攻击方式，都相当华丽和富有个性。");
    let sel = npc.askMenuNoEsc("船长已经跟转职官联系过了，只要你现在先决定好的话，待会儿一到港口就能立即收到转职官的联系。#h #你要选择什么职业呢？\r\n#b#L1# 具备强大力量和防御力的战士#l\r\n#L2# 利用高超的智力使用魔法的魔法师#l\r\n#L3# 善于远距离攻击和控制距离的弓箭手#l\r\n#L4# 进行快速攻击的飞侠#l \r\n#L5# 战斗风格华丽独特的海盗#l#k");
    player.startQuest(1406, 0, sel);
    switch (sel) {
        case 1:
            npc.sayNextNoEsc("嗯！#h #你一定能够成为帅气的战士！");
            break;
        case 2:
            npc.sayNextNoEsc("嗯！#h #你一定能够成为帅气的魔法师！");
            break;
        case 3:
            npc.sayNextNoEsc("嗯！#h #你一定能够成为帅气的弓箭手！");
            break;
        case 4:
            npc.sayNextNoEsc("嗯！#h #你一定能够成为帅气的飞侠！");
            break;
        case 5:
            npc.sayNextNoEsc("嗯！#h #你一定能够成为帅气的海盗！");
            break;
    }
    if (sel == 1) {
        npc.sayNextNoEsc("#h #成为战士的话，那我要不要成为法师呢？虽然可能还做得不够好，但也许能在远处用魔法帮助别人。");
    } else if (sel == 1) {
        npc.sayNextNoEsc("我想成为战士。我不想一味接受别人的帮助，而是想在将来成为能够独当一面的冒险家。当然，如果我的力量可以帮到别人的话，那就更好了。");
    }
    player.setInGameCurNodeEventEnd(true);
    player.setInGameDirectionMode(true, false, false, false);
    //player.setStandAloneMode(true);
    //player.setForcedInput(0);
    player.soundEffect("advStory/whistle");
    //npc.setDelay(208);
    player.showReservedEffect("Effect/Direction3.img/adventureStory/Scene2");
    //npc.setDelay(3000);
    npc.sayNextSNoEsc("看来现在船要出发了！");
    player.gainExp(489);
    npc.completeQuest();
    player.setInGameDirectionMode(false, false, false, false);
    //player.setStandAloneMode(false);
    player.changeMap(4000004, 0);
}
