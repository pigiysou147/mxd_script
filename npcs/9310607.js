/*     
 *  
 *  
 *  功能:Custom Draw Chair
 *  
 *  @author NautMS 
 */

/* global cm */

var status = -1;
var psrw = Array(
	Array(3015573, 1),//DJ吉姆的打碟台
	Array(3014014, 1),//射手村演出照
	Array(3014015, 1),//废弃
	Array(3014016, 1),//阿里
	Array(3014017, 1),//时间神殿
	Array(3014018, 1),//林中之城
	Array(3015604, 1),//音乐盛典DJ皮亚
	Array(3015605, 1),//音乐盛典DJ
	Array(3015606, 1),//音乐盛典DJ
	Array(3015607, 1),//音乐盛典DJ
	Array(3015608, 1),//音乐盛典DJ
	Array(3015609, 1),//音乐盛典DJ
	Array(3015597, 1),//蘑菇神社赏月椅子
	Array(3015598, 1),//蘑菇神社蝉yu椅子
	Array(3015599, 1),//消防车椅子
	Array(3015600, 1),//努力的生意人椅子
	Array(3015619, 1),//草莓城主椅子
	Array(3015621, 1),////蘑菇神社赏花椅子
	Array(3015623, 1),//银光满月椅子
	Array(3010151, 1),//无人岛椅子
	Array(3015580, 1),//凉爽沙滩排球椅
	Array(3015581, 1),//水枪体验椅子
	Array(3015579, 1),//水流喷射推进器座椅
	Array(3010795, 1),//森林中休息处椅子
	Array(3010063, 1),//月亮星星抱枕椅
	Array(3010415, 1),//熟睡鸭子椅
	Array(3010700, 1),//大黄鸭椅子
	Array(3010755, 1),//小丫丫坐便器椅子
	Array(3015482, 1),//沉睡的鸭子椅子
	Array(3010181, 1),//MP椅子
	Array(3015155, 1),//火焰之斯乌椅子
	Array(3010286, 1),//诺特勒斯椅子
	Array(3010194, 1),//野营篝火椅子
	Array(3015440, 1),//钱多多椅子
	Array(3015585, 1),//极光白雪人椅子
	Array(3015181, 1),//仲夏夜之梦椅子
	Array(3015236, 1),//粉色蛙漂流椅子
	Array(3015263, 1),//黄色蛙漂流椅子
	Array(3015272, 1),//紫色蛙漂流椅子
	Array(3010462, 1),//罗曼蒂克天文台
	Array(3015262, 1),//满月清辉椅子
	Array(3015300, 1),//人鱼的珊瑚礁
	Array(3015248, 1),//孤独旅行者椅子
	Array(3015552, 1),//悬挂的景观灯泡椅子
	Array(3015329, 1),//妖怪坛椅子
	Array(3015341, 1),//黑猫房车
	Array(3015328, 1),//冒险岛电动缆车椅子
	Array(3010225, 1),//品克缤椅子
	Array(3010279, 1),//鬼节南瓜椅子
	Array(3010528, 1),//跑步机椅子
	Array(3010543, 1),//魔力品克缤
	Array(3010592, 1),//布莱克缤椅子
	Array(3010591, 1),//漫画书椅子
	Array(3010682, 1),//天文台椅子
	Array(3010824, 1),//水星椅子
	Array(3010825, 1),//金星椅子
	Array(3010826, 1),//地球椅子
	Array(3010827, 1),//火星椅子
	Array(3010828, 1),//木星椅子
	Array(3010829, 1),//土星椅子
	Array(3010830, 1),//天王星椅子
	Array(3010831, 1),//海王星椅子
	Array(3010879, 1),//繁星椅子
	Array(3015096, 1),//羊羊幻想牧场椅子
	Array(3015130, 1),//土豪婴儿推车
	Array(3015349, 1),//青蛙摇摇机椅子
	Array(3015448, 1),//解除怨恨椅子
	Array(3015015, 1),//白羊座椅子
	Array(3015016, 1),//金牛座椅子
	Array(3015017, 1),//双鱼座椅子
	Array(3015018, 1),//双子座椅子
	Array(3015019, 1),//巨蟹座椅子
	Array(3015020, 1),//狮子座椅子
	Array(3015021, 1),//天秤座椅子
	Array(3015022, 1),//天蝎座椅子
	Array(3015023, 1),//处女座椅子
	Array(3015024, 1),//射手座椅子
	Array(3015025, 1),//山羊座椅子
	Array(3015026, 1),//水瓶座椅子
	Array(3015302, 1),//安德洛墨达椅子
	Array(3015193, 1),//被驯服的鲸鱼椅子
	Array(3015468, 1),//超越石椅子
	Array(3010670, 1),//绝对指环椅子
	Array(3014011, 1),//MVP钻石椅子
	Array(3015437, 1),//被吞没的世界椅子
	Array(3015447, 1),//怪物捕捉椅子
	Array(3010070, 1),//巨无霸品克缤
	Array(3015354, 1),//冒险岛微博椅子
	Array(3012026, 1),//旋转花茶杯情侣椅子
	Array(3016101, 1),//怪物水晶球秋千椅
	Array(3015316, 1),//突击！伊莉娜乐队椅子
	Array(3012024, 1), //沙滩排球椅子
	Array(3015574, 1),//阿布拉克萨斯椅子
	Array(3015036, 1),//圣诞节椅子
	Array(3015002, 1),//七彩摩天轮椅子
	Array(3018125, 1),// 彩虹宝丽来相机椅
	Array(3018111, 1),// 舰长维加来了！椅子
	Array(3018086, 1),// 魔神的王座
	Array(3018091, 1),// 快枪手椅子
	Array(3018085, 1),// 哇喔喔，滑下楼梯椅子
	Array(3018084, 1),// 周末就要陷在沙发里
	Array(3018083, 1),// 圣代宇宙椅子
	Array(3018088, 1),// 禁止靠近！椅子
	Array(3018074, 1),// 黄金树
	Array(3018073, 1),// 精灵的旋律之椅
	Array(3018072, 1),// 月光玻璃杯
	Array(3018051, 1),// 蘑菇藏身椅子
	Array(3018068, 1),// 光速椅子
	Array(3018066, 1),// OH！我的妆！
	Array(3018065, 1),// 猫猫场记板椅子
	Array(3018053, 1),// 蘑菇旋转椅子
	Array(3018052, 1),// 集装箱咖啡厅椅子
	Array(3018050, 1),// 浮云鲸鱼椅子
	Array(3018047, 1),// 神圣鸟的守护
	Array(3018040, 1),// 无人椅
	Array(3018039, 1),// 宝岛的金蘑菇
	Array(3018028, 1),// 古代守护兵椅子
	Array(3018027, 1),// 校车椅子
	Array(3018026, 1),// 都市怪兽椅子
	Array(3018025, 1),// 嗨皮2018椅子
	Array(3018024, 1),// 祈福黄金钟椅子
	Array(3018014, 1),// 冬日森林椅子
	Array(3018008, 1),// 银装素裹椅子
	Array(3018003, 1),// 海狮雪屋椅子
	Array(3018002, 1),// 非你莫属
	Array(3017055, 1),// 生肖猪方块椅
	Array(3017054, 1),// 生肖狗方块椅
	Array(3017053, 1),// 生肖鸡方块椅
	Array(3017052, 1),// 生肖猴方块椅
	Array(3017051, 1),// 生肖羊方块椅
	Array(3017050, 1),// 生肖马方块椅
	Array(3017049, 1),// 生肖蛇方块椅
	Array(3017048, 1),// 生肖龙方块椅
	Array(3017047, 1),// 生肖兔方块椅
	Array(3017046, 1),// 生肖虎方块椅
	Array(3017045, 1),// 生肖牛方块椅
	Array(3017044, 1),// 生肖鼠方块椅
	Array(3017043, 1),// 野猫魔方椅子
	Array(3017042, 1),// 蓝色水灵方块椅子
	Array(3017041, 1),// 紫色水灵方块椅子
	Array(3017040, 1),// 红色水灵方块椅子
	Array(3017039, 1),// 橙色水灵方块椅子
	Array(3017038, 1),// 黄色水灵方块椅子
	Array(3017037, 1),// 绿色水灵方块椅子
	Array(3017033, 1),// 桃乐丝魔方椅子
	Array(3017032, 1),// 喵咪魔方椅子
	Array(3017031, 1),// 南瓜魔方椅子
	Array(3017030, 1),// 德古拉魔方椅子
	Array(3017029, 1),// 僵尸魔方椅子
	Array(3017028, 1),// 骷髅魔方椅子
	Array(3017027, 1),// 熟透的卢斯狼游泳圈椅子
	Array(3017025, 1),// 2016中秋节方块椅子 - 快乐
	Array(3017024, 1),// 2016中秋节方块椅子 - 祝大家
	Array(3017023, 1),// 2016中秋节方块椅子 - 中秋节
	Array(3017022, 1),// 红蝙蝠魔方椅子
	Array(3017021, 1),// 2016中秋节方块椅子 - 2016
	Array(3017020, 1),//YEAR魔方椅子
	Array(3017019, 1),// NEW魔方椅子
	Array(3017018, 1),// HAPPY魔方椅子
	Array(3017017, 1),// 猴子椅子
	Array(3017016, 1),// 英雄魔方椅子-龙神
	Array(3017015, 1),// 英雄魔方椅子-夜光法师
	Array(3017014, 1),// 英雄魔方椅子-双弩精灵
	Array(3016104, 1),// 跳跳木马椅子
	Array(3016100, 1),// 青春乐队！大家的演唱会 
	Array(3015999, 1),// 流浪玩偶剧场
	Array(3015998, 1),// 雪山缆车椅子
Array(3015996, 1),// 极限滑板椅子
Array(3015995, 1),// 头脑测试椅
Array(3015993, 1),// 蜘蛛网霓虹灯
Array(3015991, 1),// 木质浴缸温泉椅
Array(3015990, 1),// 小小冒险岛星球椅
Array(3015989, 1),// 平衡喵椅子 
Array(3015986, 1),// 淑女青鸟花园
Array(3015985, 1),// 少女的枕头大战
Array(3015984, 1),// 凉爽沙滩排球椅
Array(3015983, 1),// 魅惑九尾狐
Array(3015982, 1),// 降灵术毛莫
Array(3015976, 1),// 主人公椅子
Array(3015974, 1),// 戒指大师椅
Array(3015972, 1),// 小树滑冰椅子
Array(3015971, 1),// 雪兔椅子
Array(3015970, 1),// 水晶驯鹿椅
Array(3015969, 1),// 大波斯菊椅子
Array(3015965, 1),// 胡子先森椅
Array(3015961, 1),// 香蕉椅
Array(3015960, 1),// 秋季之湖椅子
Array(3015937, 1),// 森林小屋椅子
Array(3015936, 1),// 阿尔卡那精灵椅子
Array(3015932, 1),// 被水枪击中！椅子
Array(3015931, 1),// 切奇卡片椅子
Array(3015930, 1),// 豹弩游侠卡片椅子
Array(3015929, 1),// 唤灵斗师卡片椅子
Array(3015928, 1),// 爆破手卡片椅子
Array(3015927, 1),// 奥兹卡片椅子
Array(3015919, 1),// 学院水晶椅子
Array(3015911, 1),// 炸裂吧！间歇泉
Array(3015903, 1),// 黑暗万圣节椅子
Array(3015896, 1),// 冰水滴答椅子
Array(3015886, 1),// 在树上摇摇欲坠
Array(3015880, 1),// 海岸秋千椅
Array(3015879, 1),// 目标!在床上玩
Array(3015873, 1),// 西瓜天堂椅子
Array(3015853, 1),// 不想睡觉椅子
Array(3015842, 1),// 宇宙光线枪椅子
Array(3015841, 1),// 蝶儿飞椅子
Array(3015779, 1),// 记忆之树椅子
Array(3015762, 1),// BEYOND椅子
Array(3015760, 1),// 新年森林晚会椅子
Array(3015758, 1),// 灵兽盛宴椅
Array(3015051, 1),//巨无霸国际巨星
Array(3010832, 1),//太阳椅子
Array(3018181, 1),//守护之夜椅子
Array(3018182, 1),//喵星许愿瓶椅子
Array(3018183, 1),//哦吼春天恋爱的酸臭味 椅子
Array(3018202, 1),//欢乐相框椅子
Array(3018198, 1),//梅花月影
Array(3018192, 1),//晃悠鸟窝椅
Array(3018190, 1),//星光闪耀椅子
Array(3018188, 1),//热恋冰霜白雪人椅子
Array(3018139, 1),//尾随盯梢椅子
Array(3018136, 1),//极光篝火椅子
Array(3018133, 1),//夏日绿豆冰椅子
Array(3018132, 1),//夏日巧克力冰椅子
Array(3018131, 1),//夏日西瓜冰椅子
Array(3018130, 1),//夏日草莓冰椅子
Array(3018115, 1),//溜溜波波球椅子
Array(3010044, 1)//同一红伞下

        );
var rand = Math.floor(Math.random() * psrw.length);

var selection;



       selection = npc.askYesNo("#e你好?欢迎来到幻想椅子抽奖！\r\n#v3015969##v3015965##v3015961##v3015960##v3015937##v3015936##v3015932##v3015931##v3015930##v3015929##v3015928##v3015927##v3015919##v3015911##v3015903##v3015896##v3015886##v3015880##v3015879##v3015873##v3015853##v3015842##v3015841##v3015779##v3015762##v3015760##v3015758##v3015051##v3010832##v3018181##v3018182##v3018183##v3018202##v3018198##v3018192##v3018190##v3018188##v3018139##v3018136##v3018133##v3018132##v3018131##v3018130##v3018115##v3010044#\r\n#b点击确定即可抽取，每次消耗5万点券\r\n");

        if (selection == 1) {
            var itemID = psrw[rand][0];
            var number = psrw[rand][1];
            if (player.getCashShopCurrency(1) < 50000) {
                npc.say("你没有50000点券");
            } else if (!player.canGainItem(itemID, number)) {
                npc.say("你保证你背包有足够空位.");
            } else {
				var item;
				item = player.gainGachaponItem("理财椅子抽奖", itemID, number, 13);
                player.modifyCashShopCurrency(1, -50000); //减少1个使用的情迷道具
				npc.broadcastWeatherEffectNotice(203,"天呐~这位土豪"+ player.getName() + "  抽取了" + getName(itemID) + "",60000);
                npc.say("获取了 " + "#v" + itemID + "#" + "#z" + itemID + "# " + number + "个");
            }
        }




function getName(itemid){
	var Item = player.makeItemWithId(itemid);
	if(Item==null){
		return null;
	}
	return Item.getName();
}