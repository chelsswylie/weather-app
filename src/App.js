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
  const [allData, setAllData] = useState([]);
  const [dailyDataOne, setDailyDataOne] = useState([]);
  const [dailyDataTwo, setDailyDataTwo] = useState([]);
  const [dailyDataThree, setDailyDataThree] = useState([]);
  const [dailyDataFour, setDailyDataFour] = useState([]);
  const [dailyDataFive, setDailyDataFive] = useState([]);
  const [dailyDataSix, setDailyDataSix] = useState([]);
  const [dailyDataSeven, setDailyDataSeven] = useState([]);
  const [dailyDataEight, setDailyDataEight] = useState([]);
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

    axios
      .get(
        `${forecastURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
      )
      .then((data) => {
        console.log(data.data);
        console.log(data.data.list[0].main.temp);
        // const dailyOne = data.data.list.filter((day) => {
        //   return day.dt_txt.includes("00:00:00");
        // });
        const oneDaily = [
          data.data.list[0].main.temp,
          data.data.list[8].main.temp,
          data.data.list[16].main.temp,
          data.data.list[24].main.temp,
          data.data.list[32].main.temp,
        ];
        for (let i = 0; i < oneDaily.length; i++) {
          console.log("one", oneDaily[i]);
          setDailyDataOne(oneDaily);
          return oneDaily[i];
        }

        const twoDaily = [
          data.data.list[1].main.temp,
          data.data.list[9].main.temp,
          data.data.list[17].main.temp,
          data.data.list[25].main.temp,
          data.data.list[40].main.temp,
        ];
        for (let i = 0; i < twoDaily.length; i++) {
          console.log("two", twoDaily[i]);
          setDailyDataTwo(twoDaily);
          return twoDaily[i];
        }

        const threeDaily = [
          data.data.list[2].main.temp,
          data.data.list[10].main.temp,
          data.data.list[18].main.temp,
          data.data.list[26].main.temp,
          data.data.list[40].main.temp,
        ];
        for (let i = 0; i < threeDaily.length; i++) {
          console.log("three", threeDaily[i]);
          setDailyDataThree(threeDaily);
          return threeDaily[i];
        }

        setDailyDataFour(data.data.list[3].main.temp);
        setDailyDataFive(data.data.list[4].main.temp);
        setDailyDataSix(data.data.list[5].main.temp);
        setDailyDataSeven(data.data.list[6].main.temp);
        setDailyDataEight(data.data.list[7].main.temp);
        setCity(data.data.city.name);

        // below splits the string result of the data and time
        for (let i = 0; i < 5; i++) {
          const date = data.data.list[i].dt_txt.split(" ", [1]);
          setDate(date);
          // const date = dateSplit.map(day => {let i = new Object()});
          // setTime(data.data.list[i].dt_txt);
          console.log("this is the date", date[i]);
        }
        // setDate(date);
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
      .get(
        `${currentURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
      )
      .then((data) => {
        setTemp(data.data.main.temp);
        setCity(data.data.name);
      });
  }, [latitude, longitude]);

  return (
    // Starts with current JSX
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Current" component={Current}>
            In the City of {city}, it is currently {temp} degree Fahrenheit
          </Route>
        </Switch>
        {/* Changes to Forecast JSX */}
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
                <div class="temperature">{dailyDataOne}</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
                <div class="temperature">{dailyDataOne}</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
                <div class="temperature">{dailyDataOne}</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
                <div class="temperature">{dailyDataOne}</div>
              </div>
              <div class="grid-item">
                <div class="time">Midnight</div>
                <div class="temperature">{dailyDataOne}</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
                <div class="temperature">{dailyDataTwo}</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
                <div class="temperature">{dailyDataTwo}</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
                <div class="temperature">{dailyDataTwo}</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">3:00</div>
              </div>
              <div class="grid-item">
                <div class="time">6:00</div>
                <div class="temperature">{dailyDataThree}</div>
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
                <div class="temperature">{dailyDataFour}</div>
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
                <div class="temperature">{dailyDataFive}</div>
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
                <div class="temperature">{dailyDataSix}</div>
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
                <div class="temperature">{dailyDataSeven}</div>
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
                <div class="temperature">{dailyDataEight}</div>
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
