import React from 'react'
import { Card, Icon,Grid } from 'semantic-ui-react'

const extra = (
 <Grid columns='equal'>
   <Grid.Column>
  <a>
    <Icon name='write' />
    Edit it 
  </a>  
  </Grid.Column>
  <Grid.Column>
   <a>
    <Icon name='remove' />
    Delete it
  </a>
  </Grid.Column>
  </Grid>
)

const Mpcard = (props) => (
  <a href="productdescription"><Card
    image={props.imgurl}
    header={props.productname}
    meta={props.category}
    description={'Buy: Rs'+props.buyprice +'  Rent: Rs' + props.rentprice}
    extra={extra}
  /></a>
)

export default Mpcard