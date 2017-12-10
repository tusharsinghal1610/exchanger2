import React, { Component } from 'react';
import { Table, Dropdown, Button,Dimmer,Header } from 'semantic-ui-react';
import { Redirect } from 'react-router';
const options = [
    { key: 1, text: <div><b>Buy</b>(Default)</div>, value: 1 },
    { key: 2, text: <b>Rent</b>, value: 2 },
]
export default class Tabler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.choice,
            redirection: false,
            active: false
        }
    }
    handleRemove = () => {
        fetch('http://localhost:8080/cart/delete?userId=' + sessionStorage.getItem('userId') + '&productId=' + this.props.productId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success) {
                    this.setState({
                        redirection: true
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                console.log("erooooooooooooooor");
            });
    }

    handleChange = (e, { value }) => {
        console.log("here is your value" + value);
        if (value == 1) {
            if (this.props.buyPrice) {
                this.setState({ value: value });
                fetch('http://localhost:8080/cart/update?userId=' + sessionStorage.getItem('userId') + '&productId=' + this.props.productId + '&choice=' + value, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((response) => response.json())
                    .then((responseJson) => {

                    })
                    .catch((error) => {
                        console.log(error);
                        console.log("erooooooooooooooor");
                    });
            }
            else {
                this.setState({
                    active: true,
                    errorMessage: "product is available only for rent"
                });
            }

        }
        else {
            if (this.props.rentPrice) {
                this.setState({ value: value });
                fetch('http://localhost:8080/cart/update?userId=' + sessionStorage.getItem('userId') + '&productId=' + this.props.productId + '&choice=' + value, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then((response) => response.json())
                    .then((responseJson) => {

                    })
                    .catch((error) => {
                        console.log(error);
                        console.log("erooooooooooooooor");
                    });
            }
            else {
                this.setState({
                    active: true,
                    errorMessage: "product is available only for buy"
                });
            }
        }


    }
    
    handleClose = () => this.setState({ active: false });
    render() {
        const { value,active,errorMessage } = this.state;
        if (this.state.redirection) {
            return <Redirect to='/cart' />;
        }
        return (
            <Table.Row>
            <Dimmer
                active={active}
                onClickOutside={this.handleClose}
                page
            >
                <Header as='h2' icon inverted>

                    Product not available for the required operation!
<Header.Subheader>{errorMessage}</Header.Subheader>
                </Header>
            </Dimmer>

            
                <Table.Cell>{this.props.name}</Table.Cell>
                <Table.Cell>{this.props.buyPrice}</Table.Cell>
                <Table.Cell>{this.props.rentPrice}</Table.Cell>
                <Table.Cell>   <Dropdown compact onChange={this.handleChange} options={options} placeholder='Choose an option' selection value={value} /> </Table.Cell>
                <Table.Cell> <Button
                    onClick={this.handleRemove}
                    color='red'
                    icon='trash'
                    label={{ basic: true, color: 'red', content: 'Remove' }}
                /></Table.Cell>
            </Table.Row>
                

        )
    }
}