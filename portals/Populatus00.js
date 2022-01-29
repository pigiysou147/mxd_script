	
portal.playPortalSE();
if (party == null ) {
	player.dropMessage(11,"请开一个组队再来试试！");
}else if(player.getId() != party.getLeader()){
	player.dropMessage(11,"请让队长来和我说话");
} else if (!party.isAllMembersAllowedPQ("帕普拉图斯",2)) {
    player.dropMessage(11,"你队员#r#e" + party.getNotAllowedMember("帕普拉图斯", 2) + "#n#k次数已经达到上限了。");
}else if(portal.makeEvent("Populatus",true,party)== null){
	player.dropMessage(11,"对抗帕普拉图斯的挑战已经开始了，你不能进入到里面。");
}
portal.abortWarp();