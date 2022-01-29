var epp = "#fEffect/SetItemInfoEff/297/0#";  //彩光 红色
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边

var epp = "#v4031174#"; //彩光

var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
		var selStr = "				#e "+xx+"#b变强中心#k#d#e"+xx+"\r\n\r\n";
		//selStr +=  epp + epp +  epp+epp+epp+epp+epp+epp+epp+epp+epp+"\r\n";
		selStr += "#e#r#L1##v1214018#装备制作#l#n";
		selStr += "#e#r#L2##v2644008#装备升星#l#n";
		selStr += "#e#r#L3##v1103280#银河强化#l#n\r\n\r\n";
		selStr += "#e#r#L4##v4023026#装备分解#l#n";
		selStr += " #e#r#L6##v4023025#装备强化#l#n";
		selStr += "#e#r#L7##v1712002#神秘徽章#l#n\r\n\r\n";
		selStr += "#e#r#L8##v1182285#创世潜能#l#n";
		selStr += "#e#r#L9##v1662114#机器潜能#l#n";
		selStr += "#e#r#L10##v1102005#时装幻化#l#n\r\n\r\n";
		//selStr += "#e#r#L11##v2612078#卷轴兑换#l#n";
		selStr += "#e#b#L13##v1082556#白嫖套装#l#n";
		selStr += "#e#r#L12##v5002080#宠物修复#l#n";
        selStr += "\r\n";
        selStr += "\r\n";


        let selection =npc.askMenu(selStr);
        switch (selection) {
			case 13:
               
			player.runScript( "白嫖套装"); //武器租赁
			break;
			case 1:
               
                player.runScript( "装备制作主页"); //武器租赁
                break;
			case 2:
               
                player.runScript( "star"); //武器租赁
                break;
			case 3:
               
                player.runScript( "yhqh"); //武器租赁
                break;
			case 4:
               
                player.runScript( "yjhg"); //武器租赁
                break;
			
			case 6:
				player.changeMap(940204140);
               
                break;
			case 7:
               
                player.runScript( "韵_兑换神秘徽章"); //武器租赁
                break;
			case 8:
               
                player.runScript( "韵_创世勋章强化"); //武器租赁
                break;
			case 9:
               
                player.runScript("韵_机器人强化"); //武器租赁
                break;
			case 10:
               
                player.runScript("时装幻化"); //武器租赁
                break;
			case 11:
		   
			player.runScript("卷轴兑换"); //武器租赁
			break;
			case 12:
		   
			player.runScript("宠物修复"); //武器租赁
			break;
			
        }
