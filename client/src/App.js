import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import Login from "./Login/Auth";
import AddressDetails from "./Admin/component/AddressDetails";
import Category from "./Admin/component/Category";
import UserDetails from "./Admin/component/UserDetails";
import Admin from "./Admin/component";
//import Client from "./Client/component";
import Client from "./Client/component";



import './App.css';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="App">
      <ReactNotification />
       <BrowserRouter>
          <Switch>          
            <Route path="/" exact component={Client}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>           
            {/* <Route path="/client" component={Client}></Route>   */}
            <Route path="/category" exact component={Category}></Route>
            <Route path="/userdetails" exact component={UserDetails}></Route>
            <Route path="/addressDetails" exact component={AddressDetails} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
