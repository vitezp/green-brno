package org.cobolaci.hackaton.greenbrno.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Data
@ConfigurationProperties("org.cobolaci.hackaton.greenbrno")
public class DataServiceExampleConfig {

    private DataProviders providers;
    private DataSources dataPoints;

    @Bean
    public WebClient acgisWebClient() {
        return WebClient.builder()
                .exchangeStrategies(ExchangeStrategies.builder()
                        .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(16000000))
                        .build())
                .baseUrl(providers.getArcgis().getBaseUrl())
                .build();
    }

    @Bean
    public DataProvider arcgis() {
        return providers.getArcgis();
    }

    @Bean
    public DataSource cyclistIntensity() {
        return dataPoints.getCyclistIntensity();
    }
}
