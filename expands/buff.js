
var eff1 = "#fEffect/CharacterEff/1112924/0/0#"
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff3 = "#fEffect/CharacterEff/1112924/0/0#";
var skill = Array(
	Array("奇袭者", 1512, 61121009, 5321054,1311015,400051013,15121054,400051007),

	Array("虎影", 16412, 5321054,164121041,400041048),
	Array("阴阳", 4212, 5321054,1311015,2121004),
	Array("炼狱黑客", 6312, 5321054,31211003),
	Array("冲锋队长", 512, 61121009),
	Array("隐月", 2512, 5321054,25121133,400051010),
	Array("圣经", 15212, 11101022, 61121009), 
	Array("火毒", 212, 5321054), 
	Array("龙神", 2217, 5321054), 
	Array("英雄", 112, 400001039,400001040,400001041,5321054,400011001,400011073,1121054,400011000,23121004), 
	
	Array("拳天", 17512, 175121041,400001039,400001040,400001041,5321054,400011001,400011073,1121054,400011000,23121004), 
	Array("战神", 2112, 5321054, 61121009,1311015,400011000,400011016,21110016,33121054),
	Array("主教", 232, 61121009, 5321054),
	Array("侠盗", 422, 11101022),
	Array("唤灵法师", 3212, 5321054, 22001012, 400011066),
	Array("剑豪", 4112, 400001039,400001040,400001041,5321054,61121009, 5821009),
	Array("超能力", 14212, 5321054, 4201011, 5821009),
	Array("龙的传人", 572, 61121009),
	Array("箭神", 322, 400031015,5321054,400031055),
	Array("船长", 522, 5321054,1311015,65121004),
	Array("神射手", 312, 61121009,400031028,1311015,5321054),
	Array("夜光法师", 2712, 5321054, 2121004),
	Array("尖兵", 3612, 61121009),
	Array("圣骑士", 122, 61121009),
	Array("火炮", 532, 61121009),
	Array("幻影", 2412, 400001039,400001040,400001041,21101005, 5321054),
	Array("机械师", 3512, 5321054),
	Array("恶魔复仇者", 3122, 1311015,5321054,1121054),
	Array("影魂异人", 15512, 11101022, 61121009),
	Array("魔链", 6412, 11101022, 61121009),
	Array("爆莉萌天使", 6512, 61121009, 11101022),
	Array("冰雷魔导士", 222, 5321054,4331002,1311015,36111006,4111002,14111000,5121010),
	Array("暗影双刀", 434, 400001039,400001040,400001041,1121054,11101022, 1311015,36111006),
	Array("恶魔猎手", 3112, 11101022,1121054),
	Array("夜行者", 1412, 1311015,14111024,400041008,11101022),
	Array("隐士", 412, 61121009, 21101005,11101022,400041001), //11101022
	Array("爆破手", 3712, 5321054,37121054,400011116),
	Array("风灵使者", 1312, 61121009, 5321054),
	Array("豹弩游侠", 3312, 1311015,5321054,21101005),
	Array("狂龙", 6112, 5321054,400011118),
	Array("魂骑士", 1112, 61121009),
	Array("炎术士", 1212, 5321054),
	Array("古迹猎人", 332, 400001039,400001040,400001041,5321054, 1311015,21101005),
	Array("黑骑士", 132, 11101022),
	Array("双弩", 2312, 21101005, 5321054),
	Array("林之灵", 11212, 11101022,4201011),
	
	Array("御剑骑士", 15112, 400001039,400001040,400001041,400011109,151121042,1311015,21101005,400011105)
	
	

);

var txt = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   "+"BUFF获得"+"   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n";
txt += "\t\t\t#n#gBUFF技能,随心使用!#b\r\n"
txt +="每个职业有对应的BUFF,具体可以领取之后核实\r\n\r\n";

txt +="点击是，可以领取小屋强力BUFF箱子~\r\n\r\n";
// for(var i=0;i<skill.length;i++){
// 	txt+="#b#e职业为 :"+skill[i][0]+" 技能有:";
// 	for(var j=2;j<skill[i].length;j++){
// 		txt+="#s"+skill[i][j]+"#";
// 	}
// 	txt+="\r\n";
// }

let YN = npc.askYesNo(txt);
if(YN == 1){
	if(player.getAmountOfItem(2631718)==0){
		player.gainItem(2631718,1);
	}



	if(player.getAmountOfItem(2430624)==0){
		if(player.getJob()==15112){
			
			player.gainItem(2630962,1);
		}
		player.gainItem(2430624,1);
	}
	npc.say("领取成功");
		
	
}