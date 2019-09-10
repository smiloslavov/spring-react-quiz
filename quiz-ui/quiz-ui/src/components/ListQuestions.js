import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class ListQuestions extends React.Component {

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

    render() {
        let questionsList = this.state.questions.map( (question, index) => {
            return (<div key={index} >
                        {question.text} &nbsp;
                        <Link className='btn btn-primary' to={`/add/${ question.id }`}>Add Answers</Link>  &nbsp;  
                        <button className='btn btn-danger' onClick={ () => { 
                                axios.delete('/api/v1/questions/' + question.id, 
                                    { data: { foo: "bar" }}, )
                                .then( () => {
                                        this.refreshQuestions();
                                }); 
                            }}>
                            Delete
                        </button>  &nbsp; 
                        
                    </div>);
        });

        return(
            <div className="container">
                <h1>Admin</h1>
                <div>{questionsList}</div>
                <div><Link className='btn btn-primary' to={`/create`}>Add Question</Link></div>
            </div>
        );
    }
};

export default ListQuestions;