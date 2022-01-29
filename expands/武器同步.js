


// player.setSkillLevel(63121042,1,1,true);
// player.setSkillLevel(63121044,1,1,false);
// player.setSkillLevel(63120033,1,1,false);
// player.setSkillLevel(63120032,1,1,false);
// player.setSkillLevel(63120031,1,1,false);

let sel = npc.askYesNo("#r#e请把突破高的武器放在主手，突破低的武器放在副手哦~\r\n如果需要同步属性，请点击确认哦~ ");
if(sel==1){
    if(player.getJob()==10112){
        var item1=player.getInventorySlot(-1,-11);
        var item2=player.getInventorySlot(-1,-10);
        player.synchronizeZeroWeapon(item1);
        item2.setTitle(item1.getTitle());
        player.updateItem(-10,item2);
        npc.say("属性同步成功");
        
    
    
        // //判断主手武器攻击大于副手
        // if(item1.getLimitBreak()>=item2.getLimitBreak()){
        //     //可以使用
        //     //替换掉属性
        //     //力量
        //     item2.setStr(item1.getStr());
        //     //敏捷
        //     item2.setDex(item1.getDex());
        //     //智力
        //     item2.setInt(item1.getInt());
        //     //运气
        //     item2.setLuk(item1.getLuk());
        //     //攻击
        //     item2.setPad(item1.getPad());
        //     //魔法攻击
        //     item2.setMad(item1.getMad());
            
        //     item2.setCHUC(item1.getCHUC());
            
        //     item2.setTitle(item1.getTitle());
            
        //     item2.setGrade(item1.getGrade());
            
        //     item2.setBossDamageR(item1.getBossDamageR());
    
        //     item2.setIgnorePDR( item1.getIgnorePDR());

        //     item2.setRUC(item1.getRUC());
        //     item2.setViciousHammer(item1.getViciousHammer());
        //     item2.setCUC(item1.getCUC());
        //     item2.setStatR(item1.getStatR());
        //     item2.setPdd(item1.getPdd());
        //     item2.setCraft(item1.getCraft());
        //     item2.setMaxHp(item1.getMaxHp());
        //     item2.setMaxMp(item1.getMaxMp());
            
        //     item2.setSocket(1,item1.getSocket(1));
        //     item2.setSocket(2,item1.getSocket(2));
        //     item2.setSocket(3,item1.getSocket(3));


        //     item2.setOption(1, item1.getOption(1,false), false);
        //     item2.setOption(2, item1.getOption(2,false), false);
        //     item2.setOption(3, item1.getOption(3,false), false);
        //     item2.setOption(1, item1.getOption(1,true), true);
        //     item2.setOption(2, item1.getOption(2,true), true);
        //     item2.setOption(3, item1.getOption(3,true), true);
        //     item2.setLimitBreak(item1.getLimitBreak());
        //     player.updateItem(-10,item2);
        //     npc.say("属性同步成功");
    
    
        // }else{
        //     npc.say("请确保主武器的突破大于副手~");
        // }
    
    
    
    
       
    
    
    
    
    }else{
        npc.say("只有神之子可以进行武器属性同步哦");
    }
}

// player.runScript("七夕兑换");
//player.runScript("团队副本");

//var event =npc.getEvent("JILI_PDT");
//
//npc.makeEvent("JILI_PDT",true,"");
//event.destroyEvent();

//npc.say((event.getVariables()));


// var txt="\r\n请选择你要强化的超级技能:\r\n";

// var skillList = player.customSqlResult("select * from characters_skills where   masterlevel=1 and characters_id =?",player.getId());
// for(var i=0;i<skillList.size();i++){
//     if(player.getSkillLevel(skillList.get(i).get("skillid"))==0)
//     txt+="#s"+skillList.get(i).get("skillid")+"#\t";
// }
// npc.askMenu(txt+player.getSkillMenu(25));