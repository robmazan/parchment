import React from "react";
import { Link } from "react-router-dom";
import LoginStatus from "./LoginStatus";

const NavigationBar: React.FC = props => {
  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-menu__item">
          <Link to="/" className="nav-menu__link">
            Home
          </Link>
        </li>
        <li className="nav-menu__item">
          <LoginStatus loginURI="/login" logoutURI="/logout" />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
