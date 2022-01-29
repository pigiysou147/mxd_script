//几里 强制带副手

let str = "";
str += "1.如果出現無法更換副手,可以使用此功能強制更換！\r\n"
str += "2.如果使用強制更換功能,請先卸下你的副手!\r\n"
str += "3.可以使用卸下副手功能取下無法取下的副手！(取下後副手位置會強制用木盾取代)\r\n"
str += "4.需強制裝備的副手,請放在裝備欄第一格！\r\n"
str += "5.強制裝備副手不會辨識職業,請自己搞清楚職業該穿什麼副武！\r\n"
str += "#L0#強制裝上副手#l \r\n"
str += "#L1#卸下副手#l \r\n"
let selected = npc.askMenu(str);
if(selected == 0){
	//强制装副手
	let toDrop = player.getInventorySlot(1, 1);
	
	if(toDrop == null){
		npc.say("請將副手放到裝備欄第一格");
	}else{
		var type = Math.floor(toDrop.getDataId() / 10000);
		if(type == 135 || type == 109){
			//副手栏必须是木盾或者是空 才可以使用
			let toDrop2 = player.getInventorySlot(-1, -10);
			if(toDrop2 == null || toDrop2.getDataId() == 1092003){
				player.equip(-10,toDrop.getDataId());
				toDrop2 = player.getInventorySlot(-1, -10);
				toDrop2.setStr(toDrop.getStr()); //装备力量
				toDrop2.setDex(toDrop.getDex()); //装备敏捷
				toDrop2.setInt(toDrop.getInt()); //装备智力
				toDrop2.setLuk(toDrop.getLuk()); //装备运气

				toDrop2.setMad(toDrop.getMad());//魔法力
				toDrop2.setPad(toDrop.getPad());//攻击力

				toDrop2.setStatR(toDrop.getStatR());// 所有属性
				toDrop2.setTitle(toDrop.getTitle());// 道具名
				toDrop2.setBossDamageR(toDrop.getBossDamageR());// BOSS伤 
				toDrop2.setIgnorePDR(toDrop.getIgnorePDR());// 无视防御
				toDrop2.setAttribute(toDrop.getAttribute());//锁定状态
				
				toDrop2.setGrade(toDrop.getGrade())
				toDrop2.setOption(1, toDrop.getOption(1,false), false);
				toDrop2.setOption(2, toDrop.getOption(2,false), false);
				toDrop2.setOption(3, toDrop.getOption(3,false), false);
				toDrop2.setOption(1, toDrop.getOption(1,true), true);
				toDrop2.setOption(2, toDrop.getOption(2,true), true);
				toDrop2.setOption(3, toDrop.getOption(3,true), true);
			
				player.updateItem(-10, toDrop2);
				player.loseInvSlot(1,1);
				npc.say("強制裝上副手成功！");
			}else{
				npc.say("您的副手欄不是空的或者不是#v1092003#，無法使用");
			}
		}else{
			npc.say("第一格不是副手，無法使用");
		}
	}
}else{
	//卸下副手
	if(player.getFreeSlots(1) < 1){
		npc.say("請清理裝備欄，留出一格空位");
	}else{
		let toDrop = player.getInventorySlot(-1, -10);
		if(toDrop == null || toDrop.getDataId() == 1092003){
			npc.say("你没有佩戴副手，或者使用了本系统没有切换角色！或者身上被替换成了#v1092003#");
		}else{
			//player.loseInvSlot(-1,-10);
			//player.updateItem(-10, toDrop);
			
			player.equip(-10,1092003);
			
			//制作装备
			let newItem = player.makeItemWithId(toDrop.getDataId());
			newItem.setStr(toDrop.getStr()); //装备力量
			newItem.setDex(toDrop.getDex()); //装备敏捷
			newItem.setInt(toDrop.getInt()); //装备智力
			newItem.setLuk(toDrop.getLuk()); //装备运气

			newItem.setMad(toDrop.getMad());//魔法力
			newItem.setPad(toDrop.getPad());//攻击力

			newItem.setStatR(toDrop.getStatR());// 所有属性
			newItem.setTitle(toDrop.getTitle());// 道具名
			newItem.setBossDamageR(toDrop.getBossDamageR());// BOSS伤 
			newItem.setIgnorePDR(toDrop.getIgnorePDR());// 无视防御
			newItem.setAttribute(toDrop.getAttribute());//锁定状态
			
			newItem.setGrade(toDrop.getGrade())
			newItem.setOption(1, toDrop.getOption(1,false), false);
			newItem.setOption(2, toDrop.getOption(2,false), false);
			newItem.setOption(3, toDrop.getOption(3,false), false);
			newItem.setOption(1, toDrop.getOption(1,true), true);
			newItem.setOption(2, toDrop.getOption(2,true), true);
			newItem.setOption(3, toDrop.getOption(3,true), true);
			//newItem.setAttribute(8);//锁定状态
			
			player.gainItem(newItem);

			npc.say("卸载成功");
		}
	}
}

//获取装备类型
function getItemType(itemid) {
    var type = Math.floor(itemid / 10000);
    switch (type) {
        case 100:
            return 0; //帽子
        case 104:
            return 1; //上衣
        case 105:
            return 2; //套装
        case 106:
            return 3; //裤裙
        case 107:
            return 4; //鞋子
        case 108:
            return 5; //手套
        case 110:
            return 6; //披风
        case 115:
            return 13; //护肩
        case 111:
            return 9; //ring
        case 112:
            return 10; //戒指
		case 113:
            return 11;//腰带
		case 103:
            return 12; //耳环
	   case 101:
            return 14;
	   case 102:
            return 16;

        default:
            if (type == 120) return -1; //图腾
		    if (type == 119) return -1; //徽章
            if (type == 135) return -1; //副手
			if (type == 171) return -1; //神秘
			if (type == 116) return -1; //口袋
			if (type == 114) return -1; //称号
			if (type == 167) return -1; //心脏
            var type = Math.floor(type / 10);
            if (type == 12 || type == 13 || type == 14 || type == 15 || type == 17) {
                return 7; //武器
            }
            return -1;
    }
}