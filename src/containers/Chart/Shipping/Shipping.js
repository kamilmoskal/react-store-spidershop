import React from 'react';
import './Shipping.scss';
import { Divider, Button, Icon } from 'semantic-ui-react';

const Shipping = (props) => {
  return (
    <div className='shipping'>
        <p>asd</p>
        <Divider />
        <div className="shipping__buttons">
            <Button icon labelPosition='left' primary disabled={false} onClick={() => {props.goStep1()}}>
                Previous
                <Icon name='left arrow' />
            </Button>
            <Button icon labelPosition='right' primary disabled={false} onClick={() => {props.goStep3()}}>
                Next
                <Icon name='right arrow' />
            </Button>
        </div>
    </div>
  )
}

export default Shipping
