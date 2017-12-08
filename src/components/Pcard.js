import React from 'react'
import { Card, Icon, Grid,Image } from 'semantic-ui-react'


const Pcard = (props) => (
  <a href="productdescription"><Card>
    <Image src={props.imgurl} height='270'/>
    <Card.Content>
      <Card.Header>{props.productname}</Card.Header>
      <Card.Meta>{props.type}</Card.Meta>
      <Card.Description><Grid columns='equal'>
        <Grid.Column>
          <a>
            <Icon name='money' />
            Rent: Rs {props.rentprice}
          </a>
        </Grid.Column>
        <Grid.Column>
          <a>
            <Icon name='money' />
            Buy: Rs {props.buyprice}
          </a>
        </Grid.Column>
      </Grid>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Grid columns='equal'>
    <Grid.Column>
      <a>
        <Icon name='cart' />
        Cart it
  </a>
    </Grid.Column>
    <Grid.Column>
      <a>
        <Icon name='shopping bag' />
        Buy Now
  </a>
    </Grid.Column>
  </Grid>

    </Card.Content>
  </Card></a>
)

export default Pcard