package org.cobolaci.hackaton.greenbrno.dto;

import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public abstract class AbstractResponse<T extends ExternalData, W extends ExternalDataWrapper<T>> implements ExternalResponse<T> {

    protected List<W> features;

    @Override
    public List<T> getEntities() {
        return features.stream().map(ExternalDataWrapper::unwrap).collect(Collectors.toList());
    }
}
