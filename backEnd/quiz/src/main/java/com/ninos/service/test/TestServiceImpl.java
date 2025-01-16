package com.ninos.service.test;

import com.ninos.dto.*;
import com.ninos.entity.Question;
import com.ninos.entity.Test;
import com.ninos.entity.TestResult;
import com.ninos.entity.User;
import com.ninos.mapper.QuestionMapper;
import com.ninos.mapper.TestMapper;
import com.ninos.mapper.TestResultMapper;
import com.ninos.repository.QuestionRepository;
import com.ninos.repository.TestRepository;
import com.ninos.repository.TestResultRepository;
import com.ninos.repository.UserRepository;
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

    private final TestResultRepository testResultRepository;
    private final TestResultMapper testResultMapper;

    private final UserRepository UserRepository;
    private final UserRepository userRepository;


    @Override
    public TestDTO createTest(TestDTO testDTO) {
        Test test = testMapper.dtoToEntity(testDTO);
        Test savedTest = testRepository.save(test);
        return testMapper.entityToDto(savedTest);
    }


    @Override
    public QuestionDTO addQuestionInTest(QuestionDTO questionDTO) {
        Optional<Test> testOptional = testRepository.findById(questionDTO.getId());
        if (testOptional.isPresent()) {
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


    @Override
    public TestDetailsDTO getAllQuestionsByTestId(Long testId) {
        Optional<Test> optionalTest = testRepository.findById(testId);
        TestDetailsDTO testDetailsDTO = new TestDetailsDTO();
        if (optionalTest.isPresent()) {
            TestDTO testDTO = testMapper.entityToDto(optionalTest.get());
            testDTO.setTime(optionalTest.get().getTime() * optionalTest.get().getQuestions().size());

            testDetailsDTO.setTestDTO(testDTO);
            testDetailsDTO.setQuestionDTOS(optionalTest.get().getQuestions().stream().map(questionMapper::entityToDto).collect(Collectors.toList()));
            return testDetailsDTO;
        }
        return testDetailsDTO;
    }


    @Override
    public TestResultDTO submitTest(SubmitTestDTO requestDTO) {
        Test test = testRepository.findById(requestDTO.getTestId())
                .orElseThrow(() -> new EntityNotFoundException("Test not found"));

        User user = userRepository.findById(requestDTO.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        int correctAnswer = 0;
        for (QuestionsResponse response : requestDTO.getResponses()) {
            Question question = questionRepository.findById(response.getQuestionId())
                    .orElseThrow(() -> new EntityNotFoundException("Question not found"));

            if(question.getCorrectOption().equals(response.getSelectedOption())){
                correctAnswer++;
            }
        }

        int totalQuestions = test.getQuestions().size();
        double percentage = ((double) correctAnswer / totalQuestions) * 100;

        TestResult testResult = new TestResult();
        testResult.setTest(test);
        testResult.setUser(user);
        testResult.setTotalQuestions(totalQuestions);
        testResult.setCorrectAnswers(correctAnswer);
        testResult.setPercentage(percentage);

        TestResult saved = testResultRepository.save(testResult);
        return testResultMapper.entityToDto(saved);
    }


}