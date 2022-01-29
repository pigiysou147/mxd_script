/*
QQ:423283141
*/
var status = 0;

//拿到第一件装备
var item = player.getInventorySlot(1, 1);

item.setGrade(0x14);
item.setOption(1, 40557, true);
item.setOption(2, 40557, true);
item.setOption(3, 40557, true);
item.setOption(1, 40557, false);
item.setOption(2, 40557, false);
item.setOption(3, 40557, false);
player.updateItem(1, item);

npc.say("潜能修改成功");

