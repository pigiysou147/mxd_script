/*  This is mada by Jackson    
 *
 *  功能：NPC 进入 仲夏夜森林 初次与猫对话
 *
 *  @Author Yanran
 */

if (player.isQuestActive(20829)) {
        for (let i = 0; i < 5; i++) {
                map.spawnMob(9300730, -355, -7);
        }
} else if (player.isQuestActive(20831)) {
        for (let i = 0; i < 3; i++) {
                map.spawnMob(9300730, -355, -7);
        }
}