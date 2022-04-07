package org.cobolaci.hackaton.greenbrno.dto;

import lombok.Data;

import java.util.List;

@Data
public class ResponseWrapper {

    private List<CyclistIntensityWrapper> features;
}
