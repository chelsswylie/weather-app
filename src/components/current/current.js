// This page needs to get current temperature at user's current location

import React, { Component } from "react";
import "./current.css";

class Current extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App" id="base">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default Current;

// read all entities - how to get
// fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//     "x-rapidapi-key": "apikey"
//   }
// })
// .then(response => response.json())
// .then(response => {
//   this.setState({
//     friends: response
//   })
// })
// .catch(err => { console.log(err);
// });
