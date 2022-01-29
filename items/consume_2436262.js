start();

function start() {
    if (player.startAutoAttack(600)) {// 600秒=10分钟
        player.loseItem(npc.getItemId(), 1);
        map.blowWeatherEffectNotice(player.getName() + " 开启了自动攻击模式！", 147, 10000);//显示提示
        return
    } else {
        player.dropAlertNotice("当前地图已经有人开启自动攻击了")
    }
}