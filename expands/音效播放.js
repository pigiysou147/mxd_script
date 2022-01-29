let EventList = new Array(
        Array("gameover",'multiBingo/gameover'),
        Array("321go",'Sound/MiniGame.img/worldRPS/count1')
		
		);
let selStr = "";
for(var i = 0; i < EventList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + i + "##b" + EventList[i][0] + "#l";+ "\r\n\r\n";
}
let sel = npc.askMenu(selStr);
map.soundEffect(EventList[sel][1]);
map.soundEffect(EventList[sel][1]);
map.soundEffect(EventList[sel][1]);
map.soundEffect(EventList[sel][1]);
map.soundEffect(EventList[sel][1]);