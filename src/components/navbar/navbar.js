import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navigation = () => {
  return (
    <div id="Test">
      <li>
        <Link id="pages" to="/Current">
          Current
        </Link>
      </li>
      <li>
        <Link to="/Forecast">Forecast</Link>
      </li>
    </div>
  );
};
export default Navigation;
