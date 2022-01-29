/**
* 图腾  QQ:739977676 
**/
let cat1="#fItem/Pet/5000000.img/alert/0#";
let cat2="#fItem/Pet/5000000.img/fly/0#";
let cat3="#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";





let tutengs = Array(1202027,1202031,1202035,1202023);
let tutengPrice = 20; //每个图腾需要多少个真棒

let npcModel =9330193;

	let selStr ="";
	
	selStr += "\r\n\r\n#L0#"+eff2+" #d图腾说明#l  #L1#"+eff1+" 购买图腾#l  #L2#"+eff2+" 升级图腾#l\r\n\r\n"


	let selected = npc.askMenu(selStr,npcModel);

	switch (selected){
		case 0:
			selStr ="";
			selStr += tu3;
			for(let i = 0;i< 35;i++){
				selStr += tu6;
			}
			selStr += tu5;
			selStr += "\r\n";
			selStr += "#d1.购买和升级图腾都使用#v4310105#,#r<高校副本>#d可以获得.\r\n";
			selStr += "#d2.升级图腾请把图腾放到装备栏第一格.\r\n";
			selStr += "#d3.只有在我这里购买的图腾才可以升级.\r\n";
			selStr += "#d4.升级图腾需要8个#v4310105#数量每级增加全属性攻击4 总共50次.\r\n\r\n";
			
			npc.say(selStr,npcModel);
			break;
		case 1:
			selStr ="";
			selStr += tu3;
			for(let i = 0;i< 35;i++){
				selStr += tu6;
			}
			selStr += tu5;
			selStr += "\r\n";
			selStr += "#d 请选择想购买的图腾，每一个需要#r"+tutengPrice+"#d 个 #v4310105#\r\n#b"
			for(let i = 0;i<tutengs.length;i++){
				selStr += "#L"+i+"# 购买 #v"+tutengs[i]+"##z"+tutengs[i]+"##l\r\n";
			}
			selected = npc.askMenu(selStr,npcModel);
			
			selStr ="";
			selStr += tu3;
			for(let i = 0;i< 35;i++){
				selStr += tu6;
			}
			selStr += tu5;
			selStr += "\r\n";
			selStr += "是否确认花费 #r"+tutengPrice+"#d 个 #v4310105# 换购#v"+tutengs[selected]+"##z"+tutengs[selected]+"#?"
			let YN = npc.askYesNo(selStr,npcModel);
			if(YN == 1){
				if(player.hasItem(4310105,tutengPrice)){
					if(player.canGainItem(tutengs[selected],1)){
						player.loseItem(4310105,tutengPrice);
						player.gainItem(tutengs[selected],1);
						npc.say("#d换购成功",npcModel);
					}else{
						npc.say("#d背包不足",npcModel);
					}
				}else{
					npc.say("#d你没有#r"+tutengPrice+"#d 个 #v4310105#",npcModel);
				}
			}
			break;
		case 2:
			player.runScript("ttqh");
			break;
		
	}



