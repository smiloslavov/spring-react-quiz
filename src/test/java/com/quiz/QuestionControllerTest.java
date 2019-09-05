package com.quiz;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.quiz.models.Question;

public class QuestionControllerTest extends AbstractTest {
	@Override
	@Before
	public void setUp() {
		super.setUp();
	}
	
	@Test
	public void getQuestions() throws Exception {
		String uri = "/api/v1/questions";
		
		MvcResult result = mvc.perform(MockMvcRequestBuilders.get(uri)
								.accept(MediaType.APPLICATION_JSON_VALUE))
							.andReturn();
		
		int status = result.getResponse().getStatus();
		Assert.assertEquals(200, status);
		
		String content = result.getResponse().getContentAsString();
		Question[] questionList = super.mapFromJson(content, Question[].class);
		Assert.assertTrue(questionList.length == 0);
	}
	
	@Test
	public void createQuestion() throws Exception {
		String uri = "/api/v1/questions";
		
		Question question = new Question();
		question.setText("Am I a question?");
		question.setCategory("Test");
		
		String inputJson = super.mapToJson(question);
		
		MvcResult result = mvc.perform(MockMvcRequestBuilders.post(uri)
				.contentType(MediaType.APPLICATION_JSON_VALUE)
				.content(inputJson)).andReturn();
		
		int status = result.getResponse().getStatus();
		Assert.assertEquals(200, status); //201 is created status
		
		String content = result.getResponse().getContentAsString();
		Assert.assertEquals("Question successfully created!", content);
	}
}
