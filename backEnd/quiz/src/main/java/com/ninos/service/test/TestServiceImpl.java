package com.ninos.service.test;

import com.ninos.dto.QuestionDTO;
import com.ninos.dto.TestDTO;
import com.ninos.entity.Question;
import com.ninos.entity.Test;
import com.ninos.mapper.QuestionMapper;
import com.ninos.mapper.TestMapper;
import com.ninos.repository.QuestionRepository;
import com.ninos.repository.TestRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TestServiceImpl implements TestService {

    private final TestRepository testRepository;
    private final TestMapper testMapper;

    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;


    @Override
    public TestDTO createTest(TestDTO testDTO) {
        Test test = testMapper.dtoToEntity(testDTO);
        Test savedTest = testRepository.save(test);
        return testMapper.entityToDto(savedTest);
    }


    @Override
    public QuestionDTO addQuestionInTest(QuestionDTO questionDTO) {
        Optional<Test> testOptional = testRepository.findById(questionDTO.getId());
        if(testOptional.isPresent()) {
            Question question = new Question();

            question.setTest(testOptional.get());
            question.setQuestionText(questionDTO.getQuestionText());
            question.setOptionA(questionDTO.getOptionA());
            question.setOptionB(questionDTO.getOptionB());
            question.setOptionC(questionDTO.getOptionC());
            question.setOptionD(questionDTO.getOptionD());
            question.setCorrectOption(questionDTO.getCorrectOption());

            Question savedQuestion = questionRepository.save(question);
            return questionMapper.entityToDto(savedQuestion);
        }
            throw new EntityNotFoundException("Test not found");

    }


    @Override
    public List<TestDTO> getAllTests() {
       return testRepository.findAll().stream().peek(
               test -> test.setTime(test.getQuestions().size() * test.getTime())).collect(Collectors.toList())
               .stream().map(testMapper::entityToDto).collect(Collectors.toList());
    }


}
