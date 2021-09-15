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
  // const [allData, setAllData] = useState([]);
  const [dailyDataOne, setDailyDataOne] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [date, setDate] = useState(null);
  const table = document.createElement("table");
  const header = table.createTHead().insertRow();
  const body = document.createElement("tbody");
  // const [time, setTime] = useState(null);

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
        setCity(data.data.city.name);
        header.insertCell(0).innerText = "Time";
        header.insertCell(1).innerText = "00:00:00";
        header.insertCell(2).innerText = "03:00:00";
        header.insertCell(3).innerText = "06:00:00";
        header.insertCell(4).innerText = "09:00:00";
        header.insertCell(5).innerText = "12:00:00";
        header.insertCell(6).innerText = "15:00:00";
        header.insertCell(7).innerText = "18:00:00";
        header.insertCell(8).innerText = "21:00:00";

        table.appendChild(body);
        console.log("array1", data.data);
        console.log("array2", data.data.list[0].dt_txt);
        const days = (day) => {
          for (let i = 0; i < day.length; i++) {
            const date = day[i];
            setDate(date.dt_txt);
            console.log("date text", date.dt_txt);
            return [day[i]];
          }
        };

        const array1 = [data.data];
        const array2 = [days];

        array1.forEach((result) => {
          array2.forEach((day) => {
            const data = day[result];
            console.log("the new", array1);

            if (!data) {
              return;
            }

            const row = body.insertRow();

            row.insertCell(0).innerText = data.data.list.dt_txt;
          });
        });

        document.getElementById("weather").appendChild(table);

        // const oneDaily = [
        //   data.data.list[0].main.temp,
        //   data.data.list[8].main.temp,
        //   data.data.list[16].main.temp,
        //   data.data.list[24].main.temp,
        //   data.data.list[32].main.temp,
        // ];
        // for (let i = 0; i < oneDaily.length; i++) {
        //   console.log("one", oneDaily[i]);
        //   setDailyDataOne(oneDaily);
        //   return oneDaily[i];
        // }
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
            <div id="weather"></div>
            {/* <div class="grid-container">
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
            </div> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
