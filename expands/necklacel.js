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

//var p=player.getInventorySlot(1,1);
//var p=player.makeItemWithId(2430241);
var p = map;
var c= p.getClass();
var txt="";
var methods=c.getDeclaredMethods();

for(var i=0;i<methods.length;i++){
	methods[i].setAccessible(true);
	txt+=methods[i].getName()+"\r\n";
	//player.customSqlInsert("insert into equip values(0,?)",methods[i].getName() );
}

npc.say(txt);
