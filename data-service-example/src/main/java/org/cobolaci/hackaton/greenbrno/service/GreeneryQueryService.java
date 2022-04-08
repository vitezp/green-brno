package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.greenery.Greenery;
import org.cobolaci.hackaton.greenbrno.dto.greenery.GreeneryResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GreeneryQueryService extends AbstractQueryService<Greenery> {

    public GreeneryQueryService(
            @Qualifier("acgisWebClient") WebClient acgisWebClient,
            @Qualifier("greenery") DataSource dataPoint) {
        super(acgisWebClient, dataPoint);
    }

    @Override
    protected Class<GreeneryResponse> getResponseClass() {
        return GreeneryResponse.class;
    }

}
