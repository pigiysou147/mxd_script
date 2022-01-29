/**
* 清理背包  QQ:739977676 
**/
let menuList = Array(
	"#r清理 #v1402268# 裝備欄",
	"#b清理 #v2000049# 消耗欄",
	"#b清理 #v3015939# 設置欄",
	"#r清理 #v4000000# 其他欄",
	"#r清理 #v5062103# 特殊欄"
);


while (true){
	let selStr = "\r\n";
	for(let i = 0;i<menuList.length;i++){
		selStr += "#L"+i+"#"+menuList[i]+"#l\r\n"
	}

	let selected = npc.askMenu(selStr);
	
	selStr = menuList[selected];
	selStr += "\r\n#L1#全部清空#l\r\n#L2#選擇清除#l"
	let selected1 =  npc.askMenu(selStr);
	if(selected1 == 1){
		//全部清空
		selStr = menuList[selected];
		selStr += "\r\n是否確定全部清空？"
		let YN = npc.askYesNo(selStr)
		if(YN == 1){
			for(let i = 1;i<150;i++){
				player.loseInvSlot(selected+1,i);
			}
			npc.say("清空成功");
		}
	}else if(selected1 == 2){
		//部分清空
		let finallyItems = [];
		let finallyItemsSlot = [];
		for(let i = 1;i<150;i++){
			if(null != player.getInventorySlot(selected+1,i)){
				finallyItems.push(player.getInventorySlot(selected+1,i));
				finallyItemsSlot.push(i);
			}
		}
		selStr = menuList[selected]+",請選擇清除對象\r\n";
		for(let j = 0;j<finallyItems.length;j++){
			selStr += "#L"+finallyItemsSlot[j]+"##v"+finallyItems[j].getDataId()+"##l "
		}
		
		
		let selected3 = npc.askMenu(selStr);
		
		selStr = "是否確定清除#v"+finallyItems[selected3-1].getDataId()+"#？"
		let YN = npc.askYesNo(selStr)
		if(YN == 1){
			player.loseInvSlot(selected+1,selected3);
			npc.say("清除成功");
		}
		
	}
}