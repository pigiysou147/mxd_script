//寻宝箱子
var status = 0;
var psrw = Array(
        Array(2049130, 500, 1), //正义混沌卷40%
        Array(2049137, 500, 1), //惊人正义混沌卷40%
        Array(5062002, 550, 1),
        Array(5062002, 500, 2),
        Array(5062002, 450, 3),
        Array(5062002, 400, 5),
        Array(5062024, 310, 1),
        Array(5062024, 270, 2),
        Array(2340000, 380, 1),
        Array(2340000, 340, 2),
        Array(2340000, 300, 3),
        Array(2340000, 280, 5),
        Array(5064000, 210, 1),
        Array(5064000, 190, 2),
        Array(5064000, 170, 3),
        Array(5064000, 150, 5),
        Array(5062500, 550, 1),
        Array(5062500, 500, 2),
        Array(5062500, 450, 3),
        Array(5062500, 400, 5),
        Array(4001714, 500, 1),
        Array(4001784, 500, 1),
        Array(4001785, 500, 1),
        Array(4310143, 450, 5),
        Array(4310143, 400, 10),
        Array(4310143, 350, 15),
        Array(4310143, 300, 20),
        Array(1112915, 120, 1),
        Array(2048720, 100, 1), // - RED涅槃火焰
        Array(2048700, 250, 1), // - 涅槃火焰110级
        Array(2048701, 220, 1), // - 涅槃火焰120级
        Array(2048702, 200, 1), // - 涅槃火焰130级
        Array(2048703, 160, 1), // - 涅槃火焰140级
        Array(2048704, 120, 1), // - 涅槃火焰150级
        Array(2048725, 110, 1), // -涅槃火焰160级
        Array(2048724, 100, 1), //- 强大的涅槃火焰
        Array(2048721, 80, 1), //- 永远的涅槃火焰
        Array(3015002, 100, 1), //七彩摩天轮
        Array(1003422, 100, 1), //石榴石渡鸦面具
        Array(2430030, 500, 1), //黄金罗盘
        Array(3010832, 90, 1), //太阳椅子
        Array(1662027, 100, 1), //银河战士
        Array(2430354, 250, 1),
        Array(2430352, 250, 1),
        Array(2430348, 250, 1),
        Array(2430346, 250, 1),
        Array(2430343, 250, 1),
        Array(2430321, 250, 1),
        Array(5062400, 150, 1),
        Array(1662032, 100, 1), //女妖机器人
        Array(1672011, 120, 1), //永恒的白银心脏 等级要求：30
        Array(1672012, 120, 1), //永恒的钢铁心脏 等级要求：30
        Array(1672013, 120, 1), //永恒的朱矿心脏 等级要求：30
        Array(1672014, 120, 1), //永恒的黄金心脏 等级要求：30
        Array(1672015, 120, 1), //永恒的石榴石心脏 等级要求：30
        Array(1672016, 120, 1), //永恒的水晶心脏 等级要求：30
        Array(2028175, 100, 1), //宿命正义卷轴箱
        Array(5077000, 350, 7), //缤纷喇叭
        Array(5390003, 330, 7), //新年庆祝喇叭1
        Array(5390004, 320, 7), //新年庆祝喇叭2
        Array(5390007, 310, 7), //球进了!情景喇叭
        Array(5390008, 300, 7), //世界杯情景喇叭
        Array(5390010, 350, 7), //鬼出没情景喇叭
        Array(5390011, 200, 7), //钻石VIP专用喇叭
        Array(5390012, 350, 7), //黄金VIP专用喇叭
        Array(5390013, 200, 7), //白银VIP专用喇叭
        Array(5390018, 200, 7), //赤兔马情景喇叭
        Array(5390019, 200, 7), //新闻主播室情景喇叭
        Array(5390020, 200, 7), //我的演唱会情景喇叭
        Array(5390022, 200, 7) //追赶小羊的狼情景喇叭
        );
var psrw2 = Array(

        );

var rand = Math.floor(Math.random() * psrw.length);
var randList = Math.floor(Math.random() * 3);

        var chance = Math.floor(Math.random() * 570);
        var finalitem = Array();//psrw
        for (var i = 0; i < psrw.length; i++) {
            if (chance <= psrw[i][1] && chance + 300 >= psrw[i][1]) {
                finalitem.push(psrw[i]);
            }
        }
        var itemId = 2430030;
        var quantity = 1;
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            itemId = finalitem[finalchance][0];
            quantity = finalitem[finalchance][2];
        }
        if (player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
            npc.say("找到了宝藏！但是你要保证你背包的每一栏都有空位，请先整理一下吧。");

        }else{
			player.loseItem(npc.getItemId(),1);
			player.gainItem(itemId, quantity); //随机这个道具
			npc.broadcastPlayerNotice(0x18, "『每日寻宝』" + "[" +player.getName()+ "] 打开金利奇的黄金袋子获得了" + quantity + "个<" + getName(itemId) + ">, 大家快去寻宝吧！");
		}
function getName(itemid){
	var Item = player.makeItemWithId(itemid);
	if(Item==null){
		return null;
	}
	return Item.getName();
}