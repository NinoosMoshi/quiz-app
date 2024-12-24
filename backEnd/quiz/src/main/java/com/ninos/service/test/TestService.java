package com.ninos.service.test;

import com.ninos.dto.QuestionDTO;
import com.ninos.dto.TestDTO;
import com.ninos.dto.TestDetailsDTO;
import com.ninos.entity.Test;

import java.util.List;

public interface TestService {

    TestDTO createTest(TestDTO testDTO);
    QuestionDTO addQuestionInTest(QuestionDTO questionDTO);
    List<TestDTO> getAllTests();
    TestDetailsDTO getAllQuestionsByTestId(Long testId);

}
