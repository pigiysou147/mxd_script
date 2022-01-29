//可以使用的角色
var jobs = [6112,412,6512,412]

//技能ID
var skillId = 23111005;
//技能名
var skillName = "水盾";


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