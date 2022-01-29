var status = 0;
var typed = 0;
var music = Array(
	"Bgm11.img/DownTown",//童话村
	"Bgm25.img/profession",//匠人
	"Bgm13.img/Leafre",//神木村
	"Bgm21.img/2099year",//时空之门深夜港口
	"Bgm00.img/Nightmare",//勇士部落
	"Bgm25.img/WindAndFlower",//埃欧雷
	"Bgm04.img/WhiteChristmas",//圣诞村
	"Bgm36.img/foxvillage",//狐狸村
	"Bgm17.img/secretFlower",//飞花院
	"Bgm17.img/MureungSchool1",//武陵道场
	"Bgm01.img/WhereTheBarlogFrom",//林中之城被诅咒的寺院
	"Bgm25.img/AltarOfAkayrum",//阿卡伊勒
	"Bgm22.img/EdelsteinCity",//埃德尔斯坦
	"Bgm06.img/FlyingInABlueDream",//往玩具城/神木村的飞船&旧版中国服结婚地图入口
	"Bgm06.img/FinalFight",//扎昆战斗地图
	"Bgm05.img/WolfWood",//狼人之林
	"Bgm02.img/MissingYou",//魔法密林树洞
	"Bgm01.img/CavaBien",//射手村郊外
	"Bgm04.img/ArabPirate",//遇到蝙蝠魔
	"BgmUI.img/ShopBgm",//商城
	"Bgm18.img/WolfAndSheep",//小羊的牧场活动地图
	"Bgm11.img/ShiningSea",//水下世界热带海域
	"Bgm23.img/MPBonusMap",//怪物公园//怪物公园额外奖励阶段
	"Bgm25.img/SoundOfElf",//埃欧雷音乐盒
	"Bgm33.img/ShadowTemple",//暗影神殿
	"Bgm34.img/GlacierAdventure",//风险投资公司
	"Bgm38.img/FlowerVioleta",//营救公主
	"Bgm40.img/BlackHeavenTheme_parade",//好听的
	"Bgm16.img/RustyThrone",//阿斯旺
	"Bgm14.img/Ariant",//阿里安特
	"BgmUI.img/Title_Frozen",//来丽狗
	"BgmTW.img/NightMarket",//台湾不夜城
	"Bgm25.img/timeGate",//未来之门
	"BgmEvent.img/halloweenMainHall",//蘑菇神社
	"BgmEvent2.img/miniGameStation",//ox冰果
	"BgmEvent.img/halloweenMainHall",//蘑菇神社
	"BgmBT.img/ComeWithMeAll",//通天塔
	"Bgm48.img/Title",//登陆界面
	"Bgm22.img/EdelsteinCity",//艾尔德斯坦
	"Bgm18.img/QueensGarden",//圣地
	"Bgm11.img/BlueWorld",//海底世界
	"Bgm13.img/AcientForest",//神木村野外
	"Bgm12.img/AquaCave",//鱼王
	"Bgm00.img/SleepyWood",//林中之城
	"Bgm37.img/JungleInTheSea",//起源森林
	"Bgm38.img/FlowerVioleta",//救完蘑菇公主之后的音乐
	"Bgm42.img/Catch Your Dreams! full",//逐梦飞翔
	"Bgm43.img/Kinesis Theme I",//超能力者专属BGM
	"Bgm22.img/EdelsteinCity",//艾尔德斯坦
	"Bgm13.img/AcientForest",//神木村野外
	"BgmUI.img/Title_Frozen",//来丽狗
	"Bgm15.img/MureungForest",//武陵，通天林
	"Bgm09.img/FairyTalediffvers",//时间停止之湖 时间塔的本源 时间异常之地
	"Bgm14.img/Ariant",//阿里安特
	"Bgm14.img/HonTale",//暗黑龙王
	"Bgm38.img/MushroomCastle",//蘑菇城内
	"Bgm34.img/WoundedLeaf",//被破坏的彩虹岛
	"Bgm38.img/SchoolLife",//神兽国际学校
	"Bgm15.img/PoisonForest",//艾琳森林毒雾森林
	"Bgm00.img/neneSound",//热场歌曲
	"Bgm30.img/5thSpotLightFlyAway",//热场歌曲
	"BgmEvent2.img/Newtro_Login",//热场歌曲
	"BgmEvent2.img/Newtro_Ludibrium",//热场歌曲
	"BgmEvent2.img/Newtro_Ludibrium",//热场歌曲
	"BgmEvent2.img/adventureIsland",//热场歌曲
	"BgmEvent2.img/risingStar2",//热场歌曲
	"Bgm04.img/Shinin'Harbor"//天空之城
);

var index=0;
if(player.isGm()) {
	var txt = "#mo9309207#请选择你想更换的音乐:\r\n\r\n";
	for(var i = 0; i < music.length; i++) {
		txt += "#L" + i + "# " + music[i] + "  #l\r\n"
	}
	let selection =npc.askMenuS(txt);
	//player.playSoundWithMuteBGM(music[selection]);
	map.changeBGM(music[selection])
	npc.say("音乐更换成功");
} else {
	npc.say("你不是管理员你不能换碟");
}

		
	
