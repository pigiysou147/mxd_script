/* Joyce
	Event NPC
*/

var status = -1;
var eff = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"; //红星
var yun9 = "#fEffect/ItemEff/1112811/0/0#";
var tz12 = "#fUI/piggyBarMinigame.img/crunch/3#"; //黄星

var kkkbak1 = "#fMap/MapHelper.img/weather/rose/0#"; ////美化2
var bk1 = "#fEffect/ItemEff.img/1004532/effect/default/4#"
var bk2 = "#fEffect/ItemEff.img/1004475/effect/jump/0#"
var bk3 = "#fEffect/ItemEff.img/1004435/effect/alert/0#"
var bk4 = "#fEffect/ItemEff.img/1004477/effect/prone/1#"
var bk5 = "#fEffect/ItemEff.img/1004436/effect/default/3#"
var bk6 = "#fEffect/ItemEff.img/1004437/effect/walk1/0#"
var sg1 = "#fEffect/ItemEff.img/2022109/1#"
var sg2 = "#fEffect/ItemEff.img/2022109/2#"
var zx = "#fEffect/ItemEff.img/1003492/effect/default/1#"
var lj = "#fEffect/ItemEff.img/1003493/effect/default/1#"
var dq = "#fEffect/ItemEff.img/1003494/effect/default/1#"
var ye = "#fEffect/ItemEff.img/1003495/effect/default/0#"
var fg = "#fEffect/ItemEff.img/1004124/effect/ladder/1#"
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var xtb1 = "#fEffect/CharacterEff.img/1003249/0/0#" //第一排
var xtb2 = "#fEffect/CharacterEff.img/1003249/1/0#" //第二排
var xtb3 = "#fEffect/CharacterEff.img/1003252/0/0#" //第三排
var xtb4 = "#fEffect/CharacterEff.img/1112900/3/1#" //第四排
var zzz = "#fUI/UIWindowGL.img/FeedbackSystem/backgrnd3#"
var 黄星 = "#fEffect/CharacterEff/1112924/0/0#"
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#"
var hii = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"
var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var a2 = "#fEffect/ItemEff/1070069/effect/walk1/1#"
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"
var a5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"
var a6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"
var a7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"
var a8 = "#fEffect/ItemEff/1070069/effect/walk1/7#"
//城镇传送
var maps = Array(
	Array(100000104, "美 发 店"),
	Array(100000000, "射 手 村"),
	Array(500000000, "泰国市场"),

	Array(910001000, "匠 人 街"),
	Array(800000000, "日本神社"),
	Array(101000000, "魔法密林"),

	Array(104000000, "明 珠 港"),
	Array(220000000, "玩 具 城"),
	Array(102000000, "勇士部落"),

	Array(103000000, "废弃都市"),
	Array(120000000, "诺特勒斯"),
	Array(105000000, "林中之城"),

	Array(200000000, "天空之城"),
	Array(211000000, "冰封雪域"),
	Array(230000000, "水下世界"),

	Array(224000000, "童话村庄"),
	Array(701100000, "魔都上海"),
	Array(250000000, "武 陵 园"),

	Array(701210000, "嵩山少林"),
	Array(260000000, "阿里安特"),
	Array(600000000, "新叶都市"),

	Array(240000000, "神 木 村"),
	Array(261000000, "玛加提亚"),
	Array(221000000, "地球本部"),

	Array(251000000, "百 草 堂"),
	Array(300000000, "艾琳森林"),
	Array(270000000, "时间神殿"),

	Array(130000000, "女皇圣地"),
	Array(310000000, "埃德斯坦"),
	Array(931000500, "抓 豹 子")
);
//练级地图
var monstermaps = Array(
	Array(104020110, 0,"六一围殴蝙蝠魔传送口#k"),
	Array(50000, 0,"适合#e #r10 级 - 15级#k"),
	Array(221020701, 0,"适合 #r#e10 级 - 15级 泡泡鱼怪物上下各一只必掉内存卡#k"),
    //Array(921170001, "#k10.3号在线传送纪念图#k"),
    Array(100010100, 0, "适合 #r#e10 级 - 15级  #k"),
    Array(101020100, 0, "适合 #r#e10 级 - 30 级  刷雪花币材料#k"),
    Array(104010100, 0, "适合 #r#e10 级 - 20 级 #k 蜗牛壳材料出处    "),
    Array(102030400, 0, "适合 #r#e20 级 - 40 级 #k 火野猪"),
    Array(102030000, 0, "适合 #r#e30 级 - 50 级 #k 野猪"),
	Array(103020420, 0, "适合 #r#e40 级 - 70 级 #k 地铁黑幽灵"),
    Array(600020300, 0, "适合 #r#e70 级 - 90 级 #k 狼蜘蛛"),
    Array(300010400, 0, "适合 #r#e100级 - 110级 #k 巨型野猪"),
    Array(100040300, 0, "适合 #r#e刷材料#r 的图装备制作材料徐锦江的火石头  "),
    Array(211060900, 0, "适合 #r#e刷材料#r 的图装备制作材料王大锤的锤子  "),
    Array(271010400, 0, "适合 #r#e刷材料#r 的图装备制作材料脖子肉  "),
    Array(220060201, 0, "适合 #r#e刷材料#r 的图装备制作材料发动机  "),
    Array(251010402, 0, "适合 #r#e120级 - 150级 #k刷材料荣誉+正义火种1"),
    Array(273020000, 0, "适合 #r#e150级 - 200级 #k刷传说枫叶+星岩箱子图"),
    Array(211041700, 0, "适合 #r#e200级 - 220级 #k刷金币,僵尸的金齿材料"),
	Array(310070490, 0, "适合 #r#e220级 - 230级 #k刷咒语痕迹材料"),
    Array(105300101, 0, "适合 #r#e220级 - 230级 #k刷最高级物品结晶材料"),
    Array(450005500,  0,"适合 #r#e220级 - 230级 #k刷黑色羽毛,金币,升级"),
    Array(450003500, 0, "适合 #r#e200级 - 255级 #k"),
    Array(450003200,  0,"适合 #r#e200级 - 255级 #k"),
    Array(450005431,  0,"适合 #r#e230级 - 275级 #k刷黑色羽毛,金币,升级")
);
//跳跳地图
var tiaotiaomaps = Array(
	Array(100000202, 0, "#r宠物公园                    「射手跳跳」#b"),
	Array(220000006, 0, "#r宠物训练                    「玩具跳跳」#b"),
	Array(910360002, 0, "第一区域                    「 地铁b1」"),
	Array(910360102, 0, "第一区域                    「 地铁b2」"),
	Array(910360203, 0, "第一区域                    「 地铁b3」"),
	Array(109040001, 0, " 向高地                      <第1阶段> "),
	Array(910130000, 0, "忍苦树林                     <第1阶段> "),
	Array(109030001, 0, "上楼上楼                     <第1阶段> "),
	Array(280020000, 0, "火山心脏                     <火山的心脏>")
);
var selectionectedMap = -1;
var selectionectedArea = -1;

var txt = "  #e             #r【万能传送中心】#k\r\n\r\n";
txt += "#L0#" + tz12 + "#r城镇传送#k#l\t\t\t";

txt += "#L1#" + tz12 + "#r快速练级#k#l \r\n\r\n";
txt += "\t\t#L8#" + tz12 + "#v3994060##v3994073##v3994077##v3994077##l \r\n\r\n";
txt += "#L2#" + tz12 + "#r【家族中心】#k#l\t\t";
txt += "#L3#" + tz12 + "#r【跳跳地图】#k#l\r\n\r\n";
//txt += "#L4#" + tz12 + "#r【野外BOSS】#k#b#l\t\t";
txt += "#L7#" + tz12 + "#r【结婚地图】#k#b#l\t\t\r\n\r\n";
//txt += "#L9#" + tz12 + "#r    【活动地图(跑旗赛,猜音乐等)】#k#b#l\r\n\r\n";
txt += "#L6#" + tz12 + "#r    【材料地图(符号、星星、羽毛)】#k#b#l\r\n\r\n";
txt += "  ";
let selection = npc.askMenuS(txt);

var selectionStr = "请选择您的目的地: #b\r\n";

if(selection == 0 || selection == 1 || selection == 6) {

	if(selection == 0) {
		var j = 2;
		for(var i = 0; i < maps.length; i++) {

			selectionStr += "#L" + i + "#" + tz12 + maps[i][1] + " #l";

			if(i == j || i == j + 3) {
				selectionStr += "\r\n";
				j += 3;
			} else {
				selectionStr += "";
			}

		}
	} else if(selection == 1) {
		//练级地图
		
		var lq2 ="#fUI/UIWindow2.img/WorldMap/HyperTeleport/BtOK/pressed/0#  #e"
		for(var i = 0; i < monstermaps.length; i++) {
			selectionStr += "#L" + i + "#" + lq2 + monstermaps[i][2] + "#l\r\n\r\n";

		}
	} else if(selection == 6) {

		selectionStr += "\r\n#L1000# #v1190407# ,[#b黄金枫叶#k] - #m450002302##l\r\n\r\n";
		selectionStr += "#L1001# #v4001839# ,[#g刷星星#k] - #m701103030##l\r\n";
		selectionStr += "#L1002# #v4036313# ,[#g刷金币地图#k] - #l\r\n\r\n";
		selectionStr += "#L1003# #v4001006# ,[#r刷羽毛#k] -   #m410000041##l\r\n";
		selectionStr += "#L1004# #v4021016# ,[#r最高结晶#k] - #m105300101##l\r\n";
	}

	selectionectedArea = selection;

	selection = npc.askMenuS(selectionStr);

	if(selection == 1000 || selection == 1001 || selection == 1002 || selection == 1003 || selection == 1004) {
		selectionectedArea = selection;
	}
	selectionectedMap = selection;
	if(selection==1002){
		player.changeMap(211041700);
		// var text ="   ------------#r刷金币专区#k-------------\r\n";
		// text += "#L0# #v4001839# ,[#r快速刷金币地图#k] - #m211041700##l\r\n";
		// text += "#L1# #v4036313# ,[#b高级刷金币地图,需要一定实力#k] - #m450012440##l\r\n\r\n";
		// let sel=npc.askMenu(text);
		// if(sel==0){
		// 	player.changeMap(211041700);
		// }else{
		// 	player.changeMap(450012440);
		// }
		//萌新刷金币 402000509
		

		//大神刷金币 
	}else{
		let yes = npc.askYesNoS("看来这里的事情都已经处理完了啊。您真的要移动吗？" );
		if(yes > 0) {
			if(selectionectedMap >= 0) {
				if(selectionectedArea == 0) {

					player.changeMap(maps[selectionectedMap][0]);
				} else if(selectionectedArea == 3) {

					player.changeMap(tiaotiaomaps[selectionectedMap][0]);
				} else if(selectionectedArea == 1000) {

					player.changeMap(450002302, 0);
				} else if(selectionectedArea == 1001) {

					player.changeMap(701103030, 0);
				} else if(selectionectedArea == 1002) {
					
					


					

					
				} else if(selectionectedArea == 1003) {

					player.changeMap(410000041, 0);
				} else if(selectionectedArea == 1004) {

					player.changeMap(105300101, 0);

				} else {
					
						player.changeMap(monstermaps[selectionectedMap][0], 0);

					

				}
			}

		}
	}
	
} else {
	if(selection == 2) {
		player.changeMap(200000301, 0);

	} else if(selection == 3) {

		player.runScript("jump");

	} else if(selection == 4) {
		player.runScript("野外boss");
	} else if(selection == 5) {

		player.runScript("mPark01");

	} else if(selection == 7) {
		player.changeMap(620110000, 0);

	} else if(selection == 8) {

		player.runScript("BOSSwarp");

	} else if(selection == 9) {

		player.runScript("huodong");

	}
}