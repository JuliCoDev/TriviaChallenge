import React from 'react';
import './App.css';
import {Home} from './components/Home/home';
import {Questions} from './components/questions/questions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
