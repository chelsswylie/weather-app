// This page needs to get current temperature at user's current location
// Class component
import React, { useState, Component } from "react";
import "./current.css";
import App from "../current-location/currentlocation";
import CurrentAPICall from "../currentAPI/currentAPI";

class Current extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    <App />;
    <CurrentAPICall>{console.log("It works")}</CurrentAPICall>;
    return (
      <div className="App" id="base">
        <h1>Hello World!</h1>
        {/* <CurrentAPI />; */}
      </div>
    );
  }
}

export default Current;
