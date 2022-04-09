package org.cobolaci.hackaton.greenbrno.dto;

public abstract class LocatedExternalData implements ExternalData {

    private Geolocation location;

    public Geolocation getLocation() {
        return location;
    }

    public void setLocation(Geolocation location) {
        this.location = location;
    }

}
