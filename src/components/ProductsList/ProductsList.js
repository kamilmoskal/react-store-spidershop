import React, { Component } from 'react';
import './ProductsList.scss';
import ProductCard from './ProductCard/ProductCard';
import { Card } from 'semantic-ui-react';
import { Trail } from 'react-spring/renderprops';
import { connect } from 'react-redux';
import { filterProductList } from '../../selectors/filterData';
import { Pagination, Icon, Divider } from 'semantic-ui-react';

class ProductsList extends Component {
  state = {
    productsOnPage: 12,
    currentPage: 1
  }
  onPageChanged = (e, { activePage }) => {
    this.setState({ currentPage: activePage })
  }
  addToChartList = (id) => {
    this.props.addToChart(id);
  }
  render() {
    const { productsOnPage, currentPage } = this.state;
    const { productsList } = this.props;
    const offset = (currentPage - 1) * productsOnPage;
    let currentList = productsList.slice(offset, offset + productsOnPage);
    return (
      <React.Fragment>
        <Card.Group stackable={true} itemsPerRow={4} doubling={true}>
          <Trail
            items={currentList} keys={item => Math.random()*10}
            trail={500}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
                {item => props => <ProductCard transition={props} product={item} addToChartList={this.addToChartList}/>}
          </Trail>
        </Card.Group>
        
        <Divider />
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
          firstItem={null}
          lastItem={null}
          prevItem={{ content: <Icon name='angle left' />, icon: true }}
          nextItem={{ content: <Icon name='angle right' />, icon: true }}
          siblingRange={1}
          totalPages={Math.ceil(productsList.length / productsOnPage)}
          onPageChange={this.onPageChanged}
        />
      </React.Fragment>
            
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

 