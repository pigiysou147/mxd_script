var event = portal.getEvent();
if (event != null) {
        if (!"1".equals(event.getVariable("stage12_trap0"))) {
                player.teleportToPortalId(2);
        }
}
portal.abortWarp();