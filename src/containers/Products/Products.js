import React, { Component } from 'react';
import './Products.scss';
import ProductsList from '../../components/ProductsList/ProductsList';
import Filters from '../../components/Filters/Filters';
import { Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterProductList } from '../../selectors/filterProductList';
import PaginationBar from '../../components/PaginationBar/PaginationBar';

class Products extends Component {
  render() {
    const { productsList, currentPage, productsOnPage } = this.props;
    return (
      <Container>
        <Filters productsList={productsList} productsOnPage={productsOnPage} currentPage={currentPage}/>
        <Divider/>
        <ProductsList productsList={productsList} productsOnPage={productsOnPage} currentPage={currentPage}/>
        <Divider/>
        <PaginationBar productsList={productsList} productsOnPage={productsOnPage} currentPage={currentPage}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: filterProductList(state),
    currentPage: state.currentPage,
    productsOnPage: state.productsOnPage
  }
}

export default connect(mapStateToProps)(Products);
