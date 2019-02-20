import React, { Component } from 'react';
import './Product.scss';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { Container } from 'semantic-ui-react';

class Product extends Component {
  render() {
    return (
      <Container>
        <ProductDetails />
      </Container> 
    )
  }
}

export default Product;
