var event = portal.getEvent();
if (player.isGm()) {
        player.showSystemMessage("stage9_" + portal.getName().substring(3, 6));
}
if (event != null) {
        if (player.isGm()) {
                player.showSystemMessage(event.getVariable("stage9_" + (portal.getName().substring(3, 6))));
        }
        if ("1".equals(event.getVariable("stage9_" + (portal.getName().substring(3, 6))))) {
                var s = parseInt(portal.getName().substring(3, 4));
                player.teleportToPortalId(s == 8 ? 42 : (s - 1) * 4 + 3);
                map.portalEffect("ans" + portal.getName().substring(3, 6));
                if (s == 8) {
                        var stage = parseInt(event.getVariable("stage"));
                        event.setVariable("stage" + stage, "clear");
                        player.screenEffect("quest/party/clear");
                        map.blowWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                }
        } else {
                player.teleportToPortalId(1);
        }
} else {
        player.showSystemMessage("发生未知错误，请退出后重试!");
}
portal.abortWarp();