package org.cobolaci.hackaton.greenbrno.aggregator;

import org.cobolaci.hackaton.greenbrno.api.model.OutputData;
import org.cobolaci.hackaton.greenbrno.dto.ExternalData;

import java.util.List;

public interface DataAggregator<T extends ExternalData, U extends OutputData> {

    List<U> aggregate();
}
