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


let data = player.getQuestEntryData(38900);
if ("5".equals(data)) {
        wakeUpNext();
} else {
        wakeUp();
}



function wakeUpNext() {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        player.setInGameCurNodeEventEnd(true);
        player.spawnTempNpc(3002100, 200, -145, 1);
        player.setNpcSpecialAction(3002100, "summon", 0, true);

        player.spawnTempNpc(3002003, 260, -145, 1);
        player.setNpcSpecialAction(3002003, "summon", 0, true);

        player.spawnTempNpc(3002004, 40, -145, 0);
        player.setNpcSpecialAction(3002004, "summon", 0, true);

        player.spawnTempNpc(3002001, -30, -145, 0);
        player.setNpcSpecialAction(3002001, "summon", 0, true);

        player.spawnTempNpc(3002002, -100, -145, 0);
        player.setNpcSpecialAction(3002002, "summon", 0, true);


        //npc.setDelay(2000);


        npc.sayNextSNoEsc("你在干什么呢？");
        npc.sayNextNoEsc("哎呀，真的没有尾巴！....", 3002004);
        npc.sayNextNoEsc("你真坏。妈妈说，不能拿别人的缺陷开玩笑。", 3002002);

        npc.sayNextNoEsc("哈……这个情况，到底是……", 3002002);
        npc.sayNextNoEsc("阿琅，我们先回村里去了。你带着他过来吧。", 3002003);
        //npc.setDelay(1000);
        player.destroyTempNpc(3002001);
        player.destroyTempNpc(3002002);
        player.destroyTempNpc(3002003);
        player.destroyTempNpc(3002004);
        //npc.setDelay(1000);
        npc.sayNextNoEsc("我们也走吧，人类。", 3002100);
        //npc.setDelay(1000);
        player.destroyTempNpc(3002100);


        player.startQuest(38900, 0, "6");
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
        player.setVansheeMode(false);
        player.changeMap(940200060, 0);

}


function wakeUp() {
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(true, false, false, false);
        //player.setStandAloneMode(true);
        //player.setForcedInput(4);
        player.setInGameCurNodeEventEnd(true);
        player.spawnTempNpc(3002100, 200, -145, 1);
        player.setNpcSpecialAction(3002100, "summon", 0, true);

        player.spawnTempNpc(3002003, 260, -145, 1);
        player.setNpcSpecialAction(3002003, "summon", 0, true);

        player.spawnTempNpc(3002004, 40, -145, 0);
        player.setNpcSpecialAction(3002004, "summon", 0, true);

        player.spawnTempNpc(3002001, -30, -145, 0);
        player.setNpcSpecialAction(3002001, "summon", 0, true);

        player.spawnTempNpc(3002002, -100, -145, 0);
        player.setNpcSpecialAction(3002002, "summon", 0, true);


        //npc.setDelay(2000);


        player.showPlayerEffectPlay("Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", 0, 20, -80, false, 0, false, 0);
        //npc.setDelay(3000);

        //player.setForcedInput(3);
        //npc.setDelay(1000);

        npc.sayNextSNoEsc("这，这里是……？");
        npc.sayNextNoEsc("哦，站起来了，站起来了。", 3002003);

        npc.sayNextNoEsc("太好了，说话了。看来他还会说话！", 3002002);

        npc.sayNextNoEsc("看到了吗？看到了吗？眼珠子圆圆的！", 3002004);
        npc.sayNextNoEsc("非常大！该不会吃了我们吧？", 3002001);
        npc.sayNextNoEsc("呃……", 3002001);

        npc.sayNextNoEsc("哎呀，他好像有什么地方疼。你去问问他疼不疼。", 3002004);

        npc.sayNextNoEsc("干嘛老是让我去。我害怕.", 3002001);

        npc.sayNextNoEsc("这些胆小鬼！都给我让开。你！哪里疼吗？", 3002100);

        npc.sayNextSNoEsc("不，现在没事了。头稍微有点晕。这是什么地方？你们是……");

        npc.sayNextNoEsc("我们是尖耳狐狸。这里是我们生活的地方。你是谁？你是怎么到这里来的？这里是我们的土地。", 3002100);

        npc.sayNextSNoEsc("(尖耳狐狸？估计是不为人知的异族。长着耳朵和尾巴，真的和狐狸很像。)");

        npc.sayNextSNoEsc("我是人类。我是从时间神殿附近来的，这个地方在哪里？");

        npc.sayNextNoEsc("人类？时间神殿？还是头一次听说。", 3002001);
        npc.sayNextSNoEsc("(不知道时间神殿吗？我到底来到了什么地方？这里到底是……)");

        //npc.setDelay(600);
        player.showNpcEffectPlay(0, "Effect/Direction2.img/effect/chat/nugu/0", 2000, 20, -80, true, 0, false, 0);
        //npc.setDelay(2500);

        npc.sayNextSNoEsc("月，月亮怎么有两个？！");
        npc.sayNextNoEsc("......? 月亮本来就有两个。人类, 你很痛苦吗? ", 3002001);

        npc.sayNextSNoEsc("月亮本来就有两个？怎么可能！而且，我的等级……#r#e10级#k#n？！到底发生了什么事……！");
        npc.sayNextNoEsc("没有耳朵就已经很奇怪了。头脑也好像有点不太正常。", 3002003);

        npc.sayNextNoEsc("所以才被抛弃了吗？唉，真可怜……", 3002002);

        npc.sayNextNoEsc("真可怜。我们先把他带回村里去吧。", 3002100);
        npc.sayNextNoEsc("不过随便把陌生人带回去的话，会被大人们骂的。", 3002001);

        npc.sayNextNoEsc("但是又不能把他扔在这里。一切由我负责。走吧！", 3002100);


        player.destroyTempNpc(3002100);
        player.destroyTempNpc(3002001);
        player.destroyTempNpc(3002002);
        player.destroyTempNpc(3002003);
        player.destroyTempNpc(3002004);
        player.startQuest(38900, 0, "5");
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
        //player.setStandAloneMode(false);
        player.setVansheeMode(false);
        player.changeMap(940200000, 0);

}