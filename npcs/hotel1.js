/*
特色酒店
*/
var hotelList = Array(
	
	Array(910310530, "豪华总统套房（888万）", 8888888)
);
var map;
var need;
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

	var txt = "你好 这里是万达嘉华酒店 请选择你要入住的房型：\r\n\r\n";
	for(var i = 0; i < hotelList.length; i++) {
		txt += "#L" + i + "#" + z1 + "#r" + hotelList[i][1] + " #b   #r" + hotelList[i][2] + "#k金币#l\r\n";
	}
	let selection =npc.askMenu(txt);
	
	map = hotelList[selection][0];
	var name = hotelList[selection][1];
	need = hotelList[selection][2];
	
	var txt = "您选择的房间型号为： " + name + "\r\n";
	txt += " 将要花费你 " + need + "“金币”请确认是否要传送过去" ;
	let sel =npc.askYesNo(txt);
	if(sel==1){
		
	
		if(!player.hasMesos(need)  ) {
			npc.say("您的金币不足");
		} else {
			player.loseMesos(need);
			player.changeMap(map);
		}
}
	

