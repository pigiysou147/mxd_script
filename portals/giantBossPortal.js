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

/* global portal, player */

/**
 *
 * @author Jackson
 */

let event = portal.getEvent("boss_beidler");
player.dropMessage(7, "[Debug] Map:" + map.getId() + " Portal ID:" + portal.getId());
if (event != null) {
        let mapId = -1, portalId = 1;
        switch (map.getId()) {
                case 863010100:
                        if (portal.getId() == 8) {
                                mapId = 863010200;
                                portalId = 1;
                        } else if (portal.getId() == 7) {
                                mapId = 863010400;
                                portalId = 2;
                        } else if (portal.getId() == 6) {
                                mapId = 863010300;
                                portalId = 2;
                        } else if (portal.getId() == 9) {
                                mapId = 863010220;
                                portalId = 1;
                        }
                        break;
                case 863010300:
                        if (portal.getId() == 2) {
                                mapId = 863010100;
                                portalId = 6;
                        } else if (portal.getId() == 1) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010310;
                                        portalId = 1;
                                }
                        }
                        break;
                case  863010310:
                        if (portal.getId() == 1) {
                                mapId = 863010300;
                                portalId = 1;
                        } else if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010320;
                                        portalId = 2;
                                }
                        }
                        break;
                case 863010420:
                        if (portal.getId() == 1) {
                                mapId = 863010410;
                                portalId = 2;
                        } else if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010500;
                                        portalId = 5;
                                }
                        } else if (portal.getId() == 3) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010430;
                                        portalId = 1;
                                }
                        }
                        break;
                case 863010430:
                        if (portal.getId() == 1) {
                                mapId = 863010420;
                                portalId = 3;
                        } else if (portal.getId() == 3) {
                                mapId = 863010500;
                                portalId = 6;
                        }
                        break;
                case 863010330:
                        if (portal.getId() == 1) {
                                mapId = 863010320;
                                portalId = 3;
                        } else if (portal.getId() == 3) {
                                mapId = 863010500;
                                portalId = 4;
                        }
                        break;
                case 863010500:
                        if (portal.getId() == 5) {
                                mapId = 863010420;
                                portalId = 2;
                        } else if (portal.getId() == 2) {
                                mapId = 863010240;
                                portalId = 3;
                        } else if (portal.getId() == 3) {
                                mapId = 863010600;
                                portalId = 2;
                        } else if (portal.getId() == 6) {
                                mapId = 863010430;
                                portalId = 3;
                        } else if (portal.getId() == 1) {
                                mapId = 863010320;
                                portalId = 1;
                        } else if (portal.getId() == 4) {
                                mapId = 863010330;
                                portalId = 2;
                        }
                        break;
                case 863010240:
                        if (portal.getId() == 2) {
                                mapId = 863010210;
                                portalId = 2;
                        } else if (portal.getId() == 1) {
                                mapId = 863010230;
                                portalId = 2;
                        } else if (portal.getId() == 3) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010500;
                                        portalId = 2;
                                }
                        }
                        break;
                case 863010210:
                        if (portal.getId() == 1) {
                                mapId = 863010200;
                                portalId = 2;
                        } else if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010240;
                                        portalId = 2;
                                }
                        }
                        break;
                case 863010200:
                        if (portal.getId() == 1) {
                                mapId = 863010100;
                                portalId = 8;
                        } else if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010210;
                                        portalId = 1;
                                }
                        }
                        break;
                case 863010400:
                        if (portal.getId() == 1) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010410;
                                        portalId = 1;
                                }
                        } else if (portal.getId() == 2) {
                                mapId = 863010100;
                                portalId = 7;
                        }
                        break;
                case 863010410:
                        if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010420;
                                        portalId = 1;
                                }
                        } else if (portal.getId() == 1) {
                                mapId = 863010400;
                                portalId = 1;
                        }
                        break;
                case 863010320:
                        if (portal.getId() == 2) {
                                mapId = 863010310;
                                portalId = 2;
                        } else if (portal.getId() == 1) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010500;
                                        portalId = 1;
                                }
                        } else if (portal.getId() == 3) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010330;
                                        portalId = 1;
                                }
                        }
                        break;
                case 863010230:
                        if (portal.getId() == 1) {
                                mapId = 863010220;
                                portalId = 2;
                        } else if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010240;
                                        portalId = 1;
                                }
                        }
                        break;
                case 863010220:
                        if (portal.getId() == 1) {
                                mapId = 863010100;
                                portalId = 9;
                        } else if (portal.getId() == 2) {
                                if (event.getVariable("Kill" + map.getId()) != null) {
                                        mapId = 863010230;
                                        portalId = 1;
                                }
                        }
                        break;
                case 863010600:
                        if (portal.getId() == 2) {
                                mapId = 863010500;
                                portalId = 3;
                        }
                        break;
        }
        if (mapId > 0) {
                player.changeMap(mapId, portalId);//OK
        } else {
                portal.abortWarp();
                player.scriptProgressMessage("传送口未激活. 请先消灭所有怪物.");
        }
}
