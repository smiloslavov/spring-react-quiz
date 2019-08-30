package com.quiz.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.models.Answer;
import com.quiz.models.Question;
import com.quiz.repositories.QuestionRepository;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionController {

	@Autowired
	private QuestionRepository questionRepository;
	
	@GetMapping
	public List<Question> list() {
		return questionRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Question get(@PathVariable("id") long id) {
		return questionRepository.getOne(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Question question) {
		questionRepository.save(question);
	}
}
