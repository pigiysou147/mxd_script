var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var typed = 0;

//技能名称
var skillName = "动作：粉狼";
//技能ID
var skillCode = 80001608;
//骑宠交换券的名称
player.setSkillLevel(skillCode, 1,1,false);
//player.loseItem(npc.getItemId(), 1);
npc.say( "恭喜您获得" + skillName + "技能！"+player.getSkillLevel(80001608));
