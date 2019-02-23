import React from 'react';
import './Confirm.scss';
import { Divider, Button, Icon } from 'semantic-ui-react';
import ChartItem from '../../../components/ChartItem/ChartItem';

const Confirm = (props) => {
  const { chartList, totalPrice } = props;
  return (
    <div className='confirm'>

            <h2>Your shopping and delivery</h2>
            <Divider />
            {chartList.length ? chartList.map(item => {
                return(
                   <ChartItem key={item.id} product={item} remove={false}/>
                )
            }) : null}


            <h2>Consignee's details</h2>
            <Divider />
            
            <h2>Payment method</h2>
            <Divider />
        <div className="confirm__buttons">
            <Button icon labelPosition='left' primary disabled={false} onClick={() => {props.goStep3()}}>
                Previous
                <Icon name='left arrow' />
            </Button>
            <Button positive disabled={false} >
                Confirm and Buy
            </Button>
        </div>
    </div>
  )
}

export default Confirm
