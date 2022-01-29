var epp = "#fEffect/SetItemInfoEff/297/0#";  //彩光 红色
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边


        var selStr = "#b#e\t\t\t\t综合功能#l\r\n\r\n";
        selStr += "#e#r#L1##v2000005#洗蓝洗血#l";
        selStr += "#e#r#L2##v2435719#核心碎片#l#n";
        selStr += "#e#r#L3##v2430624#BUFF药水#l#n\r\n\r\n";
		selStr += "#e#r#L4##v5150040#造型美化#l#n";
		selStr +="#e#r#L10##v1003271#自选时装#l#n\n";
		selStr += "#e#r#L6##v4000000#材料仓库#l#n\r\n\r\n";
		selStr += "#e#r#L5##v4032375#自由转职#l#n";
		selStr += "#e#r#L7##v1222111#武器租赁#l#n";
		selStr += "#e#r#L8##v2614063#花园种植#l#n\r\n\r\n";
		
		selStr += "#e#r#L9##v1082543#背包清理#l#n";
		selStr += "#e#r#L11##v5520001#剪刀次数#l#n";
		//selStr += "#e#r#L12#推广系统#n;
		selStr += "#e#r#L13##v2436298#师徒系统#l#n\r\n\r\n";
		selStr += "#e#r#L14##v4031997#内测奖励#n\t";
		// selStr += "#e#r#L15#找回物品#n";
        selStr += "\r\n";
        selStr += "\r\n";;


        let selection =npc.askMenu(selStr);
		
        switch (selection) {
            case 1:
                
                player.runScript("hyxx"); //洗血洗蓝
                break;
            case 2:
                
                player.runScript( "ffjpd"); //核心碎片
                break;
            case 3:
                
                player.runScript( "buff"); //其他商城
				break;
			case 4:
                
                player.runScript("造型美化"); //自选发型
                break;
			case 5:
                
                player.runScript( "自由转职"); //换职业
                break;
            case 6:
                
                player.runScript("ycck"); //远程仓库
				//npc.say("暂未开放");
                break;
			case 7:
                
                player.runScript( "wqzp"); //武器租赁
                break;
			case 8:
                
                player.runScript("hyzz");
                break;
			case 9:
                
                player.runScript( "yjsc"); //武器租赁
                break;
			case 10:
                
                player.runScript( "zxdz"); //武器租赁
                break;
			case 11:
                
                player.runScript( "白金剪刀"); //武器租赁
                break;
			case 12:
                
                player.runScript( "推广系统"); //武器租赁
                break;
			case 13:
                
                player.runScript( "师徒系统"); //武器租赁
                break;
			case 14:
                
                player.runScript( "内测奖励"); //武器租赁
                break;
			case 15:
                
                player.runScript( "找回"); //武器租赁
                break;
			
        }
 