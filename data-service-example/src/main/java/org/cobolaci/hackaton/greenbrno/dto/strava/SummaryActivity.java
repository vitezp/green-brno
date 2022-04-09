package org.cobolaci.hackaton.greenbrno.dto.strava;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.cobolaci.hackaton.greenbrno.api.model.strava.StravaActivityType;
import org.cobolaci.hackaton.greenbrno.dto.ExternalData;
import org.cobolaci.hackaton.greenbrno.dto.ExternalDataWrapper;
import org.cobolaci.hackaton.greenbrno.dto.Geolocation;

@Data
public class SummaryActivity implements ExternalData, ExternalDataWrapper<SummaryActivity> {

    @JsonProperty("name")
    private String name;

    @JsonProperty("distance")
    private float distance;

    @JsonProperty("type")
    private String type;

    @JsonProperty("commute")
    private boolean commute;

    @Override
    public void setLocation(Geolocation location) {
        //noop
    }

    @Override
    public SummaryActivity unwrap() {
        return this;
    }
}
