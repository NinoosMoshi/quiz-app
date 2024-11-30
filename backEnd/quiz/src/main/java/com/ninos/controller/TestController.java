package com.ninos.controller;

import com.ninos.dto.TestDTO;
import com.ninos.entity.Test;
import com.ninos.service.test.TestService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/test")
@CrossOrigin("*")
public class TestController {

    private final TestService testService;

    @PostMapping
    public ResponseEntity<?> createTest(@RequestBody TestDTO testDTO) {
        try {
            return new ResponseEntity<>(testService.createTest(testDTO), HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
  


}
