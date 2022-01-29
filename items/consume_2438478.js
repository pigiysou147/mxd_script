/**
* 箱子选择道具 CC 835456564 
**/

//送的物品
let items = Array(
    // ------ 150武器 ------
    //Array(1162083,1), //
    //Array(1162082,1), //
    //Array(1162081,1), //
    //Array(1162080,1), //
    //Array(1182285,1), //
    Array(1132308,1), //
    Array(1122430,1), //
    Array(1022278,1), //
    Array(1012632,1) //
    );
    
    let boxId = 2438478;//箱子ID
    
    
    let ss = "#b消耗#v"+boxId+"##z"+boxId+"#,可获得强化版漆黑套:\r\n#n"
    for(let i = 0 ; i < items.length;i++){
        ss += "#L"+i +"##r#v"+items[i][0]+"##z"+items[i][0]+"# x "+items[i][1]+" #l\r\n"
    }
    
    let selected = npc.askMenu(ss);
    
    ss = "您是否确定获取强化版#v"+items[selected][0]+"# x "+items[selected][1];
    ss += "全属性+200,攻/魔+200\r\n";
    let YN = npc.askYesNo(ss);
    if(YN == 1){
        if(player.canGainItem(items[selected][0],items[selected][1])){
            if(player.hasItem(boxId,1)){
                let itemid=items[selected][0];
                let newItem = player.makeItemWithId(itemid);
                newItem.setStr(200); //装备力量
                newItem.setDex(200); //装备敏捷
                newItem.setInt(200); //装备智力
                newItem.setLuk(200); //装备运气
                newItem.setMad(200);
                newItem.setPad(200);
                player.gainItem(newItem);
                player.loseItem(boxId,1);
                npc.say("兑换成功");
                npc.broadcastNotice("恭喜 " + player.getName() + " 领取了强化漆黑套！大家快恭喜他！");
            }else{
                npc.say("你没有#v"+boxId+"#");
            }
        }else{
            npc.say("请清理背包！");
        }
    }else{
        npc.say("不想兑换吗？下次再见。");
    }