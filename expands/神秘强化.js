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
	1562009,
	1572009,
	1214018,//神秘之影龙息臂箭
	1403018, //神秘之影拳炮
	1213018,
	1152196,
	1152197,
	1152198,
	1152199,
	1152200,
	1004808,
	1004809,
	1004810,
	1004811,
	1004812,
	1102940,
	1102941,
	1292018,
	1102942,
	1102943,
	1102944,
	1082695,
	1082696,
	1082697,
	1082698,
	1082699,
	1053063,
	1053064,
	1053065,
	1053066,
	1592020,
	1053067,
	1073158,
	1073159,
	1073160,
	1073161,
	1073162,
	1212120,
	1222113,
	1232113,
	1242121,
	1242122,
	1252098,
	1262039,
	1272017,
	1282017,
	1302343,
	1312203,
	1322255,
	1332279,
	1342104,
	1362140,
	1372228,
	1382265,
	1402259,
	1412181,
	1422189,
	1432218,
	1442274,
	1452257,
	1462243,
	1472265,
	1482221,
	1492235,
	1522143,
	1532150,
	1542117,
	1552119,
	1582023,
	1690204,
	1690321,
	1690322,
	1690323,
	1690324,
	1690325,
	1690326
);
var randList = Array(
	Math.floor(Math.random() * 15 + 1), //str
	Math.floor(Math.random() * 15 + 1), //dex
	Math.floor(Math.random() * 15 + 1), //inte
	Math.floor(Math.random() * 15 + 1), //luk
	Math.floor(Math.random() * 15 + 1), //pad
	Math.floor(Math.random() * 15 + 1), //mad
	Math.floor(Math.random() * 8 + 3), //boss
	1, //wushi
	Math.floor(Math.random() * 500 + 1), //hp
	Math.floor(Math.random() * 500 + 1) //mp

);
var need = 4023025;
var result;
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
var equip;
var times = 0;
var meso=200000000;

var avail = "";

avail+="#b这里是神秘防具属性提升中心:#v1152196##v1152197##v1152198##v1152199#\r\n\r\n#k";
		avail += "1、神秘做为本服毕业装备，能够强化满后多200-300的全属性\r\n";
		avail += "2、提升属性需要金币 "+meso/100000000+" E #v" + need + "#一颗，#r如果选择保留强化属性需要额外消耗一颗#k 该物品在装备分解中获得\r\n";
		avail += "#r3、#r注意：装备不支持增加火花提升的属性\r\n";
		avail += "4、#r注意：提升的时候可以先砸卷后提升\r\n";
		avail += "5、#r注意：把要提升的神秘装备放在装备栏的第一个位置！\r\n#k";
		avail += " #L0##b我要强化神秘装备！#l#k\r\n#k";
		avail += " #L1##b神之子强化武器！#l#k\r\n#k";
		
let selection = npc.askMenuS(avail);
if(selection == 0) {
	equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 
}else{
	if(player.getJob()==10112){
		equip=player.getInventorySlot(-1,-11);
	}else{
		npc.say("你不是神之子。已经帮你切换到装备栏第一个格子");
		
		equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 
	}
}

	
	

	if(!player.hasItem(need,1)) {
		npc.say("你并没有#z" + need + "#，所以不能开启");
		
	} else if(!player.hasMesos(meso)) {
		npc.say("需要金币 "+meso/100000000+" E");

	} else if(equip == null) {
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
				if(str.length > 4) {
					//强化了的
					str = str.substring(5, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}
			if(times < 25 && equip.getCraft()==0 ) {
				var info = "装备：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n当前六维属性如下：\r\n";
				info += "#r点击‘是’会增加当前显示属性并且强化等级+1 ，点击‘否’可以不要此次属性，属性跟最大值相差较大可以选否。\r\n无论是否保留属性都会消耗一个强化材料#k\r\n"
				//保存更新记录

				info += "\r\n#b强化:#k 最大值#g-> #r本次";
				info += "\r\n#b力量:#k最大值:15 #g-> #r" + randList[0];
				info += "\r\n#b敏捷:#k最大值:15 #g-> #r" + randList[1];
				info += "\r\n#b智力:#k最大值:15 #g-> #r" + randList[2];
				info += "\r\n#b运气:#k最大值:15#g-> #r" + randList[3];
				info += "\r\n#b攻击力:#k最大值:15 #g-> #r" + randList[4];
				info += "\r\n#b魔法力:#k最大值:15 #g-> #r" + randList[5];
				info += "\r\n#bBOSS伤害:#k最大值:10 #g-> #r" + randList[6];
				info += "\r\n#b无视:#k最大值:3 #g-> #r" + randList[7];
				info += "\r\n#b全属性:#k最大值:1 #g-> #r" + 1;
				info += "\r\n#b最大HP:#k最大值:500 #g-> #r" + randList[8];
				info += "\r\n#b最大MP:#k最大值:500 #g-> #r" + randList[9];


				player.loseMesos(meso);
				player.loseItem(need, 1);
				let sel = npc.askYesNoSNoEsc(info);
				if(sel == 1) {
					STR = equip.getStr();
					DEX = equip.getDex();
					INT = equip.getInt();
					LUK = equip.getLuk();
					PAD = equip.getPad(); //物理伤害
					MAD = equip.getMad(); //魔法伤害
					
					//替换掉属性
					//力量
					equip.setStr(STR + randList[0]);
					//敏捷
					equip.setDex(DEX + randList[1]);
					//智力
					equip.setInt(INT + randList[2]);
					//运气
					equip.setLuk(LUK + randList[3]);
					//攻击
					equip.setPad(PAD + randList[4]);
					//魔法攻击
					equip.setMad(MAD + randList[5]);
					//BOSS伤害
					equip.setBossDamageR(equip.getBossDamageR() + randList[6]);
					//无视
					equip.setIgnorePDR(equip.getIgnorePDR() + randList[7]);
					//HP
					equip.setMaxHp(equip.getMaxHp() + randList[8]);
					//MP
					equip.setMaxMp(equip.getMaxMp() + randList[9]);
					
					times++;
					equip.setStatR(times*1);
					equip.setTitle("神秘强化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【强化中心】: 玩家 "+player.getName()+" 强化了神秘之影装备，获得了强大的力量！！!", equip);
					
					npc.say("强化成功");
			

				}else{
					
					npc.say("保留了属性，但是扣除了你一个#v"+need+"#");
				}
			} else {
				npc.say("强化次数已经到达上限,目前强化只开放到25次哦~");
			}
			

		} else {
			
			npc.say("请检查装备栏第一个位置是否为神秘之影装备！");

		}

	}

