
var event = npc.getEvent("CWKPQ");
if (event != null) {
	
	
	if(event.getVariable("第五关通关") == "1" ||( player.hasItem(4001256,1) && player.hasItem(4001257,1)&& player.hasItem(4001258,1)&& player.hasItem(4001259,1)&& player.hasItem(4001260,1) )){
	    player.loseItem(4001256,1);
	    player.loseItem(4001257,1);
	    player.loseItem(4001258,1);
	    player.loseItem(4001259,1);
	    player.loseItem(4001260,1);
		event.setVariable("第五关通关","1");
		party.changeMap(610030600, 0);
		
	}else{
		npc.say("请让一个人带上 #v4001256##v4001257##v4001258##v4001259##v4001260# 再来见我",9201112)
	}
	
	
		/*
	if (parseInt(event.getVariable("glpq5"))<5) {
		var item58 = event.getVariable("4001258");
		var item56 = event.getVariable("4001256");
		var item59 = event.getVariable("4001259");
		var item57 = event.getVariable("4001257");
		var item60 = event.getVariable("4001260");
		var text ="上交道具：\r\n";
		text+="#L4001258#	#v4001258#先祖之弓 x 1 "+(item58>0?"#b已上交":"#r未上交")+"#k\r\n";
		text+="#L4001256#	#v4001256#原初之爪 x 1 "+(item56>0?"#b已上交":"#r未上交")+"#k\r\n";
		text+="#L4001259#	#v4001259#大师之剑 x 1 "+(item59>0?"#b已上交":"#r未上交")+"#k\r\n";
		text+="#L4001257#	#v4001257#起源之杖 x 1 "+(item57>0?"#b已上交":"#r未上交")+"#k\r\n";
		text+="#L4001260#	#v4001260#禁忌之枪 x 1 "+(item60>0?"#b已上交":"#r未上交")+"#k\r\n";
		var sel = npc.askMenu(text);
		var item = sel.toString();
		if(event.getVariable(item)>0){
			npc.say("这种类型道具已经上交过。"+parseInt(event.getVariable("glpq5")));
		}else{
			event.setVariable(item,"1");
			player.loseItem(sel,1);
			event.setVariable("glpq5",parseInt(event.getVariable("glpq5"))+1);
			npc.say("成功上交。");
		}
		
	} else {
		
	    player.loseItem(4001256,1);
	    player.loseItem(4001257,1);
	    player.loseItem(4001258,1);
	    player.loseItem(4001259,1);
	    player.loseItem(4001260,1);
		player.addPQLog("绯红任务",1);
		player.setEventValue("绯红远征组队");
		player.changeMap(610030600, 0);
	}
	*/
}

