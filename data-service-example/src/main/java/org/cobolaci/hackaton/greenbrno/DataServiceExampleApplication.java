package org.cobolaci.hackaton.greenbrno;

import org.cobolaci.hackaton.greenbrno.config.DataServiceExampleConfig;
import org.cobolaci.hackaton.greenbrno.dto.cycling.CyclistIntensity;
import org.cobolaci.hackaton.greenbrno.service.CyclistIntensityQueryService;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.event.EventListener;

import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties(DataServiceExampleConfig.class)
public class DataServiceExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(DataServiceExampleApplication.class, args);
    }

    @Autowired
    private QueryService<CyclistIntensity> service;

    @EventListener(ApplicationReadyEvent.class)
    public void appReady() {
        List<CyclistIntensity> intensity = service.getEntities();

        intensity.size();
    }

}