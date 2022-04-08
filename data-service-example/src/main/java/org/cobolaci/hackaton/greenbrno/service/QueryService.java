package org.cobolaci.hackaton.greenbrno.service;

import org.cobolaci.hackaton.greenbrno.dto.ExternalData;

import java.util.List;

public interface QueryService<T extends ExternalData> {

    List<T> getEntities();

    int getCount();
}
