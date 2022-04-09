package org.cobolaci.hackaton.greenbrno.api.controller;

import org.cobolaci.hackaton.greenbrno.aggregator.DataAggregator;
import org.cobolaci.hackaton.greenbrno.api.model.BicycleIntensity;
import org.cobolaci.hackaton.greenbrno.dto.cycling.CyclistIntensity;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/cycling")
@RestController
public class CyclingController {

    private final DataAggregator<CyclistIntensity, BicycleIntensity> aggregator;
    private final QueryService<CyclistIntensity> cyclistIntensityQueryService;

    public CyclingController(DataAggregator<CyclistIntensity, BicycleIntensity> aggregator,
                             QueryService<CyclistIntensity> cyclistIntensityQueryService) {
        this.aggregator = aggregator;
        this.cyclistIntensityQueryService = cyclistIntensityQueryService;
    }

    @GetMapping("/aggregate")
    public ResponseEntity<List<BicycleIntensity>> getGreeneryCount() {
        return ResponseEntity.ok().body(aggregator.aggregate());
    }

    @GetMapping
    public ResponseEntity<List<CyclistIntensity>> getCyclistIntensity(@RequestParam("page") int page,
                                                                      @RequestParam("size") int size) {
        return ResponseEntity.ok().body(cyclistIntensityQueryService.getEntities(PageRequest.of(page, size)));
    }
}
