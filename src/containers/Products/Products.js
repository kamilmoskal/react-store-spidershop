import React, { Component } from 'react';
import './Products.scss';
import ProductsList from '../../components/ProductsList/ProductsList';
import Filters from '../../components/Filters/Filters';
import { Container } from 'semantic-ui-react';

class Products extends Component {
  render() {
    return (
      <Container>
        <Filters />
        <ProductsList />
      </Container>
    )
  }
}

export default Products;
