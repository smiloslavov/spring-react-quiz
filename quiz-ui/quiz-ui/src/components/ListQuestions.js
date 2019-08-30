import React from 'react';
import axios from 'axios';

class ListQuestions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    async componentDidMount() {
        let response = await axios.get('/api/v1/questions');
        console.log(response);
        this.setState({ questions: response.data });
    }

    render() {
        let questionsList = this.state.questions.map( (question, index) => {
            return (<div key={index} >{question.text}</div>);
        });

        return(
            <div className="container">
                <h1>Quiz</h1>
                <div>{questionsList}</div>
            </div>
        );
    }
};

export default ListQuestions;