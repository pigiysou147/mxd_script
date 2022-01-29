/**
* 150等武器自选 QQ:739977676
**/

//送的物品
let itemList = Array(
		5002079,
		5002080,
		5002081,
		5000870,
		5000871,
		5000872,
		5000930,
		5000931,
		5000932
		);
let itemList1 = Array(
	5002197,
	5002198,
	5002199,
	5002079,
	5002080,
	5002081,
	5002079,
	5002080,
	5002081
);

let boxId = 2630127;//箱子ID


let text = "#b你可以进行月光宠物的互相转换，把要转换的宠物放在特殊栏的第一个格子\r\n#n"
for (var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "#---->#v" + itemList1[i] + "##z" + itemList1[i] + "##l\r\n";
}
let selected = npc.askMenu(text);

text = "您是否确定要换#v"+itemList[selected]+"";
let YN = npc.askYesNo(text);
if(YN == 1){
	
		var need = itemList[selected];
		var item =player.getInventorySlot(5,1);
		if(item==null){
			npc.say("请把要更换的宠物，放第一个格子~");

		}else{
			if(item.getDataId()!=need){
				npc.say("请把#v"+need+"#放在特殊栏的第一个格子当中");
			}else{
				player.loseInvSlot(5,1);
				player.gainItem(itemList1[selected],1);
				npc.broadcastPlayerNotice(15,"『月光宠物』 : 恭喜 " + player.getName() + " 领取了检物范围更广的月光宠物 .");
				npc.say("兑换成功");
			}

		}
		
		
	
	
}else{
	npc.say("不想兑换吗？下次再见。");
}