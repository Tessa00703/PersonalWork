import React, { Component } from "react";
import MainPage from "./pages";
import MembersPage from "./pages/Members";
import NotFoundPage from "./pages/404";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/*All our Routes goes here!*/}
          <Route exact path="/" component={MainPage} />
          <Route exact path="/users" component={MembersPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
