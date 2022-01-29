/*：
 脚本功能：武器箱子（转职赠送）
 */

if(player.getFreeSlots(1) >= 7 && player.getFreeSlots(2) >= 4 && player.getLevel() >= 10) {
	player.loseItem(npc.getItemId(), 1);
	Gift(player.getJob());
	npc.say("送给你道具请注意查收");
} else {
	npc.say("请您等级达到10级转职后再使用，10级送10级的，30级以后送30级的，70级以后送70的，100级以后送100级的 ，请到达等级后再使用.或者背包空间不足.");
}

function Gift(job) {
	switch(job) {
		case 100: //战士        
			player.gainItem(1302135, 1); //挑战之单手剑 - 10级
			player.gainItem(1312049, 1) //挑战之单手斧 - 10级
			player.gainItem(1322077, 1); //挑战之单手钝器 - 10级
			break;
		case 1100: //魂骑士
		case 5100: //米哈尔
			player.gainItem(1302135, 1); //挑战之单手剑 - 10级 
			break;
		
		case 5110:
			player.gainItem(1302138, 1); //挑战之单手剑 - 25级 
		break;
		case 5120:
			player.gainItem(1302141, 1); //挑战之单手剑 - 25级 
		break;
		
		case 110:
		case 1110:
		case 6110:
			player.gainItem(1402081, 1); //挑战之双手剑 - 25级 (无描述)
			break;
		case 1111:
		case 5111:
		case 111:
		case 6111:
			player.gainItem(1402084, 1); //挑战之双手剑 - 70级 (无描述)
			break;
		case 112:
		case 5112:
		case 1112:
		case 6112:
			player.gainItem(1402075, 1);
			break;
		case 120:
			player.gainItem(1402081, 1);
			player.gainItem(1412051, 1);
			break;
		case 121:
			player.gainItem(1402084, 1);
			player.gainItem(1412054, 1);
			break;
		case 122:
			player.gainItem(1422058, 1);
			break;
		case 130:
			player.gainItem(1432071, 1);
			player.gainItem(1442099, 1);
			break;
		case 131:
			player.gainItem(1432074, 1);
			break;
		case 132:
			player.gainItem(1432076, 1);
			break;
		case 1200:
		case 200:
			player.gainItem(1372043, 1);
			break;
		case 1210:
		case 210:
			player.gainItem(1382017, 1);
			break;
		case 1211:
		case 211:
			player.gainItem(1372069, 1);
			break;
		case 1212:
		case 212:
			player.gainItem(1382094, 1);
			break;
		case 220:
			player.gainItem(1382017, 1);
			break;
		case 221:
			player.gainItem(1372069, 1);
			break;
		case 222:
			player.gainItem(1382094, 1);
			break;
		case 230:
			player.gainItem(1382017, 1);
			break;
		case 231:
			player.gainItem(1372069, 1);
			break;
		case 232:
			player.gainItem(1382094, 1);
			break;
		case 1300:
		case 3300:
		case 300:
			player.gainItem(1452093, 1);
			player.gainItem(1462078, 1);
			player.gainItem(2060000, 1000); //弓矢
			player.gainItem(2061000, 1000); //弩矢
			break;
		case 1310:
		case 310:
			player.gainItem(1452096, 1);
			break;
		case 1311:
		case 311:
			player.gainItem(1452023, 1);
			break;
		case 1312:
		case 312:
			player.gainItem(1452101, 1);
			break;
		case 3310:
		case 320:
			player.gainItem(1462000, 1);
			break;
		case 3311:
		case 321:
			player.gainItem(1462008, 1);
			break;
		case 3312:
		case 322:
			player.gainItem(1462015, 1);
			break;
		case 1400:
		case 400:
			player.gainItem(1332063, 1); //短刀
			player.gainItem(1472061, 1); //拳套
			player.gainItem(2070000, 1); //海星标
			player.gainItem(2070000, 1); //海星标
			player.gainItem(2070000, 1); //海星标
			player.gainItem(2070000, 1); //海星标
			break;
		case 1410:
		case 410:
			player.gainItem(1472008, 1);
			break;
		case 1411:
		case 411:
			player.gainItem(1472037, 1);
			break;
		case 1412:
		case 412:
			player.gainItem(1472053, 1);
			break;
		case 420:
			player.gainItem(1332012, 1);
			break;
		case 421:
			player.gainItem(1332036, 1);
			break;
		case 422:
			player.gainItem(1332052, 1);
			break;
		case 430: //20
			player.gainItem(1342000, 1);
			player.gainItem(1332008, 1)
			break;
		case 431: //30
			player.gainItem(1342001, 1);
			player.gainItem(1332009, 1);
			break;
		case 432: //45
			player.gainItem(1342002, 1);
			player.gainItem(1332014, 1)
			break;
		case 433: //60
			player.gainItem(1342004, 1);
			player.gainItem(1332015, 1);
			break;
		case 434: //100
			player.gainItem(1342008, 1);
			player.gainItem(1332052, 1);
			break;
		case 1500:
			player.gainItem(1482066, 1)
			break;
		case 500:
			player.gainItem(1492066, 1);
			player.gainItem(1482066, 1);
			player.gainItem(2330000, 1000); //银子弹
			break;
		case 3500:
			player.gainItem(1492066, 1);
			break;
		case 1510:
			player.gainItem(1482069, 1); //奇袭指节
			break;
		case 510:
			player.gainItem(1492069, 1);
			break;
		case 1511:
			player.gainItem(1482072, 1); //奇袭指节
			break;
		case 511:
			player.gainItem(1492072, 1);
			break;
		case 1512:
			player.gainItem(1482074, 1); //奇袭指节
			break;
		case 512:
			player.gainItem(1492074, 1);
			break;
		case 3510:
			player.gainItem(1492069, 1);
			break;
		case 520:
			player.gainItem(1492069, 1);
			break;
		case 3511:
			player.gainItem(1492072, 1);
			break;
		case 521:
			player.gainItem(1492072, 1);
			break;
		case 3512:
			player.gainItem(1492074, 1);
			break;
		case 522:
			player.gainItem(1492074, 1)
			break; //冒险家、骑士团 机械师 豹弩游侠 部分完成
		case 508: //龙的传人
			player.gainItem(1492066, 1);
			player.gainItem(2330003, 1000); //银子弹
			break;
		case 570:
			player.gainItem(1492069, 1);
			break;
		case 571:
			player.gainItem(1492072, 1);
			break;
		case 572: //龙的传人结束
			player.gainItem(1492074, 1)
			break;
		case 2200: //龙神1
			player.gainItem(1372005, 1);
			break;
		case 2211: //龙神2
			player.gainItem(1372003, 1);
			break;
		case 2214: //龙神3
			player.gainItem(1372008, 1);
			break;
		case 2217: //龙神4
			player.gainItem(1372139, 1);
			break;
		case 2100:
			player.gainItem(1442096, 1);
			break;
		case 2110:
			player.gainItem(1442099, 1);
			break;
		case 2111:
			player.gainItem(1442102, 1);
			break;
		case 2112:
			player.gainItem(1442105, 1);
			break; //战神部分完成
		case 2300:
			player.gainItem(1522000, 1);
			player.gainItem(1352000, 1);
			break;
		case 2310:
			player.gainItem(1522004, 1);
			player.gainItem(1352001, 1);
			break;
		case 2311:
			player.gainItem(1522008, 1);
			player.gainItem(1352002, 1);
			break;
		case 2312:
			player.gainItem(1522012, 1);
			player.gainItem(1352003, 1);
			break; //双弩部分完成
		case 2400:
			player.gainItem(1362000, 1);
			player.gainItem(1352100, 1);
			break;
		case 2410:
			player.gainItem(1362005, 1);
			player.gainItem(1352101, 1);
			break;
		case 2411:
			player.gainItem(1362009, 1);
			player.gainItem(1352102, 1);
			break;
		case 2412:
			player.gainItem(1362013, 1);
			player.gainItem(1352103, 1);
			break; //幻影部分完成
		case 2700:
			player.gainItem(1212001, 1);
			player.gainItem(1352400, 1);
			break;
		case 2710:
			player.gainItem(1212002, 1);
			break;
		case 2711:
			player.gainItem(1212004, 1);
			break;
		case 2712:
			player.gainItem(1212007, 1);
			break; //TODO 夜光部分 自动穿戴宝珠
		case 3100: //恶魔猎手
			player.gainItem(1322122, 1);
			break;
		case 3110:
			player.gainItem(1322124, 1);
			break;
		case 3111:
			player.gainItem(1322126, 1);
			break;
		case 3112:
			player.gainItem(1322127, 1);
			break;
		case 3101:
			player.gainItem(1232001, 1); //白毛
			break;
		case 3120:
			player.gainItem(1232002, 1); //白毛
			break;
		case 3121:
			player.gainItem(1232004, 1); //白毛
			break;
		case 3122:
			player.gainItem(1232008, 1); //白毛
			break;
		case 3200: //唤灵法师
			player.gainItem(1382085, 1);
			break;
		case 3210:
			player.gainItem(1382088, 1);
			break;
		case 3211:
			player.gainItem(1382091, 1);
			break;
		case 3212:
			player.gainItem(1382094, 1);
			break;
		case 3600: //尖兵
			player.gainItem(1242001, 1);
			break;
		case 3610:
			player.gainItem(1242002, 1);
			break;
		case 3611:
			player.gainItem(1242004, 1);
			break;
		case 3612:
			player.gainItem(1242008, 1);
			break;
		case 3700: //爆破手
			player.gainItem(1582000, 1);
			player.gainItem(1353400, 1);
			break;
		case 3710:
			player.gainItem(1582001, 1);
			player.gainItem(1353401, 1);
			break;
		case 3711:
			player.gainItem(1582003, 1);
			player.gainItem(1353402, 1);
			break;
		case 3712:
			player.gainItem(1582007, 1);
			player.gainItem(1353403, 1);
			break;
		case 6100: //狂龙战士
			player.gainItem(1402177, 1);
			break;
		case 6500:
			player.gainItem(1222001, 1);
			break;
		case 6510:
			player.gainItem(1222002, 1);
			break;
		case 6511:
			player.gainItem(1222004, 1);
			break;
		case 6512:
			player.gainItem(1222008, 1);
			break;
		case 6400:
			player.gainItem(1272000, 1);
			player.gainItem(1353300, 1);
			break;
		case 6410:
			player.gainItem(1272001, 1);
			player.gainItem(1353301, 1);
			break;
		case 6411:
			player.gainItem(1272003, 1);
			player.gainItem(1353302, 1);
			break;
		case 6412:
			player.gainItem(1272007, 1);
			player.gainItem(1353303, 1);
			break;
		case 3101:
			player.gainItem(1232001, 1);
			break;
		case 3120:
			player.gainItem(1232002, 1);
			break;
		case 3121:
			player.gainItem(1232004, 1);
			break;
		case 3122:
			player.gainItem(1232008, 1);
			break;
		case 501: //火炮手
			player.gainItem(1532045, 1);
			break;
		case 530:
			player.gainItem(1532049, 1);
			break;
		case 531:
			player.gainItem(1532053, 1);
			break;
		case 532:
			player.gainItem(1532057, 1);
			break;
		case 2500:
			player.gainItem(1482066, 1);
			player.gainItem(1353100, 1);
			break;
		case 2510:
			player.gainItem(1482069, 1);
			player.gainItem(1353101, 1);
			break;
		case 2511:
			player.gainItem(1482072, 1);
			player.gainItem(1353102, 1);
			break;
		case 2512:
			player.gainItem(1482074, 1);
			player.gainItem(1353103, 1);
			break;
		case 4100: //剑豪 阿斗一转
			player.gainItem(1142490, 1);
			player.gainItem(1542049, 1);
			break;
		case 4110: //剑豪 阿斗二转
			player.gainItem(1142491, 1);
			player.gainItem(1003555, 1); //护额
			player.gainItem(1542050, 1);
			break;
		case 4111: //剑豪 阿斗三转
			player.gainItem(1142492, 1);
			player.gainItem(1542054, 1);
			player.gainItem(1003556, 1); //护额
			break;
		case 4112: //剑豪 阿斗四转
			player.gainItem(1142493, 1);
			player.gainItem(1542056, 1);
			player.gainItem(1003557, 1); //护额
			break;
		case 4200: //阴阳师
			player.gainItem(1142506, 1);
			player.gainItem(1552000, 1);
			player.gainItem(1003570, 1); //发带
			break;
		case 4210: //阴阳师
			player.gainItem(1142507, 1);
			player.gainItem(1003571, 1); //发带
			player.gainItem(1552002, 1);
			break;
		case 4211: //阴阳师
			player.gainItem(1142508, 1);
			player.gainItem(1552005, 1);
			player.gainItem(1003572, 1); //发呆
			break;
		case 4212: //阴阳师
			player.gainItem(1142509, 1);
			player.gainItem(1552009, 1);
			player.gainItem(1003573, 1); //护额
			break;
		case 14200: //超能力者 一转
			player.gainItem(1262000, 1);
			player.gainItem(1353200, 1);
			break;
		case 14210: //超能力者 二转
			player.gainItem(1262001, 1);
			player.gainItem(1353201, 1);
			break;
		case 14211: //超能力者 三转
			player.gainItem(1262003, 1);
			player.gainItem(1353202, 1);
			break;
		case 14212: //超能力者 4转
			player.gainItem(1262007, 1);
			player.gainItem(1353203, 1);
			break;
		case 14200: //超能力者 一转
			player.gainItem(1262000, 1);
			player.gainItem(1353200, 1);
			break;
		case 14210: //超能力者 二转
			player.gainItem(1262001, 1);
			player.gainItem(1353201, 1);
			break;
		case 14211: //超能力者 三转
			player.gainItem(1262003, 1);
			player.gainItem(1353202, 1);
			break;
		case 14212: //超能力者 4转
			player.gainItem(1262007, 1);
			player.gainItem(1353203, 1);
			break;
		case 15200: //超能力者 一转
			player.gainItem(1282000, 1);
			player.gainItem(1353500, 1);
			break;
		case 15210: //超能力者 二转
			player.gainItem(1282001, 1);
			player.gainItem(1353501, 1);
			break;
		case 15211: //超能力者 三转
			player.gainItem(1282003, 1);
			player.gainItem(1353502, 1);
			break;
		case 15212: //超能力者 4转
			player.gainItem(1282007, 1);
			player.gainItem(1353503, 1);
			break;
		case 15500:
			player.gainItem(1482066, 1);
			break;
		case 15510:
			player.gainItem(1482004, 1);
			break;
		case 15511:
			player.gainItem(1482072, 1);
			break;
		case 15512:
			player.gainItem(1482012, 1);
			break;
		case 301:
			player.gainItem(1592000, 1);
			break;
		case 330:
			player.gainItem(1592001, 1);
			break;
		case 331:
			player.gainItem(1592006, 1);
			break;
		case 331:
			player.gainItem(1592007, 1);
			break;
		case 16400://虎影 一转
            player.gainItem(1292001, 1);
            player.gainItem(1353800, 1);
            break;
        case 16410://虎影 二转
            player.gainItem(1292002, 1);
            player.gainItem(1353801, 1);
            break;
        case 16411://虎影 三转
            player.gainItem(1292003, 1);
            player.gainItem(1353802, 1);
            break;
        case 16412://虎影 4转
            player.gainItem(1292006, 1);
            player.gainItem(1353806, 1);
            break;	
			
	}
}