import logo from "./logo.svg";
import "./App.css";
import Current from "./components/current/current";
import Forecast from "./components/forecast/forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Current />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
