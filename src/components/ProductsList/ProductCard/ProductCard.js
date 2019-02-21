import React, { Component } from 'react';
import './ProductCard.scss';
import { Card, Icon, Image, Button, Modal, Dimmer, Loader, Segment} from 'semantic-ui-react';

class ProductCard extends Component {
    state = { imgLoading: true }
    render(){
        const { product } = this.props;
        return (
            <Card style={this.props.transition} className="product-card">
                
                <Modal size='large' closeIcon trigger={
                    <Segment>
                        <Dimmer active={this.state.imgLoading}>
                            <Loader />
                        </Dimmer>
                        <div className="img-container">
                       
                            <Image onLoad={() => {this.setState({ imgLoading: false })}} fluid={true} src={require(`../../../img/${product.img}.jpg`)} style={{cursor: 'pointer'}}/>
                        </div>
                    </Segment>
                }>
                    <Image fluid={true} src={require(`../../../img/${product.img}.jpg`)}/>
                </Modal>
    
                <Card.Content>
                    <Card.Header>{product.species} {product.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>available amount: {product.stock}</span>
                    </Card.Meta>
                    <Card.Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, reprehenderit!</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Card.Header>${product.price}
                        <Button animated='vertical' floated='right' onClick={() => {this.props.addToChartList(product.id)}}>
                            <Button.Content hidden>Add</Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Meta>stadium: {product.stadium}</Card.Meta>   
                </Card.Content>
            </Card>
            
        )
    }
}

export default ProductCard;
