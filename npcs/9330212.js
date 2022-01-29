
var ttt="#r#e\t\t\t收集活动\r\n";
    ttt+="#L0#全服收集#v4310011#活动(大家一起帮回忆收集小雪花)#l\r\n\r\n";
    //ttt+="#L1#个人粽子活动(可以获得精美粽子哦)#l\r\n\r\n";
    let se = npc.askMenu(ttt);
    if(se==0){
        player.runScript("中秋收集");

    }else if(se==1){
        player.runScript("端午收集活动2");
    }