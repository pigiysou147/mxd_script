


var txt="\r\n#r#e查看我的返利记录 \r\n";
txt+="请输入开始时间：\r\n";
txt+="格式为：'2021-08-05' ";
let startTime =npc.askText(txt,"2021-08-05",1,10);
txt="#r#e请输入结束时间：\r\n";
txt+="格式为：'2021-08-05' ";
let endTime =npc.askText(txt,"2021-09-05",1,10);

var sql = "SELECT * from pay_fl_log_copy,hypay where time>? and time<? and uperid=? and lowerid=hypay.accountid ORDER BY time";
var resultList = player.customSqlResult(sql,startTime,endTime,player.getAccountId());
if(resultList.size()>0){
	var ttt="#r#e总返利为:"
	txt="\r\n#r#e返利记录如下:\r\n";
	txt+="时间\t\t\t\t\t     玩家姓名\t\t金额\r\n";
	var total=0;
	for(var i=0;i<resultList.size();i++){
		var result =resultList.get(i);
		total+=result.get("pay");
		txt+="#b"+result.get("time")+"   #r"+result.get("name");
		for(var j=0;j<15-result.get("name").length;j++){
			txt+=" ";
		}  
		txt+=result.get("pay");
		txt+="\r\n"; 
	}
	ttt+=total;
	npc.say(ttt+txt);

}else{
	npc.say("没有返利记录");
}
