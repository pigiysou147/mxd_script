var tz15 = "#fEffect/CharacterEff/1112949/0/0#"; //花样音符
var status = -1;
var itemList = Array(
	// 物品代码   概率  物品数量  
	
	Array(2434956, 10, 1), //天堂戒指
	Array(2430761, 50, 1), //传说武器箱子
	Array(2630627, 100, 1), //神秘防具自选箱
	Array(2630627, 100, 1), //神秘防具自选箱
	Array(1012632, 10, 1), //失控机械标记
	Array(1022278, 10, 1), //蕴藏魔力的眼罩
	Array(1122430, 10, 1), //痛苦根源
	Array(1132308, 10, 1), //梦幻腰带
	Array(1113306, 10, 1), //巨大恐惧戒指
	Array(1032316, 10, 1), //船长姿态耳环
	Array(1033000, 10, 1), //路西德耳环
	Array(4001332, 50, 1), //紫色蜡笔
	Array(1182136, 500, 1), //MX-131徽章
	Array(1672069, 200, 1), //女武神之心
	Array(1122296, 60, 1), //死神的项链
	// 物品代码   概率  物品数量  
	Array(3018631,200,1),
	Array(3018630,200,1),
	Array(3018629,200,1),
	Array(3018628,200,1),
	Array(3018627,200,1),
	Array(3018626,200,1),
	Array(3018625,200,1),
	Array(3018614,200,1),
	Array(3018613,200,1),
	Array(3012039,200,1), 
	Array(2630404, 10, 1), //20级神秘徽章自选箱子
	Array(2439292, 20, 1), //18级神秘徽章自选箱子
	Array(2630372, 30, 1), //15级神秘徽章自选箱子
	Array(2614079, 100, 1), //1000W极限的突破石头
	Array(2614079, 100, 1), //1000W极限的突破石头
	Array(2614079, 100, 1), //1000W极限的突破石头
	Array(2614079, 100, 1), //1000W极限的突破石头
	Array(2614079, 100, 1), //1000W极限的突破石头
	Array(2614069, 50, 1), //5000万极限突破石100%
	Array(2614069, 50, 1), //5000万极限突破石100%
	Array(2614068, 50, 1), //3000万极限突破石100%
	Array(2614068, 50, 1), //3000万极限突破石100%
	Array(2614068, 50, 1), //3000万极限突破石100%
	
	Array(1202193, 100, 1), //轮回碑石\r\n
	Array(2430885, 500, 1), //FFN自选防具\r\n
	Array(2430885, 500, 1), //FFN自选防具\r\n
	Array(2431938, 500, 1), //FFN武器箱\r\n
	
	Array(2432069, 150, 1), //暴君防具交换券
	Array(2432069, 150, 1), //暴君防具交换券
	Array(3992025, 500,  1), //圣诞大星
	Array(2049610, 200,  1), //还原不可以交易 成功率100%椅子
	Array(4023026, 500,  1), //紫火
	Array(4023026, 500,  1), //紫火
	Array(4023025, 500, 1), //金火
	Array(4023025, 500, 1), //金火
	Array(4036457, 500, 1), //黑火
	Array(4036457, 500, 1), //黑火
	Array(4000000, 500, 9999), //蓝蜗牛壳
	Array(4000016, 500, 9999), //红蜗牛壳
	Array(4000835, 500, 9999), //红蜗牛壳
	Array(4000836, 500, 9999), //红蜗牛壳
	
	Array(4000000, 100, 999), //蓝蜗牛壳
	Array(4000016, 100, 999), //红蜗牛壳
	Array(4000835, 100, 999), //红蜗牛壳
	Array(4000836, 100, 999), //红蜗牛壳
	
	Array(4034848, 500, 5), //光辉钻石
	Array(4001332, 200, 1), //紫色蜡笔
	Array(4001331, 500, 1), //蓝色蜡笔
	Array(4001330, 500, 1), //青色蜡笔
	Array(4001329, 500, 1), //绿色蜡笔
	Array(4001328, 500, 1), //黄色蜡笔
	Array(4001327, 500, 1), //橙色蜡笔
	Array(4001326, 500, 1), //红色蜡笔
	Array(2049389, 300, 1), //星之力20星强化券
	Array(2049387, 500, 1), //星之力18星强化券
	Array(2049389, 300, 1), //星之力20星强化券
	Array(2049387, 500, 1), //星之力18星强化券
	Array(2432206, 500, 1), //玫瑰花园箱子
	Array(2432206, 500, 1), //玫瑰花园箱子
	Array(2435824, 500, 1), //V箱子
	Array(2430675, 300, 1), //贪婪箱子
	Array(2430675, 300, 1), //贪婪箱子
	Array(2435824, 500, 1), //V箱子
	Array(2431142, 300, 1), //第一季箱子
	Array(2431142, 300, 1), //第一季箱子
	//------奖品------
	Array(2591631, 100, 1), //伟大的奈奈灵魂结晶
	Array(2591630, 100, 1), //伟大的嘟嘟灵魂结晶
	Array(2591629, 100, 1), //伟大魂魔灵魂结晶
	Array(2591629, 100, 1), //伟大魂魔灵魂结晶
	Array(2591561, 100, 1), //伟大的奈奈灵魂结晶
	Array(2591552, 100, 1), //伟大的嘟嘟灵魂结晶
	Array(2591485, 100, 1), //伟大的赤虎灵魂
	Array(2591484, 100, 1), //伟大的黄龙灵魂
	Array(2591676, 100, 1), //伟大的敦凯尔灵魂结晶
	Array(2591659, 100, 1), //伟大的觉醒希拉灵魂结晶
	Array(2591640, 100, 1), //伟大的威尔灵魂结晶
	Array(2591619, 100, 1), //伟大的帕普拉图斯灵魂结晶
	Array(2591590, 100, 1), //伟大的路西德灵魂
	Array(2591581, 100, 1), //伟大的戴米安灵魂结晶
	Array(2591572, 100, 1), //伟大的戴米安灵魂结晶
	Array(2591517, 100, 1), //伟大乌鲁斯之魂
	Array(2591427, 100, 1), //伟大的斯乌灵魂结晶
	Array(2591296, 100, 1), //伟大的毛莫灵魂结晶
	Array(2591264, 100, 1), //伟大的麦格纳斯灵魂结晶
	Array(2591088, 100, 1), //伟大的希纳斯灵魂结晶
	Array(2049116, 80, 50), //强化混沌卷
	Array(2049116, 80, 50), //强化混沌卷
	Array(4031764, 50, 30), //超自然报告
	Array(4031764, 50, 40), //超自然报告
	Array(4031764, 50, 50), //超自然报告
	Array(4000124, 100, 80), //内存卡
	Array(4001006, 100, 1000), //火焰羽毛
	Array(4000672, 100, 500), //火石头
	Array(4000645, 100, 500), //飘飘猪脖子肉
	Array(4000627, 100, 500), //钉头锤
	Array(4000133, 100, 500), //海贼发动机
	Array(2049323, 100, 20), //高级无损卷轴
	Array(2049323, 100, 20), //高级无损卷轴
	Array(2049323, 100, 20), //高级无损卷轴
	Array(3994979, 300, 5), //进击的巨人抽奖球
	Array(4310238, 500, 50), //绝对味觉币
	Array(4310238, 500, 50), //绝对味觉币
	Array(4031997, 300, 200), //国庆纪念币
	Array(4031997, 300, 300), //国庆纪念币
	Array(4031997, 300, 500), //国庆纪念币
	Array(2048749, 80, 20), //永远的火花
	//Array(1132098, 500, 1), //科拉班·雷昂战争腰带	
	//Array(1072872, 500, 1), //永恒碎鼋斧
	Array(5062024, 500, 1), //闪炫魔方
	Array(4033356, 500, 1), //正义火种1
	Array(4000124, 500, 1), //战甲吹泡泡鱼的内存卡
	Array(1032219, 100, 1), //遗忘之神话耳环
	Array(5570000, 250, 1), //金锤子
	Array(4001715, 500, 5), //定居币1亿
	Array(4001715, 500, 5), //定居币1亿
	Array(2048723, 500, 1), //火花
	//Array(2046110, 500, 1), //周年双攻
	//Array(2046010, 500, 1), //周年单攻
	Array(2614002, 500, 1), //百万突破
	Array(2614001, 500, 1), //十万突破
	//Array(2049383, 500, 1), //星之力14星强化券
	Array(2049384, 500, 1), //星之力15星强化券
	Array(2049385, 500, 1), //星之力16星强化券
	Array(2049386, 500, 1), //星之力17星强化券
	Array(1012319, 500, 1), //8周年点点红
	Array(2049604, 300, 1), //还原卷轴
	Array(2049603, 300, 1), //还原卷轴50%
	Array(2049116, 500, 1), //强化混沌卷轴
	Array(2022530, 500, 1), //迎春花花语
	
	//10万
	Array(2614054, 500, 10),
	Array(2614023, 500, 10),
	Array(2614018, 500, 10),
	Array(2614004, 500, 10),
	Array(2614001, 500, 10),
	Array(2614045, 500, 10),
	Array(2614030, 500, 10),
	Array(2614021, 500, 10),
	Array(2614016, 500, 10),
	Array(2614013, 500, 10),
	Array(2614044, 500, 10),
	Array(2614028, 500, 10),
	Array(2614010, 500, 10),
	Array(2614007, 500, 10),
	Array(2614046, 500, 10),
	//1万
	Array(2614056, 500, 10),
	Array(2614031, 500, 10),
	Array(2614022, 500, 10),
	Array(2614020, 500, 10),
	Array(2614003, 500, 10),
	Array(2614000, 500, 10),
	Array(2614029, 500, 10),
	Array(2614015, 500, 10),
	Array(2614012, 500, 10),
	Array(2614027, 500, 10),
	Array(2614009, 500, 10),
	Array(2614006, 500, 10),
	//五万
	Array(2614042, 500, 10),
	Array(2614041, 500, 10),
	Array(2614032, 500, 10),
	Array(2614043, 500, 10),
	//五十万
	Array(2614071, 200, 10),
	Array(2614040, 200, 10),
	Array(2614049, 200, 10),
	Array(2614048, 200, 10),
	Array(2614039, 200, 10),
	Array(2614047, 200, 10),
	Array(2614038, 200, 10),
	Array(2614034, 200, 10),
	//二十万
	Array(2614037, 500, 10),
	Array(2614036, 500, 10),
	Array(2614035, 500, 10),
	Array(2614033, 500, 10),
	//三十万
	Array(2614070, 500, 10),
	Array(2614053, 500, 10),
	Array(2614052, 500, 10),
	Array(2614051, 500, 10),
	Array(2614050, 500, 10),
	//百万
	Array(2614026, 500, 1),
	Array(2614025, 500, 1),
	Array(2614058, 500, 1),
	Array(2614005, 500, 1),
	Array(2614002, 500, 1),
	Array(2614024, 500, 1),
	Array(2614019, 500, 1),
	Array(2614017, 500, 1),
	Array(2614014, 500, 1),
	Array(2614055, 500, 1),
	Array(2614008, 500, 1),
	Array(2614011, 500, 1),
	//五百万
	Array(2614078, 500, 1),
	Array(2614064, 500, 1),
	Array(2614063, 500, 1),
	Array(2614062, 500, 1),
	//一千万
	Array(2614079, 100, 1),
	Array(2614067, 100, 1),
	Array(2614066, 100, 1),
	Array(2614065, 100, 1),
	//三千万
	Array(2614068, 100, 1),
	//1E
	Array(2614074, 100, 1),
	
	Array(1132171, 500, 1), //诺巴凯伦腰带
	Array(1132172, 500, 1), //诺巴利卡昂腰带
	Array(1132173, 500, 1), //诺巴阿尔泰腰带
	Array(1132170, 500, 1), //小暴君
	Array(1102480, 500, 1), //小暴君
	Array(1102477, 500, 1), //小暴君
	Array(1102478, 500, 1), //小暴君
	Array(1102476, 500, 1), //小暴君
	Array(1102479, 500, 1), //小暴君
	Array(1072740, 500, 1), //小暴君
	Array(1072741, 500, 1), //小暴君
	Array(1072737, 500, 1), //小暴君
	Array(1072738, 500, 1), //小暴君
	Array(1072739, 500, 1), //小暴君
	Array(1132170, 500, 1), //小暴君
	Array(1102480, 500, 1), //小暴君
	Array(1102477, 500, 1), //小暴君
	Array(1102478, 500, 1), //小暴君
	Array(1102476, 500, 1), //小暴君
	Array(1102479, 500, 1), //小暴君
	Array(1072740, 500, 1), //小暴君
	Array(1072741, 500, 1), //小暴君
	Array(1072737, 500, 1), //小暴君
	Array(1072738, 500, 1), //小暴君
	Array(1072739, 500, 1), //小暴君
	Array(1132170, 500, 1), //小暴君
	Array(1102480, 500, 1), //小暴君
	Array(1102477, 500, 1), //小暴君
	Array(1102478, 500, 1), //小暴君
	Array(1102476, 500, 1), //小暴君
	Array(1102479, 500, 1), //小暴君
	Array(1072740, 500, 1), //小暴君
	Array(1072741, 500, 1), //小暴君
	Array(1072737, 500, 1), //小暴君
	Array(1072738, 500, 1), //小暴君
	Array(1072739, 500, 1), //小暴君
	Array(1132170, 500, 1), //小暴君
	Array(1102480, 500, 1), //小暴君
	Array(1102477, 500, 1), //小暴君
	Array(1102478, 500, 1), //小暴君
	Array(1102476, 500, 1), //小暴君
	Array(1102479, 500, 1), //小暴君
	Array(1072740, 500, 1), //小暴君
	Array(1072741, 500, 1), //小暴君
	Array(1072737, 500, 1), //小暴君
	Array(1072738, 500, 1), //小暴君
	Array(1072739, 500, 1), //小暴君
	Array(1132170, 500, 1), //小暴君
	Array(1102480, 500, 1), //小暴君
	Array(1102477, 500, 1), //小暴君
	Array(1102478, 500, 1), //小暴君
	Array(1102476, 500, 1), //小暴君
	Array(1102479, 500, 1), //小暴君
	Array(1072740, 500, 1), //小暴君
	Array(1072741, 500, 1), //小暴君
	Array(1072737, 500, 1), //小暴君
	Array(1072738, 500, 1), //小暴君
	Array(1072739, 500, 1), //小暴君
	Array(4001326, 500, 1), //红
	Array(4001327, 500, 1), //橙
	Array(4001328, 500, 1), //黄
	Array(4001329, 500, 1), //绿
	Array(4001330, 500, 1), //青
	Array(4001331, 500, 1), //蓝
	Array(3010037, 200, 1),
	Array(1102476, 500, 1) //秘密能手册
);

	var txt = "#r#e\t\t\t#e#v4001716#『金币大转盘』#v4001716#\r\n";
	txt += "\t10E金币即可进行一次转盘。\r\n\t请注意(每抽50次会额外赠送突破#v2614069# X1)\r\n";
	txt += "\t现在要玩幸运转盘吗?\r\n";
	txt	+="#L0##v4001716#我要进行转盘#l\t";
	txt	+="#L3##v2430189#查看奖品概率#l\r\n\r\n";
	txt	+="#L1##v4001447#查看次数排行榜#l\r\n\r\n";
	txt	+="#L2##v2439614#领取累计达成奖励#l\r\n\r\n";
	let selection=npc.askMenu(txt);
	if(selection==0){
		let yes= npc.askYesNo("#r#e是否要开始呢？点击确定开始消耗10E金币抽奖（可以连续抽奖哦）");
		if(yes==1){
			while(true){
				if(player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
					npc.say("请整理你的背包空间..");
					break;
				}
				else if(!player.hasMesos(1000000000)){
					npc.say("金币不足，需要10E金币");
					break;
				}
				else {
					var chance = Math.floor(Math.random() * 1000);
					var finalitem = Array();
					for(var i = 0; i < itemList.length; i++) {
						if(itemList[i][1] >= chance) {
							finalitem.push(itemList[i]);
						}
					}
					
					if(finalitem.length != 0) {
						var random = new java.util.Random();
						var finalchance = random.nextInt(finalitem.length);
						var itemId = finalitem[finalchance][0];
						var quantity = finalitem[finalchance][2];
						var notice = finalitem[finalchance][1];
						
						
						if(notice <=200) {
							if(itemId<2000000){
								//装备类
								player.gainGachaponItem("【金币赌狗】",itemId, quantity,  5);
							}else{
								player.gainItem(itemId,quantity);
								npc.broadcastPlayerNotice(15,"【金币赌狗】 : 人品爆发， 玩家 " + player.getName() + " 在金币赌狗里获得了稀有道具 【"+player.makeItemWithId(itemId).getItemName()+"】 X "+quantity+" !羡慕不如行动，快来抽奖地图参与吧");
							
							}
							
							//npc.broadcastPlayerNotice(3,"【金币赌狗】 : 人品爆发， 玩家 " + player.getName() + " 在金币赌狗里获得了稀有道具 !羡慕不如行动，快来抽奖地图参与吧");
						}else{
							player.gainItem(itemId,quantity);
						}
						
						
						player.loseMesos(1000000000);
						player.addPQLog("金币大转盘",1,999);
						
						
						player.addPQLog("金币大转盘累计次数",1,999);
						if(player.getPQLog("金币大转盘累计次数")%50==0){
							//每50次给突破石头
							player.gainItem(2614069,1);
							npc.sayNext("你获得了 #b#t" + itemId + "##k " + quantity + "个 #v2614069# X1。点击下一步可以再抽一次~");
						}else{
							npc.sayNext("你获得了 #b#t" + itemId + "##k " + quantity + "个。点击下一步可以再抽一次~");
						}
						
					}
				}
			}
		}
	}else if(selection==1){
		//财富排行
		var sql = "SELECT characters.name,characters_pqlog.characters_id,characters_pqlog.`key`,characters_pqlog.`value` from characters,characters_pqlog where characters_pqlog.`key` ='金币大转盘累计次数' and characters_pqlog.characters_id=characters.id and characters_pqlog.value>0  order by value desc limit 150;";
		var resultList = player.customSqlResult(sql);
		var text = "\t\t\t\t#e#d★ 金币转盘次数排行 ★#k#n\r\n\r\n";
		 text += "#r#e如果次数更新不及时，请小退更新一下次数~\r\n\r\n";
		text += "\t#e名次#n\t\t#e玩家昵称#n\t\t\t#e次数#n\t\t #e #n\r\n";
		for(var i = 0; i < resultList.size(); i++) {
			var rank = i + 1;
			var result = resultList.get(i);
			if(result == null) {
				break;
			}
			
			if(rank == 1) {
				text += "#r";
			} else if(rank == 2) {
				text += "#g";
			} else if(rank == 3) {
				text += "#b";
			}
			if(rank<100){
				//排版对齐
				text += "\t " + rank + "\t\t\t ";
			}else{
				text += "\t " + rank + "\t\t ";
			}
			
			// 填充名字空格
			text += result.get("name");
			for(var j = 18 - result.get("name").length; j > 0; j--) {
				text += " ";
			}
			text += "\t " +result.get("value") + "次";
			text += "\r\n";
			
		}
		npc.say(text);
	}else if(selection==3){
		var txt="\r\b#r#e以下是各类奖品的概率，数据绝对真实:\r\n\r\n";
		txt+="抽奖的机制说明:\r\n\r\n";
		txt+="#b 展示的概率为抽奖概率.  比如抽中对应概率的物品. 就会在对应概率的物品里随机一个物品作为奖品发放.~#r\r\n\r\n";
		
		for(var i=0;i<itemList.length;i++){
			
			txt+="#v"+itemList[i][0]+"# "+itemList[i][1]/10+" %";
			if((i+1)%3==0   ){
				txt+="\r\n";
			}else{
				txt+="\t";
			}
		}
		npc.say(txt);
	}else if(selection==2){
		//领取奖励逻辑
		var itemList=Array(
			Array(
				600,
				Array(2437158,"创世首饰自选")
			),
			Array(
				750,
				Array(2438497,"强混3次均10创世首饰自选")
			),
			Array(
				1500,
				Array(2439614,"创世武器自选（附赠完美转移武器资格）")
			)
		);
		var txt="#r#e\r\n\t\t\t抽奖次数兑换奖励\r\n";
		var count =player.getPQLog("金币大转盘");
		txt+="你目前可兑换的次数为: "+count+"次\r\n#b(请注意，兑换之后对应的抽奖次数将会扣除，排行榜的总次数不做变动)#r\r\n";
		for(var i=0;i<itemList.length;i++){
			txt+="#L"+i+"#领取"+itemList[i][0]+"次数奖励#v"+itemList[i][1][0]+"#("+itemList[i][1][1]+")#l\r\n\r\n";
			
		}
		let selection =npc.askMenu(txt);
		let sele =npc.askYesNo("#r#e是否确定要消耗"+itemList[selection][0]+"抽奖次数来兑换#v"+itemList[selection][1][0]+"#");
	
		if(sele==1){
			if(count>=itemList[selection][0]){
				if(player.canGainItem(itemList[selection][1][0],1)){
					player.addPQLog("金币大转盘",-itemList[selection][0],999);
					player.gainItem(itemList[selection][1][0],1);
					npc.say("领取成功");
				}else{
					npc.say("请清理背包");
				}
				
			}else{
				npc.say("次数不足");
			}
		}
	}
