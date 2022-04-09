package org.cobolaci.hackaton.greenbrno.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/greenery")
@RestController
public class GreeneryController {

    @GetMapping("/count")
    public ResponseEntity<Integer> getGreeneryCount() {
        return ResponseEntity.ok().body(21212);
    }
}
