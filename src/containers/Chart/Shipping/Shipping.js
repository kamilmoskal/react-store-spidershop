import React, { Component } from 'react';
import './Shipping.scss';
import { Divider, Button, Icon, Form, TextArea, Radio, Checkbox, Input, Dropdown, Select, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Shipping extends Component {
    state = { 
            deliveryPrice: null,
            deliveryMethod: '',
            messageForSeller: '',
            name: '',
            lastname: '',
            adress: '',
            zipcode: '',
            city: '',
            country: '',
            phone: '',
            email: '',
            submitError: false,
            submitSuccess: false,
            arrayOfErrors: [],
    }
    handleChangeDelivery = (e, { value, label }) => this.setState({ deliveryPrice: value, deliveryMethod: label })
    handleChangeMessage = (e) => this.setState({ messageForSeller: e.target.value })
    handleChangeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleChangeCountry = (e) => this.setState({ country: e.target.textContent })
    handleSubmit = (e) => {
        e.preventDefault();
        let submitError = false; //init
        let arrayOfErrors = [];

        let terms = document.querySelector('input[type="checkbox"]#terms')
        let nodeRadios = document.querySelectorAll('input[name="radioGroup"]');
        let arrRadios = [...nodeRadios];
        if (arrRadios.every(e => e.checked === false)){
            submitError = true;
            arrayOfErrors.push('You must pick any delivery method')
        }
        if (this.state.name.length == 0){
            submitError = true;
            arrayOfErrors.push('Name is required')
        } 
        if (this.state.lastname.length == 0){
            submitError = true;
            arrayOfErrors.push('Last Name is required')
        }
        if (this.state.adress.length == 0){
            submitError = true;
            arrayOfErrors.push('Adress is required')
        }
        if (this.state.zipcode.length == 0){
            submitError = true;
            arrayOfErrors.push('Enter a valid Zip code for your region')
        }
        if (this.state.city.length == 0){
            submitError = true;
            arrayOfErrors.push('City is required')
        }
        if (this.state.country.length == 0){
            submitError = true;
            arrayOfErrors.push('Country is required')
        }
        if (this.state.phone.length == 0){
            submitError = true;
            arrayOfErrors.push('Phone is required')
        }
        if (this.state.email.length == 0){
            submitError = true;
            arrayOfErrors.push('Email is required')
        }
        if (terms.checked == false){
            submitError = true;
            arrayOfErrors.push('You must agree for Terms and Conditions')
        }

        if (submitError) {
            this.setState({ submitSuccess: false, arrayOfErrors, submitError });
        } else {
            this.setState({ submitSuccess: true, submitError });
            this.props.saveBuyerData(this.state);
        }
    }
    render(){
        const { chartPrice } = this.props;
        const { deliveryPrice, submitError, submitSuccess, arrayOfErrors } = this.state;
    return (
        <div className='shipping'>

            <Form onSubmit={this.handleSubmit} error={submitError} success={submitSuccess}>
      
                <h2>Delivery method</h2>
                <Divider />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <h4>Payment in advance</h4>
                        <Form.Field>
                            <Radio label='Delivery method A' name='radioGroup'
                            value={24} checked={deliveryPrice === 24} onChange={this.handleChangeDelivery}/>
                            &nbsp;$24
                        </Form.Field>
                        <Form.Field>
                            <Radio label='Delivery method B' name='radioGroup'
                            value={15} checked={deliveryPrice === 15} onChange={this.handleChangeDelivery}/>
                            &nbsp;$15
                        </Form.Field>
                        <Form.Field>
                            <Radio label='Delivery method C' name='radioGroup'
                            value={21} checked={deliveryPrice === 21} onChange={this.handleChangeDelivery}/>
                            &nbsp;$21
                        </Form.Field>
                    </Form.Field>
                    <Form.Field>
                        <h4>Payment at delivery</h4>
                        <Form.Field>
                            <Radio label='Delivery method D' name='radioGroup'
                            value={14} checked={deliveryPrice === 14} onChange={this.handleChangeDelivery}/>
                            &nbsp;$14
                        </Form.Field>
                        <Form.Field>
                            <Radio label='Delivery method E' name='radioGroup'
                            value={17} checked={deliveryPrice === 17} onChange={this.handleChangeDelivery}/>
                            &nbsp;$17
                        </Form.Field>
                    </Form.Field>
                </Form.Group>
                
                <Form.Field>
                    <label>Message for seller</label>
                    <TextArea autoHeight placeholder='Leave message for seller' onChange={this.handleChangeMessage}/>
                </Form.Field>
               
                <h2>Consignee of the shipment</h2>
                <Divider />

                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='First Name' placeholder='First Name' id="name" onChange={this.handleChangeInput}/>
                    <Form.Field required control={Input} label='Last Name' placeholder='Last Name' id="lastname" onChange={this.handleChangeInput}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='Adress' placeholder='Adress' id="adress" onChange={this.handleChangeInput}/>
                    <Form.Field required control={Input} pattern="[0-9]{2}-[0-9]{3}" label='ZIP code' placeholder='xx-xxx' id="zipcode" onChange={this.handleChangeInput}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='City' placeholder='City' id="city" onChange={this.handleChangeInput}/>
                    <Form.Field required control={Select} options={[{ key: 'pl', value:'Poland', text: 'Poland' }]} label='Country' placeholder='Country' search searchInput={{ id: 'country' }} onChange={this.handleChangeCountry}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} type='number' label='Phone number' placeholder='Phone number' id="phone" onChange={this.handleChangeInput}/>
                    <Form.Field required control={Input} type='email' label='Email' placeholder='joe@schmoe.com' id="email" onChange={this.handleChangeInput}/>
                </Form.Group>
                <Form.Field required control={Checkbox} label='I agree to the Terms and Conditions' id='terms'/>

                <Message error header='There was some errors with your submission'
                    list={arrayOfErrors}/>
                <Message success header='Delivery information saved'/>

                <Button type='submit'>Submit</Button>
            </Form>

            <div className="shipping__total">
                <h4>Chart: ${chartPrice}</h4>
                <h4>Delivery: ${deliveryPrice}</h4>
                <h3>Total to Pay: <span>${chartPrice + deliveryPrice}</span></h3>
            </div>

            <Divider />
            <div className="shipping__buttons">
                <Button icon labelPosition='left' primary disabled={false} onClick={() => {this.props.goStep1()}}>
                    Previous
                    <Icon name='left arrow' />
                </Button>
                <Button icon labelPosition='right' primary disabled={!submitSuccess} onClick={() => {this.props.goStep3()}}>
                    Next
                    <Icon name='right arrow' />
                </Button>
            </div>
        </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveBuyerData: (data) => dispatch({ type: 'SAVE_BUYER_DATA', data }) 
    }
}
export default connect(null,mapDispatchToProps)(Shipping);
