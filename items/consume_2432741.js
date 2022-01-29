//十周年防具套裝
let boxId = 2432741;//箱子ID
let itemList = Array(
				Array(1122280, 1),
				Array(1012471, 1),
				Array(1052758, 1),
				Array(1102691, 1),
				Array(1004172, 1)
				);
	if (player.getFreeSlots(1) >= 5) {
		player.loseItem(boxId,1);
		for(let i = 0 ; i < itemList.length;i++){
			player.gainItem(itemList[i][0],itemList[i][1]);
		}
		npc.say("恭喜您獲得11周年防具套裝套裝");

	} else {
		npc.say("您的包裹空間不足，請整理一下包裹吧~");
	}