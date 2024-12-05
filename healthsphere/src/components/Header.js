import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // You can style it later

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">HealthSphere</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/body">Body</Link>
        <Link to="/mind">Mind</Link>
        <Link to="/soul">Soul</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
