//GM更改装备数据

let selection = Array(
	
	Array(1,"力量"),
		Array(188,"还原"),
	Array(2,"智力"),
	Array(3,"敏捷"),
	Array(4,"运气"),
	Array(5,"魔法力"),
	Array(6,"攻击力"),
	Array(7,"所有属性"),
	Array(8,"BOSS伤"),
	Array(25,"总伤害"),
	Array(9,"无视"),
	Array(155,"一键三条潜能"),
	Array(10,"可强化次数"),
	Array(11,"突破值(千万计算)"),
	Array(12,"潜能1(填潜能代码)"),
	Array(13,"潜能2(填潜能代码)"),
	Array(14,"潜能3(填潜能代码)"),
	Array(15,"潜能4(填潜能代码)"),
	Array(16,"潜能5(填潜能代码)"),
	Array(17,"潜能6(填潜能代码)"),
	Array(18,"一键SS(填写20)"),
	Array(19,"最大HP"),
	Array(20,"最大MP"),
	Array(22,"已强化次数"),
	Array(23,"物品ID"),
	Array(28,"防御"),
	Array(24,"星星")
	
);

//获取第一格装备
let toDrop = player.getInventorySlot(1, 1);
//判断第一格装备是否存在
if(toDrop == null){
	npc.say("#r检测到您的装备栏第一格没有装备，无法使用，请确认！",9010061);
}else if(!player.isGm()){
	npc.say("GM才可以用");
}else{

	while(true){

		let str = "请将需要修改属性的装备放到第一格,当前装备#v"+toDrop.getDataId()+"#"+toDrop.getDataId()+"\r\n";
		
		for(let i = 0; i<selection.length;i++){
			if(i % 1 == 0){
				str += "\r\n"
			}
			str += "#L"+i+"# 修改 <"+selection[i][1]+"> #l"
		}
		
		let index = npc.askMenu(str);
		
		str = "修改#v"+toDrop.getDataId()+"#的<"+selection[index][1]+">\r\n请输入值(确定就生效)";
		
		let number = npc.askNumber(str,"1",0,9999999);
		
		switch(selection[index][0]){
			case 1:
				toDrop.setStr(number); 
				break;
			case 2:
				toDrop.setInt(number); 
				break;
			case 3:
				toDrop.setDex(number);
				break
			case 4:
				toDrop.setLuk(number);
				break;
			case 5:
				toDrop.setMad(number); 
				break;
			case 6:
				toDrop.setPad(number); 
				break;
			case 7:
				toDrop.setStatR(number); 
				break;
			case 8:
				toDrop.setBossDamageR(number); 
				break;
			case 9:
				toDrop.setIgnorePDR(number); 
				break;
			case 10:
				toDrop.setRUC(number); 
				break;
			case 11:
				toDrop.setLimitBreak(number * 100000); 
				break;
			case 12:
			toDrop.setGrade(20)
				toDrop.setOption1(number);
				break;
				case 155:
			toDrop.setGrade(20)
				toDrop.setOption1(number);
				toDrop.setOption2(number);
				toDrop.setOption3(number);
				break;
			case 13:
				toDrop.setOption2(number);
				break;
			case 14:
				 toDrop.setOption3(number);
				break;
			case 15:
				 toDrop.setOption4(number);
				break;
			case 16:
				 toDrop.setOption5(number);
				break;
			case 17:
				 toDrop.setOption6(number);
				break;
			case 18:
				toDrop.setGrade(20)
				break;
			case 19:
				toDrop.setMaxHp(number)
				break;
			case 20:
				toDrop.setMaxMp(number)
				break;
			case 21:
				toDrop.setGrade(20)
				break;
			case 22:
				toDrop.setCUC(number); 
				break;
			case 23:
				toDrop.setDataId(number); 
				break;
			case 25:
				toDrop.setDamR(number); 
				break;				
			case 24:
				toDrop.setCHUC(number); 
				break;
				case 28:
				toDrop.setPdd(number); 
				break;
					case 188:
				toDrop.setStr(toDrop.getStr() - 20); //装备力量
				toDrop.setDex(toDrop.getDex() - 20); //装备敏捷
				toDrop.setInt(toDrop.getInt() - 20); //装备智力
				toDrop.setLuk(toDrop.getLuk() - 20); //装备运气
				toDrop.setPad(toDrop.getPad() - 20); //攻击力
				toDrop.setMad(toDrop.getMad() - 20); //魔法力
				toDrop.setMaxMp(3000);
				break;
		}
		
		//toDrop.setTitle("卓越证明")
		player.updateItem(1, toDrop);
		
		npc.say("修改成功，点击确定继续更改");
		
	
	}
	
	
}