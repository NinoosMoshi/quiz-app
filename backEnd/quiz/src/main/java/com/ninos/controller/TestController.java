package com.ninos.controller;

import com.ninos.service.test.TestService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController("/api/test")
public class TestController {

    private final TestService testService;



}
