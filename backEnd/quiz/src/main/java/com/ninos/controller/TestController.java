package com.ninos.controller;

import com.ninos.dto.QuestionDTO;
import com.ninos.dto.TestDTO;
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


    @PostMapping("/question")
    public ResponseEntity<?> addQuestionInTest(@RequestBody QuestionDTO questionDTO) {
        try {
            return new ResponseEntity<>(testService.addQuestionInTest(questionDTO), HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
  

    @GetMapping
    public ResponseEntity<?> getAllTests() {
        try {
            return new ResponseEntity<>(testService.getAllTests(), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/{testId}")
    public ResponseEntity<?> getAllQuestionsByTestId(@PathVariable Long testId) {
        try {
            return new ResponseEntity<>(testService.getAllQuestionsByTestId(testId), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
