package com.ninos.mapper;

import com.ninos.dto.TestDTO;
import com.ninos.entity.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class TestMapper {


    public TestDTO entityToDto(Test test) {
        TestDTO testDTO = new TestDTO();
        BeanUtils.copyProperties(test, testDTO);
        return testDTO;
    }

    public Test dtoToEntity(TestDTO testDTO) {
        Test test = new Test();
        BeanUtils.copyProperties(testDTO, test);
        return test;
    }


}
