import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          {/* HOME PAGE */}
          <h2>Home</h2>
          <p>Welcome to the React Router of your dreams</p>

          {/* PLANTS PAGE */}
          <h2>Plants</h2>
          <p>Plants are an integral part of our ecosystem.</p>

          {/* ANIMALS PAGE */}
          <h2>Animals</h2>
          <p>Cute bundles of joy, not when they bite.</p>
        </main>
      </div>
    );
  }
}

export default App;
