/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 *
 * @author Jackson
 */

 var count =2;
 var item =player.getInventorySlot(-1,-11);
 if(item!=null){
     if(item.getLimitBreak()>=10000000000){
         count=5
     }else if(item.getLimitBreak()<300000000){
        count=0
     }
 }
if(player.canGainItem(4033911,count)){
    if(getEventCount("远征")==0){
        getEventCount("活跃");
        setEventCount("活跃",1,10);
    }
    setEventCount("远征",1,1);
    if(count>0)
    player.gainItem(4033911,count);
}

 
 
 function getEventCount(eventName) {
 
     var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";
 
     var result = player.customSqlResult(sql, player.getAccountId(), eventName);
 
     if(result.size() > 0) {
         if(result.get(0) != null) {
             return result.get(0).get("value");
         }
     } else {
         var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";
 
         var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
         return 0;
     }
 
 }
 
 function setEventCount(eventName,type,value) {
 
     var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";
 
     var result = player.customSqlUpdate(sql, type,value,player.getAccountId(), eventName);
 
 
 }