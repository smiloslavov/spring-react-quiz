import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ListQuestions from './components/ListQuestions';

function App() {
  return (
    <Router>
      <div>
        <div className='container'>

          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/quiz' component={ListQuestions} />
              <Route component={PageNotFound} />
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
