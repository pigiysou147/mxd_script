player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, -1, 0);
showSpineScreen(0, "Map/Effect2.img/DemianIllust/1pahseSp/demian", "animation", "intro");
player.soundEffect("Sound/SoundEff.img/BossDemian/phase1");
//////npc.setDelay(8000);
setLayerOn(1000, "BlackOut", 0, 0, 13, "Map/Effect2.img/BlackOut", 4);
//////npc.setDelay(1000);
player.offSpineScreen("intro", 100);
player.setLayerOff(1000, "BlackOut");
player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);

player.changeMap(map.getId() - 60);



function showSpineScreen( tEndDelay,  sPath,  animationName,  nStr){
	player.showSpineScreen(false,false,false, tEndDelay,  sPath,  animationName,  nStr, false, 0, 0,null);
}
function setLayerOn( tTerm,  sKey,  nRX,  nRY,  nZ,  sUOL,  locations){
	player.setLayerOn( tTerm,  sKey,  nRX,  nRY,  nZ,  sUOL,  locations,  false,  0,  false,  0,  0);
}
