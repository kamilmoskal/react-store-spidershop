import React, { Component } from 'react';
import './Product.scss';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Product extends Component {
  componentDidMount(){
    this.props.getProductDetails(this.props.match.params.id);
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.props.getProductDetails(this.props.match.params.id);
    }
  }
  addToChartList = (id) => {
    this.props.addToChart(id);
  }
  render() {
    const { product } = this.props;
    return (
      <Container>
        {product && <ProductDetails product={product} addToChartList={this.addToChartList}/>}
      </Container> 
    )
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.productDetails
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getProductDetails: (id) => { dispatch({type: 'GET_PRODUCT_DETAILS', id }) },
    addToChart: (id) => { dispatch({type: 'ADD_TO_CHART', id }) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
