/**
* 上星-新端腳本 幾里 315342975 
**/

//可以使用的裝備

let starArray = Array(
	//屬性 攻擊 成功幾率 不變幾率 材料
	//# 0 - 1 星
	Array(2,6,100,0,Array(
		Array(4001839,100)//星星
	)), 
	//# 1 - 2 星
	Array(2,6,95,5,Array(
		Array(4001839,200)//星星
	)), 
	//# 2 - 3 星
	Array(2,6,90,10,Array(
		Array(4001839,300)//星星
	)), 
	//# 3 - 4 星
	Array(2,6,85,15,Array(
		Array(4001839,400)//星星
	)),
	//# 4 - 5 星
	Array(2,6,80,20,Array(
		Array(4001839,500)//星星
	)),
	//# 5 - 6 星
	Array(3,8,75,20,Array(
		Array(4001839,600)//星星
	)),
	//# 6 - 7 星
	Array(3,8,75,20,Array(
		Array(4001839,700)//星星
	)),
	//# 7 - 8 星
	Array(3,8,70,20,Array(
		Array(4001839,800)//星星
	)),
	//# 8 - 9 星
	Array(3,8,70,20,Array(
		Array(4001839,900)//星星
	)),
	//# 9 - 10 星
	Array(3,8,60,30,Array(
		Array(4001839,1000)//星星
	)),
	//# 10 - 11 星
	Array(4,10,60,40,Array(
		Array(4001839,1200)//星星
	)),
	//# 11 - 12 星
	Array(4,10,55,30,Array(
		Array(4001839,1400)//星星
	)),
	//# 12 - 13 星
	Array(4,10,55,30,Array(
		Array(4001839,1600)//星星
	)),
	//# 13 - 14 星
	Array(4,10,50,35,Array(
		Array(4001839,1800)//星星
	)),
	//# 14 - 15 星
	Array(4,10,50,35,Array(
		Array(4001839,2000)//星星
	)),
	//# 15 - 16 星
	Array(5,15,40,60,Array(
		Array(4001839,2200)//星星
	)),
	//# 16 - 17 星
	Array(5,15,35,45,Array(
		Array(4001839,2400)//星星
	)),
	//# 17 - 18 星
	Array(5,15,35,45,Array(
		Array(4001839,2600)//星星
	)),
	//# 18 - 19 星
	Array(5,15,30,50,Array(
		Array(4001839,2800)//星星
	)),
	//# 19 - 20 星
	Array(5,15,30,50,Array(
		Array(4001839,3000)//星星
	)),
	//# 20 - 21 星
	Array(10,20,60,40,Array(
		Array(4310051,1),//星星
		Array(4310055,1)//星星
	)),
	//# 21 - 22 星
	Array(10,20,30,70,Array(
		Array(4310051,1),//星星
		Array(4310055,1)//星星
	)),
	//# 22 - 23 星
	Array(10,20,15,85,Array(
		Array(4310051,1),//星星
		Array(4310055,1)//星星
	)),
	//# 23 - 24 星
	Array(15,30,10,90,Array(
		Array(4310051,1),//星星
		Array(4310055,1)//星星
	)),
	//# 24 - 25 星
	Array(15,30,5,95,Array(
		Array(4310055,1),//星星
		Array(4310055,1)//星星
	))  
);
let ap = 0;
let wk = 0;
let toDrop;
while(true){
	let str = "#d請將你需要升星的裝備放到第一格\r\n#r僅支持：戰國、航海、神秘、創世.武器！\r\n#d點擊確定繼續升星,點擊否返回上一頁\r\n";
	let YN = npc.askYesNo(str);
	if(YN == 1){
		toDrop = player.getInventorySlot(1, 1);
		if(toDrop == null){
			npc.say("#d請將裝備放到第一格");
		}else if(toDrop.getCHUC() < 20){
			npc.say("#d請先將該裝備提升至20星");
		}else if(toDrop.getCHUC() >= 25){
			npc.say("#d該裝備已經滿星了！");
		}else if(toDrop.getSn() != -1){
			npc.say("#d點裝上星請用另外一個系統。！");
		}else{
			let nowArray = starArray[toDrop.getCHUC()];
			let lastArray = null;
			if(toDrop.getCHUC() > 0) lastArray = starArray[toDrop.getCHUC()-1];
			
			str = "#d請確認升星信息：\r\n#b當前裝備:#r#v"+toDrop.getDataId()+"##z"+toDrop.getDataId()+"#"
			str += "\r\n#b"+format("當前星級： #r"+toDrop.getCHUC()+" 級",15)
			str += "#b目標星級： #r"+(toDrop.getCHUC()+1)+" 級"
			str += "\r\n#b"+format("成功幾率： #r"+nowArray[2]+" %",16)
			str += "#b"+format("失敗幾率： #r"+nowArray[3]+" %",16)
			str += "#b下降幾率： #r"+(100-nowArray[2]-nowArray[3])+" %\r\n"
			if(nowArray[0] != 0) str += "#b"+format("升星屬性： #r"+nowArray[0]+" 點",15);
			if(nowArray[1] != 0) str += "#b"+format("升星攻擊： #r"+nowArray[1]+" 點",15);
			str += "#b損壞幾率：#r 0 %\r\n";
			if(lastArray != null){
				if(lastArray[0] != 0) str += "#b"+format("\r\n失敗下降屬性： #r"+lastArray[0]+" 點",15);
				if(lastArray[1] != 0) str += "#b"+format("             失敗下降攻擊： #r"+lastArray[1]+" 點",15);
			}
			str += "\r\n#b消耗星星： "
			let PD = true;
			for(let i = 0;i<nowArray[4].length;i++){
				if(player.getAmountOfItem(nowArray[4][i][0]) < nowArray[4][i][1]){
					str += "#v"+nowArray[4][i][0]+"##b "+nowArray[4][i][1]+" / "+player.getAmountOfItem(nowArray[4][i][0])+"#r(不滿足)\r\n";
					PD = false;
				}else{
					str += "#v"+nowArray[4][i][0]+"##b "+nowArray[4][i][1]+" / "+player.getAmountOfItem(nowArray[4][i][0])+"#g(已滿足)\r\n";
				}
			}
			YN = npc.askYesNo(str);
			if(YN == 1){
				if(PD){
					for(let i = 0;i<nowArray[4].length;i++){
						player.loseItem(nowArray[4][i][0],nowArray[4][i][1])
					}
					let ran = Math.random() * 100;
					if(ran <= nowArray[2]){
						//成功
						ap = nowArray[0];
						wk = nowArray[1];
						makeEquip(true);
						//npc.broadcastGachaponMsgEx("【星力系統】 : 恭喜玩家 " + player.getName() + " 上星 "+toDrop.getItemName()+" 成功！",toDrop);
						npc.say("恭喜你升星成功");
					}else if(ran <= nowArray[2]+nowArray[3]){
						//失敗
						//npc.broadcastGachaponMsgEx("【星力系統】 : 玩家 " + player.getName() + " 上星 "+toDrop.getItemName()+" 失敗！",toDrop);
						npc.say("很遺憾，升星失敗");
					}else{
						//下降
						ap = lastArray[0];
						wk = lastArray[1];
						makeEquip(false);
						npc.broadcastGachaponMsgEx("【星力系統】 : 真糟糕,玩家 " + player.getName() + " 上星 "+toDrop.getItemName()+" 失敗！並且星級下降！",toDrop);
						npc.say("真糟糕，升星失敗，並且裝備星級下降");
					}
				}else{
					npc.say("#d你的材料不夠哦");
				}
			}else{
				npc.say("#d考慮好再來找我吧");
			}
		}
	}else{
		//上一頁的腳本名
		player.runScript("AB_綜合功能");
		break;
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
		//type =true 提升 false失敗
		toDrop.setStr(type?toDrop.getStr() + ap : toDrop.getStr() - ap); //裝備力量
		toDrop.setDex(type?toDrop.getDex() + ap : toDrop.getDex() - ap); //裝備敏捷
		toDrop.setInt(type?toDrop.getInt() + ap : toDrop.getInt() - ap); //裝備智力
		toDrop.setLuk(type?toDrop.getLuk() + ap : toDrop.getLuk() - ap); //裝備運氣
		toDrop.setMad(type?toDrop.getMad() + wk : toDrop.getMad() - wk);
		toDrop.setPad(type?toDrop.getPad() + wk : toDrop.getPad() - wk);
		toDrop.setCHUC(type?toDrop.getCHUC() + 1 : toDrop.getCHUC() - 1); 
		player.updateItem(1, toDrop);
}