package org.cobolaci.hackaton.greenbrno.dto;

public interface ExternalDataWrapper<T extends ExternalData> {

    T unwrap();
}
