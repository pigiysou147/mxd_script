

var mapid=map.getId()
if(mapid==211070103){
    player.changeMap(map.getId()-1);
}else{

    player.changeMap(211070100);
}
portal.abortWarp()