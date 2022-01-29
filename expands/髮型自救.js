/*  
 * 髮型拯救 幾里
 */
var list = Array();
var selStr = "這裡可以將您換髮型后出錯的角色拯救回來。\r\n注意:沒有出錯的角色別使用！\r\n請選擇您要拯救的角色:\r\n";

var sql = "select name from characters where accounts_id = '" + player.getAccountId() + "'";
var push = player.customSqlResult(sql);
var i = 0;
while(i < push.size()){
	selStr +="#L"+i+"# "+(i+1)+" . "+push.get(i).get("name")+"#l  \r\n";
	list.push(push.get(i).get("name"));
	i++;
}

let selection = npc.askMenu(selStr);
//更改髮型
player.customSqlUpdate("UPDATE `characters` SET `hair`= 36780 WHERE `name` = '"+list[selection]+"';")
npc.say("拯救成功！");
