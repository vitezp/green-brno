package org.cobolaci.hackaton.greenbrno.dto.greenery;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.cobolaci.hackaton.greenbrno.dto.ExternalData;

@Data
public class Greenery implements ExternalData {

    @JsonProperty("ogcfid")
    private Integer id;

    @JsonProperty("druh_bio_kod")
    private String category;

    @JsonProperty("nazev")
    private String name;
}
