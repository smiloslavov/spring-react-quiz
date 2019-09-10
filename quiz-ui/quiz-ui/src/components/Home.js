import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Welcome to our Quiz</h1>
            <Link to={`/admin`} className='btn btn-danger'>Admin</Link>
            <br />
            <br />
            <Link to={`/quiz`} className='btn btn-success'>Take The Quiz</Link>
        </div>
    );
};

export default Home;