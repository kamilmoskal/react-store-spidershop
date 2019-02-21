import React, { Component } from 'react';
import './ProductsList.scss';
import ProductCard from './ProductCard/ProductCard';
import { Card } from 'semantic-ui-react';
import { Trail } from 'react-spring/renderprops';
import { connect } from 'react-redux';
import { filterProductList } from '../../selectors/filterData';

class ProductsList extends Component {
  addToChartList = (id) => {
    this.props.addToChart(id);
  }
  render() {
    const { productsList } = this.props;
    return (
      <Card.Group stackable={true} itemsPerRow={4} doubling={true}>
    
        <Trail
          items={productsList} keys={item => item.id}
          trail={500}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
              {item => props => <ProductCard transition={props} product={item} addToChartList={this.addToChartList}/>}
        </Trail>
  
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: filterProductList(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addToChart: (id) => { dispatch({type: 'ADD_TO_CHART', id }) }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);

 