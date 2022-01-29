/*  This is mada by    
 *  
 *  功能：[拉克兰]谁是“清醒者”？2
 *  
 *  @Author 
 */

npc.sayNext("“清醒着”是谁？");  		    
let selection = npc.askMenu("你说什么？\r\n\r\n#b#L0#美女面具#l\r\n#b#L1#绅士猫面具#l\r\n#b#L2#虾虾面具#l");           
if(selection == 0){	
	npc.say("你肯定看错了！");	                  
} else if(selection == 1){	
	npc.say("嗯，你肯定看错了！");	                  
} else {
	npc.say("原来如此。和虾虾面具对话，试着说服他吧。");
	npc.startQuest();
}

