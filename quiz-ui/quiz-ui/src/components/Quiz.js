import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Quiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    async componentDidMount() {
        this.refreshQuestions();
    }

    async refreshQuestions() {
        let response = await axios.get('/api/v1/questions');
        this.setState({ questions: response.data });
    }

    formSubmit = (event) => {
        event.preventDefault();
        
        let elements = document.getElementsByClassName('answerItem');
        console.log(elements);
        for(var i = 0; i < elements.length; i++) {
            console.log(elements[i]['checked']);
            console.log(elements[i]['value']);
            //NEED TO FINISH THIS, SEND AXIOS REQUEST TO CHECK RIGHT ANSWERS
        }
    }

    render() {
        let questionsList = this.state.questions.map( (question, index) => {
            let answersText = question.answers.map( (answer, aIndex) => {
                return (<span key={aIndex} >
                            <input 
                                id={`answer_${question.id}_${answer.id}`}
                                name={`answer_${question.id}`} 
                                className='answerItem'
                                type="radio" 
                                value={answer.id} />
                            {answer.text}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>)
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
                        <div><input id="email" name="email" type="text" /></div>
                    </div>
                    
                    <div>{questionsList}</div>

                    <div><input type="submit" /></div>
                </form>
            </div>
        );
    }
};

export default Quiz;