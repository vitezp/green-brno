package org.cobolaci.hackaton.greenbrno.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.http.codec.ClientCodecConfigurer;
import org.springframework.http.codec.json.Jackson2JsonDecoder;
import org.springframework.http.codec.json.Jackson2JsonEncoder;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

import static org.springframework.util.MimeTypeUtils.TEXT_PLAIN;

@Data
@ConfigurationProperties("org.cobolaci.hackaton.greenbrno")
public class DataServiceExampleConfig {

    private static final int BUFFER_SIZE_16MB = 16 * 1000 * 1000;

    private DataProviders providers;
    private DataSources dataSources;

    @Bean
    public WebClient acgisWebClient() {
        return WebClient.builder()
                .exchangeStrategies(ExchangeStrategies.builder().codecs(this::acceptedCodecs).build())
                .baseUrl(providers.getArcgis().getBaseUrl())
                .build();
    }

    @Bean
    public WebClient stravaWebClient(@Qualifier("stravaapi") DataProvider stravaDataProvider) {
        return WebClient.builder()
                .exchangeStrategies(ExchangeStrategies.builder().codecs(this::acceptedCodecs).build())
                .baseUrl(providers.getStravaapi().getBaseUrl())
                .defaultHeaders(httpHeaders -> {httpHeaders.setBearerAuth(stravaDataProvider.getA);})
                .build();
    }

    private void acceptedCodecs(ClientCodecConfigurer clientCodecConfigurer) {
        clientCodecConfigurer.defaultCodecs().maxInMemorySize(BUFFER_SIZE_16MB);
        // api returns text/plain instead of application/json for count request
        clientCodecConfigurer.customCodecs().registerWithDefaultConfig(new Jackson2JsonDecoder(new ObjectMapper(), TEXT_PLAIN));
        clientCodecConfigurer.customCodecs().registerWithDefaultConfig(new Jackson2JsonEncoder(new ObjectMapper(), TEXT_PLAIN));
    }

    @Bean
    public DataProvider arcgis() {
        return providers.getArcgis();
    }

    @Bean
    public DataProvider stravaapi() {
        return providers.getStravaapi();
    }

    @Bean
    public DataSource cyclistIntensity() {
        return dataSources.getCyclistIntensity();
    }

    @Bean
    public DataSource greenery() {
        return dataSources.getGreenery();
    }

    @Bean
    public DataSource stravaClubActivities() {
        return dataSources.getStravaClubActivities();
    }

    @Bean
    public DataSource bikeToWork() {
        return dataSources.getBikeToWork();
    }
}
