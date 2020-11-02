import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

// CUSTOM COMPONENTS
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import PlantsPage from '../../pages/PlantsPage/PlantsPage';
import AnimalsPage from '../../pages/AnimalsPage/AnimalsPage';
import ContactPage from '../../pages/ContactPage/ContactPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
                {/* <a href="#/animals">Animals</a> */}
              </li>
            </ul>
          </nav>
          <main className="container">
            {/* HOME PAGE */}
            <Route exact path="/" component={HomePage} />

            {/* PLANTS PAGE */}
            <Route exact path="/plants" component={PlantsPage} />

            {/* ANIMALS PAGE */}
            <Route exact path="/animals" component={AnimalsPage} />
            <Route exact path="/contact" component={ContactPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
