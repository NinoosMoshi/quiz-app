package com.ninos.service.test;

import com.ninos.dto.QuestionDTO;
import com.ninos.dto.TestDTO;
import com.ninos.entity.Test;

import java.util.List;

public interface TestService {

    TestDTO createTest(TestDTO testDTO);
    QuestionDTO addQuestionInTest(QuestionDTO questionDTO);
    List<TestDTO> getAllTests();

}
