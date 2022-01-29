/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  功能：傷害皮膚
 *  
 *  @Author Jackson 
 */

/* global im */
var itemid = 2433132;

            YN = npc.askYesNoS("使用後將替換現在擁有的傷害皮膚效果！是否使用#b#t"+itemid+"##k？");
            if (YN == 1) {
                player.updateDamageSkin(1);
                player.dropMessage(-2, "使用了新的傷害皮膚！");
            }