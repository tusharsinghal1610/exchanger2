import React, { Component } from 'react';
import { Header, Grid, Button, Icon } from 'semantic-ui-react';
import Header1 from './header';
import Mpcard from './mpcard'
export default class Addp extends React.Component{
    render(){
        return(
            <div>
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
                </Grid.Row>
            </Grid>
            <center>
            <Button primary size='large' icon='add square' content='Add Product' />
            </center>
                        </Grid.Column>
                    <Grid.Column width={1}/>
                    </Grid>

                </div>
        )
    }
}