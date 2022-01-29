const isopenvip = false;
const icon = "#fEffect/CharacterEff/1082565/0/0#";
const icon1 = "#fUI/Gateway/WorldSelect/icon/0#";
const q = "#fUI/Basic/LevelNo/0#"; //[1]+1
const w = "#fUI/Basic/LevelNo/1#"; //[1]+1
const e = "#fUI/Basic/LevelNo/2#"; //[1]+1
const e1 = "#fUI/UIWindowBT/CharacterUI/CharacterInfo/BtStat/normal/0# ";
const e2 = "#fUI/UIWindow/Quest/icon8/0#";
const r = "#fUI/Basic/LevelNo/3#"; //[1]+1
const t = "#fUI/Basic/LevelNo/4#"; //[1]+1
const ct12 = "#fEffect/BasicEff/BornEmblem/0#";  //0
const ct13 = "#fEffect/BasicEff/BornEmblem/1#";  //1
const ct14 = "#fEffect/BasicEff/BornEmblem/2#";  //2
const ct15 = "#fEffect/BasicEff/BornEmblem/3#";  //3
const ct16 = "#fEffect/BasicEff/BornEmblem/4#";  //4
const ct17 = "#fEffect/BasicEff/BornEmblem/5#";  //5
const ct18 = "#fEffect/BasicEff/BornEmblem/6#";  //6
const ct19 = "#fEffect/BasicEff/BornEmblem/7#";  //7
const ct20 = "#fEffect/BasicEff/BornEmblem/8#";  //8
const ct21 = "#fEffect/BasicEff/BornEmblem/9#";  //9
const ct22 = "#fEffect/BasicEff/BornEmblem/10#";  //10
let ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
let ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
let ail = "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"
let ail1 = "#fUI/GuildMark/Mark/Etc/00009001/1#"
let ail2 = "#fUI/NameTag/188/e#"
let ail3 = "#fUI/NameTag/188/c#"
let ail4 = "#fUI/NameTag/188/w#"

const townmaps = [
	[101000000, "#e魔法密林"],
	[104000000, "明珠港"],
	[103000000, "废弃都市\r\n"],
	[102000000, "勇士部落"],
	[100000000, "射手村"],
	[800000000, "蘑菇神社\r\n"],
	[200000000, "天空之城"],
	[910001000, "匠人街"],
	[120000000, "诺特勒斯\r\n"],
	[105000000, "林中之城"],
	[220000000, "玩具城"],
	[600000000, "新叶都市\r\n"],
	[211000000, "冰封雪域"],
	[251000000, "百草堂"],
	[261000000, "玛加提亚\r\n"],
	[230000000, "水下世界"],
	[300000000, "阿尔泰"],
	[240000000, "神木村\r\n"],
	[260000000, "阿里安特"],
	[250000000, "武陵镇"],
	[130000000, "圣地\r\n"]
];
const monstermaps = [
	[50000, "绿水晶　  【 推荐Lv： 1  ≈  10  】"],
	[100010100, "花蘑菇　  【 推荐Lv： 1  ≈  10  】"],
	[103020310, "地铁线　  【 推荐Lv： 30 ≈  60  】"],
	[980001501, "军工厂　  【 推荐Lv： 30 ≈ 120  】"],
	[261010102, "研究所　  【 推荐Lv： 70 ≈  90  】"],
	[600020300, "机械蜘蛛  【 推荐Lv：100 ≈ 110  】"],
	[300010400, "石头山入口【 推荐Lv：100 ≈ 150  】"],
	[251010402, "海盗船　  【 推荐Lv：110 ≈ 150  】"],
	[273020000, "荒凉山丘  【 推荐Lv：190 ≈ 200  】"],
	[450005500, "五叉洞穴  【 推荐Lv：220 ≈ 250  】"]
];

const xxdt = [
	[273020000, "#v2431174# 用于：声望地图"],
	[261010102, "#v4000361# 用于: 制作新手装备"],
	[50000, "#v4000019# 用于：强化符号"],
	[221020701, "#v4000124# 用于：制作新手装备"],
	[211041500, "#v4000082# 用于：完成账号委托"],
	[104010100, "#v4000000##v4000016# 用于：强化图腾和符号"]

];


const lmaps = [
	[100020401, "僵尸蘑菇的巢穴"],
	[100020301, "蓝蘑菇王的巢穴"],
	[100020101, "蘑菇王的巢穴 "],
	[230040420, "皮亚奴斯洞穴"],
	[220080000, "时间塔的本源"],
	[240020402, "喷火龙栖息地"],
	[240020102, "格瑞芬的森林"],
	[703020000, "外星人底下钻探区"],
	[272020110, "阿卡伊勒祭坛前面"]
];//旅游地图部分
const LVmaps = [
	[911002100, "个人挂机图"],
	[940200219, "个人挂机图"],
	[940200203, "个人挂机图"],
	[940200201, "个人挂机图"],
	[749050502, "精灵钓鱼场"],
	[749050501, "梦幻王国钓鱼场"],
	[749050500, "外层空间钓鱼场"],
	[800000000, "蘑菇神社"],
	[500000000, "水上市场"],
	[940204115, "狐狸树"],
	[940204113, "狐神的宝座"],
	[970060600, "落石"],
	[104020111, "开往天空的船"],
	[921170016, "别人家"],
	[931050436, "仙山不详之雾"],
	[970060400, "食人鱼栖息地"],
	[140010110, "达人殿堂"],
	[706042000, "祝福山丘"],
	[230010201, "鲸鱼岛"],
	[230020201, "椰子树林"],
	[120040000, "金海滩度假村"]
];//旅游地图部分

const tiaotiaomaps = [
	[100000202, "射手跳跳"],
	[220000006, "玩具城跳跳"],
	[280020000, "火山的心脏"],
	[109040001, "共4阶段"],
	[910130000, "忍苦树林"],
	[109030001, "上楼找出口"],
	[109040001, "高地第1阶段"],
	[910360000, "地铁B1"],
	[910360100, "地铁B2"],
	[910360200, "地铁B3"]
];
const daqian = [
	[271030300, "骑士团３区"],
	[271030400, "骑士团４区"],
	[271030540, "骑士团５区"],
	[240020400, "寒冰半人马"]
];

const wuzhuanmaps = [
	[100000201, "弓箭手培训中心"],
	[400000001, "大神殿内部"],
	[105300000, "废弃营地"]
];//五转地图

let selects = 0;
let MapType = -1;

let selection;
selection = npc.askMenu("#L0#" + ct12 + "#e 城镇地图 #L1#" + ct12 + "#e 练级地图 #L4#" + ct12 + "#e BOSS传送#l\r\n\r\n#L20#" + ct12 + "#e 副本传送 #L21#" + ct12 + "#e 旅游地图 #L22#" + ct12 + "#e 豹子栖息\r\n\r\n#L23#" + ct12 + "#e 怪物公园 #L24#" + ct12 + "#e#r 材料地图 #L25#" + ct12 + "#e#k 组队中心#l#n#k\r\n\r\n#L5##e" + ct12 + " 美容美发#l #L3#" + ct12 + " 跳跳地图#k#l #L6#" + ct12 + " 家族中心#k#l\r\n\r\n#L7#" + ct12 + " 婚礼中心#k#l #L8#" + ct12 + " 百宝抽奖#k#l #L9#" + ct12 + " 娱乐中心#k#l\r\n\r\n\r\n")

let text = "#e请选择你要接连的地方：\r\n#d";
switch (selection) {
	case 0:
		for (var i = 0; i < townmaps.length; i++) {
			text += "#L" + i + "##k" + ail + townmaps[i][1];
		}
		MapType = 0
		needMoney = true;
		break;
	case 1:
		for (var i = 0; i < monstermaps.length; i++) {
			text += "#L" + i + "##k" + ail1 + " " + monstermaps[i][1] + "\r\n";
		}
		MapType = 1
		break;
	case 24:
		for (var i = 0; i < xxdt.length; i++) {
			text += "#L" + i + "##k" + xxdt[i][1] + "\r\n";
		}
		MapType = 24
		break;
	case 2:
		for (var i = 0; i < daqian.length; i++) {
			text += "#r#L" + i + "# " + icon + " " + " " + daqian[i][1] + "\r\n";
		}
		MapType = 2
		needMoney = true;
		break;
	case 3:
		for (var i = 0; i < tiaotiaomaps.length; i++) {
			text += "#L" + i + "# " + e1 + " #m" + tiaotiaomaps[i] + "# (" + tiaotiaomaps[i][1] + ")\r\n"
		}
		MapType = 3
		needMoney = true;
		break;
	case 4:
		// for (var i = 0; i < lmaps.length; i++) {
		// 	text += "#k#L" + i + "#" + ail2 + "" + "" + lmaps[i][1] + "\r\n";
		// }
		// MapType = 4
		// needMoney = true;
		player.runScript("wn_teleport_boss")
		break;
	case 10:
		for (var i = 0; i < wuzhuanmaps.length; i++) {
			text += "#r#L" + i + "# " + icon + " " + " " + wuzhuanmaps[i][1] + "\r\n";
		}
		MapType = 10
		needMoney = true;
		break;
	case 5://美容美发
		player.changeMap(100000104, 0);
		break;
	case 6:
		player.changeMap(200000301, 0);
		break;
	case 7:
		player.changeMap(620110000);
		break;
	case 8:
		player.changeMap(749050400);
		break;
	case 9:
		player.changeMap(809030000);//射手村游戏中心
		break;
	case 11:
		player.runScript("稻草人");
		break;
	case 20://副本传送
		player.runScript("副本传送");
		break;
	case 21://KILLTWO
		for (var i = 0; i < LVmaps.length; i++) {
			text += "#k#L" + i + "#" + ail2 + "" + "" + LVmaps[i][1] + "\r\n";
		}
		MapType = 21
		needMoney = true;
		break;
	case 22://豹子捕捉
		player.changeMap(931000500);
		break;
	case 23://怪物公园
		player.changeMap(951000000);
		break;
	case 25://组队中心
		player.changeMap(910002000);
		break;


}
if (MapType != -1) {
	selection = npc.askMenu(text);

	selects = selection;
	selection = npc.askYesNo("在这里的事情办完了吗？确定要去你像要去的地方了吗？");


	if (selection == 1) {


		if (!isopenvip) {
			if (!player.hasMesos(500)) {
				npc.say("对不起，你的金币不足。\r\n需要500金币才能进行。");
			} else {
				player.gainMesos(-500);
				switch (MapType) {
					case 0:
						player.changeMap(townmaps[selects][0]);
						break;
					case 1:
						player.changeMap(monstermaps[selects][0]);
						break;
					case 24:
						player.changeMap(xxdt[selects][0]);
						break;
					case 2:
						player.changeMap(daqian[selects][0]);
						break;
					case 3:
						player.changeMap(tiaotiaomaps[selects][0], 0);
						break;
					case 4:
						player.changeMap(lmaps[selects][0]);
						break;
					case 10:
						player.changeMap(wuzhuanmaps[selects][0]);
						break;
					case 21:
						player.changeMap(LVmaps[selects][0]);
						break;
				}
			}
		}
	}
}

