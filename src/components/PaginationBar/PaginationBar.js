import React from 'react';
import './PaginationBar.scss';
import { Pagination, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PaginationBar = (props) => {
    const { productsList, productsOnPage, currentPage } = props;
    return (
        <Pagination
            activePage={currentPage}
            boundaryRange={0}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            siblingRange={1}
            totalPages={Math.ceil(productsList.length / productsOnPage)}
            onPageChange={(e, {activePage}) => {props.changeCurrentPage(activePage)}}
            />
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
      changeCurrentPage: (numb) => { dispatch({type: 'CHANGE_CURRENT_PAGE', numb }) }
    }
}

export default connect(null,mapDispatchToProps)(PaginationBar);

PaginationBar.propTypes = {
    productsList: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    productsOnPage: PropTypes.number.isRequired
};