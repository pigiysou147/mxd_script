var event = npc.getEvent("PQ_PoisonForest");
if (event!=null){
	if (event.getVariable("number")==19){
       event.setVariable(String(map.getId()), true);
            map.screenEffect("quest/party/clear");
	} else {
		event.setVariable("number", parseInt(event.getVariable("number"))+1);
	}
}