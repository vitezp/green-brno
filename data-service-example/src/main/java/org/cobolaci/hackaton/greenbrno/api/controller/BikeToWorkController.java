package org.cobolaci.hackaton.greenbrno.api.controller;

import org.cobolaci.hackaton.greenbrno.aggregator.DataAggregator;
import org.cobolaci.hackaton.greenbrno.api.model.BikeToWorkSum;
import org.cobolaci.hackaton.greenbrno.dto.biketowork.BikeToWork;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/biketowork")
@RestController
public class BikeToWorkController {

    private final DataAggregator<BikeToWork, BikeToWorkSum> aggregator;

    public BikeToWorkController(DataAggregator<BikeToWork, BikeToWorkSum> aggregator) {
        this.aggregator = aggregator;
    }

    @GetMapping("/aggregate")
    public ResponseEntity<List<BikeToWorkSum>> getBikeToWork() {
        return ResponseEntity.ok().body(aggregator.aggregate());
    }
}
