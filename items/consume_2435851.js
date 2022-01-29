//十周年防具套裝
let boxId = 2435851;//箱子ID
let itemList = Array(
				Array(1003864, 1),
				Array(1012377, 1),
				Array(1052613, 1),
				Array(1102563, 1),
				Array(1122253, 1),
				Array(1132229, 1)
				);
	if (player.getFreeSlots(1) >= 6) {
		player.loseItem(boxId,1);
		for(let i = 0 ; i < itemList.length;i++){
			player.gainItem(itemList[i][0],itemList[i][1]);
		}
		npc.say("恭喜您獲得十周年防具套裝套裝");

	} else {
		npc.say("您的包裹空間不足，請整理一下包裹吧~");
	}