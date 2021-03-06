import React, { Component } from 'react'
import { Card, Icon, Grid,Image } from 'semantic-ui-react'

import {Link} from 'react-router-dom';

export default class Pcard extends React.Component{
  constructor(props){
  super(props);
  this.state={
    isCarted:false
  }
  }
  handleCartItClick=()=>{
    console.log(this.props.productId+"wooooooooooooo");
    sessionStorage.setItem(this.props.productId,true);
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
handleDecartItClick=()=>{
  sessionStorage.removeItem(this.props.productId,false);
  fetch('http://localhost:8080/cart/delete?userId=' + sessionStorage.getItem('userId') + '&productId=' + this.props.productId, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}).then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.success) {
            this.setState({
              isCarted:false
            });
            console.log("PRODUCT deleted from CART");    
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
    <Link to={"/productdescription/"+this.props.productId}><Image src={this.props.imgurl} height='270'/>
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
    </Card.Content></Link>
    <Card.Content extra>
    <Grid columns='equal'>
    <Grid.Column>
      <center>
      {(sessionStorage.getItem(this.props.productId))?<a onClick={this.handleDecartItClick}>
        <Icon name='cart'/>
        Decart it
  </a>:<a onClick={this.handleCartItClick}>
        <Icon name='cart' />
        Cart it
  </a>}</center>
    </Grid.Column>
    <Grid.Column>
      <center>
      <Link to={"http://localhost:3000/instantbuy/"+this.props.productId}>
        <Icon name='shopping bag' />
        Buy/rent Now
  </Link></center>
    </Grid.Column>
  </Grid>

    </Card.Content>
  </Card>
  )
  }
}