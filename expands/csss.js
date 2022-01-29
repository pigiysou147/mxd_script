/*
武器屬性提升範本
大宝贝
QQ : 423283141
*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";

var ItemList = Array(
	1190555,
	1122430,
	1182158,
	1113306,
	1032316,
	1012632,
	1122296,
	1113302,
	1114303,
	1113211,
	1022278,
	1132308,
	1162080,
	1162081,
	1162082,
	1162083,
	1182285
);
var need = 4023026;
var need_b = 4036457;
var SN;
var STR;
var DEX;
var INT;
var LUK;
var PAD; //物理伤害
var MAD; //魔法伤害
var BOSS;
var WS;
var HP;
var MP;
var times = 0;

var avail = "";

avail += "#b我能用最黑暗的力量来提升漆黑地狱里掉落的装备 #v4036457#，利用黑魔法师自己的力量打败他:";
for(var i=0;i<ItemList.length;i++){
	avail +="#v"+ItemList[i]+"#";
}
avail += "\r\n\r\n#k";

avail += "1、创世首饰做为本服毕业首饰，能够在基础属性再加上爆炸的属性\r\n";
avail += "2、提升属性需要#v" + need + "#X3 #v" + need_b + "#X1，以及金币5亿\r\n该物品在黑魔法师副本中获得，还有分解神秘装备可以获得\r\n";
avail += "#r3、#r注意：装备不支持增加火花提升的属性，强化好再砸火花哈\r\n";

avail += "4、#r注意：把要提升的创世首饰放在装备栏的第一个位置！\r\n#k";
avail += " #L0##b我要强化我的创世首饰！#l#k\r\n#k";

let selection = npc.askMenu(avail, 3003757);
if(selection == 0) {
	var equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！");

	} else {

		var itemid = equip.getDataId();
		var flag = 0;

		for(var i = 0; i < ItemList.length; i++) {
			if(itemid == ItemList[i]) {
				flag = 1;
			}
		}
		if(flag == 1) {
			//进行强化

			var str = equip.getTitle();
			if(str != null) {
				if(str.length > 0) {
					//强化了的
					str = str.substring(5, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}

			let sel = npc.askYesNo("当前装备强化等级为+#r" + times + "#k\r\n是否要进行强化把装备强化成+#r" + (times + 1) + "#k呢？");

			if(sel == 1) {
				if(!player.hasMesos(500000000)) {
					npc.say("你的材料不够 需要 500000000 金币");

				} else if(!player.hasItem(need, 3)) {
					npc.say("你的材料不够 需要#v" + need + "# X3");

				} else if(!player.hasItem(need_b, 1)) {
					npc.say("你的材料不够 需要#v" + need_b + "# X1");

				} else {
					var random = Math.floor(Math.random() * 100);
					if(times < 30) {
						player.loseItem(need, 3);
						player.loseItem(need_b, 1);
						if(times<20){
							random=100;
						}
						player.loseMesos(500000000);
						if(random >= 50) { //判断概率
							var random = Math.floor(Math.random() * 100);
							
								
							
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理伤害
								MAD = equip.getMad(); //魔法伤害

								//替换掉属性
								//力量
								equip.setStr(STR + 30);
								//敏捷
								equip.setDex(DEX + 30);
								//智力
								equip.setInt(INT + 30);
								//运气
								equip.setLuk(LUK + 30);
								//攻击
								equip.setPad(PAD + 20);
								//魔法攻击
								equip.setMad(MAD + 20);
								//BOSS伤害
								equip.setBossDamageR(equip.getBossDamageR() + 5);
								//无视
								equip.setIgnorePDR(equip.getIgnorePDR() + 1);

								equip.setSpeed(equip.getSpeed() + 1);

								equip.setJump(equip.getJump() + 1);
								//全属性
								equip.setStatR(equip.getStatR() + 1);
								times++;
								equip.setTitle("黑暗创世+" + times);
								player.updateItem(1, equip);
								npc.broadcastGachaponMsgEx("【黑暗创世首饰强化】:  玩家 " + player.getName() + " 强化了创世首饰  大神的世界我不懂", equip);

								npc.say("强化成功");
							
						} else {
							npc.say("强化失败");
						}
					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到30次哦~");

						
					}

				}

			}

		} else {
			npc.say("请确认你的第一格装备是否为创世首饰");

		}

	}

}