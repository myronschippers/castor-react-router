import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

// CUSTOM COMPONENTS
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import PlantsPage from '../../pages/PlantsPage/PlantsPage';
import AnimalsPage from '../../pages/AnimalsPage/AnimalsPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          {/* HOME PAGE */}
          <HomePage />

          {/* PLANTS PAGE */}
          <PlantsPage />

          {/* ANIMALS PAGE */}
          <AnimalsPage />
        </main>
      </div>
    );
  }
}

export default App;
