import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Standings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scores: []
        }
    }

    async componentDidMount() {
        this.refreshStandings();
    }

    async refreshStandings() {
        let response = await axios.get('/api/v1/scores');
        this.setState({ scores: response.data });
    }

    render() {
        let scoresList = this.state.scores.map( (score, index) => {
            return (<div key={index} >
                        {score.username}: &nbsp; {score.score}
                    </div>);
        });

        return(
            <div className="container">
                <h1>Scores</h1>
                <div>{scoresList}</div>
                <div><Link to={`/quiz`}>Take Another Quiz</Link></div>
            </div>
        );
    }
};

export default Standings;