package org.cobolaci.hackaton.greenbrno.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.LinkedHashMap;
import java.util.List;

public class AbstractExternalWrapper<T extends ExternalData> implements ExternalDataWrapper<T> {

    @JsonProperty("attributes")
    private T entity;

    @JsonProperty("geometry")
    private LinkedHashMap<?, ?> location;

    @Override
    public T unwrap() {
        if (location instanceof LinkedHashMap<?, ?>) {
            setLocationData();
        }
        return entity;
    }

    private void setLocationData() {
        Geolocation geolocation = new Geolocation();
        if (location.containsKey("points")) {
            List<Double> points = ((LinkedHashMap<String, List<List<Double>>>) location).get("points").get(0);
            geolocation.setX(points.get(0));
            geolocation.setY(points.get(1));
            entity.setLocation(geolocation);
        } if (location.containsKey("x") && location.containsKey("y")) {
            geolocation.setX((Double) location.get("x"));
            geolocation.setY((Double) location.get("y"));
        }
        entity.setLocation(geolocation);
    }
}
