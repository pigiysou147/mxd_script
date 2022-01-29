




var myComde=getMyCode();
var codeInfo;

var txt="#b#e邀请返利中心\r\n";
txt+="这里是推广返利中心，你在这里可以生成你的推广码\r\n\r\n";
txt+="每一个你推广的用户。你都可以获得价值10%的余额累计返利。\r\n\r\n";
txt+="心动不如行动，如果你还没有自己的推广码的话，请及时填入哦~。#k#k#r\r\n\r\n";

if(myComde==0){

	txt+="#L0#请登记你的推广码;#l\r\n";
}else{
	txt+="你的推广码:"+myComde+"\r\n";
	if(codeInfo.get("promote_id")==0){
		txt+="#L2#请填写推荐你的玩家的推广码;\r\n";	
	}else{
		var uperinfo=player.customSqlResult("select * from qqmxd_register where uid =?",codeInfo.get("promote_id")).get(0);
		
		txt+="你的邀请人邀请码为："+uperinfo.get("promote_code")+"\r\n";
	}
	
}
//txt+="#L3#当月推广总排名;#l\r\n";

txt+="#L1#请查看自己的推广总额以及返利记录;\r\n";
let selection = npc.askMenu(txt);

if(selection==0){
	let code =npc.askText("请输入6位数推广码","",1,6);
	if(code.length==6){
		let yes = npc.askYesNo("确定使用"+code+"作为你的邀请码吗？");
		if(yes==1){
			if(player.customSqlResult("select * from qqmxd_register where promote_code =?",code).size()>0){
				npc.say("这个邀请码已经存在了");
			}else{
				
				addMyCodeRecord(code);
				npc.say("填写成功");
			}
		}
	}else{
		npc.say("请使用6位数的推广码");
	}
	
}else if(selection==2){
	let code =npc.askText("请输入6位数推广码","",1,6);
	let invResult=player.customSqlResult("select * from qqmxd_register where promote_code=?",code);
	if(invResult.size()>0){
		let accountId=invResult.get(0).get("accid");
		let id=invResult.get(0).get("uid");
		if(player.getAccountId()==id){
			npc.say("不能绑定自己。");
		}else{
			player.customSqlUpdate("update qqmxd_register set promote_id=? where accid=?",id,player.getAccountId());
			npc.say("绑定成功");
		}
		
	}else{
		npc.say("该邀请码不存在。");
	}
}else if(selection==1){
	var txt="#r#e以下是返利总记录:\r\n\r\n";
	var resultList=player.customSqlResult("select * from pay_fl_log,hypay where pay_fl_log.uperid=? and lowerid=hypay.accountid order by time desc",player.getAccountId());
	if(resultList.size()>0){
		for(var i=0;i<resultList.size();i++){
			txt+="充值玩家:"+resultList.get(i).get("name")+"\r\n获得返利余额"+resultList.get(i).get("pay")+" \r\n";
			if(resultList.get(i).get("time")!=null)
			txt+="时间:"+resultList.get(i).get("time")+"\r\n";
		}
	}else{
		txt+="暂无记录";
	}
	npc.say(txt);
	
}else if(selection==3){
	var date =new Date();
	var 月 = date.getMonth() + 1;
	var 日 = date.getDate();
	var 时 = date.getHours();
	var 分 = date.getMinutes();
	var 秒 = date.getSeconds();

	var benyue="";
	if(月<10){
		 benyue="2020-0"+月;
	}else{
		benyue="2020-"+月;
	}
	var xiayue="2020-"+(月+1);
	var txt="\t\t\t\t当月排行\r\n";
	//财富排行
	var sql  ="SELECT *,sum(pay) total from pay_fl_log as fanli ,qqmxd_register as ac   where fanli.time>'"+benyue+"' and fanli.time <'"+xiayue+"' and fanli.uperid = ac.accid GROUP BY fanli.uperid order by total desc";
	
	
	
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 当月返利总排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e推广码#n\t\t\t#e返利总余额#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("promote_code");
		for(var j = 18 - result.get("promote_code").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + parseInt(result.get("total"));
		text += "\r\n";
	}
	npc.say(text);
	txt+="";
}

function getMyCode(){
	var sql ="select * from qqmxd_register where accid =?";
	var result =player.customSqlResult(sql,player.getAccountId());
	if(result.size()>0){
		codeInfo=result.get(0);
		return result.get(0).get("promote_code");
	}else{
		return 0;
	}
}

function addMyCodeRecord(code){
	var sql ="insert into qqmxd_register values(?,?,?,?,?,?,?,?,?,?,?,?,now())";
	var accountInfo=player.customSqlResult("select name from accounts where id = "+player.getAccountId()).get(0)
	player.customSqlInsert(sql,0,player.getAccountId(),player.getAccountId(),accountInfo.get("name"),0,"0.0.0.0","00-00-00-00","","",code,0,0);
}