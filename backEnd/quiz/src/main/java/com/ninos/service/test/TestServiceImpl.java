package com.ninos.service.test;

import com.ninos.dto.TestDTO;
import com.ninos.entity.Test;
import com.ninos.mapper.TestMapper;
import com.ninos.repository.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TestServiceImpl implements TestService {

    private final TestRepository testRepository;
    private final TestMapper testMapper;


    @Override
    public TestDTO createTest(TestDTO testDTO) {
        Test test = testMapper.dtoToEntity(testDTO);
        Test savedTest = testRepository.save(test);
        return testMapper.entityToDto(savedTest);
    }


}
