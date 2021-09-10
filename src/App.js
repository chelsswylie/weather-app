import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Current from "./components/current/current";
import Forecast from "./components/forecast/forecast";
import Navigation from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/Current" component={Current} />
            <Route path="/Forecast" component={Forecast} />
          </Switch>
        </Router>
        <Current />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
