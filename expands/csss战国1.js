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
1152095,
1132157,
1072712,
1052510,
1082473,
1102457,
1003602,
1152097,
1132159,
1072714,
1052512,
1082475,
1102459,
1003604,
1152098,
1132160,
1072715,
1052513,
1082476,
1102460,
1003605,
1152094,
1132156,
1072711,
1052509,
1082472,
1102456,
1003601,
1152096,
1132158,
1072713,
1052511,
1082474,
1102458,
1003603
);
var need = 4023026;
var need_b = 4310028;
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

avail += "#b本将能助你一臂之力 ，强化战国装备后打败浓姬:#v1052512##v1072712##v1052513#\r\n\r\n#k";

//avail += "1、创世首饰做为本服毕业首饰，能够在基础属性再加上爆炸的属性\r\n";
avail += "1、提升属性需要#v" + need + "#X1 #v" + need_b + "#X20，再给我2000万材料费 \r\n紫火分解获得大冒险币组队任务获得\r\n";
//avail += "#r3、#r注意：装备不支持增加火花提升的属性，强化好再砸火花哈\r\n";

avail += "2、#r注意：把要提升的战国放在装备栏的第一个位置！\r\n#k";
avail += " #L0##b我要强化我的战国！#l#k\r\n#k";

let selection = npc.askMenu(avail, 9130022);
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
				if(!player.hasMesos(20000000)) {
					npc.say("你的材料不够 需要 20000000 金币");

				} else if(!player.hasItem(need, 1)) {
					npc.say("你的材料不够 需要#v" + need + "# X1");

				} else if(!player.hasItem(need_b, 20)) {
					npc.say("你的材料不够 需要#v" + need_b + "# X20");

				} else {
					var random = Math.floor(Math.random() * 100);
					
					if(times < 5) {
						player.loseItem(need, 1);
						player.loseItem(need_b, 20);
						if(random >= 50) { //判断概率
						
							var random = Math.floor(Math.random() * 100);
							
							player.loseMesos(20000000);
							STR = equip.getStr();
							DEX = equip.getDex();
							INT = equip.getInt();
							LUK = equip.getLuk();
							PAD = equip.getPad(); //物理伤害
							MAD = equip.getMad(); //魔法伤害

							//替换掉属性
							//力量

							equip.setPad(PAD + 4);
							//魔法攻击
							equip.setMad(MAD + 4);

							equip.setSpeed(equip.getSpeed() + 1);

							equip.setStatR(equip.getStatR() + 1);
							times++;
							equip.setTitle("战国进阶+" + times);
							player.updateItem(1, equip);
							npc.broadcastGachaponMsgEx("【战国进阶】:  玩家 " + player.getName() + " 强化了战国系列装备", equip);

							npc.say("强化成功");
						
						} else {
							npc.say("强化失败");
							
						}
					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到5次哦~");
						
					}

				}

			}

		} else {
			npc.say("请确认你的第一格装备是否为战国");

		}

	}

}