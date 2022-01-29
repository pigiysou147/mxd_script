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
	1672069,1672082
);
var need = 3992025;
var need_b = 4023025;
var needItem=[
	[3992025,10],
	[4023025,1],
	[4033298,2]
];
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

avail += "#e#b勇敢的冒险家.你是否也曾听闻过女武神的传说.如果你有幸获得了女武神之心.便可在我这里打造出传世神器.#v1672069#\r\n\r\n#k";


avail += "#r1、女武神之心和黑暗心脏做为本服毕业心脏，能够在基础属性再加上爆炸的属性\r\n";
avail += "2、需要";
for(var i=0;i<needItem.length;i++){
	avail+="#v"+needItem[i][0]+"# X " + needItem[i][1]+"";
}
avail+="，以及金币1亿，10W点券\r\n";

avail += "3、#r注意：把要提升的#v1672069#放在装备栏的第一个位置！\r\n#k";
avail += " #L0##b我要强化我的#v1672069#！#l#k\r\n#k";

let selection = npc.askMenu(avail, 3003757);
if(selection == 0) {
	var equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(equip == null) {
		npc.say("请在装备栏第一个位置放上#v1672069#装备！");

	} else {

		var itemid = equip.getDataId();
		var flag = 0;

		if(itemid == ItemList[0]) {
				flag = 1;
		}
		
		//检查材料
		
		for(var i=0;i<needItem.length;i++){
			if(player.getAmountOfItem(needItem[i][0])<needItem[i][1]){
				flag=0;
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
			if(times>=0){
				let sel = npc.askYesNo("#r#e当前装备强化等级为+#r" + times + "#k\r\n是否要进行强化把装备强化成+#r" + (times + 1) + "#k呢？");
				//let sel=1;
				if(sel == 1) {
					if(player.getCashShopCurrency(1)<100000) {
						npc.say("你的材料不够 需要 100000 点券");

					} else if(!player.hasMesos(100000000)) {
						npc.say("你的金币不够需要 1E 金币");

					} else {
						var random = Math.floor(Math.random() * 100);
						if(times < 50) {
							for(var i=0;i<needItem.length;i++){
								player.loseItem(needItem[i][0],needItem[i][1]);
							}
							player.loseMesos(100000000);
							player.modifyCashShopCurrency(1,-100000);
							if(times<10){
								random=100;
							}
							if(random >= 50) { //判断概率
								var random = Math.floor(Math.random() * 100);
									
									
									PAD = equip.getPad(); //物理伤害
									MAD = equip.getMad(); //魔法伤害

									//替换掉属性
									
									//攻击
									equip.setPad(PAD + 4);
									//魔法攻击
									equip.setMad(MAD + 4);
									//伤害
									equip.setDamR(equip.getDamR()+1);
									
									
									times++;
									equip.setTitle("心脏强化+" + times);
									player.updateItem(1, equip);
									npc.broadcastGachaponMsgEx("【心脏强化】:  玩家 " + player.getName() + " 强化了顶级心脏  大神的世界我不懂", equip);

									npc.say("强化成功");
								
							} else {
								npc.say("强化失败");
							}
						} else {
							npc.say("强化次数已经到达上限,目前强化只开放到50次哦~");

						}

					}

				}
			}else{
					npc.say("#r#e当前装备不允许强化");
				}
			

		} else {
			npc.say("请确认你的第一个格子的装备是否为#v1672069#,或者材料是否足够");

		}

	}

}