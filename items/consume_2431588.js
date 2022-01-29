var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
 
        var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n- #e#r随身npc#k#n\r\n";
		selStr += "欢迎使用随身特权,本次给您带来快捷服务：#k\r\n";
		selStr += "#r#L0#"+z+" 领取巨人药水#l\r\n";
		selStr += "#r#L1#"+z+" 霸气公告喊话(当前地图)#l\r\n";
		if(getSCoin()>=20000 || player.isGm()){
			selStr += "#r#L2#"+z+" 霸气公告喊话(全服地图)#l\r\n";
		}
		 
		selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
		var selection= npc.askMenu(selStr);
    
        switch (selection) {
        	  case 0:
        	  	player.gainItem(2003517, 10);   
        		player.gainItem(2003516, 10); 
        	  break;
        	  case 1:
        	  	var text = npc.askText("您想说什么呢","",1,60);
        	  	map.blowWeatherEffectNotice("[顶级万元大佬] - " + player.getName() + " 说："+text, 106, 15000);
        	  break;
        	   case 2:
				var text = npc.askText("您想说什么呢","",1,60);
				npc.broadcastWeatherEffectNotice(0x6, "[顶级2万元大佬] - " + player.getName() + " 说："+text,15000);
        	  break;
        }
        



//累计
function getSCoin(){
	var sql = "select (case WHEN SUM(coin) is NULL THEN 0 ELSE SUM(coin) end )  scoin from zz_coin where account='"+getAccountName()+"' and coin >0 and type=0";
	var resultList = player.customSqlResult(sql);
	var scoin=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			scoin = result.get("scoin");
			break;
		}	
	}
	if(scoin==null){
		scoin =0;
	}	
	return scoin;
} 

function  getAccountName() {
	var sql = "select name from accounts where id =  "+player.getAccountId()+" ";
	var resultList = player.customSqlResult(sql);
	var accountName=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (accountName == null) {
        break;
    }
		var accountName = result.get("name");
	}
	return accountName;
}
 