status = -1;
var itemList = Array(
//500 这一行 越小  几率就越小
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


        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            var item = player.gainGachaponItem("金币赌狗箱子",itemId, quantity,  notice);
            if (item != -1) {
				player.loseItem(npc.getItemId(), 1);
                npc.say("你获得了 #b#v" + itemId + "##k " + quantity + "个。");
            } else {
                npc.say("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
           
        } else {
            npc.say("今天的运气可真差，什么都没有拿到。");
            
        }