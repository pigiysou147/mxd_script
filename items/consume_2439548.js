




var itemList=[
    1202089,
    1202090,
    1202091

]
var txt ="\r\n#r#e请选择要换取的图腾；属性为666包含攻击力魔法力哦";
for(var i=0;i<itemList.length;i++){
    txt+="#L"+i+"# #v"+itemList[i]+"##l"
}
let selection =npc.askMenu(txt);
var itemid=itemList[selection];

var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类
toDrop.setStr(toDrop.getStr()+666); //装备力量
toDrop.setDex(toDrop.getDex()+666); //装备敏捷
toDrop.setInt(toDrop.getInt()+666); //装备智力
toDrop.setLuk(toDrop.getLuk()+666); //装备运气
toDrop.setPad(toDrop.getPad()+666); //物理攻击
toDrop.setMad(toDrop.getMad()+666); //魔法攻击
toDrop.setTitle("666绝版图腾");
player.gainItem(toDrop);
player.loseItem(npc.getItemId(),1);
