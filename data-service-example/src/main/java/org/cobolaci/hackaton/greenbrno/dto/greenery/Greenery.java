package org.cobolaci.hackaton.greenbrno.dto.greenery;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.cobolaci.hackaton.greenbrno.dto.LocatedExternalData;

@Data
@EqualsAndHashCode(callSuper = true)
public class Greenery extends LocatedExternalData {

    @JsonProperty("ogcfid")
    private Integer id;

    @JsonProperty("druh_bio_kod")
    private String category;

    @JsonProperty("nazev")
    private String name;
}
