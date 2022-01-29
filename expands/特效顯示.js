let EventList = new Array(
        Array("顯示錯誤",'quest/party/wrong_kor'),
        Array("顯示錯誤",'quest/party/clear'),
        Array("321開始",'CN_10thEventPunchMachine/countDown')
		
		);
let selStr = "";
for(var i = 0; i < EventList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + i + "##b" + EventList[i][0] + "#l";+ "\r\n\r\n";
}
let sel = npc.askMenu(selStr);
map.screenEffect(EventList[sel][1]);