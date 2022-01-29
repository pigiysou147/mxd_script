var eff1 = "#fUI/UIWindow/ToolTip/Equip/Star/Star2#";//#fMap/MapHelper.img/weather/starPlanet3/0#
var eff2 = "#fMap/MapHelper.img/weather/witch/3#";
var ap = 0;
var wk = 0;
var toDrop;
while(true){
	//可以使用的装备
	var equips = [1003976,
		1102623,
		1082556,
		1072870,
		1113073,
		1132244,
		1032221,
		1122265,
		1012478,
		1022277,
		1162025,
		1152170];

	var starArray = Array(
		//属性 攻击 成功几率 不变几率 材料
		//# 0 - 1 星
		Array(3,0,100,0,Array(
			Array(4001839,50)//星星
		)), 
		//# 1 - 2 星
		Array(3,0,95,5,Array(
			Array(4001839,100)//星星
		)), 
		//# 2 - 3 星
		Array(3,0,90,10,Array(
			Array(4001839,150)//星星
		)), 
		//# 3 - 4 星
		Array(3,0,85,15,Array(
			Array(4001839,200)//星星
		)),
		//# 4 - 5 星
		Array(3,0,80,20,Array(
			Array(4001839,250)//星星
		)),
		//# 5 - 6 星
		Array(5,1,75,20,Array(
			Array(4001839,300)//星星
		)),
		//# 6 - 7 星
		Array(5,1,75,20,Array(
			Array(4001839,350)//星星
		)),
		//# 7 - 8 星
		Array(5,1,70,20,Array(
			Array(4001839,400)//星星
		)),
		//# 8 - 9 星
		Array(5,1,70,20,Array(
			Array(4001839,450)//星星
		)),
		//# 9 - 10 星
		Array(5,1,60,30,Array(
			Array(4001839,500)//星星
		)),
		//# 10 - 11 星
		Array(8,2,60,40,Array(
			Array(4001839,600)//星星
		)),
		//# 11 - 12 星
		Array(8,2,55,30,Array(
			Array(4001839,700)//星星
		)),
		//# 12 - 13 星
		Array(8,2,55,30,Array(
			Array(4001839,800)//星星
		)),
		//# 13 - 14 星
		Array(8,2,50,35,Array(
			Array(4001839,900)//星星
		)),
		//# 14 - 15 星
		Array(8,2,50,35,Array(
			Array(4001839,1000)//星星
		)),
		//# 15 - 16 星
		Array(10,5,40,60,Array(
			Array(4001839,1100)//星星
		)),
		//# 16 - 17 星
		Array(10,5,35,45,Array(
			Array(4001839,1200)//星星
		)),
		//# 17 - 18 星
		Array(10,5,35,45,Array(
			Array(4001839,1300)//星星
		)),
		//# 18 - 19 星
		Array(10,5,30,50,Array(
			Array(4001839,1400)//星星
		)),
		//# 19 - 20 星
		Array(10,5,30,50,Array(
			Array(4001839,1500)//星星
		)),
		//# 20 - 21 星
		Array(15,15,9,91,Array(
		    Array(4031997,30),//四叶草幸运币
			Array(4001839,11000)//星星
		)),
		//# 21 - 22 星
		Array(20,20,8,92,Array(
			Array(4031997,35),//四叶草幸运币
			Array(4001839,12000)//星星
		)),
		//# 22 - 23 星
		Array(25,25,7,93,Array(
			Array(4031997,40),//四叶草幸运币
			Array(4001839,13000)//星星
		)),
		//# 23 - 24 星
		Array(30,30,6,94,Array(
			Array(4031997,45),//四叶草幸运币
			Array(4001839,14000)//星星
		)),
		//# 24 - 25 星
		Array(35,35,5,95,Array(
			Array(4031997,50),//四叶草幸运币
			Array(4001839,15000)//星星
		))  
	);

	
	

	var str = "\t\t\t白嫖装备上星"
	str += "\r\n#fs13##e"+eff2+"#k支持装备:白嫖系列#b"
	npc.sayNext(str,9000281);
		toDrop = player.getInventorySlot(1, 1);
		if(toDrop == null){
			npc.say("#d请将装备放到第一格",9000281);
		}else if(equips.indexOf(toDrop.getDataId()) == -1){
			npc.say("#d该装备无法使用此功能,请确认！",9000281);
		}else if(toDrop.getCHUC() >= 25){
			npc.say("#d该装备已经满星了！",9000281);
		}else{
			var nowArray = starArray[toDrop.getCHUC()];
			var lastArray = null;
			if(toDrop.getCHUC() > 0) lastArray = starArray[toDrop.getCHUC()-1];
			
			str = "#d请确认升星信息：\r\n#b当前装备:#r#v"+toDrop.getDataId()+"##z"+toDrop.getDataId()+"#"
			str += "\r\n#b"+format("当前星级： #r"+toDrop.getCHUC()+" 级",15)
			str += "#b目标星级： #r"+(toDrop.getCHUC()+1)+" 级"
			
			str += "\r\n#b"+format("成功几率： #r"+nowArray[2]+" %",16)
			str += "#b"+format("失败几率： #r"+((nowArray[3]) > 0 ? (nowArray[3]) : 0)+" %",16)
			
			
			str += "#b下降几率： #r"+((100-nowArray[2]-nowArray[3]) > 0 ? (100-nowArray[2]-nowArray[3]) : 0)+" %\r\n"
			if(nowArray[0] != 0) str += "#b"+format("升星属性： #r"+nowArray[0]+" 点",15);
			if(nowArray[1] != 0) str += "#b"+format("升星攻击： #r"+nowArray[1]+" 点",15);
			str += "#b损坏几率：#r 0 %\r\n";
			if(lastArray != null){
				//if(lastArray[0] != 0) str += "#b"+format("\r\n失败下降属性： #r"+lastArray[0]+" 点",15);
				//if(lastArray[1] != 0) str += "#b"+format("             失败下降攻击： #r"+lastArray[1]+" 点",15);
			}
			str += "\r\n#b消耗材料：  "
			var PD = true;
			for(var i = 0;i<nowArray[4].length;i++){
				if(player.getAmountOfItem(nowArray[4][i][0]) < nowArray[4][i][1]){
					str += "\r\n          #d#v"+nowArray[4][i][0]+"##z"+nowArray[4][i][0]+"##b "+nowArray[4][i][1]+" / "+player.getAmountOfItem(nowArray[4][i][0])+"#r <不满足>";
					PD = false;
				}else{
					str += "\r\n          #d#v"+nowArray[4][i][0]+"##z"+nowArray[4][i][0]+"##b "+nowArray[4][i][1]+" / "+player.getAmountOfItem(nowArray[4][i][0])+"#g <已满足>";
				}
			}
			npc.sayNext(str,9000281);
				if(PD){
					for(var i = 0;i<nowArray[4].length;i++){
						player.loseItem(nowArray[4][i][0],nowArray[4][i][1])
					}
					var ran = Math.random() * 100;
					
					var upddd = nowArray[2];
					var failddd = nowArray[3];
					
					
					
					if(ran <= upddd){
						//成功
						ap = nowArray[0];
						wk = nowArray[1];
						makeEquip(true);
						npc.say("恭喜你升星成功",9000281);
					}else if(ran <= upddd + failddd){
						//失败
						npc.say("很遗憾，升星失败",9000281);
					}else{
						//下降
						
						
						ap = lastArray[0];
						wk = lastArray[1];
						makeEquip(false);
						npc.say("真糟糕，升星失败，并且装备星级下降",9000281);
						
					}
				}else{
					npc.say("#d你的材料不够哦",9000281);
				}
			
		}
	
}

function format(val,lenA) {
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		var a = val.charAt(i);
		if (a.match("/[^\x00-\xff]/ig") != null) {
			len += 2;
		}
		else {
			len += 1;
		}
	}
	if(lenA - len>0){
		for (var j = lenA - len; j > 0; j--) {
			val += " ";
		}
	}
	return val;
}


function makeEquip(type){
		//type =true 提升 false失败
		//var bmjobs = [3001,3101,3120,3121,3122];
		var bmjobs = [];
		toDrop.setStr(type?toDrop.getStr() + ap : toDrop.getStr() - ap); //装备力量
		toDrop.setDex(type?toDrop.getDex() + ap : toDrop.getDex() - ap); //装备敏捷
		toDrop.setInt(type?toDrop.getInt() + ap : toDrop.getInt() - ap); //装备智力
		toDrop.setLuk(type?toDrop.getLuk() + ap : toDrop.getLuk() - ap); //装备运气
		toDrop.setMad(type?toDrop.getMad() + wk : toDrop.getMad() - wk);
		toDrop.setPad(type?toDrop.getPad() + wk : toDrop.getPad() - wk);
		
		toDrop.setCHUC(type?toDrop.getCHUC() + 1 : toDrop.getCHUC() - 1); 
		toDrop.setAttribute(1);
		player.updateItem(1, toDrop);
}