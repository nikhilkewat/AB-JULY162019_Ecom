import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Auth";
import Category from "./Admin/component/Category";
import './App.css';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>
          
            <Route path="/" exact component={Login}></Route>
            <Route path="/category" exact component={Category}></Route>
           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
