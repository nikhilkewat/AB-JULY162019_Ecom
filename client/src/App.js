import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import Login from "./Login/Auth";
<<<<<<< Updated upstream
import AddressDetails from "./Admin/Component/AddressDetails/AddressDetails";
=======
import Category from "./Admin/component/Category";
import UserDetails from "./Admin/component/UserDetails";
>>>>>>> Stashed changes
import './App.css';

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
<<<<<<< Updated upstream

            <Route path="/admin/addressDetails" exact component={AddressDetails} />
            
           
            <Route path="/admin" component={Admin}></Route>           
=======
            <Route path="/category" exact component={Category}></Route>
            <Route path="/userdetails" exact component={UserDetails}></Route>
>>>>>>> Stashed changes
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
