var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow/Minigame/Common/mark#";
var sl1 = 0; //兑换数量

// player.setInGameCurNodeEventEnd(true);
// player.setInGameDirectionMode(true, false, false, false);

////player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);

//player.setLayerBlind(true, 200, 0, 0, 0, 1300, 0); 
////npc.setDelay(1000);



  


var daan = "抵制外挂";

var text = "#e#d#r欢迎来到【回忆岛 】，先来了解一下本服的特色#r \r\n\r\n";
	text+="· 本服为仿官无技改模式，一定要了解群文件的究极萌新攻略.作为起航.\r\n\r\n";
	text+="· 本服为仿官服设置 不会像变态服那样 必定长久好玩 经验50倍 金币3倍 爆率5倍\r\n\r\n";
	text+="· 本服一定要详细了解背包栏里面的拍卖功能卷#v2432022#哦.这是让您各类方便性的功能玩法.\r\n\r\n";
	//text+="· 萌新入岛还可以在群内找群主或者管理员GM领取CDK大礼包一份.诚意满满哦~#k\r\n\r\n";
	
	npc.sayNext(text);
	text="· #b本服可氪可肝可休闲,适合各类玩法玩家.人气在线火爆,GM24小时在线解决任何问题.\r\n\r\n";
	text+="· 本服绝对禁止外挂, 按键精灵类脚本.这类封号基本上是永封.本服有自动检测系统,还望注意.\r\n\r\n";
	text+="· 转错职选错职业请不用担心,可以免费转职三次,拍卖功能-综合功能选择,拿到CDK礼包选错FFN武器也不用怕.免费换成天然自选FFN武器.有事可以请教GM哦.\r\n\r\n";
	text+=	"如果已阅以上内容. 请输入答案：【抵制外挂】进入冒险岛。";
	npc.sayNext(text);

	//player.setInGameDirectionMode(false, true, false, false);

	
	let txt=npc.askText("请输入红字#r抵制外挂#k 进入回忆岛哦 。\r\n#b广告进来的请私聊在线管理员要CDK礼包，直播进来的可以找对应的主播领取哦。，并非变态服哦。本服是彷官长久服。寻宝武器可以放心的砸突破，有免费转移的功能哦~。","", 5, 20);
	if(txt==daan && player.getPQLog("新手驾到")<4){
		//player.addPQLog("新手驾到")
		player.gainItem(2432022, 1); //运营员箱子 此处下面可添加想赠送的道具。
		player.gainItem(2430241, 1);
		//player.gainItem(2430607, 1);
		player.gainItem(2432068, 1);
		//player.gainItem(2430154, 1);
		
		//3天套装赠送
		// if(player.getPQLog("新手租赁")==0){
		// 	player.addPQLog("新手租赁",1,999);
		// 	player.gainItem(2430497,1);
		// 	player.gainItem(2430503,3);
		// 	player.gainItem(2430504,3);
		// 	player.gainItem(2430505,3);
		// }
		
		
		
		player.gainItem(4310088, 300);
		player.gainMesos(1000000);
		//player.gainItemPeriod(5000483, 1, 60 * 60 * 60 * 24 * 30 * 1000);
		player.changeMap(910000000);
		player.addPQLog("新手驾到",1,999);
		

		var name = player.customSqlResult("SELECT name FROM accounts where id = ?", player.getAccountId()).get(0).get("name");
		var isExist=false;
		var sql = "select pay from hypay  where accname = ? ";

		var result = player.customSqlResult(sql, name);

		if(result.size() > 0) {
			if(result.get(0).get("pay") != null) {
				isExist = true;
			}
		}
		if(!isExist) { //不存在这条记录，就添加一条
			var sql = "INSERT INTO hypay (accountid,accname,pay,leiji,today) values (?,?,0,0,0) ";
			
			player.customSqlInsert(sql, player.getAccountId(), name);
			// sql = "INSERT INTO hypay_copy (accountid,accname,pay,leiji,today) values (?,?,0,0,0) ";
			
			// player.customSqlInsert(sql, player.getAccountId(), name);
		}

		npc.say("恭喜您通过了测试，请尽情享受乐趣吧。");
		npc.broadcastNotice( "『萌新到来』：玩家 【" + player.getName() + "】 bomm的一声进入到了回忆岛，大家一起热烈欢迎他(她)吧!");
	
	} else {
		
		npc.say("#d答案错误。请重新输入。正确答案是：#r" + daan + "#d,请确认一下重新输入。#b或者您已经领取过新手礼包了。");
		
	}
		
		


