/**
* 消耗一個道具， 可以給指定裝備有幾率增加一次砸卷剩余次數  QQ:739977676 
**/
var Icon = Array(
		Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
		Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
		Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
		Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
		Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
		Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
		Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
		Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
		Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
		Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
		Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
		Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
		Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
		Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
		Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
		Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
		Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
		Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
		Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
		Array("钻石", "#fUI/NameTag/medal/556/w#"),
		Array("钻石", "#fUI/NameTag/medal/556/c#"),
		Array("钻石", "#fUI/NameTag/medal/556/e#"),
		Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
		Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
		Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
		Array("拇指", "#fUI/NameTag/medal/10/w#"),
		Array("拇指", "#fUI/NameTag/medal/10/c#"),
		Array("拇指", "#fUI/NameTag/medal/10/e#"),
		Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
		Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
		Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
		Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
		Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
		Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
		Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
		Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
		Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
		Array("金菇", "#fUI/NameTag/medal/74/w#"),
		Array("金菇", "#fUI/NameTag/medal/74/c#"),
		Array("金菇", "#fUI/NameTag/medal/74/e#"),
		Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
		Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
		Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
		Array("胡子", "#fUI/NameTag/124/w#"),
		Array("胡子", "#fUI/NameTag/124/c#"),
		Array("胡子", "#fUI/NameTag/124/e#"),
		Array("帽子", "#fUI/NameTag/nick/312/w#"),
		Array("帽子", "#fUI/NameTag/nick/312/c#"),
		Array("帽子", "#fUI/NameTag/nick/312/e#"),
		Array("圣诞", "#fUI/NameTag/medal/728/w#"),
		Array("圣诞", "#fUI/NameTag/medal/728/c#"),
		Array("圣诞", "#fUI/NameTag/medal/728/e#"),
		Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
		Array("王冠", "#fUI/NameTag/medal/468/w#"),
		Array("王冠", "#fUI/NameTag/medal/468/c#"),
		Array("王冠", "#fUI/NameTag/medal/468/e#"),
		Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#"),
		Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
		Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/0#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/1#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/2#"),
		Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/3#"),
		Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
		Array("开始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
		Array("猫咪", "#fUI/NameTag/190/w#"),
		Array("猫咪", "#fUI/NameTag/190/c#"),
		Array("猫咪", "#fUI/NameTag/190/e#"),
		Array("蝗虫", "#fUI/NameTag/188/w#"),
		Array("蝗虫", "#fUI/NameTag/188/c#"),
		Array("蝗虫", "#fUI/NameTag/188/e#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/0#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/1#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/2#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/3#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/4#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/5#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/6#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/7#"),
		Array("外星人", "#fEffect/ItemEff/1102875/effect/walk1/3#"),
		Array("翅膀", "#fEffect/ItemEff/1102511/effect/ladder/0#"),
		Array("金人", "#fEffect/ItemEff/1102616/effect/stabO1/5#")
		);
let eff1 = "#fEffect/CharacterEff/1112924/0/0#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
let eff3 = "#fEffect/CharacterEff/1112924/0/0#";
//這裡面放可以使用本系統的裝備代碼
let ItemListWQ = Array(
    1212120,
    1222113,
    1232113,
    1242121,
    1242122,
    1262039,
    1272017,
    1282017,
    1302343,
    1312203,
    1322255,
    1332279,
    1342104,
    1362140,
    1372228,
    1382265,
    1402259,
    1412181,
    1422189,
    1432218,
    1442274,
    1452257,
    1462243,
    1472265,
    1482221,
    1492235,
    1522143,
    1532150,
    1582023,
    1542117,
    1552119,
    1252098
);
let equipState = false; //是否限制只有以上裝備才可以使用？ true=是 false=否
let chance = 100; //幾率 100%算
let needItem = 4000038;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";



let str  = "　" + Icon[92][1] + "#b#e　　 歡迎光臨裝備升捲中心#k#n　　" + Icon[92][1] + "\r\n\r\n";
str += head + "#e\t\t#v4000038#提交#t4000038#可進行衝捲數提升！#k#n\r\n\r\n";
str += "#r#e請注意 裝備升到+120 以上 帳號會異常#n#k\r\n"

let YN = npc.askYesNo(str);

let toDrop = player.getInventorySlot(1, 1);
if(toDrop == null){
	npc.say("請將您需要打造的裝備放到第一格！");
}else{
	let type = -1;
	if(ItemListWQ.indexOf(toDrop.getDataId()) != -1){
		type = 1;
	}
	if(equipState && type == -1){
		let ss="#b當前不支持該裝備。目前只支持以下裝備\r\n#r\r\n"
		for(let i = 0; i< ItemListWQ.length;i++){
			ss += "#v"+ItemListWQ[i]+"# "
		}
		npc.say(ss);
	}else{
		if(player.hasItem(needItem,1)){
			player.loseItem(needItem,1);
			let ran = Math.random() * 100;
			if(ran < chance){
				toDrop.setRUC(toDrop.getRUC() + 1);
				player.updateItem(1, toDrop);
				npc.say("恭喜你，提升成功!")
			}else{
				npc.say("真遺憾，提升失敗!")
			}
				
		}else{
			npc.say("你沒有#v"+needItem+"#")
		}
	}
}



