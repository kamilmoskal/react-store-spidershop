import React, { Component } from 'react';
import './Chart.scss';
import { Container, Divider, Step, Icon, Segment, Progress, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import CheckItems from './CheckItems/CheckItems';
import Shipping from './Shipping/Shipping';
import Billing from './Billing/Billing';
import Confirm from './Confirm/Confirm';
import { totalPriceChart } from '../../selectors/totalPriceChart';
import PropTypes from 'prop-types';

class Chart extends Component {
  state = {
    active: 'step1', notdisabled: 'step1', s1completed: false, s2completed: false, s3completed: false
  }
  goStep1 = () => this.setState({ active: 'step1', notdisabled: 'step1', s1completed: false});
  goStep2 = () => this.setState({ active: 'step2', notdisabled: 'step2', s1completed: true, s2completed: false });
  goStep3 = () => this.setState({ active: 'step3', notdisabled: 'step3', s2completed: true, s3completed: false });
  goStep4 = () => this.setState({ active: 'step4', notdisabled: 'step4', s3completed: true });

  removeFromChartList = (id) => {
    this.props.removeFromChart(id);
  }
  render() {
    const { active, notdisabled, s1completed, s2completed, s3completed } = this.state;
    const { chartList, chartPrice, buyerData } = this.props;
    let stepContent = () => {
      switch (active) {
        case 'step1':
          return  <CheckItems chartList={chartList} goStep2={this.goStep2} chartPrice={chartPrice} removeFromChartList={this.removeFromChartList}/>
        case 'step2':
          return  <Shipping goStep1={this.goStep1} goStep3={this.goStep3} chartPrice={chartPrice}/>
        case 'step3':
          return  <Billing goStep2={this.goStep2} goStep4={this.goStep4}/>
        case 'step4':
          return  <Confirm goStep3={this.goStep3} chartList={chartList} chartPrice={chartPrice} buyerData={buyerData}/>
      }
    }
    return (
      <Container>
        <Step.Group stackable='tablet' attached='top'>
          <Step active={active === 'step1'} disabled={notdisabled !== 'step1'} completed={false} completed={s1completed}>
            <Icon name='shop' />
            <Step.Content>
              <Step.Title>Your Chart</Step.Title>
              <Step.Description>Check items</Step.Description>
            </Step.Content>
          </Step>

          <Step active={active === 'step2'} disabled={notdisabled !== 'step2'} completed={s2completed}>
            <Icon name='truck' />
            <Step.Content>
              <Step.Title>Shipping</Step.Title>
              <Step.Description>Choose your shipping options</Step.Description>
            </Step.Content>
          </Step>

          <Step active={active === 'step3'} disabled={notdisabled !== 'step3'} completed={s3completed}>
            <Icon name='payment' />
            <Step.Content>
              <Step.Title>Payment</Step.Title>
              <Step.Description>Choose payment method</Step.Description>
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
          <Progress percent={25*active.slice(4,5)} indicating/>
          {stepContent()}
        </Segment>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chartList: state.chartList,
    chartPrice: totalPriceChart(state),
    buyerData: state.buyerData
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      removeFromChart: (id) => { dispatch({ type: 'REMOVE_FROM_CHART', id }) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chart);

Chart.propTypes = {
  chartList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      species: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      stadium: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
  chartPrice: PropTypes.number.isRequired,
  buyerData: PropTypes.shape({
    deliveryPrice: PropTypes.number.isRequired,
    deliveryMethod: PropTypes.string.isRequired,
    messageForSeller: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired
};