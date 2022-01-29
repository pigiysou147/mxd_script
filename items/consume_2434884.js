let toDrop = player.getInventorySlot(1, 1);
//40041//力量		12%
//40042//敏捷		12%
//40043//智力		12%
//40044//运气		12%
//40045//最大HP	12%
//40046//最大MP	12%
//40047//DEX		12%
//40048//LUK		12%
//40051//攻击力%	12%
//40052//魔法力%	12%
//40056//暴击伤害%	12%
//40086//所有属性%	9%
//40292//无视怪物防御率40%
//40556//所有技能的冷却时间 ：-1秒
//40557//所有技能的冷却时间 ：-2秒
//40603//攻击BOSS怪物时的伤害 40%
//42094//+2运气附加
//42091//+2力量附加
//42092//+2运气附加
//42093//+2智力附加
//42044//7%运气
//40650//20%金币
//40656//20%掉落
//42054//2%魔力
//toDrop.setGrade(0x14);//ss
//toDrop.setOption(1, 40656, false);
//toDrop.setOption(2, 40656, false);
//toDrop.setOption(3, 40656, false);
//toDrop.setSocket(1,3064420);
//toDrop.setSocket(2,3064420);
//toDrop.setSocket(3,3064420);
//toDrop.setOption(1, 40656, true);
//toDrop.setOption(2, 40656, true);
//toDrop.setOption(3, 40656, true);
//toDrop.setRUC(8);
//toDrop.setStr(30000); //装备力量
//toDrop.setDex(30000); //装备敏捷
//toDrop.setInt(30000); //装备智力
//toDrop.setLuk(30000); //装备运气
//toDrop.setMad(30000);
//toDrop.setPad(30000);
//toDrop.setCHUC(25);
//toDrop.setRUC(2);
//toDrop.setStr(toDrop.getInt()); //装备力量
//toDrop.setStr(toDrop.getStr()); //装备力量
//toDrop.setDex(toDrop.getLuk()); //装备敏捷
//toDrop.setInt(toDrop.getInt() ); //装备智力
//toDrop.setLuk(toDrop.getLuk() + 55 + 30095); //装备运气
//toDrop.setMad(toDrop.getPad());//魔法
//toDrop.setPad(toDrop.getMad()); //攻击
//toDrop.setBossDamageR(100);
//toDrop.setIgnorePDR(100);
//toDrop.setDamR(100);
//toDrop.setCUC(0);
//toDrop.setCHUC(24);
//toDrop.setRUC(0);
//toDrop.setCHUC(25);
toDrop.setTitle("25阶翅膀");
player.updateItem(1, toDrop);