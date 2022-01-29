//强混 几里 315342975

//强混ID
var qhid = 2049116;
//祝福ID
var zfid = 2340000;

var successP = 60;//成功几率
var min = 0;
var max = 10;
var sx = Array();

while(true){
	sx = Array();
	var str = "洗强混装备\r\n"
	str += "#z"+qhid+"# 剩余数量 "+ player.getAmountOfItem(qhid);
	str += "\r\n#z"+zfid+"# 剩余数量 "+ player.getAmountOfItem(zfid);
	str += "\r\n#d请将您想要使用#r<强混>#d的装备放到第一格";


	var toDrop = player.getInventorySlot(1, 1);
	if(toDrop == null){
		npc.say(str+"\r\n第一格没有装备");
	}else if(toDrop.getRUC() > 0){
		if(player.getAmountOfItem(zfid) > 0){
			str += "\r\n默认背包里有祝福卷轴,并且使用\r\n是否进行强混？"
		}else{
			str += "\r\n背包里没有祝福卷轴,失败将会损失装备次数\r\n是否进行强混？"
		}
		let YN = npc.askYesNo(str);
		if(YN == 1){
			if(player.hasItem(qhid,1)){
				
				player.loseItem(qhid,1);
				var jilv = Math.random() * 100;
				if(jilv < successP){
					
					var jilv1 = Math.random() * 100;
					for(let j = 0; j < 6;j++){
						var ran = Math.floor(Math.random() * (max-min+1)+min);
						if(jilv1 < 50){
							ran = -ran;
						}
						sx.push(ran);
					}
					
					if(toDrop.getStr() > 0) toDrop.setStr(toDrop.getStr()+sx[0]); //装备力量
					else sx[0] = "该属性数值已为0 无法改变"
					if(toDrop.getStr() < 0) toDrop.setStr(0); //装备力量
					
					if(toDrop.getDex() > 0) toDrop.setDex(toDrop.getDex()+sx[1]); //装备力量
					else sx[1] = "该属性数值已为0 无法改变"
					if(toDrop.getDex() < 0) toDrop.setDex(0); //装备力量
					
					if(toDrop.getInt() > 0) toDrop.setInt(toDrop.getInt()+sx[2]); //装备力量
					else sx[2] = "该属性数值已为0 无法改变"
					if(toDrop.getInt() < 0) toDrop.setInt(0); //装备力量
					
					if(toDrop.getLuk() > 0) toDrop.setLuk(toDrop.getLuk()+sx[3]); //装备力量
					else sx[3] = "该属性数值已为0 无法改变"
					if(toDrop.getLuk() < 0) toDrop.setLuk(0); //装备力量
					
					if(toDrop.getPad() > 0) toDrop.setPad(toDrop.getPad()+sx[4]); //装备力量
					else sx[4] = "该属性数值已为0 无法改变"
					if(toDrop.getPad() < 0) toDrop.setPad(0); //装备力量
					
					if(toDrop.getMad() > 0) toDrop.setMad(toDrop.getMad()+sx[5]); //
					else sx[5] = "该属性数值已为0 无法改变"
					if(toDrop.getMad() < 0) toDrop.setMad(0); //装备力量
					
					
					//成功
					toDrop.setRUC(toDrop.getRUC()-1);
					toDrop.setCUC(toDrop.getCUC()+1);
					player.updateItem(1, toDrop);
					var sss = "恭喜你，强化成功，属性上涨！";
					if(jilv1 < 50){
						var sss = "很遗憾，强混虽然成功，但是属性下降了！";
					}
					npc.say(sss+"\r\n#d力量:#r"+sx[0]+"\r\n#d敏捷:#r"+sx[1]+"\r\n#d智力:#r"+sx[2]+"\r\n#d运气:#r"+sx[3]+"\r\n#d攻击力:#r"+sx[4]+"\r\n#d魔法力:#r"+sx[5]);
				}else{
					if(player.getAmountOfItem(zfid) > 0){
						npc.say("失败了,但是有祝福卷轴，装备没有损失升级次数");
					}else{
						toDrop.setRUC(toDrop.getRUC()-1);
						player.updateItem(1, toDrop);
						npc.say("失败了,没有有祝福卷轴，装备损失升级次数");
					}
					
				}
				
				if(player.hasItem(zfid,1)){
					player.loseItem(zfid,1);
				}
			}else{
				npc.say("没有强混卷轴了")
			}
		}else{
			break;
		}
	}else{
		npc.say(str+"\r\n你的第一格装备,无法砸卷了")
		break;
	}
}