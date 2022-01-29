		var tittle = "管理員廣播【"+player.getName()+"】"
		while(true){
			var 公告1 = npc.askText("請輸入您要公告的事項(第一行)","",0,999);
			var 公告2 = npc.askText("請輸入您要公告的事項(第二行)","",0,999);
			var 公告3 = npc.askText("請輸入您要公告的事項(第三行)","",0,999);
			npc.broadcastPlayerNotice(10,"　　　　　　　　　　"+tittle+"　　　　　　　　　　");
			npc.broadcastPlayerNotice(10,tittle + 公告1);
			npc.broadcastPlayerNotice(10,tittle + 公告2);
			npc.broadcastPlayerNotice(10,tittle + 公告3);
				break;
				}