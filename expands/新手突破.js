var wuqi = Array(
    1214020,
    1403020,
    1213023,
    1222111,
    1232111,
    1242118,
    1282020,
    1252097,
    1262037,
    1302336,
    1312201,
    1212117,
    1322253,
    1332277,
    1342103,
    1362137,
    1372225,
    1382263,
    1402253,
    1412180,
    1292015,
    1422187,
    1432216,
    1442270,
    1452255,
    1462241,
    1472263,
    1482218,
    1492233,
    1522140,
    1532146,
    1542116,
    1552118,
    1582028,
    1592012,
    1272011
    )
    var ch = 0;
    var flag = 0;
    
    var str = "你好 我这里你可以进行#r新手武器突破转移#b\r\n";
    var item = player.getInventorySlot(1, 1);
    if(item != null) {
        str += "#L0##v" + item.getDataId() + "##t" + item.getDataId() + "# 转移突破#l\r\n";
    } else {
        str += "#r你没有可以强化的物品#b\r\n";
    }
    str += "\r\n#L1#查看说明#l  \r\n\r\n";
    let selection = npc.askMenuS(str);
    if(selection==0){
        for(var i = 0; i < wuqi.length; i++) {
            if(item.getItemId()==wuqi[i]) {
                flag = 1;
                break;
            }
        }
        if(flag==1){
            //可以转移
            var item2=player.getInventorySlot(1, 2);
            if(item2!=null){
                if(item2.getLimitBreak()<60000000 && item2.getLimitBreak()>=100000){
                    //可以转移
                    var tt= item.getLimitBreak();
                    let ss=npc.askYesNo("是否要转移突破呢？ 可以转移的突破为: #r "+tt);

                    item2.setLimitBreak(item2.getLimitBreak()+tt);
                    
					item2.setAttribute(8);
                    player.updateItem(2,item2);

                    player.loseInvSlot(1,1);
                    npc.say("转移成功");


                }else{
                    npc.say("目标武器不符合要求。需要突破至10-500W。当前突破为: "+item2.getLimitBreak());
                }

            }else{
                npc.say("请在第二个格子上放上装备。");
            }
            
        }else{
            npc.say("你的第一个格子的装备不符合要求。");
        }

    }else{
        npc.say("#r#e新手强化的武器，可以放心的砸突破。\r\n所有的突破值，除了赠送的1E突破以外部分都是可以转移走的\r\n转移目标的武器突破限定在:10W-500W之间");

    }

    
    
    