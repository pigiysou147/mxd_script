// Created by Jackson
// ID:[865000000]
// MapName:桑凯梅尔兹


if (player.isQuestStarted(17614)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setTemporarySkillSet(0);
        player.setInGameDirectionMode(true, true, false, false);
        ////player.setStandAloneMode(true);
        npc.sayNextSNoEsc("这里就是凯梅尔兹的首都#e#b桑凯梅尔兹#k#n吗?", true);
        npc.setCameraMove(false, 400, false, 5000, 526);
        //npc.setDelay(14007);
        npc.setCameraMove(true, 3000, false, 0, 0);
        //npc.setDelay(1000);
        npc.sayNextSNoEsc("#b(凯梅尔兹的首都真的很大啊。能重新见到莱文吗?我还是先去达尼尔拉商团比较好。)#k", true);
        npc.sayNextSNoEsc("去向那边的那个人问问路吧。", true);
        player.setInGameDirectionMode(false, true, false, false);
        ////player.setStandAloneMode(false);
        player.startQuest(17614, 0, "到达");//Quest Name:[凯梅尔兹共和国] 后会有期
        player.completeQuest(17614, 0);//Quest Name:[凯梅尔兹共和国] 后会有期
        player.completeQuest(17711, 0);//Quest Name:第2章.新朋友
        player.gainExp(630724);
}
