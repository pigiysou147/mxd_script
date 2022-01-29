/**
* 传送-QQ:739977676
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
let bossmap1 = Array(//簡單模式
		Array(300030300, "#g[普通]#k艾菲尼亞\t\t", "#fUI/UIWindow2.img/MobGage/Mob/5250007#"),
		Array(105100100, "#g[簡單]#k巨大蝙蝠\t\t", "#fUI/UIWindow2.img/MobGage/Mob/8830000#"),
		Array(220080000, "#g[普通]#k帕普拉圖斯\t\t", "#fUI/UIWindow2.img/MobGage/Mob/8500001#")
		//Array(223030200, "#g    [普通]#k暴力熊\t\tPS:掉落跑環道具", "")
		);

let bossmap2 = Array(//普通模式
		Array(211042300, "#b[普通]#k炎魔", "#fUI/UIWindow2.img/MobGage/Mob/8800001#"),
		//Array(272020110, "#b[簡單]#k阿卡伊勒", "#fUI/UIWindow2.img/MobGage/Mob/8860000#"),
		Array(211070000, "#b[困難]#k班雷昂", "#fUI/UIWindow2.img/MobGage/Mob/8840000#"),
		//Array(703020000, "#b[困難]#k鑽機", "#fUI/UIWindow2.img/MobGage/Mob/9600086#"),
		Array(240050400, "#b[經驗]#k暗黑龍王", "#fUI/UIWindow2.img/MobGage/Mob/8810018#")
		);

let bossmap3 = Array(//困難模式
		//Array(272020110, "#d[困難]#k阿卡伊勒", "#fUI/UIWindow2.img/MobGage/Mob/8860000#"),
		Array(262030000, "#d[困難]#k希拉", "#fUI/UIWindow2.img/MobGage/Mob/8870000#"),
		//Array(270050000, "#d[經驗]#k品克繽", "#fUI/UIWindow2.img/MobGage/Mob/8820001#"),
		Array(271040000, "#d[普通]#k希納斯", "#fUI/UIWindow2.img/MobGage/Mob/8850011#"),
		Array(401060000, "#d[普通]#k麥格納斯", "#fUI/UIWindow2.img/MobGage/Mob/8880002#"),
		//Array(970072200, "#d[普通]#k烏魯斯", "#fUI/UIWindow2.img/MobGage/Mob/8881000#"),
		//Array(807300100, "#d[普通]#k森蘭丸", "#fUI/UIWindow2.img/MobGage/Mob/9421581#"),
		//Array(811000999, "#d[普通]#k濃姬", "#fUI/UIWindow2.img/MobGage/Mob/9803063#"),
		Array(105200000, "#d[困難]#k四大天王", "#fUI/UIWindow2.img/MobGage/Mob/8930000#"),
		Array(863000100, "#r[史詩]#k培羅德", "#fUI/UIWindow2.img/MobGage/Mob/9390600#"),
		Array(350060300, "#r[史詩]#k斯烏", "#fUI/UIWindow2.img/MobGage/Mob/8950001#"),
		Array(401060000, "#r[史詩]#k麥格納斯", "#fUI/UIWindow2.img/MobGage/Mob/8880002#"),
		Array(105300303, "#r[史詩]#k戴米安", "#fUI/UIWindow2.img/MobGage/Mob/8880101#")
		);

let bossmap4 = Array(//超難模式
		//Array(992000000, "#r[史詩]#k桃樂絲", "#fUI/UIWindow2.img/MobGage/Mob/9309207#"),
		Array(450004000, "#r[史詩]#k路西德", "#fUI/UIWindow2.img/MobGage/Mob/8880140#"),
		Array(450007240, "#r[夢魘]#k威爾", "#fUI/UIWindow2.img/MobGage/Mob/8880300#"),
		Array(450012200, "#r[夢魘]#k頓凱爾", "#fUI/UIWindow2.img/MobGage/Mob/8645009#"),
		Array(450009301, "#r[夢魘]#k虛空之眼", "#fUI/UIWindow2.img/MobGage/Mob/8644650#")
		);
let str = "\t\t\t\t" + xxx + "#r歡迎來到BOSS中心"+ xxx +"\r\n";
			str += "#L1##v03994115##l #L2##v03994116##l #L3##v03994117##l #L4##v03994118##l#k#r";
	let selected = npc.askMenu(str);
	let text = "#b請選擇你要打的BOSS:"
switch (selected){
	case 1://城鎮
		for(let i = 0; i<bossmap1.length;i++){
		text +="#n\r\n#L" + i + "#" + bossmap1[i][2] + "" + bossmap1[i][1] + "";
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(bossmap1[seleted1][0]);
		break;
	case 2://練級
		for(let i = 0; i<bossmap2.length;i++){
		text +="#n\r\n#L" + i + "#" + bossmap2[i][2] + "" + bossmap2[i][1] + "";
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(bossmap2[seleted1][0]);
		break;
	case 3://素材
		for(let i = 0; i<bossmap3.length;i++){
		text +="#n\r\n#L" + i + "#" + bossmap3[i][2] + "" + bossmap3[i][1] + "";
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(bossmap3[seleted1][0]);
		break;
	case 4:
		for(let i = 0; i<bossmap4.length;i++){
		text +="#n\r\n#L" + i + "#" + bossmap4[i][2] + "" + bossmap4[i][1] + "";
		}
		seleted1 = npc.askMenu(text);
		player.changeMap(bossmap4[seleted1][0]);
		break;
	case 5:
		player.runScript("萬能傳送")
		break;
	case 6:
		player.runScript("AB_潛能專區")
		break;
	case 7:
		player.runScript("VIP勳章")
		break;
	case 8:
		player.runScript("裝備附魔")
		break;
}
