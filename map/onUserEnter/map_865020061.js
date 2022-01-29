// Created by Jackson
// ID:[865020061]
// MapName:运河战场

if (!player.isQuestCompleted(17631)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(true, true, false, false);
        //player.setStandAloneMode(true);
        npc.sayNextSNoEsc("切,真是源源不断地冒出来啊。", true);
        npc.sayNextNoEsc("#h0 #对不起。都怪我,我们才会陷入现在的困境。我应该听你的,我太自满了。", 9390234);
        npc.sayNextSNoEsc("你在说什么啊,现在这种状况放弃还太早。 ", true);
        npc.sayNextNoEsc("(怎么办。话虽然这么说,但再这样下去就不好了。)", 9390234);
        //npc.setDelay(1700);
        npc.sayNextNoEsc("喂,你们是乖乖投降呢,还是选择死在这里呢。", 9390208);
        npc.sayNextSNoEsc("咳,那个", true);
        //npc.setDelay(1700);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 240, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 140, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 40, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -40, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -140, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -240, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        npc.sayNextSNoEsc("嗯?这是怎么回事?", true);
        //npc.setDelay(2000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 240, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -140, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(800);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 40, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -40, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(800);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 140, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -240, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(800);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 40, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -40, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(800);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 340, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -240, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        //npc.setDelay(1000);
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 340, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 240, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 140, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, 40, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -40, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -140, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -240, 0, false, -2, "");
        player.showPlayerEffectPlay("Effect/DirectionBT.img/effect/Comerz/Boom1", 0, -340, 0, false, -2, "");
        player.soundEffect("cannonshooter/Attack3");
        npc.sayNextNoEsc("是陆地上的家伙的支援军吗?我们看不见敌人会吃亏的。全体撤退!", 9390208);
        npc.sayNextSNoEsc("什么呢。是统帅派来的援兵吗?", true);
        npc.sayNextNoEsc("这是怎么回事。不可能再有援军赶来啊。", 9390202);
        player.startQuest(17631, 0);//Quest Name:[凯梅尔兹共和国] 意外的援助
        let OBJECT_11 = player.spawnTempNpc(9390247, 985, 348, 1);//NpcName:OBJECT_11
        player.setNpcSpecialAction(OBJECT_11, "summon", 0, false);
        npc.sayNextSNoEsc("啊,你是…!!", true);
        npc.sayNextNoEsc("哈哈哈。我们又见面了。", 9390247);
        npc.sayNextSNoEsc("这是怎么回事。你为什么要救我们?", true);
        npc.sayNextNoEsc("这个么。救人还需要理由吗?", 9390247);
        npc.sayNextSNoEsc("虽然不是那样的...", true);
        npc.sayNextNoEsc("喂,是 #h0#认识的人吗?", 9390202);
        npc.sayNextSNoEsc("啊.. 这个么。只是见过的话,算是认识的人吗?", true);
        npc.sayNextNoEsc("感谢你帮助我们。我是达尼尔拉商团的莱文·达尼尔拉。", 9390202);
        npc.sayNextNoEsc("我以为是谁呢,原来是达尼尔拉商团统帅的儿子啊。", 9390247);
        npc.sayNextNoEsc("非常感谢你的帮助。现在事情终于结束了吧。", 9390202);
        npc.sayNextNoEsc("等下,打招呼就算了,谢礼是要给的吧。你不是有很多钱嘛。", 9390247);
        npc.sayNextNoEsc("......嗯?", 9390202);
        npc.sayNextNoEsc("你不是说感谢我。应该给我谢礼啊。有钱人反而更小气。", 9390247);
        npc.sayNextNoEsc("不,不是的。你不说,我也打算给你的。我当然应该给你,哈哈。", 9390202);
        npc.sayNextNoEsc("快拿出来吧。好了,那我就告辞了。再见。哈哈哈。", 9390247);
        player.destroyTempNpc(OBJECT_11);
        npc.sayNextSNoEsc("真是个会精打细算的女人。", true);
        npc.sayNextNoEsc("嗯。但那也是一种魅力。真想再见到她。", 9390202);
        npc.sayNextSNoEsc("(... 你的口味还真独特。)", true);
        player.gainExp(5793937);
        player.completeQuest(17631, 0);//Quest Name:[凯梅尔兹共和国] 意外的援助
        // Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(false, true, false, false);
        //player.setStandAloneMode(false);
}