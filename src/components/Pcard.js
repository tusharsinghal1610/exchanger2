import React, { Component } from 'react'
import { Card, Icon, Grid,Image } from 'semantic-ui-react'


export default class Pcard extends React.Component{
  constructor(props){
  super(props);
  this.state={
    isCarted:false
  }
  }
  handleCartItClick=()=>{
    console.log(this.props.productId+"wooooooooooooo");
    fetch('http://localhost:8080/cart?productId='+ this.props.productId+'&userId='+ sessionStorage.getItem('userId') +'&productName='+this.props.productname+'&price='+this.props.buyprice+'&rent='+this.props.rentprice, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  }).then((response) => response.json())
      .then((responseJson) => {
          if (responseJson.success) {
              this.setState({
                isCarted:true
              });
              console.log("PRODUCT ADDED TO CART");    
          }
      })
      .catch((error) => {
          console.log(error);
          console.log("erooooooooooooooor");
          this.setState({
              active: true,
              errorHeader: 'error!',
              errorMessage: 'an unexpected error occured'
          })
      });
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
      {(this.state.isCarted)?<a onClick={this.handleCartItClick}>
        <Icon name='cart' />
        Decart it
  </a>:<a onClick={this.handleCartItClick}>
        <Icon name='cart' />
        Cart it
  </a>}
    </Grid.Column>
    <Grid.Column>
      <a>
        <Icon name='shopping bag' />
        Buy/rent Now
  </a>
    </Grid.Column>
  </Grid>

    </Card.Content>
  </Card>
  )
  }
}