import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Standings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scores: [],
            overallScores: []
        }
    }

    async componentDidMount() {
        this.refreshStandings();
    }

    async refreshStandings() {
        let response = await axios.get('/api/v1/scores');
        this.setState({ scores: response.data });

        let overallResponse = await axios.get('/api/v1/scores/overall');
        this.setState({ overallScores: overallResponse.data });
    }

    render() {
        let scoresList = this.state.scores.map( (score, index) => {
            return (<div key={index} >
                        {score.username}: &nbsp; {score.score}
                    </div>);
        });

        let overallList = this.state.overallScores.map( (score, index) => {
            return (<div key={index} >
                        {score.username}: &nbsp; {score.total}
                    </div>);
        });

        return(
            <div className="container">
                <div>
                    <h1>Scores</h1>
                    <div>{scoresList}</div>
                </div>

                <div>
                    <h1>Overall Standings</h1>
                    <div>{overallList}</div>
                </div>
                <br />
                <div><Link className='btn btn-primary' to={`/quiz`}>Take Another Quiz</Link></div>
            </div>
        );
    }
};

export default Standings;