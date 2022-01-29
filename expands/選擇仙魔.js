/**
* 默认仙族 几里 315342975 
**/
let campInfo = getInitCamp("仙");

npc.say("已開通五行修練功能")

//得到角色仙魔阵营信息
function getInitCamp(camp) {
    let sql = "select * from jili_camp where character_id = '" + player.getId() + "'";
    let push = player.customSqlResult(sql);
    if (push.size() > 0) {
		return push.get(0);
	} else if(camp == "仙" || camp == "魔") {
        player.customSqlInsert("INSERT INTO `jili_camp` (`character_id`, `account_id`,`character_name`,`point`,`point_total`,`camp`) VALUES ('"+player.getId()+"','" + player.getAccountId() + "', '" + player.getName() + "','0','0','"+camp+"')");
        return getInitCamp("");
    }else{
		return null;
	}
}