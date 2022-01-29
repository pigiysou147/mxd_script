var event = portal.getEvent();
if (event != null) {
        player.teleportToPortalId(1);
        map.blowWeatherEffectNotice("唉......好危险阿。还好我的力量可以把你带到这里来。小心别坠落了。", 147, 15000);
}
portal.abortWarp();