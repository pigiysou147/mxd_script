var tittle = "管理員廣播【"+player.getName()+"】："
let color = new Array(
        Array("2 ","無底｜綠字"),
        Array("10","白底｜黑字"),
        Array("12","藍底｜藍字")
		
		);
let text = "代碼 底色｜字色\r\n";
for(var i = 0; i < color.length ; i++){
	if(i%1 == 0){
		text += "";
	}
	text += "#b#e"+ color[i][0]+" " + color[i][1]+"\r\n";
}
var 顏色 = npc.askText(text,"",0,37);
var 公告 = npc.askText("請輸入您要公告的事項","",0,999);
	npc.broadcastPlayerNotice(顏色,tittle + 公告);
