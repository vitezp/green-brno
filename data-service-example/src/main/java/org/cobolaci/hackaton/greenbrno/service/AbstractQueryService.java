package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.ExternalData;
import org.cobolaci.hackaton.greenbrno.dto.ExternalDataWrapper;
import org.cobolaci.hackaton.greenbrno.dto.ExternalResponse;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

import static java.util.Collections.singletonList;

abstract class AbstractQueryService<T extends ExternalData> implements QueryService<T> {

    private final WebClient webClient;
    private final DataSource dataPoint;

    public AbstractQueryService(WebClient acgisWebClient, DataSource dataPoint) {
        this.webClient = acgisWebClient;
        this.dataPoint = dataPoint;
    }

    @Override
    public List<T> getEntities() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path(dataPoint.getPath())
                        .queryParams(getParams())
                        .build()
                )
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(getResponseClass())
                .map(ExternalResponse::getEntities)
                .block();
    }

    protected abstract <W extends ExternalDataWrapper<T>> Class<? extends ExternalResponse<T>> getResponseClass();

    private MultiValueMap<String, String> getParams() {
        LinkedMultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        dataPoint.getQueryParams().forEach((key, value) -> queryParams.put(key, singletonList(value)));
        return queryParams;
    }
}
