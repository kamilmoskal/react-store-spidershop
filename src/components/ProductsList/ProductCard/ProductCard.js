import React from 'react';
import './ProductCard.scss';
import { Card, Icon, Image, Button, Modal, Dimmer, Loader, Segment} from 'semantic-ui-react';

const ProductCard = (props) => {
    const { product } = props;
    return (
        <Card style={props.transition} className="product-card">
            
            <Modal size='large' closeIcon trigger={
                <Segment>
                    <Dimmer active={false}>
                        <Loader />
                    </Dimmer>
                    <div className="img-container">
                   
                        <Image fluid={true} src={require(`../../../img/${product.img}.jpg`)} style={{cursor: 'pointer'}}/>
                    </div>
                </Segment>
            }>
                <Image fluid={true} src={require(`../../../img/${product.img}.jpg`)}/>
            </Modal>

            <Card.Content>
                <Card.Header>Brachypelma Boehmei</Card.Header>
                <Card.Meta>
                    <span className='date'>available amount: 87</span>
                </Card.Meta>
                <Card.Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, reprehenderit!</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Card.Header>$15
                    <Button animated='vertical' floated='right' onClick={() => {props.addToChartList(product.id)}}>
                        <Button.Content hidden>Add</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                </Card.Header>
                <Card.Meta>stadium: L1/L2</Card.Meta>   
            </Card.Content>
        </Card>
        
    )
}

export default ProductCard;
