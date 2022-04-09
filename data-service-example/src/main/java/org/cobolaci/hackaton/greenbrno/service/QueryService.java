package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.dto.ExternalData;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface QueryService<T extends ExternalData> {

    List<T> getEntities();

    List<T> getEntities(Pageable pageable);

    int getCount();
}
