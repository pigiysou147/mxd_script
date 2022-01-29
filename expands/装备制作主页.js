var 制作 ="#fUI/UIWindow2.img/ProductionSkill/productPage/BtProduct/pressed/0#"

	var text = "\r\n#e#r                  装备制作中心\r\n";
		text += "   #L0##v1212063##v1322265##v1302356##v1222123#"+制作 +"#l\r\n";
		text += "\r\n  #L1#"+制作 +"#l        ";
		text += "#L2#"+制作 +"#l\r\n\r\n";
		text += "#v1212120##v1222113##v1242122##v1312203#        #v1152196##v1152196##v1152196##v1152196#" ;
	let selection =npc.askMenuS(text);
	
		switch (selection) {
        case 0://
	   
            player.runScript("zzffn"); //其他商城
            break;
		case 1://
	    
             player.runScript("zzshenmi"); //其他商城
            break;
		case 2://
	    
             player.runScript("zzhj"); //其他商城
            break;
		}	
	
