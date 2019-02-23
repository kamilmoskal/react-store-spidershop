import React, { Component } from 'react';
import './ProductsList.scss';
import ProductCard from './ProductCard/ProductCard';
import { Card } from 'semantic-ui-react';
import { Trail } from 'react-spring/renderprops';
import { connect } from 'react-redux';

class ProductsList extends Component {
  
  addToChartList = (id) => {
    this.props.addToChart(id);
  }
  componentDidUpdate(prevProps){ //set currentPage to 1 when productList is sorted and productList.lenght is not enought to display in user actual currentPage
    if (prevProps.productsList !== this.props.productsList && this.props.productsList.length > 0){
      if (this.props.productsList.length <= (this.props.productsOnPage * this.props.currentPage) - this.props.productsOnPage){
        this.props.changeCurrentPage(1)
      }
    }
  }
  render() {
    const { productsList, currentPage, productsOnPage } = this.props;
    const offset = (currentPage - 1) * productsOnPage;
    let currentList = productsList.slice(offset, offset + productsOnPage);
    return (
      <Card.Group stackable={true} itemsPerRow={4} doubling={true}>
        <Trail
          items={currentList} keys={item => Math.random()*10}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
              {item => props => {
                console.log('sd')
                return (
                  <ProductCard transition={props} product={item} addToChartList={this.addToChartList}/>
                )
              }}
            
        </Trail>
  
        {/* {currentList && currentList.map(item => {
          return (
                  <ProductCard key={item.id} product={item} addToChartList={this.addToChartList}/>
                )
        })} */}
      </Card.Group>     
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToChart: (id) => { dispatch({type: 'ADD_TO_CHART', id }) },
    changeCurrentPage: (numb) => { dispatch({type: 'CHANGE_CURRENT_PAGE', numb }) }
  }
}
export default connect(null,mapDispatchToProps)(ProductsList);

 