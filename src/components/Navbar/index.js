import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, onLogout }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light navbar-forum">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <LoginView currentUser={currentUser} onLogout={onLogout} />
            ) : (
              <LogoutView />
            )}
          </ul>
        </div>
      </div>
    </nav>
  </>
);

const LogoutView = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link className="dropdown-item" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="dropdown-item" to="/signup">
          Signup
        </Link>
      </li>
    </>
  );
};
const LoginView = ({ onLogout, currentUser }) => {
  return (
    <>
      <li className="nav-item dropdown">
        <Link className="dropdown-item" to="#">
          {currentUser.username}
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a className="dropdown-item" onClick={onLogout}>
          Logout
        </a>
      </li>
    </>
  );
};
export default Navbar;
