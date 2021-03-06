import React, { Component } from "react";

import Header from "./Header.js";

class Privacy extends Component {
    componentDidMount() {
	document.title = `${document.title} - Privacy`;
    }

  render() {
    return (
      <div>
        <Header
          title="Privacy"
          user={this.props.user}
          auth={this.props.auth}
          email={this.props.email}
          onLogout={this.props.onLogout}
        />
        <div style={{ paddingTop: 50, paddingLeft: 100 }}>
          <h3>What information do we collect?</h3>
          <p>
            The only data collect is the cub's name, cub's signature, parent's
            signature (for sign in and sign out) and the sign in and out times.
            This is securely stored in a Google sheet only accessible by the Cub
            Leaders.
          </p>
          <h3>How do we use your information?</h3>
          <p>
            This information is used to ensure that we know who is picking up
            the cubs and to keep track of attendance.
          </p>
          <h3>What information do you share?</h3>
          <p>None of the information collected is shared.</p>
        </div>
      </div>
    );
  }
}

export default Privacy;
