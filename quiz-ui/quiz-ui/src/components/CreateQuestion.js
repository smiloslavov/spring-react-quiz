import React from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom'

class CreateQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    formSubmit = (event) => {
        event.preventDefault();
       
        axios.post('/api/v1/questions', {
            text: event.target.question.value,
            category: event.target.question.category
        }).then( () => this.setState({ formSubmitted: true }));
    }

    render() {
        if (this.state.formSubmitted) {
            return <Redirect to='/admin' />;
        }

        return (            
            <form onSubmit={this.formSubmit}>
                <div className="container">
                    <h1>Enter New Question</h1>
                    <div>Question:<input id="question" name="question" type="text" /></div>
                    <div>Category:<input id="category" name="category" type="text" /></div>
                    <div><input type="submit" value="Submit" /></div>
                </div>
            </form>
        );
    }
};

export default withRouter(CreateQuestion);