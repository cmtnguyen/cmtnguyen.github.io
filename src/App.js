import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import SchoolPage from './pages/SchoolPage/SchoolPage';

function App() {
    return (
      // Routes for website
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/projects">
            <ProjectPage />
          </Route>
          <Route exact path="/school">
            <SchoolPage />
          </Route>
        </Switch>
      </Router>
    );
  }
  
  export default App;
