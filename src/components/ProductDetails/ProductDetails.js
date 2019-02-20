import React from 'react';
import './ProductDetails.scss';
import { Card, Icon, Image, Button, Divider} from 'semantic-ui-react';

const ProductDetails = () => {
  return (
    <Card centered={true} className="product-details">
        {/* <Image fluid={true} src='http://via.placeholder.com/500x300'/> */}
        <div className="img-container">
            <Image fluid={true} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brachypelma_boehmei1.jpg/240px-Brachypelma_boehmei1.jpg'/>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brachypelma_boehmei1.jpg/240px-Brachypelma_boehmei1.jpg'/>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brachypelma_boehmei1.jpg/240px-Brachypelma_boehmei1.jpg'/>
        </div>
        <Card.Content>
            <Card.Header>Brachypelma Boehmei</Card.Header>
            <Card.Meta>
                <span className='date'>available amount: 87</span>
            </Card.Meta>
            <Card.Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, reprehenderit!</Card.Description>
            <Divider />
            <Card.Header>$15
                <Button animated='vertical' floated='right'>
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

export default ProductDetails;