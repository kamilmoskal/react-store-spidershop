import React, { Component } from 'react';
import './Products.scss';
import ProductsList from '../../components/ProductsList/ProductsList';
import Filters from '../../components/Filters/Filters';
import { Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterProductList } from '../../selectors/filterProductList';
import PaginationBar from '../../components/PaginationBar/PaginationBar';
import PropTypes from 'prop-types';

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

Products.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      species: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      stadium: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
  currentPage: PropTypes.number.isRequired,
  productsOnPage: PropTypes.number.isRequired
};
