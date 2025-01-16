package com.ninos.dto;

import lombok.Data;

import java.util.List;

@Data
public class SubmitTestDTO {

    private Long testId;
    private Long userId;
    private List<QuestionsResponse> responses;

}
