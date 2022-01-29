var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var typed = 0;

//技能名称
var skillName = "香气屁骑宠";
//技能ID
var skillCode = 80001919;
//骑宠交换券的名称
player.setSkillLevel(skillCode, 1, 1,false);
player.loseItem(npc.getItemId(), 1);
npc.say( "恭喜您获得" + skillName + "技能！");
npc.broadcastNoticeWithoutPrefix( "『购买骑宠』" + " : " + "玩家 " + player.getName() + " 成功学习了【" + skillName + "】技能！");