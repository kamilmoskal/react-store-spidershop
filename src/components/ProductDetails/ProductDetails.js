import React from 'react';
import './ProductDetails.scss';
import { Card, Icon, Image, Button, Divider} from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductDetails = ({product, addToChartList}) => {
    return (
        <Card centered={true} className="product-details">
            <Carousel className="img-carousel" showIndicators={false} emulateTouch={true} key={product.id}>
                <div>
                    <img src={require(`../../img/${product.img}.jpg`)}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={require(`../../img/${product.img}.jpg`)}/>
                </div>
                <div>
                    <img src={require(`../../img/${product.img}.jpg`)}/>
                </div>
            </Carousel>
        
            <Card.Content>
                <Card.Header>{product.species} {product.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>available amount: {product.stock}</span>
                </Card.Meta>
                <Card.Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, et debitis. Commodi, voluptates id! Suscipit hic nesciunt vitae excepturi praesentium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum corporis saepe excepturi nulla? </Card.Description>
                <Divider />
                <Card.Header>${product.price}
                    <Button animated='vertical' floated='right' onClick={() => {addToChartList(product.id)}}>
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

export default ProductDetails;
