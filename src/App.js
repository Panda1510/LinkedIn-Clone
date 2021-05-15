import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import { logDOM } from "@testing-library/dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import {getUserAuth} from "./actions"; 
import { connect } from "react-redux";
import React, { Component }  from 'react';

function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, []) 

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
