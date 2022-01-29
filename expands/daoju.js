var epp = "#fEffect/SetItemInfoEff/33/9#"; //飘带
var ax = "#fEffect/CharacterEff/1112902/0/1#"; //蓝色爱心
var xxx = "#fEffect/CharacterEff/1112902/0/1#"; //蓝色爱心
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#"; //hyuangguang

var a = 0;

	
		var txt = "#d#e               装备制作中心#l#k\r\n";
		txt += "#b#e\t\t\t#L14#" + aaa + "材料地图传送" + aaa + "#l#k\r\n\r\n\r\n";
		txt += "#r#L9#" + xxx + "神秘之影武器" + xxx + "     #v1252098##v1302343##v1452257##v1402259# #l\r\n";
		txt += "#r#L10#" + xxx + "神秘徽章制作" + xxx + "     #v1712001##v1712002##v1712003##v1712004# #l\r\n";
		
		//txt += "#r#L1#" + xxx + "150级武器#v1212063##v1222058##v1302275##v1312153#"+xxx+"#l \r\n\r\n";
		txt += "#r#L4#" + xxx + "图腾制作     #v1202107##v1202116##v1202149##v1202158#" + xxx + "#l\r\n\r\n";
		let selection =npc.askMenuS(txt);
	
		if(selection==1){
			player.runScript("zzffn"); 
		}else if(selection==2){
			player.runScript("zzhj");
		}else if(selection==9){
			player.runScript("zzshenmi");
		}else if(selection==4){
			player.runScript("zztt");
		}else if(selection==14){
			player.runScript("cldt");
		}else if(selection==10){
			player.runScript("smhz");
		}
		
				
		

