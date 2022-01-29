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
	1672069,
    1672069 
);

var need = 3992025;
var need_b = 4023025;

var needItem=[
	[3992025,800],
	[4023025,200],
	[4023026,500],
	[4036457,50],
	[4033298,200]
	
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
var equip1 = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例
var equip2 = player.getInventorySlot(1, 2); //获得装备栏 的第一个格子的道具 实例
var avail = "";
avail += "#e#b\t\t\t\t#v1672069#女武神真归一#v1672069#\r\n#k";
avail += "#r1、真女武神作为本服毕业心脏，能够在基础属性再加上爆炸的属性\r\n";
avail +="#bPS:强化可以增加50%的伤害以及300点攻击力和魔法力\r\n";
avail += "#r2、提升属性需要2个相同的完成归一的女武神心脏进行合成\r\n";
avail += "3、#r注意：把要合成的2个#v1672069#放在前2个格子里面！\r\n#k";
avail += "4、需要";
for(var i=0;i<needItem.length;i++){
	avail+="#v"+needItem[i][0]+"# X " + needItem[i][1]+"  ";
}
avail+="\r\n以及金币300亿，2000W点券\r\n";
avail += "#b注意：前两个格子必须放上是完成归一的女武神之心   \r\n#k";
avail += "#b当前前3格的装备为:\r\n#r";
if(equip1 != null) {
    avail+="第一格.#v"+equip1.getDataId()+"#";
}
if(equip2 != null) {
    avail+="第二格.#v"+equip2.getDataId()+"#";

}


avail += "\r\n#L0##b我要合成女武神！#l#k\r\n#k";

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

        
		if(itemid1 == 1672069) {
			flag ++;
		}
		if(itemid2 == 1672069) {
			flag ++;
		}
		//检查材料
		
		for(var i=0;i<needItem.length;i++){
			if(player.getAmountOfItem(needItem[i][0])<needItem[i][1]){
				flag=0;
			}
		}
		
		
		
        
        if(itemid1!=itemid2 ){
            npc.say("请放入2件同样的装备在装备栏的前2个格子");
        }else{
            if(flag == 2) {
                //进行强化
				var tt= "#e#r是否需要进行女武神归一呢?归一之后只会保留第一个格子的女武神哦。女武神归一需求材料";
				
				for(var i=0;i<needItem.length;i++){
					tt+="#v"+needItem[i][0]+"# X " + needItem[i][1]+"";
				}
				tt+=" 以及 金币300E.点券2000W \r\n\r\n如果需要请点是";
                let sel = npc.askYesNo(tt);

                if(sel == 1) {
                    if(equip1.getCraft()!=1 || equip2.getCraft()!=1) {
						npc.say("第一第二个格子的装备必须为归一过的的女武神。");
					}else if(!player.hasMesos(30000000000)){
						npc.say("需要金币300E");
					}else if(player.getCashShopCurrency(1)<20000000) {
						npc.say("你的材料不够 需要 2000W 点券");

					}else {
						for(var i=0;i<needItem.length;i++){
							player.loseItem(needItem[i][0],needItem[i][1]);
						}
						player.loseMesos(30000000000);
						player.modifyCashShopCurrency(1,-20000000);
                        var random = Math.floor(Math.random() * 100);
                        STR = equip1.getStr();
                        DEX = equip1.getDex();
                        INT = equip1.getInt();
                        LUK = equip1.getLuk();
                        PAD = equip1.getPad(); //物理伤害
                        MAD = equip1.getMad(); //魔法伤害
                        //替换掉属性
                        //攻击
                        equip1.setPad(PAD + 300);
                        //魔法攻击
                        equip1.setMad(MAD + 300);
						//伤害
						equip1.setDamR(equip1.getDamR()+50);
						equip1.setCraft(2);
                        equip1.setTitle("真女武神归一");
						player.loseInvSlot(1,2);
                        player.updateItem(1, equip1);
						
                        npc.broadcastWeatherEffectNotice(0x6, "【女武神真归一】  玩家 " + player.getName() + " 对女武神进行了女武神真归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!",15000);
						
						npc.broadcastGachaponMsgEx("【女武神真归一】:  玩家 " + player.getName() + " 对女武神进行了女武神真归一  ps:如果归一才是最终的归宿. 那么这个顶级心脏我也要归一!!!", equip1);
						
						npc.say("强化成功");
                    }
                }

            } else {
                npc.say("请确认你的前两个格子的装备是否为归一过后#v1672069#,或者材料是否足够");

            }
        }


    }

}