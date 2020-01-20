import React from "react";
import { Link } from "react-router-dom";

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
          <a className="nav-menu__link" href="/login">
            Login
          </a>
        </li>
        <li className="nav-menu__item">
          <a className="nav-menu__link" href="/logout">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
