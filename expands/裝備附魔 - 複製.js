
/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：NPC 功能模版
 *  
 *  @Author Jackson 
 */

/* global cm */
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var status = -1;
var item;
var slot;
var AP = 369;
var needItemList = Array(
	Array(3990001,1),//2
	Array(3990009,1),//0
	Array(3990000,1),//1
	Array(3990008,1),//9
	Array(3994047,1),//年
	Array(3990004,1),//5
	Array(3994048,1),//月
	Array(3990000,1),//1
	Array(3990005,1),//6
	Array(3994049,1)//日
		);
var indexof = 1;
			let text = "            #e" + tz15 + "#r『369裝備附魔』 " + tz15 + "\r\n\r\n";
			text += "#k————————————————————————\r\n";
			text += "\t#v3990001##v3990009##v3990000##v3990008##v3994047##v3990004##v3994048##v3990000##v3990005##v3994049#\r\n";
			text += "\r\n#k\t\t搜集以上字符即可將指定裝備賦予#r369點#k屬性!\r\n";
			text += "#e材料收集進度：#n#k\r\n\r\n#b";
			for (var key in needItemList) {
				text += "#v" + needItemList[key][0] + "# ";
				var currentItemQuantity = player.getAmountOfItem(needItemList[key][0]);
				var color = "#g ";
				if (currentItemQuantity < needItemList[key][1])
					color = "#r ";
				text += color + currentItemQuantity + "/" + needItemList[key][1] + "#b";
				if (indexof > 1 && indexof % 5 == 0) {
					text += "\r\n";
				}
				indexof++;
			}
		/*	text += "#k\r\n\r\n- #e#d如收集完畢請點擊下一步進行操作！#k";
			npc.sendNext(text);
			break;
			var list = cm.getInventory(1).list();
			itemList = list.iterator();
			var text = "\t\t#e- 請選擇所要進行附魔的裝備 -#n\r\n\r\n#b";
			var indexof = 1;
			var newItemList = Array();
			while (itemList.hasNext()) {
				var item = itemList.next();
				if (cm.isCashItem(item.getItemID())) {
					continue;
				}
				newItemList[item.getPosition()] = item.getItemID();
			}
			for (var key in newItemList) {
				text += "#L" + key + "##v" + newItemList[key] + "#";
				if (indexof > 1 && indexof % 5 == 0) {
					text += "\r\n";
				}
				indexof++;
			}
			var slot = cm.askMenu(text);
			flag = true;
			for (var key in needItemList) {
				var itemId = needItemList[key][0];
				var itemQuantity = needItemList[key][1];
				if (!cm.haveItem(itemId, itemQuantity)) {
					flag = false;
					break;
				}
			}
			if (flag) {
				slot = parseInt(selection);
				item = cm.getItemBase(1, slot);
				if (item.getArcExp() == -1) {
					cm.dropAlertNotice("每件装备仅限附魔一次哦!!!");
					cm.dispose();
					return;
				}
				for (var key in needItemList) {
					var itemId = needItemList[key][0];
					var itemQuantity = needItemList[key][1];
					cm.removeItem(itemId, itemQuantity);
				}
				item.setSTR(item.getSTR() + AP);
				item.setDEX(item.getDEX() + AP);
				item.setINT(item.getINT() + AP);
				item.setLUK(item.getLUK() + AP);
				item.setPAD(item.getPAD() + AP);
				item.setMAD(item.getMAD() + AP);
				item.setArcExp(-1);
				cm.updateItem(item);
				cm.dropAlertNotice("成功賦予指定裝備屬性！");
				cm.broadcastItemSpeaker("[強化系统] : 玩家 《" + cm.getPlayer().getName() + "》使用集齐字符成功附魔了裝備", cm.getEquip(false, slot))
			} else {
				cm.sendOk("材料不足，無法完成操作！");
			}
			cm.dispose();
			break;
		case 3:
			cm.dispose();
			break;*/
