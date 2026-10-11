package com.smartday.backend.service;

import com.smartday.backend.dto.HealthResponse;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class HealthServiceTest {

    private final HealthService healthService = new HealthService();

    @Test
    void getHealthShouldReturnUpStatusAndServiceName() {
        // Act
        HealthResponse response = healthService.getHealth();

        // Assert
        assertEquals("UP", response.status());
        assertEquals("smart-day-backend", response.service());
    }
}
