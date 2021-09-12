// https://openweathermap.org/weather-conditions need to figure out how to implement icons - conditional?

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Current from "./components/current/current";
import Forecast from "./components/forecast/forecast";
import Navigation from "./components/navbar/navbar";

const currentURL = "https://api.openweathermap.org/data/2.5/weather";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "9e4064c990354f0ca0608f40c85284dc";
function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log({ latitude, longitude });
    });

    // for Current below
    axios
      .get(`${forecastURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((data) => {
        // switch statement to role between the individual results below to get date and time?
        // for loop?
        console.log(data.data);
        setCity(data.data.city.name);
        for (let i = 0; i < data.data.list.length; i++) {
          setDate(data.data.list[i].dt_txt);
          setTime(data.data.list[i].dt_txt);
          console.log("exactly what u think", data.data.list[i].dt_txt);
        }
        // console.log(data.data.list[0].dt_txt);
        // console.log(data.data.list[1].dt_txt);
        // console.log(data.data.list[2].dt_txt);
        // console.log(data.data.list[3].dt_txt);
        // console.log(data.data.list[4].dt_txt);
        // console.log(data.data.list[5].dt_txt);
        // console.log(data.data.list[6].dt_txt);
        // console.log(data.data.list[7].dt_txt);
        // console.log(data.data.list[8].dt_txt);
        // console.log(data.data.list[9].dt_txt);
        // console.log(data.data.list[10].dt_txt);
        // console.log(data.data.list[11].dt_txt);
        // console.log(data.data.list[12].dt_txt);
        // console.log(data.data.list[13].dt_txt);
        // console.log(data.data.list[14].dt_txt);
        // console.log(data.data.list[15].dt_txt);
        // console.log(data.data.list[16].dt_txt);
        // console.log(data.data.list[17].dt_txt);
        // console.log(data.data.list[18].dt_txt);
        // console.log(data.data.list[19].dt_txt);
        // console.log(data.data.list[20].dt_txt);
        // console.log(data.data.list[21].dt_txt);
        // console.log(data.data.list[22].dt_txt);
        // console.log(data.data.list[23].dt_txt);
        // console.log(data.data.list[24].dt_txt);
        // console.log(data.data.list[25].dt_txt);
        // console.log(data.data.list[26].dt_txt);
        // console.log(data.data.list[27].dt_txt);
        // console.log(data.data.list[28].dt_txt);
        // console.log(data.data.list[29].dt_txt);
        // console.log(data.data.list[30].dt_txt);
        // console.log(data.data.list[31].dt_txt);
        // console.log(data.data.list[32].dt_txt);
        // console.log(data.data.list[33].dt_txt);
        // console.log(data.data.list[34].dt_txt);
        // console.log(data.data.list[35].dt_txt);
        // console.log(data.data.list[36].dt_txt);
        // console.log(data.data.list[37].dt_txt);
        // console.log(data.data.list[38].dt_txt);
        // console.log(data.data.list[39].dt_txt);
      });
  }, [latitude, longitude]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log({ latitude, longitude });
    });

    // for Current below
    axios
      .get(`${currentURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((data) => {
        setTemp(data.data.main.temp);
        setCity(data.data.name);
      });
  }, [latitude, longitude]);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Current" component={Current}>
            City: {city}
            <br></br>
            Currently, the weather outside is: {temp}
          </Route>
        </Switch>
        <Switch>
          <Route path="/Forecast" component={Forecast}>
            City: {city}
            <br />
            Date: {date}
            <br />
            Time: {time}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
