import React, { Component } from 'react';
import axios from 'axios';

class MainNote extends Component {
  componentDidMount() {
    const url = `${process.env.REACT_APP_API_URL}/api/profile/7`;
    console.log(url);
    // Make a request for a user with a given ID
    axios.get(url, {headers: {'Content-Type': 'application/json'}})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
          MainNote
      </div>
    );
  }
}

export default MainNote;
