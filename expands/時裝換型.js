/**
* 時裝換型-QQ:739977676
**/


//所需要材料
var needItems = Array(
	Array(4000000,100)
);
//可以更換的
var canChangeItems = Array(
	1102963,	
	1102039
)

let str = "                       #e時裝換型\r\n\r\n";
str += "#e把需要換型的時裝放在第一格,第二格#l\r\n";
str += "#e最後第一件時裝會消失，第二件將擁有第一件屬性#l\r\n";
str += "#e目前僅支援16階翅膀與透明披風交換#l\r\n";
str += "#e換型需要材料:\r\n";
for(let i = 0;i<needItems.length;i++){
	str +=" #v"+needItems[i][0]+"# x " + needItems[i][1]+" , " 
}
str += "#r是否確認換型？\r\n";
let YN = npc.askYesNo(str);
let toDrop = player.getInventorySlot(1, 1);
let toDrop2 = player.getInventorySlot(1, 2);
if(toDrop == null || toDrop2 == null){
	npc.say("請將裝備放到第一格,和第二格");
}else if(toDrop.getSn() <= 0 || toDrop2.getSn() <= 0){
	npc.say("您的第一格/第二格裝備不是時裝");
}else if(canChangeItems.indexOf(toDrop.getDataId()) == -1){
	npc.say("您的第一格裝備不可以更換");
}else{
	let YN = npc.say("是否將#v"+toDrop.getDataId()+"#的屬性給予#v"+toDrop2.getDataId()+"#");
	
	let PD = 0; //判斷材料是否足夠
	for(let j = 0; j < needItems.length;j++){
		if(!player.hasItem(needItems[j][0],needItems[j][1])){
			PD++;
			break;
		}
	}
	if(PD != 0){
		npc.say("材料不足");
	}else{
		for(let j = 0; j < needItems.length;j++){
			player.loseItem(needItems[j][0], needItems[j][1]);
		}
		toDrop.setItemId(toDrop2.getDataId());
		player.updateItem(1, toDrop);
		player.loseInvSlot(1,2);
		npc.say("更換成功");
		
	}
}