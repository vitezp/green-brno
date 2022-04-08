package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.ExternalResponse;
import org.cobolaci.hackaton.greenbrno.dto.cycling.CyclingIntensityResponse;
import org.cobolaci.hackaton.greenbrno.dto.cycling.CyclistIntensity;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class CyclistIntensityQueryService extends AbstractQueryService<CyclistIntensity> {

    public CyclistIntensityQueryService(
            @Qualifier("acgisWebClient") WebClient acgisWebClient,
            @Qualifier("cyclistIntensity") DataSource dataPoint) {
        super(acgisWebClient, dataPoint);
    }

    @Override
    protected Class<CyclingIntensityResponse> getResponseClass() {
        return CyclingIntensityResponse.class;
    }

}
