import React, { Component } from 'react'
import { Table, Grid, Header,Button, Icon } from 'semantic-ui-react'
import Header1 from './header'
import Tabler from './tablerow'
export default class Cart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       
        return(
            <div>
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
              </Table.Row>
              <Table.Row>
            <Table.HeaderCell>Buy</Table.HeaderCell>
            <Table.HeaderCell>Rent</Table.HeaderCell>
          </Table.Row>
            </Table.Header>
            <Table.Body>
            <Tabler/><Tabler/><Tabler/><Tabler/>
    </Table.Body>

            </Table>
            <Header
                    as='h2'
                    icon='money'
                    content={'Your Total :'+'rs 40000'}
                />
            </Grid.Column>
            <Grid.Column width={2}/>
            </Grid>
            <br/>
                <center>
                    <a Href="/"><Button secondary><Icon name='chevron left'/><Icon name='chevron left'/>Continue Shopping</Button></a>
                    <Button primary>Proceed to checkout<Icon name='chevron right'/><Icon name='chevron right'/></Button>
                </center>
            </div>
           
        )
        
    }
}