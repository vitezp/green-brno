package org.cobolaci.hackaton.greenbrno.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AbstractExternalWrapper<T extends ExternalData> implements ExternalDataWrapper<T> {

    @JsonProperty("attributes")
    private T entity;

    @Override
    public T unwrap() {
        return entity;
    }
}
