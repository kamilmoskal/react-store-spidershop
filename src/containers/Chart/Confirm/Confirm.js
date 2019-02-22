import React from 'react';
import './Confirm.scss';
import { Divider, Button, Icon } from 'semantic-ui-react';

const Confirm = (props) => {
  return (
    <div className='confirm'>

        <p>payment in advance</p>
        <p>asd</p>
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
