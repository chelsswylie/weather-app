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

    // for Forecast below
    axios
      .get(`${forecastURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((data) => {
        // switch statement to role between the individual results below to get date and time?
        // for loop?
        console.log(data.data);
        setCity(data.data.city.name);
        for (let i = 0; i < data.data.list.length; i++) {
          // const dates = data.data.list[i].dt_txt.split(" ");
          // splice to get the date and time separated below
          const date = data.data.list[i].dt_txt.split(" ", [1]);
          // const time = data.data.list[i].dt_txt.split(" ", [0]);
          setDate(date);
          setTime(data.data.list[i].dt_txt);
          console.log(date);
        }
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
            <div class="grid-container">
              {/* this should be a for loop */}
              <div class="grid-item">{date}</div>
              <div class="grid-item">{date}</div>
              <div class="grid-item">{date}</div>
              <div class="grid-item">{date}</div>
              <div class="grid-item">{date}</div>
              <div class="grid-item">
                <div class="time">Midnight</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">12:00</div>
              </div>
              <div class="grid-item">
                <div class="time">12:00</div>
              </div>
              <div class="grid-item">
                <div class="time">12:00</div>
              </div>
              <div class="grid-item">
                <div class="time">12:00</div>
              </div>
              <div class="grid-item">
                <div class="time">12:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
              <div class="grid-item">
                <div class="time">9:00</div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
