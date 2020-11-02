import React, { Component } from 'react';
import ContactUsText from '../../components/ContactUsText/ContactUsText';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>Welcome to the React Router of your dreams.</p>
        <ContactUsText />
      </div>
    );
  }
}

export default HomePage;
