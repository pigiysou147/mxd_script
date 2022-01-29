/*  
 * 发型拯救 几里
 */
var list = Array();
var selStr = "这里可以将您换发型后出错的角色拯救回来。\r\n注意:没有出错的角色别使用！\r\n请选择您要拯救的角色:\r\n";

var sql = "select name from characters where accounts_id = '" + player.getAccountId() + "'";
var push = player.customSqlResult(sql);
var i = 0;
while(i < push.size()){
	selStr +="#L"+i+"# "+i+" . "+push.get(i).get("name")+"#l  \r\n";
	list.push(push.get(i).get("name"));
	i++;
}

let selection = npc.askMenu(selStr);
//更改发型
player.customSqlUpdate("UPDATE `characters` SET `hair`= 36780 WHERE `name` = '"+list[selection]+"';")
npc.say("拯救成功！");
