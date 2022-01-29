








let number = 1000;
player.updateQuestRecordEx(1477, "count", player.getIntQuestRecordEx(1477,"count")+ number);
player.loseItem(npc.getItemId(),1);
player.showSystemMessage("獲得 "+number+" 技能V核心");