package com.quiz.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.quiz.models.Score;
import com.quiz.models.Totals;

public interface ScoreRepository extends JpaRepository<Score, Long> {

	public List<Score> findAllByOrderByScoreDesc();
	
	@Query("SELECT " +
				" s.username AS username, SUM(s.score) AS total " +
			"FROM Score s " +
			" GROUP BY s.username " +
			" ORDER BY total DESC")
	List<Totals> getTotalScores();
	
}
