

player.showSystemMessage("11");
if (player.hasItem(4001815,4)){
    var event = reactor.getEvent("PQ_PoisonForest");
    player.loseItem(4001815, 4);
    event.setVariable(String(map.getId()), true);
    map.screenEffect("quest/party/clear");
} else {
	player.showSystemMessage("你必须要有四个稀释的毒素");
	map.resetReactors();
}
