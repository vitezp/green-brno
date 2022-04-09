package org.cobolaci.hackaton.greenbrno.dto.biketowork;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.cobolaci.hackaton.greenbrno.dto.LocatedExternalData;

import java.math.BigDecimal;

@Data
@EqualsAndHashCode(callSuper = true)
public class BikeToWork extends LocatedExternalData {

    @JsonProperty("data_2021")
    private Integer data2021;

    @JsonProperty("data_2020")
    private Integer data2020;

    @JsonProperty("data_2019")
    private Integer data2019;

    @JsonProperty("Shape__Length")
    private BigDecimal shapeLength;
}
