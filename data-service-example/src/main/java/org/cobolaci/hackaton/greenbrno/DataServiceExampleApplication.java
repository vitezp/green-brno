package org.cobolaci.hackaton.greenbrno;

import com.jayway.jsonpath.internal.function.numeric.Sum;
import lombok.extern.slf4j.Slf4j;
import org.cobolaci.hackaton.greenbrno.aggregator.DataAggregator;
import org.cobolaci.hackaton.greenbrno.api.model.BicycleIntensity;
import org.cobolaci.hackaton.greenbrno.config.DataServiceExampleConfig;
import org.cobolaci.hackaton.greenbrno.dto.cycling.CyclistIntensity;
import org.cobolaci.hackaton.greenbrno.dto.greenery.Greenery;
import org.cobolaci.hackaton.greenbrno.dto.strava.SummaryActivity;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.PageRequest;
import java.util.List;

@Slf4j
@SpringBootApplication
@EnableConfigurationProperties(DataServiceExampleConfig.class)
public class DataServiceExampleApplication {

    @Autowired
    private QueryService<CyclistIntensity> service;

    @Autowired
    private QueryService<Greenery> greeneryService;
    @Autowired
    private QueryService<SummaryActivity> stravaClubActivitiesService;

    @Autowired
    DataAggregator<CyclistIntensity, BicycleIntensity> cyclingAggregator;

    public static void main(String[] args) {
        SpringApplication.run(DataServiceExampleApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void appReady() {
//        List<SummaryActivity> clubActivities = stravaClubActivitiesService.getEntities(PageRequest.of(1, 30));
//        clubActivities = stravaClubActivitiesService.getEntities(PageRequest.of(2, 30));
//        clubActivities = stravaClubActivitiesService.getEntities(PageRequest.of(3, 30));

        List<CyclistIntensity> intensity = service.getEntities();

        log.info("first query");
        List<Greenery> greenery = greeneryService.getEntities(PageRequest.of(0, 1000));
        log.info("second query");
        greenery = greeneryService.getEntities(PageRequest.of(0, 1000));
        log.info("third query");
        greenery = greeneryService.getEntities(PageRequest.of(1000, 1000));
        log.info("finished");

        cyclingAggregator.aggregate();

        int greeneryCount = greeneryService.getCount();

        intensity.size();
        greenery.size();
    }

}