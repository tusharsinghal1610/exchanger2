
import React, { Component } from 'react'
import { Button, Icon, Header, Grid, Card } from 'semantic-ui-react'
import Header1 from './header'
import Pcard from './Pcard'
export default class Electronics extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
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
                
            </div>
        )
    }
}