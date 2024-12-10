package com.ninos.mapper;

import com.ninos.dto.QuestionDTO;
import com.ninos.entity.Question;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class QuestionMapper {


    public QuestionDTO entityToDto(Question question) {
        QuestionDTO questionDTO = new QuestionDTO();
        BeanUtils.copyProperties(question, questionDTO);
        return questionDTO;
    }

    public Question dtoToEntity(QuestionDTO questionDTO) {
        Question question = new Question();
        BeanUtils.copyProperties(questionDTO, question);
        return question;
    }


}
