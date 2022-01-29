



var itemList=Array(

5062500,
5062024,
5062009,
4036518,
4000835,
4001839,
4000836,
4000016,
4000000,
2048752,
2048749,
4001156,
4001008,
4001816,
4001122,
4001120,
4001022
);

var txt="\r\n 你可以在这里保存一些物品,请选择你要保存的物品:\r\n\r\n";
var sql ="select * from accounts_event where accounts_id=? and event in (";
for(var i=0;i<itemList.length;i++){
	sql+="'"+itemList[i]+"'";
	if(i!=itemList.length-1){
		sql+=",";
	}
}
sql+=") order by event desc";
var allCounts = player.customSqlResult(sql, player.getAccountId());

for(var i=0;i<itemList.length;i++){
	var f=0;
	txt+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"#当前已存数量:#r";
	for(var j=0;j<allCounts.size();j++){
		if(parseInt(allCounts.get(j).get("event"))==itemList[i]){
			txt+=allCounts.get(j).get("value");
			f++;
			break;
		}
	}
	if(f==0){
		txt+=0;
	}
	
	txt+="#k#l\r\n";
}
let selection =npc.askMenuS(txt);
var itemid= itemList[selection];
let number = player.getAmountOfItem(itemid);
var total = getEventCount(itemid+"");
txt="你身上共有#r"+number+"#k个#v"+itemid+"#\r\n"+itemid;
txt+="仓库里面共有#r"+total+"#k个\r\n";
txt+="#L888#存储物品\r\n";
txt+="#L999#取出物品\r\n";

let sel =npc.askMenuS(txt);
if(sel==888){
	let count=npc.askNumber("请输入存入的数量",1,1,number);
	
	if(player.getAmountOfItem(itemid)<count){
		npc.say("物品数量不足~");
	}else if(count<32767 ){
		player.loseItem(itemid,count);
		getEventCount(itemid+"");
		setEventCount(itemid+"",0,count);
		var holdSql="insert into ycck values (0,?,?,?,?,?,?)";
		player.customSqlInsert(holdSql, player.getAccountId(), player.getId(),player.getName(), itemid,number+count, count );
		npc.say("存储成功");
	}else{
		npc.say("请输入32767以下的数字.");
	}
}else{
	let count=npc.askNumber("请输入取出的数量",1,1,total);
	
	if(getEventCount(itemid+"")<count){
		npc.say("仓库数量不足~");
	}else if(player.canGainItem(itemid,count) &&   count<32767){
		player.gainItem(itemid,count);
		setEventCount(itemid+"",0,-count);
		var holdSql="insert into ycck values (0,?,?,?,?,?,?)";
		player.customSqlInsert(holdSql, player.getAccountId(), player.getId(),player.getName(), itemid,number+count, count );
		
		npc.say("取出成功");
	}else{
		npc.say("请清理一下包裹~");
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

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event='"+eventName+"'";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId());

}
























