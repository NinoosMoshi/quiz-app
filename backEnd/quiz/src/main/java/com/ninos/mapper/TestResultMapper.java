package com.ninos.mapper;

import com.ninos.dto.TestDTO;
import com.ninos.dto.TestResultDTO;
import com.ninos.entity.Test;
import com.ninos.entity.TestResult;
import com.ninos.entity.User;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class TestResultMapper {

    public TestResultDTO entityToDto(TestResult testResult) {
        if (testResult == null) {
            return null;
        }
        TestResultDTO testResultDTO = new TestResultDTO();
        BeanUtils.copyProperties(testResult, testResultDTO);

        // Map nested objects
        if (testResult.getTest() != null) {
            testResultDTO.setTestName(testResult.getTest().getTitle());
        }
        if (testResult.getUser() != null) {
            testResultDTO.setUserName(testResult.getUser().getName());
        }
        return testResultDTO;
    }

    
    public TestResult dtoToEntity(TestResultDTO testResultDTO, Test test, User user) {
        if (testResultDTO == null) {
            return null;
        }

        TestResult testResult = new TestResult();
        BeanUtils.copyProperties(testResultDTO, testResult);

        // Map nested objects
        testResult.setTest(test);
        testResult.setUser(user);

        return testResult;
    }

}
