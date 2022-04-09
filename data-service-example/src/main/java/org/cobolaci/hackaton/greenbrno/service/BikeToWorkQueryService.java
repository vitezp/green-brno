package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.biketowork.BikeToWork;
import org.cobolaci.hackaton.greenbrno.dto.biketowork.BikeToWorkResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class BikeToWorkQueryService extends AbstractQueryService<BikeToWork> {

    public BikeToWorkQueryService(
            @Qualifier("acgisWebClient") WebClient acgisWebClient,
            @Qualifier("bikeToWork") DataSource dataPoint) {
        super(acgisWebClient, dataPoint);
    }

    @Override
    protected Class<BikeToWorkResponse> getResponseClass() {
        return BikeToWorkResponse.class;
    }

}
