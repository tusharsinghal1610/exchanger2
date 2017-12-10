import React, { Component } from 'react'
import { Card, Icon, Grid,Image } from 'semantic-ui-react'


export default class Mpcard extends React.Component{
  constructor(props){
  super(props);
  }
  
  render(){
    return(
    <Card>
    <Image src={this.props.imgurl} height='270'/>
    <Card.Content>
      <Card.Header>{this.props.productname}</Card.Header>
      <Card.Meta>{this.props.type}</Card.Meta>
      <Card.Description><Grid columns='equal'>
        <Grid.Column>
          <a>
            <Icon name='money' />
            Rent: Rs {this.props.rentprice}
          </a>
        </Grid.Column>
        <Grid.Column>
          <a>
            <Icon name='money' />
            Buy: Rs {this.props.buyprice}
          </a>
        </Grid.Column>
      </Grid>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <Grid columns='equal'>
    <Grid.Column>
      <center>
      <a href={"editproduct/"+this.props.productId}>
        <Icon name='edit'/>
        Edit it
  </a></center>
    </Grid.Column>
    <Grid.Column>
      <center>
      <a>
        <Icon name='trash' />
         remove
  </a></center>
    </Grid.Column>
  </Grid>

    </Card.Content>
  </Card>
  )
  }
}