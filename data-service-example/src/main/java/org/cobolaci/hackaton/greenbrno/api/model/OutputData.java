package org.cobolaci.hackaton.greenbrno.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.cobolaci.hackaton.greenbrno.dto.Geolocation;

public interface OutputData {

    @JsonProperty("location")
    Geolocation getLocation();
}
