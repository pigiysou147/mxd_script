var epp = "#fEffect/SetItemInfoEff/297/0#";  //彩光 红色
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边


        var selStr = "#b#e\t\t\t\t本服特色#l\r\n\r\n";
        selStr += "#e#r#L1##v1114312#终极戒指#l";
        selStr += "#e#r#L5##v1102065#翅膀进化#l";
		selStr += "#e#r#L2##v1190301#怪物符号#l #n\r\n\r\n";
        //selStr += "#e#r#L8#装备传承#l\t#k#n";
        selStr += "#e#r#L110##v1202193#轮回上星#l#k#n ";
        selStr += "#e#r#L9##v1033000#时装进化#l#k#n";
        //selStr += "#e#r#L11#花园种植#l\t#k#n";
        //selStr += "#e#r#L12#超级属性#l\r\n\r\n#k#n";
        selStr += "#e#r#L13##v2049116#强混卷轴#l#k#n\r\n\r\n";
        selStr += "#e#r#L10##v4033911#远征强化#l#k#n";
		
        selStr += " #e#r#L11##v3064282#星岩系统#l#k#n";
        selStr += "#e#r#L12##v4001119#时装潜能#l#k#n\r\n\r\n";
        selStr += "\r\n";;


        let selection =npc.askMenuS(selStr);
        switch (selection) {
			case 110:
                
                player.runScript("轮回上星"); //其他商城
                break;
			case 13:
				player.runScript("强混");
				break;
            case 1:
                
                player.runScript( "rqjzcz"); //其他商城
                break;
            case 2:
                
                player.runScript( "dwxt"); //其他商城
                break;
            
            
            case 5:
                
                player.runScript("chibang"); //其他商城
                break;
            case 6:
                
                player.runScript(2470018, 6); //其他商城
                break;      
          
            case 8:
                
                player.runScript("裝備屬性轉移"); //其他商城
                break; 
            case 9:
                
                player.runScript("时装上星"); //其他商城
                break;
			case 10:
                
				player.runScript("远征强化"); //其他商城
                break;
			case 11:
                
                player.runScript("星岩系统"); //其他商城
                break;
			case 12:
                
                player.runScript("szqn"); //其他商城
                break;	
        }
