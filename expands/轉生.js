/*  
 * 轉生 幾裡
 */
var level = 275;//轉生等級
var addAp = 500;//多給的AP


var subjobData = new Array(
	Array("古蹟獵人", 301, 3),
	Array("隱月", 2005, 0),
	Array("亞克", 15001, 0),
	Array("惡魔", 3001, 0),
	Array("傑諾", 3002, 0),
	Array("劍豪", 4001, 0),
	Array("凱薩", 6000, 0),
	Array("冒險家", 0, 0),
	Array("陰陽師", 4002, 0),
	Array("米哈逸", 5000, 0),
	Array("暗影雙刀", 0, 1),
	Array("蒼龍俠客", 0, 10),
	Array("狂狼勇士", 2000, 0),
	Array("龍魔導士", 2001, 0),
	Array("精靈遊俠", 2002, 0),
	Array("幻影俠盜", 2003, 0),
	Array("夜光法師", 2004, 0),
	Array("魔鏈影士", 6002, 0),
	Array("凱內西斯", 14000, 0),
	Array("聖晶使徒", 15000, 0),
	Array("末日反抗軍", 3000, 0),
	Array("皇家騎士團", 1000, 0),
	Array("天使破壞者", 6001, 0)
);


//所需材料
var items = Array(
	Array(4036314,1)
)
//給的物品
var reward = Array(

)
 
var list = Array();
var selStr = ""
selStr +=  "#b#e當你的角色"+level+"級後可以在這裡轉生。\r\n轉生所需道具#v4036314#，功能道具內有賣。\r\n請選擇您要轉生的角色:\r\n";

var sql = "select name from characters where accounts_id = '" + player.getAccountId() + "' and level >= "+level+" and `name` != '" +player.getName()+"'";
var push = player.customSqlResult(sql);
var i = 0;
while(i < push.size()){
	selStr +="#L"+i+"# "+(i+1)+" . "+push.get(i).get("name")+" 轉生次數("+getEventValue("轉生"+push.get(i).get("name"),true)+")次#l  \r\n";
	list.push(push.get(i).get("name"));
	i++;
}
if(push.size() == 0){
	npc.say("#r當你的角色275級後可以在這裡轉生。\r\n您的帳號內暫無"+level+"級別的角色")
}else{
	let selection = npc.askMenu(selStr);
	
	
	selStr = "請選擇職業\r\n";
	for(var i = 0;i<subjobData.length;i++){
		selStr += "#L"+i+"#"+subjobData[i][0]+"#l\r\n"
	}
	let jobselect = npc.askMenu(selStr);
	
	var sss = "是否轉生<"+subjobData[jobselect][0]+">？所需材料:#r\r\n";
	for(let i = 0; i<items.length;i++){
		sss += "#v"+items[i][0]+"# x "+items[i][1]+" , "
	}
	if(1 == npc.askYesNo(sss)){
		for(let j = 0; j < items.length;j++){
			player.loseItem(items[j][0], items[j][1]);
		}
		
		for(let j = 0; j < reward.length;j++){
			player.gainItem(reward[j][0], reward[j][1]);
		}
		setEventValue("轉生"+list[selection],1);
		npc.broadcastPlayerNotice(15,"【轉生系統】 : 玩家 " +list[selection] + " 成功完成第"+getEventValue("轉生"+list[selection],true)+"轉生！ ");
		
		player.customSqlUpdate("UPDATE `characters` SET subJob = '"+subjobData[jobselect][2]+"',`job`= '"+subjobData[jobselect][1]+"' ,`level`= 10,`str` = 4,`dex` = 4,`int` = 4,`luk` = 4,`ap` = `ap` + "+addAp+" WHERE `name` = '"+list[selection]+"';")
		npc.say("轉生成功");
	}
}
//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1,flag){
	var charInfo = getCharInfo();
	if(flag){
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" "; 
	}else{
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}
	var resultList = player.customSqlResult(sql);
	var count=0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		count = result.get("numbe");
		if(count ==null){
			count = 0;
		}
	}
	return parseInt(count);
}

function setEventValue(event1,value1){
	var charInfo = getCharInfo();
	var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values("+charInfo.accounts_id+","+charInfo.world+",'"+event1+"',"+value1+",now())";
	player.customSqlInsert(sql);
}

function getCharInfo(){
	var sql = "select accounts_id,world from characters where id = "+player.getId()+"";
	var resultList = player.customSqlResult(sql);
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}