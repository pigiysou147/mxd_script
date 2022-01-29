var status = -1;

//男
var man = Array( //发型  //脸型		//点装     	//点装	//点装	 
	Array("男生1", 40670, 20835, 1004884, 1012573, 1053355, 1073317, 1702718),
	Array("男生2", 20835, 20835, 1005354, 1053435, 1073355, 1702918),
	Array("男生3", 35437, 20835, 1005143, 1050486, 1073271, 1702826),
	//Array("男生4", 40060, 20835, 1004478, 1041194, 1062220),
	Array("男生4", 36430, 20835, 1005270, 1012208, 1053285, 1073316)
);
//女
var girl = Array( //发型  //脸型		//点装     	//点装	//点装	 
	Array("暗黑哥特SM女王套装", 44500, 21831, 1051426, 1072153, 1072507),
	Array("女生2", 37932, 21831, 1003013, 1042038, 1072153, 1062211),
	Array("我是小黄鸭鸭鸭鸭鸭", 43631, 21844,1072153,  1003223, 1042222, 1061126),
	Array("女生4", 41892, 21831, 1005000, 1051535, 1073237),
	Array("女生5", 38390, 21831, 1003883, 1072153, 1053035, 1702842)
);
var list;
if(player.getGender() == 0) {
	//男
	list = man;

} else {
	list = girl;
}
var text = " 亲爱的玩家#r" + player.getName() + "#k你好\r\n" ;
text += "我们精心准备了几套新手点装供您免费挑选\r\n";
for(var i = 0; i < list.length; i++) {
	text += "#L" + i + "##b#e" + list[i][0];
	for(var j = 3; j < list[i].length; j++) {
		text += "  #v" + list[i][j] + "#";
	}
	text += "#l\r\n";
}
let selection =npc.askMenu(text);

for(var j = 3; j < list[selection].length; j++) {
	player.gainItem(list[selection][j], 1);
}

makeItem();
//给东西

player.gainItem(2500000, 1); // HP椅子
//player.gainItem(5030000, 1, 7); // HP椅子
player.gainItem(3020000, 1); // 熊猫椅子
player.gainItem(3015636, 1); // 绿水灵背景椅子	
player.gainItem(2120000, 1000); // 宠物食品
player.gainItem(3015636, 1); // 绿水灵背景椅子		
player.gainItem(2000005, 300); // 超级药水
player.gainItem(1082102, 1); // 特大号白衬衫
player.gainItem(1115147, 1); // 名片戒指
player.gainItem(4009453, 9999); // 魔方精髓
player.gainItem(4009439, 9999); // 还原Q
player.gainItem(4009444, 9999); // 怪怪包
player.gainItem(5190011, 1); // 宠物训练
player.gainItem(5190002, 1); // 宠物训练
player.gainItem(5190006, 1); // 怪怪包
player.gainItem(1115058, 1); // 聊天戒指
player.gainItem(5000968, 1); // 宠物
player.gainItem(5000966, 1); // 宠物
player.gainItem(5000967, 1); // 宠物
player.gainItem(1113286, 1); // 平衡戒指
player.gainItem(1022048, 1); // 透明眼饰
player.gainItem(1032024, 1); // 透明耳环
player.gainItem(2431293, 1); // 10zhounian
player.gainItem(5152053, 3); // 皇家整容
player.gainItem(5150052, 1); // 万能高级美发
player.gainItem(5153015, 1); // 万能护肤
player.gainItem(5152057, 1); // 万能高级整形
player.gainItem(2630230,1);
player.gainItem(2430682, 1); // 高质地喇叭
player.gainItem(1112595, 1);


let newItem1 = player.makeItemWithId(1012553);
newItem1.setExpiration(new Date().getTime() + 60 * 60 * 48 * 1000);
player.gainItem(newItem1);

let newItem2 = player.makeItemWithId(5211060);
newItem2.setExpiration(new Date().getTime() + 60 * 60 * 2 * 1000);
player.gainItem(newItem2);

player.setHair(list[selection][1]); //发型
player.setFace(list[selection][2]); //脸型
player.loseItem(2430241, 1);
player.gainEquipInventorySlots(96);
player.gainEtcInventorySlots(96);
player.gainCashInventorySlots(96);
player.	gainSetupInventorySlots(96);
player.	gainUseInventorySlots(96);

if(player.getJob()==10112){

	var item =player.getInventorySlot(-1,-11);
	if(item.getGrade()==0){
		item.setGrade(20);
		item.setOption(1, 60084, false);
		item.setOption(2, 60084, false);
		item.setOption(3, 60084, false);
		item.setOption(1, 60084, true);
		item.setOption(2, 60084, true);
		item.setOption(3, 60084, true);
		player.updateItem(-11,item);
	}
	
}


npc.broadcastNotice( "『新手驾到』：恭喜玩家 " + player.getName() + " 来到了回忆岛。热烈欢迎他(她)吧。");
npc.say("恭喜您获得 #r管理员送出的礼物#k 。");


function makeItem() {
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	//player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	player.gainExp(4500); //经验
	//player.gainItemPeriod(1112918, 1, 60 * 60 * 24 * 1000); // 回归戒指 X124小时
	
	var toDrop = player.makeItemWithId(1190400);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 480 * 600 * 600 * 3000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(15); //装备力量
	toDrop.setDex(15); //装备敏捷
	toDrop.setInt(15); //装备智力
	toDrop.setLuk(15); //装备运气
	toDrop.setPad(15); //物理攻击
	toDrop.setMad(10); //魔法攻击
	//toDrop.setDamR(10);
	toDrop.setCHUC(25);
	player.gainItem(toDrop);
	//戒指
	var toDrop = player.makeItemWithId(1112422);
	toDrop.setCHUC(25);
	player.gainItem(toDrop);
	var toDrop = player.makeItemWithId(1142358);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 72 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(100); //装备力量
	toDrop.setDex(100); //装备敏捷
	toDrop.setInt(100); //装备智力
	toDrop.setLuk(100); //装备运气
	toDrop.setMad(60); //魔法攻击
	toDrop.setPad(60); //物理攻击
	toDrop.setJump(80); //跳跃力
	toDrop.setSpeed(80); //移动速度
	toDrop.setMaxHp(10000); //血
	toDrop.setMaxMp(10000); //蓝
	player.gainItem(toDrop);
	
	var toDrop = player.makeItemWithId(1002186);
	var timeStamp = java.lang.System.currentTimeMillis();
	var expirationDate = timeStamp + 72 * 60 * 60 * 1000;
	toDrop.setExpiration(expirationDate);
	toDrop.setStr(10); //装备力量
	toDrop.setDex(10); //装备敏捷
	toDrop.setInt(10); //装备智力
	toDrop.setLuk(10); //装备运气
	toDrop.setMad(15); //魔法攻击
	toDrop.setPad(15); //物理攻击
	toDrop.setJump(30); //跳跃力
	toDrop.setSpeed(30); //移动速度
	toDrop.setMaxHp(1000); //血
	toDrop.setMaxMp(1000); //蓝
	player.gainItem(toDrop);
}