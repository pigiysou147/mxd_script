/*  This is mada by     
 *
 *  功能：[消亡旅途]失去记忆的神官
 *
 *  @Author 
 */
if (player.isQuestCompleted(1466)) {
    npc.sayNextS("#b（询问到底发生了什么事。）#k");
    npc.sayNext("看来得先提提这件事了，你见过村庄外围的那条宽阔的湖吗？听村民说，那条湖叫做忘却之湖，一旦坠入便会失去所有的记忆。");
    npc.sayNext("可能是受到了湖的影响，据说这周围的人每天都会丢失一点点的记忆，所以才有了这记忆之树的存在。大家会将珍贵的记忆挂在树上，每日细细端详，趁着它们风干消失之前……");
    npc.sayNext("听村民们提到了树的事情之后，我的心咯噔了一下，那上面是否也会有和我相关的记忆呢，我便立刻下定决心去调查那棵树，可是……");
    npc.sayNext("可是不知为何，我刚一碰到就……");
    
    player.setInGameDirectionMode(true, false, false, false);
    
    player.changeBGM("Bgm00/Silence");
    player.setLayerOn(0, "11", 0, 0, -1, "Map/Effect2.img/BlackOut", 4, true, -1, false, 0, 0);
    player.setLayerOn(2000, "0", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/tree1", 4, true, -1, false, 0, 0);
    player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/tree_revive");
    //npc.setDelay(4000);
    player.setLayerOff(300, "0");
    player.setLayerOn(2000, "1", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/tree2", 4, true, -1, false, 0, 0);
    player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/tree2");
    //npc.setDelay(3000);
    player.setLayerOff(300, "1");
    player.setLayerOn(2000, "2", 0, -80, -1, "Map/Effect2.img/ArcaneRiver1/tree3", 4, true, -1, false, 0, 0);
    player.playExclSoundWithDownBGM("SoundEff.img/ArcaneRiver/tree");
    //npc.setDelay(5000);
    player.setLayerOff(300, "2");
    player.setLayerOff(300, "11");
    player.setInGameDirectionMode(false, false, false, false);
    player.changeBGM("Bgm46/Lake Of Oblivion");
    npc.sayNext("那些记忆……村民的珍贵的记忆……全都四散而去，人们大失所望，就连每日重复的那些工作也都停工了，负责在忘却之湖上渡河的船也停运了。");
    npc.completeQuest();
} else {
    npc.say("... 要怎么做才能抚慰他们的心灵呢？\r\n\r\n#b（必须完成<另一种力量，神秘力量>任务，获得神秘徽章。）");
    npc.say("<另一种力量，神秘力量>任务 在左边灯泡处接受任务。）");
}