/*  This is mada by Yanran    
 *  
 *  功能：艾利涅劫持现场
 *  
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
player.setVansheeMode(true);//隐身
player.spawnTempNpc(1500031, 52, 245);
player.setNpcSpecialAction(1500031, "summon", 0, false);
player.spawnTempNpc(1500032, 184, 245);
////npc.setDelay(500);
npc.sayNextNoEsc("太可怕了……呜呜，呜呜。我们只是想排练演出罢了……", 1500016);
////npc.setDelay(1000);
npc.sayNextNoEsc("别担心，乌尼，会没事的……会有人来救我们的。", 1500018);
player.spawnTempNpc(1500026, -242, 245);
//player.setNpcSpecialAction(1500018, "summon", -1, false);
player.setNpcForceFlip(1500018, 1);
////npc.setDelay(1100);
npc.sayNextNoEsc("呵呵呵，竟敢侵犯我地鼠王的领地，你们这些妖精，个头不大，可胆子倒挺大啊。", 1500026);
npc.sayNextNoEsc("请放了我们吧。我们不会再踏入这里半步。", 1500016);
npc.sayNextNoEsc("那怎么行。现在，这里马上就要成为我的王国了！并且你们会成为我的新娘。", 1500026);
npc.sayNextNoEsc("什么，是谁！竟敢！", 1500018);
npc.sayNextNoEsc("不能继续在这黑暗的地底呆下去了。我把曼德拉草释放到外面的世界也只不过是个开始。这就是地下世界的宣战！不管哪个妖精都阻止不了我，嘿嘿嘿嘿！", 1500026);
npc.sayNextNoEsc("呜，谁来帮帮我！……", 1500016);
//player.destroyTempNpc(1500016);
//player.destroyTempNpc(1500018);
//player.destroyTempNpc(1500026);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false);//隐身
player.changeMap(101073100, 0);
