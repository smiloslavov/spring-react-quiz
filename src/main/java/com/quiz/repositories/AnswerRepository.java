package com.quiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.models.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
	
}
