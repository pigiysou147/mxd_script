




var itemList=[
    1202271,
    1202270,
    1202268

]
var txt ="\r\n#r#e请选择要换取的图腾；属性为333包含攻击力魔法力哦";
for(var i=0;i<itemList.length;i++){
    txt+="#L"+i+"# #v"+itemList[i]+"##l"
}
let selection =npc.askMenu(txt);
var itemid=itemList[selection];

var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类
toDrop.setStr(toDrop.getStr()+333); //装备力量
toDrop.setDex(toDrop.getDex()+333); //装备敏捷
toDrop.setInt(toDrop.getInt()+333); //装备智力
toDrop.setLuk(toDrop.getLuk()+333); //装备运气
toDrop.setPad(toDrop.getPad()+333); //物理攻击
toDrop.setMad(toDrop.getMad()+333); //魔法攻击
toDrop.setTitle("333绝版图腾");
player.gainItem(toDrop);
player.loseItem(npc.getItemId(),1);
