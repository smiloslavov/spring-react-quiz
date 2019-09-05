import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ListQuestions from './components/ListQuestions';
import CreateQuestion from './components/CreateQuestion';
import AddAnswers from './components/AddAnswers';
import Quiz from './components/Quiz';
import Standings from './components/Standings';

function App() {
  return (
    <Router>
      <div>
        <div className='container'>

          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/quiz' component={Quiz} />
              <Route path='/admin' component={ListQuestions} />
              <Route path='/create' component={CreateQuestion} />
              <Route path='/add/:id' component ={AddAnswers} />
              <Route path='/standings' component ={Standings} />
              <Route component={PageNotFound} />
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
