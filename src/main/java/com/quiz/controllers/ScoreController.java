package com.quiz.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.models.Score;
import com.quiz.models.Totals;
import com.quiz.repositories.ScoreRepository;

@RestController
@RequestMapping("/api/v1/scores")
public class ScoreController {

	@Autowired
	private ScoreRepository scoreRepository;
	
	@GetMapping
	public List<Score> list() {
		return scoreRepository.findAllByOrderByScoreDesc();
	}
	
	@GetMapping("/overall")
	public List<Totals> total() {
		return scoreRepository.getTotalScores();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public Score create(@RequestBody Score score) {
		return scoreRepository.save(score);
	}
}
