var epp = "#fEffect/SetItemInfoEff/33/9#";  //飘带
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";//hyuangguang
var ok = "#fUI/UIWindow.img/ToolTip/Equip/Star/Star#"; 
var ok1 = "#fUI/UIWindow.img/ToolTip/Equip/Star/Star2#"; 
var gg1 = "#fUI/TenthAnniversaryBoardGame.img/TenthBoardGameUI/Gage/leftGage#";  
var gg2 = "#fUI/TenthAnniversaryBoardGame.img/TenthBoardGameUI/Gage/middleGage#";  
var gg3 = "#fUI/TenthAnniversaryBoardGame.img/TenthBoardGameUI/Gage/rightGage#"; 
var wi9 = "#fUI/StarCityUI.img/Board_GameRank/user/shining#";  //紫色条
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var ok2 = "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
var p;
var eventid = 16711;//活動ID
var menpaiboss = false;
var mpid;
var a = 0;
var koudai=Array(
1162018,
1162035
);
var xinkoudai = Array(
		//等级 贡献度 物品ID 四维 攻击
1162039, //		
	 1162040, //
	 1162041, //
	 1162042, //			 
	 1162043, //       
	 1162044, //
	 1162045, 
	 1162046

);


	mpid = getMenpaiId();
    var selStr = "";
	selStr += "#fn黑体##fs20##d\t "+ok1+" "+ok+" 勋章升级 "+ ok +" "+ok1+"#k\r\n";
		selStr += "   " + wi9 + "\r\n\r\n#fs16#";
        selStr += "  初始口袋#i1162039#可随着你在虎啸九天门派贡献度的提升而不断升级；\r\n";
		selStr +="  最高可升级为#r7阶#k的七狱咒符,为可#g随机潜能#k的装备\r\n";
		selStr +="  点击#d确定#k，开始升级。\r\n"
		selStr +="\t\t #b#L2#升级门派口袋#k#l\r\n"
		selStr +="\t#r#L3#旧口袋转移潜能（完美转移）#k#l\r\n"
		let selection=npc.askMenu(selStr,getMenpaiNpc());
		

        switch (selection) {
        case 1:
            
            player.runScript("勋章升级"); //
            break;
        case 2:
            
            player.runScript("勋章升级"); //
            break;
		case 3:
			var item =player.getInventorySlot(1,1);
			var toDrop=player.getInventorySlot(1,2);
			if(item==null || toDrop==null){
				npc.say("请在第一和第二个格子放上需要的装备");
			}else{
				var flag=0;
				var txt="如果你之前有过成品口袋，花费30E金币 可以直接把旧的口袋的潜能继承到新的口袋当中\r\n";
				txt+="#b请把旧的口袋：";
				for(var i=0;i<koudai.length;i++){
					txt+="#v"+koudai[i]+"#";
					if(koudai[i]==item.getDataId()){
						flag=1;
					}
				}
				txt+="放在装备栏的第一个格子#k\r\n";
				txt+="#r\r\n";
				var text="";
				for(var i=0;i<xinkoudai.length;i++){
					text+="#v"+xinkoudai[i]+"#";
					txt+="#v"+xinkoudai[i]+"#";
					if(xinkoudai[i]==toDrop.getDataId()){
						flag=2;
					}
				}
				txt+="放在第二个格子哦#k~\r\n";
				if(item!=null){
					if(flag>=1){
						txt+="#r#L"+item.getDataId()+"#目前你装备栏的第一个格子为:#v"+item.getDataId()+"#可以进行潜能转移 #l";
						
						let kdid=npc.askMenu(txt);
						
						for(var i=0;i<xinkoudai.length;i++){
							//txt+="#v"+xinkoudai[i]+"#";
							if(xinkoudai[i]==toDrop.getDataId()){
								flag=2;
							}
						}
						
						
						if(flag!=2){
							npc.say("请把"+text+"放在装备栏的第二个格子哦");
						}else{
							let sel= npc.askYesNo("#r各项条件都符合，请问是否花费30E金币进行口袋的潜能转移呢？");
							if(sel==1){
								//转移
								if(player.hasMesos(3000000000)){
									player.loseInvSlot(1,1);
									player.loseMesos(3000000000);
									//设置潜能等级
									toDrop.setGrade(item.getGrade());
									//设置潜能
									toDrop.setOption( 1, item.getOption(1,false),false);
									toDrop.setOption( 2,item.getOption(2,false), false);
									toDrop.setOption( 3, item.getOption(3,false),false);
									toDrop.setOption( 1,item.getOption(1,true), true);
									toDrop.setOption( 2, item.getOption(2,true),true);
									toDrop.setOption( 3, item.getOption(3,true),true);
									player.updateItem(2,toDrop);
									npc.say("潜能移植成功");
								}else{
									npc.say("你的金币不足哦");
								}
								
								
								
								
							}
							
						}
						
					}else{
						txt+="#r你第一个装备栏的物品不为符合要求的口袋。这样你是无法进行口袋潜能转移的哦";
						npc.say(txt);
					}
					
				}else{
					txt+="#r你的装备栏第一个格子为空这样你是无法进行口袋潜能转移的哦";
					npc.say(txt);
				}
			}
			
			
			
			
			
			
			break;
		}
		
		
		
function getMenpaiId() { //得到角色门派的ID
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	return i;
}
function getMenpaiNpc() { //得到角色门派的NPC代码
	var i = 0;
	var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
	if(data.size() > 0) {
		i = data.get(0).get("mpid"); //得到家族id
	}
	if(i == 1) {
		return "2091133";
	} else if(i == 2) {
		return "2091134";
	} else {
		return i;
	}
}
