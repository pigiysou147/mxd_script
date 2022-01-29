var vipLevel = new Array( 	
100,
500, 
1000, 
2000, 
3000, 
5000, 
8000, 
10000, 
15000,
20000,
30000,
40000,
50000,
90000,
130000,
190000,
250000,
310000
);
var txtArr=[
'［银河自选副手箱］',
'［FFN自选武器箱x1］ ',
'［小暴君自选防具x3］',
'［高级贝勒德套］ ',
'［独眼巨人之眼+X卷自选X10',
'［真红戒指，真红肩膀］ ',
'［大蜡笔X1 ，2000蜡笔抽奖卷］',
'［最高级贝勒德套装+自选特米武器］',
'［任选椅子X1+大蜡笔X3］。',
'［神秘之影自选武器+最高逼格椅子］+BOSS扫荡入门进阶级',
'［700全属性不含攻击时装透明眼饰］',
'［700全属性含攻击力时装透明脸饰］',
' [888全属性+BOSS伤害88%时装耳环］+专属挂机地图定制资格 +可批准好友申请数量*5 ',
' [333全属性含攻击力自选时装箱子］X2 +BOSS扫荡困难级',
' [333全属性含攻击力自选时装箱子］X2  +可批准好友申请数量*8',
' [333全属性含攻击力自选时装箱子］X3  +可批准好友申请数量*12',
' [333全属性含攻击力自选时装箱子］X3   +可批准好友申请数量*15',
' [333全属性含攻击力自选时装箱子］X3 +可批准好友申请数量*20'
];
var spMap=[
	//角色名字  地图ID   BGM路径
	
	
   

];

var leiji =getHyPay();

var myLevel=0;
//识别会员等级操作
for(var i=0;i<vipLevel.length;i++){
	if(leiji>=vipLevel[i]){
		myLevel++;
	}else{
		break;
	}
}
var maxEnter=8;

if(myLevel==15){
	maxEnter=12;
}else if(myLevel==16){
	maxEnter=15;
}else if(myLevel==17){
	maxEnter=20;
}
var txt="#r#e\t\t\t#v1702395#会员特权中心#v1702395#\r\n";
txt+="欢迎光临，尊敬的会员用户你好，这里尊贵的会员专享的服务中心\r\n";
txt+="#b你当前的会员等级为"+getLevel(leiji)+"#r\r\n";
txt+="#b请选择你要进行的服务#r\r\n";
txt+="#L0#会员等级特权说明#l\t";
txt+="#L1#会员等级特权奖励#l\r\n\r\n";
txt+="#L2#等级专属挂机地图#l\t";
txt+="#L3#BOSS一键扫荡#l\r\n\r\n";
//会员等级奖励
let selection =npc.askMenu(txt);
if(selection==0){
	txt="\r\n\t\t\t\t\t#r#e会员等级说明\r\n\r\n";
	txt+="#b\t赞助0.35折 会员显示累计*0.35=实际赞助金额#r\r\n\r\n";
	var canSee=myLevel+3;
	if(canSee>=vipLevel.length){
		canSee=vipLevel.length;
	}
	
	for(var i=0;i<canSee;i++){
		txt+="\t#r等级 ：\t"+getLevel(vipLevel[i])+"\t#b累计余额 : "+vipLevel[i]+"#r\r\n\r\n";
		txt+=" #d 特权内容 ："+txtArr[i]+"\r\n\r\n";
	}
	txt+="";
	npc.say(txt);
}else if(selection==1){
	player.runScript("会员等级奖励");
}else if(selection==2){
	txt="\r\n\t\t\t\t\t#r#e会员特权挂机地图\r\n\r\n";
	for(var i=0;i<spMap.length;i++){
		txt+="#L"+i+"#进入玩家:  #b"+spMap[i][0]+" #r专属地图:#b#m"+spMap[i][1]+"##l#r\r\n\r\n";
	}
	let sp =npc.askMenu(txt);
	if(player.getName()==spMap[sp][0]){
		//特权玩家本人
		txt="#r#e\r\n\t\t\t\t\t#r#e专属地图\r\n\r\n";
		txt+="\t#bPS:请注意，你需要先进入市场的泡点，在进入会员泡点，才可以正常进入泡点哦#r\r\n\r\n";
		txt+="\t#L0#进入地图#l\r\n\r\n";
		txt+="\t#L1#查看申请列表#l\r\n\r\n";
		txt+="\t#L2#查看许可玩家#l\r\n\r\n";
		let ch = npc.askMenu(txt);
		if(ch==0){
			player.changeMap(spMap[sp][1]);
			if(spMap[sp][2]!=""){
				var event =npc.getEvent("gailou");
				event.getMap(spMap[sp][1]).changeBGM(spMap[sp][2]);
				player.dropMessage(1,"正在切换音乐，播放路径 :"+spMap[sp][2])
				//player.changeBGM(spMap[sp][2]);
			}
		}else if(ch==1){
			//查询列表
			var sql="select * from spmap where map_id="+spMap[sp][1]+" and owner_name='"+spMap[sp][0]+"' and state=0";
			var result=player.customSqlResult(sql);
			if(result.size()==0){
				npc.say("没有待审核的人员");
			}else{
				txt="#r#e\r\n\t\t\t\t\t#r#e申请列表\r\n\r\n";
				for(var i=0;i<result.size();i++){
					txt+="#L"+i+"#申请玩家: "+result.get(i).get("lower_name")+" #b状态:待审核#r#l\r\n";
				}
				let p=npc.askMenu(txt);
				let ye = npc.askYesNo("是否要通过玩家： "+result.get(p).get("lower_name")+" 的申请？");
				if(ye==1){
					if(player.customSqlResult("select * from spmap where map_id="+spMap[sp][1]+" and owner_name='"+spMap[sp][0]+"' and state=1").size()>maxEnter){
						npc.say("许可的最大人数已经到达上限。");
					}else{
						player.customSqlUpdate("update spmap set state=1 where map_id="+spMap[sp][1]+" and lower_name='"+result.get(p).get("lower_name")+"'");
						npc.say("审核成功");
					}
					
				}
			}
		}else if(ch==2){
			//查询已经存在的列表
			var sql="select * from spmap where map_id="+spMap[sp][1]+" and owner_name='"+spMap[sp][0]+"' and state=1";
			var result=player.customSqlResult(sql);
			if(result.size()==0){
				npc.say("没有已经通过审核的人员");
			}else{
				txt="#r#e\r\n\t\t\t\t\t#r#e许可列表\r\n\r\n";
				for(var i=0;i<result.size();i++){
					txt+="#L"+i+"#玩家: "+result.get(i).get("lower_name")+" #b状态:已获许可#r#l\r\n";
				}
				let p=npc.askMenu(txt);
				let ye = npc.askYesNo("是否要删除玩家： "+result.get(p).get("lower_name")+" ？");
				if(ye==1){
					player.customSqlUpdate("delete from spmap where map_id="+spMap[sp][1]+" and lower_name='"+result.get(p).get("lower_name")+"'");
					npc.say("删除成功");
				}
			}
		}
		
	}else{
		var sql1="select * from spmap where map_id="+spMap[sp][1]+" and lower_name='"+player.getName()+"' and state=1";
		var result1=player.customSqlResult(sql1);
		if(result1.size()>0){
			//可以进入
			player.changeMap(spMap[sp][1]);
		}else{
			let sel =npc.askYesNo("#r#e你并未在当前地图的许可名单里面，是否向所属玩家提交申请呢？");
			if(sel==1){
				var sql="select * from spmap where map_id="+spMap[sp][1]+" and lower_name='"+player.getName()+"'";
				var result=player.customSqlResult(sql);
				if(result.size()>0){
					npc.say("#r#e请耐心等待审核结果，或通过QQ方式联系对方尽快通过审核，不要重复提交~");
				}else{
					player.customSqlInsert("insert into spmap (id,map_id,owner_name,state,lower_name) values(0,?,?,?,?)",spMap[sp][1],spMap[sp][0],0,player.getName());
					npc.say("提交成功");
				}
				
			}
		}
		
		
	}
}else if(selection==3){
	
	var normalBoss=	Array(
		
		//入门级boss
		//boss名字  	 id 		pqlog	次数
		Array("闹钟", 8500002, "帕普拉图斯", 2),
		Array("品克缤", 8820001, "Pinkbeen", 1),
		Array("混沌品克缤", 8820210, "Pinkbeen_Chaos", 1),
		Array("森兰丸", 9421589, "Ranmaru_Crazy", 1),
		Array("浓姬", 9450066, "浓姬", 1),
		Array("希纳斯", 8850011, "Shinas", 1),
		Array("普通血腥女王", 8920100, "Bloody", 2),
		Array("进阶血腥女王", 8920000, "Bloody_CHAOS", 1),
		Array("普通皮埃尔", 8900100, "Pierre", 2),
		Array("进阶皮埃尔", 8900000, "Pierre_CHAOS", 1),
		Array("普通半半", 8910100, "Banban", 2),
		Array("进阶半半", 8910000, "Banban_CHAOS", 1),
		Array("普通贝伦", 8930100, "Bellum", 2),
		Array("进阶贝伦", 8930000, "Bellum_CHAOS", 1),
		//Array("贝勒德",123456, "Beidler", 2),
		Array("卡雄", 8880200, "Caoong", 1),
		Array("阿勒玛", 8641010, "阿勒玛", 3),
		Array("调和精灵", 8644011, "调和精灵", 3)
		
		
	)
	var hardBoss=Array(
		//进阶级boss
		//boss名字  	 id 		pqlog	次数
		Array("普通暴君", "暴君掉落", "Magnus", 1),
		Array("困难暴君", "暴君掉落", "Magnus_Hard", 1),
		Array("斯乌", "斯乌掉落", "Siwu", 1),
		Array("困难斯乌", "斯乌掉落", "Siwu_Chaos", 1),
		Array("桃乐丝", 9309207, "taoalesi", 1),
		Array("乌鲁斯", 8881000, "乌鲁斯", 1),
		Array("戴米安", "戴米安掉落", "Demian", 1)
		//,Array("觉醒希拉", 8880410, "JinHillah", 1)
		
	)
	txt="#r#e\r\n\t\t\tBOSS一键扫荡\r\n\r\n";
	txt+="#L0#入门级BOSS扫荡，需要#v3991021##v3990000##v3990009##l\r\n\r\n"
	txt+="#L1#进阶困难级BOSS扫荡，需要#v3991021##v3990000##v3990003##l\r\n\r\n"
	let se= npc.askMenu(txt);
	while(true){
	if(se==0){
		if(myLevel<10){
			npc.say("需要V10才可以进行入门级boss扫荡");
		}else{
			txt="#r#e请选择要进行扫荡的BOSS\r\n";
			for(var i=0;i<normalBoss.length;i++){
				txt+="#L"+i+"#BOSS名称 "+normalBoss[i][0]+" #b剩余次数 "+(normalBoss[i][3]-player.getPQLog(normalBoss[i][2]))+"#l#r\r\n";
			}
			let bossCh= npc.askMenu(txt);
			var dropList=player.customSqlResult("select * from zdata_drop where dropperid=?   and (itemid>2300000  or ( itemid>1700000 and itemid<1800000) or itemid=1061039)",normalBoss[bossCh][1]);
			txt="#r#e\r\n\t\tBOSS "+normalBoss[bossCh][0]+" 的掉落为:\r\n\r\n";
			for(var i=0;i<dropList.size();i++){
				txt+="#v"+dropList.get(i).get("itemid")+"#   #r";
			}
			let ye =npc.askYesNo(txt);
			if(ye==1){
				if(player.getFreeSlots(1)<10||player.getFreeSlots(2)<10||player.getFreeSlots(3)<10||player.getFreeSlots(4)<10||player.getFreeSlots(5)<10){
					npc.say("请保证每个栏位至少有10个格子~");
					break;
				}else if(normalBoss[bossCh][3]-player.getPQLog(normalBoss[bossCh][2])<=0  || player.getPQLog(normalBoss[bossCh][2])>=normalBoss[bossCh][3]){
					npc.say("该BOSS的次数已经达到上限~");
					break;
				}else{
					//掉落操作
					txt="#r#e\r\n\t\tBOSS "+normalBoss[bossCh][0]+" 的掉落为:\r\n\r\n";
					for(var i=0;i<dropList.size();i++){
						let chance = Math.floor(Math.random() * 10000);
						txt+="#v"+dropList.get(i).get("itemid")+"#   ";
						if(dropList.get(i).get("chance")>chance){
							txt+=" #r出了#r\r\n";
							player.gainItem(dropList.get(i).get("itemid"),1);
							
						}else{
							txt+=" #g没出#r\r\n";
						}
					}
					player.addPQLog(normalBoss[bossCh][2]);
					npc.say(txt);
				}
			}
				
		}
		
	}else if(se==1){
		
		if(myLevel<14){
			npc.say("需要V14才可以进行困难级boss扫荡");
		}else{
			txt="#r#e请选择要进行扫荡的BOSS\r\n";
			for(var i=0;i<hardBoss.length;i++){
				txt+="#L"+i+"#BOSS名称 "+hardBoss[i][0]+" #b剩余次数 "+(hardBoss[i][3]-player.getPQLog(hardBoss[i][2]))+"#l#r\r\n";
			}
			let bossCh= npc.askMenu(txt);
			if(hardBoss[bossCh][1]>0){
				
			
				var dropList=player.customSqlResult("select * from zdata_drop where dropperid=? and itemid>=2000000",hardBoss[bossCh][1]);
				txt="#r#e\r\n\t\tBOSS "+hardBoss[bossCh][0]+" 的掉落为:\r\n\r\n";
				for(var i=0;i<dropList.size();i++){
					txt+="#v"+dropList.get(i).get("itemid")+"#   #r";
				}
				let ye =npc.askYesNo(txt);
				if(ye==1){
					if(player.getFreeSlots(1)<10||player.getFreeSlots(2)<10||player.getFreeSlots(3)<10||player.getFreeSlots(4)<10||player.getFreeSlots(5)<10){
						npc.say("请保证每个栏位至少有10个格子~");
						break;
					}else if((hardBoss[bossCh][3]-player.getPQLog(hardBoss[bossCh][2]))<0 || player.getPQLog(hardBoss[bossCh][2])>=hardBoss[bossCh][3]){
						npc.say("该BOSS的次数已经达到上限~");
						break;
					}else{
						//掉落操作
						txt="#r#e\r\n\t\tBOSS "+hardBoss[bossCh][0]+" 的掉落为:\r\n\r\n";
						for(var i=0;i<dropList.size();i++){
							let chance = Math.floor(Math.random() * 10000);
							txt+="#v"+dropList.get(i).get("itemid")+"#   ";
							if(dropList.get(i).get("chance")>(chance*10)){
								txt+=" #r出了#r\r\n";
								player.gainItem(dropList.get(i).get("itemid"),1);
								
							}else{
								txt+=" #g没出#r\r\n";
							}
						}
						player.addPQLog(hardBoss[bossCh][2]);
						npc.say(txt);
					}
				}
			}else{
				if((hardBoss[bossCh][3]-player.getPQLog(hardBoss[bossCh][2]))<0 || player.getPQLog(hardBoss[bossCh][2])>=hardBoss[bossCh][3]){
					npc.say("该BOSS的次数已经达到上限~");
					break;
				}else{
					//独立掉落部分
					//npc.say(hardBoss[bossCh][3]+" "+player.getPQLog(hardBoss[bossCh][2]));
					player.addPQLog(hardBoss[bossCh][2]);
					player.runScript(hardBoss[bossCh][1]);

				}
				
				break;
			}
		}
		
	}
	}
}

function getLevel(number){
	var level=0;
	for(var i=0;i<vipLevel.length;i++){
		if(number>=vipLevel[i]){
			level++;
		}else{
			break;
		}
	}
	if(level>10 && level <20){
		return "#v3991021##v3990000##v"+(3990000+level-11)+"#";
	}else if(level ==10){
		return "#v3991021##v3990000##v3990009#";
	}else if(level ==20){
		return "#v3991021##v3990001##v3990009#";
	}else{
		return "#v3991021##v"+(3990000+level-1)+"#";
	}
}

function getHyPay() {

	var sql = "select leiji from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}