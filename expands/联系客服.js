






var txt="\r\n#L0#联系一号客服#l\r\n";
	txt+="#L1#联系二号客服#l\r\n";
	txt+="#L2#联系三号客服#l\r\n";
	
	let selection = npc.askMenu(txt);
	if(selection==0){
		player.openURL("http://wpa.qq.com/msgrd?v=3&uin=2066666658&site=qq&menu=yes");
	}else if(selection==1){
		player.openURL("http://wpa.qq.com/msgrd?v=3&uin=43038573&site=qq&menu=yes");
	}else if(selection==2){
		player.openURL("http://wpa.qq.com/msgrd?v=3&uin=3134241265&site=qq&menu=yes");
	}