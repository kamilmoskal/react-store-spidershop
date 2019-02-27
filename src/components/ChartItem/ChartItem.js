import React from 'react';
import './ChartItem.scss';
import { Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ChartItem = (props) => {
    const { product, confirm } = props; // confirm props define grid-columns and hide delete btn
    return (
        <div className={'chart-item ' + `${confirm == true ? 'chart-item--confirm' : null}`}>
            <div className="chart-item__img">
                <Image fluid={true} src={require(`../../img/${product.img}.jpg`)} style={{cursor: 'pointer'}}/>
            </div>
            <div className="chart-item__data">
                <p className="chart-item__name">{product.species.slice(0,1)}. {product.name}</p>
                <div className="chart-item__meta">
                    <p className="chart-item__stadium">{product.amount} x {product.stadium}</p>
                    <p className="chart-item__price"><b>${product.price * product.amount}</b></p>
                </div>
            </div>
            {confirm == true ? null :
            <div className="chart-item__delete" onClick={() => {props.removeFromChartList(product.id)}}>
                <Icon link name='close'/>
            </div>
            }
        </div>
    )
}

export default ChartItem;
  
ChartItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        species: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        stadium: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    }).isRequired,
    confirm: PropTypes.bool
};