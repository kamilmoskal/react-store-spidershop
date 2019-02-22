import React, { Component } from 'react';
import './Shipping.scss';
import { Divider, Button, Icon, Form, TextArea, Radio, Checkbox, Input, Dropdown, Select } from 'semantic-ui-react';

class Shipping extends Component {
    state = { value: 0}
    handleChange = (e, { value }) => this.setState({ value })
    submitForm = () => {
        console.log('submitted')
    }
    render(){
        const { totalPrice } = this.props;
        const { value } = this.state;
    return (
        <div className='shipping'>

            <h1>Delivery method</h1>
            <Form onSubmit={this.submitForm}>
                <h4>Payment in advance</h4>
                <Form.Field>
                    <Radio
                        label='Delivery method $24'
                        name='radioGroup'
                        value={24}
                        checked={value === 24}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Delivery method $15'
                        name='radioGroup'
                        value={15}
                        checked={value === 15}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Delivery method $21'
                        name='radioGroup'
                        value={21}
                        checked={value === 21}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            
                <h4>Payment at delivery</h4>
                <Form.Field>
                    <Radio
                        label='Delivery method $14'
                        name='radioGroup'
                        value={14}
                        checked={value === 14}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Delivery method $17'
                        name='radioGroup'
                        value={17}
                        checked={value === 17}
                        onChange={this.handleChange}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Message for seller</label>
                    <TextArea autoHeight placeholder='Leave message for seller' />
                </Form.Field>

                <Button type='submit'>Submit</Button>
            </Form>
        
        
            <Divider />
            <h1>Consignee of the shipment</h1>
            <Form onSubmit={this.submitForm}>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='First Name' placeholder='First Name' />
                    <Form.Field required control={Input} label='Last Name' placeholder='Last Name' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='Adress' placeholder='Adress' />
                    <Form.Field required control={Input} pattern="[0-9]{2}-[0-9]{3}" label='ZIP code' placeholder='xx-xxx' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} label='City' placeholder='City' />
                    <Form.Field required control={Select} options={[{ key: 'pl', value:'Poland', text: 'Poland' }]} label='Country' placeholder='Country' search searchInput={{ id: 'form-select-country' }}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field required control={Input} type='tel' label='Phone number' placeholder='Phone number' />
                    <Form.Field required control={Input} type='email' label='Email' placeholder='joe@schmoe.com' />
                </Form.Group>
                <Form.Field required control={Checkbox} label='I agree to the Terms and Conditions' />

                <Button type='submit'>Submit</Button>
            </Form>

            <div className="shipping__total">
                <h4>Chart: ${totalPrice}</h4>
                <h4>Delivery: ${value}</h4>
                <h3>Total to Pay: <span>${totalPrice + value}</span></h3>
            </div>

            <Divider />
            <div className="shipping__buttons">
                <Button icon labelPosition='left' primary disabled={false} onClick={() => {this.props.goStep1()}}>
                    Previous
                    <Icon name='left arrow' />
                </Button>
                <Button icon labelPosition='right' primary disabled={false} onClick={() => {this.props.goStep3()}}>
                    Next
                    <Icon name='right arrow' />
                </Button>
            </div>
        </div>
        )
    }
}

export default Shipping
