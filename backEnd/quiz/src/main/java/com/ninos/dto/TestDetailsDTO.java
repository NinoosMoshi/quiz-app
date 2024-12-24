package com.ninos.dto;

import lombok.Data;

import java.util.List;

@Data
public class TestDetailsDTO {

    private TestDTO testDTO;
    private List<QuestionDTO> questionDTOS;

}
