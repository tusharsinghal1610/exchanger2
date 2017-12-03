import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Dropdown, Select, Dimmer, Icon } from 'semantic-ui-react'
import Header1 from './header'


export default class login extends Component {
    state = {
        username: '',
        password: '',
    }
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
    handleClose = () => this.setState({ active: false })
    handleSubmit = e => {
        if (this.state.username.length < 1 || this.state.password.length < 1) {
            this.setState({ errorHeader: 'Field is Empty' })
            this.setState({ errorMessage: 'All Fields are Required!' })
            this.setState({ active: true });
        }
        else {
            fetch('http://localhost:8080/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": this.state.username,
                    "password": this.state.password,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.success == false) {
                        console.log("login failed");
                        this.setState({
                            active: true,
                            errorHeader: "you can't be logged in",
                            errorMessage: responseJson.error

                        })
                    } else if (responseJson.success) {
                        console.log("logged in");
                        this.setState({
                            active: true,
                            errorHeader: 'You are logged in!',
                            errorMessage: 'logged in'
                        })
                    }
                })
                .catch((error) => {
                    console.log(error);
                    console.log("erooooooooooooooor");
                    this.setState({
                        active: true,
                        errorHeader: 'error!',
                        errorMessage: 'an unexpected error occured'
                    })
                });
        }
    }
    render() {

        const { username, password, active,errorHeader,errorMessage } = this.state;
        var mystyle = {
            backgroundColor: '#ebebe0'
        }
        return (
            <div>
                <Header1 />
                <div style={mystyle}>

                    <br /><br /><br /><br />
                    <Grid
                        centered
                    >
                        <Grid.Column computer={5} mobile={16}>
                            <Header as='h2' color='teal' textAlign='center'>
                                Log In
        </Header>
                            <Form size='large' onSubmit={this.handleSubmit}>
                                <Segment stacked>



                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Username'
                                        name='username'
                                        value={username} onChange={this.handleChange}
                                    />

                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        value={password} onChange={this.handleChange}
                                    />
                                    <Form.Button type='submit' color='teal' fluid size='large'>Login</Form.Button>
                                </Segment>
                            </Form>
                            <Segment>
                               <center> New to us? <a href="signup"><b>Sign up</b></a></center>
                           </Segment>
                            <Dimmer
                                active={active}
                                onClickOutside={this.handleClose}
                                page
                            >
                                <Header as='h2' icon inverted>

                                    {errorHeader}!
            <Header.Subheader>{errorMessage}</Header.Subheader>
                                </Header>
                            </Dimmer>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
