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
	
	1113014
);

var need = 4023026;

var need_b = 4023025;
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

avail += "#b这里是【新手戒指】强化中心:#v1113014#\r\n\r\n#k";
		
avail += "1、新手戒指强化到满级后，能够进行究极强化\r\n";
avail += "2、提升属性需要#v" + need + "#X1 #v" + need_b + "#X1，紫火分解战国FFN漩涡系列 金火分解埃苏特米获得\r\n";
avail += "#r3、#r注意：装备不支持增加火花提升的属性\r\n";

avail += "4、#r注意：把要提升的新手戒指放在装备栏的第一个位置！\r\n#k";
avail += " #L0##b我要强化我的新手戒指！#l#k\r\n#k";
let selection = npc.askMenuS(avail);
if(selection == 0) {
	var equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！");

	} else {
		
		var itemid = equip.getDataId();
		var flag = 0;
		
		if(itemid ==1113014 ) {
				flag = 1;
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
				if(!player.hasMesos(100000000) ) {
					npc.say("你的材料不够 需要 100000000 金币");

				} else if(!player.hasItem(need,1) ) {
					npc.say("你的材料不够 需要#v" + need + "# X1");

				} else if(!player.hasItem(need_b,1) ) {
					npc.say("你的材料不够 需要#v" + need_b + "# X1");

				}else {
					if(times < 15) {
						var random = Math.floor(Math.random() * 100);
						player.loseItem(need, 1);
						player.loseItem(need_b, 1);
						player.loseMesos(100000000);
						if(random <= 70) {
						STR = equip.getStr();
						DEX = equip.getDex();
						INT = equip.getInt();
						LUK = equip.getLuk();
						PAD = equip.getPad(); //物理伤害
						MAD = equip.getMad(); //魔法伤害
						
						//替换掉属性
						//力量
						equip.setStr(STR + 20);
						//敏捷
						equip.setDex(DEX + 20);
						//智力
						equip.setInt(INT + 20);
						//运气
						equip.setLuk(LUK + 20);
						//攻击
						equip.setPad(PAD + 20);
						//魔法攻击
						equip.setMad(MAD + 20);
						times++;
						equip.setTitle("究极强化+" + times);
						player.updateItem(1, equip);
						npc.broadcastGachaponMsgEx("【究极新手戒指强化】:  玩家 " + player.getName() + " 究极强化了      : 鸟枪换大炮啦", equip);

						npc.say("强化成功");
						}
					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到30次哦~");
					}

				}

			}

		} else {
			npc.say("请确认你的第一格装备是否为强化到顶端的新手戒指");

		}

	}

}