let event = reactor.getEvent();
if (event != null) {
        if (!"clear".equals(event.getVariable("stage29"))) {
                event.setVariable("stage29", "clear");
                player.screenEffect("quest/party/clear");
                map.blowWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
        }
}
