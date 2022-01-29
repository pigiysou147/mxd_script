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
	[3992025,1500],
	[4023025,300],
	[4023026,800],
	[4036457,100],
	[4033298,300]
	
	
]
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
var equip1 = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例
var equip2 = player.getInventorySlot(1, 2); //获得装备栏 的第一个格子的道具 实例
var avail = "";
avail += "#e#b\t\t\t\t#v1672069#女武神神归一#v1672069#\r\n#k";
avail += "#r1、在进行了女武神真归一强化之后，还可以进行黑色心脏神归一强化\r\n";
avail +="#bPS:强化可以增加100%的伤害以及500点攻击力和魔法力\r\n";
avail += "#r2、提升属性需要1个的进行过真归一的女武神以及一个黑色心脏进行合成，如果没有黑色心脏，则需要一个同样进行过真归一的女武神进行合成\r\n";
avail += "3、#r注意：把要合成的道具放在前2个格子里面！\r\n#k";
avail += "4、需要";
for(var i=0;i<needItem.length;i++){
	avail+="#v"+needItem[i][0]+"# X " + needItem[i][1]+"";
}
avail+="\r\n以及金币800亿 5000W点券\r\n";
avail += "#b注意：前两个格子必须放上是进行到真归一的女武神之心   \r\n#k";
avail += "#b当前前3格的装备为:\r\n#r";
if(equip1 != null) {
    avail+="第一格.#v"+equip1.getDataId()+"#";
}
if(equip2 != null) {
    avail+="第二格.#v"+equip2.getDataId()+"#";

}


avail += "\r\n#L0##b我要进行女武神究极归一！#l#k\r\n\r\n ";

let selection = npc.askMenu(avail, 3003757);
if(selection == 0) {


    if(equip1 == null) {
        npc.say("请在装备栏第一个位置放上装备！");

    }else if(equip2 == null) {
        npc.say("请在装备栏第二个位置放上装备！");

    } else {

        var itemid1 = equip1.getDataId();
        var itemid2 = equip2.getDataId();
        var flag = 0;

        
		if(itemid1 == 1672069 || itemid1 == 1672082) {
			flag ++;
		}
		if(itemid2 == 1672069 || itemid2 == 1672082) {
			flag ++;
		}
		//检查材料
		
		for(var i=0;i<needItem.length;i++){
			if(player.getAmountOfItem(needItem[i][0])<needItem[i][1]){
				//flag=0;
			}
		}
		
		
		
        
        if(flag >0) {
                //进行强化
				var tt= "#e#r是否需要进行黑色归一呢?归一之后只会保留第一个格子的黑色归一哦。黑色归一需求材料";
				
				for(var i=0;i<needItem.length;i++){
					tt+="#v"+needItem[i][0]+"# X " + needItem[i][1]+"";
				}
				tt+=" 以及 金币800E. \r\n\r\n";
				tt+="#b#L0#我要选择#v1672082#黑色心脏作为材料进行归一#l\r\n\r\n"
				tt+="#L1#我要选择#v1672069#真女武神心脏作为材料进行归一#l"
                let sel = npc.askMenu(tt);

                if(sel == 0) {
                    if(!equip1.getTitle().equals("真女武神归一")  || itemid2!=1672082 ) {
						npc.say("第一格子的装备必须为强化满了的女武神。第二个格子必须为黑色心脏");
					}else if(!player.hasMesos(80000000000)){
						npc.say("需要金币800E");
					}else if(player.getCashShopCurrency(1)<50000000) {
						npc.say("你的材料不够 需要 5000W 点券");

					}else {
						for(var i=0;i<needItem.length;i++){
							player.loseItem(needItem[i][0],needItem[i][1]);
						}
						player.loseMesos(80000000000);
						player.modifyCashShopCurrency(1,-50000000);
                        var random = Math.floor(Math.random() * 100);
                        STR = equip1.getStr();
                        DEX = equip1.getDex();
                        INT = equip1.getInt();
                        LUK = equip1.getLuk();
                        PAD = equip1.getPad(); //物理伤害
                        MAD = equip1.getMad(); //魔法伤害
                        //替换掉属性
                        //攻击
                        equip1.setPad(PAD + 500);
                        //魔法攻击
                        equip1.setMad(MAD + 500);
						//伤害
						equip1.setDamR(equip1.getDamR()+100);
						
						equip1.setItemId(1672082);
						equip1.setCraft(3);
                        equip1.setTitle("究极心脏归一");
						player.loseInvSlot(1,2);
                        player.updateItem(1, equip1);
						
                        npc.broadcastWeatherEffectNotice(0x6, "【究极心脏归一】  玩家 " + player.getName() + " 对女武神进行了究极心脏归一  ps:如果归一才是最终的归宿. 那么这个顶级心脏我也要归一!!!",15000);
						
						npc.broadcastGachaponMsgEx("【究极心脏归一】:  玩家 " + player.getName() + " 对女武神进行了究极心脏归一  ps:如果归一才是最终的归宿. 那么这个顶级心脏我也要归一!!!", equip1);
						
						npc.say("强化成功");
                    }
                }else if(sel == 1) {
                    if(!equip1.getCraft()!=2 || !equip2.getCraft()!=2) {
						npc.say("第一第二个格子的装备必须为强化满了的女武神。");
					}else {
						for(var i=0;i<needItem.length;i++){
							player.loseItem(needItem[i][0],needItem[i][1]);
						}
						player.loseMesos(80000000000);
                        var random = Math.floor(Math.random() * 100);
                        STR = equip1.getStr();
                        DEX = equip1.getDex();
                        INT = equip1.getInt();
                        LUK = equip1.getLuk();
                        PAD = equip1.getPad(); //物理伤害
                        MAD = equip1.getMad(); //魔法伤害
                        //替换掉属性
                        //攻击
                        equip1.setPad(PAD + 500);
                        //魔法攻击
                        equip1.setMad(MAD + 500);
						//伤害
						equip1.setDamR(equip1.getDamR()+100);
						
						equip1.setItemId(1672082);
						equip1.setCraft(3);
                        equip1.setTitle("究极心脏归一");
						player.loseInvSlot(1,2);
                        player.updateItem(1, equip1);
						
                        npc.broadcastWeatherEffectNotice(0x6, "【究极心脏归一】  玩家 " + player.getName() + " 对女武神进行了究极心脏归一  ps:如果归一才是最终的归宿. 那么这个顶级心脏我也要归一!!!",15000);
						
						npc.broadcastGachaponMsgEx("【究极心脏归一】:  玩家 " + player.getName() + " 对女武神进行了究极心脏归一  ps:如果归一才是最终的归宿. 那么这个顶级心脏我也要归一!!!", equip1);
						
						npc.say("强化成功");
                    }
                }

		} else {
			npc.say("请确认你的材料是否足够");

		}
        


    }

}