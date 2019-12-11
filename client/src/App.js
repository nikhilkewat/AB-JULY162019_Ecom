import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Auth";
import './App.css';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>
          
            <Route path="/" exact component={Login}></Route>
            
           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
