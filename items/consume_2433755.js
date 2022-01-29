



var account = npc.askText("请输入要重置CDK的账号。","",1,20);
let sel = npc.askYesNo("是否确认要重置 "+account+"  的机器码领取次数呢？");
if(sel==1){
	player.customSqlUpdate("update cdkey set mac='' where mac = (SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id  and loggin.`name`=?  ORDER BY con.connect_time desc LIMIT 1)",account);
	npc.say("重置成功");
}