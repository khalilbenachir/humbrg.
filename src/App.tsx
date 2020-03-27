import React from "react";

import { Route, Switch } from "react-router-dom";

import Header from './component/header';
import Home from './component/home';
import Oppertunities from './component/oppertunities';
import Solutions from './component/solutions';
import Contact from './component/contact';

import "./App.scss";

function App() {
  return (
      <>
        <Header/>
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/oppertunities" component={Oppertunities}/>
                <Route  path="/solutions" component={Solutions}/>
                <Route  path="/contact" component={Contact}/>
              </Switch>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
