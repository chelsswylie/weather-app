import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Current from "./components/current/current";
import Forecast from "./components/forecast/forecast";
import Navigation from "./components/navbar/navbar";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "9e4064c990354f0ca0608f40c85284dc";
function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log({ latitude, longitude });
    });

    axios
      .get(`${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((data) => {
        console.log(data.data);
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
            {/* <Current temp={setTemp}></Current> */}
          </Route>
        </Switch>
        <Switch>
          <Route path="/Forecast" component={Forecast} />
        </Switch>
      </Router>
      {/* <Current />
        <Forecast /> */}
    </div>
  );
}

export default App;
