import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";

const ProductList = ({ products }) => {
  return (
    <Container fluid>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={3}>
            <Product {...product}></Product>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStatetoProps = ({
  clientreducer: {
    products: { products }
  }
}) => {
  return { products };
};
export default connect(mapStatetoProps, null)(ProductList);
