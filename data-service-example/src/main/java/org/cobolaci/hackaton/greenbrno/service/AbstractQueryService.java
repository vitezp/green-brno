package org.cobolaci.hackaton.greenbrno.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.CountResponse;
import org.cobolaci.hackaton.greenbrno.dto.ExternalData;
import org.cobolaci.hackaton.greenbrno.dto.ExternalDataWrapper;
import org.cobolaci.hackaton.greenbrno.dto.ExternalResponse;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.net.URI;
import java.time.Duration;
import java.util.List;

import static java.util.Collections.singletonList;

abstract class AbstractQueryService<T extends ExternalData> implements QueryService<T> {

    private final WebClient webClient;
    private final DataSource dataPoint;
    private final Cache<URI, List<T>> cache;

    public AbstractQueryService(WebClient acgisWebClient, DataSource dataPoint) {
        this.webClient = acgisWebClient;
        this.dataPoint = dataPoint;
        this.cache = Caffeine.newBuilder().maximumSize(1000)
                .expireAfterWrite(Duration.ofHours(6)).build();
    }

    @Override
    public List<T> getEntities() {
        return getEntities(PageRequest.of(0, 1000));
    }

    @Override
    public List<T> getEntities(Pageable pageable) {
        URI uri = getUri(injectPageable(pageable, getParams()));
        return getEntities(uri);
    }

    @Override
    public int getCount() {
        URI uri = getUri(countOnly(getParams()));
        return getRequest(uri)
                .bodyToMono(CountResponse.class)
                .map(count -> count == null || count.getCount() == null ? 0 : count.getCount())
                .block();
    }

    protected MultiValueMap<String, String> injectPageable(Pageable pageable, MultiValueMap<String, String> queryParams) {
        queryParams.put("resultOffset", singletonList(Long.toString(pageable.getOffset())));
        queryParams.put("resultRecordCount", singletonList(Long.toString(pageable.getPageSize())));
        return queryParams;
    }

    protected MultiValueMap<String, String> countOnly(MultiValueMap<String, String> queryParams) {
        queryParams.put("returnCountOnly", singletonList(Boolean.TRUE.toString()));
        return queryParams;
    }

    private List<T> getEntities(URI uri) {
        List<T> cachedData = cache.getIfPresent(uri);
        if (cachedData != null) {
            return cachedData;
        }
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path(dataPoint.getPath())
                        .query(uri.getQuery())
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(getResponseClass())
                .map(ExternalResponse::getEntities)
                .doOnNext(data -> cache.put(uri, data))
                .block();
    }

    private WebClient.ResponseSpec getRequest(URI uri) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path(dataPoint.getPath())
                        .query(uri.getQuery())
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve();
    }

    private URI getUri(MultiValueMap<String, String> queryParams) {
        return new DefaultUriBuilderFactory().builder()
                .path(dataPoint.getPath())
                .queryParams(queryParams)
                .build();
    }

    protected abstract <W extends ExternalDataWrapper<T>> Class<? extends ExternalResponse<T>> getResponseClass();

    private MultiValueMap<String, String> getParams() {
        LinkedMultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        dataPoint.getQueryParams().forEach((key, value) -> queryParams.put(key, singletonList(value)));
        return queryParams;
    }
}
