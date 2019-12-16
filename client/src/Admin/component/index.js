import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components

import AdminNavbar from "../../Common/Navbars/AdminNavbar";
// import AdminFooter from "../../Common/Footers/AdminFooter.jsx";
import Sidebar from "../../Common/Sidebar/Sidebar";
import Category from "../component/Category";
import Header from "../../Common/Headers/Header";

let routes = [
  {
    path: "/category",
    name: "Category",
    icon: "ni ni-tv-2 text-primary",
    component: Category,
    layout: "/admin"
  }
];
class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../../assets/img/brand/logo.png"),
            imgAlt: "AB-JULY_162019"
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar {...this.props} brandText={"AB-JULY_162019"} />
          <Header/>
          <Switch>
            <Route path="/admin/category" component={Category}></Route>
          </Switch>
          
          <Container fluid>
            
            {/* <AdminFooter /> */}
          </Container>
        </div>
      </>
    );
  }
}

export default Admin;
