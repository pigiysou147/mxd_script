/*  This is mada by Jackson    
 *  This source is made by Funqm Team
 *  
 *  功能：[拉克兰]打碎碟子2
 *  
 *  @Author Jackson 
 */

npc.sayNext("优胜者是派面具！");	               		    
npc.sayNext("在那期间食物大战已经展开了。",3003203);	               			    
npc.sayNext("哇！你看到了吗？真的是吃个没完啊！",3003216);	               		    
npc.sayNext("输了，我居然输了！我一定要做一届优胜者的！",3003238);	               		    
npc.sayNextS("虽然打碎了盘子！但就这样成了冠军？",false);	               		    
npc.sayNext("甚至还不是打碎了所有盘子。",3003203);	               		    
npc.sayNext("终于胜利了……请看着我，仰视我。嗯，我好幸福。");	               		    
npc.sayNext("不对啊？好奇怪……我原本就很幸福啊？哦哦！");
player.loseItem(4034982,20);
npc.completeQuest();	               
player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 255, 1000);						
//player.setForcedInput(2000);								
//player.setOverlapDetail(0, 200, 200, true);
//player.setForcedInput(1);	
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.setOverlapDetail(0, 200, 200, true);	
//player.removeOverlapDetail(1500);
player.changeMap(450003730,0);

