package org.cobolaci.hackaton.greenbrno.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.cobolaci.hackaton.greenbrno.dto.Geolocation;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class BikeToWorkSum implements OutputData {

    private Integer year;

    private BigDecimal totalDistance;

    @JsonIgnore
    @Override
    public Geolocation getLocation() {
        return null;
    }
}
