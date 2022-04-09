package org.cobolaci.hackaton.greenbrno.api.model.strava;

public class StravaSummaryActivity {
    private long id;
    private String name;
    private float distance;
    private StravaActivityType activityType;
    private boolean isCommute;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getDistance() {
        return distance;
    }

    public void setDistance(float distance) {
        this.distance = distance;
    }

    public StravaActivityType getActivityType() {
        return activityType;
    }

    public void setActivityType(StravaActivityType activityType) {
        this.activityType = activityType;
    }

    public boolean isCommute() {
        return isCommute;
    }

    public void setCommute(boolean commute) {
        isCommute = commute;
    }
}
