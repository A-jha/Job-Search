import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Error from "./pages/Error";
import classes from "./styles/App.module.css";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import Apply from "./pages/Apply";
const App = () => {
  return (
    <Router>
      <nav className={classes.navbar}>
        <div className={classes.logo}>
          <h3>job Search</h3>
        </div>
        <div className={classes.links}>
          <Link to="/" className={classes.link}>
            <i class="fas fa-home"></i>
          </Link>
          <Link to="/about" className={classes.link}>
            <i class="fas fa-address-card"></i>
          </Link>
          <Link to="/jobs" className={classes.link}>
            <i class="fas fa-user-md"></i>
          </Link>
        </div>
      </nav>

      <div className={classes.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply/:name/:id" element={<Apply />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div className={classes.footer}>
        <h1>Find Your dream Job</h1>
        <h3>Created By Avinash Jha and &copy; {new Date().getFullYear()}</h3>
      </div>
    </Router>
  );
};

export default App;
