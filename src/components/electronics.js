
import React, { Component } from 'react'
import { Button, Icon, Header, Grid, Card,Dimmer, Loader,Responsive } from 'semantic-ui-react';
import Header1 from './header'
import Pcard from './Pcard';
import Postad from './postad';
import {Link} from 'react-router-dom';
export default class Electronics extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            active:true,
            data:[],
            shouldSidebar:'none'
        }
    }
    w3_open = () =>{
        this.setState({
          shouldSidebar:"block"
        });
      }
      w3_close = () =>{
        this.setState({
          shouldSidebar:"none"
        });
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
        const {active,shouldSidebar}=this.state;
        return (
            <div>
                
                <Dimmer active={active}>
      <Loader />
             </Dimmer>
             <h2><center><div   style={{position:'fixed',bottom:0,backgroundColor:'teal',color:'white',width:'100%',zIndex:1000}} onClick={this.w3_open}>APPLY FILTERS</div></center></h2>
               <div className="w3-sidebar w3-bar-block w3-border-right w3-animate-bottom" style={{display:shouldSidebar,zIndex:2000,width:'100%'}} id="mySidebar">
               <button onClick={this.w3_close} className="w3-bar-item w3-large">Close &times;</button>
               <Link to="/addproduct" className="w3-bar-item w3-button">My Products</Link>
               <Link to="/profilesettings" className="w3-bar-item w3-button">Profile Settings</Link>
               <Link to="/"  onClick={this.handleLogoutClick} className="w3-bar-item w3-button">Log Out</Link>
             </div>

                <Header1 />
                
                <Responsive minWidth={1125}><br /><br /><br /><br /></Responsive>
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
                <center>
                <Grid stackable columns={5}>
                    
                                            <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" type="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        {this.state.data.map((product)=><Grid.Column key={product.productId}><Pcard imgurl={"http://localhost:8080/images/"+product.img1} productname={product.productName} type={product.type} buyprice={product.price} rentprice={product.rent} productId={product.productId} onChange={this.handleproductchange}/></Grid.Column>)}
                   
                </Grid>
                <br/><br/>
                </center>
                <Postad/>
        
            </div>
        )
    }
}