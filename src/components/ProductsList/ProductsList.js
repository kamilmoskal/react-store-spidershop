import React, { Component } from 'react';
import './ProductsList.scss';
import ProductCard from './ProductCard/ProductCard';
import { Card } from 'semantic-ui-react';
import { Transition } from 'react-spring/renderprops';
import { connect } from 'react-redux';

class ProductsList extends Component {
  render() {
    const { productsList } = this.props;
    return (
      <Card.Group stackable={true} itemsPerRow={4} doubling={true}>
    
        <Transition
          items={productsList} keys={item => item.id}
          trail={200}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
              {item => props => <ProductCard transition={props} product={item}/>}
        </Transition>
  
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productsList
  }
}
export default connect(mapStateToProps)(ProductsList);

 