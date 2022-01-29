player.setInGameCurNodeEventEnd(true);
player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.setVansheeMode(true);
//player.setForcedInput(1);
//////npc.setDelay(1);
//player.setForcedInput(0);
showPlayerEffectPlay("Map/Effect3.img/BossLucid/Lucid5", 2800, 195, 0, false, 0);
showPlayerEffectPlay("Map/Effect3.img/BossLucid/Lucid4", 2800, 195, 0, false, 0);
showPlayerEffectPlay("Map/Effect3.img/BossLucid/Lucid3", 4000, 195, 0, false, 0);
showPlayerEffectPlay("Map/Effect3.img/BossLucid/Lucid2", 4000, 195, 0, false, 0);
showPlayerEffectPlay("Map/Effect3.img/BossLucid/Lucid", 4000, 195, 0, false,  0);
//////npc.setDelay(4000);
player.soundEffect("Sound/SoundEff.img/ArcaneRiver/phase2");
setLayerOn(1000, "BlackOut", 0, 0, 13, "Map/Effect2.img/BlackOut", 4);
//////npc.setDelay(1000);
player.setLayerOff(1000, "BlackOut");
player.setStandAloneMode(false);
player.setVansheeMode(false);
player.setInGameDirectionMode(false, false, false, false);

player.changeMap(map.getId() + 50);

function showPlayerEffectPlay( data,  tDuration,  nRx,  nRy,  bOverlay,  pOverlay){
	player.showPlayerEffectPlay(data,  tDuration,  nRx,  nRy,  bOverlay,  pOverlay);
}

function setLayerOn( tTerm,  sKey,  nRX,  nRY,  nZ,  sUOL,  locations){
	player.setLayerOn( tTerm,  sKey,  nRX,  nRY,  nZ,  sUOL,  locations,  false,  0,  false,  0,  0);
}

