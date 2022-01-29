/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 灯泡 哈南特的紧急呼叫 初始对话
 *
 *  @Author Yanran
 */
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setForcedInput(0);
player.spawnTempNpc(9063152, 9, 87);
player.setNpcSpecialAction(9063152, "summon", 1, false);
//ms.setNpcForceMove(9063152, -1, 400, 100);
//player.setForcedInput(1);
//npc.setDelay(30);
player.setInGameCurNodeEventEnd(true);
//ms.setDelay(3000);
//player.setForcedInput(0);
npc.setCameraMove(false, 300, 300, 50);
//ms.setForcedAction(4, 6000);
player.setNpcForceMove(9063152, -1, 75, 125);
//npc.setDelay(1000);
player.setNpcForceMove(9063152, 1, 75, 125);
//npc.setDelay(1200);
player.setNpcForceMove(9063152, -1, 75, 125);
//npc.setDelay(1000);
player.setNpcForceMove(9063152, 1, 75, 125);
//npc.setDelay(1200);
player.setNpcForceMove(9063152, -1, 75, 125);
//npc.setDelay(500);
player.setNpcForceMove(9063152, 1, 0, 125);
//npc.setDelay(1000);
//player.setForcedInput(1);
//npc.setDelay(2000);
//player.setForcedInput(0);
//npc.setDelay(500);
player.showNpcEffectPlay(9063152, "Effect/Direction2.img/effect/chat/nugu/0", 900, 0, -70, true, 0, false, 0);
//npc.setDelay(500);
player.setNpcForceMove(9063152, 1, 180, 200);
//npc.setDelay(4000);
//player.runScript("root_erb");
npc.sayNextENoEsc("你来啦。我一直在等你。", 9063152);
npc.sayNextENoEsc("因为听说事情非常紧急，我就赶紧过来了。到底发生了什么事？", true);
npc.sayNextENoEsc("冒险岛联盟收到了重要的情报，我急着把你叫过来，是想把情况告诉你。根据情报，最近在林中之城北部地区出现了之前没有的神秘地区。", 9063152);
npc.sayNextENoEsc("新的地区？", true);
npc.sayNextENoEsc("可以隐约地感觉到结界的气息，好像是之前被结界隐藏起来的地区。现在我们对那里还一无所知。", 9063152);
npc.sayNextENoEsc("问题是在那个地区可以感觉到很强的黑暗气息。冒险岛联盟推测那里也许是黑魔法师一伙的基地，但是还无法确定。", 9063152);
npc.sayNextENoEsc("你能到那里去，看看到底是什么地方吗？", 9063152);
npc.sayNextENoEsc("我们已经派遣冒险骑士团成员前去调查，但是那里被迷雾笼罩着，还有很多茂盛的树木，现在连地形都还没有调查清楚。", 9063152);
npc.sayNextENoEsc("那我应该怎么做呢？", true);
npc.sayNextENoEsc("我们怀疑那个突然出现的地区是黑魔法师一伙的基地，必须先调查一下那个地区为什么会突然出现。但是现在冒险骑士团的人手非常不足。", 9063152);
npc.sayNextENoEsc("#b#h2##k，希望你能帮帮我们。我现在马上把你送到#b#m105010000##k去。请你去对和那里相连的新地区进行探索。如果发现了什么，请立即向我报告。", 9063152);
npc.sayNextENoEsc("好的，我马上用神兽的力量把你送到#b#m105010000##k去。", 9063152);
player.changeMap(105010000, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
//player.openNpc(9063152, "root_erb");