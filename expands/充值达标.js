
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var v1="#fEffect/ItemEff.img/1004532/effect/default/4#";
var v2=	"#fEffect/ItemEff.img/1004475/effect/jump/0#";
var v3=	"#fEffect/ItemEff.img/1004435/effect/alert/0#";
var v4=	"#fEffect/ItemEff.img/1004477/effect/prone/1#";
var v5=	"#fEffect/ItemEff.img/1004436/effect/default/3#";
var v6=	"#fEffect/ItemEff.img/1004437/effect/walk1/0#";


	var text ="\t\t\t\t\t#e#r充值达标领取\r\n\r\n";
	text+="#b当月充值累积达到500以上时，即可在下个月月初时领取奖励.\r\n胜者方达到要求可以领#v2614074#1E突破奖励\r\n败方达到要求可以领取#v2614069#5000W突破奖励\r\n\r\n";
	
	text+="#L1#领取11月达标奖励#l\r\n\r\n";
	let selection=npc.askMenu(text);
	
	
	if(selection==1){
		var leiji =getshiyuePay();
		text="\r\n#r#e你10月的充值量为:"+leiji;
		if(leiji>=500){
			text+="\r\n#L0#领取达标奖励#l";
			let sel =npc.askMenu(text);
			if(sel==0){
				if(getEventCount("11月达标奖励")==0){
					setEventCount("11月达标奖励",0,1);
					//领取奖励操作
					
					player.gainItem(2614074,1);
				}else{
					npc.say("请不要重复领取");
				}
			}	
		}else{
			text+="\r\n暂未达标";
			npc.say(text);
		}
	}



function getshiyuePay
(){
	var sql ="select sum(rmb) total from paylog where account=? and paytime>='2020-11'";
	var result =player.customSqlResult(sql,player.customSqlResult("select name from accounts where id="+player.getAccountId()).get(0).get("name"));
	if(result.size()>0){
		return result.get(0).get("total");
	}else{
		return 0;
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

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}