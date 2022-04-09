package org.cobolaci.hackaton.greenbrno.aggregator.cycling;

import org.cobolaci.hackaton.greenbrno.aggregator.DataAggregator;
import org.cobolaci.hackaton.greenbrno.api.model.BicycleIntensity;
import org.cobolaci.hackaton.greenbrno.dto.cycling.CyclistIntensity;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CyclingIntensityAggregator implements DataAggregator<CyclistIntensity, BicycleIntensity> {

    private final QueryService<CyclistIntensity> queryService;

    public CyclingIntensityAggregator(QueryService<CyclistIntensity> queryService) {
        this.queryService = queryService;
    }

    @Override
    public List<BicycleIntensity> aggregate() {
        final int totalCount = queryService.getCount();
        final int intPageSize = 1000;
        int processedRecords = 0;

        Map<Integer, BicycleIntensity> cache = new HashMap<>();

        while(processedRecords < totalCount) {
            queryService.getEntities(PageRequest.of(processedRecords / intPageSize, intPageSize)).forEach(x -> processEntry(cache, x));
            processedRecords += intPageSize;
        }

        return new ArrayList<>(cache.values());
    }

    private void processEntry(Map<Integer, BicycleIntensity> map, CyclistIntensity intensity) {
        int total = getCyclistIntensityTotal(intensity);
        if (!map.containsKey(intensity.getLocationId())) {
            map.put(intensity.getLocationId(), new BicycleIntensity(intensity.getLocationId(), 0, intensity.getLocation()));
        }
        BicycleIntensity bicycleIntensity = map.get(intensity.getLocationId());
        bicycleIntensity.setTotal(bicycleIntensity.getTotal() + total);
    }

    private int getCyclistIntensityTotal(CyclistIntensity intensity) {
        int total = 0;
        total += intensity.getFirstDirectionCyclists() == null ? 0 : intensity.getFirstDirectionCyclists();
        total += intensity.getSecondDirectionCyclists() == null ? 0 : intensity.getSecondDirectionCyclists();
        return total;
    }

}
