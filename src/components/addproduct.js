import React, { Component } from 'react';
import { Header, Grid, Button, Icon,Dimmer,Loader } from 'semantic-ui-react';
import Header1 from './header';
import Mpcard from './mpcard';
import Postad from './postad';
import {Link} from 'react-router-dom';
export default class Addp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            active:true,
            data:[]
        }
    }
    componentDidMount() {
        console.log("componentdid mount");
      fetch('http://localhost:8080/user/myProducts?userId='+sessionStorage.getItem('userId'),{
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
                    data:responseJson.myProducts
                })
            }
        })
        .catch((error)=>{
            console.log(error);
            console.log("erooooooooooooooor");
            this.setState({
              active:true,
          }) 
        });
    }

    render(){
        const {active}=this.state;
        return(
            <div>
                <Dimmer active={active}>
      <Loader />
             </Dimmer>
                <Header1/>
                <br/><br/><br/><br/>
                <Grid>
                    <Grid.Column width={1}/>
                    <Grid.Column width={14}>
                    <Header
                    as='h2'
                    icon='configure'
                    content='My Products'
                />
                <Grid padded>
                <Grid.Row columns={4} stackable>
                    <Grid.Column>
                    <Mpcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                    </Grid.Column>
                    <Grid.Column>
                    <Mpcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                    </Grid.Column>
                    <Grid.Column>
                    <Mpcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                    </Grid.Column>
                    {this.state.data.map((product)=><Grid.Column key={product.productId}><Mpcard imgurl={"http://localhost:8080/images/"+product.img1} productname={product.productName} type={product.type} buyprice={product.price} rentprice={product.rent} productId={product.productId} onChange={this.handleproductchange}/></Grid.Column>)}
                </Grid.Row>
            </Grid>
            <center>
            <Link to="/addpform"><Button primary size='large' icon='add square' content='Add Product' /></Link>
            </center>
                        </Grid.Column>
                    <Grid.Column width={1}/>
                    </Grid>
                    <Postad/>
                </div>
        )
    }
}