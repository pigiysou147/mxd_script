/**
* 传送-QQ:739977676
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"

let 戒指 = Array("#b瑪瑙戒指素材地圖",
		//地区ID
		Array("#r【每階用】#v4001024#", 105300101),
		Array("#r【每階用】#v4000385#", 300010000),
		Array("#r【升２階】#v4000000#", 104010100),
		Array("#r【升２階】#v4000016#", 104010100),
		Array("#r【升３階】#v4000002#", 120000400),
		Array("#r【升３階】#v4000622#", 120000400),
		Array("#r【升４階】#v4000035#", 103020310),
		Array("#r【升４階】#v4000036#", 103020310),
		Array("#r【升５階】#v4000111#", 220020600),
		Array("#r【升５階】#v4000112#", 220020600),
		Array("#r【升６階】#v4000711#", 400030400),
		Array("#r【升６階】#v4000712#", 400010400),
		Array("#r【升７階】#v4000727#", 401030400),
		Array("#r【升７階】#v4000728#", 401030400),
		Array("#r【升７階】#v4000731#", 401030500),
		Array("#r【升８階】#v4000379#", 402000120),
		Array("#r【升８階】#v4000380#", 402000121),
		Array("#r【升８階】#v4000382#", 402000122),
		Array("#r【升８階】#v4000383#", 402000123)
		//Array("#b【黑企鵝王的嘴】#v4000057#", 211040000),
		//Array("#r【出入証】#v4000363#", 261020401),
		//Array("#b【閃光的幽靈石】#v4000729#", 401040200),
		//Array("#r【潘桃核】#v4000282#", 250010500),
		//Array("#b【天鹿的角】#v4000288#", 250010500)
	);
//let 項鍊 = Array("#b瑪瑙戒指素材地圖",
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
	//);
	
let str = "\t\t  " + dtb + " #fs15##e#r素　材　傳　送#n " + dtb + "\r\n#fs12#";
	str += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
			//str += "#L999##r組隊中心#b#l#L998##r婚禮中心#b#l#L997##r家族任務#l#L7#轉蛋地圖\r\n\r\n"
			str += "#b#L1#三武素材地圖#l\r\n\r\n#l"
	let selected = npc.askMenu(str);

var text = "#b請選擇你要去的地方:"
switch (selected){
	case 1://城鎮
		for(let i = 1; i<戒指.length;i++){
		text += "\r\n#L"+i+"#"+戒指[i][0]+"#l"
		}
		let seleted1 = npc.askMenu(text);
		player.changeMap(戒指[seleted1][1]);
		break;
	case 2://練級
		for(let i = 1; i<項鍊.length;i++){
		text += "\r\n#r#L"+i+"#"+項鍊[i][0]+"#l"
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(項鍊[seleted1][1]);
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
		player.runScript("裝備附魔")
		break;
}
