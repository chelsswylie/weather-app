// 5 day forecast needs to be in increments of 3 hourly foreacsts
// carousel?
import React, { Component } from "react";

class Forecast extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Future!</h1>
      </div>
    );
  }
}

export default Forecast;

// // read all entities - GET
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
