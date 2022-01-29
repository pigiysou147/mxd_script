var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
1712001,
1712002,
1712003,
1712004,
1712005,
1712006
);
var 材料1 = 4000836;
var 材料1数量 = 50;
var 材料2 = 4000835;
var 材料2数量 = 50;

	text = "1.每兑换一个徽章需要#v"+材料1+"#x"+材料1数量+"/#v"+材料2+"#x"+材料2数量+"\r\n#b";
	text += "#L999#点我进入材料地图#l\r\n\r\n#b";
	text += "#k2.点击下方图标进行购买\r\n#b";
	for (var i=0; i<itemlist.length; i++) {
		text += "#L" + i + "##i" + itemlist[i] + ":##l";
	}
	let selection=npc.askMenuS(text);
	if(selection == 999){
		player.changeMap(273060300);
	
	}else{
		selects = selection;
		let buynum =npc.askNumber("\r\n\r\n#k#请输入想要兑换的数量", 0, 0, 20000);

		
		if (player.getFreeSlots(1) < buynum) {
			npc.say("装备栏空间不足，请整理后重新制作！");
			
		}else if (player.hasItem(材料1,buynum * 材料1数量) && player.hasItem(材料2,buynum * 材料2数量)) {
			player.gainItem(itemlist[selects], buynum);
			player.loseItem(材料1, buynum * 材料1数量);
			player.loseItem(材料2, buynum * 材料2数量);
			npc.broadcastPlayerNotice(0x15, "『神秘徽章』：玩家 " + player.getName() + " 兑换了"+buynum+"個神秘徽章。");
			npc.say("兑换成功了！");
		} else {
			npc.say("对不起，你沒有足够的材料。");
		}
	}
	
