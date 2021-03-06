import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import Login from "./Login/Auth";

import Admin from "./Admin/component";
import './App.css';
import 'react-notifications-component/dist/theme.css'


function App() {
  return (
    <div className="App">
      <ReactNotification />
       <BrowserRouter>
          <Switch>          
            <Route path="/" exact component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
