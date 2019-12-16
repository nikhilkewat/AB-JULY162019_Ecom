import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Auth";
import AddressDetails from "./Admin/Component/AddressDetails/AddressDetails";
import './App.css';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>
          
            <Route path="/" exact component={Login}></Route>

            <Route path="/admin/addressDetails" exact component={AddressDetails} />
            
           
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
