

/**
 * 
 * @author NautMS
 */
player.loseItem(npc.getItemId(), 1);
if (player.getGender() == 0) {
    player.gainItem(2430069, 1);
    player.gainItem(1060145, 1);
} else {
    player.gainItem(2430069, 1);
    player.gainItem(1061166, 1);
}
player.gainItem(1332005, 1);
