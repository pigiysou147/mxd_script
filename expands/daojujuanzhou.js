/* 点卷商店 - 洗能力
Array(2702001,1,2000,""),
Array(2702001,10,20000,""),
 */

var itemList = Array(
	//Array(2436274, 1, 3000, "200经验药水"),//金锤子
	//Array(2432205, 1, 3000, "250经验药水"),//金锤子
	//Array(2432205, 1, 3000, "250经验药水"),//金锤子
	
	// Array(3014009, 1, 1, "黑板道具"),//金锤子
	// Array(3014009, 1, 1, "黑板道具"),//金锤子
	// Array(5370000, 1, 1, "黑板道具"),//金锤子
	
	//Array(2431996, 1, 1, "内测礼包"),//金锤子
	Array(5130002 , 1, 1, "护身符。带着死亡不进入惩罚"),//
	Array(5130003 , 1, 1, "护身符。使用消除死亡惩罚"),//
	
	Array(2432805 , 1, 100000, "武器外形还原"),//
	Array(5550000 , 1, 10000, "永久项链扩充"),//
	Array(2434780 , 1, 1000000, "魅力精通秘药"),//
	Array(2434779, 1, 1000000, "感性精通秘药"),  
	Array(2434778, 1, 1000000, "手技精通秘药"),  
	Array(2434777, 1, 1000000, "意志精通秘药"),                 
	Array(2434776, 1, 1000000, "洞察力精通秘药"),  
	Array(2434775, 1, 1000000, "领导力精通秘药"),  

	//Array(4001083, 1, 30000, ""),//扎昆的象征
	Array(5062026, 1, 2000, ""),//金锤子
	
	Array(5510000, 1, 10000, ""),//金锤子
	Array(5570000, 1, 3000, ""),//金锤子
	//Array(5064000, 1, 3000, ""),//防爆卷轴
	Array(5062400, 1, 5000, ""),//神奇铁砧
	Array(5743003, 1, 300, ""),//怪怪方块
	Array(5062024, 1, 3000, ""),//闪炫魔方
	Array(2340000, 1, 3000, ""),//祝福卷轴
	//Array(5520000, 1, 1500, ""),//宿命剪刀
	Array(5192000, 1, 2000, ""),//宠物训练箱
	Array(5133000, 1, 1000, ""),//超级复活药水
	Array(5062801, 1, 1000, ""),//神奇还原器
	Array(2702001, 1, 1000, ""),//神奇还原器
	Array(5150040, 1, 300, ""),//皇家理发卷
	Array(5152053, 1, 300, ""),//皇家整容卷
    Array(2432946, 1, 10000, "发色混合"),//星星
    Array(5152301, 1, 10000, "瞳孔混合"),//星星
	
	Array(5062009, 1, 100, ""),//超级神奇魔方
	Array(5062500, 1, 500, ""),//大师附加神奇魔方
	Array(5044011, 1, 8000, ""),//冒险岛任意门
	Array(5511001, 1, 3000, ""),//复仇女神的水
	Array(5064003, 1, 2000, ""),//极真保护之盾
	Array(5840004, 1, 500, ""),//怪怪卡牌包钥匙
	Array(2049717, 1, 3500, ""),//A级潜能卷轴
	Array(4330023, 1, 66666, "货币钱包哦~"),//货币钱包
	Array(2590015, 1, 100000, "上灵魂必须品"),//A级潜能卷轴
	
	//Array(2049323, 1, 8888, "无损坏概率"),//高级装备强化卷
	Array(2049419, 1, 5000, "直接3主潜能不会炸！强烈推荐"), //古卷
	Array(2048306, 1, 3500, "直接3附加潜能不会炸！强烈推荐"),//特殊附加
	Array(2049509, 1, 1000, ""),//金色刻印的印章
	Array(2048300, 1, 1000, ""),//银光潜能附加印章
	Array(2434780, 1, 50000, "魅力等级满"),//魅力药水
	Array(4032933,1,1000,"口袋任务"),
	Array(5250504, 1, 88888, "中式婚礼"),
	Array(5250503, 1, 88888, "日式婚礼"),
	Array(5250502, 1, 88888, "美式婚礼"),
	Array(2501001, 1, 1, ""),//能力点初始化卷轴
	Array(2500002, 1, 1, ""),//技能点初始化卷轴
	Array(2049025, 1, 10000, ""),//白衣卷轴
	Array(4080010, 1, 88888, ""),//玩具熊猫/玩具粉熊五子棋套
	Array(5190001, 1, 500, ""),//自动服用HP
	Array(5190010, 1, 500, ""),//宠物自动加BUFF技能
	Array(5190004, 1, 500, ""),//捡起无所有权道具&金币技能
	Array(5192000, 1, 500, ""),//宠物训练箱
	Array(5190011, 1, 500, ""),//宠物训练箱
	//Array(5689000, 1, 500, "复活宠物"),//宠物训练箱
	Array(4080100, 1, 500, "小游戏"),//宠物训练箱
    Array(4001839, 1, 5, "星星"),//星星
    Array(2610001, 1, 5, "解封卷"),//星星
    Array(2610002, 1, 5, "解封卷"),//星星
    Array(2610003, 1, 5, "解封卷"),//星星
    Array(2610004, 1, 5, "解封卷"),//星星
	Array(4001008, 1, 1, "废弃通行证"),//废弃通行证
	Array(2439292, 1, 8000, "神秘徽章自选箱")
);
var selectedItem = -1;
var selequantity = -1;
var selectedCost = -1;
var epp1 = "#fEffect/ItemEff.img/2022109/1#"; //彩光
var epp2 = "#fEffect/ItemEff.img/2022109/2#"; //彩光
var selStr = "       #v3801199#\r\n请选择您希望购买的道具：";
for(var i = 0; i < itemList.length; i++) {
	selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k x " + itemList[i][1] + "  #r" + itemList[i][2] + "#k点卷 #r " + itemList[i][3] + "#l";
}
let selection = npc.askMenuS(selStr);

var item = itemList[selection];

	selectedItem = item[0];
	selequantity = item[1];
	selectedCost = item[2];

	var maxNumber=3000;
	if(4001839==selectedItem)
	maxNumber=9999;
	let sel = npc.askNumberS("你选择的商品为#b#v" + selectedItem + "#售价为：" + selectedCost + "点卷/张\r\n请输入你购买的数量", 1, 1, maxNumber);
	//cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷？");


if(player.getCashShopCurrency(1) >= (sel * selectedCost)) {
	if(player.canGainItem(selectedItem, sel)) {
		if(5550000==selectedItem){
			player.setQuestData(122700,String(new Date().getTime() + 30*24*60*60*1000));
			npc.say("拓展成功，你的项链位置永久打开了哦~请小退之后在查看哦");
		}else{
			var flag =player.gainGachaponItem("百货中心",selectedItem, sel,1);
			if(flag){
				player.modifyCashShopCurrency(1, -(selectedCost * sel));
				npc.say("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + sel + ") 。");
			}else{
				npc.say("请清理背包哦~");
			}
		}
		
		
		//npc.broadcastGachaponMsgEx("『点卷商城』 " + player.getName() + " 玩家在点卷商城购买道具： #v" + selectedItem + "# x " + selection);
		
	} else {
		npc.say("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
	}
} else {
	npc.say("您没有那么多点卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 点卷。");
}