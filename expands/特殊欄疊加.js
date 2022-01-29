/**
* 疊加背包 幾里 315342975 
**/
let menuList = Array(
	"#n#r疊加 【裝備欄】",
	"#b疊加 【消耗欄】",
	"#r疊加 【設置欄】",
	"#b疊加 【其他欄】",
	"#r疊加 【特殊欄】"
);
let isOpen = [false,false,false,false,true]


while (true){
	let selStr = "#d我可以幫你疊加物品哦！\r\n#L10086##r返回上一頁#l\r\n";
	for(let i = 0;i<menuList.length;i++){
		if(isOpen[i]) selStr += "#L"+i+"#"+menuList[i]+"#l\r\n"
	}

	let selected = npc.askMenu(selStr,3003307);
	if(selected == 10086){
		player.runScript("AB_功能道具");
		break;
	}else{
		selStr = menuList[selected];
		//選擇
		let finallyItemsSlot = [];
		let finallyItemDataIds = [];
		for(let i = 1;i<150;i++){
			if(null != player.getInventorySlot(selected+1,i)){
				var dataid = player.getInventorySlot(selected+1,i).getDataId();
				if(finallyItemDataIds.indexOf(dataid) == -1 && dataid > 5005000){
					finallyItemDataIds.push(dataid);
					finallyItemsSlot.push(i);
				}
			}
		}
		selStr = menuList[selected]+",請選擇疊加對象\r\n";
		for(let j = 0;j<finallyItemDataIds.length;j++){
			selStr += "#L"+finallyItemsSlot[j]+"##v"+finallyItemDataIds[j]+"##l "+finallyItemDataIds[j]
		}
		
		let selected3 = npc.askMenu(selStr,3003307);
		let item =  player.getInventorySlot(selected+1,selected3);
		if (item.getExpiration() < 3439728000000){
			npc.say("有期限的物品無法使用");
			continue;
		}
		let number = player.getAmountOfItem(item.getDataId())
		selStr = "是否確定疊加#v"+item.getDataId()+"# 數量:"+number+"？"
		
		let YN = npc.askYesNo(selStr,3003307);
		if(YN == 1){
			player.loseItem(item.getDataId());
			player.gainItem(item.getDataId(),number);
			npc.say("疊加成功",3003307);
		}
		
	}
}