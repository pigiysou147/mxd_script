/*
首饰屬性提升範本
大宝贝
QQ : 423283141
*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var ItemList = Array(
	1182158,
	1122430,
	1113306,
	1032316,
	1012632,
	1122296,
	1113302,
	1114303,
	1113211,
	1022278,
	1132308,
	1182285
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
var avail = "";
avail += "#b\t\t\t\t#v1122430#创世归一#v1032316#\r\n#k";
avail += "#r1、创世首饰作为本服毕业首饰，能够在基础属性再加上爆炸的属性\r\n";
avail += "2、创世首饰归一需要1件相同的首饰作为祭品合成\r\n";
avail += "3、#r注意：把要合成的2把首饰放在前2个格子里面！\r\n#k";
avail +="允许创世合成的道具有:";
for(var i=0;i<ItemList.length;i++){
	avail +="#v"+ItemList[i]+"#";
}
avail += "#b注意：第一个首饰是强化的主首饰！之后的创世进行创世归一才可创世归一   \r\n#k";
avail += "#b当前前2格的装备为:\r\n#r";
if(equip1 != null) {
    avail+="第一格.#v"+equip1.getDataId()+"#";
}
if(equip2 != null) {
    avail+="第二格.#v"+equip2.getDataId()+"#";

}
avail += "\r\n#L0##b我要合成创世首饰！#l#k\r\n#k";

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

        for(var i = 0; i < ItemList.length; i++) {
            //同为创世
            if(itemid1 == ItemList[i]) {
                flag ++;
            }
            if(itemid2 == ItemList[i]) {
                flag ++;
            }
        }
        if(itemid1!=itemid2 ){
            npc.say("请放入2件同样的装备在装备栏的前2个格子");
        }else{
            if(flag == 2) {
                //进行强化
				var t="#e#r是否需要进行创世归一呢?创世归一需求材料";
					t+="\r\nPS:请注意，由于材料需求过多，所以请把#v4000000##v4000016##v4000835##v4000836#放在远程仓库当中。\r\n";
					
                
				var flag=1;
				t+="\r\n#v4023025# X 200";
				if(!player.hasItem(4023025,200)){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				t+=" #v4023026# X 100";
				if(!player.hasItem(4023026,100)){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				t+="\r\n";
				t+="#v4033911# X 500";
				if(!player.hasItem(4033911,500)){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				t+=" #v4000000# X180000 ";
				
				if(getEventCount(4000000)<180000){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				t+="\r\n";
				t+="#v4000016# X180000 ";
				if(getEventCount(4000016)<180000){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				
				
				t+="\r\n";
				t+="#v4000835# X 180000 ";
				if(getEventCount(4000835)<180000){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				t+="\r\n";
				t+="#v4000836# X 180000";
				if(getEventCount(4000836)<180000){
					flag=0;
					t+="(#g不足#k)";
				}else{
					t+="(#r已满足#k)";
				}
				t+="\r\n\r\n如果需要请点是";
				let sel = npc.askYesNo(t);
	
                if(sel == 1) {
                    if(!equip1.getTitle().equals("黑暗创世+30")) {
						npc.say("第一个格子的首饰必须为强化满了的创世首饰。"+equip1.getTitle());
					}else if(flag==0){
						npc.say("材料不足，需要:\r\n#v4023025# X 200 #v4023026# X 100 \r\n#v4033911# X 500 #v4000000# X180000 \r\n#v4000016# X180000  \r\n#v4000835# X 180000 #v4000836# X 180000");
					}else {
                        player.loseItem(4023025,200);
                        player.loseItem(4023026,100);
                        player.loseItem(4033911,500);
						
                        setEventCount('4000000',-180000);
                        setEventCount('4000016',-180000);
                        setEventCount('4000835',-180000);
                        setEventCount('4000836',-180000);
						
                        var random = Math.floor(Math.random() * 100);
                        STR = equip1.getStr();
                        DEX = equip1.getDex();
                        INT = equip1.getInt();
                        LUK = equip1.getLuk();
                        PAD = equip1.getPad(); //物理伤害
                        MAD = equip1.getMad(); //魔法伤害

                        //替换掉属性
                        //力量
                        //equip1.setStr(STR + 188);
                        //敏捷
                        //equip1.setDex(DEX + 188);
                        //智力
                        //equip1.setInt(INT + 188);
                        //运气
                        //equip1.setLuk(LUK + 188);
                        //攻击
                        equip1.setPad(PAD + 388);
                        //魔法攻击
                        equip1.setMad(MAD + 388);
						equip1.setDamR(equip1.getDamR()+38);
						equip1.setCraft(1);
                        equip1.setTitle("创世归一");
						player.loseInvSlot(1,2);
                        player.updateItem(1, equip1);
                        npc.broadcastWeatherEffectNotice(0x6, "【创世归一】  玩家 " + player.getName() + " 对创世首饰进行了创世归一  ps:如果归一才是最终的归宿. 那么这把首饰我也要归一!!!",15000);
						
						npc.broadcastGachaponMsgEx("【创世归一】:  玩家 " + player.getName() + " 对创世首饰进行了创世归一  ps:如果归一才是最终的归宿. 那么这把首饰我也要归一!!!", equip1);
						
						npc.say("强化成功");
                    }
                }

            } else {
                npc.say("请确认你的前三个格子装备是否为创世首饰");

            }
        }


    }

}

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, value) {

	var sql = "update accounts_event set value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql,  value, player.getAccountId(), eventName);

}