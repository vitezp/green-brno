package org.cobolaci.hackaton.greenbrno.api.controller;

import org.cobolaci.hackaton.greenbrno.api.model.BicycleIntensity;
import org.cobolaci.hackaton.greenbrno.dto.greenery.Greenery;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/greenery")
@RestController
public class GreeneryController {

    private final QueryService<Greenery> greeneryQueryService;

    public GreeneryController(QueryService<Greenery> greeneryQueryService) {
        this.greeneryQueryService = greeneryQueryService;
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> getGreeneryCount() {
        return ResponseEntity.ok().body(greeneryQueryService.getCount());
    }

    @GetMapping
    public ResponseEntity<List<Greenery>> getGreenery(@RequestParam("page") int page,
                                                      @RequestParam("size") int size) {
        return ResponseEntity.ok().body(greeneryQueryService.getEntities(PageRequest.of(page, size)));
    }
}
