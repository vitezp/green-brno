package org.cobolaci.hackaton.greenbrno.dto;

import java.util.List;

public interface ExternalResponse<T extends ExternalData> {

    List<T> getEntities();
}
