package org.cobolaci.hackaton.greenbrno.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.cobolaci.hackaton.greenbrno.dto.Geolocation;

@Data
@AllArgsConstructor
public class BicycleIntensity implements OutputData {

    private Integer id;

    private Integer total;

    private Geolocation location;
}
