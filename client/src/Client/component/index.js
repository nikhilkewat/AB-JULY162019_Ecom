import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container,Row } from "reactstrap";
import AdminNavbar from "../../Common/Navbars/AdminNavbar";
import Header from "../../Common/Headers/ClientHeader";
import ProductList from "../component/ProductList";

class Client extends React.Component {
  render() {
    return (
      <>
        <div className="main-content" ref="mainContent">
          <AdminNavbar {...this.props} brandText={"AB-JULY_162019"} />
          <Header />
          <Switch>
            {/* <Route path="/admin/category" component={Category}></Route>
              <Route path="/admin/addressDetails" component={AddressDetails} />
              <Route path="/admin/productcategory" component={Productcategory}></Route>
              <Route path="/admin/userdetail" component={UserDetails}></Route> */}
          </Switch>

          <Container fluid>
            <Row>
              <ProductList></ProductList>
            </Row>
            {/* <AdminFooter /> */}
          </Container>
        </div>
      </>
    );
  }
}

export default Client;
