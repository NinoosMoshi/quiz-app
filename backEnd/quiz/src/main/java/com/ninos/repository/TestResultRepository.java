package com.ninos.repository;

import com.ninos.entity.TestResult;
import com.ninos.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TestResultRepository extends JpaRepository<TestResult, Long> {

    List<TestResult> findAllByUserId(Long userId);

    Long user(User user);
}
