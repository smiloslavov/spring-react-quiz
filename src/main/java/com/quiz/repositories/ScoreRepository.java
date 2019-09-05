package com.quiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quiz.models.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {

}
