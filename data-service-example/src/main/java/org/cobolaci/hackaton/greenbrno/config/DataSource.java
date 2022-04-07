package org.cobolaci.hackaton.greenbrno.config;

import lombok.Data;

import java.util.Map;

@Data
public class DataSource {
    private String path;
    private Map<String, String> queryParams;
}
