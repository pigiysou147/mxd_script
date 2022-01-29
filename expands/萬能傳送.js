/**
* 传送-QQ:739977676
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"

let town = Array("#r城鎮地圖",
		//地区ID
		Array("明珠港", 104000000),
		Array("射手村", 100000000),
		Array("魔法密林", 101000000),
		Array("勇士部落", 102000000),
		Array("廢棄都市", 103000000),
		Array("泰國(水上市場)", 500000000),
		Array("上海", 701100000),
		Array("昭和村", 801000000),
		Array("諾特勒斯碼頭", 120000000),
		Array("林中之城", 105000000),
		Array("天空之城", 200000000),
		Array("冰峰雪域", 211000000),
		Array("水下世界", 230000000),
		Array("玩具城", 220000000),
		Array("武陵", 250000000),
		Array("阿裡安特", 260000000),
		Array("新葉都市市中心", 600000000),
		Array("神木村", 240000000),
		Array("瑪加提亞", 261000000),
		Array("地球防禦本部", 221000000),
		Array("百草堂", 251000000),
		Array("阿勒泰營地", 300000000),
		Array("三個門", 270000000),
		Array("磨菇神社", 800000000),
		Array("聖地", 130000000),
		Array("拉客蘭市中心", 450003000),
		Array("埃德爾斯坦", 310000000)
	);
let level = Array("#b練級地圖",
		//地区ID
		Array("#b危險森林#r(適合1-10等)", 50000),
		Array("#b石人寺院3#r(適合10-30等)", 100040300),
		Array("#b1號線第2區間#r(適合30-60等)", 103020310),
		Array("#b寂靜的濕地#r(適合50-75)", 105010000),
		Array("#b螞蟻洞2#r(適合60-80等)", 105010301),
		Array("#b狼蜘蛛洞穴#r(適合80-100)", 600020300),
		Array("#b石頭山入口#r(適合90-110)", 300010400),
		Array("#b森林岔道#r(適合90-120)", 240010400),
		Array("#b外星基地走廊6#r(適合90-120)", 610040230),
		Array("#b紅鼻子海盜團老巢#r(適合100-155)", 251010402),
		Array("#b勘探現場西邊道路 1#r(適合150-170)", 240090100),
		Array("#b勘探現場西邊道路 2#r(適合150-170)", 240090200),
		Array("#b外星人佔領第B區1#r(適合155-200等)", 703002000),
		Array("#b天際線1#r(適合200-210等)", 310070210),
		Array("#b靈魂之域(已修正會掉ARC)#r(適合200-210等)", 450001114),
		Array("#b啾啾森林深處(已修正會掉ARC)#r(適合210-220等)", 450002010),
		Array("#b原形畢露之地3(已修正會掉ARC)#r(適合220-230等)", 450003420),
		Array("#b五岔洞穴(已修正會掉ARC)#r(適合220-240等)", 450005500),
		Array("#b通往珊瑚林的路4(已修正會掉ARC)#r(適合230~250等)", 450006030),
		Array("#b鏡澄之海4(已修正會掉ARC)#r(適合235~250等)", 450007130)
	);
let 素材 = Array("#r素材地圖",
		//地区ID
		Array("刷楓幣地圖   外星人佔領第B區", 703002000),
		Array("點卷掉落地圖 外星基地走廊6", 610040230),
		Array("翅膀素材地圖 小道1", 104010100)
		//Array("魯碧安寶石  下部左側樹枝",105300101),
		//Array("心燈  苔癬樹叢入口",300010000)
		//Array("點裝進化素材 廢都塔所有區域", 103041119),
		//Array("瑪瑙戒指1-2階材料 神殿入口", 105030100),
		//Array("瑪瑙戒指2-3階材料 天空樓梯Ｉ", 200010200),
		//Array("瑪瑙戒指3-4階材料 仙人掌沙漠", 260010200),
		//Array("瑪瑙戒指3-4階材料 熾熱的沙漠", 260010400),
		//Array("瑪瑙項鍊1-2階材料 哼唱小道", 100020100),
		//Array("瑪瑙項鍊2-3階材料 漂漂豬海岸", 120000400),
		//Array("瑪瑙項鍊3-4階材料 雲彩公園Ⅰ", 200010000),
		//Array("瑪瑙項鍊4-5階材料 蟠桃果林", 250010500),
		//Array("瑪瑙項鍊4-5階材料 久老的濕地", 251010400),
		//Array("瑪瑙項鍊5-6階材料 龍的峽穀", 240040000),
		//Array("瑪瑙項鍊5-6階材料 主巢穴山峰", 240040600),
		//Array("瑪瑙項鍊6-7階材料 騎士團第1區域", 271030100),
		//Array("瑪瑙項鍊6-7階材料 騎士團第2區域", 271030200),
		//Array("瑪瑙項鍊6-7階材料 騎士團第3區域", 271030300),
		//Array("瑪瑙項鍊7-8階材料 灰風高原", 273030300),
		//Array("瑪瑙項鍊7-8階材料 崎嶇荒野", 273060100),
		//Array("瑪瑙項鍊7-8階材料 破壞的射手村市場", 271010100)
	);
let other = Array("#r其他地圖",
		//地区ID
		Array("#r轉蛋地圖",993050400),
		Array("#r抓豹地圖",931000500)
		//Array("#r忍耐地圖",280020000)
	);
	
let str = "\t\t  " + dtb + " #fs15##e#r萬　能　傳　送#n " + dtb + "\r\n#fs12#";
	str += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
			str += "\t\t\t\t\t\t#e#d地圖傳送#n#b\r\n"
			//str += "#L999##r組隊中心#b#l#L998##r婚禮中心#b#l#L997##r家族任務#l#L7#轉蛋地圖\r\n\r\n"
			str += "#b#L1#城鎮地區#l#L2#練級地區#l#L3#素材地區#l#L4#魔王傳送#l\r\n\r\n"
			str += "#r#L5#轉蛋地圖#l#L6#抓豹地圖#l#L7#瑪瑙材料#l#L8#拍照地圖#l\r\n\r\n"
			str += "#r#L9#公會領地#b#L10#活動地圖#l#l#L11#月光素材#l#L12#三武素材\r\n\r\n"
	let selected = npc.askMenu(str);

var text = "#b請選擇你要去的地方:"
switch (selected){
	case 1://城鎮
		for(let i = 1; i<town.length;i++){
		text += "\r\n#r#L"+i+"#"+town[i][0]+"#l"
		}
		let seleted1 = npc.askMenu(text);
		player.changeMap(town[seleted1][1]);
		break;
	case 2://練級
		for(let i = 1; i<level.length;i++){
		text += "\r\n#r#L"+i+"#"+level[i][0]+"#l"
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(level[seleted1][1]);
		break;
	case 3://素材
		for(let i = 1; i<素材.length;i++){
		text += "\r\n#r#L"+i+"#"+素材[i][0]+"#l"
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(素材[seleted1][1]);
		break;
	case 4:
		player.runScript("魔王傳送")
		break;
	case 5:
		player.changeMap(993050400);
		break;
	case 6:
		player.changeMap(931000500);
		break;
	case 7:
		player.runScript("瑪瑙地圖")
		break;
	case 8:
		player.changeMap(910000018);
		break;
	case 9:
		player.runScript("公會地圖")
		break;
	case 10:
			player.changeMap(130000101);
			break;
	case 11:
			player.runScript("月光寵素材地圖")
			break;
	case 12:
			player.runScript("三武素材")
			break;
}
