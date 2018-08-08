import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import { Detail } from "./pages/detail";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";

import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    const url = new URL(document.location);

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/detail/:id' component={ Detail }/>
          <Route component={ NotFound }/>
        </Switch>
      </div>
    );
  }
}

export default App;
