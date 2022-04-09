package org.cobolaci.hackaton.greenbrno.dto.cycling;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.cobolaci.hackaton.greenbrno.dto.ExternalData;
import org.cobolaci.hackaton.greenbrno.dto.LocatedExternalData;

import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = true)
public class CyclistIntensity extends LocatedExternalData {

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
