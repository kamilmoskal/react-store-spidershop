import React, { Component } from 'react';
import './Chart.scss';
import { Container, Divider, Step, Icon, Segment, Progress, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CheckItems from './CheckItems/CheckItems';
import Shipping from './Shipping/Shipping';

class Chart extends Component {
  state = {
    active: 'step1', notdisabled: 'step1'
  }
  goStep1 = () => this.setState({ active: 'step1', notdisabled: 'step1' });
  goStep2 = () => this.setState({ active: 'step2', notdisabled: 'step2' });
  goStep3 = () => this.setState({ active: 'step3', notdisabled: 'step3' });
  goStep4 = () => this.setState({ active: 'step4', notdisabled: 'step4' });
      
  
  render() {
    const { active, notdisabled } = this.state;
    const { chartList } = this.props;

    let stepContent = () => {
      switch (active) {
        case 'step1':
          return  <CheckItems chartList={chartList} goStep2={this.goStep2}/>
        case 'step2':
          return  <Shipping goStep1={this.goStep1} goStep3={this.goStep3}/>
      }
    }
    return (
      <Container>
        <Step.Group stackable='tablet' attached='top'>
        <Step active={active === 'step1'} disabled={notdisabled !== 'step1'}>
          <Icon name='shop' />
          <Step.Content>
            <Step.Title>Your Chart</Step.Title>
            <Step.Description>Check items</Step.Description>
          </Step.Content>
        </Step>

        <Step active={active === 'step2'} disabled={notdisabled !== 'step2'}>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active={active === 'step3'} disabled={notdisabled !== 'step3'}>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step active={active === 'step4'} disabled={notdisabled !== 'step4'}>
          <Icon name='info' />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
      <Segment attached>
        <Progress percent={25} />
        {stepContent()}
       
      </Segment>


        
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chartList: state.chartList,
  }
}

export default connect(mapStateToProps)(Chart);
