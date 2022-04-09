package org.cobolaci.hackaton.greenbrno.dto.strava;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.cobolaci.hackaton.greenbrno.api.model.strava.StravaActivityType;

public class SummaryActivity {
    @JsonProperty("id")
    private Integer id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("distance")
    private float distance;

    @JsonProperty("type")
    private StravaActivityType type;

    @JsonProperty("commute")
    private boolean commute;
}
