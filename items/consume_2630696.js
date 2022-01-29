
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

if(1==1){
//if(1==1){
	var text ="\t\t\t\t"+vvv4+"#r活动福利专区#k"+vvv4+"\r\n\r\n";

	//text += "#e#b#L108#[展示]#r五一充值排行榜(4月30日-5月7日0点截止)#k#l\r\n\r\n";
	text += "#e#b#L112#[520礼包]#r520礼包（账号限时限购）#l\r\n\r\n";
	text += "#e#b#L108#[520]#r520消费(5月20日-5月22日0点截止)#k#l\r\n\r\n";
	//text += "#e#b#L111#[快乐六一]#r六一礼包（6月1日-6月2日0点截止）#l\r\n\r\n";
	


	let selection = npc.askMenuS(text);

	if(selection ==108){
		
		player.runScript("520消费累计");
	}else if(selection ==109){
		
		player.runScript("充值兑换");
	}else if(selection ==119){
		
		player.runScript("周末礼包");
	}else if(selection==112){
		player.runScript("520礼包");
	}else if(selection==111){
		player.runScript("61礼包");
	}
					
	}else{
		npc.say("管理员正在调整当中");
	}
