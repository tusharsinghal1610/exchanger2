import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Dropdown, Select, Dimmer, Icon,Responsive } from 'semantic-ui-react';
import Header1 from './header';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

export default class login extends Component {
    state = {
        email: '',
        password: '',
        redirection:false
    }
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
    handleClose = () => this.setState({ active: false });
    handleSubmit = e => {
        if (this.state.email.length < 1 || this.state.password.length < 1) {
            this.setState({ errorHeader: 'Field is Empty' })
            this.setState({ errorMessage: 'All Fields are Required!' })
            this.setState({ active: true });
        }
        else {
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": this.state.email,
                    "password": this.state.password,
                })
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.success == false) {
                        console.log("login failed");
                        this.setState({
                            active: true,
                            errorHeader: "you can't be logged in"
                        })
                    } else if (responseJson.success) {
                        console.log("registration done");    
                        sessionStorage.setItem('email',this.state.email);
                        sessionStorage.setItem('firstname',responseJson.firstname); 
                        sessionStorage.setItem('userId',responseJson.userid); 
                        localStorage.setItem('email',this.state.email);
                        localStorage.setItem('firstname',responseJson.firstname);
                        localStorage.setItem('userId',responseJson.userid);
                        responseJson.products.map((product)=>localStorage.setItem(product,true));
                        console.log("logged in");

                        this.setState({
                            redirection:true,
                            errorHeader: "you are logged in"
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

        const { email, password, active,errorHeader,errorMessage } = this.state;
        var mystyle = {
            backgroundColor: '#ebebe0'
        }
        if (this.state.redirection) {
            return <Redirect to=''/>;
          }
        return (
            <div>
                <Header1 />
                <div style={mystyle}>

                <Responsive minWidth={1125}><br /><br /><br /><br /></Responsive>
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
                                        placeholder='email'
                                        name='email'
                                        value={email} onChange={this.handleChange}
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
                               <center> New to us? <Link to="signup"><b>Sign up</b></Link></center>
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
