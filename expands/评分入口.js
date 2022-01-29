var ttt= "\r\n    #r#e\t\t#v2630475#战斗力系统#v2630475#\r\n\r\n";
    ttt+="\t\t  #L0##v1142742#功力PK#v1142742##l\r\n\r\n";
    ttt+="\t\t#L2##v4440300#能力值宝石合成#v4440300##l\r\n\r\n";
    ttt+="#L3##v4440300#火焰狼挑战#v4440300##l\t";
    ttt+="#L4##v4440300#欧碧拉挑战#v4440300##l\r\n\r\n";
    
    ttt+="\t    #L1##fUI/UIAchievement/achievement/pages/main/achievementForm/basic/difficultyIcon/unique#装备评分#fUI/UIAchievement/achievement/pages/main/achievementForm/basic/difficultyIcon/unique##l\r\n";
    let ss=npc.askMenuS(ttt);
    if(ss==0){
        
        player.runScript("pk");
    }else if(ss==1){
        
        player.runScript("装备评分");
    }else if(ss==2){
        
        player.runScript("能力值宝石合成");
    }else if(ss==3){
        player.runScript("火焰狼入口");
    }else if(ss==4){
        player.runScript("欧碧拉入口");
    }