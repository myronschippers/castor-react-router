import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

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
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickContact}
        >
          Contact Us
        </Button>
      </div>
    );
  }
}

export default withRouter(ContactUsText);
