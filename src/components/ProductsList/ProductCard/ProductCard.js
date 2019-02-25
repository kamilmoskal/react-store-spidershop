import React, { Component } from 'react';
import './ProductCard.scss';
import { Card, Icon, Image, Button, Modal, Dimmer, Loader, Segment, Transition} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
    state = { imgLoading: true, clickEffect: true }
    addToCart = (e, id) => {
       this.props.addToChartList(id)
       this.chartOnClickEffect()
      /*  let btn = e.target
       btn.setAttribute("style","transition: all .5s ease; transform: scale(1.2); background-color: rgba(0,0,0,0.3)");
       setTimeout(() => btn.removeAttribute("style"), 500); */
    }
    chartOnClickEffect = () => this.setState({ clickEffect: !this.state.clickEffect })
    render(){
        const { product } = this.props;
        const { clickEffect } = this.state
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
                            <Transition animation='bounce' duration={1000} visible={clickEffect}>
                        <Button animated='vertical' floated='right' onClick={(e) => {this.addToCart(e,product.id)}}>
                            <Button.Content hidden>Add</Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>
                            </Transition>
                    </Card.Header>
                    <Card.Meta>stadium: {product.stadium}</Card.Meta>   
                </Card.Content>
            </Card>
            
        )
    }
}

export default ProductCard;

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        species: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        stadium: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    }).isRequired
};
  