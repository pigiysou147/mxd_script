status = -1;
var itemList = Array(
	Array(1143026, 500, 1, 1),//我也是设计师勋章
Array(3700440, 500, 1, 1),//外星人也吸冒险岛？
Array(1143026, 500, 1, 1),//我也是设计师勋章
Array(3700440, 500, 1, 1),//外星人也吸冒险岛？
Array(1113194, 500, 1, 1),//白色天堂戒指（狂风）
Array(1113193, 500, 1, 1),//白色天堂戒指（闪电）
Array(1113192, 500, 1, 1),//白色天堂戒指（白雪）
Array(1113191, 500, 1, 1),//白色天堂戒指（彩虹）
Array(1113190, 500, 1, 1),//白色天堂戒指（暴雨）
Array(1113189, 500, 1, 1),//白色天堂戒指（太阳）
Array(1672082, 50, 1, 1),//黑色心脏
Array(1672076, 50, 1, 1),//黑色心脏
Array(2614079, 500, 1, 1),//1000万极限突破石100%
Array(2614078, 500, 1, 1),//500万极限突破石100%
Array(2614069, 300, 1, 1),//5000万极限突破石100%
Array(2614068, 350, 1, 1),//3000万极限突破石100%
Array(2430761, 200, 1, 1),//传说武器箱子
Array(2630627, 100, 1, 1),//神秘防具自选箱
Array(2630626, 100, 1, 1),//神秘武器自选箱
Array(3700506, 500, 1, 1),//变异的顶点
Array(3018242, 500, 1, 1),//夜店万圣节椅子：骷髅
Array(3018315, 500, 1, 1),//糯叽叽的花年糕椅子
Array(3018179, 500, 1, 1),//精灵屋
Array(3700506, 500, 1, 1),//变异的顶点
Array(3018242, 500, 1, 1),//夜店万圣节椅子：骷髅
Array(3018315, 500, 1, 1),//糯叽叽的花年糕椅子
Array(3018179, 500, 1, 1),//精灵屋
Array(4001332, 300, 1, 1),//紫色蜡笔
Array(4001331, 500, 1, 1),//蓝色蜡笔
Array(4001330, 500, 1, 1),//青色蜡笔
Array(4001329, 500, 1, 1),//绿色蜡笔
Array(4001328, 500, 1, 1),//黄色蜡笔
Array(4001327, 500, 1, 1),//橙色蜡笔
Array(4001326, 500, 1, 1),//红色蜡笔
Array(1012632, 50, 1, 1),//失控机械标记
Array(1022278, 50, 1, 1),//蕴藏魔力的眼罩
Array(1122430, 50, 1, 1),//痛苦根源
Array(1132308, 50, 1, 1),//梦幻腰带
Array(1113306, 50, 1, 1),//巨大恐惧戒指
Array(1032316, 50, 1, 1),//船长姿态耳环
Array(1202193, 200, 1, 1),//轮回碑石\r\n
Array(1182136, 600, 1, 1),//MX-131徽章
Array(1672069, 200, 1, 1),//女武神之心
Array(1162035, 800, 1, 1),//校长织田徽章
Array(1122296, 500, 1, 1),//死神的项链
Array(1202262, 900, 1, 1),//青铜香炉图腾
Array(1202261, 900, 1, 1),//玉壶图腾
Array(1202260, 900, 1, 1),//骑马像图腾
Array(2432069, 300, 1, 1),//暴君防具交换券
Array(3992025, 800, 10, 1),//圣诞大星
Array(2049610, 800, 5, 1),//还原不可以交易 成功率100%
Array(2049389, 600, 1, 1),//星之力20星强化券
Array(2049387, 800, 1, 1),//星之力18星强化券
Array(2049389, 600, 1, 1),//星之力20星强化券
Array(2049387, 800, 1, 1),//星之力18星强化券
Array(2432206, 500, 1, 1),//玫瑰花园箱子
Array(2435824, 500, 1, 1),//V箱子
Array(2430675, 500, 1, 1),//贪婪箱子
Array(2430675, 500, 1, 1),//贪婪箱子
Array(2435824, 500, 1, 1),//V箱子
Array(2431142, 500, 1, 1),//第一季箱子
Array(2431142, 500, 1, 1)//第一季箱子
);
weightList = [];

function getRewardItemId() {
	var itemId = 0;
	var quantity = 0;
	var notice = 0;
	var result = [];

	var t = -1,
		r = 0;
	for(var i = 0; i < itemList.length; i++) {
		var weight = itemList[i][1];
		var k = Math.log(Math.random()) / weight;
		if(k > t) {
			t = k;
			r = i;
		}
	}
	itemId = itemList[r][0];
	quantity = itemList[r][2];
	notice = itemList[r][3];
	itemList[r][4] = itemList[r][4] + 1;
	result.push(itemId, quantity, notice);
	return result;
}

let selection =npc.askMenuS("#L0#抽5次");
if(selection == 0) {
	var text ="";
	var txt="";
	for(var i = 0; i <= 4; i++) {
		var result = getRewardItemId();
		var itemId = result[0];
		var quantity = result[1];
		var notice = result[2];
		var name =player.makeItemWithId(itemId).getItemName();
		text+="你获得了 #v" + itemId + "# #r"+"#t" + itemId + "# #r"+" #k X #b"+quantity+"#k。\r\n";
		player.dropMessage(10, "恭喜你获得了 "+name+"  X1");
		
	} 
	npc.say(text);
}
/**
 * 返回一个大于等于a，小于b的整数
 */
function rand(a, b) {
	var re = ~~(Math.random() * (b - a)) + a;
	//cm.playerMessage(-5,re);
	return re;
}
/**
 * 返回以10为底数的a的对数
 */
function log10(a) {
	return Math.log(a) / Math.log(10)
}