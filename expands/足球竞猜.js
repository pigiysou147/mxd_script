var info =[
	"主队赢",
	"客队赢",
	"平局",
	"小球",
	"大球"
]
var teamInfo=getTeamInfo();
var txt ="\r\n\t\t#r#e#v2432810#欢迎来到欧洲杯竞猜中心#v2432810#\r\n";

txt+="对战信息: \r\n";
if(player.isGm()){
	txt+="\t#L6666#新增对局#l\r\n\r\n";

}
for(var i=0;i<teamInfo.size();i++){
	txt+="#r#e#L"+i+"#主队: "+teamInfo.get(i).get("zhu")+"  #b客队 :" +teamInfo.get(i).get("ke")+" #n点击进行竞猜#k#l\r\n";

}

let selection = npc.askMenu(txt);
if(selection==6666){
	//新增对局
	let zhu = npc.askText("请输入主队","",1,10);
	let ke =npc.askText("请输入客队","",1,10);
	let qiu =npc.askNumber("大小球",0,1,100);
	addTeam(zhu,ke,qiu);

	npc.say("添加成功");
}else{
	txt="\r\n\t\t\t#r#e#v2432810##v2432810#我要竞猜";
	txt+="\t#v2432810##v2432810#:#k\r\n\r\n";
	txt+="\t<#r当前场次  大于#b"+teamInfo.get(selection).get("qiu")+" #r球，则为大球>\r\n";

	txt+="";
	txt+="#L0#"+info[0]+"赔率:1:"+getFloat(teamInfo.get(selection).get("zhu_pl"))+"#l  ";
	txt+="#L1#"+info[1]+"赔率:1:"+getFloat(teamInfo.get(selection).get("ke_pl"))+"#l\r\n\r\n";
	txt+="#L2#"+info[2]+"赔率:1:"+getFloat(teamInfo.get(selection).get("ke_pl"))+"#l\r\n\r\n";
	txt+="#L3#"+info[3]+"赔率:1:"+getFloat(teamInfo.get(selection).get("ke_pl"))+"#l     ";
	txt+="#L4#"+info[4]+"赔率:1:"+getFloat(teamInfo.get(selection).get("ke_pl"))+"#l\r\n\r\n";
	txt+="#L5#查看我的下注记录#l";
	if(player.isGm()){
		txt+="#L6#更改比赛结果#l\r\n";
		txt+="#L7#删除对局#l\t";
		txt+="#L8#停止下注#l\r\n";
	}
	let sel = npc.askMenu(txt);

	if(sel==8){
		let ye = npc.askYesNo("是否要停止下注？？");
		if(ye==1){
			if(teamInfo.get(selection).get("id")>1){
				npc.say("该场比赛已经开奖，不可以再更改状态");
			}else{
				updateTeam(teamInfo.get(selection).get("id"),0,0,1);
			
				npc.say("操作成功");
			}
			
		}
	

	}else if(sel==7){
		let ye = npc.askYesNo("是否要删除？");
		if(ye==1){
			deleteTeam(teamInfo.get(selection).get("id"));
			npc.say("删除成功");
		}
	

	}else if(sel==6){
		//更改比赛结果以及状态
		let qiu =npc.askNumber("#r#e请输入总进球数>>>>>>>>>",0,0,10);
		let re=npc.askNumber("请输入胜负关系，0 为主队赢 1为客队应  2为平局",0,0,2);
		let sel=npc.askYesNo("#r#e总进球 : "+qiu+" 胜负关系 : "+info[re]+"\r\n\r\n 请确认");
		if(sel==1){
			updateTeam(teamInfo.get(selection).get("id"),qiu,re,2);
			npc.say("操作成功");
		}



	}else if(sel==5){
		txt="我的下注记录:\r\n\r\n"; 
		var myRecords=getMyReCords(teamInfo.get(selection).get("id"));
		for(var i =0;i<myRecords.size();i++){
			txt+="#L"+i+"##r"+myRecords.get(i).get("zhu")+"VS "+myRecords.get(i).get("ke");
			var re = myRecords.get(i).get("xiazhu");
			
			txt+="  下注内容 #b"+info[re]+"#k ";
			var state= myRecords.get(i).get("state");
			var tstate=myRecords.get(i).get("tstate");
			if(tstate==0){
				txt+="【未开奖】";
			}else {
				if(state==0){
					txt+="【未领奖】";
				}else if(state==1) {
					txt+="【已经领取】";
				}else{
					txt+="【已作废】";
				}

			}
			txt+="#l\r\n";
		}
		let teamSel=npc.askMenu(txt);
		var tstate=myRecords.get(teamSel).get("tstate");
		var state= myRecords.get(teamSel).get("state");
		var xiazhu=myRecords.get(teamSel).get("xiazhu");
		var result=myRecords.get(teamSel).get("result");
		var qiu_result=teamInfo.get(selection).get("qiu_result");
		var index=3;
		if(qiu_result>=teamInfo.get(selection).get("qiu")){
			index=4

		}
		if(tstate!=2){
			npc.say("该场比赛未开奖");
		}else{
			if(state==1){
				npc.say("已经领取过了");
			}else if(state==2){
				npc.say("该下注信息已作废");
			}else{
				//结果
				//选择大小球:或者胜负
				txt="\r\n该场比赛结果为:"+info[result]+" "+info[index]+"  你的下注信息为: "+info[xiazhu];
				txt+="\r\n当前状态为:#r#e";
				var pl=1;
				if(result==xiazhu ){
					if(result==0){
						//zhu_pl
						pl=(teamInfo.get(selection).get("zhu_pl"));
					}else if(result==1){
						//ke_pl
						pl=(teamInfo.get(selection).get("ke_pl"));
					}else{
						//ping_pl
						pl=(teamInfo.get(selection).get("ping_pl"));
					}
					//胜负逻辑中奖
					txt+="#v2432810#已中奖,已经领取成功 总计获得现金点 "+Math.round(myRecords.get(teamSel).get("number")*pl);
					//领取逻辑
					updateJcLog(1,myRecords.get(teamSel).get("id"));
					//给奖励
					addCash(-getFloat(myRecords.get(teamSel).get("number"))*pl); 
					
				}else if(index==xiazhu){
					if(index==3){
						//zhu_pl
						pl=(teamInfo.get(selection).get("da_result"));
					}else if(index==4){
						//ke_pl
						pl=(teamInfo.get(selection).get("xiao_pl"));
					}
					//胜负逻辑中奖
					txt+="#v2432810#已中奖,已经领取成功 总计获得现金点 "+Math.round(myRecords.get(teamSel).get("number")*pl);
					//领取逻辑
					updateJcLog(1,myRecords.get(teamSel).get("id"));
					//给奖励
					addCash(-Math.round(myRecords.get(teamSel).get("number")*pl)); 

				}else{
					//未中奖
					txt+="#v2432810#未中奖---已作废";
					//作废逻辑
					updateJcLog(2,myRecords.get(teamSel).get("id"));
				}
				npc.say(txt);

			}

		}



	}else{
		if(teamInfo.get(selection).get("state")==0){
			let number = npc.askNumber("#v2432810#请输入要下注的余额.",1,1,10000);

			let yes = npc.askYesNo("请确认你是否要下注余额："+number+"  结果为："+info[sel]);
			if(yes==1){
				if(getCash()<number){
					npc.say("现金点不足");
				}else{
					addJcLog(parseInt(teamInfo.get(selection).get("id")),sel,number);
					addCash(number);
					npc.say("下注成功");
				}
				
			}

		}else{
			npc.say("该场比赛已经不能下注竞猜啦");
		}

		
		
		
	}

}


function getFloat(number){
	return Math.floor(number*100)/100;
}

function getCash() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("cash");
		}
	} else {
		return 0;
	}

}
function addCash(number) {
	var sql = "update hypay set cash=cash-? where accountId=?";
	var result = player.customSqlUpdate(sql, number, player.getAccountId());

}

function getMyReCords(teamid){
	var sql = "SELECT a.id,a.xiazhu,a.team_id,a.number,a.state,s.zhu,s.ke,s.result,s.qiu_result,s.state tstate from jc_log as a,jc_team as s where a.team_id=s.id and a.char_id="+player.getId()+" and a.team_id="+teamid+" order by a.id desc";
	return player.customSqlResult(sql);
}

function addJcLog(teamId,xiazhu,number){
	var sql = "insert into jc_log (team_id,account_id,char_id,char_name,number,xiazhu,state) value(?,?,?,?,?,?,?)";
	
	player.customSqlInsert(sql,parseInt(teamId),player.getAccountId(),player.getId(),player.getName(),number,xiazhu,0);

}


function getTeamInfo(){
	var sql = "select * from jc_team order by id desc ";
	return player.customSqlResult(sql);
}

function updateJcLog(status,id){
	var sql = "update jc_log set state=? where id=? and char_id=?";
	player.customSqlUpdate(sql,status,id,player.getId());

}
function addTeam(zhu,ke,qiu){
	var sql = "insert into jc_team values(0,?,?,0,?,0,0)";
	player.customSqlUpdate(sql,zhu,ke,qiu);

}

function updateTeam(teamid,qiu,re){
	var sql = "update jc_team set qiu_result=?,result=?,state=1 where id=?";
	
	player.customSqlUpdate(sql,qiu,re,teamid);

}
function deleteTeam(teamid){
	var sql = "delete from jc_team where id=?";
	player.customSqlUpdate(sql,teamid);

}