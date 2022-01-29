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


switch (map.getId()) {
        case  807100010:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.showScreenDelayedEffect("JPKenji/text0", 0);
                //npc.setDelay(7000);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100000);
                break;
        case 807100000:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                //player.setForcedInput(1);
                //npc.setDelay(4300);
                //player.setForcedInput(0);
                npc.sayNextENoEsc("终于到时间啦，第六天魔王的化身织田信长的神话今天将是最后一天啦。", 9130000);

                npc.sayNextENoEsc("没能守住主力军队，没能守住家族，没能守住公主殿下的耻辱…想到今天终于可以洗清，激动不已。", true);
                npc.sayNextENoEsc("虽然受到污名而报仇也不错，但是只有一身热血不太好。我不是不知道你的实力，头脑过热就会容易判断错误，若判断错误就容易失手。", 9130000);

                npc.sayNextENoEsc("谢谢你的提醒，不知道能不能控制涌入我剑上的血。", true);
                npc.sayNextENoEsc("哈哈哈，你能这么说就代表你还不错，那我就相信你的实力，把本能寺进攻第一步让你迈开可以吗？", 9130000);
                npc.sayNextENoEsc("你是说东门的开门吗？", true);
                npc.sayNextENoEsc("是喔，你翻过本能寺墙壁打开东门的话武田信玄骑马队进攻践踏魔王的手下的。", 9130000);
                npc.sayNextENoEsc("我的切开云雾之剑只要敌人的血，不在乎任务，请交给我吧。", true);
                npc.sayNextENoEsc("哈哈哈，很强大的气魄！若可以的话就这样一直都把你留作我的手下，祝你好运，武田信玄骑马队很快会跟上去的！", 9130000);

                player.setInGameDirectionMode(false, true, false, false);
                player.startNavigation(807100000, 0, "out00", 0);
                break;
        case 807100011:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.showScreenDelayedEffect("JPKenji/text1", 0);
                //npc.setDelay(7000);
                player.setInGameDirectionMode(false, true, false, false);
                npc.makeEvent("change_job", false, [player, 807100001]);
                break;
        case 807100001:
                player.updateQuestRecordEx(57100, "npc9131009", "8");
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                map.spawnMob(9421505, -630, 32);
                map.spawnMob(9421507, -450, 32);
                map.spawnMob(9421505, -270, 32);
                map.spawnMob(9421507, -90, 32);
                map.spawnMob(9421505, 90, 32);
                map.spawnMob(9421507, 270, 32);
                map.spawnMob(9421505, 450, 32);
                map.spawnMob(9421507, 630, 32);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/2", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.scriptProgressMessage("打败所有敌人打开东门吧！");
                player.showScreenDelayedEffect("aran/tutorialGuide2", 0);

                player.setSkillLevel(40011183, 1, 1, false);
                player.setSkillLevel(40011184, 1, 1, false);
                player.setSkillLevel(40011185, 1, 1, false);
                player.setSkillLevel(40011186, 1, 1, false);
                player.setInGameDirectionMode(false, true, false, false);

                break;
        case 807100012:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.showScreenDelayedEffect("JPKenji/text2", 0);
                //npc.setDelay(7000);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100003);
                break;
        case 807100002:
                npc.sayNextENoEsc("果然做的很好，我越来越喜欢你啦。", 9131007);
                npc.sayNextENoEsc("并不困难，况且战斗已经开始了所以更加简单…到底在发生什么事情？是负责北边的上杉谦信南边的士兵首先攻进去的？", true);
                npc.sayNextENoEsc("说好各方面同时进攻的，若不是某个人想打乱计划忽略进攻信号就很难说啦。当然还是有可疑的地方…但是没办法确定所以现在答应你没什么意义吧。", 9131007);
                npc.sayNextENoEsc("营内很混乱所以我们很容易进攻，目前情况对我们没有害处，关于真相的确认等阻挡织田信长后再进行也不晚，趁胜攻击本堂吧", 9131007);
                npc.sayNextENoEsc("知道了，失陪啦！", true);
                break;
        case 807100003:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                //player.setForcedInput(1);
                //npc.setDelay(2200);
                //player.setForcedInput(0);
                //npc.setDelay(100);
                npc.sayNextENoEsc("喔啦啦，呼呼…去抓老虎的路上遇到了鹿，看打扮不像是织田信长所属的武装，怎么会来到本能寺呀？", 9131000);
                npc.sayNextENoEsc("(与温柔的外貌或者语气不同感觉一股杀气…是织田信长所属的将帅吗？)", true);
                npc.sayNextENoEsc("我是松山家族的山崎伴信的大儿子剑斗！我来是为了主家和一个家族报仇找回公主殿下！", true);
                npc.sayNextENoEsc("松山，松山…好陌生的名字，当然若是不存在的名字记它又有什么意义。", 9131000);
                npc.sayNextENoEsc("看你那傲慢且旁若无人的态度，不用知道名字也能肯定是魔王的手下，那么我和切开云雾之剑也不用在犹豫啦。", true);
                npc.sayNextENoEsc("现在也不晚，想报上名字尽管报，这将是你在这个世界的最后的声音。", true);
                npc.sayNextENoEsc("是喔，没必要知道名字啦。", 9131007);

                player.spawnTempNpc(9131007, 135, 30, 1);
                player.setNpcSpecialAction(9131007, "summon", 0, false);
                npc.sayNextENoEsc("信玄！", true);

                npc.sayNextENoEsc("看你就知道这次混战从哪里开始的，难道不是吗？四天王，明智光秀！", 9131007);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);

                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/4", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                npc.sayNextENoEsc("喔啦啦，呼呼…果然武田信玄名不虚传呀，第一眼就知道我的真实身份，连我要谋反的事情也知道了。 ", 9131000);
                npc.sayNextENoEsc("第一次亲自见你，但是根据我听到的传闻你不是那种可以在别人手下很长时间的人，怎么样，若是把剑对准原来的主人，那么考虑一下要不要联手啊？", 9131007);

                npc.sayNextENoEsc("信玄，就是那家伙把松山烧了！怎么可以跟大仇人联手！明智光秀觉悟吧！", true);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/5", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/6", 0, -100, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/7", 0, -100, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/8", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/9", 0, -100, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/10", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                //player.setForcedInput(1);
                //npc.setDelay(1300);

                //player.setForcedInput(0);
                //npc.setDelay(1300);

                //player.setForcedInput(0);
                //npc.setDelay(1300);

                player.setForcedAction(1802, 0);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/11", 0, -100, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/12", 0, -100, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/13", 0, 150, -120, false, 0, false, 0);
                //npc.setDelay(2000);

                player.setNpcSpecialAction(9131007, "attack", 0, false);

                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/shingenAttack/0", 0, 0, 0, false, 0, false, 0);
                //npc.setDelay(400);

                player.destroyTempNpc(9131007);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100004);
                break;
        case 807100004:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                player.setForcedMove(1, 550);
                //npc.setDelay(4200);
                npc.sayNextENoEsc("我无意对女性兵戎相向。速速退开吧。", true);
                npc.sayNextENoEsc("#face0#哼，真是个没有礼貌的毛头小子。你知不知道我是什么人？我可是斋藤道三的女儿，第六天魔王织田信长的正室妻子——浓姬。", 9131005);
                npc.sayNextENoEsc("这句话。我无意对女性兵戎相向。快点给我退开。", true);
                npc.sayNextENoEsc("#face0#你还挺狂妄的嘛。那就让我来试试看，你的本事是不是和你的态度一样拽上天！", 9131005);
                player.setNpcSpecialAction(9131005, "step", 0, false);
                //npc.setDelay(1080);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14", 0, -100, -100, false, 0, false, 0);
                //npc.setDelay(1000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15", 0, -150, -150, false, 0, false, 0);
                //npc.setDelay(2000);

                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16", 0, -150, -150, false, 0, false, 0);
                //npc.setDelay(2000);
                player.showPlayerEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17", 0, 0, -120, false, 0, false, 0);
                //npc.setDelay(2000);
                //player.setForcedInput(1);
                //npc.setDelay(1800);
                //player.setForcedInput(5);
                //npc.setDelay(1000);
                //player.setForcedInput(0);
                //npc.setDelay(500);
                player.setInGameDirectionMode(false, true, false, false);
                player.changeMap(807100005);
                break;
        case 807100005:
                player.setInGameCurNodeEventEnd(true);
                //player.setStandAloneMode(true);
                player.setInGameDirectionMode(true, false, false, false);
                let selection = npc.playMovie("JPHayato.avi", true);
                if (selection == 0) {
                        player.scriptProgressMessage("播放动画失败。");
                }
                player.setInGameDirectionMode(false, true, false, false);
                for (let i = 0; player.getLevel() < 10; i++) {
                        player.gainExp(500);
                }
                player.gainEquipInventorySlots(4);
                player.gainUseInventorySlots(4);
                player.gainSetupInventorySlots(4);
                player.gainEtcInventorySlots(4);
                player.gainCashInventorySlots(4);
                player.setJob(4100);
                player.resetStats(4, 4, 4, 4);
                player.gainSp(5);
                player.loseInvSlot(-1, -1);
                player.loseInvSlot(-1, -11);
                player.loseInvSlot(-1, -5);
                player.loseInvSlot(-1, -8);
                player.loseInvSlot(-1, -7);
                player.changeMap(807040000, 0);
                break;
}



