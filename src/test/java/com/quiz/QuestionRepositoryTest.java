package com.quiz;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.quiz.models.Question;
import com.quiz.repositories.QuestionRepository;

//replace this
//import junit.framework.Assert;
//with the correct import:
import org.junit.Assert;

@RunWith(SpringRunner.class)
@DataJpaTest
public class QuestionRepositoryTest {
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private QuestionRepository questionRepository;
	
	//write test here
	@Test
	public void getOneReturnQuestion() {
		//given
		Question question = new Question();
		question.setText("Is this a question?");
		question.setCategory("Random");
		entityManager.persist(question);
		entityManager.flush();
		
		//when
		Question found = questionRepository.getOne(question.getId());
		
		//then
		Assert.assertEquals(question.getText(), found.getText());
	}
}
