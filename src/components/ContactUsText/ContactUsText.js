import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class ContactUsText extends Component {
  handleClickContact = (event) => {
    // navigate to contact
    this.props.history.push('/contact');
  };

  render() {
    return (
      <div>
        <p>
          <Link to="/contact">Click here</Link> for more details.
        </p>
        <button onClick={this.handleClickContact}>Contact Us</button>
      </div>
    );
  }
}

export default withRouter(ContactUsText);
