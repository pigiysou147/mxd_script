





var txt ="请选择你要删除的角色。（#r该操作无法撤回，请谨慎操作#k）\r\n";

var playerlist = player.customSqlResult("select id,name,level from characters where accountid =?",player.getAccountId());
for(var i=0;i<playerlist.size();i++){
	if(playerlist.get(i).get("id")!=player.getId()){
		txt+="#L"+i+"#角色名:#r"+playerlist.get(i).get("name")+"#k  等级:  #b"+playerlist.get(i).get("level")+"#k#l\r\n";
	}
	
}
let selection =npc.askMenuS(txt);
let sel =npc.askYesNoS("你要删除的角色名字为:#r"+playerlist.get(selection).get("name")+"  等级为："+playerlist.get(selection).get("level")+".\r\n #b是否要删除该角色，删除操作不可撤回哦");
if(sel==1){
	//删除角色
	if(playerlist.get(selection).get("level")>250){
		npc.say("大于250级的角色无法删除哦");
	}else{
		player.customSqlUpdate("delete from characters where id = ?",playerlist.get(selection).get("id"));
		player.loseItem(npc.getItemId(),1);
		npc.say("删除成功");
	}
	
}