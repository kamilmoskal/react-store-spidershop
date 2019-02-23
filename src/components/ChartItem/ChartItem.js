import React from 'react';
import './ChartItem.scss';
import { Image, Icon } from 'semantic-ui-react';

const ChartItem = (props) => {
    const { product, remove } = props;
    return (
        <div className="chart-item">
            <div className="chart-item__img">
                <Image fluid={true} src={require(`../../img/${product.img}.jpg`)} style={{cursor: 'pointer'}}/>
            </div>
            <div className="chart-item__data">
                <p className="chart-item__name">{product.species.slice(0,1)}. {product.name}</p>
                <div className="chart-item__meta">
                    <p className="chart-item__stadium">{product.amount} x {product.stadium}</p>
                    <p className="chart-item__price">${product.price * product.amount}</p>
                </div>
            </div>
            {remove == false ? null :
            <div className="chart-item__delete" onClick={() => {props.removeFromChartList(product.id)}}>
                <Icon link name='close'/>
            </div>
            }
        </div>
    )
}

export default ChartItem;
