/**
* 装备箱子 需要box 几里 315342975 
**/

let id = npc.askNumber("請輸入代碼",1592022,100000,9999999);
let num = npc.askNumber("請輸入#v"+id+"#素質","",1,9999999);

		//player.loseItem(boxId,1);
		let newItem = player.makeItemWithId(id);
		newItem.setStr(num); //装备力量
		newItem.setDex(num); //装备敏捷
		newItem.setInt(num); //装备智力
		newItem.setLuk(num); //装备运气

		newItem.setMad(num);
		newItem.setPad(num);
		newItem.setTitle("cyz專屬");

		//newItem.setStatR(equips[selected][7]);// 所有属性
		newItem.setBossDamageR(255);// BOSS伤 
		newItem.setIgnorePDR(255);// 无视防御
		//newItem.setAttribute(0);
		
		
		//如果需要潜能星星那些，请自己在这里写代码 但是这个脚本就会都给装备这些属性了哦
		newItem.setGrade(20); //给S潜能
		newItem.setOption(1, 60001, false);
		newItem.setOption(2, 60001, false);
		newItem.setOption(3, 60001, false);
		newItem.setOption(1, 60001, true);
		newItem.setOption(2, 60001, true);
		newItem.setOption(3, 60001, true);
		newItem.setCHUC(25);  //星星*/
		
		player.gainItem(newItem);