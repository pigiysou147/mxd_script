var event = portal.getEvent();
if (event != null) {
        if (!"1".equals(event.getVariable("stage24_up04"))) {
                player.runScript("stage24_guess");
        } else {
                player.teleportToPortalId(5);
        }
}
portal.abortWarp();