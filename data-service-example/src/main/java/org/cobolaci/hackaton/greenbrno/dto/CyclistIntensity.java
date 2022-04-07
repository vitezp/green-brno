package org.cobolaci.hackaton.greenbrno.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class CyclistIntensity {
    @JsonProperty("ID")
    private Integer id;

    @JsonProperty("unitName")
    private String unitName;

    @JsonProperty("EndOfInterval")
    private Date endOfInterval;

    @JsonProperty("FirstDirection_Cyclists")
    private Integer firstDirectionCyclists;

    @JsonProperty("FirstDirection_Pedestrians")
    private Integer firstDirectionPedestrians;

    @JsonProperty("FirstDirection_Total")
    private Integer firstDirectionTotal;

    @JsonProperty("SecondDirection_Cyclists")
    private Integer secondDirectionCyclists;

    @JsonProperty("SecondDirection_Pedestrians")
    private Integer secondDirectionPedestrians;

    @JsonProperty("SecondDirection_Total")
    private Integer secondDirectionTotal;

    @JsonProperty("datum")
    private Date datum;

    @JsonProperty("LocationId")
    private Integer locationId;
}
