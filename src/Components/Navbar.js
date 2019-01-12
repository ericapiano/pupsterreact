import React from "react";
import { Link } from "react-router-dom";

const styles = {
  villan: {
    backgroundColor: "rgb(52, 161, 244)",
    color: "white"
  },
  navLink: {
    color: "white"
  }
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={styles.villan}>
      <Link to="/" className="navbar-brand" style={styles.navLink}>
        Pupster App
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={
                window.location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={styles.navLink}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
