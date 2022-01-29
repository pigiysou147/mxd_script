
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符

var filter =Array(
	"1142574",
	"1142796"
);
	var itemid = getDataId();
	if(player.canGainItem(itemid, 1)){
			player.loseItem(2431977,1);
			npc.broadcastPlayerNotice(0x13,"玩家:" + player.getName() + "从 『冒险岛M勋章箱』 获得" + player.makeItemWithId(itemid).getName() + ",大家恭喜他。");
				
			player.gainItem(itemid, 1);	
			npc.say("你获得了 #r#t" + itemid + "##k " + 1 + "个。");
	}else{
		npc.say("背包空间不足");
	}
	
   

		
 

function getDataId(){
	var itemid = "";
	var name="";

	var sql = " select itemid,`name`  from wz_itemdata a where a.itemid like '114%' order by rand() limit 1 ";
	var resultList = player.customSqlResult(sql);
 
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		itemid = result.get("itemid");
	}
	for(var i = 0;i<filter.length;i++){
		if(filter[i]==itemid){
			itemid = "1142649";
		}
	}
		return itemid;
}

 