
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var v1="#fEffect/ItemEff.img/1004532/effect/default/4#";
var v2=	"#fEffect/ItemEff.img/1004475/effect/jump/0#";
var v3=	"#fEffect/ItemEff.img/1004435/effect/alert/0#";
var v4=	"#fEffect/ItemEff.img/1004477/effect/prone/1#";
var v5=	"#fEffect/ItemEff.img/1004436/effect/default/3#";
var v6=	"#fEffect/ItemEff.img/1004437/effect/walk1/0#";

var list = Array(
	Array("职业转职",9310561, "changeJob"),
	Array("职业五转",9310073, "VcoreUI"),
	Array("学习技能",9310073, "xuegoujineng"),
	
	Array("FFN武器更换",9310073, "ffnzhihuan"),
	Array("神之子武器同步",9310073, "武器同步"),
	
);

	var text ="\t\t\t\t\t#e#r转职中心#k\r\n\r\n";
	text+="\t"+v1+v2+v3+""+v4+v5+v6+"\r\n\r\n";
	let selection=npc.askMenu(text+"\r\n#L0##v3994059#职业转职#k#l #L1##v3994060#职业五转#k#l #L2##v3994061#学习技能#k#l \r\n\r\n #L3##v3994062#FFN武器更换#k#l#L4##v3994063#神之子武器同步#k#l");

	player.runScript( list[selection][2]);



