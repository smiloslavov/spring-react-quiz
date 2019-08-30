package com.quiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.models.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
}
