import React from 'react';
import './CheckItems.scss';
import ChartItem from '../../../components/ChartItem/ChartItem';
import { Divider, Button, Icon } from 'semantic-ui-react';

const CheckItems = (props) => {
    const { chartList } = props;
    let total = 0;
    return (
        <div className="check-items">
            {chartList.length ? chartList.map(item => {
                total += item.price * item.amount;
                return(
                    <ChartItem key={item.id} product={item}/>
                )
            }) : <p className="check-items__status">No items in chart</p>}
            <Divider />
           <p className="check-items__total">Total to pay: <span>${total}</span></p>
            
            <Button icon labelPosition='right' primary disabled={false} onClick={() => {props.goStep2()}}>
                Next
                <Icon name='right arrow' />
            </Button>
        </div>
    )
}

export default CheckItems;
