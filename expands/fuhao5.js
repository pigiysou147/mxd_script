var needList = Array(
	Array(4001618, 150),
	Array(4000000, 6000),
	Array(4000016, 6000),
	Array(4021016, 150),
	Array(4000124, 150),
	Array(4000313, 600),
	Array(4033356, 150)
);

var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1]+"\r\n";
}
selStr += "#e#r,我可以帮您升级到#v1190301##z1190301#\r\n\r\n";
selStr += "请把#v1190407#放在装备栏的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("请把#v1190407#放在装备栏的第一格。");
	} else if(item.getDataId() != 1190407) {
		npc.say("请把#v1190407#放在装备栏的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1])) {
				flag = 0;
			}

		}
		if(flag == 1) {

			var toDrop = player.makeItemWithId(1190301);

			

			toDrop.setStr(50); //装备力量
			toDrop.setDex(50); //装备敏捷
			toDrop.setInt(50); //装备智力
			toDrop.setLuk(50); //装备运气
			toDrop.setPad(50); //魔法攻击
			toDrop.setMad(50); //物理攻击 

			toDrop.setBossDamageR(30);
			toDrop.setIgnorePDR(30);
			toDrop.setTitle("金色徽章");
			//设置潜能等级
			toDrop.setGrade(item.getGrade());
			//设置潜能
			toDrop.setOption( 1, item.getOption(1,false),false);
			toDrop.setOption( 2,item.getOption(2,false), false);
			toDrop.setOption( 3, item.getOption(3,false),false);
			toDrop.setOption( 1,item.getOption(1,true), true);
			toDrop.setOption( 2, item.getOption(2,true),true);
			toDrop.setOption( 3, item.getOption(3,true),true);
			player.loseInvSlot(1, 1); //移除物品栏第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0], needList[i][1]);
			}

			player.gainMesos(200000000);

			player.gainItem(2340000, 100); //祝福卷轴
			player.gainItem(4001839, 20000); //星星
			player.gainItem(5220040, 80); //转蛋卷
			player.gainItem(2049116, 100); //强混
			player.gainItem(2049604, 15); //还原
			player.gainItem(5062503, 100); //附加记忆魔方

			npc.say("成功升级到金色徽章。" );
			npc.broadcastGachaponMsgEx( "[符号升级] : 恭喜 " + player.getName() + " 升级到<金色徽章>获得全属性+50的符号证明.",toDrop);
		} else {
			npc.say("你的材料不够哦,请检查一下！");
		}
	}

}