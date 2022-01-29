var needList = Array(
	Array(4001618, 60),
	Array(4000000, 6000),
	Array(4000016, 6000),
	Array(4021016, 100),
	Array(4000124, 100),
	Array(4000313, 500),
	Array(4033356, 100)
);

var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1];
}
selStr += "#e#r,我可以帮您升级到#v1162071##z1162071#\r\n\r\n";
selStr += "请把#v1162037 #放在装备栏的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("请把#v1162037 #放在装备栏的第一格。");
	} else if(item.getDataId() != 1162037 ) {
		npc.say("请把#v1162037 #放在装备栏的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1])){
				flag = 0;
			}
				
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1162071);

			//设置潜能等级
			toDrop.setGrade(item.getGrade());
			//设置潜能
			toDrop.setOption( 1, item.getOption(1,false),false);
			toDrop.setOption( 2,item.getOption(1,false), false);
			toDrop.setOption( 3, item.getOption(1,false),false);
			toDrop.setOption( 1,item.getOption(1,false), true);
			toDrop.setOption( 2, item.getOption(1,false),true);
			toDrop.setOption( 3, item.getOption(1,false),true);
			

			toDrop.setStr(40); //装备力量
			toDrop.setDex(40); //装备敏捷
			toDrop.setInt(40); //装备智力
			toDrop.setLuk(40); //装备运气
			toDrop.setPad(40); //魔法攻击
			toDrop.setMad(40); //物理攻击 
			toDrop.setTitle("最强口袋");
			player.loseInvSlot(1, 1); //移除物品栏第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			
			player.gainMesos(200000000);
			
			player.gainItem(2340000,88);     //祝福卷轴
			player.gainItem(4001839,10000);  //星星
			player.gainItem(5220040,40);     //转蛋卷
			player.gainItem(2049116,88);     //强混
			player.gainItem(2049604,8);      //还原
			player.gainItem(5062503,88);     //附加记忆魔方
			
			
			npc.broadcastGachaponMsgEx( "[口袋升级] : 恭喜 " + player.getName() + " 升级了最强口袋.",toDrop);
			npc.say("升级成功。");
		} else {
			npc.say("你的材料不够哦,请检查一下！");
		}
	}

}