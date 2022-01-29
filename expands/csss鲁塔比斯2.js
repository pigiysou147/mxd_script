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
1003797,
1003798,
1003799,
1003800,
1003801,
1042254,
1042255,
1042256,
1042257,
1042258,
1062165,
1062166,
1062167,
1062168,
1062169
);
var need = 3994387;
var need_b = 4031997;
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

avail += "#b本咕咕能用大量金币帮你进阶法弗纳装备 ，利用金币力量打败他:#v1003797##v1003798##v1003797#\r\n\r\n#k";

//avail += "1、创世首饰做为本服毕业首饰，能够在基础属性再加上爆炸的属性\r\n";
avail += "1、提升属性需要#v" + need + "#X1 #v" + need_b + "#X100，再给我10万金币买可乐 \r\n鸡腿在杂货商店获得\r\n";
//avail += "#r3、#r注意：装备不支持增加火花提升的属性，强化好再砸火花哈\r\n";

avail += "2、#r注意：把要提升的法弗纳放在装备栏的第一个位置！\r\n#k";
avail += "3、#r注意：请把FFN防具强化砸好再强化哦，否则还原属性没了！\r\n#k";
avail += " #L0##b我要强化我的法弗纳！#l#k\r\n#k";

let selection = npc.askMenu(avail, 9330363);
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
				if(!player.hasMesos(100000)) {
					npc.say("你的材料不够 需要 100000 金币");

				} else if(!player.hasItem(need, 1)) {
					npc.say("你的材料不够 需要#v" + need + "# X1");

				} else if(!player.hasItem(need_b, 100)) {
					npc.say("你的材料不够 需要#v" + need_b + "# X100");

				} else {
					var random = Math.floor(Math.random() * 100);
					
					if(times < 10) {
						
						player.loseItem(need, 1);
						player.loseItem(need_b, 100);
						if(random >= 50) { //判断概率
							player.loseMesos(100000);
							STR = equip.getStr();
							DEX = equip.getDex();
							INT = equip.getInt();
							LUK = equip.getLuk();
							PAD = equip.getPad(); //物理伤害
							MAD = equip.getMad(); //魔法伤害

							//替换掉属性
							//力量
							equip.setStr(STR + 7);
							//敏捷
							equip.setDex(DEX + 7);
							//智力
							equip.setInt(INT + 7);
							//运气
							equip.setLuk(LUK + 7);
							//攻击
							equip.setPad(PAD + 7);
							//魔法攻击
							equip.setMad(MAD + 7);
							//BOSS伤害
							equip.setBossDamageR(equip.getBossDamageR() + 1);
							//无视
							equip.setIgnorePDR(equip.getIgnorePDR() + 1);

							equip.setSpeed(equip.getSpeed() + 1);

							equip.setJump(equip.getJump() + 1);
							//全属性
							equip.setStatR(equip.getStatR() + 1);
							times++;
							equip.setTitle("进阶强化+" + times);
							player.updateItem(1, equip);
							npc.broadcastGachaponMsgEx("【法弗纳进阶】:  玩家 " + player.getName() + " 强化了法弗纳 还把半半喂更肥了", equip);

							npc.say("强化成功");
						
						} else {
							npc.say("强化失败");
						}
					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到10次哦~");
					
					}

				}

			}

		} else {
			npc.say("请确认你的第一格装备是否为法弗纳");

		}

	}

}