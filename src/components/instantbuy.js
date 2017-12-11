import React, { Component } from 'react';
import { Table, Grid, Header, Button, Icon, Dimmer, Loader, Image } from 'semantic-ui-react'
import Header1 from './header'
import Tabler from './tablerow'
export default class InstantBuy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: '',
            active: false
        }
    }
    componentDidMount() {
        console.log("componentdid mount");
        fetch('http://localhost:8080/cart/getcart?productId=' + this.props.match.params.productId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                if (!responseJson.empty) {
                    this.setState({
                        productName: responseJson.productName,
                        price: responseJson.price,
                        rent: responseJson.rent,
                        category: responseJson.category,
                        type: responseJson.type,
                        description: responseJson.description,
                        img1: responseJson.img1
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                console.log("erooooooooooooooor");
                this.setState({
                    active: false,
                })
            });
    }
    render() {
        const { active, productName, price, rent, category, type, description, img1 } = this.state
        return (
            <div>
                <Dimmer active={active}>
                    <Loader />
                </Dimmer>
                <Header1 />
                <br /><br /><br /><br />
                <Grid>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                        <Header
                            as='h2'
                            icon='shopping bag'
                            content='Instant Buy/Rent'
                        />
                        <Grid>
                            <Grid.Column width={5}>
                                <Image src={"http://localhost:8080/images/" + img1} />
                            </Grid.Column>
                            <Grid.Column width={1} />
                            <Grid.Column width={5}>
                                <b>Product Name:</b><br/>
                                <b>Category:</b><br/>
                                <b>Type:</b><br/>
                                <b>Buy Price:</b><br/>
                                <b>Rent Price:</b><br/>
                                <b>Description:</b>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <b>{productName}</b><br/>
                                <b>{category}</b><br/>
                                <b>{type}</b><br/>
                                <b>{(price)?"Rs. "+price:"Not available"}</b><br/>
                                <b>{(rent)?"Rs. "+rent:"Not available"}</b><br/>
                                <b>{description}</b>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid>
                <br />
                <center>
                    <a href="/"><Button secondary><Icon name='chevron left' /><Icon name='chevron left' />Continue Shopping</Button></a>
                    <Button primary>Take on Rent Now<Icon name='chevron right' /><Icon name='chevron right' /></Button>
                    <Button primary>Buy it Now<Icon name='chevron right' /><Icon name='chevron right' /></Button>
                </center>
            </div>

        )

    }
}