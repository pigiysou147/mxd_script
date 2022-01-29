let event = reactor.getEvent();
if (event != null) {
        var check = event.getVariable("s36Check");
        var answer = event.getVariable("s36Answer") + "4";
        event.setVariable("s36Answer", answer);
        if (player.isGm()) {
                player.showWeatherEffectNotice("[S36Answer] " + event.getVariable("s36Answer"), 149, 15000);//显示提示
        }
        if (answer.equals(check)) {
                var s36phase = parseInt(event.getVariable("s36phase")) + 1;
                var questT = parseInt(event.getVariable("s36QuestT"));
                event.setVariable("s36phase", String(s36phase));
                player.showWeatherEffectNotice("恭喜你通过第" + s36phase + "次考验！", 149, 1000);//显示提示
                if (s36phase >= questT && !"clear".equals(event.getVariable("stage36"))) {
                        event.setVariable("stage36", "clear");
                        player.screenEffect("quest/party/clear");
                        map.blowWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                }
        }
}
