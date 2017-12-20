import React, { Component } from 'react';
import { Table, Grid, Header,Button, Icon,Dimmer,Loader } from 'semantic-ui-react'
import Header1 from './header'
import Tabler from './tablerow'
import Postad from './postad';
export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            total:'',
            active:false
        }
    }
    componentDidMount() {
        console.log("componentdid mount");
        fetch('http://localhost:8080/cart/getcart?userId='+sessionStorage.getItem('userId'),{
          method:'GET',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
          }
      }).then((response)=>response.json())
          .then((responseJson)=>{
              if(!responseJson.empty){  
                this.setState({
                      active:false,
                      data:responseJson.productDetails,
                      total:responseJson.totalPrice
                  })
              }
          })
          .catch((error)=>{
              console.log(error);
              console.log("erooooooooooooooor");
              this.setState({
                active:false,
            }) 
          });
    }
    render(){
       const {active}=this.state
        return(
            <div>
                <Dimmer active={active}>
      <Loader />
             </Dimmer>
                <Header1/>
                <br/><br/><br/><br/>
                <Grid>
                    <Grid.Column width={2}/>
                    <Grid.Column width={12}>
                    <Header
                    as='h2'
                    icon='cart'
                    content='Your Cart'
                />
            <Table celled structured textAlign='center'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell rowspan='2'>Product Name</Table.HeaderCell>
                <Table.HeaderCell colspan='2'>Price</Table.HeaderCell>
                <Table.HeaderCell rowspan='2'>Your Choice</Table.HeaderCell>
                <Table.HeaderCell rowspan='2'>Delete</Table.HeaderCell>
              </Table.Row>
              <Table.Row>
            <Table.HeaderCell>Buy</Table.HeaderCell>
            <Table.HeaderCell>Rent</Table.HeaderCell>
          </Table.Row>
            </Table.Header>
            <Table.Body>
            {this.state.data.map((product)=><Tabler key={product.productId} productId={product.productId} name={product.productName} buyPrice={product.price} rentPrice={product.rent} choice={product.choice} />)}
    </Table.Body>

            </Table>
            <Header
                    as='h2'
                    icon='money'
                    content={'Your Total :Rs '+this.state.total}
                />
            </Grid.Column>
            <Grid.Column width={2}/>
            </Grid>
            <br/>
                <center>
                    <a href="/"><Button secondary><Icon name='chevron left'/><Icon name='chevron left'/>Continue Shopping</Button></a>
                    <Button primary>Proceed to checkout<Icon name='chevron right'/><Icon name='chevron right'/></Button>
                </center>
                <Postad/>
            </div>
           
        )
        
    }
}