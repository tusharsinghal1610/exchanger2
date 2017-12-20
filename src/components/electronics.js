
import React, { Component } from 'react'
import { Button, Icon, Header, Grid, Card,Dimmer, Loader } from 'semantic-ui-react';
import Header1 from './header'
import Pcard from './Pcard';
import Postad from './postad';
export default class Electronics extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            active:true,
            data:[]
        }
    }
    handleproductchange=()=>{
        console.log("yoooooooooooooohooooooooooooooooooohohohoho");
    }
    componentDidMount() {
        console.log("componentdid mount");
      fetch('http://localhost:8080/fetch/category?category=electronics',{
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
                    data:responseJson.productList
                });


            }
        })
        .catch((error)=>{
            console.log(error);
            console.log("erooooooooooooooor");
            this.setState({
              active:true,
          }) 
        });


        fetch('http://localhost:8080/cart/getCartId?userId='+sessionStorage.getItem("userId"),{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }).then((response)=>response.json())
            .then((responseJson)=>{
                sessionStorage.clear();
                sessionStorage.setItem('userId',localStorage.getItem('userId'));
                sessionStorage.setItem('firstname',localStorage.getItem('firstname'));
                sessionStorage.setItem('email',localStorage.getItem('email'));
                responseJson.products.map((product)=>sessionStorage.setItem(product,true));
            })
            .catch((error)=>{
                console.log(error);
                console.log("erooooooooooooooor");
                this.setState({
                  active:true,
              }) 
            });
    }

    render() {
        const {active}=this.state;
        return (
            <div>
                <Dimmer active={active}>
      <Loader />
             </Dimmer>
                <Header1 />
                <br /><br /><br /><br />
                <center>
                    <Button.Group>
                        <Button basic color='grey'><b><Icon name='mobile' /> Mobiles</b></Button>
                        <Button basic color='grey'><b><Icon name='television' /> television</b></Button>
                        <Button basic color='grey'><b><Icon name='laptop' /> Laptops</b></Button>
                        <Button basic color='grey'><b><Icon name='window minimize' />Air Conditioners</b></Button>
                        <Button basic color='grey'><b><Icon name='shopping bag' /> Others</b></Button>
                    </Button.Group>
                </center>
                <Header
                    as='h2'
                    icon='mobile'
                    content='Electronics'
                />
                <Grid padded>
                    <Grid.Row columns={5} stackable>
                                            <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" type="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        {this.state.data.map((product)=><Grid.Column key={product.productId}><Pcard imgurl={"http://localhost:8080/images/"+product.img1} productname={product.productName} type={product.type} buyprice={product.price} rentprice={product.rent} productId={product.productId} onChange={this.handleproductchange}/></Grid.Column>)}
                    </Grid.Row>
                </Grid>
                <Postad/>
            </div>
        )
    }
}