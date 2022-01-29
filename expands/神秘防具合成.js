/*
防具屬性提升範本
大宝贝
QQ : 423283141
*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var ItemList = Array(
	1152197,//神秘之影法师护肩,//
	1073159,//神秘之影法师鞋	
	1053064,//神秘之影法师套装	
	1082696,//神秘之影法师手套	
	1102941,//神秘之影法师披风	
	1004809,//神秘之影法师帽
	1152198,//神秘之影弓箭手护肩	
	1073160,//神秘之影弓箭手鞋	
	1053065,//神秘之影弓箭手套装	
	1082697,//神秘之影弓箭手手套	
	1102942,//神秘之影弓箭手披风	
	1004810,//神秘之影弓箭手帽
	1152196,//神秘之影战士护肩	
	1073158,//神秘之影战士鞋	
	1053063,//神秘之影战士套装	
	1082695,//神秘之影战士手套	
	1102940,//神秘之影战士披风	
	1004808,//神秘之影战士帽
	1152199,//神秘之影飞侠护肩	
	1073161,//神秘之影飞侠鞋	
	1053066,//神秘之影飞侠套装	
	1082698,//神秘之影飞侠手套	
	1102943,//神秘之影飞侠披风	
	1004811,//神秘之影飞侠帽
	1152200,	//神秘之影海盗护肩	
	1073162,	//神秘之影海盗鞋	
	1053067,	//神秘之影海盗套装	
	1082699,	//神秘之影海盗手套	
	1102944,	//神秘之影海盗披风	
	1004812
);

var need = 4033911;
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
var equip3 = player.getInventorySlot(1, 3); //获得装备栏 的第一个格子的道具 实例
var equip4 = player.getInventorySlot(1, 4); //获得装备栏 的第一个格子的道具 实例
var avail = "";
avail += "#b\t\t\t\t#v1152197#神秘归一#v1152198#\r\n#k";
avail += "#r1、神秘防具作为本服毕业防具，能够在基础属性再加上爆炸的属性\r\n";
avail += "2、提升属性需要3把相同的防具作为祭品进行合成\r\n";
avail += "3、#r注意：把要合成的4把防具放在前4个格子里面！\r\n#k";
avail += "#b注意：第一个防具是强化的主防具！之后的创世进行神秘归一才可创世归一   \r\n#k";
avail += "#b当前前四格的装备为:\r\n#r";
if(equip1 != null) {
    avail+="第一格.#v"+equip1.getDataId()+"#";
}
if(equip2 != null) {
    avail+="第二格.#v"+equip2.getDataId()+"#";

}
if(equip3 != null) {
    avail+="第三格.#v"+equip3.getDataId()+"#";

}
if(equip4 != null) {
    avail+="第四格.#v"+equip4.getDataId()+"#";

}
avail += "\r\n#L0##b我要合成神秘防具！#l#k\r\n#k";

let selection = npc.askMenu(avail, 3003757);
if(selection == 0) {


    if(equip1 == null) {
        npc.say("请在装备栏第一个位置放上装备！");

    }else if(equip2 == null) {
        npc.say("请在装备栏第二个位置放上装备！");

    }else if(equip3 == null) {
        npc.say("请在装备栏第三个位置放上装备！");

    }else if(equip4 == null) {
        npc.say("请在装备栏第四个位置放上装备！");

    } else {

        var itemid1 = equip1.getDataId();
        var itemid2 = equip2.getDataId();
        var itemid3 = equip3.getDataId();
        var itemid4 = equip4.getDataId();
        var flag = 0;

        for(var i = 0; i < ItemList.length; i++) {
            //同为神秘
            if(itemid1 == ItemList[i]) {
                flag ++;
            }
            if(itemid2 == ItemList[i]) {
                flag ++;
            }
            if(itemid3 == ItemList[i]) {
                flag ++;
            }
			if(itemid4 == ItemList[i]) {
                flag ++;
            }
        }
        if(itemid1!=itemid2 || itemid2 !=itemid3){
            npc.say("请放入4件同样的装备在装备栏的前四个格子");
        }else{
            if(flag == 4) {
                //进行强化
                let sel = npc.askYesNo("#e#r是否需要进行神秘归一呢?神秘归一需求材料#v"+need+"#30个 以及 金币100E. \r\n\r\n如果需要请点是");

                if(sel == 1) {
                    if(!equip1.getTitle().equals("神秘强化+25")) {
						npc.say("第一个格子的防具必须为强化满了的神秘防具。"+equip1.getTitle());
					}else if(player.getAmountOfItem(need)<30){
						npc.say("需要材料#v"+need+"#X30");
					}else if(!player.hasMesos(10000000000)){
						npc.say("需要金币100E");
					}else {
						player.loseMesos(10000000000);
                        player.loseItem(need,30);
                        var random = Math.floor(Math.random() * 100);
                        STR = equip1.getStr();
                        DEX = equip1.getDex();
                        INT = equip1.getInt();
                        LUK = equip1.getLuk();
                        PAD = equip1.getPad(); //物理伤害
                        MAD = equip1.getMad(); //魔法伤害

                        //替换掉属性
                        //力量
                        equip1.setStr(STR + 188);
                        //敏捷
                        equip1.setDex(DEX + 188);
                        //智力
                        equip1.setInt(INT + 188);
                        //运气
                        equip1.setLuk(LUK + 188);
                        //攻击
                        equip1.setPad(PAD + 188);
                        //魔法攻击
                        equip1.setMad(MAD + 188);
						equip1.setCraft(1);
                        equip1.setTitle("神秘归一");
						player.loseInvSlot(1,2);
						player.loseInvSlot(1,3);
						player.loseInvSlot(1,4);
                        player.updateItem(1, equip1);
                        npc.broadcastWeatherEffectNotice(0x6, "【神秘归一】 : 玩家 " + player.getName() + " 对神秘防具进行了神秘归一  ps:如果归一才是最终的归宿. 那么这把防具我也要归一!!!",15000);
						
						npc.broadcastGachaponMsgEx("【神秘归一】:  玩家 " + player.getName() + " 对神秘防具进行了神秘归一  ps:如果归一才是最终的归宿. 那么这把防具我也要归一!!!", equip1);
						
						npc.say("强化成功");
                    }
                }

            } else {
                npc.say("请确认你的前三个格子装备是否为神秘防具");

            }
        }


    }

}