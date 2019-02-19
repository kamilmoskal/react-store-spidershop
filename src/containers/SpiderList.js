import React, { Component } from 'react';
import './SpiderList.scss';
import SpiderCard from '../components/SpiderCard';
import { Card, Container } from 'semantic-ui-react';
import { Transition, animated } from 'react-spring/renderprops'
import Filter from '../components/Filter';

const abc = [1,2,3,4,5,6,7,8]
class SpiderList extends Component {
  render() {
    return (
        <Container>
            <Filter />
            <Card.Group stackable={true} itemsPerRow={4} doubling={true}>
           
                <Transition
            items={abc}
            trail={200}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
                {e => props => <SpiderCard transition={props}/>}
            </Transition>
        
            </Card.Group>
        </Container>
    )
  }
}

export default SpiderList;

 