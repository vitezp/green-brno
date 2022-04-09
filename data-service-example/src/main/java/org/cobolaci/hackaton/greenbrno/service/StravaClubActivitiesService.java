package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.config.DataSource;
import org.cobolaci.hackaton.greenbrno.dto.ExternalDataWrapper;
import org.cobolaci.hackaton.greenbrno.dto.ExternalResponse;
import org.cobolaci.hackaton.greenbrno.dto.strava.SummaryActivity;
import org.cobolaci.hackaton.greenbrno.dto.strava.SummaryActivityResponse;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class StravaClubActivitiesService implements QueryService<SummaryActivity> {
    private final WebClient webClient;
    private final DataSource dataPoint;

    public StravaClubActivitiesService(@Qualifier("stravaWebClient") WebClient stravaWebClient,
                                @Qualifier("stravaClubActivities") DataSource dataPoint) {
        this.webClient = stravaWebClient;
        this.dataPoint = dataPoint;
    }

    @Override
    public List<SummaryActivity> getEntities() {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder.path(dataPoint.getPath())
                        .build())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(SummaryActivity[].class)
                .map(Arrays::asList)
                .block();
    }

    @Override
    public List<SummaryActivity> getEntities(Pageable pageable) {
        return null;
    }

    @Override
    public int getCount() {
        return 0;
    }
}
