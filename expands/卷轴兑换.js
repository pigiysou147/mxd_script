var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";



var heijuan=Array(
	2613066,//	究极黑暗单手武器攻击力卷轴	提高单手武器的攻击力。
	2613067,//	究极黑暗单手武器魔力卷轴	提高单手武器的魔力。
	2612078,//	究极黑暗双手武器攻击力卷轴	提高双手武器的攻击力。
	2612079,//  究极黑暗双手武器魔力卷轴	提高双手武器的魔力。
	2616214,//	究极黑暗防具攻击力卷轴	提高防具的攻击力。
	2616215,//	究极黑暗防具魔力卷轴	提高防具的魔力。
	2615049,//	究极黑暗饰品攻击力卷轴	提高饰品的攻击力。
	2615050,//	究极黑暗饰品魔力卷轴	提高饰品的魔力。
	2048823,//	究极黑暗宠物装备攻击力卷轴	提高宠物装备的攻击力。
	2048824//	究极黑暗宠物装备魔力卷轴	提高宠物装备的魔力。
);


var vjuan=Array(
	2613064,//V单手武器攻击力卷轴	在单手武器中附加攻击力提升属性。
	2613065,//V单手武器魔力卷轴	在单手武器中附加魔力提升属性。
	2612076,//V双手武器攻击力卷轴	在双手武器中附加攻击力提升属性。
	2612077,//V双手武器魔力卷轴	在双手武器中附加魔力提升属性。
	2616074,//V防具攻击力卷轴	在防具中附加攻击力提升属性。
	2616075,//V防具魔力卷轴	在防具中附加魔力提升属性。
	2615043,//V饰品攻击力卷轴	在饰品中附加攻击力提升属性。
	2615044,//V饰品魔力卷轴	在饰品中附加魔力提升属性。
	2048821,//V宠物装备攻击力卷轴	在宠物装备中附加攻击力提升属性。
	2048822 //V宠物装备魔力卷轴	在宠物装备中附加魔力提升属性。
);

var xjuan=Array(
	2613050,//X单手武器攻击力卷轴	提高单手武器的攻击力属性。
	2613051,//X单手武器魔力卷轴	提高单手武器的魔力属性。
	2612061,//X双手武器攻击力卷轴	提高双手武器的攻击力属性。
	2612062,//X双手武器魔力卷轴	提高双手武器的魔力属性。
	2616061,//X防具攻击力卷轴	在防具上附加提高攻击力属性。
	2616062,//X防具魔力卷轴	在防具上附加提高魔法攻击力的属性。
	2615031,//X饰品攻击力卷轴	在饰品上增加物理攻击力属性。
	2615032,//X饰品魔力卷轴	在饰品上增加魔法攻击力属性。
	2048817,//X宠物装备攻击力卷轴	在宠物装备上增加物理攻击力属性。
	2048818 //X宠物装备魔力卷轴	在宠物装备上增加魔法攻击力属性。
);

var txt="\r\n\t\t\t#e#b#v2613066#卷轴兑换#v2613064#\r\n";
	txt+="在这里你可以兑换使用卷轴来兑换更高一级的卷轴\r\n\r\n#r";
	txt+="#L0#我要兑换究极黑卷 需要同样种类的6张V卷#l\r\n\r\n";
	txt+="#L1#我要兑换V卷 需要同样种类的6张x卷#l";
	
	
	let selection=npc.askMenu(txt);
	if(selection==0){
		txt="\r\n#r#e请选择要兑换的卷轴\r\n\r\n";
		txt+="请仔细核查要兑换的卷轴，如有错误，管理不退换哦，请谨慎操作\r\n"
		for(var i=0;i<heijuan.length;i++){
			txt+="#L"+i+"##z"+heijuan[i]+"##v"+heijuan[i]+"#需要#v"+vjuan[i]+"# X 6#l\r\n";
		}
		let juan=npc.askMenu(txt);
		var itemId=heijuan[juan];;
		var needId=vjuan[juan];;
		let number=npc.askNumber("#r#e请输入要兑换的数量\r\n兑换比例 #v"+itemId+"# X1 比 #v"+needId+"# X6 ",1,1,parseInt(player.getAmountOfItem(needId)/6));
		let sel=npc.askYesNo("#r#e\r\n 你将要使用#v"+needId+"# "+number*6+"来兑换 #v"+itemId+"# X "+number+"。\r\n是否确认要兑换呢？");
		if(sel==1){
			player.loseItem(needId,number*6);
			player.gainItem(itemId,number);
			npc.say("兑换成功");
		}
		
		
		
	}else if(selection==1){
		txt="\r\n#r#e请选择要兑换的卷轴\r\n\r\n";
		txt+="请仔细核查要兑换的卷轴，如有错误，管理不退换哦，请谨慎操作\r\n"
		for(var i=0;i<vjuan.length;i++){
			txt+="#L"+i+"##z"+vjuan[i]+"##v"+vjuan[i]+"#需要#v"+xjuan[i]+"# X 6#l\r\n";
		}
		let juan=npc.askMenu(txt);
		var itemId=vjuan[juan];;
		var needId=xjuan[juan];;
		let number=npc.askNumber("#r#e请输入要兑换的数量\r\n兑换比例 #v"+itemId+"# X1 比 #v"+needId+"# X6 ",1,1,parseInt(player.getAmountOfItem(needId)/6));
		let sel=npc.askYesNo("#r#e\r\n 你将要使用#v"+needId+"# "+number*6+"来兑换 #v"+itemId+"# X "+number+"。\r\n是否确认要兑换呢？");
		if(sel==1){
			player.loseItem(needId,number*6);
			player.gainItem(itemId,number);
			npc.say("兑换成功");
		}
	}
	
	
	
	
	
	