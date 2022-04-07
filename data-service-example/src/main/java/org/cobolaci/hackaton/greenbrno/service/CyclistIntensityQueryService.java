package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.CyclistIntensity;
import org.cobolaci.hackaton.greenbrno.dto.CyclistIntensityWrapper;
import org.cobolaci.hackaton.greenbrno.dto.ResponseWrapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import static java.util.Collections.singletonList;

@Service
public class CyclistIntensityQueryService {

    private final WebClient webClient;
    private final DataSource dataPoint;

    public CyclistIntensityQueryService(
            @Qualifier("acgisWebClient") WebClient acgisWebClient,
            @Qualifier("cyclistIntensity") DataSource dataPoint) {
        this.webClient = acgisWebClient;
        this.dataPoint = dataPoint;
    }

    public List<CyclistIntensity> getCyclistIntensity() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path(dataPoint.getPath())
                        .queryParams(getParams())
                        .build()
                )
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(ResponseWrapper.class)
                .map(unwrap())
                .block();
    }

    private Function<ResponseWrapper, List<CyclistIntensity>> unwrap() {
        return response -> response.getFeatures().stream().map(CyclistIntensityWrapper::getCyclistIntensity).collect(Collectors.toList());
    }

    private MultiValueMap<String, String> getParams() {
        LinkedMultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        dataPoint.getQueryParams().forEach((key, value) -> queryParams.put(key, singletonList(value)));
        return queryParams;
    }
}
