import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <span className="navbar">Akademeia</span>
        </Link>
        <div>
          <Link to="/calendar">
            <span className="nav-link">Calendar</span>
          </Link>
          <Link to="/courses">
            <span className="nav-link">Courses</span>
          </Link>
          <Link to="/agorafi">
            <span className="nav-link">AgoraFI</span>
          </Link>
          <Link to="/email">
            <span className="nav-link">EMail</span>
          </Link>
          <Link to="/thegarden">
            <span className="nav-link">The Garden</span>
          </Link>
          <Link to="/profile">
            <span className="nav-link">Profile</span>
          </Link>
          <Link to="/settings">
            <span className="nav-link">Settings</span>
          </Link>
          <Link to="/about">
            <span className="nav-link">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
