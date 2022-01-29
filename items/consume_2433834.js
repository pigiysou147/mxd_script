
var nan =new Array(
	1702864,1005227,1012666,1050501,1070102 
)



var selStr = "#r\r\n";
selStr += "#r 是否领取漆黑之翼套装！\r\n #b注意：男角色领男套装，女角色领女套装\r\n"
selStr += "#r#L1#确认领取#l";
var selected = npc.askMenu(selStr);
if(selected == 1){
	if (player.getFreeSlots(1) < 6) {
		npc.say("请保证装备栏有6格")
	}else{
		var itemList;
		 if (player.getGender() == 0) {
			 itemList = nan;
		}else{
			 itemList = nv;
		}
		
		for(var i = 0;i<itemList.length;i++){
			getEquip(itemList[i],100);
		}
		player.loseItem(2433834,1);
		npc.say("领取成功");
	}
}

function getEquip(itemid,siwei){
		let newItem = player.makeItemWithId(itemid);
		newItem.setStr(siwei); //装备力量
		newItem.setDex(siwei); //装备敏捷
		newItem.setInt(siwei); //装备智力
		newItem.setLuk(siwei); //装备运气

		newItem.setMad(siwei);
		newItem.setPad(siwei);
		newItem.setTitle("白白冒险岛");
		player.gainItem(newItem)
}