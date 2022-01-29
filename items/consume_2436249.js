//可以使用的角色
var jobs = [2712,312]

//技能ID
var skillId = 11101022;
//技能名
var skillName = "月光洒落";

var myJob = player.getJob();

if(jobs.indexOf(myJob) == -1){
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	
}else{
	player.useSkillEffect(skillId,20);
	for (var i = 0; i < 3; i++) {
		player.scriptProgressMessage ("恭喜你 - "+skillName+" BUFF 已开启 幻想冒险岛祝你游戏愉快");
	}
}