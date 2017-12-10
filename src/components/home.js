
import React, { Component } from 'react';
import { Button, Icon, Header, Grid, Card } from 'semantic-ui-react';
import Header1 from './header';
import Pcard from './Pcard';
import Postad from './postad'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            kyp:"hello"
        }
    }
    handleclick1=()=>{
        sessionStorage.setItem("product.hello","how r u");
        console.log(sessionStorage.getItem("product."+this.state.kyp));
        sessionStorage.removeItem("product");
        
        console.log(sessionStorage.getItem("product."+this.state.kyp));
    }
    render() {
        return (
            <div>
                <Header1 />
                <br /><br /><br /><br />
                <center>
                    <Button.Group>
                    <a href="electronics"><Button basic color='grey'><b><Icon name='mobile' /> Electronics</b></Button></a>
                        <Button basic color='grey' onClick={this.handleclick1}><b><Icon name='bed' /> Furnitures</b></Button>
                        <Button basic color='grey'><b><Icon name='car' /> Cars</b></Button>
                        <Button basic color='grey'><b><Icon name='like' /> Pets</b></Button>
                        <Button basic color='grey'><b><Icon name='building' /> Properties</b></Button>
                        <Button basic color='grey'><b><Icon name='home' /> Home Appliances</b></Button>
                    </Button.Group>
                </center>
                <Header
                    as='h2'
                    icon='shopping bag'
                    content='Trending Products'
                />
                <Grid padded>
                    <Grid.Row columns={5} stackable>
                        <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                        <Grid.Column>
                        <Pcard imgurl="Assets/wireframe.png" productname="nokia lumia s7" category="phone" buyprice="40000" rentprice="500"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Postad/>
            </div>
        )
    }
}