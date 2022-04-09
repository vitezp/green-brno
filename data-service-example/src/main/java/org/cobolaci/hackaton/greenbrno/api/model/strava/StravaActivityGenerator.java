package org.cobolaci.hackaton.greenbrno.api.model.strava;

import java.util.ArrayList;
import java.util.List;

public class StravaActivityGenerator {

    public StravaActivityGenerator() {

    }

    public List<StravaSummaryActivity> generateStravaActivities(int number) {
        List<StravaSummaryActivity> activities = new ArrayList<>();
        for (int i = 0; i < number; ++i) {
            StravaSummaryActivity tmp = new StravaSummaryActivity();
            tmp.setId(i);
            tmp.setCommute(true);
            tmp.setDistance(100*i);
            tmp.setName("Aktivita" + i);
            tmp.setActivityType(StravaActivityType.Ride);
        }
        return  activities;
    }
}
