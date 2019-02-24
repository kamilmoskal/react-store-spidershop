import React, { Component } from 'react';
import './Confirm.scss';
import { Divider, Button, Icon, Segment } from 'semantic-ui-react';
import ChartItem from '../../../components/ChartItem/ChartItem';

class Confirm extends Component {
    render(){
        const { chartList, chartPrice, buyerData } = this.props;
     
        return (
            <div className='confirm'>
        
                <h2>Your shopping and delivery</h2>
                <Divider />
                {chartList.length ? chartList.map(item => {
                    return(
                        <ChartItem key={item.id} product={item} confirm={true}/>
                    )
                }) : null}
                
                <Segment vertical>Delivery method:<b>{buyerData.deliveryMethod}</b></Segment>
                <Segment vertical>Delivery price:<b>${buyerData.deliveryPrice}</b></Segment>
                <Segment vertical>Message for seller:<b>{buyerData.messageForSeller}</b></Segment>
    
                <h2>Consignee's details</h2>
                <Divider />
                <Segment vertical>Name:<b>{buyerData.name}</b></Segment>
                <Segment vertical>Last name:<b>{buyerData.lastname}</b></Segment>
                <Segment vertical>Adress:<b>{buyerData.adress}</b></Segment>
                <Segment vertical>Zip code:<b>{buyerData.zipcode}</b></Segment>
                <Segment vertical>City:<b>{buyerData.city}</b></Segment>
                <Segment vertical>Country:<b>{buyerData.country}</b></Segment>
                <Segment vertical>Phone:<b>{buyerData.phone}</b></Segment>
                <Segment vertical>E-mail:<b>{buyerData.email}</b></Segment>
                
                <h2>Payment method</h2>
                <Divider />
                <div className="confirm__total">
                    <h4>Chart: ${chartPrice}</h4>
                    <h4>Delivery: ${buyerData.deliveryPrice}</h4>
                    <h3>Total to Pay: <span>${chartPrice + buyerData.deliveryPrice}</span></h3>
                </div>
                <Divider />
                <div className="confirm__buttons">
                    <Button icon labelPosition='left' primary onClick={() => {this.props.goStep3()}}>
                        Previous
                        <Icon name='left arrow' />
                    </Button>
                    <Button positive>
                        Confirm and Buy
                    </Button>
                </div>
            </div>
        )
    }
}

export default Confirm
