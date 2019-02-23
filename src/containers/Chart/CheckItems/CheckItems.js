import React from 'react';
import './CheckItems.scss';
import ChartItem from '../../../components/ChartItem/ChartItem';
import { Divider, Button, Icon } from 'semantic-ui-react';

const CheckItems = (props) => {
    const { chartList, totalPrice } = props;
    const btnDisabled = chartList.length > 0 ? false : true;
    return (
        <div className="check-items">

            <h2>Products</h2>
            <Divider />

            {chartList.length ? chartList.map(item => {
                return(
                    <ChartItem key={item.id} product={item} removeFromChartList={props.removeFromChartList}/>
                )
            }) : <h4 className="check-items__status">No items in chart</h4>}
            <h3 className="check-items__total">Total to Pay: <span>${totalPrice}</span></h3>
            <Divider />
            <div className="check-items__buttons">
                <Button icon labelPosition='right' primary disabled={btnDisabled} onClick={() => {props.goStep2()}}>
                    Next
                    <Icon name='right arrow' />
                </Button>
            </div>
        </div>
    )
}

export default CheckItems;
