import React, { Component } from 'react'
import { Card, Icon, Grid,Image } from 'semantic-ui-react'

import { Redirect } from 'react-router';

export default class Mpcard extends React.Component{
  constructor(props){
  super(props);
  this.state={
    redirection:false
  }
  }
  handleRemove=()=>{
    fetch('http://localhost:8080/upload/remove?userId='+sessionStorage.getItem("userId")+'&productId='+this.props.productId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((responseJson) => {
       this.setState({
         redirection:true
       });
      })
      .catch((error) => {
        console.log(error);
        console.log("erooooooooooooooor");

      });
  }
  render(){
    if (this.state.redirection) {
      return <Redirect to='/addproduct'/>;
    }
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
      <a onClick={this.handleRemove}>
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