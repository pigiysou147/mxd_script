var epp = "#fEffect/SetItemInfoEff/297/0#";  //彩光 红色
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边

var epp = "#fUI/GuildMark/Mark/Etc/00009001/1#"; //彩光

var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
		var selStr = "				#e "+xx+"#b概率试抽#k#d#e"+xx+"\r\n";
		
		selStr += "#e#r#L1##v2431041#赌狗箱子概率#l #n\r\n\r\n";
		selStr += "#e#r#L2##v2436298#快乐源泉概率#l #n\r\n\r\n";
		selStr += "#e#r#L3##v4001716#金币赌狗概率#l #n\r\n\r\n";
		
        selStr += "\r\n";
        selStr += "\r\n";;


        let selection =npc.askMenu(selStr);
        switch (selection) {
			case 1:
               
                player.runScript( "抽箱子模拟器"); //武器租赁
                break;
			case 2:
               
                player.runScript( "抽箱子模拟器2"); //武器租赁
                break;
			case 3:
               
                player.runScript( "抽箱子模拟器3"); //武器租赁
                break;
			
        }
