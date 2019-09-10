import React from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom'

class Quiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            formSubmitted: false
        }
    }

    async componentDidMount() {
        this.refreshQuestions();
    }

    async refreshQuestions() {
        let response = await axios.get('/api/v1/questions');
        this.setState({ questions: response.data });
    }

    async checkAnswerIsTrue(answerId) {
        let response = await axios.get('/api/v1/answers/' + answerId);
        return response.data.is_right;
    }

    formSubmit = async (event) => {
        event.preventDefault();
        
        let elements = document.getElementsByClassName('answerItem');
        let score = 0;
        for(var i = 0; i < elements.length; i++) {
            if (elements[i]['checked'] === true) {
                console.log(elements[i]['value']);
                if (await this.checkAnswerIsTrue(elements[i]['value']) === true) {
                    score += 5;
                }
            }
        }

        console.log("Finished with score: " + score);
        axios.post('/api/v1/scores', {
            username: document.getElementById("email").value,
            score: score
        }).then( () => this.setState({ formSubmitted: true }));
    }

    render() {
        if (this.state.formSubmitted) {
            return <Redirect to='/standings' />;
        }

        let questionsList = this.state.questions.map( (question, index) => {
            let answersText = question.answers.map( (answer, aIndex) => {
                return (<label className='radio-inline' key={aIndex} >
                            <input 
                                id={`answer_${question.id}_${answer.id}`}
                                name={`answer_${question.id}`} 
                                className='answerItem'
                                type="radio" 
                                value={answer.id} />
                            {answer.text}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>)
            });
            return (<div key={index} >
                {question.text} &nbsp;
                {answersText}           
            </div>);
        });

        return(
            <div className="container">
                <h1>Quiz</h1>
                <form onSubmit={this.formSubmit}>
                    <div className="container">
                        <h5>Please enter your email:</h5>
                        <div><input id="email" className='form-control' name="email" type="text" /></div>
                    </div>
                    
                    <div>{questionsList}</div>

                    <div><input className='btn btn-primary' type="submit" /></div>
                </form>
            </div>
        );
    }
};

export default withRouter(Quiz);