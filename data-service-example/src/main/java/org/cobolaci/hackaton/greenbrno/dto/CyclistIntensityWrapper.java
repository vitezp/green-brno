package org.cobolaci.hackaton.greenbrno.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CyclistIntensityWrapper {
    @JsonProperty("attributes")
    private CyclistIntensity cyclistIntensity;
}
