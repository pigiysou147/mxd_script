
var eff ="#fUI/UIWindow/Quest/icon6/7#";

var epp = "#fEffect/SetEff/11/effect/3#";  //红色枫叶
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两


	var selStr = "#d#e" + epp + "" + ax + "职业商铺" + ax + "" + epp + "#l\r\n";
		selStr += "\t\t#e#r  #L0#"+xxx+"全职业副手武器商店#l"+xxx+"\r\n";
		selStr +="#e#r#L1#"+xxx+"标箭矢弹"+xxx+"#l  #L16#"+xxx+"恶魔复仇"+xxx+"#l #L19#"+xxx+"运动商店"+xxx+"#l\r\n";
		selStr += "#e#r#L4#"+xxx+"战士装备"+xxx+"#l  #L5#"+xxx+"法师装备"+xxx+"#l  #L6#"+xxx+"箭手装备"+xxx+"#l\r\n";
		selStr += "#e#r#L7#"+xxx+"飞侠装备"+xxx+"#l  #L8#"+xxx+"海盗装备"+xxx+"#l  #L9#"+xxx+"龙骑士装备"+xxx+"#l\r\n";
		selStr += "#e#r#L10#"+xxx+"双刀装备"+xxx+"#l  #L11#"+xxx+"尖兵装备"+xxx+"#l  #L12#"+xxx+"天使装备"+xxx+"#l\r\n";
		selStr += "#e#r#L13#"+xxx+"夜光装备"+xxx+"#l  #L14#"+xxx+"火炮装备"+xxx+"#l  #L15#"+xxx+"双弩装备"+xxx+"#l\r\n";			
		selStr += "#e#r #L17#"+xxx+"爆破手装备"+xxx+"#l\r\n\r\n";
		selStr += "\r\n#b温馨提示:特殊飞镖请到废弃药店冲镖哦!#l";
		let selection =npc.askMenuS(selStr);
        switch (selection) {
        case 0:
			
			npc.sendShop(9072100);
			break;
        case 1:
			
			npc.sendShop(64);
			break;			
        case 2:
            
            npc.sendShop(1012123);
            break;
        case 3://外星人装备
			
            npc.sendShop(322);
            break;
        case 4://战士
            
            npc.sendShop(10);
            /*
            npc.sendShop(1012124);*/
            break;
        case 5://法师
            /*
            npc.sendShop(1012125);*/		
            
            npc.sendShop(13);
            break;
        case 6://弓手装备
           /* 
            cm.sendOk("其它职业的装备请到各个城市的装备商店购买.\r\n高级装备可以靠刷怪/BOSS/抽奖/活动/获得...\r\n祝你游戏愉快!如果有好的建议请联系管理员.");*/
            
            npc.sendShop(7);
			break;
        case 7://飞侠
          /*
            npc.sendShop(1033003);*/
           /* 
            cm.sendOk("全职业1-30级武器可点拍卖-新手装备处购买.\r\n其余100级以下装备请到各职业所在城市购买\r\n更高级装备可以靠刷怪/BOSS/抽奖/活动/获得...\r\n祝你游戏愉快!如果有好的建议请联系管理员.");*/
		    
            npc.sendShop(16);
			break;
        case 8://海盗
            
            npc.sendShop(58);
            break;
        case 9://龙骑士
            /*
            npc.sendShop(2161010);*/		
            
            npc.sendShop(314);
            break;
        case 10://双刀
            
            npc.sendShop(309);
            /*
              npc.sendShop(9120000);*/			
            break;
        case 11://尖兵
            /*
            npc.sendShop(1011101);*/
            
            npc.sendShop(325);
            break;
        case 12://萝莉
            /*
            npc.sendShop(9310111);*/
            
            npc.sendShop(324);
            break;
        case 13://夜光
            /*
            npc.sendShop(9000188);*/
            
            npc.sendShop(313);
            break;
        case 14://火炮
            
            npc.sendShop(308);
            break;
        case 15://双弩
            
            npc.sendShop(1033001);
            break;
        case 16://恶魔复仇者
			
			npc.sendShop(307);
            break;
        case 17://剑豪
            
            npc.sendShop(74);
            break;
        case 18://阴阳师
            
            npc.sendShop(69);
            break;	
        case 19://法师
            
            npc.sendShop(1111);
            break;		
			case 20://法师
            
            npc.sendShop(71);
            break;		
        }
 