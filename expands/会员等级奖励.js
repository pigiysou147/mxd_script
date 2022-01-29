

var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge="#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
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
// 礼包内容
var reward = new Array(
	// 礼包50
	Array(
		Array(4001715, 2),     // 定居金1亿金钱	
		Array(2430893, 1, "银河副手自选"), // 银河副手
		Array(5062503, 50),    // 高级神奇魔方
		Array(5062009, 50),     //超级神奇魔方
		Array(2340000, 5),      // 祝福卷轴
		Array(4001839, 500)   // 星星
	),
	Array(
		// 礼包2 500元
		Array(2434007, 1),            //S级法芙娜武器（自选）
		Array(2340000, 10),         //祝福卷轴
		Array(2049116, 5),     //强化混沌卷轴
		Array(4001839, 1000),     // 星星
		Array(3015448, 1),     // 解除怨恨椅子
		Array(3010830, 1)     // 天王星椅子
	),
	Array(
		// 礼包3 1000元
		Array(2431509, 3,"小暴君自选防具"),   //诺巴防具自选
		Array(5062009, 50),   //超级神奇魔方 
		Array(5062024, 10),     //闪炫
		Array(5062503, 50), //大师附加神奇魔方
		Array(2340000, 10),         //祝福卷轴
		Array(2049116, 5),     //强化混沌卷轴
		Array(2049155, 5),      // 惊人正义50%
		Array(2049762, 3),       //S级潜能附加卷
		Array(4001839, 1000),      // 星星
		Array(3010070, 1),     // 巨无霸品克缤
		Array(3015354, 1)     // 冒险岛微博椅子

	),
	Array(
		// 礼包4 2000元
		Array(1113074, 1),    //高级贝勒戒指
		Array(1032222, 1),    //高级贝勒耳环
		Array(1122266, 1),     //高级贝勒项链
		Array(1132245, 1),     //高级贝勒腰带
		Array(5062503, 80), //大师附加神奇魔方
		Array(5062024, 10),     //闪炫
		Array(5062009, 80),             //超级神奇魔方
		Array(2340000, 10),         //祝福卷轴
		Array(4001839, 2000),     // 星星 
		Array(3015637, 1),     //路西德的花
		Array(3015574, 1) //阿布拉克萨斯椅子
	),
	Array(
		// 礼包5 3000元
		Array(2434666, 10),         //X卷自选箱子
		Array(1022226, 1),           //独眼巨人之眼Lv.3
		Array(5064000, 10),      //防暴卷轴
		Array(2340000, 10),       //祝福卷轴
		Array(5062503, 80), //大师附加神奇魔方
		Array(5062024, 10),     //闪炫
		Array(3018182, 1)        //喵星许愿瓶
	),
	Array(
		// 礼包6 5000元
	   Array(1113070, 1),             //真红戒指
	   Array(1152155, 1),           //真红肩膀
	   Array(5064000, 20),                //防暴卷轴
	   Array(2340000, 20),               //祝福卷轴
	   Array(5062009, 100),             //超级神奇魔方 
	   Array(5062503, 100),           //大师附加魔方
	   Array(5062024, 20),     //闪炫
	   Array(3015002, 1) //七彩摩天轮椅子
	),
	Array(
		// 礼包7 8000元
		Array(4001332, 1),         //紫色蜡笔
		Array(5220040, 2000),         //冒险转蛋卷
		Array(5064000, 10),                //防暴卷轴
		Array(2340000, 20),               //祝福卷轴
		Array(5390018, 30),             //赤马喇叭
		Array(5390010, 30),           //鬼出没喇叭
		Array(5390031, 30),           //超级英雄喇叭
		Array(5062024, 30),     //闪炫
		Array(3010832, 1)        //太阳椅子

	),
	Array(
		//礼包8 10000元
		Array(1032223, 1),         //最高级贝勒德耳环
		Array(1113075, 1),           // 最高级贝勒德戒指
		Array(1132246, 1),                    //	最高级贝勒德刻印腰带
		Array(1122267, 1),                    //最高级贝勒德刻印吊坠
		Array(2430761, 1),                    //特米纳斯自选武器箱
		Array(5064000, 20),                //防暴卷轴
		Array(2340000, 50),               //祝福卷轴
		Array(5062024, 50),     //闪炫
		Array(5390018, 50),             //赤马喇叭
		Array(5390010, 50),           //鬼出没喇叭
		Array(5390031, 20)     //超级英雄喇叭
	),
	Array(
		// 礼包9 15000元     
		Array(4001332, 3),      //紫色蜡笔
		Array(2435824, 8),           // V箱子
		Array(5062024, 50),     //闪炫 
		Array(5390018, 50),             //赤马喇叭
		Array(5390010, 50),           //鬼出没喇叭
		Array(5390031, 50),           //超级英雄喇叭
		Array(5064000, 20), //防暴卷轴
		Array(2340000, 50)//祝福卷轴 
	),
	Array(
		// 礼包10 20000元
		Array(2630133, 1, "神秘武器自选"), //神秘自选
		Array(5220040,1000),//冒险转蛋卷
		Array(5220040,1000),//冒险转蛋卷
		Array(5220040,1000),//冒险转蛋卷
		Array(5220040,1000),//冒险转蛋卷
		Array(5220040,1000),//冒险转蛋卷
		Array(2049116,100),//强混 
		Array(2049600,100),//还原 100
		Array(2614025,50),// 突破百万石头 50
		Array(5062024,50),//闪炫
		Array(4001839,10000),//星星 1W
		Array(3018050,1),//浮云鲸鱼椅子
		Array(3015996,1),//极限滑板椅子
		Array(3018112,1)

	),
	Array(
		// 礼包11 30000元
		Array(2436220, 1, "3W定制全属性700不包含攻击力透明眼饰") //神秘自选
		

	),
	Array(
		// 礼包12 40000元
		Array(2436221, 1, "4W定制全属性700包含攻击力透明脸饰") //神秘自选
		

	),
	Array(
		// 礼包13 50000元
		Array(2436222, 1, "5W定制888全属性+BOSS伤害88%时装耳环") //神秘自选
		

	),
	Array(
		// 礼包14
		Array(2436226, 2, "定制全属性333包含攻击力自选点装") //神秘自选
		

	),
	Array(
		// 礼包15
		Array(2436226, 2, "定制全属性333包含攻击力自选点装") //神秘自选
		

	),
	Array(
		// 礼包16
		Array(2436226, 3, "定制全属性333包含攻击力自选点装") //神秘自选
		

	),
	Array(
		// 礼包17
		Array(2436226, 3, "定制全属性333包含攻击力自选点装") //神秘自选
		

	),
	Array(
		// 礼包18
		Array(2436226, 3, "定制全属性333包含攻击力自选点装") //神秘自选
		

	)/*,
	Array(
		// 礼包19
		Array(4440101, 100, "提升功力材料"), 
		Array(4441101, 100, "提升功力材料"), 
		Array(4442101, 100, "提升功力材料"), 
		Array(4443101, 100, "提升功力材料"), 
		Array(4021030, 100, "提升功力材料"), 
		
		Array(4440001, 100, "提升功力材料"), 
		Array(4441001, 100, "提升功力材料"), 
		Array(4442001, 100, "提升功力材料"), 
		Array(4443001, 100, "提升功力材料"), 
		Array(4021030, 100, "提升功力材料")
		
	),
	Array(
		// 礼包20
		
		
		Array(4009457, 300, "功力突破材料"),
		Array(4009459, 300, "功力突破材料"),
		Array(4009456, 300, "功力突破材料"),
		Array(4009454, 300, "功力突破材料"),
		Array(4009455, 300, "功力突破材料"),
		
		Array(4440101, 200, "提升功力材料"), 
		Array(4441101, 200, "提升功力材料"), 
		Array(4442101, 200, "提升功力材料"), 
		Array(4443101, 200, "提升功力材料"), 
		Array(4021030, 200, "提升功力材料"), 
		
		Array(4440001, 200, "提升功力材料"), 
		Array(4441001, 200, "提升功力材料"), 
		Array(4442001, 200, "提升功力材料"), 
		Array(4443001, 200, "提升功力材料"), 
		Array(4021030, 200, "提升功力材料")
		
	)*/
	
);

var text;
var ljname;
var leiji;
var myLevel=0;

leiji = parseInt(getHyPay(2));

//识别会员等级操作
for(var i=0;i<vipLevel.length;i++){
	if(leiji>=vipLevel[i]){
		myLevel++;
	}else{
		break;
	}
}

while(1==1){
text = "\t\t\t" + tt + " #e累计充值礼包中心#k#n " + tt + "\r\n\r\n";
text +="#e#b当前VIP等级为: "+getLevel(leiji)+"  总充值： #r" + leiji + " #d元 \r\n";
/*
text +="#r#e#v3991021##v3990000#［银河自选副手箱］ \r\n";
text +="#v3991021##v3990001#［FFN自选武器箱x1］ \r\n";
text +="#v3991021##v3990002#［小暴君自选防具x3］\r\n";
text +="#v3991021##v3990003#［高级贝勒德套］ \r\n";
text +="#v3991021##v3990004#［独眼巨人之眼+X卷自选X10］\r\n";
text +="#v3991021##v3990005#［真红戒指，真红肩膀］ \r\n";
text +="#v3991021##v3990006#［大蜡笔X1 ，2000蜡笔抽奖卷］ \r\n";
text +="#v3991021##v3990007#［最高级贝勒德套装+自选特米武器］ \r\n";
text +="#v3991021##v3990008#［任选椅子X1+大蜡笔X3］。\r\n";
text +="#v3991021##v3990000##v3990009#［神秘之影自选武器+最高逼格椅子］\r\n";
text +="#b----------以下充值奖励需要联系GM在线领取--------#r\r\n";
text +="#e#r#v3991021##v3990000##v3990000#［700全属性不含攻击时装透明眼饰］\r\n";
text +="#e#v3991021##v3990000##v3990001#［700全属性含攻击力时装透明脸饰］\r\n";
text +="#e#v3991021##v3990000##v3990002#［888全属性+BOSS伤害88%时装耳环］\r\n#e";
*/
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var canSee=myLevel+3;
if(canSee>=vipLevel.length){
	canSee=vipLevel.length;
}

	for(var i = 0; i < canSee ; i++) {
		var count=getEventCount("累计充值礼包" + vipLevel[i]);
		if(count == 1) {
			txt = "[#r已领取#d]";
		} else {
			if(count == 0 && leiji>=vipLevel[i]){
				txt = "[#b待领取#d]";
			}else if(count == 0 && leiji<vipLevel[i]){
				txt = "[#g未达标#d]";
			}
			
		}
		text += "#d#L" + i + "#" + tt + txt + getLevel(vipLevel[i])+"福利 #r\t\t\t" + vipLevel[i] + "#l\r\n\r\n\r\n";

		
		//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
	}
	text += "#k";
	let selection = npc.askMenu(text);
	
	text = "\t\t\t#e#r- " + getLevel(vipLevel[selection]) + "福利 -#k#n\r\n\r\n";
	for(var i = 0; i < reward[selection].length; i++) {
		text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] ;
		
		text+=	"#[" + reward[selection][i][1] + "个]";
		if(reward[selection][i].length>2){
			if(selection>=9){
				text +="\r\n\t\t"
			}
			text+="[#r"+reward[selection][i][2]+"#k]\r\n";
		}else{
			text+="\r\n";
		}
	}
	text +="\r\n#r#e点‘ 是 ’ 确认领取，点‘ 否 ’可以返回上一层\r\n";
	let sel = npc.askYesNo(text);
	if(sel == 1) {
		if(getEventCount("累计充值礼包" + vipLevel[selection]) == 1) {
			npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
		} else if(leiji < vipLevel[selection]) {
			npc.say("累计金额未达标！");
		} else if(player.getFreeSlots(1) < 10 || player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
			npc.say("每个栏位至少要保持10个空位以上才能领取哦~");
		} else {

			for(var i = 0; i < reward[selection].length; i++) {
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
			setEventCount("累计充值礼包" + vipLevel[selection], 0, 1);
			npc.broadcastNotice("≡累计充值≡　　恭喜玩家 " + player.getName() + " 领取了累计充值 " + vipLevel[selection ] + " 元的福利礼包！！！");
		
			npc.say("领取成功");
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

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}