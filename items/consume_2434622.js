/**
* 蠟筆系統  QQ:739977676 
**/

//所需材料
let needItems = Array(
	Array(2434622,1)
);
let selected = 1;//第幾條潛能 1-3普通 4-6附加

//潛能列表
var potList = Array(
		Array(40041, "力量STR：+12%", 1),
		Array(40042, "敏捷DEX：+12%", 1),
		Array(40043, "智力INT：+12%", 1),
		Array(40044, "幸運LUK：+12%", 1),
		Array(60005, "所有屬性：+10%", 1),
		Array(40045, "MaxHP：+10%", 1),
		Array(60001, "總傷害:+12%", 1),
		Array(40055, "暴擊率:+12%", 1),
		Array(40056, "暴擊傷害：+8%", 1),
		Array(40292, "無視怪物40%的防御率", 1),
		Array(42051, "攻擊力：+12%", 1),
		Array(40052, "魔法攻擊：+12%", 1),
		Array(40603, "攻擊BOSS時傷害：+40%", 1)
		);
		
let selStr = "一鍵六條淺能系統\r\n";
selStr += "說明：請將需要使用一鍵潛能的裝備放到第一格\r\n所需材料:";
for(let i = 0;i<needItems.length;i++){
	selStr += "#v"+needItems[i][0]+"# x "+needItems[i][1] +","
}


//獲取第一格裝備
let toDrop = player.getInventorySlot(1, 1);
//判斷第一格裝備是否存在
if(toDrop == null){
	npc.say(selStr+"\r\n#r您的第一格沒有裝備，無法使用");
}if(toDrop.getSn()!=-1 || toDrop.getGrade() > 20){
	npc.say(selStr+"\r\n#r#e只有一般裝備以上的裝備才可以使用！");
}else{
	//檢測材料	
	let PD = 0; //判斷材料是否足夠
	for(let j = 0; j < needItems.length;j++){
		if(!player.hasItem(needItems[j][0],needItems[j][1])){
			PD++;
		}
	}
	if(PD == 0){
		selStr += "\r\n您的第一格裝備為:#v"+toDrop.getDataId()+"#,是否為它使用一鍵潛能？"
		let YN = npc.askYesNo(selStr);
		if(YN == 1){
			
			selStr = "請問你想給#v"+toDrop.getDataId()+"##b潛能所附加的屬性:\r\n";
			for(let i=0;i<potList.length;i++){
				selStr += "#r\r\n#L"+i+"#"+potList[i][1]+"#l "
			}
			let selectedPot = npc.askMenu(selStr);
			
			selStr = "你將為#v"+toDrop.getDataId()+"#k潛能附加屬性:#r"+potList[selectedPot][1];
			selStr = "請確認您是否要將#b#v"+toDrop.getDataId()+"##z" + toDrop.getDataId() + "##k\r\n將六條潛能變為 #b" + potList[selectedPot][1] + "#k？";
			selStr += "\r\n#b此操作將消耗您:\r\n";
			for(let i = 0;i<needItems.length;i++){
				selStr += "#v"+needItems[i][0]+"# x "+needItems[i][1] +","
			}
						
			YN = npc.askYesNo(selStr);
			
			if(YN == 1){
				for(let j = 0; j < needItems.length;j++){
					player.loseItem(needItems[j][0], needItems[j][1]);
				}
				toDrop.setGrade(20)
				toDrop.setOption(1, potList[selectedPot][0], false);
				toDrop.setOption(2, potList[selectedPot][0], false);
				toDrop.setOption(3, potList[selectedPot][0], false);
				toDrop.setOption(1, potList[selectedPot][0], true);
				toDrop.setOption(2, potList[selectedPot][0], true);
				toDrop.setOption(3, potList[selectedPot][0], true);
				npc.broadcastGachaponMsgEx("『星星包』:【"+player.getName()+"】 使用了【星星包】上了自選一鍵六條["+potList[selectedPot][1]+"]屬性淺能",toDrop);
                player.updateItem(1, toDrop);
				
				npc.say("附加成功");
			}
			
			
		}
	}else{
		npc.say("材料不足，無法使用");
	}
}