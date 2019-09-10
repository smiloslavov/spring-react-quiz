import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class AddAnswers extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            questionId: props.match.params.id,
            question: [],
            message: ""
        }
    }

    async componentDidMount() {
        let response = await axios.get('/api/v1/questions?id=' + this.state.questionId);
        this.setState({ question: response.data[0] });
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.addAnswer(event.target.true_answer.value, "true", this.state.questionId);
        this.addAnswer(event.target.first_false.value, "false", this.state.questionId);
        this.addAnswer(event.target.second_false.value, "false", this.state.questionId);
        this.addAnswer(event.target.third_false.value, "false", this.state.questionId);
        this.setState({ message: "Answers successfully saved!" });
    }

    async addAnswer(text, is_right, questionId) {
        let response = await axios.post('/api/v1/answers', {
            text: text,
            is_right: is_right,
            question: {"id": questionId}
        });

        return response;
    }

   
    render() {
        return(
            <div className="container">
                <h1>{this.state.question.text}</h1>
                <h3>{this.state.question.category}</h3>
                <div>
                    <form onSubmit={this.formSubmit}>
                        <div className="container">
                            <h5>Please enter aswers for this question:</h5>
                            <div>True answer:<input id="true_answer" className='form-control' name="true_answer" type="text" /></div>
                            <div>False answer:<input id="first_false" className='form-control' name="first_false" type="text" /></div>
                            <div>False answer:<input id="second_false" className='form-control' name="second_false" type="text" /></div>
                            <div>False answer:<input id="third_false" className='form-control' name="third_false" type="text" /></div>
                            <div>{this.state.message}</div>
                            <br />
                            <div><input className='btn btn-primary' type="submit" /></div>
                        </div>
                    </form>
                </div>
                <br />
                <div><Link className='btn btn-secondary' to={`/admin`}>Back</Link></div>
            </div>
        );
    }
};

export default AddAnswers;