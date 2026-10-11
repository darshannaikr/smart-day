package com.smartday.backend.service;

import com.smartday.backend.dto.HealthResponse;
import org.springframework.stereotype.Service;

@Service
public class HealthService {

    public HealthResponse getHealth() {
        return  new HealthResponse(
                "UP",
                "smart-day-backend"
        );
    }
}
