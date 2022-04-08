package org.cobolaci.hackaton.greenbrno.dto.cycling;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.cobolaci.hackaton.greenbrno.dto.ExternalDataWrapper;

@Data
public class CyclistIntensityWrapper implements ExternalDataWrapper<CyclistIntensity> {

    @JsonProperty("attributes")
    private CyclistIntensity cyclistIntensity;

    @Override
    public CyclistIntensity unwrap() {
        return cyclistIntensity;
    }
}
