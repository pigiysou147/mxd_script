//可以使用的角色
var jobs = [2712,312,412,2112,532,112,6112,6512,412,1312,122,10112,3612,132,312,3122,3112,322,422,3312,412,434,5112,2112,2312,2412,2712,2512,3212,3512,512,532,522,542,1112,1212,1312,1412,1512]

//技能ID
var skillId = 2001002;
//技能名
var skillName = "魔法盾";

var myJob = player.getJob();

if(jobs.indexOf(myJob) == -1){
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	
}else{
	player.useSkillEffect(skillId,10);
	for (var i = 0; i < 3; i++) {
		player.scriptProgressMessage ("恭喜你 - "+skillName+" BUFF 已开启 幻想冒险岛祝你游戏愉快");
	}
}