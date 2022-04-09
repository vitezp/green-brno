package org.cobolaci.hackaton.greenbrno.service;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.strava.SummaryActivity;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;

import static java.util.Collections.singletonList;

@Service
public class StravaClubActivitiesService implements QueryService<SummaryActivity> {
    private final WebClient webClient;
    private final DataSource dataPoint;
    private final Cache<String, List<SummaryActivity>> cache;

    public StravaClubActivitiesService(@Qualifier("stravaWebClient") WebClient stravaWebClient,
                                       @Qualifier("stravaClubActivities") DataSource dataPoint) {
        this.webClient = stravaWebClient;
        this.dataPoint = dataPoint;
        this.cache = Caffeine.newBuilder().maximumSize(10)
                .expireAfterWrite(Duration.ofHours(6)).build();
    }

    @Override
    public List<SummaryActivity> getEntities() {
        return getEntities(PageRequest.of(0, 30));
    }

    private String getCacheKey(Pageable pageable) {
        return dataPoint.getPath() + pageable.toString();
    }

    @Override
    public List<SummaryActivity> getEntities(Pageable pageable) {
        List<SummaryActivity> cachedData = cache.getIfPresent(getCacheKey(pageable));
        if (cachedData != null) {
            return cachedData;
        }

        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path(dataPoint.getPath())
                        .queryParams(injectPageable(pageable, new LinkedMultiValueMap<>()))
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(SummaryActivity[].class)
                .map(Arrays::asList)
                .doOnNext(data -> cache.put(getCacheKey(pageable), data))
                .block();
    }

    @Override
    public int getCount() {
        return 0;
    }

    protected MultiValueMap<String, String> injectPageable(Pageable pageable, MultiValueMap<String, String> queryParams) {
        queryParams.put("page", singletonList(Long.toString(pageable.getPageNumber())));
        queryParams.put("per_page", singletonList(Long.toString(pageable.getPageSize())));
        return queryParams;
    }
}
