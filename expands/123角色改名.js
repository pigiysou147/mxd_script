/**
* 角色改名  QQ:739977676 
**/
let needItem = 4000000;//需要的道具
let characters = getCharacters();
npc.say("你是否要更改你其他角色的名稱(需要#v"+needItem+"#)？");

if(characters == null){
	npc.say("沒有查找到賬號信息，請聯系管理員");
}else{
	let str = "請選擇角色:\r\n"
	for(let i = 0; i<characters.size();i++){
		if(player.getName()!=characters.get(i).get("name"))
			str += "#L"+i+"# "+characters.get(i).get("name") + " #l\r\n"
	}
	let selected = npc.askMenu(str);
	let text = npc.askText("#d為"+characters.get(selected).get("name")+"改名,輸入新名字","",0,999);
	if(checkName(text)){
		if(player.hasItem(needItem,1)){
			player.loseItem(needItem);
			player.customSqlUpdate("UPDATE `characters` SET `name`= '"+text+"' WHERE `id`='" + characters.get(selected).get("id") + "'");
			npc.say("改名成功！");
		}else{
			npc.say("你沒有#v"+needItem+"#");
		}
	}else{
		npc.say("這個名字有人用了哦！");
	}
}


function checkName(text){
    var sql = "select id from characters where name='" + text + "';";
    var push = player.customSqlResult(sql);
	 if (push.size() > 0) {
        return false;
    }else{
		return true;
	}
}

function getCharacters(){
    var sql = "select id,name from characters where accounts_id='" + getAccountId() + "';";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        return push;
    }else{
		return null;
	}
}


function getAccountId() {
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
	var id = -1;
    if (push.size() > 0) {
        var result = push.get(0);
        id = result.get("id");
    }
    return id;
}