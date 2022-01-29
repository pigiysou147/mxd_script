var tittle = "執子之手、與子偕老［"+player.getName()+"］：";
var 公告 = "";
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"

	let str = "\t\t  " + dtb + " #fs15##e#rBeta專屬道具#n " + dtb + "\r\n#fs12#";
	str += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
			str += "#r#L1#文字廣播#l\r\n\r\n"
			str += "#r#L2#天氣廣播#l\r\n\r\n"
	let selected = npc.askMenu(str);

switch (selected){
	case 1://城鎮
		
		while(true){
			 公告 = npc.askTextS("#b親愛的#h #，感謝你贊助伺服器，這是你的專屬喇叭\r\n你目前的開頭為#r#e"+tittle+"\r\n#n#b請輸入您要說的話","",0,999);
			npc.broadcastPlayerNotice(12,tittle+公告);
				break;
				}
				break;
	case 2:
		while(true){
			公告 = npc.askTextS("#b親愛的#h #，感謝你贊助伺服器，這是你的專屬喇叭\r\n你目前的開頭為#r#e"+tittle+"\r\n#n#b請輸入您要說的話","",0,999);
			npc.broadcastWeatherEffectNotice(36,tittle + 公告,10000);
				break;
				}
		break;
}