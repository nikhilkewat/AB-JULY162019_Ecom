import React from "react";
import { Container,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";

class Product extends React.Component {
  render() {
    const { name, price, currency, image } = this.props;
    return (
      <>
        <Card>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>
              {price} {currency}
            </CardSubtitle>

            <Button color="success">{"Add to cart"}</Button>
          </CardBody>
        </Card>
        {/* <div>
          <img src={image} />
          <span>{name}</span>
          <span>
            {price} {currency}
          </span>
          <button>{"Add to cart"}</button>
        </div> */}
      </>
    );
  }
}

export default Product;
