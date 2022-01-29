var aaa1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

var rmb = 0;
var selStr = "#r#e新人礼包送的新月戒指您还存着的吧，没有就去阿利博士买一个。嘻嘻！#n#b\r\n";

selStr += "#L0#初级戒指补发（#r送给粗心大意的玩家#k）#l\r\n";
selStr += "#e#r#L1#第一次成长（需要70级以上）#l\t#b#L11#材料地图传送#l\r\n";
selStr += "#r#L2#第二次成长（需要120级以上）#l\t#b#L12#材料地图传送#l\r\n";
selStr += "#r#L3#第三次成长（需要150级以上）#l\t#b#L13#材料地图传送#l\r\n";
selStr += "#r#L4#第四次成长（需要200级以上）#l\t#b#L14#材料地图传送#l\r\n";
selStr += "#r#L5#最终成长（需要210级以上）#l\t#b#L15#材料地图传送#l\r\n";
selStr += "#r#L6#终极戒指潜能#l\r\n";
let selection =npc.askMenuS(selStr);
if(selection==0){
	if(player.getPQLog("初级戒指补领")<3){
		player.gainItem(1112595,1);
		player.addPQLog("初级戒指补领",1,999);
		npc.say("领取成功，要好好保管哦~");
	}else{
		npc.say("你已经补领过了哦，不能再补领了~");
	}
	
}else if(selection == 1) {
	npc.sayNext(" 如果您带来了#v4000361#x200，那么请将#r#z1112595##k放在装备栏第一格，点击【是】开始成长，成长后将获得#r#z1114201##k！#v4000361#在玛加提亚哈闷气球地图爆");
	if(player.hasItem(4000361, 200) && player.hasItem(1112595, 1) && player.getLevel() > 70 && player.getFreeSlots(1) > 3) {
		
		player.loseItem(4000361, 200);
		player.loseItem(1112595, 1);
		player.gainItem(1114201, 1);
		npc.say("恭喜您把戒指成长为 #z1114201#.");
		npc.broadcastPlayerNotice(0x2, "[系统公告] : 恭喜 " + player.getName() + " 把新月戒指成长为第一阶段大家祝贺.");

	} else {
		npc.say("#b成长失败：#v4000361# 200个 不足,或者等不够.请保留装备栏3个以上空位");

	}
} else if(selection == 2) {
	npc.sayNext(" 如果您带来了#v4000060#x200 ，那么请将#r#z1114201##k放在装备栏第一格，点击【是】开始成长，成长后将获得#r#z1114207##k！#k");
	if(player.hasItem(4000060, 200) && player.hasItem(1114201, 1) && player.getLevel() > 119 && player.getFreeSlots(1) > 3) {
		player.loseItem(4000060, 200);
		player.loseItem(1114201, 1);

		var toDrop = player.makeItemWithId(1114207);
		toDrop.setStr(20); //装备力量
		toDrop.setDex(20); //装备敏捷
		toDrop.setInt(20); //装备智力
		toDrop.setLuk(20); //装备运气
		toDrop.setPad(10); //物理攻击
		toDrop.setMad(10); //魔法攻击 
		toDrop.setTitle("第二阶段");
		player.gainItem(toDrop);
		npc.say("恭喜您把戒指成长为 #z1114207#.");
		npc.broadcastPlayerNotice(0x2, "[系统公告] : 恭喜 " + player.getName() + " 把玛瑙戒指“共享”成长为玛瑙戒指“成长”大家祝贺.");

	} else {
		npc.say("#b成长失败： #v4000060# 200个  或者 等级不够.请保留装备栏3个以上空位");

	}
} else if(selection == 3) {
	npc.sayNext(" 如果您带来了#v4000299#x300 天书掉落请打开地图搜索怪物名称:秘籍,掉落+ #v4310238#x50 绝对味觉币通过BOSS掉落.材料足够的话请将#r#z1114206##k放在装备栏第一格，点击【是】开始成长，成长后将获得#r#z1114212##k");
	if(player.hasItem(4000299, 300) && player.hasItem(4310238, 50) && player.hasItem(1114207, 1) && player.getLevel() > 149 && player.getFreeSlots(1) > 3) {

		player.loseItem(4000299, 300);
		player.loseItem(4310238, 50);
		player.loseItem(1114207, 1);

		var toDrop = player.makeItemWithId(1114212);
		toDrop.setStr(30); //装备力量
		toDrop.setDex(30); //装备敏捷
		toDrop.setInt(30); //装备智力
		toDrop.setLuk(30); //装备运气
		toDrop.setPad(20); //物理攻击
		toDrop.setMad(20); //魔法攻击 
		toDrop.setTitle("第三阶段");
		player.gainItem(toDrop);

		npc.say("恭喜您把戒指成长为 #z1114212#.");
		npc.broadcastPlayerNotice(0x2, "[系统公告] : 恭喜 " + player.getName() + " 把新月戒指强化为第三阶段~大家祝贺.");

	} else {
		npc.say("#b成长失败：#z4000299#300个  #v4310238# 50个不足 或者 等级不够.请保留装备栏3个以上空位");

	}
} else if(selection == 4) {
	npc.sayNext(" 如果您带来了#v4000182# 300个骨骸鱼掉落#v4310014# 2000个 #v4310238# 100个，那么请将#r#z1114207##k放在装备栏第一格，点击【是】开始成长，成长后在原有属性上面在增加全属性含攻击增加40！#k");
	if(player.hasItem(4000182, 300) && player.hasItem(4310014, 2000) && player.hasItem(4310238, 100) && player.hasItem(1114212, 1) && player.getLevel() > 199 && player.getFreeSlots(1) > 3) {
		player.loseItem(4000182, 300);
		player.loseItem(4310238, 100);
		player.loseItem(4310014, 2000);
		player.loseItem(1114212, 1);

		var toDrop = player.makeItemWithId(1114206);
		toDrop.setStr(50); //装备力量
		toDrop.setDex(50); //装备敏捷
		toDrop.setInt(50); //装备智力
		toDrop.setLuk(50); //装备运气
		toDrop.setPad(35); //物理攻击
		toDrop.setMad(35); //魔法攻击 
		toDrop.setTitle("第四阶段");
		player.gainItem(toDrop);

		npc.say("恭喜您把戒指 #z1114212#强化为全属性50.");
		npc.broadcastPlayerNotice(0x2, "[系统公告] : 恭喜 " + player.getName() + " 把新月戒指强化成第四阶段~大家祝贺.");

	} else {
		npc.say("#b成长失败：#v4000182# 300个#v4310014# 2000个#v4310238# 100个不足 或者 等级不够.请保留装备栏3个以上空位");

	}
} else if(selection == 5) {
	npc.sayNext(" 如果您带来了#v4023025# 1个   #v4023026# 3个，紫火分解战国FFN漩涡系列,金火分解埃苏特米系列获得,那么请将#r#z1114212##k放在装备栏第一格，点击【是】开始成长，成长后变为88攻击12BOSS12伤害可潜能戒指！#k");
	if(player.hasItem(4023026, 3) && player.hasItem(4023025, 1) && player.hasItem(1114206, 1) && player.getLevel() > 209 && player.getFreeSlots(1) > 3) {
		player.loseItem(4023026, 3);
		player.loseItem(4023025, 1);
		player.loseItem(1114206, 1);

		var toDrop = player.makeItemWithId(1114312);
		toDrop.setStr(toDrop.getStr()+99); //装备力量
		toDrop.setDex(toDrop.getDex()+99); //装备敏捷
		toDrop.setInt(toDrop.getInt()+99); //装备智力
		toDrop.setLuk(toDrop.getLuk()+99); //装备运气
		toDrop.setPad(toDrop.getPad()+88); //物理攻击
		toDrop.setMad(toDrop.getMad()+88); //魔法攻击 
		toDrop.setTitle("最终阶段");

		toDrop.setBossDamageR(12); // BOSS伤 

		toDrop.setDamR(12); //总伤害
		player.gainItem(toDrop);
		npc.say("恭喜您把戒指 #z1114301#强化为全属性88.");
		npc.broadcastPlayerNotice(0x2, "[系统公告] : 恭喜 " + player.getName() + " 把新月戒指强化成终极阶段~大家祝贺.");

	} else {
		npc.say("#b成长失败：#v4023026# 3个 #v4023025# 1个 不足 或者 等级不够.请保留装备栏3个以上空位");

	}
} else if(selection == 6) {
	npc.sayNext(" 如果您带来了 #v4023026# 2个，紫火分解战国FFN漩涡系列,那么请将#r#z1114312##k放在装备栏第一格，点击【是】开始成长，成长后可以获得6条 6% 全属性潜能！！#k");
	
	var item =player.getInventorySlot(1,1);
	if(item==null){
		npc.say("请在装备栏的第一个格子放上装备。");
	}else if(player.getAmountOfItem(4023026)<2){
		npc.say("你需要2个 #v4023026#");
	}else{
		if(item.getTitle()=="最终阶段" && item.getItemId()==1114312){
			//可以上潜能
			item.setGrade(20);
			item.setPotential(60067,1,false);
			item.setPotential(60067,2,false);
			item.setPotential(60067,3,false);
			item.setPotential(60067,1,true);
			item.setPotential(60067,2,true);
			item.setPotential(60067,3,true);
			player.updateItem(1,item);
			player.loseItem(4023026,2);
			npc.broadcastPlayerNotice(0x2, "[系统公告] : 恭喜 " + player.getName() + " 给新手终极戒指增加了6条 6%全属性潜能！.");

			npc.say("潜能设置成功.");
		}else{
			npc.say("请把强化到顶级的新手戒指放在第一个格子哦~");

		}

	}
	
	
}else if(selection ==11){
	player.changeMap(261010103);
}else if(selection ==12){
	player.changeMap(200050000);
}else if(selection ==13){
	player.changeMap(250010501);
}else if(selection ==14){
	player.changeMap(230040100);
}