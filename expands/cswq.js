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
	1213022,
	1572010,
	1262051,
	1232122,
	1302355,
	1212129,
	1522152,
	1402268,
	1412189,
	1422197,
	1452266,
	1462252,
	1552130,
	1362149,
	1492245,
	1482232,
	1532157,
	1472275,
	1312213,
	1582044,
	1252106,
	1432227,
	1542128,
	1222122,
	1332289,
	1372237,
	
	1103190,
	1242139,
	1242141,
	1592022,
	1272040,
	1322264,
	1442285,
	1382274,
	1282040
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

avail += "#b我能用最黑暗的力量来提升漆黑地狱里掉落的装备 #v4036457#，利用黑魔法师自己的力量打败他::#v1522152##v1532157##v1302355#\r\n\r\n#k";

avail += "1、创世武器做为本服毕业武器，能够在基础属性再加上爆炸的属性\r\n";
avail += "2、提升属性需要#v" + need + "#X3 #v" + need_b + "#X1，以及金币5亿\r\n该物品在黑魔法师副本中获得，还有分解神秘装备可以获得\r\n";
avail += "#r3、#r注意：装备不支持增加火花提升的属性，强化好再砸火花哈\r\n";

avail += "4、#r注意：把要提升的创世武器放在装备栏的第一个位置！\r\n#k";
avail += " #L0##b强化我的创世武器！#l#k\t#k";
avail += " #L1##b(神之子强化)创世武器！#l#k\r\n\r\n#k";
let selection = npc.askMenu(avail, 3003757);
var equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 
if(selection == 1) {
	equip = player.getInventorySlot(-1, -11); //获得装备栏 的第一个格子的道具 实例 
}
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
				if(str.length > 5) {
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
					
					if(times < 50) {
						player.loseItem(need, 3);
						player.loseItem(need_b, 1);
						if(times<30){
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
								
								
								//无视
								equip.setIgnorePDR(equip.getIgnorePDR() + 1);

								equip.setSpeed(equip.getSpeed() + 1);

								equip.setJump(equip.getJump() + 1);
								
								times++;//全属性
								//BOSS伤害
								equip.setBossDamageR(times* 5);
								equip.setStatR(times*2);
								equip.setTitle("黑暗创世+" + times);
								player.updateItem(1, equip);
								npc.broadcastGachaponMsgEx("【黑暗创世武器强化】:  玩家 " + player.getName() + " 强化了创世武器  神豪的世界我不懂", equip);

								npc.say("强化成功");
							
						} else {
							npc.say("强化失败");
							
						}

					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到50次哦~");
					}

				}

			}

		} else {
				npc.say("请确认你的第一格装备是否为创世武器");

			}

	}
