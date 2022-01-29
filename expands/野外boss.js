//野外BOSS jili


var bossArr = new Array(
	// BOSS名字   事件        多少突破一下可以进入（E）
	Array("蜗 牛 王","yw_woniuwang",50),
	Array("树 妖 王","yw_shuyaowang",50),
    Array("多    尔","yw_duoer",50),
    Array("浮 士 德","yw_fushide",50)


    // Array("骷髅司令","yw_kulousiling",250),
	// Array("巨 居 蟹","yw_jujuxie",250),
	// Array("精灵妈妈","yw_jinglingmama",350),
	// Array("企鹅女王","yw_qienvwang",350),

	
	// Array("艾 利 杰","yw_ailijie",400),
	// Array("木马骑士","yw_mumaqishi",400),
	// Array("九 尾 狐","yw_jiuweihu",400),
	// Array("提    莫","yw_timo",400),

	
	// Array("朱    诺","yw_zhunuo",400),
	// Array("大    宇","yw_dayu",400),
	// Array("陆 陆 猫","yw_lulumao",450),
	// Array("D. 洛 伊","yw_D.luoyi",450),

	
	// Array("妖怪禅师","yw_yaoguaichanshi",500),
	// Array("蜈蚣妖怪","yw_wugongyaoguai",500),
	// Array("侏 儒 怪","yw_zhuruguai",500),
	// Array("哈维酋长","yw_haweiqiuzhang",500),

	
	// Array("绵羊酋长","yw_mianyangqiuzhang",550),
	// Array("半人马王","yw_banrenmawang",550),
	// Array("火 焰 龙","yw_huoyanlong",550),
	// Array("驮狼雪人","yw_tuolangxueren",550),

	
	// Array("大 海 兽","yw_dahaishou",600),
	// Array("暴 力 熊","yw_baolixiong",600),
	// Array("麦格纳斯","yw_maigenasi",600),
	// Array("弱化希拉","yw_ruohuaxila",600)
	


		 
);

if(player.getChannel() == 1){

	var str = "请选择你要链接的地方:\r\n"

	for(var i = 0;i < bossArr.length;i++){
		
		
		var event = npc.getEvent(bossArr[i][1]);
		
		str += "#L"+i+"#"
		str += "#r"+bossArr[i][0]+""
		if(event == null){
			str += "[维护中]"
		}else{
			var isBorn = event.getVariable("isBorn")
			if(isBorn == 1){
				
				str += "[已复活]"
			}else{
				str += "#b[已击杀] 复活时间<"
				var nextTime = event.getVariable("nextTime")
				var bornTime = nextTime - new Date().getTime();
				bornTime = bornTime / 1000;
				var second = parseInt(bornTime%60);
				var minute = parseInt(bornTime/60);
				str += minute+"分"+second+"秒>";
			}
		}
		str += "#g[突破"+bossArr[i][2]+"E以下]"
		str +="#l\r\n"
	}

	var sel = npc.askMenu(str);
	var event = npc.getEvent(bossArr[sel][1]);
	if(event == null){
		npc.say("BOSS出走啦。。。")
	}else{
		if(npc.askYesNo("是否去BOSS地图？") == 1){
			
			
			var equip = player.getInventorySlot(-1,-11);
			if(equip == null){
				npc.say("没带武器你去找虐？")
			}else if(equip.getLimitBreak() >= bossArr[sel][2] * 100000000){
				npc.say("给新手一点活路吧，别去了。去了的话会被记录一笔黑历史哦")
			}else{
			
				var map = event.getVariable("map");
				player.changeMap(map);
				player.setEvent(event);
			}
			
		}
	}
}else{
	npc.say("只有频道1有BOSS哦")
}