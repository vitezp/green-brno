package org.cobolaci.hackaton.greenbrno.config;

import lombok.Data;

@Data
public class DataSources {

    private DataSource cyclistIntensity;
    private DataSource greenery;
    private DataSource bikeToWork;
    private DataSource stravaClubActivities;
}
