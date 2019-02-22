import React from 'react';
import './Billing.scss';
import { Divider, Button, Icon } from 'semantic-ui-react';

const Billing = (props) => {
    return (
        <div className='billing'>

            <p>payment in advance</p>
            <p>asd</p>
            <Divider />
            <div className="billing__buttons">
                <Button icon labelPosition='left' primary disabled={false} onClick={() => {props.goStep2()}}>
                    Previous
                    <Icon name='left arrow' />
                </Button>
                <Button icon labelPosition='right' primary disabled={false} onClick={() => {props.goStep4()}}>
                    Next
                    <Icon name='right arrow' />
                </Button>
            </div>
        </div>
    )
}

export default Billing
