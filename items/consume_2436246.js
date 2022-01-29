//可以使用的角色
var jobs = [2217,2112,112,4112,222,3212,1212,322,512,522,2512,572,412]

//技能ID
var skillId = 5321054;
//技能名
var skillName = "霰弹炮";

var myJob = player.getJob();

if(jobs.indexOf(myJob) == -1){
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	player.scriptProgressMessage ("您的职业不可以使用该BUFF药剂");
	
}else{
	player.useSkillEffect(skillId,1);
	for (var i = 0; i < 3; i++) {
		player.scriptProgressMessage ("恭喜你 - "+skillName+" BUFF 已开启 幻想冒险岛祝你游戏愉快");
	}
}