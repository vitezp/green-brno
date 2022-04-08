package org.cobolaci.hackaton.greenbrno.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class CountResponse implements ExternalData {

    @JsonProperty("count")
    private Integer count;
}
