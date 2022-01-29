/**
* 武器破功潜能转移-QQ:739977676
**/
let password = "确定"
let needYE = 1000;//需要的馀额
let itemid = Array(
    1214018, //神秘之影龙息臂箭
	1403018, //神秘之影拳炮
	1213018, //神秘之影调谐器
	1212120, //神秘之影双头杖
	1222113, //神秘之影灵魂手铳
	1232113, //神秘之影亡命剑
	1242121, //神秘之影能量剑
	1242122, //神秘之影能量剑
	1252098, //神秘之影魔法槌
	1262039, //神秘之影ESP限制器
	1272017, //神秘之影锁链
	1282017, //神秘之影魔力手套
	1302343, //神秘之影单手剑
	1312203, //神秘之影斧
	1322255, //神秘之影锤
	1332279, //神秘之影匕首
	1342104, //神秘之影刃
	1362140, //神秘之影手杖
	1372228, //神秘之影短杖
	1382265, //神秘之影长杖
	1402259, //神秘之影双手剑
	1412181, //神秘之影双手战斧
	1422189, //神秘之影双手锤
	1432218, //神秘之影长枪
	1442274, //神秘之影矛
	1452257, //神秘之影弓
	1462243, //神秘之影弩
	1472265, //神秘之影拳套
	1482221, //神秘之影指节
	1492235, //神秘之影短枪
	1522143, //神秘之影双弩枪
	1532150, //神秘之影攻城炮
	1542117, //神秘之影武士刀
	1552119, //神秘之影折扇 
	1582023, //神秘之影机甲枪
	
	1592020, //神秘远古弓

    1004808,//神秘之影战士帽	
    1004809,//神秘之影法师帽	
    1004810,//神秘之影弓箭手帽	
    1004811,//神秘之影飞侠帽	
    1004812,//神秘之影海盗帽	

    1102940,//神秘之影战士披风	
    1102941,//神秘之影法师披风	
    1102942,//神秘之影弓箭手披风	
    1102943,//神秘之影飞侠披风	
    1102944,//神秘之影海盗披风	

    1082695,//神秘之影战士手套	
    1082696,//神秘之影法师手套	
    1082697,//神秘之影弓箭手手套	
    1082698,//神秘之影飞侠手套	
    1082699,//神秘之影海盗手套

    1053063,//神秘之影战士套装	
    1053064,//神秘之影法师套装	
    1053065,//神秘之影弓箭手套装	
    1053066,//神秘之影飞侠套装	
    1053067,//神秘之影海盗套装

    1073158,//神秘之影战士鞋	
    1073159,//神秘之影法师鞋	
    1073160,//神秘之影弓箭手鞋	
    1073161,//神秘之影飞侠鞋	
    1073162//神秘之影海盗鞋
);	
var Icon = Array(
		Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
		Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
		Array("锤子", "#fUI/Basic.img/Cursor/32/0#"),
		Array("数值", "#fUI/Basic.img/LevelNo/0#"),
		Array("数值", "#fUI/Basic.img/LevelNo/1#"),
		Array("数值", "#fUI/Basic.img/LevelNo/2#"),
		Array("数值", "#fUI/Basic.img/LevelNo/3#"),
		Array("数值", "#fUI/Basic.img/LevelNo/4#"),
		Array("数值", "#fUI/Basic.img/LevelNo/5#"),
		Array("数值", "#fUI/Basic.img/LevelNo/6#"),
		Array("数值", "#fUI/Basic.img/LevelNo/7#"),
		Array("数值", "#fUI/Basic.img/LevelNo/8#"),
		Array("数值", "#fUI/Basic.img/LevelNo/9#"),
		Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
		Array("箭头", "#fUI/Basic.img/icon/arrow#"),
		Array("箭头", "#fUI/UIWindow.img/Quest/icon2/0#"),
		Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#")

		);
		
let str = "#b   ┏　　　　　" + Icon[17][1] + "  #r金率潜能转移#b#n" + Icon[17][1] + "　　　　　　┓#k\r\n\r\n";
str += Icon[15][1] + " #d第一个栏放入#r剥离道具#d，第二栏放入#b传承道具#k\r\n";
str += Icon[15][1] + " #d传承目标仅对#r神祕系列武器以及防具#k\r\n";
str += Icon[15][1] + " #d该功能目前限定转移 #r带有金率20%主潜能的道具#k\r\n";
str += Icon[15][1] + " #d传承结束 转移的装备 #r会被删除 #r会被删除 #r会被删除#k\r\n";
str += Icon[15][1] + " #d道具传承结束 已剥离道具消失 主属性潜能将传承到新道具中#k\r\n\r\n";
str += Icon[15][1] + " #d#r注意:#b此功能是将#r剥离道具#b的3条主潜能“覆盖”到#r传承道具#b上。#k\r\n\r\n";
str += Icon[15][1] + " #r#e您是否需要使用该功能？";

let YN = npc.askYesNo(str);
if(YN == 1){
	
    //获取装备
    let toDrop1 = player.getInventorySlot(1, 1);
    let toDrop2 = player.getInventorySlot(1, 2);
    
    if(toDrop1 == null || toDrop2 == null){
        npc.say("请将需要转换的两个装备放到装备栏#r第一格#k和#r第二格");
    }else if(parseInt(toDrop1.getDataId()/10000) != parseInt(toDrop2.getDataId()/10000)){
        npc.say("#r#e您的两个装备必须是同部位的才能进行转移哦  请加以确认再使用本功能");
    }else{
        var op1=toDrop1.getOption(1,false);
        var op2=toDrop1.getOption(2,false);
        var op3=toDrop1.getOption(3,false);
        if(op1!=40650 || op2!=40650 || op3!=40650  ){
            npc.say("#b目前只支持3条主潜能都为 金率20% 的装备");
        }else{
            str = "#b请确定您要更换的装备:\r\n";
            str += "您的第一格装备：#r#v"+toDrop1.getDataId()+"##r#e此为剥离道具，传承成功后删除";
            str += "\r\n#b#n您的第二格装备：#r#v"+toDrop2.getDataId()+"##r#b#e此为传承道具，会继承第一格装备";
            str += "\r\n\r\n#b请输入#r确定#b以确保确认传承？如有失误#r无法补偿。"
            YN = npc.askText(str,"",0,999);
            if(YN == password){
                //更换破功
                
                
                
                temp = toDrop1.getGrade();//浅能等级
				toDrop2.setGrade(temp);
				
				temp = toDrop1.getOption(1,false);
				toDrop2.setOption(1,temp,false);
				
				temp = toDrop1.getOption(2,false);
				toDrop2.setOption(2,temp,false);
				
				temp = toDrop1.getOption(3,false);
				toDrop2.setOption(3,temp,false);
				
				
				
                
                
                
                player.loseInvSlot(1, 1);
                player.updateItem(2, toDrop2);
                
                npc.say("转换成功");
                npc.broadcastGachaponMsgEx("[金旅转移] : 恭喜 "+player.getName()+" 完成了金率装备的潜能转移~",toDrop2);
            }else{
                npc.say("你不确定那我也没办法囉~");
            }

        }
        
    }
	
	
}
