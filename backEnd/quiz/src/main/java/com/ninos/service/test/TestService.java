package com.ninos.service.test;

import com.ninos.dto.QuestionDTO;
import com.ninos.dto.TestDTO;

public interface TestService {

    TestDTO createTest(TestDTO testDTO);
    QuestionDTO addQuestionInTest(QuestionDTO questionDTO);

}
