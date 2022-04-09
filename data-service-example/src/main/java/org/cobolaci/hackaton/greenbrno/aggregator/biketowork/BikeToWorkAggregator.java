package org.cobolaci.hackaton.greenbrno.aggregator.biketowork;

import org.cobolaci.hackaton.greenbrno.aggregator.DataAggregator;
import org.cobolaci.hackaton.greenbrno.api.model.BikeToWorkSum;
import org.cobolaci.hackaton.greenbrno.dto.biketowork.BikeToWork;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BikeToWorkAggregator implements DataAggregator<BikeToWork, BikeToWorkSum> {

    public static final int YEAR_2019 = 2019;
    public static final int YEAR_2020 = 2020;
    public static final int YEAR_2021 = 2021;
    private final QueryService<BikeToWork> queryService;

    public BikeToWorkAggregator(QueryService<BikeToWork> queryService) {
        this.queryService = queryService;
    }

    @Override
    public List<BikeToWorkSum> aggregate() {
        final int totalCount = queryService.getCount();
        final int intPageSize = 1000;
        int processedRecords = 0;

        Map<Integer, BikeToWorkSum> cache = new HashMap<>();
        cache.put(YEAR_2019, new BikeToWorkSum(YEAR_2019, BigDecimal.ZERO));
        cache.put(YEAR_2020, new BikeToWorkSum(YEAR_2020, BigDecimal.ZERO));
        cache.put(YEAR_2021, new BikeToWorkSum(YEAR_2021, BigDecimal.ZERO));

        while (processedRecords < totalCount) {
            queryService.getEntities(PageRequest.of(processedRecords / intPageSize, intPageSize)).forEach(x -> processEntry(cache, x));
            processedRecords += intPageSize;
        }

        return new ArrayList<>(cache.values());
    }

    private void processEntry(Map<Integer, BikeToWorkSum> cache, BikeToWork bikeToWork) {
        updateCache(YEAR_2019, cache, bikeToWork, bikeToWork.getData2019());
        updateCache(YEAR_2020, cache, bikeToWork, bikeToWork.getData2020());
        updateCache(YEAR_2021, cache, bikeToWork, bikeToWork.getData2021());
    }

    private void updateCache(Integer year, Map<Integer, BikeToWorkSum> cache, BikeToWork bikeToWork, Integer cyclistsCount) {
        BikeToWorkSum bikeToWorkSum = cache.get(year);
        bikeToWorkSum.setTotalDistance(bikeToWorkSum.getTotalDistance().add(bikeToWork.getShapeLength().multiply(new BigDecimal(cyclistsCount))));
        cache.put(year, bikeToWorkSum);
    }

}
