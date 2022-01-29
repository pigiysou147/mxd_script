






var sql="select id,name,level,ap from characters where accountid=? and name!=?";
var playerList = player.customSqlResult(sql,player.getAccountId(),player.getName());
var txt="\r\n 请选择要升级的角色:\r\n";
for(var i=0;i<playerList.size();i++){
	txt+="#L"+i+"##r角色名:"+playerList.get(i).get("name")+" #k #b等级:"+playerList.get(i).get("level")+"#l #k\r\n";
}
let selection = npc.askMenuS(txt);
let sel= npc.askYesNoS("你选择的角色名为:#r"+playerList.get(selection).get("name")+"#k\r\n#b是否要把此角色提升到200级（4转职业需要手动上号哦）");
if(sel==1){
	if(playerList.get(selection).get("level")>=200){
		npc.say("该角色已经200级了，请不要操作该角色");
	}else{
		sql ="update characters set level=200,ap=? where id =?";
		player.customSqlUpdate(sql,(200-playerList.get(selection).get("level"))*5,playerList.get(selection).get("id"));
		player.loseItem(npc.getItemId(),1);
		npc.say("提升成功,请小退查看该角色是否升级成功~");
	}
	
}