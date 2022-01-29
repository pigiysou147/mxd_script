



if(player.getAmountOfItem(1113211)>0){
        npc.say("身上有天堂气息，不能开启");
}else{
        player.loseItem(npc.getItemId(),1);
        player.gainItem(1113211,1);
        npc.say("开启成功");
}