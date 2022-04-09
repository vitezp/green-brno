package org.cobolaci.hackaton.greenbrno.api.controller;

import org.cobolaci.hackaton.greenbrno.dto.strava.SummaryActivity;
import org.cobolaci.hackaton.greenbrno.service.QueryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/v1/strava")
@RestController
public class ClubActivitiesController {

    private final QueryService<SummaryActivity> summaryActivityQueryService;

    public ClubActivitiesController(QueryService<SummaryActivity> summaryActivityQueryService) {
        this.summaryActivityQueryService = summaryActivityQueryService;
    }

    @GetMapping("/clubActivities")
    public ResponseEntity<List<SummaryActivity>> getClubActivities(@RequestParam("page") int page,
                                                                   @RequestParam("size") int size) {
        return ResponseEntity.ok().body(summaryActivityQueryService.getEntities(PageRequest.of(page + 1, size)));
    }
}
