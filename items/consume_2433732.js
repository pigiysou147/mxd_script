




var itemList=[
    1202089,
    1202090,
    1202091

]
var txt ="\r\n#r#e请选择要换取的图腾；属性为999包含攻击力魔法力哦";
for(var i=0;i<itemList.length;i++){
    txt+="#L"+i+"# #v"+itemList[i]+"##l"
}
let selection =npc.askMenu(txt);
var itemid=itemList[selection];

var toDrop = player.makeItemWithId(itemid); // 生成一个Equip类
toDrop.setStr(toDrop.getStr()+999); //装备力量
toDrop.setDex(toDrop.getDex()+999); //装备敏捷
toDrop.setInt(toDrop.getInt()+999); //装备智力
toDrop.setLuk(toDrop.getLuk()+999); //装备运气
toDrop.setPad(toDrop.getPad()+999); //物理攻击
toDrop.setMad(toDrop.getMad()+999); //魔法攻击
toDrop.setTitle("绝版图腾");
player.gainItem(toDrop);
player.loseItem(npc.getItemId(),1);
