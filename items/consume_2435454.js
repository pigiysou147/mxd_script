

player.customSqlUpdate("update hypay set pay=pay+120,leiji=leiji+120 where accountid="+player.getAccountId());
player.loseItem(npc.getItemId(),1);
npc.say("领取120余额以及120累计");