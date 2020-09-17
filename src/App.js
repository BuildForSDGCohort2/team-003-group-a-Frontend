import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Teacher from "./Pages/Teacher";
import Parent from "./Pages/Parent";
import Student from "./Pages/Student";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/teacher">
            <Teacher />
          </Route>
          <Route path="/parent">
            <Parent />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
