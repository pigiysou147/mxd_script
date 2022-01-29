/**
* 神秘徽章兌換  QQ:739977676 
**/

var items = Array(
	//物品1
	Array(2434667,Array(Array(3994424,4)),0),
	Array(2434666,Array(Array(3994424,6)),0)
);

//邏輯開始
let selStr = ""
for(var i = 0;i<items.length;i++){
	
	for(var j = 0; j < items[i][1].length;j++){
		selStr += "#b#v"+items[i][1][j][0]+"# x #r"+items[i][1][j][1]+" "
	}
	selStr += "#r#L"+i+"#點我兌換#v"+items[i][0]+"##l\r\n\r\n"
}
let selected = npc.askMenu(selStr);
selStr = "請輸入兌換 #v"+items[selected][0]+"#的數量：\r\n"
let number = npc.askNumber(selStr,"0",0,9999);

//判斷材料是否足夠

if(!player.hasMesos(items[selected][2]*number)){
	npc.say("金幣不足,需要"+items[selected][2]*number);
}else{
	var cailiaoTag = 0;
	for(var j = 0; j < items[selected][1].length;j++){
		if(!player.hasItem(items[selected][1][j][0],items[selected][1][j][1]*number)){
			cailiaoTag++;
			break;
		}
	}
	if(cailiaoTag > 0){
		npc.say("材料不足");
	}else{
		for(var j = 0; j < items[selected][1].length;j++){
			player.loseItem(items[selected][1][j][0],items[selected][1][j][1]*number);
		}
		player.gainItem(items[selected][0],number);
		npc.say("兌換成功！");
	}
}

