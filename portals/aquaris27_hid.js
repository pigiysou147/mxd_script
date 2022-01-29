var event = portal.getEvent();
if (event != null) {
        player.teleportToPortalId(7);
        var stage = parseInt(event.getVariable("stage"));
        event.setVariable("stage" + stage, "clear");
        player.screenEffect("quest/party/clear");
        event.getVariable("map" + stage).blowWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
}
portal.abortWarp();